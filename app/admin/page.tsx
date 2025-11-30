"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogOut, Plus } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken")
    if (!adminToken) {
      router.push("/admin/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-serif text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage property listings and uploads</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/admin/properties">
            <Card className="p-8 cursor-pointer hover:shadow-lg transition-shadow h-full">
              <h2 className="text-2xl font-serif text-foreground mb-2">Property Listings</h2>
              <p className="text-muted-foreground mb-6">View and manage all property listings</p>
              <Button className="bg-accent hover:bg-accent/90 text-background">View Listings</Button>
            </Card>
          </Link>

          <Link href="/admin/properties/new">
            <Card className="p-8 cursor-pointer hover:shadow-lg transition-shadow h-full">
              <h2 className="text-2xl font-serif text-foreground mb-2 flex items-center gap-2">
                <Plus className="w-6 h-6" />
                Add New Property
              </h2>
              <p className="text-muted-foreground mb-6">Upload a new property with images and videos</p>
              <Button className="bg-accent hover:bg-accent/90 text-background">Add Property</Button>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
