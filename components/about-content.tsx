import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Target, Award, Sparkles } from "lucide-react"
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
    name: "Dra. Ana Pérez",
    role: "Directora y Psicóloga Clínica",
    image: "/team-ana-perez.jpg",
    description: "Especialista en TEA con 15 años de experiencia en intervención temprana.",
  },
  {
    name: "Lic. Marta Gómez",
    role: "Terapeuta del Lenguaje",
    image: "/team-marta-gomez.jpg",
    description: "Experta en comunicación aumentativa y alternativa para niños con autismo.",
  },
  {
    name: "Dr. Luis Herrera",
    role: "Neurólogo Pediatra",
    image: "/team-luis-herrera.jpg",
    description: "Investigador en neurociencia del desarrollo y trastornos del neurodesarrollo.",
  },
  {
    name: "Lic. Patricia Ruiz",
    role: "Terapeuta Ocupacional",
    image: "/team-patricia-ruiz.jpg",
    description: "Especialista en integración sensorial y actividades de la vida diaria.",
  },
]

const stats = [
  { number: "500+", label: "Familias Acompañadas" },
  { number: "50+", label: "Profesionales Certificados" },
  { number: "200+", label: "Talleres Realizados" },
  { number: "10+", label: "Años de Experiencia" },
]

export function AboutContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge className="mb-4">Quiénes Somos</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
            Acompañamos con ciencia, amor e inclusión
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Somos una comunidad dedicada a apoyar a familias en el camino del autismo, conectando profesionales
            especializados con quienes más los necesitan.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Nuestra Misión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Facilitar el acceso a servicios de calidad para personas con autismo y sus familias, creando una red de
              apoyo integral que combine ciencia, empatía y comunidad. Trabajamos para que cada familia encuentre el
              acompañamiento profesional que necesita y se sienta respaldada en cada paso del camino.
            </p>
          </Card>

          <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Nuestra Visión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ser la plataforma líder en Ecuador y Latinoamérica para la conexión entre familias y profesionales
              especializados en autismo. Aspiramos a construir una sociedad más inclusiva donde la neurodiversidad sea
              celebrada y cada persona tenga las oportunidades que merece para desarrollar su máximo potencial.
            </p>
          </Card>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Nuestra Historia</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              Un camino construido con amor, ciencia y comunidad
            </p>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Aura nació en 2015 del sueño de un grupo de profesionales y padres que compartían una visión común: crear
              un espacio donde las familias con niños en el espectro autista pudieran encontrar apoyo integral,
              información confiable y una comunidad que los comprendiera.
            </p>
            <p>
              Lo que comenzó como un pequeño grupo de apoyo en Quito, se ha transformado en una plataforma que conecta a
              cientos de familias con profesionales especializados en todo Ecuador. Hemos crecido, pero nuestra esencia
              permanece: acompañar con empatía, guiar con ciencia y celebrar cada logro, por pequeño que parezca.
            </p>
            <p>
              Hoy, Aura es más que una plataforma. Es una comunidad vibrante donde familias comparten sus historias,
              profesionales colaboran para ofrecer el mejor cuidado posible, y juntos trabajamos por una sociedad más
              inclusiva y comprensiva.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Los principios que guían cada decisión y acción en Aura
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 space-y-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Nuestro Impacto</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Números que reflejan nuestro compromiso con la comunidad
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center space-y-2 hover:shadow-xl transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Nuestro Equipo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Profesionales apasionados dedicados a hacer la diferencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Únete a nuestra comunidad</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
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
