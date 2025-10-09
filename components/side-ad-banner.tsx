"use client"

import { useState, useEffect } from "react"

export function SideAdBanner() {
  const [currentBanner, setCurrentBanner] = useState(1)
  const totalBanners = 7
  
  // Seleccionar banner inicial aleatorio
  useEffect(() => {
    setCurrentBanner(Math.floor(Math.random() * totalBanners) + 1)
  }, [])
  
  // Rotar banner cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev % totalBanners) + 1)
    }, 10000) // 10 segundos
    
    return () => clearInterval(interval)
  }, [])
  
  // Dimensión estándar vertical: 160x600 (wide skyscraper)
  return (
    <div className="sticky top-20 w-[160px] h-[600px] bg-muted rounded-lg overflow-hidden shadow-lg">
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
              <div class="w-full h-full flex items-center justify-center bg-muted text-muted-foreground text-sm text-center px-2">
                Espacio Publicitario
              </div>
            `
          }
        }}
      />
      {/* Indicador de publicidad */}
      <div className="absolute top-1 right-1 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded">
        Ad
      </div>
    </div>
  )
}
