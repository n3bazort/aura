"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ArrowLeft, Phone, Mail, Globe, MapPin, Award, Briefcase, Calendar, CheckCircle2, Loader2 } from "lucide-react"

const professionalsData: Record<string, any> = {
  "1": {
    name: "Dr. Juan Pérez",
    specialty: "Psicología Infantil",
    location: "Quito, Ecuador",
    phone: "+593 99 123 4567",
    email: "juan.perez@aura.com",
    website: "www.drjuanperez.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 12,
    bio: "Especialista en desarrollo infantil y trastornos del espectro autista con más de una década de experiencia. Comprometido con el bienestar emocional y cognitivo de cada niño.",
    achievements: [
      "Certificación Internacional en Terapia ABA",
      "Máster en Neuropsicología Infantil - Universidad Central",
      "Miembro activo de la Asociación Ecuatoriana de Autismo",
      "Publicaciones en revistas científicas internacionales",
    ],
    photos: ["/dr-juan-working-1.jpg", "/dr-juan-working-2.jpg", "/dr-juan-working-3.jpg"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7937094474845!2d-78.48785492426895!3d-0.18004099984238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284f0f6d3c!2sQuito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  },
  "2": {
    name: "Dra. María González",
    specialty: "Terapia Ocupacional",
    location: "Guayaquil, Ecuador",
    phone: "+593 99 234 5678",
    email: "maria.gonzalez@aura.com",
    website: "www.mariagonzalez.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 8,
    bio: "Terapeuta ocupacional especializada en integración sensorial y desarrollo de habilidades motoras finas en niños con TEA.",
    achievements: [
      "Certificación en Integración Sensorial de Ayres",
      "Especialización en Terapia Ocupacional Pediátrica",
      "Formación en Método DIR/Floortime",
      "Colaboradora en programas de inclusión escolar",
    ],
    photos: ["/dra-maria-working-1.jpg", "/dra-maria-working-2.jpg", "/dra-maria-working-3.jpg"],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0!2d-79.88!3d-2.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTEnMjQuMCJTIDc5wrA1Mic0OC4wIlc!5e0!3m2!1sen!2sec!4v1234567890123!5m2!1sen!2sec",
  },
}

export function ProfessionalProfile({ professionalId }: { professionalId: string }) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const professional = professionalsData[professionalId] || professionalsData["1"]

  const handleReservation = () => {
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
      <div className="bg-card border-b border-border py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <Button variant="ghost" onClick={() => router.back()} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver a Profesionales
          </Button>
        </div>
      </div>

      {/* Profile Header */}
      <section className="py-12 px-6 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={professional.image || "/placeholder.svg"}
                  alt={professional.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">{professional.name}</h1>
                <p className="text-2xl text-primary font-semibold">{professional.specialty}</p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{professional.bio}</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{professional.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{professional.experience} años de experiencia</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{professional.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{professional.email}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button size="lg" className="rounded-2xl px-8" onClick={() => setIsModalOpen(true)}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Reservar Consulta
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl px-8 bg-transparent" asChild>
                  <a href={`https://${professional.website}`} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-5 w-5" />
                    Visitar Sitio Web
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Logros y Certificaciones</h2>
            </div>
            <ul className="space-y-3">
              {professional.achievements.map((achievement: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Photos */}
      <section className="py-12 px-6 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">En Acción</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {professional.photos.map((photo: string, index: number) => (
              <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={photo || "/placeholder.svg"}
                  alt={`${professional.name} trabajando ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Ubicación</h2>
          <Card className="overflow-hidden">
            <div className="aspect-video">
              <iframe
                src={professional.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Reservation Modal */}
      <Dialog open={isModalOpen} onOpenChange={handleCloseModal}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center py-8 px-4 text-center space-y-6">
            {!isLoading && !isSuccess && (
              <>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Confirmar Reserva</h3>
                  <p className="text-muted-foreground">¿Deseas solicitar una consulta con {professional.name}?</p>
                </div>
                <div className="flex gap-3 w-full">
                  <Button variant="outline" onClick={handleCloseModal} className="flex-1 rounded-xl bg-transparent">
                    Cancelar
                  </Button>
                  <Button onClick={handleReservation} className="flex-1 rounded-xl">
                    Confirmar
                  </Button>
                </div>
              </>
            )}

            {isLoading && (
              <>
                <Loader2 className="h-16 w-16 text-primary animate-spin" />
                <p className="text-muted-foreground">Enviando solicitud...</p>
              </>
            )}

            {isSuccess && (
              <>
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">Solicitud Enviada</h3>
                  <p className="text-muted-foreground">
                    Pronto te pondrán en contacto contigo para confirmar tu consulta.
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
