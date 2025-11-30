import Footer from "@/components/footer"

export const metadata = {
  title: "Privacy Policy - OffMarket Listing Turkey",
  description: "Privacy policy for OffMarket Listing Turkey.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">1. Information We Collect</h2>
              <p>
                We collect information you provide directly, including name, email, and investment preferences to better
                serve your needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">2. How We Use Your Information</h2>
              <p>
                Your information is used to manage investments, communicate about opportunities, and improve our
                platform services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">3. Data Protection</h2>
              <p>
                We implement industry-standard security measures to protect your personal and financial information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif text-foreground mb-3">4. Contact Us</h2>
              <p>For privacy concerns, contact us at privacy@offmarketturkey.com</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
