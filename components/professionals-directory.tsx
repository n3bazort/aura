"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, Globe, MapPin, Filter, ChevronRight, Search } from "lucide-react"
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
      {/* Filter Section - Sin márgenes laterales, con padding responsive superior e inferior */}
      <section className="bg-card border-b border-border sticky top-16 z-30 py-4 sm:py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Filtrar por especialidad</h2>
          </div>

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
      </section>

      {/* MARGEN LATERAL 10% - Professionals Grid */}
      <section className="py-12 px-[10%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((prof) => (
              <Card
                key={prof.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={prof.image || "/4.png"}
                    alt={prof.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{prof.name}</h3>
                    <p className="text-sm text-primary font-medium">{prof.specialty}</p>
                    <p className="text-sm text-muted-foreground mt-1">{prof.experience} años de experiencia</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{prof.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span>{prof.phone}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 rounded-xl bg-transparent" asChild>
                      <a href={`mailto:${prof.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 rounded-xl bg-transparent" asChild>
                      <a href={`https://${prof.website}`} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Web
                      </a>
                    </Button>
                  </div>

                  <Link href={`/profesionales/${prof.id}`}>
                    <Button className="w-full rounded-xl">Ver Perfil Completo</Button>
                  </Link>
                </div>
              </Card>
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
