"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Target, Award, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Heart,
    title: "Empatía y Amor",
    description: "Acompañamos a cada familia con comprensión, respeto y calidez humana.",
  },
  {
    icon: BookOpen,
    title: "Ciencia y Evidencia",
    description: "Basamos nuestras intervenciones en investigación científica y mejores prácticas.",
  },
  {
    icon: Users,
    title: "Inclusión Total",
    description: "Creemos en una sociedad donde todos tienen un lugar y son valorados.",
  },
  {
    icon: Sparkles,
    title: "Celebración de la Neurodiversidad",
    description: "Reconocemos y celebramos las fortalezas únicas de cada persona.",
  },
]

const team = [
  {
    name: "Leandro Matute",
    role: "Neg. Internacionales",
    image: "/team/leandro.jpg",
    description: "Finanzas.",
  },
  {
    name: "Camila Salas",
    role: "Educadora Especial",
    image: "/team/camila.jpg",
    description: "CEO/Directora",
  },
  {
    name: "Domenica Reyes",
    role: "Marketing",
    image: "/team/domenica.jpg",
    description: "Diseño y IT.",
  },
  {
    name: "Byron Valencia ",
    role: "Gestión Deportiva",
    image: "/team/byron.jpg",
    description: "Marketing.",
  },
   {
    name: "Maylin Chavarría ",
    role: "Educadora Especial",
    image: "/team/maylin.jpg",
    description: "Vicepresidenta Ejecutiva.",
  },
]

const stats = [
  { number: "100+", label: "Familias Acompañadas" },
  { number: "20+", label: "Profesionales Certificados" },
  { number: "30+", label: "Talleres Realizados" },
  { number: "2+", label: "Años de Experiencia" },
]

export function AboutContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge className="mb-4">Quiénes Somos</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground text-balance">
            Acompañamos con ciencia, amor e inclusión
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Somos una comunidad dedicada a apoyar a familias en el camino del autismo que conecta, guía y transforma vidas.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto px-0 md:px-[10%] grid md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="p-6 sm:p-8 space-y-4 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Nuestra Misión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Empoderar a los padrres y cuidadores aa travez de una plataforma digital que les brinde orientaciòn, recursos y acompañamiento interla en su camino de crianza, fortaleciendo su bienestar emcional y su confianza. Desde ese equilibrio,
              Aura impulsa el desarrollo pleno de los niños con autismo, promoviendo su inclusiòn. autonomìa y felicidad.
            </p>
          </Card>

          <Card className="p-6 sm:p-8 space-y-4 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Nuestra Visión</h2>
            <p className="text-muted-foreground leading-relaxed">
              En 5 años, la plataforma será referente en inclusión y desarrollo infantil de varias necesidades específicas.
            </p>
          </Card>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-card">
        <div className="max-w-4xl mx-auto px-0 md:px-[10%] space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-balance">Nuestra Historia</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty">
              Un camino nacido del amor, la empatía y el deseo de acompañar mejor.
            </p>

          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
             Aura nació en Guayaquil como una respuesta al sentir de muchos padres que buscaban orientación, contención y guía en el camino de acompañar a sus hijos autistas. No desde la carencia, sino desde el profundo deseo de encontrar un espacio que los entienda, los sostenga y los inspire a crecer junto a ellos.
            </p>
            <p>
              Hoy se ha convertido en una plataforma integral que conecta corazones, conocimientos y experiencias. En Aura, creemos que cada familia merece sentirse acompañada, cada niño merece ser visto desde su potencial, y cada paso merece ser celebrado.  </p>
            <p>
              Más que una plataforma, Aura es una comunidad viva que une ciencia, amor y propósito. Juntos, padres y profesionales construimos un camino de aprendizaje compartido hacia una sociedad más consciente, empática e inclusiva
            </p>
          </div>
        </div>
      </section>

           {/* Team - Carrusel Continuo con Controles */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-[10%]">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-balance">Nuestro Equipo</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Profesionales apasionados dedicados a hacer la diferencia
            </p>
          </div>

          {/* Carrusel horizontal continuo con controles */}
          <div className="relative">
            {/* Botón Anterior */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 hover:bg-background shadow-lg"
              onClick={() => {
                const carousel = document.getElementById('team-carousel')
                if (carousel) {
                  carousel.scrollBy({ left: -300, behavior: 'smooth' })
                }
              }}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Botón Siguiente */}
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/95 hover:bg-background shadow-lg"
              onClick={() => {
                const carousel = document.getElementById('team-carousel')
                if (carousel) {
                  carousel.scrollBy({ left: 300, behavior: 'smooth' })
                }
              }}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div 
              id="team-carousel"
              className="overflow-hidden"
              onWheel={(e) => {
                e.preventDefault()
                const carousel = e.currentTarget
                carousel.scrollBy({ left: e.deltaY, behavior: 'auto' })
              }}
            >
              <div className="flex gap-8 animate-scroll-infinite">
                {/* Duplicamos el array para crear el efecto infinito */}
                {[...team, ...team].map((member, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] group"
                  >
                    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                      {/* Foto más compacta con ratio 4:5 */}
                      <div className="aspect-[4/5] overflow-hidden bg-muted relative">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-contain md:object-cover p-2 md:p-0 group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay con gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4 sm:p-5 space-y-3">
                        <h3 className="text-base sm:text-lg font-bold text-foreground">{member.name}</h3>
                        <p className="text-xs text-primary font-semibold uppercase tracking-wide">{member.role}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">{member.description}</p>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto px-0 md:px-[10%]">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-balance">Nuestros Valores</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Los principios que guían cada decisión y acción en Aura
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 sm:p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-6xl mx-auto px-0 md:px-[10%]">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-balance">Nuestro Impacto</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Números que reflejan nuestro compromiso con la comunidad
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-5 sm:p-8 text-center space-y-2 hover:shadow-xl transition-shadow">
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

 

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground text-balance">Únete a nuestra comunidad</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ya seas una familia buscando apoyo o un profesional queriendo hacer la diferencia, hay un lugar para ti en
            Aura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/profesionales">
              <Button size="lg" className="rounded-xl">
                Encuentra un Profesional
              </Button>
            </Link>
            <Link href="/comunidad">
              <Button size="lg" variant="outline" className="rounded-xl bg-transparent">
                Únete a la Comunidad
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
