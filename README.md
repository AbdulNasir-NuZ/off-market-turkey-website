# OffMarket Listing Turkey

A private investment club platform connecting verified investors with exclusive off-market real estate opportunities in Turkey.

## Features

- **Private Investment Club** - Exclusive access for verified investors only
- **Off-Market Listings** - Properties not available to the general public
- **Admin Dashboard** - Manage users, verify investors, and oversee listings
- **Investment Resources** - Guides, calculators, and market analysis
- **Consultation Booking** - Direct access to investment specialists
- **Secure Authentication** - Role-based access control (Admin/Investor)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Database**: File-based JSON (localhost development)
- **Authentication**: Token-based with localStorage

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- VSCode (recommended)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd offmarket-turkey
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.local.example .env.local
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open in browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

## Admin Credentials

Use these credentials to access the admin dashboard:

- **Email**: `admin@offmarketturkey.com`
- **Password**: `SecureAdmin@2025`
- **Admin URL**: `http://localhost:3000/admin`

## User Roles

### Admin
- Manage user verifications
- Approve/reject investor applications
- Manage property listings
- View platform analytics

### Investor
- Browse exclusive listings
- Access investment resources
- Schedule consultations
- Download guides and reports

## Project Structure

\`\`\`
offmarket-turkey/
├── app/
│   ├── admin/              # Admin dashboard pages
│   ├── auth/               # Authentication pages
│   ├── api/                # API routes
│   ├── blog/               # Blog pages
│   ├── dashboard/          # Investor dashboard
│   ├── resources/          # Resources and guides
│   ├── consultation/       # Consultation booking
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── dashboard/          # Dashboard components
│   ├── blog/               # Blog components
│   └── [other components]
├── lib/
│   ├── db.ts               # Database utilities
│   └── auth-context.tsx    # Auth context
├── public/                 # Static assets
├── data/
│   └── db.json             # Local database (auto-created)
└── package.json
\`\`\`

## Database

The application uses a file-based JSON database for local development:

- **Location**: `data/db.json`
- **Auto-initialization**: Database is created automatically on first run
- **Default Admin**: Pre-configured admin user for testing

## Authentication Flow

1. **Signup**: New users register and await admin verification
2. **Verification**: Admin approves/rejects applications
3. **Login**: Verified users can log in with credentials
4. **Session**: Token stored in localStorage (development only)

## Pages & Navigation

### Public Pages
- `/` - Home page with hero, value prop, listings preview
- `/about` - About the platform
- `/blog` - Investment insights and market analysis
- `/resources` - Guides, calculators, and downloadable resources
- `/contact` - Contact form
- `/consultation` - Consultation booking

### Authentication Pages
- `/auth/login` - User login
- `/auth/signup` - User registration with verification

### Protected Pages (Investor)
- `/dashboard` - Investor dashboard with listings

### Protected Pages (Admin)
- `/admin` - Admin dashboard with user management
- `/admin/credentials` - Admin credentials reference

## Development

### Running Locally

\`\`\`bash
npm run dev
\`\`\`

The application will start on `http://localhost:3000`

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

### Code Quality

- ESLint configured for code quality
- TypeScript for type safety
- Tailwind CSS for consistent styling

## Design System

### Colors
- **Primary**: Deep Navy (#0A0E29)
- **Accent**: Gold (#C19A3F)
- **Background**: White (#FFFFFF)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Spacing
- Minimal, elegant spacing
- Consistent padding and margins
- Fluid motion on scroll

## Performance

- Load time target: Under 3 seconds
- Mobile-first responsive design
- Optimized images and assets
- Lazy loading for components

## Security Notes

For production deployment:
- Replace localStorage with secure session management
- Implement proper JWT tokens
- Use environment variables for sensitive data
- Enable HTTPS
- Implement rate limiting
- Add CSRF protection

## Support

For issues or questions:
1. Check the documentation
2. Review the code comments
3. Contact the development team

## License

Proprietary - OffMarket Listing Turkey

---

**Last Updated**: January 2025
