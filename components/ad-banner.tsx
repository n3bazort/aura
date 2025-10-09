"use client"

import { useState, useEffect } from "react"

interface AdBannerProps {
  className?: string
  size?: "horizontal" | "square"
}

export function AdBanner({ className = "", size = "horizontal" }: AdBannerProps) {
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
  
  // Dimensiones recomendadas:
  // horizontal: 728x90 (leaderboard estándar)
  // square: 300x250 (medium rectangle estándar)
  const sizeClasses = size === "horizontal" 
    ? "w-full max-w-[728px] h-[90px]" 
    : "w-[300px] h-[250px]"
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses} bg-muted rounded-lg overflow-hidden shadow-lg relative group`}>
        <img
          src={`/banners/${currentBanner}.jpg`}
          alt={`Anuncio ${currentBanner}`}
          className="w-full h-full object-cover transition-opacity duration-500"
          onError={(e) => {
            // Fallback si la imagen no existe
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
        <div className="absolute top-1 right-1 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded">
          Ad
        </div>
      </div>
    </div>
  )
}
