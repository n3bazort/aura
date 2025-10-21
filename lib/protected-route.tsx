"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useAuth } from "./auth-context"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Lock } from "lucide-react"

// Rutas públicas (accesibles sin autenticación)
const PUBLIC_ROUTES = [
  "/",
  "/quienes-somos",
  "/login",
  "/registro",
]

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  // Verificar si la ruta actual es pública
  const isPublicRoute = PUBLIC_ROUTES.some(route => pathname === route)

  // Si está cargando, no mostrar nada
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Si es una ruta pública, mostrar el contenido
  if (isPublicRoute) {
    return <>{children}</>
  }

  // Si no está autenticado y no es ruta pública, mostrar modal de registro
  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Dialog open={true}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <DialogTitle className="text-center text-2xl">
                Contenido Exclusivo
              </DialogTitle>
              <DialogDescription className="text-center text-base">
                Para acceder a este contenido necesitas tener una cuenta en Aura.
                Regístrate gratis y únete a nuestra comunidad.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-3 mt-4">
              <Link href="/registro" className="block">
                <Button className="w-full" size="lg">
                  Crear cuenta gratis
                </Button>
              </Link>
              
              <Link href="/login" className="block">
                <Button variant="outline" className="w-full" size="lg">
                  Ya tengo cuenta
                </Button>
              </Link>
              
              <Link href="/" className="block">
                <Button variant="ghost" className="w-full" size="sm">
                  Volver al inicio
                </Button>
              </Link>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  // Si está autenticado, mostrar el contenido
  return <>{children}</>
}
