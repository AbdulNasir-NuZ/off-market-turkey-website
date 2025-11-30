export default function Footer() {
  return (
    <footer className="bg-primary text-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg mb-4">OffMarket Listing</h3>
            <p className="text-sm text-background/70">Exclusive off-market real estate opportunities in Turkey.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="/about" className="hover:text-background transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/insights" className="hover:text-background transition">
                  Insights
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-background transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="/resources" className="hover:text-background transition">
                  Investment Guide
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-background transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-background transition">
                  Market Reports
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="/privacy" className="hover:text-background transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-background transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-background transition">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2025 OffMarket Listing Turkey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
