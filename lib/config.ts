export const config = {
  database: {
    path: process.env.DATABASE_PATH || "data/db.json",
  },
  upload: {
    dir: process.env.UPLOAD_DIR || "public/uploads",
    maxSize: Number.parseInt(process.env.UPLOAD_MAX_SIZE || "52428800"),
  },
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  },
}
