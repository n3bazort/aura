"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { AuthProvider } from "@/lib/auth-context"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const searchParams = useSearchParams()

  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      <Analytics />
    </AuthProvider>
  )
}
