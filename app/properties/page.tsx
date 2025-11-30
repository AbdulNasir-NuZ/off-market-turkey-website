"use client"

import DashboardHeader from "@/components/dashboard/dashboard-header"
import PropertyListings from "@/components/dashboard/property-listings"
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar"
import { useState } from "react"
import Footer from "@/components/footer"

export default function PropertiesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DashboardHeader title="Available Properties" subtitle="Browse our curated selection of premium investments" />
      <div className="flex flex-1">
        <DashboardSidebar selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
        <main className="flex-1">
          <PropertyListings filter={selectedFilter} />
        </main>
      </div>
      <Footer />
    </div>
  )
}
