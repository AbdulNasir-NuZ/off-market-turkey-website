import { type NextRequest, NextResponse } from "next/server"
import { findUserByEmail } from "@/lib/db"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 })
    }

    const user = findUserByEmail(email)

    if (!user || user.password !== password) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    if (user.status === "pending") {
      return NextResponse.json({ error: "Account pending admin verification" }, { status: 403 })
    }

    if (user.status === "rejected") {
      return NextResponse.json({ error: "Account has been rejected" }, { status: 403 })
    }

    const token = crypto.randomBytes(32).toString("hex")

    return NextResponse.json({
      token,
      user: {
        email: user.email,
        name: user.name,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
