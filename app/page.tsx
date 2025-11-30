import Hero from "@/components/hero"
import ValueProposition from "@/components/value-proposition"
import InteractiveMap from "@/components/interactive-map"
import SampleListings from "@/components/sample-listings"
import ConciergeServices from "@/components/concierge-services"
import LeadMagnet from "@/components/lead-magnet"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <ValueProposition />
      <InteractiveMap />
      <SampleListings />
      <ConciergeServices />
      <LeadMagnet />
      <Footer />
    </main>
  )
}
