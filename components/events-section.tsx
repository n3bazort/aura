import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

const events = [
  {
    id: 1,
    date: "2025-10-10",
    title: "Charla: Neurodiversidad en el aula",
    speaker: "Dra. Ana Pérez",
    time: "18:00 - 20:00",
    type: "Charla",
    location: "Centro Comunitario Quito",
    description:
      "Exploraremos estrategias para crear ambientes educativos inclusivos que celebren la neurodiversidad y apoyen el aprendizaje de todos los estudiantes.",
    image: "/eventos/1.png",
  },
  {
    id: 2,
    date: "2025-10-15",
    title: "Taller: Comunicación positiva",
    speaker: "Lic. Marta Gómez",
    time: "16:00 - 18:30",
    type: "Taller",
    location: "Sala Virtual Zoom",
    description:
      "Aprende técnicas de comunicación efectiva y positiva para fortalecer la relación con tu hijo y fomentar su desarrollo emocional.",
    image: "/eventos/2.png",
  },
  {
    id: 3,
    date: "2025-10-25",
    title: "Conferencia: Avances científicos sobre TEA",
    speaker: "Dr. Luis Herrera",
    time: "19:00 - 21:00",
    type: "Conferencia",
    location: "Auditorio Universidad Central",
    description:
      "Presentación de las últimas investigaciones y avances científicos en el entendimiento y tratamiento del Trastorno del Espectro Autista.",
    image: "/eventos/3.png",
  },
  {
    id: 4,
    date: "2025-11-05",
    title: "Webinar: Estrategias sensoriales en casa",
    speaker: "Lic. Patricia Ruiz",
    time: "17:00 - 18:30",
    type: "Webinar",
    location: "Online",
    description:
      "Descubre actividades y estrategias sensoriales que puedes implementar en casa para apoyar el desarrollo de tu hijo.",
    image: "/eventos/4.png",
  },
]

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

export function EventsSection() {
  return (
    <section id="eventos" className="py-24 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Calendario de Eventos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Participa en charlas, talleres y conferencias con expertos en autismo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">{event.type}</Badge>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Header */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                </div>

                {/* Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{event.speaker}</span>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/eventos">
                  <Button className="w-full rounded-xl bg-transparent" variant="outline">
                    Registrarse
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/eventos">
            <Button size="lg" className="rounded-xl">
              Ver calendario completo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
