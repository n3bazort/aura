"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, User, Gem, LogOut } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { useAuth } from "@/lib/auth-context"

export function TopBar() {
  const { user, logout } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-primary backdrop-blur-sm border-b border-primary-foreground/10 z-50 md:pl-20">
      <div className="h-full px-6 flex items-center justify-between max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-card rounded-xl p-1.5 flex items-center justify-center">
            <img
              src="/logoo.png"
              alt="Logo de Aura"
              className="w-[50px] h-[30px] object-contain"
            />
          </div>
          <span className="font-bold text-xl text-primary-foreground hidden sm:block"></span>
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-amber-950 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                size="sm"
              >
                <Gem className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Actualizar a VIP</span>
                <span className="sm:hidden">VIP</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold flex items-center gap-2">
                  <Gem className="h-8 w-8 text-amber-500" />
                  Actualiza a Aura VIP
                </DialogTitle>
                <DialogDescription className="text-lg">
                  Accede a beneficios exclusivos y contenido premium para apoyar mejor a tu familia
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-6">
                {/* Benefits */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Beneficios Plan Familiar Aura</h3>
                  <div className="grid gap-3">
                    {[
                      "Acceso ilimitado a todos los talleres y capacitaciones",
                      "Acceso anticipado a nuevos eventos y conferencias",
                      "Biblioteca completa de recursos por áreas de desarrollo",
                      "Soporte prioritario 24/7",
                      "Webinar con especialistas invitados",
                      "Descuentos en productos y servicios de partners",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 rounded-full bg-primary/10 p-1">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 p-6 rounded-2xl border-2 border-amber-400">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground">Plan Aura </h4>
                      <p className="text-sm text-muted-foreground">Ahorra 40% vs. plan mensual</p>
                    </div>
                    <Badge className="bg-amber-500 text-amber-950">Más Popular</Badge>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-bold text-foreground">$20</span>
                    <span className="text-muted-foreground">/año</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-amber-950 font-semibold text-lg py-6 rounded-xl">
                    Comenzar Ahora
                  </Button>
                </div>

                <div className="bg-card p-6 rounded-2xl border">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Plan Aura Gratuito</h4>
                      <p className="text-sm text-muted-foreground">Cancela cuando quieras</p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-foreground">$0</span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                  <Button variant="outline" className="w-full text-lg py-6 rounded-xl bg-transparent">
                    Comenzar Prueba Gratis
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Garantía de devolución de dinero de 30 días. Sin preguntas.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
            <Bell className="h-5 w-5" />
          </Button>

          {/* User Dropdown */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 gap-2">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline">{user.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/perfil">Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/configuracion">Configuración</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                <User className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Iniciar Sesión</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
