"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Filter, Plus, ImageIcon, Sparkles } from "lucide-react"

const filterOptions = ["Todos", "Recientes", "Populares", "Preguntas", "Celebraciones"]

const posts = [
  {
    id: 1,
    author: "María López",
    initials: "ML",
    text: "Hoy mi hijo me miró a los ojos por primera vez. Lloré de emoción. Es increíble cómo estos pequeños momentos pueden llenar tanto el corazón. Ver su sonrisa y esa conexión genuina me recuerda por qué cada día vale la pena.",
    likes: 238,
    comments: [
      { author: "José Martínez", initials: "JM", text: "¡Qué hermoso momento! Felicidades María." },
      { author: "Carla Ruiz", initials: "CR", text: "Gracias por compartir, me llenó el alma." },
    ],
    image: "/comunidad/retrato-de-un-nino-sonriente.jpg",
    type: "Celebración",
    timestamp: "Hace 2 horas",
  },
  {
    id: 2,
    author: "Andrés Ramírez",
    initials: "AR",
    text: "¿Alguien tiene recomendaciones de actividades sensoriales para hacer en casa? Mi hijo de 5 años está muy inquieto últimamente y necesitamos opciones para ayudarlo a regular sus emociones.",
    likes: 45,
    comments: [
      {
        author: "Lucía Torres",
        initials: "LT",
        text: "Nosotros usamos una caja sensorial con arroz y juguetes pequeños.",
      },
    ],
    image: "/comunidad/16.jpg",
    type: "Pregunta",
    timestamp: "Hace 4 horas",
  },
  {
    id: 3,
    author: "Carmen Silva",
    initials: "CS",
    text: "Después de meses de terapia, hoy dijo su primera palabra completa: 'mamá'. No hay palabras para describir esta alegría. Cada sesión, cada ejercicio, cada momento de paciencia valió la pena.",
    likes: 312,
    comments: [
      { author: "Pedro Gómez", initials: "PG", text: "¡Felicidades! Cada logro es un tesoro." },
      { author: "Ana Morales", initials: "AM", text: "Hermoso testimonio. Me hiciste llorar de emoción." },
    ],
    image: "/comunidad/madre sujetando a su niño con autismo.png",
    type: "Celebración",
    timestamp: "Hace 6 horas",
  },
  {
    id: 4,
    author: "Patricia Ruiz",
    initials: "PR",
    text: "Compartiendo nuestra rutina matutina que nos ha funcionado muy bien. Usamos pictogramas para cada actividad y ha reducido mucho la ansiedad de mi hija. La consistencia y la estructura visual han sido claves.",
    likes: 189,
    comments: [{ author: "Marta Gómez", initials: "MG", text: "Excelente idea. ¿Dónde conseguiste los pictogramas?" }],
    image: "/comunidad/17.jpg",
    type: "Consejo",
    timestamp: "Hace 1 día",
  },
  {
    id: 5,
    author: "José Martínez",
    initials: "JM",
    text: "Mi hijo armó un rompecabezas de 500 piezas en menos de una hora. Tiene una mente brillante y una concentración increíble. Cada día me sorprende con sus habilidades especiales.",
    likes: 156,
    comments: [{ author: "Lucía Torres", initials: "LT", text: "Qué orgullo, cada niño tiene su luz especial." }],
    image: "/comunidad/primer-plano-de-un-chico-lindo-mirando-hacia-otro-lado.jpg",
    type: "Celebración",
    timestamp: "Hace 1 día",
  },
  {
    id: 6,
    author: "Lucía Torres",
    initials: "LT",
    text: "¿Alguien ha probado la dieta sin gluten? He leído que puede ayudar con algunos síntomas. Me gustaría escuchar experiencias reales antes de hacer cambios importantes en la alimentación.",
    likes: 67,
    comments: [
      {
        author: "Ana Morales",
        initials: "AM",
        text: "Nosotros la probamos por 6 meses. No vimos cambios significativos.",
      },
    ],
    image: "/comunidad/18.jpg",
    type: "Pregunta",
    timestamp: "Hace 2 días",
  },
  {
    id: 7,
    author: "Roberto Flores",
    initials: "RF",
    text: "Hoy celebramos que mi hijo logró ir al supermercado sin auriculares. Hace un año era imposible. El progreso es real y cada pequeño paso nos acerca a una mayor independencia.",
    likes: 245,
    comments: [{ author: "María López", initials: "ML", text: "¡Qué logro tan grande! Felicidades a ambos." }],
    image: "/comunidad/nicho con cascos asiladores de sonido en sus oidos, sonriedno hacia la camara.png",
    type: "Celebración",
    timestamp: "Hace 2 días",
  },
  {
    id: 8,
    author: "Ana Morales",
    initials: "AM",
    text: "Recomiendo mucho el libro 'El cerebro del niño explicado a los padres'. Me ayudó a entender mejor a mi hija y a conectar con ella de manera más efectiva. El conocimiento es poder.",
    likes: 134,
    comments: [{ author: "Carla Ruiz", initials: "CR", text: "Gracias por la recomendación. Lo voy a buscar." }],
    image: "/comunidad/19.jpg",
    type: "Consejo",
    timestamp: "Hace 3 días",
  },
  {
    id: 9,
    author: "Diego Vargas",
    initials: "DV",
    text: "Hoy fue el primer día de escuela de mi hija y todo salió mejor de lo esperado. La maestra está muy preparada y el ambiente es inclusivo. Finalmente encontramos el lugar ideal.",
    likes: 198,
    comments: [{ author: "Carmen Silva", initials: "CS", text: "Qué alegría leer esto. Felicidades." }],
    image: "/comunidad/nino-feliz-con-sindrome-de-down-jugando-afuera.jpg",
    type: "Celebración",
    timestamp: "Hace 3 días",
  },
  {
    id: 10,
    author: "Carla Ruiz",
    initials: "CR",
    text: "¿Qué estrategias usan para las transiciones? Mi hijo tiene mucha dificultad cuando cambiamos de actividad. Cualquier consejo es bienvenido.",
    likes: 89,
    comments: [{ author: "Patricia Ruiz", initials: "PR", text: "Usamos un temporizador visual y funciona muy bien." }],
    image: "/comunidad/20.jpg",
    type: "Pregunta",
    timestamp: "Hace 4 días",
  },
  {
    id: 11,
    author: "Pedro Gómez",
    initials: "PG",
    text: "Compartiendo esta foto de nuestro rincón sensorial en casa. Ha sido un espacio de calma para toda la familia. Los columpios, cojines y elementos táctiles han hecho maravillas.",
    likes: 223,
    comments: [{ author: "Roberto Flores", initials: "RF", text: "Se ve hermoso. Gracias por compartir la idea." }],
    image: "/comunidad/21.jpg",
    type: "Consejo",
    timestamp: "Hace 4 días",
  },
  {
    id: 12,
    author: "Marta Gómez",
    initials: "MG",
    text: "Mi hija acaba de graduarse de preescolar. Hace tres años no hablaba y hoy dio un discurso frente a todos. Estoy tan orgullosa. Los límites solo existen en nuestra mente.",
    likes: 387,
    comments: [{ author: "José Martínez", initials: "JM", text: "Qué hermoso logro. Felicidades a toda la familia." }],
    image: "/comunidad/22.jpg",
    type: "Celebración",
    timestamp: "Hace 5 días",
  },
  {
    id: 13,
    author: "Luis Herrera",
    initials: "LH",
    text: "Recordatorio importante: cada niño tiene su propio ritmo. No compares el progreso de tu hijo con otros. Celebra cada pequeño logro. El amor y la paciencia son nuestra mejor herramienta.",
    likes: 412,
    comments: [{ author: "María López", initials: "ML", text: "Necesitaba leer esto hoy. Gracias." }],
    image: "/comunidad/23.jpg",
    type: "Consejo",
    timestamp: "Hace 5 días",
  },
  {
    id: 14,
    author: "Sofía Mendoza",
    initials: "SM",
    text: "¿Alguien tiene experiencia con terapia ocupacional? Estamos considerando iniciarla y me gustaría saber qué esperar. Cualquier información será muy útil.",
    likes: 76,
    comments: [
      {
        author: "Diego Vargas",
        initials: "DV",
        text: "Nosotros llevamos 2 años y ha sido transformador. Muy recomendado.",
      },
    ],
    image: "/comunidad/24.jpg",
    type: "Pregunta",
    timestamp: "Hace 6 días",
  },
  {
    id: 15,
    author: "Fernando Castro",
    initials: "FC",
    text: "Hoy mi hijo me dio un abrazo espontáneo por primera vez en su vida. Tengo 8 años esperando este momento. No puedo parar de llorar. Este abrazo vale más que mil palabras.",
    likes: 456,
    comments: [
      { author: "Carmen Silva", initials: "CS", text: "Qué momento tan especial. Me hiciste llorar también." },
    ],
    image: "/comunidad/26.jpg",
    type: "Celebración",
    timestamp: "Hace 6 días",
  },
  {
    id: 16,
    author: "Gabriela Ortiz",
    initials: "GO",
    text: "Compartiendo nuestro tablero de comunicación visual. Lo hicimos en casa con materiales simples y ha mejorado mucho la comunicación. La creatividad no tiene límites cuando se trata de ayudar a nuestros hijos.",
    likes: 167,
    comments: [{ author: "Andrés Ramírez", initials: "AR", text: "Excelente idea. ¿Podrías compartir más detalles?" }],
    image: "/comunidad/27.jpg",
    type: "Consejo",
    timestamp: "Hace 1 semana",
  },
  {
    id: 17,
    author: "Ricardo Vega",
    initials: "RV",
    text: "Después de años de búsqueda, finalmente encontramos un dentista que entiende las necesidades de mi hijo. Si alguien en Quito necesita recomendación, con gusto la comparto. La empatía profesional lo cambia todo.",
    likes: 134,
    comments: [{ author: "Lucía Torres", initials: "LT", text: "Por favor comparte. Estamos buscando uno." }],
    image: "/comunidad/28.jpg",
    type: "Consejo",
    timestamp: "Hace 1 semana",
  },
  {
    id: 18,
    author: "Valentina Rojas",
    initials: "VR",
    text: "¿Cómo manejan las crisis sensoriales en lugares públicos? A veces me siento muy juzgada por las miradas de la gente. Necesito estrategias que realmente funcionen.",
    likes: 203,
    comments: [
      {
        author: "Pedro Gómez",
        initials: "PG",
        text: "Llevo siempre auriculares y una manta pesada. Y recuerda, tú conoces a tu hijo mejor que nadie.",
      },
    ],
    image: "/comunidad/29.jpg",
    type: "Pregunta",
    timestamp: "Hace 1 semana",
  },
  {
    id: 19,
    author: "Daniela Moreno",
    initials: "DM",
    text: "Mi hijo acaba de hacer su primer amigo en el parque. Los vi jugar juntos por 20 minutos. Mi corazón está lleno de alegría. Las conexiones sociales son posibles y hermosas.",
    likes: 289,
    comments: [{ author: "Ana Morales", initials: "AM", text: "Qué hermoso. Las amistades son tan importantes." }],
    image: "/comunidad/30.jpg",
    type: "Celebración",
    timestamp: "Hace 1 semana",
  },
  {
    id: 20,
    author: "Alejandro Soto",
    initials: "AS",
    text: "Quiero agradecer a esta comunidad por todo el apoyo. Hace un año me sentía perdido y solo. Hoy me siento acompañado y con esperanza. Gracias a todos por estar aquí, por compartir, por entender.",
    likes: 521,
    comments: [
      { author: "Roberto Flores", initials: "RF", text: "Estamos juntos en esto. Abrazo grande." },
      { author: "María López", initials: "ML", text: "Gracias a ti por ser parte de esta familia." },
    ],
    image: "/comunidad/31.jpg",
    type: "Celebración",
    timestamp: "Hace 1 semana",
  },
]

export function CommunityFeed() {
  const [selectedFilter, setSelectedFilter] = useState("Todos")
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())
  const [showComments, setShowComments] = useState<Set<number>>(new Set())
  const [showNewPost, setShowNewPost] = useState(false)
  const [newPostText, setNewPostText] = useState("")

  const filteredPosts =
    selectedFilter === "Todos"
      ? posts
      : selectedFilter === "Recientes"
        ? posts.slice(0, 6)
        : selectedFilter === "Populares"
          ? posts.filter((p) => p.likes > 200)
          : selectedFilter === "Preguntas"
            ? posts.filter((p) => p.type === "Pregunta")
            : selectedFilter === "Celebraciones"
              ? posts.filter((p) => p.type === "Celebración")
              : posts

  const toggleLike = (id: number) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const toggleComments = (id: number) => {
    setShowComments((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleCreatePost = () => {
    setNewPostText("")
    setShowNewPost(false)
  }

  return (
    <div className="min-h-screen bg-background pb-12">
      {/* Main Content */}
      {/* 
        ANCHO DEL CONTENEDOR DE POSTS:
        - max-w-xl = 576px (muy estrecho) ✅ ACTUAL
        - max-w-2xl = 672px (recomendado para posts compactos)
        - max-w-3xl = 768px (mediano)
        - max-w-4xl = 896px (ancho - por defecto)
      */}
      <div className="max-w-xl mx-auto px-6 py-12">
        {/* Create Post Card */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          {!showNewPost ? (
            <Button onClick={() => setShowNewPost(true)} className="w-full rounded-xl gap-2" size="lg">
              <Plus className="h-5 w-5" />
              Publica tu momento aquí
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">TU</AvatarFallback>
                </Avatar>
                <span className="font-semibold text-foreground">Tu nombre</span>
              </div>
              <Textarea
                placeholder="¿Qué quieres compartir con la comunidad?"
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                className="min-h-32 resize-none"
              />
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ImageIcon className="h-4 w-4" />
                  Agregar imagen
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowNewPost(false)} className="rounded-xl">
                    Cancelar
                  </Button>
                  <Button onClick={handleCreatePost} className="rounded-xl">
                    Publicar
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Filter Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Filtrar publicaciones</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Feed */}
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              {/* 
                PADDING DE LA CARD:
                - p-3 = 12px (muy compacto)
                - p-4 = 16px (compacto - recomendado)
                - p-6 = 24px (espacioso - por defecto)
                - p-8 = 32px (muy espacioso)
              */}
              {/* Post Header */}
              <div className="p-4 pb-2">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">{post.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{post.author}</p>
                      <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{post.type}</Badge>
                </div>

                {/* Post Text */}
                <p className="text-foreground leading-relaxed mb-4">{post.text}</p>
              </div>

              {/* Post Image */}
              {/* 
                ALTURA DE LAS IMÁGENES (aspect-ratio):
                - aspect-square = 1:1 (cuadrado)
                - aspect-[4/3] = 4:3 (compacto - recomendado)
                - aspect-video = 16:9 (panoramico - por defecto)
                - aspect-[21/9] = 21:9 (muy ancho)
                
                La imagen NO se estira, solo se recorta (object-cover)
              */}
              {post.image && (
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={post.image || "/placeholder.svg"} alt="Post image" className="w-full h-full object-cover" />
                </div>
              )}

              {/* Post Actions */}
              <div className="p-4 pt-3 space-y-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 hover:text-red-500"
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart className={`h-5 w-5 ${likedPosts.has(post.id) ? "fill-red-500 text-red-500" : ""}`} />
                    <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2" onClick={() => toggleComments(post.id)}>
                    <MessageCircle className="h-5 w-5" />
                    <span>{post.comments.length}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Share2 className="h-5 w-5" />
                    <span className="text-sm">Compartir</span>
                  </Button>
                </div>

                {/* Comments Section - Show max 2 by default */}
                {!showComments.has(post.id) && post.comments.length > 0 && (
                  <div className="space-y-3 pt-4 border-t">
                    {post.comments.slice(0, 2).map((comment, commentIndex) => (
                      <div key={commentIndex} className="flex gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                            {comment.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="font-semibold text-sm text-foreground">{comment.author}</p>
                          <p className="text-sm text-muted-foreground">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                    {post.comments.length > 2 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleComments(post.id)}
                        className="text-primary"
                      >
                        Ver todos los comentarios ({post.comments.length})
                      </Button>
                    )}
                  </div>
                )}

                {showComments.has(post.id) && (
                  <div className="space-y-4 pt-4 border-t">
                    {post.comments.map((comment, commentIndex) => (
                      <div key={commentIndex} className="flex gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-muted text-muted-foreground text-xs">
                            {comment.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="font-semibold text-sm text-foreground">{comment.author}</p>
                          <p className="text-sm text-muted-foreground">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex gap-3 pt-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">TU</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 flex gap-2">
                        <Textarea placeholder="Escribe un comentario..." className="min-h-10 resize-none" />
                        <Button size="sm" className="rounded-xl">
                          Enviar
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" className="rounded-xl gap-2 bg-transparent">
            <Sparkles className="h-5 w-5" />
            Cargar más historias
          </Button>
        </div>
      </div>
    </div>
  )
}
