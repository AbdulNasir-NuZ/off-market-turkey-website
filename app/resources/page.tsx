import Footer from "@/components/footer"

export const metadata = {
  title: "Resources - OffMarket Listing Turkey",
  description: "Investment guides, calculators, and resources for Turkish real estate.",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Investment Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive guides, templates, and calculators for Turkish real estate investments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { title: "Investment Guide", description: "Complete guide to Turkish real estate investment" },
              { title: "Market Reports", description: "Latest market analysis and trends" },
              { title: "Valuation Checklist", description: "Property assessment framework" },
              { title: "Tax Strategies", description: "Optimization for foreign investors" },
            ].map((item, index) => (
              <div key={index} className="luxury-card">
                <h3 className="text-xl font-serif text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <button className="text-accent hover:text-accent/80 text-sm font-medium">Download →</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
