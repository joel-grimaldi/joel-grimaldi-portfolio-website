# Joel Grimaldi Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # Reusable React components
├── lib/              # Utility functions and helpers
├── public/           # Static assets (images, fonts, etc.)
└── portfolio_*.txt   # Planning documents
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features

- Server-side rendering (SSR)
- Responsive design
- SEO optimized
- Accessibility features
- TypeScript for type safety
- Contact form with backend API

## Environment Variables

For the contact form to work in production, create a `.env.local` file with:

```env
CONTACT_EMAIL=your-email@example.com
EMAIL_SERVICE_URL=https://api.example.com/send-email
EMAIL_SERVICE_API_KEY=your_api_key_here
```

In development mode, the contact form will log submissions to the console instead of sending emails.