import { type NextRequest, NextResponse } from "next/server"
import { getProperties, addProperty } from "@/lib/db.ts"

export async function GET() {
  try {
    const properties = getProperties ? getProperties() : []
    return NextResponse.json(properties)
  } catch (error) {
    console.error("[v0] Error fetching properties:", error)
    return NextResponse.json({ error: "Failed to fetch properties" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body.title || !body.location || !body.price || !body.annualYield || !body.imageUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const property = addProperty({
      title: body.title,
      location: body.location,
      price: Number.parseFloat(body.price),
      description: body.description || "",
      annualYield: Number.parseFloat(body.annualYield),
      imageUrl: body.imageUrl,
      videoUrl: body.videoUrl || "",
      features: body.features || [],
      citizenshipEligible: body.citizenshipEligible || false,
      yieldType: body.yieldType || "rental",
      bedrooms: Number.parseInt(body.bedrooms) || 0,
      bathrooms: Number.parseInt(body.bathrooms) || 0,
      squareFeet: Number.parseInt(body.squareFeet) || 0,
    })

    return NextResponse.json(property, { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating property:", error)
    return NextResponse.json({ error: "Failed to create property" }, { status: 500 })
  }
}
