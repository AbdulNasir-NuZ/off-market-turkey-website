import { type NextRequest, NextResponse } from "next/server"
import { getAllUsers, updateUser, findUserByEmail } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const adminEmail = request.headers.get("x-admin-email")

    // Verify admin access
    const admin = findUserByEmail(adminEmail || "")
    if (!admin || admin.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const users = getAllUsers()
    return NextResponse.json({ users })
  } catch (error) {
    console.error("[v0] Get users error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const adminEmail = request.headers.get("x-admin-email")
    const { email, action } = await request.json()

    // Verify admin access
    const admin = findUserByEmail(adminEmail || "")
    if (!admin || admin.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (action === "approve") {
      const updated = updateUser(email, { status: "approved" })
      return NextResponse.json({ message: "User approved", user: updated })
    } else if (action === "reject") {
      const updated = updateUser(email, { status: "rejected" })
      return NextResponse.json({ message: "User rejected", user: updated })
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 })
  } catch (error) {
    console.error("[v0] Update user error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
