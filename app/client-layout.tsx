"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AuthProvider } from "@/lib/auth-context"
import { ProtectedRoute } from "@/lib/protected-route"
import { StickyBottomAd } from "@/components/sticky-bottom-ad"

function ClientLayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ProtectedRoute>
      {children}
      {/* Banner inferior sticky que aparece en todas las páginas */}
      {/* Se excluye de la página de comunidad */}
      <StickyBottomAd excludePaths={["/comunidad"]} />
      <Analytics />
    </ProtectedRoute>
  )
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthProvider>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>}>
        <ClientLayoutContent>{children}</ClientLayoutContent>
      </Suspense>
    </AuthProvider>
  )
}
