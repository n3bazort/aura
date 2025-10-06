import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { ProfessionalProfile } from "@/components/professional-profile"

export default async function ProfessionalProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      <main className="md:ml-20 pt-16">
        <ProfessionalProfile professionalId={id} />
      </main>

      <Footer />
    </div>
  )
}
