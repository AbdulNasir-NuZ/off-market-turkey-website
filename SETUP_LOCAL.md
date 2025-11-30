# OffMarket Listing Turkey - Local Development Setup

This guide helps you run the application on your local machine using VSCode and Node.js.

## Prerequisites

- Node.js 18+ installed
- VSCode installed
- npm or yarn package manager

## Installation Steps

1. **Clone or download the project**
   \`\`\`bash
   cd off-market-turkey-website
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**
   - Navigate to `http://localhost:3000`

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog pages
│   ├── resources/         # Resources page
│   ├── auth/              # Authentication pages
│   ├── admin/             # Admin dashboard
│   ├── dashboard/         # Investor dashboard
│   └── api/               # API routes
├── components/            # Reusable React components
├── lib/                   # Utility functions
├── public/               # Static assets
└── data/db.json         # Local database (created on first run)
\`\`\`

## Authentication Credentials

### Admin Account
- Email: `admin@offmarketturkey.com`
- Password: `SecureAdmin@2025`
- Access: `/admin`

### Test Investor Account (Create via signup)
- Email: Any email address
- The account will be created and awaiting admin approval

## Database

The application uses a file-based database (`data/db.json`) for local development. The database automatically initializes on first run with the admin user.

**Note:** Do not commit `data/db.json` to version control. It's listed in `.gitignore`.

## Available Scripts

\`\`\`bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm lint         # Run ESLint
\`\`\`

## VSCode Recommended Extensions

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin
- Prettier - Code formatter
- Thunder Client (for API testing)

## Troubleshooting

### Database issues
- Delete `data/db.json` and restart the server to reinitialize

### Port 3000 already in use
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Missing dependencies
\`\`\`bash
rm -rf node_modules
npm install
\`\`\`

## Production Deployment

To deploy to production:

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

For detailed deployment instructions, see the Vercel documentation.
