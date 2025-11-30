"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Lock, TrendingUp, Handshake } from "lucide-react"

const pillars = [
  {
    title: "Exclusivity",
    description: "Access properties never listed publicly. Curated opportunities for verified investors only.",
    icon: Lock,
  },
  {
    title: "Yield",
    description: "Consistent 7–9% annual returns on verified off-market Turkish real estate investments.",
    icon: TrendingUp,
  },
  {
    title: "Discretion",
    description: "Complete privacy and confidentiality. Your investment journey remains entirely private.",
    icon: Handshake,
  },
]

export default function ValueProposition() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">What Sets Us Apart</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We operate as a private investment club, not a generic property portal. Every detail signals discretion,
            wealth, and access.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
