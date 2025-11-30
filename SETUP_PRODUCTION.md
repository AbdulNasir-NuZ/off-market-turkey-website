# Off-Market Turkey - Production Setup Guide

## Project Overview

This is a professional real estate investment platform built with Next.js, featuring:
- Local SQLite-based database for property management
- Admin panel for managing properties, images, and videos
- Investor dashboard with real property listings
- User authentication and role-based access
- File upload system for images and videos

## Prerequisites

- Node.js 18+ installed
- npm or yarn
- Git (optional, for version control)
- VSCode (recommended IDE)

## Local Setup (Development)

### 1. Clone/Extract Project

\`\`\`bash
# If you have a ZIP file
unzip offmarket-turkey.zip
cd offmarket-turkey

# Or clone from Git
git clone <your-repo-url>
cd offmarket-turkey
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Initialize Project

The database and data directory will auto-create on first run.

### 4. Start Development Server

\`\`\`bash
npm run dev
\`\`\`

The application will be available at `http://localhost:3000`

### 5. Login Credentials

**Admin Account:**
- Email: `admin@offmarketturkey.com`
- Password: `SecureAdmin@2025`
- Access: `http://localhost:3000/admin`

## Project Structure

\`\`\`
offmarket-turkey/
├── app/
│   ├── admin/
│   │   ├── page.tsx              # Admin dashboard
│   │   └── properties/           # Property management
│   │       ├── page.tsx          # Property list
│   │       └── new/
│   │           └── page.tsx      # Add new property
│   ├── api/
│   │   ├── properties/           # Property CRUD endpoints
│   │   ├── upload/               # File upload endpoint
│   │   └── auth/                 # Authentication endpoints
│   ├── auth/                     # Auth pages
│   ├── dashboard/                # Investor dashboard
│   └── page.tsx                  # Landing page
├── components/                   # React components
├── lib/
│   ├── db.ts                     # User database
│   ├── db-properties.ts          # Property database
│   └── auth-context.tsx          # Auth state management
├── public/
│   └── uploads/                  # Uploaded files (auto-created)
├── data/
│   ├── db.json                   # User database (auto-created)
│   └── properties.json           # Property database (auto-created)
└── package.json
\`\`\`

## Key Features

### Admin Panel (`/admin`)

1. **User Management**
   - View pending investor applications
   - Approve/Reject investor registrations
   - View approved investors

2. **Property Management** (`/admin/properties`)
   - Create new properties with complete details
   - Upload featured images and promotional videos
   - Edit property information
   - Delete properties
   - Real-time database updates

### Adding a Property

1. Go to `http://localhost:3000/admin/properties`
2. Click "Add Property"
3. Fill in property details:
   - Title, Location, Price
   - Annual Yield and Yield Type
   - Bedrooms, Bathrooms, Square Footage
   - Description and Features
   - Citizenship Eligibility
4. Upload Featured Image (required)
5. Upload Promotional Video (optional)
6. Click "Create Property"

Property instantly appears in Investor Dashboard.

### Investor Dashboard (`/dashboard`)

- View all properties or filter by location
- See real-time property listings from database
- Click "View Details" for full property information
- Request investment details or schedule consultation

## Database Structure

### Users Database (`data/db.json`)

\`\`\`json
{
  "users": [
    {
      "id": "user-123",
      "name": "Investor Name",
      "email": "investor@example.com",
      "password": "hashed-password",
      "role": "investor|admin",
      "status": "pending|approved|rejected",
      "createdAt": "ISO-date"
    }
  ]
}
\`\`\`

### Properties Database (`data/properties.json`)

\`\`\`json
{
  "properties": [
    {
      "id": "prop-123",
      "title": "Property Title",
      "location": "Istanbul",
      "price": 2500000,
      "annualYield": 8.5,
      "imageUrl": "/uploads/image.jpg",
      "videoUrl": "/uploads/video.mp4",
      "features": ["Pool", "Smart Home"],
      "bedrooms": 5,
      "bathrooms": 4,
      "squareFeet": 8500,
      "citizenshipEligible": true,
      "yieldType": "rental|capital-appreciation|hybrid",
      "description": "Property description",
      "createdAt": "ISO-date",
      "updatedAt": "ISO-date"
    }
  ]
}
\`\`\`

## File Uploads

- **Supported Formats:**
  - Images: JPEG, PNG, WebP
  - Videos: MP4, WebM
  
- **Storage:** `public/uploads/`
- **Max Size:** 50MB per file
- **Naming:** Automatically timestamped to prevent conflicts

## API Endpoints

### Properties API

\`\`\`
GET    /api/properties              # Get all properties
POST   /api/properties              # Create property
GET    /api/properties/[id]         # Get property by ID
PUT    /api/properties/[id]         # Update property
DELETE /api/properties/[id]         # Delete property
\`\`\`

### Users API

\`\`\`
GET    /api/admin/users             # Get pending users (admin)
POST   /api/auth/signup             # Create user account
POST   /api/auth/login              # Login user
\`\`\`

### Upload API

\`\`\`
POST   /api/upload                  # Upload file
\`\`\`

## Deployment (Vercel)

### 1. Prepare for Deployment

\`\`\`bash
# Build the project
npm run build

# Test production build
npm start
\`\`\`

### 2. Push to GitHub

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
\`\`\`

### 3. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js configuration
5. Click "Deploy"

**Important:** After deployment, create a Vercel PostgreSQL or other persistent database because JSON files won't persist between deployments. Update `lib/db-properties.ts` to use a proper database adapter.

## Production Considerations

### Security
- Change admin password immediately
- Use environment variables for sensitive data
- Implement JWT tokens for API authentication
- Add rate limiting to API endpoints
- Enable HTTPS (automatic with Vercel)

### Database Persistence
- For production, migrate from JSON to PostgreSQL or MongoDB
- Implement backup strategy
- Use environment variables for database URLs

### Performance
- Enable image optimization in Next.js
- Add CDN for file uploads
- Implement caching strategies
- Monitor Core Web Vitals

### Monitoring
- Set up error tracking (Sentry)
- Monitor API performance
- Track user analytics
- Set up uptime monitoring

## Development Workflow

### Adding New Features

\`\`\`bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# Test thoroughly: npm run dev

# Commit changes
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature
\`\`\`

### Build for Production

\`\`\`bash
# Install dependencies
npm install --production

# Build
npm run build

# Run production server
npm start
\`\`\`

## Troubleshooting

### Port 3000 Already in Use

\`\`\`bash
# Kill process on port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
\`\`\`

### Database Not Persisting

- Check `data/db.json` and `data/properties.json` exist
- Ensure write permissions on `data/` directory
- Check console for error messages

### Images Not Displaying

- Verify file uploaded to `public/uploads/`
- Check file permissions
- Ensure filename in database matches actual file

### Login Issues

- Verify credentials: `admin@offmarketturkey.com` / `SecureAdmin@2025`
- Check `data/db.json` exists
- Clear browser cache and cookies
- Check browser console for errors

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Deployment:** https://vercel.com/docs
- **Database Migration:** See `lib/db-properties.ts` for adapters

## Environment Variables (Optional)

Create `.env.local` for customization:

\`\`\`
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_PATH=./data/db.json
UPLOAD_DIR=./public/uploads
\`\`\`

---

**Ready to host on the internet?** Follow the Vercel deployment steps above to go live in minutes!
\`\`\`

```md file="" isHidden
