import fs from "fs"
import path from "path"

const dbPath = path.join(process.cwd(), "data", "db.json")
const propertiesDbPath = path.join(process.cwd(), "data", "properties.json")
const mediaDbPath = path.join(process.cwd(), "data", "media.json")

interface User {
  id: string
  name: string
  email: string
  password: string
  investmentExperience: string
  investmentAmount: string
  role: "investor" | "admin"
  status: "pending" | "approved" | "rejected"
  createdAt: string
  verificationToken?: string
  verificationTokenExpiry?: number
}

interface Property {
  id: string
  title: string
  location: string
  price: number
  description: string
  annualYield: number
  imageUrl: string
  videoUrl: string
  features: string[]
  citizenshipEligible: boolean
  yieldType: "rental" | "capital-appreciation" | "hybrid"
  bedrooms: number
  bathrooms: number
  squareFeet: number
  createdAt: string
  updatedAt: string
}

interface MediaFile {
  id: string
  filename: string
  mimeType: string
  size: number
  data: string // base64 encoded
  uploadedAt: string
}

interface Database {
  users: User[]
}

interface PropertiesDatabase {
  properties: Property[]
}

interface MediaDatabase {
  files: MediaFile[]
}

// Ensure data directory exists
function ensureDbDir() {
  const dir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

// Initialize database with admin user
function initializeDb(): Database {
  ensureDbDir()

  if (!fs.existsSync(dbPath)) {
    const initialDb: Database = {
      users: [
        {
          id: "admin-001",
          name: "Admin User",
          email: "admin@offmarketturkey.com",
          password: "SecureAdmin@2025",
          investmentExperience: "advanced",
          investmentAmount: "500k+",
          role: "admin",
          status: "approved",
          createdAt: new Date().toISOString(),
        },
      ],
    }
    fs.writeFileSync(dbPath, JSON.stringify(initialDb, null, 2))
    return initialDb
  }

  const data = fs.readFileSync(dbPath, "utf-8")
  return JSON.parse(data)
}

function ensurePropertiesDb(): PropertiesDatabase {
  ensureDbDir()

  if (!fs.existsSync(propertiesDbPath)) {
    const initialDb: PropertiesDatabase = {
      properties: [],
    }
    fs.writeFileSync(propertiesDbPath, JSON.stringify(initialDb, null, 2))
    return initialDb
  }

  const data = fs.readFileSync(propertiesDbPath, "utf-8")
  return JSON.parse(data)
}

function ensureMediaDb(): MediaDatabase {
  ensureDbDir()

  if (!fs.existsSync(mediaDbPath)) {
    const initialDb: MediaDatabase = {
      files: [],
    }
    fs.writeFileSync(mediaDbPath, JSON.stringify(initialDb, null, 2))
    return initialDb
  }

  const data = fs.readFileSync(mediaDbPath, "utf-8")
  return JSON.parse(data)
}

export function getDb(): Database {
  ensureDbDir()
  if (!fs.existsSync(dbPath)) {
    return initializeDb()
  }
  const data = fs.readFileSync(dbPath, "utf-8")
  return JSON.parse(data)
}

export function saveDb(db: Database) {
  ensureDbDir()
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
}

export function findUserByEmail(email: string): User | undefined {
  const db = getDb()
  return db.users.find((u) => u.email === email)
}

export function createUser(userData: Omit<User, "id" | "createdAt">): User {
  const db = getDb()
  const newUser: User = {
    ...userData,
    id: `user-${Date.now()}`,
    createdAt: new Date().toISOString(),
  }
  db.users.push(newUser)
  saveDb(db)
  return newUser
}

export function updateUser(email: string, updates: Partial<User>) {
  const db = getDb()
  const userIndex = db.users.findIndex((u) => u.email === email)
  if (userIndex !== -1) {
    db.users[userIndex] = { ...db.users[userIndex], ...updates }
    saveDb(db)
    return db.users[userIndex]
  }
  return null
}

export function getAllUsers(): User[] {
  const db = getDb()
  return db.users
}

export function getPropertiesDb(): PropertiesDatabase {
  if (!fs.existsSync(propertiesDbPath)) {
    return ensurePropertiesDb()
  }
  const data = fs.readFileSync(propertiesDbPath, "utf-8")
  return JSON.parse(data)
}

export function savePropertiesDb(db: PropertiesDatabase) {
  ensureDbDir()
  fs.writeFileSync(propertiesDbPath, JSON.stringify(db, null, 2))
}

export function getProperties(): Property[] {
  const db = getPropertiesDb()
  return db.properties
}

export function addProperty(propertyData: Omit<Property, "id" | "createdAt" | "updatedAt">): Property {
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

export function getPropertyById(id: string): Property | undefined {
  const db = getPropertiesDb()
  return db.properties.find((p) => p.id === id)
}

export function deleteProperty(id: string): boolean {
  const db = getPropertiesDb()
  const index = db.properties.findIndex((p) => p.id === id)
  if (index !== -1) {
    db.properties.splice(index, 1)
    savePropertiesDb(db)
    return true
  }
  return false
}

export function updateProperty(id: string, updates: Partial<Property>): Property | null {
  const db = getPropertiesDb()
  const index = db.properties.findIndex((p) => p.id === id)
  if (index !== -1) {
    db.properties[index] = {
      ...db.properties[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    }
    savePropertiesDb(db)
    return db.properties[index]
  }
  return null
}

export function getMediaDb(): MediaDatabase {
  if (!fs.existsSync(mediaDbPath)) {
    return ensureMediaDb()
  }
  const data = fs.readFileSync(mediaDbPath, "utf-8")
  return JSON.parse(data)
}

export function saveMediaDb(db: MediaDatabase) {
  ensureDbDir()
  fs.writeFileSync(mediaDbPath, JSON.stringify(db, null, 2))
}

export function addMediaFile(mediaData: Omit<MediaFile, "id">): MediaFile {
  const db = getMediaDb()
  const newFile: MediaFile = {
    ...mediaData,
    id: mediaData.id || `media-${Date.now()}`,
  }
  db.files.push(newFile)
  saveMediaDb(db)
  return newFile
}

export function getMediaFile(id: string): MediaFile | undefined {
  const db = getMediaDb()
  return db.files.find((f) => f.id === id)
}

export function deleteMediaFile(id: string): boolean {
  const db = getMediaDb()
  const index = db.files.findIndex((f) => f.id === id)
  if (index !== -1) {
    db.files.splice(index, 1)
    saveMediaDb(db)
    return true
  }
  return false
}
