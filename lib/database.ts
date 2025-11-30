import fs from "fs"
import path from "path"
import { config } from "./config"

export interface Property {
  id: string
  title: string
  description: string
  location: string
  price: number
  annualYield: number
  citizenship: boolean
  yieldType: string
  images: string[]
  videos: string[]
  amenities: string[]
  status: "active" | "inactive"
  createdAt: string
  updatedAt: string
}

export interface DatabaseSchema {
  properties: Property[]
}

const DB_PATH = config.database.path

function ensureDbExists() {
  const dir = path.dirname(DB_PATH)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  if (!fs.existsSync(DB_PATH)) {
    const initialData: DatabaseSchema = { properties: [] }
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2))
  }
}

export function readDatabase(): DatabaseSchema {
  ensureDbExists()
  const data = fs.readFileSync(DB_PATH, "utf-8")
  return JSON.parse(data)
}

export function writeDatabase(data: DatabaseSchema) {
  ensureDbExists()
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))
}

export function getProperties(): Property[] {
  const db = readDatabase()
  return db.properties || []
}

export const getAllProperties = getProperties

export function getPropertyById(id: string): Property | null {
  const properties = getProperties()
  return properties.find((p) => p.id === id) || null
}

export function addProperty(property: Omit<Property, "id" | "createdAt" | "updatedAt">): Property {
  const db = readDatabase()
  const newProperty: Property = {
    ...property,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  db.properties = [...(db.properties || []), newProperty]
  writeDatabase(db)
  return newProperty
}

export const createProperty = addProperty

export function updateProperty(id: string, updates: Partial<Property>): Property | null {
  const db = readDatabase()
  const index = db.properties.findIndex((p) => p.id === id)
  if (index === -1) return null
  db.properties[index] = {
    ...db.properties[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  }
  writeDatabase(db)
  return db.properties[index]
}

export function deleteProperty(id: string): boolean {
  const db = readDatabase()
  const index = db.properties.findIndex((p) => p.id === id)
  if (index === -1) return false
  db.properties.splice(index, 1)
  writeDatabase(db)
  return true
}
