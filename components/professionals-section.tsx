"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation, useScrollAnimations } from "@/hooks/use-scroll-animation"
import { professionalsData } from "@/lib/professionals-data"

// Mapeo de categorías a especialidades
const categoryMapping = {
  "mental-health": ["Psicología Infantil", "Psiquiatría"],
  "therapy": ["Terapia Ocupacional", "Fonoaudiología"],
  "education": ["Educación Especial"],
}

const professionals = [
  {
    title: "Salud Mental",
    description: "Psicólogos y psiquiatras especializados en TEA y neurodiversidad.",
    category: "mental-health" as keyof typeof categoryMapping,
  },
  {
    title: "Terapias",
    description: "Terapeutas ocupacionales, del habla y físicos.",
    category: "therapy" as keyof typeof categoryMapping,
  },
  {
    title: "Educación",
    description: "Docentes y especialistas en educación especial.",
    category: "education" as keyof typeof categoryMapping,
  },
]

export function ProfessionalsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { refs: cardRefs, visibilities: cardVisibilities } = useScrollAnimations(professionals.length)
  
  // Estado para controlar qué profesional se muestra en cada tarjeta (carrusel)
  const [currentIndices, setCurrentIndices] = useState<number[]>([0, 0, 0])
  
  // Obtener profesionales por categoría
  const getProfessionalsByCategory = (category: keyof typeof categoryMapping) => {
    const specialties = categoryMapping[category]
    return professionalsData.filter(prof => specialties.includes(prof.specialty))
  }
  
  // Carrusel automático que cambia cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndices(prev => 
        prev.map((index, i) => {
          const categoryProfs = getProfessionalsByCategory(professionals[i].category)
          return (index + 1) % categoryProfs.length
        })
      )
    }, 4000) // Cambia cada 4 segundos
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="profesionales" className="py-16 md:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 space-y-4 scroll-animate ${titleVisible ? "visible" : ""}`}>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-balance">Red de Profesionales</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conecta con especialistas certificados que entienden las necesidades únicas de tu familia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {professionals.map((prof, index) => {
            const categoryProfs = getProfessionalsByCategory(prof.category)
            const currentProf = categoryProfs[currentIndices[index]] || categoryProfs[0]
            
            return (
              <div
                key={prof.title}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`scroll-animate ${cardVisibilities[index] ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <img
                      src={currentProf?.image || "/placeholder.svg"}
                      alt={currentProf?.name || prof.title}
                      className="w-full h-full object-contain md:object-cover p-2 md:p-0 group-hover:scale-110 transition-all duration-500"
                    />
                    {/* Nombre del profesional mostrado */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white text-sm font-semibold">{currentProf?.name}</p>
                      <p className="text-white/80 text-xs">{currentProf?.specialty}</p>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-foreground">{prof.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{prof.description}</p>
                    <Link href="/profesionales">
                      <Button variant="ghost" size="sm" className="group/btn -ml-2">
                        Ver más
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link href="/profesionales">
            <Button size="lg" className="rounded-2xl px-8">
              Explorar Todos los Profesionales
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
