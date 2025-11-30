"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import BlogHeader from "@/components/blog/blog-header"
import BlogSidebar from "@/components/blog/blog-sidebar"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: number
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Navigating Turkey's 2025 Real Estate Cooldown",
    excerpt:
      "Market analysis and strategic opportunities as Turkey's real estate sector enters a consolidation phase in 2025.",
    content: "Full article content here...",
    author: "Sarah Mitchell",
    date: "2025-01-20",
    category: "Market Analysis",
    readTime: 10,
  },
  {
    id: "2",
    title: "Citizenship Through Real Estate: Program Requirements and Timeline",
    excerpt:
      "Complete overview of Turkish citizenship through real estate investment program with updated 2025 requirements.",
    content: "Full article content here...",
    author: "James Chen",
    date: "2025-01-15",
    category: "Citizenship",
    readTime: 12,
  },
  {
    id: "3",
    title: "Bodrum vs Istanbul: Comparative Investment Analysis",
    excerpt:
      "Detailed comparison of investment opportunities, yields, and market dynamics across Turkey's premier destinations.",
    content: "Full article content here...",
    author: "Emma Rodriguez",
    date: "2025-01-10",
    category: "Market Analysis",
    readTime: 9,
  },
  {
    id: "4",
    title: "Tax Optimization Strategies for Foreign Real Estate Investors",
    excerpt:
      "Legal tax planning strategies and compliance requirements for international investors in Turkish real estate.",
    content: "Full article content here...",
    author: "Michael Zhang",
    date: "2025-01-05",
    category: "Legal & Tax",
    readTime: 11,
  },
  {
    id: "5",
    title: "Cappadocia Tourism Boom: Investment Opportunity Analysis",
    excerpt:
      "Examining the tourism growth trajectory and investment potential in Cappadocia's unique hospitality market.",
    content: "Full article content here...",
    author: "Lisa Anderson",
    date: "2024-12-28",
    category: "Market Analysis",
    readTime: 8,
  },
  {
    id: "6",
    title: "Due Diligence Framework for Turkish Property Acquisitions",
    excerpt: "Essential verification steps and legal compliance checklist for evaluating Turkish property investments.",
    content: "Full article content here...",
    author: "David Thompson",
    date: "2024-12-20",
    category: "Investment Guide",
    readTime: 13,
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Investment Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Market analysis, strategic guidance, and educational content for informed investment decisions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <div className="grid md:grid-cols-3 gap-0">
                        <div className="md:col-span-1 h-48 md:h-auto bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl font-serif text-accent/40 mb-2">{post.id}</div>
                            <p className="text-xs text-accent/30 uppercase tracking-wide">Article</p>
                          </div>
                        </div>
                        <div className="md:col-span-2 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                                {post.category}
                              </span>
                              <span className="text-xs text-muted-foreground">{post.readTime} min read</span>
                            </div>
                            <h3 className="text-xl font-serif text-foreground mb-2 hover:text-accent transition">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          </div>
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">{post.author}</span>
                              <span className="mx-2">•</span>
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <Button variant="ghost" className="text-accent hover:bg-accent/10">
                              Read More
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <BlogSidebar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        </div>
      </div>
    </div>
  )
}
