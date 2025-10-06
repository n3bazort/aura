"use client"

import { useEffect, useRef, useState } from "react"

export function PageHeader({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
}) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [])

  return (
    <section className="relative bg-primary py-0 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center my-0">
          {/* Contenido textual - alineado a la derecha */}
          <div className="space-y-6 text-right">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              {title}
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Imagen opcional - con animación de entrada desde la izquierda */}
          {imageSrc && (
            <div 
              ref={imageRef}
              className={`hidden lg:block image-slide-in-left ${isVisible ? "visible" : ""}`}
            >
              <img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full h-auto object-contain rounded-2xl shadow-xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
