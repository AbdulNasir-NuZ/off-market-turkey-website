"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface BlogSidebarProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: "all", label: "All Articles", count: 6 },
  { id: "Investment Guide", label: "Investment Guide", count: 2 },
  { id: "Market Analysis", label: "Market Analysis", count: 2 },
  { id: "Citizenship", label: "Citizenship", count: 1 },
  { id: "Legal & Tax", label: "Legal & Tax", count: 1 },
]

export default function BlogSidebar({ selectedCategory, onCategoryChange }: BlogSidebarProps) {
  return (
    <aside className="space-y-6">
      <Card className="p-6 border-border">
        <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className={`w-full justify-between text-left ${
                selectedCategory === category.id
                  ? "bg-accent text-background hover:bg-accent/90"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              <span>{category.label}</span>
              <span className="text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-accent/10 border-accent/20">
        <h3 className="text-lg font-serif font-semibold text-foreground mb-3">Featured Resource</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Download our comprehensive guide to Turkish real estate investment.
        </p>
        <Button className="w-full bg-accent hover:bg-accent/90 text-background">Download PDF</Button>
      </Card>

      <Card className="p-6 border-border">
        <h3 className="text-lg font-serif font-semibold text-foreground mb-3">Newsletter</h3>
        <p className="text-sm text-muted-foreground mb-4">Get weekly market insights and investment opportunities.</p>
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full px-3 py-2 border border-border rounded-md text-sm mb-3 bg-background"
        />
        <Button className="w-full bg-accent hover:bg-accent/90 text-background">Subscribe</Button>
      </Card>
    </aside>
  )
}
