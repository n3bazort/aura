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
    name: "Leandro Matute",
    role: "Neg. Internacionales",
    image: "/team/leandro.jpg",
    description: "Especialista en TEA con 15 años de experiencia en intervención temprana.",
  },
  {
    name: "Camila Salas",
    role: "Educadora Especial",
    image: "/team/camila.jpg",
    description: "Experta en comunicación aumentativa y alternativa para niños con autismo.",
  },
  {
    name: "Domenica Reyes",
    role: "Marketing",
    image: "/team/domenica.jpg",
    description: "Investigador en neurociencia del desarrollo y trastornos del neurodesarrollo.",
  },
  {
    name: "Byron Valencia ",
    role: "Gestión Deportiva",
    image: "/team/byron.jpg",
    description: "Especialista en integración sensorial y actividades de la vida diaria.",
  },
   {
    name: "Maylin Chavarría ",
    role: "Educadora Especial",
    image: "/team/maylin.jpg",
    description: "Especialista en integración sensorial y actividades de la vida diaria.",
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
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Badge className="mb-4">Quiénes Somos</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
            Acompañamos con ciencia, amor e inclusión
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Somos una comunidad dedicada a apoyar a familias en el camino del autismo que conecta, guía y transforma vidas.
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
              Empoderar a los padrres y cuidadores aa travez de una plataforma digital que les brinde orientaciòn, recursos y acompañamiento interla en su camino de crianza, fortaleciendo su bienestar emcional y su confianza. Desde ese equilibrio,
              Aura impulsa el desarrollo pleno de los niños con autismo, promoviendo su inclusiòn. autonomìa y felicidad.
            </p>
          </Card>

          <Card className="p-8 space-y-4 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Nuestra Visión</h2>
            <p className="text-muted-foreground leading-relaxed">
              En 5 años, la plataforma será referente en inclusión y desarrollo infantil de varias necesidades específicas.
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
