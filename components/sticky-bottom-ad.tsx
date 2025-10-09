"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface StickyBottomAdProps {
  excludePaths?: string[] // Rutas donde NO mostrar el banner
}

export function StickyBottomAd({ excludePaths = [] }: StickyBottomAdProps) {
  const [currentBanner, setCurrentBanner] = useState(1)
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const totalBanners = 7
  
  // Verificar si estamos en una ruta excluida
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname
      const shouldHide = excludePaths.some(path => currentPath.includes(path))
      if (shouldHide) {
        setIsVisible(false)
        return
      }
    }
  }, [excludePaths])
  
  // Seleccionar banner inicial aleatorio
  useEffect(() => {
    setCurrentBanner(Math.floor(Math.random() * totalBanners) + 1)
  }, [])
  
  // Mostrar banner después de 15 segundos
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 15000) // 15 segundos
    
    return () => clearTimeout(showTimer)
  }, [])
  
  // Rotar banner cada 10 segundos después del inicio (a los 15s, 25s, 35s, etc.)
  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev % totalBanners) + 1)
    }, 10000) // 10 segundos
    
    return () => clearInterval(interval)
  }, [isVisible])
  
  if (!isVisible || isClosed) return null
  
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm py-3 px-4 animate-in slide-in-from-bottom duration-500"
    >
      {/* Banner */}
      <div className="relative w-full max-w-[728px] h-[90px] bg-muted rounded-lg overflow-hidden shadow-2xl">
        <img
          src={`/banners/${currentBanner}.jpg`}
          alt={`Anuncio ${currentBanner}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const parent = target.parentElement
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-muted text-muted-foreground text-sm">
                  Espacio Publicitario
                </div>
              `
            }
          }}
        />
        {/* Indicador de publicidad */}
        <div className="absolute top-1 left-1 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded">
          Anuncio
        </div>
      </div>
      
      {/* Botón de cerrar */}
      <button
        onClick={() => setIsClosed(true)}
        className="absolute top-1 right-1 bg-white/90 hover:bg-white text-black rounded-full p-1.5 transition-colors shadow-lg"
        aria-label="Cerrar anuncio"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
