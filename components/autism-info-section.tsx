"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Heart, Users, BookOpen, Sparkles, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Brain,
    value: "1 de cada 36",
    label: "Niños diagnosticados con TEA",
    description: "Según CDC 2023",
  },
  {
    icon: TrendingUp,
    value: "178%",
    label: "Aumento en diagnósticos",
    description: "En los últimos 20 años",
  },
  {
    icon: Heart,
    value: "Temprano",
    label: "Intervención es clave",
    description: "Mejores resultados antes de los 3 años",
  },
  {
    icon: Users,
    value: "75 millones",
    label: "Personas con TEA",
    description: "En todo el mundo",
  },
]

const importantFacts = [
  {
    icon: Sparkles,
    title: "Cada persona es única",
    description:
      "El autismo es un espectro. Cada niño tiene fortalezas, desafíos y necesidades únicas. No hay dos personas con autismo iguales.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Neurodiversidad",
    description:
      "El autismo es una diferencia neurológica natural. Las personas con autismo procesan información de manera diferente, lo que puede ser una fortaleza.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Apoyo continuo",
    description:
      "Con el apoyo adecuado, las personas con autismo pueden alcanzar su máximo potencial y llevar vidas plenas y significativas.",
    color: "from-amber-500 to-orange-500",
  },
]

export function AutismInfoSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("[data-card-index]")
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Entendiendo el <span className="text-primary">Autismo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Información importante basada en evidencia científica para familias y cuidadores
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                data-card-index={index}
                className={`bg-card border border-[color:var(--border)] rounded-2xl p-6 shadow-lg transition-all duration-700 ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="font-semibold text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Important Facts */}
        <div className="space-y-6">
          {importantFacts.map((fact, index) => {
            const Icon = fact.icon
            const cardIndex = stats.length + index
            return (
              <div
                key={index}
                data-card-index={cardIndex}
                className={`bg-card border border-[color:var(--border)] rounded-2xl p-8 shadow-lg transition-all duration-700 delay-${index * 100} ${
                  visibleCards.includes(cardIndex) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 bg-gradient-to-br ${fact.color} rounded-xl flex-shrink-0`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{fact.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{fact.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
