"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  ArrowLeft,
  Clock,
  BarChart3,
  User,
  CheckCircle2,
  Download,
  FileText,
  Video,
  BookOpen,
  Loader2,
} from "lucide-react"

const workshopsData: Record<string, any> = {
  "1": {
    id: 1,
    title: "Estrategias de Comunicación Efectiva",
    category: "Comunicación",
    price: "$10",
    image: "/1.png",
    duration: "2 horas",
    level: "Básico",
    instructor: "Dra. María González",
    description:
      "Este taller te enseñará estrategias efectivas de comunicación aumentativa y alternativa (CAA) para niños con TEA. Aprenderás a implementar sistemas de comunicación visual, uso de pictogramas, y aplicaciones tecnológicas que facilitan la expresión y comprensión.",
    objectives: [
      "Comprender los fundamentos de la comunicación aumentativa",
      "Aprender a crear y usar tableros de comunicación",
      "Conocer aplicaciones tecnológicas de CAA",
      "Implementar estrategias en el día a día",
    ],
    content: [
      {
        title: "Introducción a la CAA",
        type: "video",
        duration: "20 min",
      },
      {
        title: "Sistemas de Pictogramas",
        type: "video",
        duration: "30 min",
      },
      {
        title: "Aplicaciones Tecnológicas",
        type: "video",
        duration: "25 min",
      },
      {
        title: "Casos Prácticos",
        type: "video",
        duration: "45 min",
      },
    ],
    resources: [
      {
        title: "Guía de Pictogramas Descargable",
        type: "pdf",
      },
      {
        title: "Plantillas de Tableros de Comunicación",
        type: "pdf",
      },
      {
        title: "Lista de Apps Recomendadas",
        type: "pdf",
      },
    ],
  },
  "2": {
    id: 2,
    title: "Creación de Rutinas Visuales",
    category: "Rutinas",
    price: "$8",
    image: "/2.png",
    duration: "1.5 horas",
    level: "Básico",
    instructor: "Lic. Carlos Mendoza",
    description:
      "Aprende a crear y implementar rutinas visuales efectivas que faciliten el día a día de tu hijo. Este taller te proporcionará herramientas prácticas para estructurar actividades diarias y reducir la ansiedad mediante el uso de apoyos visuales.",
    objectives: [
      "Entender la importancia de las rutinas visuales",
      "Diseñar horarios visuales personalizados",
      "Implementar rutinas para diferentes momentos del día",
      "Adaptar las rutinas según las necesidades individuales",
    ],
    content: [
      {
        title: "Fundamentos de las Rutinas Visuales",
        type: "video",
        duration: "15 min",
      },
      {
        title: "Diseño de Horarios Visuales",
        type: "video",
        duration: "25 min",
      },
      {
        title: "Rutinas para Momentos Clave",
        type: "video",
        duration: "30 min",
      },
      {
        title: "Adaptación y Personalización",
        type: "video",
        duration: "20 min",
      },
    ],
    resources: [
      {
        title: "Plantillas de Rutinas Visuales",
        type: "pdf",
      },
      {
        title: "Banco de Imágenes para Rutinas",
        type: "pdf",
      },
      {
        title: "Guía de Implementación",
        type: "pdf",
      },
    ],
  },
  "3": {
    id: 3,
    title: "Autocuidado y Bienestar Parental",
    category: "Apoyo Emocional",
    price: "$12",
    image: "/3.png",
    duration: "3 horas",
    level: "Todos",
    instructor: "Dr. Juan Pérez",
    description:
      "Herramientas prácticas para el manejo del estrés, autocuidado y fortalecimiento emocional. Conecta con otros padres y comparte experiencias en un espacio seguro.",
    objectives: [
      "Identificar y manejar el estrés parental",
      "Desarrollar rutinas de autocuidado sostenibles",
      "Fortalecer la resiliencia emocional",
      "Crear redes de apoyo efectivas",
    ],
    content: [
      {
        title: "Reconociendo el Agotamiento Parental",
        type: "video",
        duration: "30 min",
      },
      {
        title: "Técnicas de Autocuidado",
        type: "video",
        duration: "40 min",
      },
      {
        title: "Construcción de Resiliencia",
        type: "video",
        duration: "45 min",
      },
      {
        title: "Redes de Apoyo y Comunidad",
        type: "video",
        duration: "35 min",
      },
    ],
    resources: [
      {
        title: "Guía de Autocuidado Diario",
        type: "pdf",
      },
      {
        title: "Ejercicios de Mindfulness",
        type: "pdf",
      },
      {
        title: "Plan de Acción Personal",
        type: "pdf",
      },
    ],
  },
  "4": {
    id: 4,
    title: "Actividades Sensoriales en el Hogar",
    category: "Integración Sensorial",
    price: "$15",
    image: "/4.png",
    duration: "2.5 horas",
    level: "Intermedio",
    instructor: "Dra. Isabel Ramírez",
    description:
      "Implementa actividades de integración sensorial en casa usando materiales accesibles. Aprende a crear un espacio sensorial personalizado para tu hijo.",
    objectives: [
      "Comprender los principios de integración sensorial",
      "Identificar necesidades sensoriales individuales",
      "Crear actividades sensoriales con materiales caseros",
      "Diseñar un espacio sensorial en casa",
    ],
    content: [
      {
        title: "Fundamentos de Integración Sensorial",
        type: "video",
        duration: "25 min",
      },
      {
        title: "Evaluación de Necesidades Sensoriales",
        type: "video",
        duration: "30 min",
      },
      {
        title: "Actividades Sensoriales Prácticas",
        type: "video",
        duration: "45 min",
      },
      {
        title: "Creación de Espacios Sensoriales",
        type: "video",
        duration: "40 min",
      },
    ],
    resources: [
      {
        title: "Guía de Actividades Sensoriales",
        type: "pdf",
      },
      {
        title: "Lista de Materiales Sensoriales",
        type: "pdf",
      },
      {
        title: "Planos para Espacios Sensoriales",
        type: "pdf",
      },
    ],
  },
}

export function WorkshopDetail({ workshopId }: { workshopId: string }) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const workshop = workshopsData[workshopId] || workshopsData["1"]

  const handleEnrollment = () => {
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
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="bg-card border-b border-[color:var(--border)] py-4 px-6">
        <div className="max-w-7xl mx-auto px-[10%]">
          <Button variant="ghost" onClick={() => router.back()} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver a Talleres
          </Button>
        </div>
      </div>

      {/* Workshop Header */}
      <section className="py-12 px-6 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-[10%]">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Workshop Image */}
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={workshop.image || "/placeholder.svg"}
                alt={workshop.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Workshop Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-3">{workshop.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{workshop.title}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">{workshop.description}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>{workshop.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <span>{workshop.level}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-5 w-5 text-primary" />
                  <span>{workshop.instructor}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="text-3xl font-bold text-primary">{workshop.price}</div>
                <Button size="lg" className="rounded-2xl px-8" onClick={() => setIsModalOpen(true)}>
                  Inscribirse Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto px-[10%]">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Objetivos del Taller</h2>
            <ul className="space-y-3">
              {workshop.objectives.map((objective: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{objective}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto px-[10%]">
          <h2 className="text-2xl font-bold text-foreground mb-6">Contenido del Taller</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {workshop.content.map((item: any, index: number) => (
              <Card key={index} className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  {item.type === "video" ? (
                    <Video className="h-5 w-5 text-primary" />
                  ) : (
                    <BookOpen className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.duration}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto px-[10%]">
          <h2 className="text-2xl font-bold text-foreground mb-6">Recursos Descargables</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {workshop.resources.map((resource: any, index: number) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                    <Button variant="outline" size="sm" className="gap-2 rounded-xl bg-transparent">
                      <Download className="h-4 w-4" />
                      Descargar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 px-4 text-center space-y-6">
            {!isLoading && !isSuccess && (
              <>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Confirmar Inscripción</h3>
                  <p className="text-muted-foreground">
                    ¿Deseas inscribirte en el taller "{workshop.title}" por {workshop.price}?
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  <Button variant="outline" onClick={handleCloseModal} className="flex-1 rounded-xl bg-transparent">
                    Cancelar
                  </Button>
                  <Button onClick={handleEnrollment} className="flex-1 rounded-xl">
                    Confirmar
                  </Button>
                </div>
              </>
            )}

            {isLoading && (
              <>
                <Loader2 className="h-16 w-16 text-primary animate-spin" />
                <p className="text-muted-foreground">Procesando inscripción...</p>
              </>
            )}

            {isSuccess && (
              <>
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Inscripción Exitosa</h3>
                  <p className="text-muted-foreground">
                    Ya tienes acceso al taller. Revisa tu correo para más detalles.
                  </p>
                </div>
                <Button onClick={handleCloseModal} className="w-full rounded-xl">
                  Okay
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
