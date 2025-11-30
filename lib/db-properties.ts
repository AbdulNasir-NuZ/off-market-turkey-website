import fs from "fs"
import path from "path"

const dbPath = path.join(process.cwd(), "data", "properties.json")

export interface Property {
  id: string
  title: string
  location: string
  price: number
  description: string
  annualYield: number
  imageUrl: string
  videoUrl?: string
  features: string[]
  citizenshipEligible: boolean
  yieldType: "rental" | "capital-appreciation" | "hybrid"
  bedrooms: number
  bathrooms: number
  squareFeet: number
  createdAt: string
  updatedAt: string
}

export interface PropertiesDatabase {
  properties: Property[]
}

function ensureDbDir() {
  const dir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function initializePropertiesDb(): PropertiesDatabase {
  ensureDbDir()

  if (!fs.existsSync(dbPath)) {
    const initialDb: PropertiesDatabase = {
      properties: [
        {
          id: "prop-001",
          title: "Luxury Villa Bosphorus Istanbul",
          location: "Istanbul",
          price: 2500000,
          description:
            "Stunning waterfront villa with panoramic Bosphorus views. Modern luxury with traditional Turkish architecture.",
          annualYield: 8.5,
          imageUrl: "/property-placeholder-001.jpg",
          videoUrl: "/property-video-001.mp4",
          features: ["Waterfront", "Modern Kitchen", "Smart Home", "Pool", "Cinema Room"],
          citizenshipEligible: true,
          yieldType: "rental",
          bedrooms: 5,
          bathrooms: 4,
          squareFeet: 8500,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          id: "prop-002",
          title: "Boutique Resort Bodrum Mediterranean",
          location: "Bodrum",
          price: 1800000,
          description:
            "Turn-key boutique resort with 12 suites. Established tourism business with strong revenue history.",
          annualYield: 9.2,
          imageUrl: "/property-placeholder-002.jpg",
          features: ["12 Suites", "Restaurant", "Spa", "Beach Access", "Conference"],
          citizenshipEligible: true,
          yieldType: "hybrid",
          bedrooms: 12,
          bathrooms: 12,
          squareFeet: 15000,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ],
    }
    fs.writeFileSync(dbPath, JSON.stringify(initialDb, null, 2))
    return initialDb
  }

  const data = fs.readFileSync(dbPath, "utf-8")
  return JSON.parse(data)
}

export function getPropertiesDb(): PropertiesDatabase {
  ensureDbDir()
  if (!fs.existsSync(dbPath)) {
    return initializePropertiesDb()
  }
  const data = fs.readFileSync(dbPath, "utf-8")
  return JSON.parse(data)
}

export function savePropertiesDb(db: PropertiesDatabase) {
  ensureDbDir()
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
}

export function getAllProperties(): Property[] {
  const db = getPropertiesDb()
  return db.properties
}

export function getPropertyById(id: string): Property | undefined {
  const db = getPropertiesDb()
  return db.properties.find((p) => p.id === id)
}

export function createProperty(propertyData: Omit<Property, "id" | "createdAt" | "updatedAt">): Property {
  const db = getPropertiesDb()
  const newProperty: Property = {
    ...propertyData,
    id: `prop-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  db.properties.push(newProperty)
  savePropertiesDb(db)
  return newProperty
}

export function updateProperty(id: string, updates: Partial<Omit<Property, "id" | "createdAt">>): Property | null {
  const db = getPropertiesDb()
  const propertyIndex = db.properties.findIndex((p) => p.id === id)
  if (propertyIndex !== -1) {
    db.properties[propertyIndex] = {
      ...db.properties[propertyIndex],
      ...updates,
      updatedAt: new Date().toISOString(),
    }
    savePropertiesDb(db)
    return db.properties[propertyIndex]
  }
  return null
}

export function deleteProperty(id: string): boolean {
  const db = getPropertiesDb()
  const initialLength = db.properties.length
  db.properties = db.properties.filter((p) => p.id !== id)
  if (db.properties.length < initialLength) {
    savePropertiesDb(db)
    return true
  }
  return false
}
