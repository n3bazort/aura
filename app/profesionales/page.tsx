import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { ProfessionalsDirectory } from "@/components/professionals-directory"

export default function ProfessionalesPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      <main className="md:ml-20 pt-16">
        <PageHeader
          title="Encuentra al profesional ideal para tu familia"
          description="Conecta con especialistas certificados que comprenden las necesidades únicas del autismo y están
                comprometidos con el bienestar de tu familia."
          imageSrc="/3.png"
          imageAlt="Profesional especializado en autismo"
        />
        <ProfessionalsDirectory />
      </main>

      <Footer />
    </div>
  )
}
