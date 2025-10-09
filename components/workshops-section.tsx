"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation, useScrollAnimations } from "@/hooks/use-scroll-animation"

const workshops = [
  {
    title: "Estrategias de Comunicación",
    price: "$10",
    image: "/1.png",
    duration: "2 horas",
    level: "Básico",
  },
  {
    title: "Rutinas Visuales",
    price: "$8",
    image: "/2.png",
    duration: "1.5 horas",
    level: "Básico",
  },
  {
    title: "Bienestar Parental",
    price: "$12",
    image: "/3.png",
    duration: "3 horas",
    level: "Todos",
  },
]

export function WorkshopsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { refs: workshopRefs, visibilities: workshopVisibilities } = useScrollAnimations(workshops.length)

  return (
    <section id="talleres" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 space-y-4 scroll-animate ${titleVisible ? "visible" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Talleres y Capacitación</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Formación dictada por profesionales especializados. Paga por taller o accede con suscripción premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.title}
              ref={(el) => {
                workshopRefs.current[index] = el
              }}
              className={`scroll-animate ${workshopVisibilities[index] ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-foreground flex-1">{workshop.title}</h3>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {workshop.price}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Badge variant="outline">{workshop.duration}</Badge>
                    <Badge variant="outline">{workshop.level}</Badge>
                  </div>

                  <Link href="/talleres">
                    <Button className="w-full rounded-xl" size="lg">
                      Inscribirse
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/talleres">
            <Button size="lg" className="rounded-2xl px-8">
              Ver Todos los Talleres
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
