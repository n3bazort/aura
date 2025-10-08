"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Globe, MapPin, Filter } from "lucide-react"

const specialties = [
  "Todos",
  "Psicología Infantil",
  "Terapia Ocupacional",
  "Educación Especial",
  "Odontología",
  "Fonoaudiología",
  "Neurología",
  "Psiquiatría",
]


/* const professionals = [
  {
    id: 1,
    name: "Dr. Juan Pérez",
    specialty: "Psicología Infantil",
    location: "Quito",
    phone: "+593 99 123 4567",
    email: "juan.perez@aura.com",
    website: "www.drjuanperez.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 12,
  },
  {
    id: 2,
    name: "Dra. María González",
    specialty: "Terapia Ocupacional",
    location: "Guayaquil",
    phone: "+593 99 234 5678",
    email: "maria.gonzalez@aura.com",
    website: "www.mariagonzalez.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 8,
  },
  {
    id: 3,
    name: "Lic. Carlos Mendoza",
    specialty: "Educación Especial",
    location: "Manabí",
    phone: "+593 99 345 6789",
    email: "carlos.mendoza@aura.com",
    website: "www.carlosmendoza.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 15,
  },
  {
    id: 4,
    name: "Dra. Ana Rodríguez",
    specialty: "Odontología",
    location: "Quito",
    phone: "+593 99 456 7890",
    email: "ana.rodriguez@aura.com",
    website: "www.anarodriguez.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 10,
  },
  {
    id: 5,
    name: "Lic. Pedro Sánchez",
    specialty: "Fonoaudiología",
    location: "Guayaquil",
    phone: "+593 99 567 8901",
    email: "pedro.sanchez@aura.com",
    website: "www.pedrosanchez.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 7,
  },
  {
    id: 6,
    name: "Dr. Luis Martínez",
    specialty: "Neurología",
    location: "Quito",
    phone: "+593 99 678 9012",
    email: "luis.martinez@aura.com",
    website: "www.luismartinez.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 20,
  },
  {
    id: 7,
    name: "Dra. Carmen Torres",
    specialty: "Psiquiatría",
    location: "Manabí",
    phone: "+593 99 789 0123",
    email: "carmen.torres@aura.com",
    website: "www.carmentorres.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 14,
  },
  {
    id: 8,
    name: "Lic. Roberto Flores",
    specialty: "Psicología Infantil",
    location: "Guayaquil",
    phone: "+593 99 890 1234",
    email: "roberto.flores@aura.com",
    website: "www.robertoflores.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 9,
  },
  {
    id: 9,
    name: "Dra. Isabel Ramírez",
    specialty: "Terapia Ocupacional",
    location: "Quito",
    phone: "+593 99 901 2345",
    email: "isabel.ramirez@aura.com",
    website: "www.isabelramirez.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 11,
  },
  {
    id: 10,
    name: "Dr. Fernando Castro",
    specialty: "Educación Especial",
    location: "Manabí",
    phone: "+593 99 012 3456",
    email: "fernando.castro@aura.com",
    website: "www.fernandocastro.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 13,
  },
  {
    id: 11,
    name: "Dra. Patricia Morales",
    specialty: "Odontología",
    location: "Guayaquil",
    phone: "+593 99 123 4568",
    email: "patricia.morales@aura.com",
    website: "www.patriciamorales.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 6,
  },
  {
    id: 12,
    name: "Lic. Diego Vargas",
    specialty: "Fonoaudiología",
    location: "Quito",
    phone: "+593 99 234 5679",
    email: "diego.vargas@aura.com",
    website: "www.diegovargas.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 8,
  },
  {
    id: 13,
    name: "Dr. Andrés Herrera",
    specialty: "Neurología",
    location: "Manabí",
    phone: "+593 99 345 6780",
    email: "andres.herrera@aura.com",
    website: "www.andresherrera.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 18,
  },
  {
    id: 14,
    name: "Dra. Sofía Jiménez",
    specialty: "Psiquiatría",
    location: "Guayaquil",
    phone: "+593 99 456 7891",
    email: "sofia.jimenez@aura.com",
    website: "www.sofiajimenez.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 16,
  },
  {
    id: 15,
    name: "Lic. Miguel Ortiz",
    specialty: "Psicología Infantil",
    location: "Quito",
    phone: "+593 99 567 8902",
    email: "miguel.ortiz@aura.com",
    website: "www.miguelortiz.com",
    image: "/placeholder.svg?height=400&width=400",
    experience: 5,
  },
] */

const professionals = [
  {
    id: 1,
    name: "Dr. Juan Pérez",
    specialty: "Psicología Infantil",
    location: "Quito",
    phone: "+593 99 123 4567",
    email: "juan.perez@aura.com",
    website: "www.drjuanperez.com",
    // Imagen local: 1.png
    image: "1.png", 
    experience: 12,
  },
  {
    id: 2,
    name: "Dra. María González",
    specialty: "Terapia Ocupacional",
    location: "Guayaquil",
    phone: "+593 99 234 5678",
    email: "maria.gonzalez@aura.com",
    website: "www.mariagonzalez.com",
    // Imagen local: 2.png
    image: "2.png",
    experience: 8,
  },
  {
    id: 3,
    name: "Lic. Carlos Mendoza",
    specialty: "Educación Especial",
    location: "Manabí",
    phone: "+593 99 345 6789",
    email: "carlos.mendoza@aura.com",
    website: "www.carlosmendoza.com",
    // Imagen local: 3.png
    image: "3.png",
    experience: 15,
  },
  {
    id: 4,
    name: "Dra. Ana Rodríguez",
    specialty: "Odontología",
    location: "Quito",
    phone: "+593 99 456 7890",
    email: "ana.rodriguez@aura.com",
    website: "www.anarodriguez.com",
    // Imagen local: 4.png
    image: "4.png",
    experience: 10,
  },
  {
    id: 5,
    name: "Lic. Pedro Sánchez",
    specialty: "Fonoaudiología",
    location: "Guayaquil",
    phone: "+593 99 567 8901",
    email: "pedro.sanchez@aura.com",
    website: "www.pedrosanchez.com",
    // Imagen local: 5.png
    image: "5.png",
    experience: 7,
  },
  {
    id: 6,
    name: "Dr. Luis Martínez",
    specialty: "Neurología",
    location: "Quito",
    phone: "+593 99 678 9012",
    email: "luis.martinez@aura.com",
    website: "www.luismartinez.com",
    // Imagen local: 6.png
    image: "6.png",
    experience: 20,
  },
  {
    id: 7,
    name: "Dra. Carmen Torres",
    specialty: "Psiquiatría",
    location: "Manabí",
    phone: "+593 99 789 0123",
    email: "carmen.torres@aura.com",
    website: "www.carmentorres.com",
    // Imagen local: 7.png
    image: "7.png",
    experience: 14,
  },
  {
    id: 8,
    name: "Lic. Roberto Flores",
    specialty: "Psicología Infantil",
    location: "Guayaquil",
    phone: "+593 99 890 1234",
    email: "roberto.flores@aura.com",
    website: "www.robertoflores.com",
    // Imagen local: 8.png
    image: "8.png",
    experience: 9,
  },
  {
    id: 9,
    name: "Dra. Isabel Ramírez",
    specialty: "Terapia Ocupacional",
    location: "Quito",
    phone: "+593 99 901 2345",
    email: "isabel.ramirez@aura.com",
    website: "www.isabelramirez.com",
    // Imagen local: 9.png
    image: "9.png",
    experience: 11,
  },
  {
    id: 10,
    name: "Dr. Fernando Castro",
    specialty: "Educación Especial",
    location: "Manabí",
    phone: "+593 99 012 3456",
    email: "fernando.castro@aura.com",
    website: "www.fernandocastro.com",
    // Imagen local: 10.png
    image: "10.png",
    experience: 13,
  },
  {
    id: 11,
    name: "Dra. Patricia Morales",
    specialty: "Odontología",
    location: "Guayaquil",
    phone: "+593 99 123 4568",
    email: "patricia.morales@aura.com",
    website: "www.patriciamorales.com",
    // Imagen local: 11.png
    image: "11.png",
    experience: 6,
  },
  {
    id: 12,
    name: "Lic. Diego Vargas",
    specialty: "Fonoaudiología",
    location: "Quito",
    phone: "+593 99 234 5679",
    email: "diego.vargas@aura.com",
    website: "www.diegovargas.com",
    // Imagen local: 12.png
    image: "12.png",
    experience: 8,
  },
  {
    id: 13,
    name: "Dr. Andrés Herrera",
    specialty: "Neurología",
    location: "Manabí",
    phone: "+593 99 345 6780",
    email: "andres.herrera@aura.com",
    website: "www.andresherrera.com",
    // Imagen local: 13.png
    image: "13.png",
    experience: 18,
  },
  {
    id: 14,
    name: "Dra. Sofía Jiménez",
    specialty: "Psiquiatría",
    location: "Guayaquil",
    phone: "+593 99 456 7891",
    email: "sofia.jimenez@aura.com",
    website: "www.sofiajimenez.com",
    // Imagen local: 14.png
    image: "14.png",
    experience: 16,
  },
  {
    id: 15,
    name: "Lic. Miguel Ortiz",
    specialty: "Psicología Infantil",
    location: "Quito",
    phone: "+593 99 567 8902",
    email: "miguel.ortiz@aura.com",
    website: "www.miguelortiz.com",
    // Imagen local: 15.png
    image: "15.png",
    experience: 5,
  },
];

export function ProfessionalsDirectory() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todos")

  const filteredProfessionals =
    selectedSpecialty === "Todos" ? professionals : professionals.filter((prof) => prof.specialty === selectedSpecialty)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
     
      {/* Filter Section */}
      <section className="px2 bg-card border-b border-border sticky top-16 z-30 py-0 my-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Filtrar por especialidad</h2>
          </div>
          <div className="flex flex-wrap gap-2 flex-row items-stretch justify-center">
            {specialties.map((specialty) => (
              <Button
                key={specialty}
                variant={selectedSpecialty === specialty ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSpecialty(specialty)}
                className="rounded-full"
              >
                {specialty}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((prof) => (
              <Card
                key={prof.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={prof.image || "/placeholder.svg"}
                    alt={prof.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{prof.name}</h3>
                    <p className="text-sm text-primary font-medium">{prof.specialty}</p>
                    <p className="text-sm text-muted-foreground mt-1">{prof.experience} años de experiencia</p>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{prof.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span>{prof.phone}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1 rounded-xl bg-transparent" asChild>
                      <a href={`mailto:${prof.email}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 rounded-xl bg-transparent" asChild>
                      <a href={`https://${prof.website}`} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4 mr-2" />
                        Web
                      </a>
                    </Button>
                  </div>

                  <Link href={`/profesionales/${prof.id}`}>
                    <Button className="w-full rounded-xl">Ver Perfil Completo</Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
