"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useScrollAnimation, useScrollAnimations } from "@/hooks/use-scroll-animation"

const plans = [
  {
    name: "Plan Vip ",
    price: "$5",
    period: "/mes",
    features: ["Acceso a talleres gratuitos", "Foro comunitario", "Noticias destacadas", "Recursos descargables"],
    popular: false,
  },
  {
    name: "Plan Plus",
    price: "$10",
    period: "/mes",
    features: [
      "Todo del plan básico",
      "Acceso a talleres exclusivos",
      "Descuentos en eventos",
      "Consultas mensuales",
      "Contenido premium",
    ],
    popular: true,
  },
  {
    name: "Plan Premium",
    price: "$20",
    period: "/mes",
    features: [
      "Todo del plan plus",
      "Sesiones personalizadas con expertos",
      "Acceso prioritario a capacitaciones",
      "Asesoría personalizada",
      "Grupo privado de apoyo",
      "Certificados de talleres",
    ],
    popular: false,
  },
]

export function PlansSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { refs: planRefs, visibilities: planVisibilities } = useScrollAnimations(plans.length)

  return (
    <section id="planes" className="py-24 px-6 bg-gradient-to-br from-muted/50 to-accent/20">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 space-y-4 scroll-animate ${titleVisible ? "visible" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Planes Premium Aura</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Elige el plan que mejor se adapte a las necesidades de tu familia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              ref={(el) => {
                planRefs.current[index] = el
              }}
              className={`scroll-animate ${planVisibilities[index] ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card
                className={`p-8 relative hover:shadow-2xl transition-all duration-300 h-full ${
                  plan.popular ? "border-2 border-primary scale-105 shadow-xl" : "hover:-translate-y-1"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Más popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button className="w-full rounded-xl" size="lg" variant={plan.popular ? "default" : "outline"}>
                    Comenzar ahora
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            ¿Necesitas un plan personalizado?{" "}
            <Button variant="link" className="text-primary">
              Contáctanos
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}
