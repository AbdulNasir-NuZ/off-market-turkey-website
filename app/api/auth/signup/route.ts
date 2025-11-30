import { type NextRequest, NextResponse } from "next/server"
import { findUserByEmail, createUser } from "@/lib/db"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, investmentExperience, investmentAmount } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 })
    }

    if (findUserByEmail(email)) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 })
    }

    const verificationToken = crypto.randomBytes(32).toString("hex")
    const verificationTokenExpiry = Date.now() + 24 * 60 * 60 * 1000 // 24 hours

    const user = createUser({
      name,
      email,
      password,
      investmentExperience: investmentExperience || "beginner",
      investmentAmount: investmentAmount || "50k-100k",
      role: "investor",
      status: "pending",
      verificationToken,
      verificationTokenExpiry,
    })

    // In production, send actual email
    // For localhost, log the verification link
    const verificationLink = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/auth/verify?token=${verificationToken}&email=${email}`

    console.log("[v0] Verification email would be sent to:", email)
    console.log("[v0] Verification link:", verificationLink)

    return NextResponse.json({
      message: "Account created. Pending admin verification.",
      user: {
        email: user.email,
        name: user.name,
        status: user.status,
      },
    })
  } catch (error) {
    console.error("[v0] Signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
