"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/auth-context"
import { ArrowLeft, Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { login, continueAsGuest } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const success = await login(email, password)

    if (success) {
      router.push("/")
    } else {
      setError("Correo o contraseña incorrectos")
      setLoading(false)
    }
  }

  const handleGuestAccess = () => {
    continueAsGuest()
    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-3 sm:px-4 py-4 sm:py-8">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 sm:mb-8 text-sm sm:text-base">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        {/* Login Card */}
        <div className="bg-card border border-[color:var(--border)] rounded-3xl shadow-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-primary-foreground font-bold text-2xl sm:text-3xl">A</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Bienvenido a Aura</h1>
            <p className="text-sm sm:text-base text-muted-foreground">Inicia sesión o entra como invitado para ver la demo completa</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl"
              />
            </div>

            {error && <p className="text-sm text-red-600 text-center">{error}</p>}

            <Button type="submit" className="w-full rounded-xl py-5 sm:py-6 text-base sm:text-lg" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Iniciando sesión...
                </>
              ) : (
                "Iniciar Sesión"
              )}
            </Button>
          </form>

          <Button
            type="button"
            variant="secondary"
            className="w-full rounded-xl py-5 sm:py-6 text-base sm:text-lg"
            onClick={handleGuestAccess}
          >
            Entrar como invitado
          </Button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[color:var(--border)]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-4 text-muted-foreground">¿No tienes cuenta?</span>
            </div>
          </div>

          {/* Register Link */}
          <Link href="/registro">
            <Button variant="outline" className="w-full rounded-xl py-5 sm:py-6 text-base sm:text-lg bg-transparent">
              Crear cuenta nueva
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
