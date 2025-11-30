"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

const locations = [
  {
    name: "Istanbul",
    roi: "8.5%",
    properties: "24",
    description: "Metropolitan luxury and investment potential",
  },
  {
    name: "Bodrum",
    roi: "9.2%",
    properties: "18",
    description: "Coastal villas with citizenship eligibility",
  },
  {
    name: "Antalya",
    roi: "7.8%",
    properties: "15",
    description: "Resort-style properties and developments",
  },
  {
    name: "Alaçatı",
    roi: "8.9%",
    properties: "12",
    description: "Boutique properties in charming coastal town",
  },
]

export default function InteractiveMap() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  return (
    <section ref={ref} className="py-24 px-6 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-foreground mb-16 text-center"
        >
          Investment Hotspots
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url(/placeholder.svg?height=400&width=500&query=Turkey map with highlighted regions)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.3,
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-muted-foreground text-center">Interactive map showing investment regions</p>
            </div>
          </motion.div>

          {/* Location details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              {locations.map((location) => (
                <motion.button
                  key={location.name}
                  onClick={() => setSelectedLocation(location)}
                  whileHover={{ x: 4 }}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    selectedLocation.name === location.name
                      ? "bg-accent/20 border-l-4 border-accent"
                      : "hover:bg-secondary/50"
                  }`}
                >
                  <h3 className="font-serif text-xl text-foreground mb-1">{location.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{location.description}</p>
                  <div className="flex gap-6 text-sm">
                    <span className="text-accent font-semibold">ROI: {location.roi}</span>
                    <span className="text-muted-foreground">{location.properties} properties</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Selected location details */}
            <motion.div
              key={selectedLocation.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20"
            >
              <p className="text-muted-foreground">
                {selectedLocation.name} offers exceptional opportunities with an average ROI of {selectedLocation.roi}
                across {selectedLocation.properties} verified properties.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
