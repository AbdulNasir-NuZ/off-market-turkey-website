"use client"

import DashboardHeader from "@/components/dashboard/dashboard-header"
import PropertyListings from "@/components/dashboard/property-listings"
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar"
import { useState } from "react"
export const dynamic = "force-dynamic";

export default function PropertiesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")

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
