"use client"

import { useState } from "react"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import PropertyListings from "@/components/dashboard/property-listings"
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar"
import { useAuth } from "@/context/AuthContext"

export const dynamic = "force-dynamic"

export default function PropertiesPage() {
  const { user } = useAuth() // make sure user info is available
  const [selectedFilter, setSelectedFilter] = useState("all")

  // Optional: redirect if not logged in
  if (!user) return <p className="p-4">Please login to view the dashboard.</p>

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
        <main className="flex-1">
          <PropertyListings filter={selectedFilter} />
        </main>
      </div>
    </div>
  )
}
