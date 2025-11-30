"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

export default function LeadMagnet() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production, send to backend/email service
    console.log("Lead magnet signup:", email)
    setSubmitted(true)
    setTimeout(() => {
      setEmail("")
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-12 bg-gradient-to-br from-primary to-primary/90 text-background border-0">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">Get Your Free Investment Guide</h2>
                <p className="text-lg text-background/80 mb-6 leading-relaxed">
                  Download our comprehensive guide to Turkish real estate investment. Learn market insights, investment
                  strategies, and how to maximize your returns.
                </p>
                <ul className="space-y-3 text-background/90">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Market overview and trends</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Investment strategies & ROI analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Legal requirements & tax optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>Citizenship program guide</span>
                  </li>
                </ul>
              </div>

              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-background mb-2">Full Name</label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full bg-background/10 border-background/30 text-background placeholder:text-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-background mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-background/10 border-background/30 text-background placeholder:text-background/50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-background mb-2">Investment Range</label>
                    <select className="w-full px-3 py-2 bg-background/10 border border-background/30 text-background rounded-md text-sm">
                      <option value="" className="text-foreground">
                        Select range
                      </option>
                      <option value="100k-250k" className="text-foreground">
                        $100K - $250K
                      </option>
                      <option value="250k-500k" className="text-foreground">
                        $250K - $500K
                      </option>
                      <option value="500k-1m" className="text-foreground">
                        $500K - $1M
                      </option>
                      <option value="1m+" className="text-foreground">
                        $1M+
                      </option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    disabled={submitted}
                    className="w-full bg-accent hover:bg-accent/90 text-background font-semibold py-6"
                  >
                    {submitted ? "Check Your Email!" : "Download Free Guide"}
                  </Button>

                  <p className="text-xs text-background/70 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
