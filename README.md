# Next.js Full-Stack Starter Kit

A production-ready Next.js starter template with essential integrations for shipping full-stack applications insanely fast.

## 🚀 Features

- **Authentication** - Ready-to-use authentication with NextAuth.js
- **Database & ORM** - Prisma ORM setup with your choice of database
- **Payment Processing** - Stripe integration with webhook handling
- **UI Components** - shadcn/ui components with Tailwind CSS
- **Form Handling** - React Hook Form with Zod validation
- **Data Fetching** - TanStack Query (React Query) integration
- **Email Services** - SendGrid/Resend integration
- **Icons** - Lucide icons/React Icons library

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [Stripe](https://stripe.com/)
- [TanStack Query](https://tanstack.com/query)
- [React Hook Form](https://react-hook-form.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)
- [Lucide Icons](https://lucide.dev/)

## 🚦 Quick Start Guide

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory and copy contents from `.env.local`. Then delete `.env.local`. Read carefully instructions in the file.

3. Set up required credentials:

   - Create a Google Cloud project for authentication
   - Set up a database on Supabase or Neon.tech
   - Configure Stripe for payments
   - Set up SendGrid or Resend for emails

4. Initialize the database:

   ```bash
   npx prisma db push
   npx prisma generate
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Test authentication by signing in

7. Customize your application:
   - Update app name in `package.json`
   - Modify metadata in utils file
   - Search for "TODO" in the entire codebase and update accordingly

## 📝 Environment Variables

Create a `.env` file with the following:

### Authentication

```env
NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Database

```env
DATABASE_URL=
```

### Stripe

```env
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

### Email (Choose one)

```env
SENDGRID_API_KEY=
RESEND_API_KEY=
```

## 🔒 Authentication Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Navigate to APIs & Services > Credentials
4. Configure OAuth consent screen
5. Create OAuth 2.0 Client ID
6. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://your-domain.com/api/auth/callback/google` (production)

## 💾 Database Setup

1. Choose your database provider, either works:
   - [Supabase](https://supabase.com/)
   - [Neon](https://neon.tech/)
2. Create a new project
3. Copy the database connection URL
4. Update `DATABASE_URL` in your `.env` file

## 💳 Stripe Integration

The starter includes a pre-configured Stripe webhook handler (`/api/webhooks/route.js`) for processing payments. To set up:

1. Create a [Stripe](https://stripe.com/) account
2. Get your API keys from the dashboard
3. Set up webhook endpoints
4. Update your `.env` file with Stripe credentials

## 📦 Project Structure

```
src/
├── app/
│   ├── api/          # API routes including auth and webhooks
│   ├── components/   # UI components
│   └── ...
├── lib/             # Utility functions and configurations
├── prisma/          # Database schema
└── ...
```

## ⚙️ Key Files

- `app/api/auth/[...nextauth]/route.js` - Authentication configuration
- `app/api/webhooks/route.js` - Stripe webhook handler
- `lib/auth.js` - Authentication utilities
- `lib/stripe.js` - Stripe configuration
- `prisma/schema.prisma` - Database schema

## 🔍 Common Tasks

- **Adding New API Routes**: Create new files in `app/api/`
- **Construct Your Schema**: Update `prisma/schema.prisma` and run `npx prisma db push`
- **UI Components**: Find pre-built components in `app/components/ui`
- **Authentication**: Add providers in `app/api/auth/[...nextauth]/route.js`

## 🐛 Troubleshooting

- **Authentication Issues**: Verify Google Cloud credentials and redirect URIs
- **Database Errors**: Check DATABASE_URL and ensure Prisma schema is synced
- **Stripe Webhook Errors**: Verify webhook secret and endpoint configuration

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/introduction)

---

Built with ❤️ by Run [@runbuilds](https://runbuilds.xyz)
