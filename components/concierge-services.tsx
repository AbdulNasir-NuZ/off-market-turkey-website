"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Home, Scale, BarChart3, Wrench, Dessert as Passport, Headphones } from "lucide-react"

const services = [
  {
    title: "Property Sourcing",
    description: "Access to exclusive off-market listings before they're publicly available.",
    icon: Home,
  },
  {
    title: "Legal Guidance",
    description: "Expert support navigating Turkish real estate law and compliance requirements.",
    icon: Scale,
  },
  {
    title: "Financial Planning",
    description: "Personalized investment strategies and ROI optimization for your portfolio.",
    icon: BarChart3,
  },
  {
    title: "Property Management",
    description: "Full-service management including maintenance, tenant relations, and reporting.",
    icon: Wrench,
  },
  {
    title: "Citizenship Support",
    description: "Guidance through the Turkish citizenship program and residency requirements.",
    icon: Passport,
  },
  {
    title: "24/7 Support",
    description: "Dedicated concierge team available around the clock for your needs.",
    icon: Headphones,
  },
]

export default function ConciergeServices() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Concierge Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From property sourcing to ongoing management, our dedicated team handles every detail of your investment
            journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg w-fit">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-background font-semibold px-8">
            Schedule Your Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
