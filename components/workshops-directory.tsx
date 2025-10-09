"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, Clock, BarChart3 } from "lucide-react"

const categories = ["Todos", "Comunicación", "Rutinas", "Apoyo Emocional", "Integración Sensorial", "Educación"]

const workshops = [
  {
    id: 1,
    title: "Comunicación Aumentativa y Alternativa",
    category: "Comunicación",
    price: "$10",
    image: "/workshop-communication.jpg",
    duration: "2 horas",
    level: "Básico",
    description: "Aprende estrategias efectivas de comunicación para niños con TEA.",
    instructor: "Dra. María González",
  },
  {
    id: 2,
    title: "Rutinas Visuales para el Hogar",
    category: "Rutinas",
    price: "$8",
    image: "/workshop-routines.jpg",
    duration: "1.5 horas",
    level: "Básico",
    description: "Crea rutinas visuales efectivas que faciliten el día a día.",
    instructor: "Lic. Carlos Mendoza",
  },
  {
    id: 3,
    title: "Apoyo Emocional para Padres",
    category: "Apoyo Emocional",
    price: "$12",
    image: "/workshop-emotional-support.jpg",
    duration: "3 horas",
    level: "Todos",
    description: "Herramientas para el autocuidado y manejo del estrés parental.",
    instructor: "Dr. Juan Pérez",
  },
  {
    id: 4,
    title: "Integración Sensorial en Casa",
    category: "Integración Sensorial",
    price: "$15",
    image: "/workshop-sensory.jpg",
    duration: "2.5 horas",
    level: "Intermedio",
    description: "Actividades sensoriales para implementar en el hogar.",
    instructor: "Dra. Isabel Ramírez",
  },
  {
    id: 5,
    title: "Estrategias de Inclusión Escolar",
    category: "Educación",
    price: "$10",
    image: "/workshop-inclusion.jpg",
    duration: "2 horas",
    level: "Intermedio",
    description: "Colabora efectivamente con el sistema educativo.",
    instructor: "Dr. Fernando Castro",
  },
]

export function WorkshopsDirectory() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredWorkshops =
    selectedCategory === "Todos" ? workshops : workshops.filter((workshop) => workshop.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Talleres y Capacitación</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Formación especializada dictada por profesionales certificados. Paga por taller individual o accede a todo
            el contenido con suscripción premium.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 bg-card border-b border-[color:var(--border)] sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Filtrar por categoría</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto px-[10%]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkshops.map((workshop) => (
              <Card
                key={workshop.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-foreground flex-1">{workshop.title}</h3>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {workshop.price}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{workshop.description}</p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Clock className="h-3 w-3" />
                      {workshop.duration}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <BarChart3 className="h-3 w-3" />
                      {workshop.level}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Instructor:</span> {workshop.instructor}
                  </p>

                  <Link href={`/talleres/${workshop.id}`}>
                    <Button className="w-full rounded-xl" size="lg">
                      Ver Detalles
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
