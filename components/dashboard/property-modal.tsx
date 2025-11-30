"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import PropertyInquiryModal from "@/components/property-inquiry-modal"
import type { Property } from "@/lib/db-properties"
import { X, Play, Phone, Mail } from "lucide-react"
import { useState } from "react"

interface PropertyModalProps {
  property: Property
  onClose: () => void
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [showVideo, setShowVideo] = useState(false)
  const [showInquiry, setShowInquiry] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        >
          <Card className="p-0 overflow-hidden">
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
              {showVideo && property.videoUrl ? (
                <video src={property.videoUrl} controls className="w-full h-full object-cover" autoPlay />
              ) : (
                <>
                  <img
                    src={property.imageUrl || "/placeholder.svg?height=400&width=800&query=luxury property"}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  {property.videoUrl && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition group"
                    >
                      <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                    </button>
                  )}
                </>
              )}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-background/90 hover:bg-background text-foreground w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-serif text-foreground mb-2">{property.title}</h2>
                  <p className="text-lg text-accent font-semibold">{property.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Annual Yield</p>
                  <p className="text-3xl font-semibold text-accent">{property.annualYield}%</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-8 p-6 bg-secondary/50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Bedrooms</p>
                  <p className="text-2xl font-semibold text-foreground">{property.bedrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Bathrooms</p>
                  <p className="text-2xl font-semibold text-foreground">{property.bathrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Square Feet</p>
                  <p className="text-2xl font-semibold text-foreground">{property.squareFeet.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Investment</p>
                  <p className="text-2xl font-semibold text-accent">${(property.price / 1000).toFixed(0)}K</p>
                </div>
              </div>

              {property.citizenshipEligible && (
                <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                  <p className="text-sm text-accent font-medium">Eligible for Turkish Citizenship Program</p>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-serif text-foreground mb-3">About This Property</h3>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              {property.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-serif text-foreground mb-4">Key Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <Button
                  onClick={() => setShowInquiry(true)}
                  className="flex-1 bg-accent hover:bg-accent/90 text-background font-semibold py-6 gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Inquiry & Contact
                </Button>
                <a
                  href="tel:+905551234567"
                  className="flex-1 flex items-center justify-center gap-2 border border-accent hover:bg-accent/10 text-foreground rounded-md transition-colors font-semibold py-3"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {showInquiry && <PropertyInquiryModal propertyTitle={property.title} onClose={() => setShowInquiry(false)} />}
    </>
  )
}
