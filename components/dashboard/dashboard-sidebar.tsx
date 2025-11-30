"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface DashboardSidebarProps {
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

export default function DashboardSidebar({ selectedFilter, onFilterChange }: DashboardSidebarProps) {
  const [expandedFilters, setExpandedFilters] = useState<string[]>(["location"])

  const filterGroups = [
    {
      id: "location",
      label: "Location",
      options: [
        { id: "all", label: "All Properties", count: 6 },
        { id: "istanbul", label: "Istanbul", count: 2 },
        { id: "bodrum", label: "Bodrum", count: 2 },
        { id: "cappadocia", label: "Cappadocia", count: 1 },
      ],
    },
    {
      id: "price",
      label: "Investment Amount",
      options: [
        { id: "price-all", label: "All Prices", count: 6 },
        { id: "price-under-200k", label: "Under $200K", count: 1 },
        { id: "price-200k-400k", label: "$200K - $400K", count: 2 },
        { id: "price-400k-plus", label: "$400K+", count: 3 },
      ],
    },
    {
      id: "roi",
      label: "Annual Yield",
      options: [
        { id: "roi-all", label: "All Yields", count: 6 },
        { id: "roi-7-8", label: "7% - 8%", count: 2 },
        { id: "roi-8-9", label: "8% - 9%", count: 2 },
        { id: "roi-9-plus", label: "9%+", count: 2 },
      ],
    },
    {
      id: "citizenship",
      label: "Citizenship Eligibility",
      options: [
        { id: "citizenship-all", label: "All Properties", count: 6 },
        { id: "citizenship-eligible", label: "Citizenship Eligible", count: 4 },
        { id: "citizenship-not-eligible", label: "Not Eligible", count: 2 },
      ],
    },
    {
      id: "yield-type",
      label: "Yield Type",
      options: [
        { id: "yield-all", label: "All Types", count: 6 },
        { id: "yield-rental", label: "Rental Income", count: 3 },
        { id: "yield-appreciation", label: "Capital Appreciation", count: 2 },
        { id: "yield-mixed", label: "Mixed", count: 1 },
      ],
    },
  ]

  const toggleFilter = (filterId: string) => {
    setExpandedFilters((prev) => (prev.includes(filterId) ? prev.filter((f) => f !== filterId) : [...prev, filterId]))
  }

  return (
    <aside className="w-72 bg-secondary/30 border-r border-border p-6 min-h-screen overflow-y-auto">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Filters</h3>
          <div className="space-y-4">
            {filterGroups.map((group) => (
              <div key={group.id}>
                <button
                  onClick={() => toggleFilter(group.id)}
                  className="w-full flex items-center justify-between text-sm font-medium text-foreground hover:text-accent transition mb-2"
                >
                  <span>{group.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {expandedFilters.includes(group.id) ? "−" : "+"}
                  </span>
                </button>
                {expandedFilters.includes(group.id) && (
                  <div className="space-y-2 pl-2">
                    {group.options.map((option) => (
                      <Button
                        key={option.id}
                        onClick={() => onFilterChange(option.id)}
                        variant={selectedFilter === option.id ? "default" : "ghost"}
                        className={`w-full justify-between text-xs h-8 ${
                          selectedFilter === option.id
                            ? "bg-accent text-background hover:bg-accent/90"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        <span>{option.label}</span>
                        <span className="opacity-70">({option.count})</span>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <Card className="p-4 bg-accent/10 border-accent/20">
          <h4 className="font-semibold text-foreground mb-3">Portfolio Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Properties</span>
              <span className="font-semibold text-foreground">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Investment</span>
              <span className="font-semibold text-accent">$850K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Annual Yield</span>
              <span className="font-semibold text-accent">8.2%</span>
            </div>
          </div>
        </Card>

        <Card className="p-4 border-border">
          <h4 className="font-semibold text-foreground mb-3">Quick Actions</h4>
          <div className="space-y-2">
            <Button className="w-full bg-accent hover:bg-accent/90 text-background text-sm">
              Request Consultation
            </Button>
            <Button variant="outline" className="w-full bg-transparent text-sm">
              Download Reports
            </Button>
          </div>
        </Card>
      </div>
    </aside>
  )
}
