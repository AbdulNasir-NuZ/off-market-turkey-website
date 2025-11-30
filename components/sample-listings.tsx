"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

const listings = [
  {
    id: 1,
    location: "Bodrum, Aegean Coast",
    price: "$850,000 - $1.2M",
    yield: "9.2%",
    type: "Luxury Villa",
  },
  {
    id: 2,
    location: "Istanbul, Bosphorus View",
    price: "$1.5M - $2.1M",
    yield: "8.5%",
    type: "Penthouse",
  },
  {
    id: 3,
    location: "Alaçatı, Boutique",
    price: "$450,000 - $650,000",
    yield: "8.9%",
    type: "Townhouse",
  },
]

export default function SampleListings() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Sample Opportunities</h2>
          <p className="text-lg text-muted-foreground">Available for Verified Investors Only</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              {/* Blurred image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden mb-6">
                <div
                  className="absolute inset-0 blur-md"
                  style={{
                    backgroundImage: `url(/placeholder.svg?height=300&width=400&query=${listing.type} in ${listing.location})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white text-center font-serif text-lg">Available for Verified Investors Only</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl text-foreground">{listing.type}</h3>
                <p className="text-muted-foreground text-sm">{listing.location}</p>

                <div className="flex justify-between items-center pt-4 border-t border-secondary">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Price Range</p>
                    <p className="font-semibold text-foreground">{listing.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Annual Yield</p>
                    <p className="font-semibold text-accent text-lg">{listing.yield}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 border-accent text-accent hover:bg-accent/10 bg-transparent"
                >
                  Request Access to View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
