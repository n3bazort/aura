import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { WorkshopDetail } from "@/components/workshop-detail"

export default async function WorkshopDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      <main className="md:ml-20 pt-16">
        <WorkshopDetail workshopId={id} />
      </main>

      <Footer />
    </div>
  )
}
