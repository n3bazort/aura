import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { CommunityFeed } from "@/components/community-feed"

export default function ComunidadPage() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      <main className="md:ml-20 pt-16">
        <PageHeader
          title="Comunidad Aura"
          description="Comparte experiencias, celebra logros y encuentra apoyo en nuestra comunidad"
          imageSrc="/1.png"
          imageAlt="Comunidad de apoyo"
        />
        <CommunityFeed />
      </main>

      <Footer />
    </div>
  )
}
