import Footer from "@/components/footer"

export const metadata = {
  title: "Disclaimer - OffMarket Listing Turkey",
  description: "Legal disclaimer for OffMarket Listing Turkey.",
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-8">Legal Disclaimer</h1>

          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">Investment Disclaimer</h2>
              <p>
                This platform provides information about real estate opportunities. It does not constitute financial
                advice or investment recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">No Warranty</h2>
              <p>All information is provided on an "as-is" basis without any warranties of accuracy or completeness.</p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">Regulatory Compliance</h2>
              <p>
                Investors should consult legal and financial advisors regarding regulatory compliance and tax
                implications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">Limitation of Liability</h2>
              <p>
                OffMarket Listing Turkey is not liable for losses arising from investment decisions made through this
                platform.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
