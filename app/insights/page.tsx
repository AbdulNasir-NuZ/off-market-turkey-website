import Footer from "@/components/footer"

export const metadata = {
  title: "Insights - OffMarket Listing Turkey",
  description: "Market insights and analysis for Turkish real estate investments.",
}

export default function InsightsPage() {
  const insights = [
    {
      title: "Turkish Real Estate Market 2025",
      description: "Current market conditions, trends, and opportunities in Turkey's luxury real estate sector.",
      date: "January 2025",
    },
    {
      title: "Citizenship Through Investment",
      description:
        "Understanding the Turkish citizenship investment program and real estate qualification requirements.",
      date: "January 2025",
    },
    {
      title: "Istanbul vs Bodrum: Investment Comparison",
      description: "Comparative analysis of returns, rental yields, and appreciation potential in major markets.",
      date: "December 2024",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Market Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-depth analysis and market intelligence for Turkish real estate investments.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {insights.map((item, index) => (
              <div key={index} className="luxury-card hover:border-accent/50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-foreground">{item.title}</h3>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
