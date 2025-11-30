import Footer from "@/components/footer"

export const metadata = {
  title: "About OffMarket Listing Turkey",
  description: "Learn about our exclusive off-market property platform for verified investors.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">About OffMarket Listing Turkey</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A private investment club connecting verified investors with exclusive off-market real estate
              opportunities in Turkey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Exclusivity",
                description:
                  "Access to off-market properties not available to the general public, curated for high-net-worth investors.",
              },
              {
                title: "Expertise",
                description:
                  "Our team brings decades of experience in Turkish real estate, legal compliance, and international investment.",
              },
              {
                title: "Discretion",
                description:
                  "Complete privacy and confidentiality for all investor information and transaction details.",
              },
            ].map((item, index) => (
              <div key={index} className="luxury-card">
                <h3 className="text-xl font-serif text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-serif text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              To provide verified investors with access to premium off-market real estate opportunities in Turkey while
              maintaining the highest standards of discretion and expertise.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
