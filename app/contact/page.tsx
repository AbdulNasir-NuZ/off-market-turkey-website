import Footer from "@/components/footer"

export const metadata = {
  title: "Contact - OffMarket Listing Turkey",
  description: "Get in touch with our investment specialists.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">Our team is here to assist with your investment inquiries.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { label: "Email", value: "hello@offmarketturkey.com" },
              { label: "Phone", value: "+90 (212) 555-0000" },
              { label: "Office", value: "Istanbul, Turkey" },
            ].map((item, index) => (
              <div key={index} className="luxury-card text-center">
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className="text-lg font-medium text-foreground">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="luxury-card">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-md bg-background"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-border rounded-md bg-background"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-md bg-background"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-background py-3 rounded-md font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
