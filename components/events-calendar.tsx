"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Calendar, Clock, User, MapPin, Filter, CheckCircle2, Loader2 } from "lucide-react"

const eventTypes = ["Todos", "Charla", "Taller", "Conferencia", "Webinar", "Reunión"]

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
    image: "/event-neurodiversity.jpg",
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
    image: "/event-communication.jpg",
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
    image: "/event-science.jpg",
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
    image: "/event-sensory.jpg",
  },
  {
    id: 5,
    date: "2025-11-12",
    title: "Reunión: Grupo de apoyo para padres",
    speaker: "Facilitado por Dra. Carmen Torres",
    time: "18:30 - 20:00",
    type: "Reunión",
    location: "Centro Aura Guayaquil",
    description:
      "Espacio seguro para compartir experiencias, desafíos y estrategias con otras familias que viven situaciones similares.",
    image: "/event-support-group.jpg",
  },
  {
    id: 6,
    date: "2025-11-20",
    title: "Taller: Preparación para la vida adulta",
    speaker: "Lic. Roberto Flores",
    time: "16:00 - 19:00",
    type: "Taller",
    location: "Centro Comunitario Manabí",
    description:
      "Herramientas y estrategias para preparar a adolescentes con TEA para la transición a la vida adulta independiente.",
    image: "/event-adult-life.jpg",
  },
  {
    id: 7,
    date: "2025-11-28",
    title: "Charla: Derechos y legislación",
    speaker: "Abg. María Sánchez",
    time: "19:00 - 20:30",
    type: "Charla",
    location: "Online",
    description:
      "Conoce los derechos de las personas con TEA y la legislación vigente en Ecuador para garantizar su inclusión y bienestar.",
    image: "/event-rights.jpg",
  },
  {
    id: 8,
    date: "2025-12-03",
    title: "Conferencia: Tecnología y autismo",
    speaker: "Ing. Diego Vargas",
    time: "18:00 - 20:00",
    type: "Conferencia",
    location: "Centro de Innovación Quito",
    description:
      "Exploración de aplicaciones, dispositivos y tecnologías que pueden apoyar el desarrollo y la comunicación en personas con TEA.",
    image: "/event-technology.jpg",
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

function formatShortDate(dateString: string) {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = new Intl.DateTimeFormat("es-ES", { month: "short" }).format(date)
  return { day, month }
}

export function EventsCalendar() {
  const [selectedType, setSelectedType] = useState("Todos")
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const filteredEvents = selectedType === "Todos" ? events : events.filter((event) => event.type === selectedType)

  const handleRegister = () => {
    setIsLoading(true)
    setIsSuccess(false)

    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 2500)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsLoading(false)
    setIsSuccess(false)
    setSelectedEvent(null)
  }

  const openEventModal = (event: any) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Calendario de Eventos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Participa en charlas, talleres y conferencias con expertos en autismo. Conecta con la comunidad y aprende
            nuevas estrategias.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-6 bg-card border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Filtrar por tipo</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {eventTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
                className="rounded-full"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => {
              const { day, month } = formatShortDate(event.date)
              return (
                <Card
                  key={event.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => openEventModal(event)}
                >
                  <div className="aspect-video overflow-hidden bg-muted relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-2xl p-3 text-center shadow-lg">
                      <div className="text-2xl font-bold text-foreground">{day}</div>
                      <div className="text-xs uppercase text-muted-foreground font-medium">{month}</div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <Badge className="mb-3">{event.type}</Badge>
                      <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{event.title}</h3>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="h-4 w-4 flex-shrink-0" />
                        <span className="line-clamp-1">{event.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>

                    <Button className="w-full rounded-xl" size="lg">
                      Ver Detalles
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <div className="space-y-6">
              {!isLoading && !isSuccess && (
                <>
                  {/* Event Image */}
                  <div className="aspect-video rounded-2xl overflow-hidden -mx-6 -mt-6">
                    <img
                      src={selectedEvent.image || "/placeholder.svg"}
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Event Info */}
                  <div className="space-y-4">
                    <div>
                      <Badge className="mb-3">{selectedEvent.type}</Badge>
                      <h2 className="text-2xl font-bold text-foreground mb-2">{selectedEvent.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{selectedEvent.description}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 pt-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-foreground">Fecha</div>
                          <div className="text-sm text-muted-foreground">{formatDate(selectedEvent.date)}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-foreground">Horario</div>
                          <div className="text-sm text-muted-foreground">{selectedEvent.time}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <User className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-foreground">Facilitador</div>
                          <div className="text-sm text-muted-foreground">{selectedEvent.speaker}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-medium text-foreground">Ubicación</div>
                          <div className="text-sm text-muted-foreground">{selectedEvent.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" onClick={handleCloseModal} className="flex-1 rounded-xl bg-transparent">
                      Cerrar
                    </Button>
                    <Button onClick={handleRegister} className="flex-1 rounded-xl">
                      Registrarse
                    </Button>
                  </div>
                </>
              )}

              {isLoading && (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <Loader2 className="h-16 w-16 text-primary animate-spin" />
                  <p className="text-muted-foreground">Procesando registro...</p>
                </div>
              )}

              {isSuccess && (
                <div className="flex flex-col items-center justify-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-foreground">Registro Exitoso</h3>
                    <p className="text-muted-foreground">
                      Te has registrado exitosamente para "{selectedEvent.title}". Recibirás un correo con los detalles.
                    </p>
                  </div>
                  <Button onClick={handleCloseModal} className="w-full rounded-xl">
                    Okay
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
