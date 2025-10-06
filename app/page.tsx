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

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <SidebarNav />

      <main className="md:ml-20 pt-16">
        <HeroSection />
        <div className="bg-primary/5">
          <InfoGrid />
        </div>
        <AutismInfoSection />
        <div className="bg-primary/5">
          <ProfessionalsSection />
        </div>
        <WorkshopsSection />
        <div className="bg-primary/5">
          <CommunitySection />
        </div>
        <PlansSection />
        <div className="bg-primary/5">
          <EventsSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}
