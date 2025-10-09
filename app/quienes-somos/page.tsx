import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { AboutContent } from "@/components/about-content"

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      <main className="md:ml-20 pt-16">
        <PageHeader
          title="Quiénes Somos"
          description="Conoce nuestra misión, valores y el equipo detrás de Aura"
          imageSrc="/ninahome.png"
          imageAlt="Equipo Aura"
        />
        <AboutContent />
      </main>

      <Footer />
    </div>
  )
}
