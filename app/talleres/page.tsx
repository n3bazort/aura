import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { WorkshopsDirectory } from "@/components/workshops-directory"

export default function TalleresPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      <main className="md:ml-20 pt-16">
        <PageHeader
          title="Talleres y Capacitaciones"
          description="Aprende estrategias prácticas y basadas en evidencia para apoyar el desarrollo"
          imageSrc="/2.png"
          imageAlt="Taller de comunicación"
        />
        <WorkshopsDirectory />
      </main>

      <Footer />
    </div>
  )
}
