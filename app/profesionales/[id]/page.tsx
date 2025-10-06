import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { ProfessionalProfile } from "@/components/professional-profile"

export default function ProfessionalProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      <main className="md:ml-20 pt-16">
        <ProfessionalProfile professionalId={params.id} />
      </main>

      <Footer />
    </div>
  )
}
