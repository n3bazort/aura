import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { WorkshopDetail } from "@/components/workshop-detail"

export default function WorkshopDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      <main className="md:ml-20 pt-16">
        <WorkshopDetail workshopId={params.id} />
      </main>

      <Footer />
    </div>
  )
}
