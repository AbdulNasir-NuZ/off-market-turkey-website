import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BlogHeader() {
  return (
    <header className="bg-primary text-background border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold">
          OffMarket
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/" className="hover:text-background/70 transition">
            Home
          </Link>
          <Link href="/blog" className="hover:text-background/70 transition">
            Blog
          </Link>
          <Link href="/resources" className="hover:text-background/70 transition">
            Resources
          </Link>
          <Button className="bg-accent hover:bg-accent/90 text-background">
            <Link href="/auth/login">Sign In</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
