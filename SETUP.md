# OffMarket Listing Turkey - Setup Guide

## Prerequisites
- Node.js 18+ installed
- VSCode (recommended)
- Git

## Installation & Setup

### 1. Clone or Download the Project
\`\`\`bash
cd offmarket-turkey
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Create Environment File
Create a `.env.local` file in the root directory:
\`\`\`
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

### 4. Run Development Server
\`\`\`bash
npm run dev
\`\`\`

The application will be available at `http://localhost:3000`

## Admin Credentials

Use these credentials to access the admin dashboard:

**Email:** `admin@offmarketturkey.com`
**Password:** `SecureAdmin@2025`

### Admin Dashboard Access
1. Go to `http://localhost:3000/auth/login`
2. Enter admin credentials
3. You'll be redirected to `/admin` dashboard

## Database

The application uses a file-based database stored in `data/db.json` for local development.

- Database is automatically created on first run
- Admin user is pre-configured
- User data persists between server restarts

## Project Structure

\`\`\`
offmarket-turkey/
├── app/
│   ├── api/
│   │   └── auth/          # Authentication API routes
│   ├── auth/              # Auth pages (login, signup)
│   ├── admin/             # Admin dashboard
│   ├── dashboard/         # Investor dashboard
│   ├── blog/              # Blog section
│   └── resources/         # Resources section
├── components/            # Reusable components
├── lib/
│   ├── db.ts             # Database utilities
│   └── auth-context.tsx  # Auth context provider
├── data/                 # Database storage (auto-created)
└── public/               # Static assets
\`\`\`

## Features

### For Investors
- Sign up and request access
- View exclusive property listings (after approval)
- Access investment resources and ROI calculator
- Read market insights and blog posts

### For Admins
- Verify and approve investor accounts
- Manage property listings
- View all registered investors
- Approve/reject investor applications

## Testing the Application

### Test Investor Signup
1. Go to `http://localhost:3000/auth/signup`
2. Fill in the form with test data
3. Account will be pending admin approval
4. Admin can approve from `/admin` dashboard

### Test Admin Functions
1. Login with admin credentials
2. Navigate to `/admin`
3. View pending investor verifications
4. Approve or reject applications

## Troubleshooting

### Database Issues
If you encounter database errors:
1. Delete the `data/db.json` file
2. Restart the development server
3. Database will be recreated automatically

### Port Already in Use
If port 3000 is already in use:
\`\`\`bash
npm run dev -- -p 3001
\`\`\`

### Clear Cache
\`\`\`bash
npm run build
npm run dev
\`\`\`

## Development Tips

### VSCode Extensions Recommended
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- Thunder Client (for API testing)

### Hot Reload
The development server supports hot reload. Changes to files will automatically refresh the browser.

### Console Logs
Debug information is logged with `[v0]` prefix in the console.

## Production Deployment

For production deployment:
1. Replace file-based database with a real database (Supabase, Neon, etc.)
2. Implement proper JWT token authentication
3. Set up email service for verification emails
4. Configure environment variables for production
5. Deploy to Vercel or your preferred hosting

## Support

For issues or questions, check the console logs for `[v0]` debug messages.
