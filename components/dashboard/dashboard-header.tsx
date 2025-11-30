"use client"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function DashboardHeader() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <header className="bg-primary text-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <Link href="/" className="text-2xl font-serif font-bold">
            OffMarket
          </Link>
          <p className="text-sm text-background/70">Investor Dashboard</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-xs text-background/70">{user?.email}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-background text-background hover:bg-background/10 bg-transparent"
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
