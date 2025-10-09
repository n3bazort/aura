"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation, useScrollAnimations } from "@/hooks/use-scroll-animation"

const professionals = [
  {


    //Editar y enlazar por categoria los medicos que tengo disponibles

    //////////////////////////////////////////////////////sheeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    title: "Psicólogos Infantiles",
    description: "Especialistas en desarrollo y comportamiento infantil.",
    image: "/child-psychologist.jpg",
  },
  {
    title: "Terapeutas Ocupacionales",
    description: "Apoyo sensorial y motriz para el desarrollo integral.",
    image: "/occupational-therapist.jpg",
  },
  {
    title: "Educadores Especiales",
    description: "Estrategias pedagógicas adaptadas al TEA.",
    image: "/special-education-teacher.jpg",
  },
  {
    title: "Odontólogos Sensibles",
    description: "Atención odontológica adaptada a la neurodiversidad.",
    image: "/gentle-dentist.jpg",
  },
]

export function ProfessionalsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { refs: cardRefs, visibilities: cardVisibilities } = useScrollAnimations(professionals.length)

  return (
    <section id="profesionales" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 space-y-4 scroll-animate ${titleVisible ? "visible" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Red de Profesionales</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conecta con especialistas certificados que entienden las necesidades únicas de tu familia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionals.map((prof, index) => (
            <div
              key={prof.title}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`scroll-animate ${cardVisibilities[index] ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={prof.image || "/placeholder.svg"}
                    alt={prof.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-foreground">{prof.title}</h3>
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
          ))}
        </div>

        <div className="text-center mt-12">
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
