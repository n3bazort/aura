"use client"

import { FlaskConical, Heart, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useScrollAnimations } from "@/hooks/use-scroll-animation"

const features = [
  {
    title: "Basado en evidencia científica",
    text: "Toda la información está respaldada por estudios de organismos como la OMS y la Asociación Americana de Psiquiatría.",
    icon: FlaskConical,
  },
  {
    title: "Apoyo a familias",
    text: "Recursos prácticos, guías y herramientas para acompañar el desarrollo de tus hijos.",
    icon: Heart,
  },
  {
    title: "Comunidad activa",
    text: "Únete a padres y cuidadores que comparten experiencias, avances y aprendizajes.",
    icon: Users,
  },
]

export function InfoGrid() {
  const { refs, visibilities } = useScrollAnimations(features.length)

  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <div
                key={feature.title}
                ref={(el) => { refs.current[index] = el }}
                className={`scroll-animate ${visibilities[index] ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.text}</p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
