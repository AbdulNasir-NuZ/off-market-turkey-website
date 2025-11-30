import Footer from "@/components/footer"

export const metadata = {
  title: "Terms of Service - OffMarket Listing Turkey",
  description: "Terms of service for OffMarket Listing Turkey.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-8">Terms of Service</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>By using this platform, you agree to be bound by these terms and conditions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">2. Investment Risks</h2>
              <p>Real estate investments carry inherent risks. Past performance does not guarantee future results.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">3. User Responsibilities</h2>
              <p>Users are responsible for maintaining confidentiality and complying with all applicable laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">4. Contact</h2>
              <p>For terms inquiries, contact legal@offmarketturkey.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
