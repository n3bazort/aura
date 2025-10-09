"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/lib/auth-context"
import { enviarDatosASheet } from "@/lib/google-sheets"
import { ArrowLeft, Loader2, Check } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const { register } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [userType, setUserType] = useState("Padre/Cuidador")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      return
    }

    setLoading(true)

    try {
      // Enviar datos a Google Sheets (sin contraseña por seguridad)
      await enviarDatosASheet({
        nombre: name,
        email: email,
        telefono: phone,
        tipoUsuario: userType,
        ciudad: city,
      })

      // Simular registro en el sistema
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const success = await register(name, email, password)

      if (success) {
        setSuccess(true)
        setTimeout(() => {
          router.push("/")
        }, 2000)
      } else {
        setError("Este correo ya está registrado")
        setLoading(false)
      }
    } catch (err) {
      setError("Hubo un error al crear la cuenta. Por favor intenta de nuevo.")
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-3xl shadow-2xl p-8 space-y-6 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto">
              <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">¡Cuenta creada exitosamente!</h2>
              <p className="text-muted-foreground">Redirigiendo a la página principal...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        {/* Register Card */}
        <div className="bg-card border border-border rounded-3xl shadow-2xl p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-bold text-3xl">A</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Únete a Aura</h1>
            <p className="text-muted-foreground">Crea tu cuenta para comenzar</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo *</Label>
              <Input
                id="name"
                type="text"
                placeholder="María García"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico *</Label>
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
              <Label htmlFor="phone">Teléfono (opcional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+593 99 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Ciudad (opcional)</Label>
              <Input
                id="city"
                type="text"
                placeholder="Quito, Guayaquil, etc."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="userType">Tipo de usuario</Label>
              <select
                id="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-input bg-background text-foreground"
              >
                <option value="Padre/Cuidador">Padre/Cuidador</option>
                <option value="Profesional">Profesional</option>
                <option value="Familiar">Familiar</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña *</Label>
              <Input
                id="password"
                type="password"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar contraseña *</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="rounded-xl"
              />
            </div>

            {error && <p className="text-sm text-red-600 text-center">{error}</p>}

            <Button type="submit" className="w-full rounded-xl py-6 text-lg" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Creando cuenta...
                </>
              ) : (
                "Crear Cuenta"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-card px-4 text-muted-foreground">¿Ya tienes cuenta?</span>
            </div>
          </div>

          {/* Login Link */}
          <Link href="/login">
            <Button variant="outline" className="w-full rounded-xl py-6 text-lg bg-transparent">
              Iniciar Sesión
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
