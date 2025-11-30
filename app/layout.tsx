"use client" 

import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Off-Market Properties in Turkey | Exclusive Istanbul & Bodrum Listings",
  description:
    "Exclusive, verified off-market listings with 7–9% annual yields. Private investment opportunities in Turkey.",
  keywords: "off-market properties Turkey, Bodrum villas citizenship, Istanbul luxury real estate",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.className}`}>
        <Header />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}
