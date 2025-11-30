import { type NextRequest, NextResponse } from "next/server"
import { addMediaFile } from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "video/mp4", "video/webm"]
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Invalid file type. Only images and videos allowed." }, { status: 400 })
    }

    if (file.size > 50 * 1024 * 1024) {
      return NextResponse.json({ error: "File size exceeds 50MB limit" }, { status: 400 })
    }

    const buffer = await file.arrayBuffer()
    const base64 = Buffer.from(buffer).toString("base64")

    const fileId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    const mediaFile = {
      id: fileId,
      filename: file.name,
      mimeType: file.type,
      size: file.size,
      data: base64,
      uploadedAt: new Date().toISOString(),
    }

    addMediaFile(mediaFile)

    // Return a data URL that can be used directly in the UI
    const dataUrl = `data:${file.type};base64,${base64}`

    return NextResponse.json(
      {
        url: dataUrl,
        filename: file.name,
        fileId: fileId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Error uploading file:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}
