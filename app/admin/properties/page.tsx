"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Plus, Edit2, Trash2, ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Property {
  id: string
  title: string
  location: string
  price: number
  annualYield: number
  bedrooms: number
  bathrooms: number
}

const Simplified = "Simplified property management - removed user verification, focused only on property CRUD"

export default function AdminProperties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken")
    if (!adminToken) {
      router.push("/admin/login")
      return
    }
    fetchProperties()
  }, [router])

  const fetchProperties = async () => {
    try {
      const res = await fetch("/api/properties")
      if (res.ok) {
        const data = await res.json()
        setProperties(data)
      }
    } catch (error) {
      console.error("[v0] Error fetching properties:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this property?")) return
    try {
      const res = await fetch(`/api/properties/${id}`, { method: "DELETE" })
      if (res.ok) {
        setProperties(properties.filter((p) => p.id !== id))
      }
    } catch (error) {
      console.error("[v0] Error deleting property:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/admin">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-serif text-foreground mb-2">Property Management</h1>
            <p className="text-muted-foreground">{properties.length} properties listed</p>
          </div>
          <Link href="/admin/properties/new">
            <Button className="bg-accent hover:bg-accent/90 text-background gap-2">
              <Plus className="w-4 h-4" />
              Add Property
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          {properties.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground mb-6">No properties yet</p>
              <Link href="/admin/properties/new">
                <Button className="bg-accent hover:bg-accent/90 text-background">Create First Property</Button>
              </Link>
            </Card>
          ) : (
            properties.map((property) => (
              <Card key={property.id} className="p-6 flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-serif text-foreground mb-2">{property.title}</h3>
                  <p className="text-muted-foreground mb-3">{property.location}</p>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Price:</span>
                      <p className="text-foreground font-medium">${(property.price / 1000).toFixed(0)}K</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Yield:</span>
                      <p className="text-accent font-medium">{property.annualYield}%</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Bedrooms:</span>
                      <p className="text-foreground font-medium">{property.bedrooms}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-destructive hover:text-destructive bg-transparent"
                    onClick={() => handleDelete(property.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </Button>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
