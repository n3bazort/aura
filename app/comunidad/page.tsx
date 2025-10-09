import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { Footer } from "@/components/footer"
import { PageHeader } from "@/components/page-header"
import { CommunityFeed } from "@/components/community-feed"
import { SideAdBanner } from "@/components/side-ad-banner"

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
        
        {/* Layout con banners laterales */}
        <div className="relative max-w-[1600px] mx-auto px-4">
          <div className="flex gap-6 justify-center">
            {/* Banner lateral izquierdo - solo visible en pantallas grandes */}
            <div className="hidden xl:block flex-shrink-0">
              <SideAdBanner />
            </div>
            
            {/* Contenido central */}
            <div className="flex-1 max-w-4xl">
              <CommunityFeed />
            </div>
            
            {/* Banner lateral derecho - solo visible en pantallas grandes */}
            <div className="hidden xl:block flex-shrink-0">
              <SideAdBanner />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
