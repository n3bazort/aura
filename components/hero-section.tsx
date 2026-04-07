import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    // --------------------
    // HERO: contenedor exterior
    // --------------------
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-8 lg:py-0">
      {/* --------------------------------------------------
          FOTO DERECHA (visible en lg y superior)
      --------------------------------------------------- */}
      <div className="lg:hidden px-4 pt-4">
        <div className="max-w-xl mx-auto overflow-hidden rounded-3xl shadow-2xl border border-[color:var(--border)] bg-muted aspect-[4/3]">
          <img
            src="/ninahome.png"
            alt="Familia apoyando a niño con autismo"
            className="w-full h-full object-contain sm:object-cover object-center p-2 sm:p-0"
          />
        </div>
      </div>

      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 overflow-hidden p-4.5">
        <img
          src="/ninahome.png"
          alt="Familia apoyando a niño con autismo"
          className="w-full h-full object-cover object-center relative z-10"
        />
      </div>

      {/* --------------------------------------------------
          CONTENEDOR PRINCIPAL (contenido centrado, dos columnas)
      --------------------------------------------------- */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-10 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

      {/* ----------------------------------------------
        COLUMNA IZQUIERDA: contenido textual (título, p, estadísticas, CTAs)
      ----------------------------------------------- */}
      <div className="space-y-6 lg:space-y-8 animate-fade-in-up text-center lg:text-left">

            {/* Título */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Acompañamos con  <span className="text-primary">ciencia</span>, <span className="text-primary">amor</span>{" "}
              e <span className="text-primary">inclusión</span>
            </h1>

            {/* Párrafo */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
              Aura es una plataforma para madres, padres y cuidadores de niños dentro del Espectro Autista. Encuentra información confiable, formación de calidad y apoyo de la comunidad.
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { value: "500+", label: "Familias" },
                { value: "50+", label: "Profesionales" },
                { value: "100+", label: "Talleres" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-2 sm:p-3 bg-card rounded-xl border border-primary/20 shadow-sm">
                  <div className="text-base sm:text-lg font-bold text-primary">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Llamadas a la acción (CTA) */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/profesionales">
                <Button size="lg" className="w-full sm:w-auto text-sm px-5 py-3 rounded-xl group">
                  Explora Aura
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/quienes-somos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-sm px-5 py-3 rounded-xl bg-card">
                  Conoce más
                </Button>
              </Link>
            </div>
          </div>

      {/* ----------------------------------------------
        COLUMNA DERECHA: espacio (mantiene el mismo ancho que la ilustración)
      ----------------------------------------------- */}
      <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
