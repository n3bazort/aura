"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  name: string
  email: string
  isGuest?: boolean
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  continueAsGuest: () => void
  logout: () => void
  isLoading: boolean
}

const GUEST_USER: User = {
  name: "Invitado",
  email: "guest@aura.local",
  isGuest: true,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem("aura_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const storedUsers = localStorage.getItem("aura_users")
    const users = storedUsers ? JSON.parse(storedUsers) : []

    const foundUser = users.find((u: User & { password: string }) => u.email === email && u.password === password)

    if (foundUser) {
      const userData = { name: foundUser.name, email: foundUser.email }
      setUser(userData)
      localStorage.setItem("aura_user", JSON.stringify(userData))
      return true
    }

    return false
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const storedUsers = localStorage.getItem("aura_users")
    const users = storedUsers ? JSON.parse(storedUsers) : []

    // Check if user already exists
    if (users.some((u: User & { password: string }) => u.email === email)) {
      return false
    }

    // Add new user
    users.push({ name, email, password })
    localStorage.setItem("aura_users", JSON.stringify(users))

    // Auto login
    const userData = { name, email }
    setUser(userData)
    localStorage.setItem("aura_user", JSON.stringify(userData))

    return true
  }

  const continueAsGuest = () => {
    setUser(GUEST_USER)
    localStorage.setItem("aura_user", JSON.stringify(GUEST_USER))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("aura_user")
  }

  return (
    <AuthContext.Provider value={{ user, login, register, continueAsGuest, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
