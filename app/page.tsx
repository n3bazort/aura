import { TopBar } from "@/components/top-bar"
import { SidebarNav } from "@/components/sidebar-nav"
import { HeroSection } from "@/components/hero-section"
import { InfoGrid } from "@/components/info-grid"
import { AutismInfoSection } from "@/components/autism-info-section"
import { ProfessionalsSection } from "@/components/professionals-section"
import { WorkshopsSection } from "@/components/workshops-section"
import { CommunitySection } from "@/components/community-section"
import { PlansSection } from "@/components/plans-section"
import { EventsSection } from "@/components/events-section"
import { Footer } from "@/components/footer"
import { AdBanner } from "@/components/ad-banner"

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      {/* MÁRGENES LATERALES: Ajusta el valor px-[14%] según necesites para pruebas */}
      <main className="md:ml-20 pt-16 px-4 sm:px-6 md:px-[14%]">
        <HeroSection />
        
        {/* Banner publicitario #1 */}
        <div className="py-8">
          <AdBanner />
        </div>
        
        <div className="bg-primary/5">
          <AutismInfoSection />
        </div>
        <InfoGrid /> 
        
        {/* Banner publicitario #2 */}
        <div className="py-8">
          <AdBanner />
        </div>
        
        <div className="bg-primary/5">
          <ProfessionalsSection />
        </div>
        <WorkshopsSection />
        
        {/* Banner publicitario #3 */}
        <div className="py-8">
          <AdBanner />
        </div>
        
        <div className="bg-primary/5">
          <CommunitySection />
        </div>
        <PlansSection />
        
        {/* Banner publicitario #4 */}
        <div className="py-8">
          <AdBanner />
        </div>
        
        <div className="bg-primary/5">
          <EventsSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}
