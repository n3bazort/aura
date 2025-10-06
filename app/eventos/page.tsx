import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { EventsCalendar } from "@/components/events-calendar"

export default function EventosPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      <main className="md:ml-20 pt-16">
        <PageHeader
          title="Calendario de Eventos"
          description="Participa en charlas, conferencias y webinars con expertos en autismo"
          imageSrc="4.png"
          imageAlt="Evento sobre neurodiversidad"
        />
        <EventsCalendar />
      </main>

      <Footer />
    </div>
  )
}
