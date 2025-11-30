import Footer from "@/components/footer"

export const metadata = {
  title: "FAQ - OffMarket Listing Turkey",
  description: "Frequently asked questions about our platform and Turkish real estate investments.",
}

export default function FAQPage() {
  const faqs = [
    {
      q: "How do I invest in properties listed on the platform?",
      a: "Contact our team to discuss available opportunities and investment structures suited to your goals.",
    },
    {
      q: "What is the minimum investment amount?",
      a: "Investment minimums vary by property. Contact us for details on current listings.",
    },
    {
      q: "Are properties eligible for Turkish citizenship?",
      a: "Many properties qualify for citizenship programs. Each listing details eligibility requirements.",
    },
    {
      q: "What are typical annual yields?",
      a: "Annual yields typically range from 7-9%, depending on property type and market conditions.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">Find answers to common questions about our platform.</p>
          </div>

          <div className="space-y-6">
            {faqs.map((item, index) => (
              <div key={index} className="luxury-card">
                <h3 className="text-lg font-serif text-foreground mb-3">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
