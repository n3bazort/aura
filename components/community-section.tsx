"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation, useScrollAnimations } from "@/hooks/use-scroll-animation"

const stories = [
  {
    author: "María López",
    initials: "ML",
    text: "Hoy mi hijo me miró a los ojos por primera vez. Lloré de emoción. ❤️",
    likes: 238,
    comments: [
      { author: "José", text: "¡Qué hermoso momento!" },
      { author: "Carla", text: "Gracias por compartir, me llenó el alma." },
    ],
    image: "/ninohome.png",
  },
  {
    author: "Andrés Ramírez",
    initials: "AR",
    text: "A mi hijo le encanta armar rompecabezas complejos, tiene una mente brillante.",
    likes: 150,
    comments: [{ author: "Lucía", text: "Qué orgullo, cada niño tiene su luz 💙" }],
    image: "/child-solving-complex-puzzle.jpg",
  },
  {
    author: "Carmen Silva",
    initials: "CS",
    text: "Después de meses de terapia, hoy dijo su primera palabra completa. No hay palabras para describir esta alegría.",
    likes: 312,
    comments: [
      { author: "Pedro", text: "¡Felicidades! Cada logro es un tesoro." },
      { author: "Ana", text: "Hermoso testimonio 💜" },
    ],
    image: "/child-speaking-with-therapist.jpg",
  },
]

export function CommunitySection() {
  const [likedStories, setLikedStories] = useState<Set<number>>(new Set())
  const [showComments, setShowComments] = useState<Set<number>>(new Set())
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { refs: storyRefs, visibilities: storyVisibilities } = useScrollAnimations(stories.length)

  const toggleLike = (index: number) => {
    setLikedStories((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const toggleComments = (index: number) => {
    setShowComments((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section id="comunidad" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className={`text-center mb-16 space-y-4 scroll-animate ${titleVisible ? "visible" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Historias de la Comunidad</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Celebramos cada logro, cada sonrisa, cada paso adelante
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              ref={(el) => {
                storyRefs.current[index] = el
              }}
              className={`scroll-animate ${storyVisibilities[index] ? "visible" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={`Historia de ${story.author}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">{story.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-foreground">{story.author}</span>
                  </div>

                  {/* Text */}
                  <p className="text-foreground leading-relaxed">{story.text}</p>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-2">
                    <Button variant="ghost" size="sm" className="gap-2" onClick={() => toggleLike(index)}>
                      <Heart className={`h-5 w-5 ${likedStories.has(index) ? "fill-red-500 text-red-500" : ""}`} />
                      <span>{story.likes + (likedStories.has(index) ? 1 : 0)}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2" onClick={() => toggleComments(index)}>
                      <MessageCircle className="h-5 w-5" />
                      <span>{story.comments.length}</span>
                    </Button>
                  </div>

                  {/* Comments */}
                  {showComments.has(index) && (
                    <div className="space-y-3 pt-3 border-t">
                      {story.comments.map((comment, commentIndex) => (
                        <div key={commentIndex} className="space-y-1">
                          <span className="font-semibold text-sm text-foreground">{comment.author}</span>
                          <p className="text-sm text-muted-foreground">{comment.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/comunidad">
            <Button size="lg" variant="outline" className="rounded-xl bg-transparent">
              Ver más historias
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
