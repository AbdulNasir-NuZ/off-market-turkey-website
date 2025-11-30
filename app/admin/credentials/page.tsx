"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function AdminCredentials() {
  const [showPassword, setShowPassword] = useState(false)
  const [copied, setCopied] = useState(false)

  const adminCredentials = {
    email: "admin@offmarketturkey.com",
    password: "SecureAdmin@2025",
    accessUrl: "/admin",
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background pt-8">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-8">
            <h1 className="text-4xl font-serif text-foreground mb-2">Admin Credentials</h1>
            <p className="text-muted-foreground">Use these credentials to access the admin dashboard</p>
          </div>

          <Card className="p-8 border-accent/20 bg-accent/5">
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-3">Admin Email</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={adminCredentials.email}
                    readOnly
                    className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground font-mono text-sm"
                  />
                  <Button
                    onClick={() => handleCopy(adminCredentials.email)}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-3">Admin Password</label>
                <div className="flex items-center gap-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={adminCredentials.password}
                    readOnly
                    className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground font-mono text-sm"
                  />
                  <Button onClick={() => setShowPassword(!showPassword)} variant="outline" size="sm" className="gap-2">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                  <Button
                    onClick={() => handleCopy(adminCredentials.password)}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>

              {/* Access URL */}
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-3">Admin Dashboard URL</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={adminCredentials.accessUrl}
                    readOnly
                    className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground font-mono text-sm"
                  />
                  <Button
                    onClick={() => handleCopy(adminCredentials.accessUrl)}
                    variant="outline"
                    size="sm"
                    className="gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    {copied ? "Copied" : "Copy"}
                  </Button>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-8 p-4 bg-background border border-border rounded-lg">
                <h3 className="font-serif text-foreground mb-2">Important Security Notes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Change the default password immediately after first login</li>
                  <li>• Never share these credentials with unauthorized personnel</li>
                  <li>• Use a strong, unique password for production environments</li>
                  <li>• Enable two-factor authentication for enhanced security</li>
                  <li>• Keep credentials in a secure password manager</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button className="flex-1 bg-accent hover:bg-accent/90 text-background">Go to Admin Dashboard</Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  Reset Password
                </Button>
              </div>
            </div>
          </Card>

          {/* Quick Start Guide */}
          <Card className="p-8 mt-8">
            <h2 className="text-2xl font-serif text-foreground mb-6">Quick Start Guide</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-foreground mb-2">1. Login to Admin Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Navigate to /admin and enter your email and password credentials above.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">2. Verify Investors</h3>
                <p className="text-sm text-muted-foreground">
                  Review pending investor applications and approve or reject based on investment criteria.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">3. Manage Listings</h3>
                <p className="text-sm text-muted-foreground">
                  Add, edit, or remove property listings from the Manage Listings section.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">4. Monitor Approved Investors</h3>
                <p className="text-sm text-muted-foreground">
                  Track verified investors and their investment activity in the Approved Investors tab.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  )
}
