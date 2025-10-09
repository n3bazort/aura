"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Filter, ChevronRight, Search, ChevronDown } from "lucide-react"
import { professionalsData } from "@/lib/professionals-data"

const specialties = [
  "Todos",
  "Psicología Infantil",
  "Terapia Ocupacional",
  "Educación Especial",
  "Odontología",
  "Fonoaudiología",
  "Neurología",
  "Psiquiatría",
]

export function ProfessionalsDirectory() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterExpanded, setIsFilterExpanded] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  const filteredProfessionals = professionalsData.filter((prof) => {
    const matchesSpecialty = selectedSpecialty === "Todos" || prof.specialty === selectedSpecialty
    const matchesSearch = 
      prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSpecialty && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Filter Section - Colapsable con auto-cierre al salir con el mouse */}
      <section 
        className="bg-card border-b border-border sticky top-16 z-30"
        onMouseLeave={() => setIsFilterExpanded(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header siempre visible */}
          <button
            onClick={() => setIsFilterExpanded(!isFilterExpanded)}
            className="w-full py-2 sm:py-3 flex items-center justify-between gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold text-foreground">Filtrar por especialidad</h2>
            </div>
            <ChevronDown 
              className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                isFilterExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Contenido colapsable */}
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isFilterExpanded ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
            }`}
          >
            {/* Barra de búsqueda */}
            <div className="mb-4 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar por nombre, especialidad o ubicación..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl"
              />
            </div>

            {/* Categorías con scroll horizontal */}
            <div className="relative">
              <div 
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {specialties.map((specialty) => (
                  <Button
                    key={specialty}
                    variant={selectedSpecialty === specialty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSpecialty(specialty)}
                    className="rounded-full whitespace-nowrap flex-shrink-0"
                  >
                    {specialty}
                  </Button>
                ))}
              </div>
              
              {/* Botón de flecha indicadora */}
              <button
                onClick={scrollRight}
                className="absolute right-0 top-0 bottom-2 bg-gradient-to-l from-card via-card to-transparent pl-8 pr-2 flex items-center"
                aria-label="Ver más categorías"
              >
                <div className="bg-primary/10 hover:bg-primary/20 rounded-full p-1.5 transition-colors">
                  <ChevronRight className="h-4 w-4 text-primary" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MARGEN LATERAL 10% - Professionals Grid */}
      <section className="py-12 px-[10%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((prof) => (
              <Link key={prof.id} href={`/profesionales/${prof.id}`}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  {/* Imagen sin padding */}
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={prof.image || "/4.png"}
                      alt={prof.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Contenido sin padding vertical extra, solo horizontal */}
                  <div className="px-6 py-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">{prof.name}</h3>
                    <p className="text-sm text-primary font-medium mb-1">{prof.specialty}</p>
                    <p className="text-sm text-muted-foreground mb-3">{prof.experience} años de experiencia</p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{prof.location}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {filteredProfessionals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No se encontraron profesionales que coincidan con tu búsqueda</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
