"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import PropertyModal from "./property-modal"
import type { Property } from "@/lib/db-properties"

interface PropertyListingsProps {
  filter: string
}

export default function PropertyListings({ filter }: PropertyListingsProps) {
  const [properties, setProperties] = useState<Property[]>([])
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("/api/properties")
        if (!res.ok) throw new Error("Failed to fetch properties")
        const data = await res.json()
        setProperties(data)
      } catch (error) {
        console.error("[v0] Error fetching properties:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  const filteredProperties =
    filter === "all" ? properties : properties.filter((p) => p.location.toLowerCase() === filter.toLowerCase())

  if (loading) {
    return (
      <div className="p-8">
        <p className="text-muted-foreground">Loading properties...</p>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-serif text-foreground mb-2">Available Properties</h2>
        <p className="text-muted-foreground">{filteredProperties.length} properties matching your criteria</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                {property.imageUrl && (
                  <img
                    src={property.imageUrl || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-4 right-4 bg-accent text-background px-3 py-1 rounded-full text-sm font-semibold">
                  {property.annualYield}% Yield
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-serif text-foreground mb-1">{property.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{property.location}</p>

                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-border">
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-foreground">{property.bedrooms}</p>
                    <p className="text-xs text-muted-foreground">Beds</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-foreground">{property.bathrooms}</p>
                    <p className="text-xs text-muted-foreground">Baths</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-foreground">{(property.squareFeet / 1000).toFixed(1)}k</p>
                    <p className="text-xs text-muted-foreground">Sqft</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-1">{property.description}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Investment</p>
                    <p className="text-2xl font-semibold text-accent">${(property.price / 1000).toFixed(0)}K</p>
                  </div>
                  <Button
                    onClick={() => setSelectedProperty(property)}
                    className="bg-accent hover:bg-accent/90 text-background"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No properties found for your filters</p>
        </Card>
      )}

      {selectedProperty && <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />}
    </div>
  )
}
