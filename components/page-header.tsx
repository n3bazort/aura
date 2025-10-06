export function PageHeader({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
}) {
  return (
    <section className="relative bg-primary py-0 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center my-0">
          {/* Contenido textual - alineado a la derecha */}
          <div className="space-y-6 text-right">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight">
              {title}
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Imagen opcional - sin márgenes extra */}
          {imageSrc && (
            <div className="hidden lg:block">
              <img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full h-auto object-contain rounded-2xl shadow-xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
