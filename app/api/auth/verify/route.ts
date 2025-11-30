import { type NextRequest, NextResponse } from "next/server"
import { findUserByEmail } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get("authorization")?.replace("Bearer ", "")

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // In production, verify JWT token properly
    // For now, we'll use a simple token format
    const decoded = Buffer.from(token, "base64").toString("utf-8")
    const [email] = decoded.split(":")

    const user = findUserByEmail(email)

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 })
    }

    return NextResponse.json({
      authenticated: true,
      email: user.email,
      name: user.name,
      role: user.role,
    })
  } catch (error) {
    console.error("[v0] Verify error:", error)
    return NextResponse.json({ error: "Invalid token" }, { status: 401 })
  }
}
