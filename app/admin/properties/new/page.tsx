"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload, ArrowLeft, Check, AlertCircle } from "lucide-react"

export default function NewProperty() {
  const router = useRouter()
  const [uploading, setUploading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [uploadError, setUploadError] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    annualYield: "",
    imageUrl: "",
    videoUrl: "",
    bedrooms: "",
    bathrooms: "",
    squareFeet: "",
    citizenshipEligible: false,
    yieldType: "rental",
    features: "",
  })

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: "imageUrl" | "videoUrl") => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setUploadError("")
    try {
      const uploadFormData = new FormData()
      uploadFormData.append("file", file)

      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadFormData,
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Upload failed")
      }
      const data = await res.json()
      setFormData((prev) => ({ ...prev, [field]: data.url }))
      console.log(`[v0] File uploaded successfully: ${file.name}`)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Upload failed"
      console.error("[v0] Upload error:", error)
      setUploadError(errorMessage)
      alert(`Upload failed: ${errorMessage}`)
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const res = await fetch("/api/properties", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          price: Number.parseFloat(formData.price),
          annualYield: Number.parseFloat(formData.annualYield),
          bedrooms: Number.parseInt(formData.bedrooms),
          bathrooms: Number.parseInt(formData.bathrooms),
          squareFeet: Number.parseInt(formData.squareFeet),
          features: formData.features.split(",").map((f) => f.trim()),
        }),
      })

      if (!res.ok) throw new Error("Failed to create property")
      router.push("/admin/properties")
    } catch (error) {
      console.error("[v0] Error creating property:", error)
      alert("Failed to create property")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <Button variant="ghost" onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <h1 className="text-4xl font-serif font-normal mb-8">Add New Property</h1>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-serif font-normal">Basic Information</h2>

              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <Input
                  required
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="Property title"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Input
                    required
                    value={formData.location}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    placeholder="e.g., Istanbul, Bodrum"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Price (USD)</label>
                  <Input
                    required
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                    placeholder="2500000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Property description"
                  className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground"
                  rows={4}
                />
              </div>
            </div>

            {/* Investment Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-serif font-normal">Investment Details</h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Annual Yield (%)</label>
                  <Input
                    required
                    type="number"
                    step="0.1"
                    value={formData.annualYield}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        annualYield: e.target.value,
                      }))
                    }
                    placeholder="8.5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Yield Type</label>
                  <select
                    value={formData.yieldType}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        yieldType: e.target.value,
                      }))
                    }
                    className="w-full px-3 py-2 border border-border rounded-md bg-input text-foreground"
                  >
                    <option value="rental">Rental</option>
                    <option value="capital-appreciation">Capital Appreciation</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.citizenshipEligible}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      citizenshipEligible: e.target.checked,
                    }))
                  }
                  className="rounded border-border"
                />
                <span className="text-sm font-medium">Eligible for Turkish Citizenship</span>
              </label>
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-serif font-normal">Property Details</h2>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Bedrooms</label>
                  <Input
                    type="number"
                    value={formData.bedrooms}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        bedrooms: e.target.value,
                      }))
                    }
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bathrooms</label>
                  <Input
                    type="number"
                    value={formData.bathrooms}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        bathrooms: e.target.value,
                      }))
                    }
                    placeholder="4"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Square Feet</label>
                  <Input
                    type="number"
                    value={formData.squareFeet}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        squareFeet: e.target.value,
                      }))
                    }
                    placeholder="8500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Features (comma-separated)</label>
                <Input
                  value={formData.features}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      features: e.target.value,
                    }))
                  }
                  placeholder="Pool, Smart Home, Cinema Room"
                />
              </div>
            </div>

            {/* Media Upload */}
            <div className="space-y-4">
              <h2 className="text-xl font-serif font-normal">Media</h2>

              {uploadError && (
                <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-red-600">{uploadError}</span>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Featured Image</label>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md cursor-pointer hover:bg-accent/90 disabled:opacity-50">
                    <Upload className="w-4 h-4" />
                    {uploading ? "Uploading..." : "Upload Image"}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "imageUrl")}
                      className="hidden"
                      disabled={uploading}
                    />
                  </label>
                  {formData.imageUrl && <Check className="w-4 h-4 text-green-600" />}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Video (Optional)</label>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-md cursor-pointer hover:bg-secondary/80 disabled:opacity-50">
                    <Upload className="w-4 h-4" />
                    {uploading ? "Uploading..." : "Upload Video"}
                    <input
                      type="file"
                      accept="video/*"
                      onChange={(e) => handleFileUpload(e, "videoUrl")}
                      className="hidden"
                      disabled={uploading}
                    />
                  </label>
                  {formData.videoUrl && <Check className="w-4 h-4 text-green-600" />}
                </div>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={submitting || !formData.imageUrl}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {submitting ? "Creating..." : "Create Property"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
