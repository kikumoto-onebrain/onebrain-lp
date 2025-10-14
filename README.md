# Onebrain Landing Page

Modern, high-performance, responsive landing page for Onebrain - AI-powered IT outsourcing.

## Features

- Next.js 13 with App Router
- Tailwind CSS for styling
- Framer Motion for smooth animations
- EmailJS integration for contact form
- SEO optimized with metadata and JSON-LD schema
- Fully responsive design
- Accessible (WCAG AA compliant)
- Performance optimized (Lighthouse score target ≥ 90)

## Tech Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Poppins (Google Fonts)
- **Icons**: Lucide React
- **Form Integration**: EmailJS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

Create a `.env.local` file in the root directory and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Sticky navigation header
│   ├── HeroSection.tsx     # Hero section with animation
│   ├── PainSection.tsx     # Problem statement section
│   ├── SolutionSection.tsx # Solution overview
│   ├── ClientsSection.tsx  # Client logos carousel
│   ├── CasesSection.tsx    # Case studies
│   ├── BenefitsSection.tsx # Benefits grid
│   ├── ContactSection.tsx  # Contact form
│   ├── WhatsAppButton.tsx  # Floating WhatsApp button
│   └── Footer.tsx          # Footer navigation
└── public/
    └── videos/             # Video assets (add hero.mp4 here)
```

## Sections

1. **Hero Section**: Full-screen with animated particles and CTAs
2. **Pain Section**: Highlights market challenges
3. **Solution Section**: AI-powered outsourcing benefits
4. **Clients Section**: Auto-scrolling logo carousel
5. **Cases Section**: Success stories with hover effects
6. **Benefits Section**: Key advantages grid
7. **Contact Section**: Form with EmailJS integration
8. **Footer**: Navigation and copyright

## Design System

### Colors
- Primary: `#000000` (Black)
- Secondary: `#FFFFFF` (White)
- Neutrals: Grayscale palette
- Accents: Soft gradients

### Typography
- Font Family: Poppins
- Weights: 300 (Light), 400 (Regular), 600 (Semibold)
- Line Height: 150% for body, 120% for headings

### Spacing
- System: 8px base grid
- Border Radius: `rounded-2xl` (16px)

## Animations

All animations are built with Framer Motion:
- Scroll-triggered reveals (`whileInView`)
- Hover effects with scale and glow
- Particle systems
- Smooth page transitions
- Respects `prefers-reduced-motion`

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env.local` file

## Performance Optimizations

- Optimized images with Next.js Image component
- Lazy-loaded animations
- Minimal bundle size
- Efficient rendering with React Server Components
- Proper caching strategies

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast (AA compliant)
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

This project is optimized for deployment on Vercel:

1. Push to GitHub
2. Connect repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy

## License

Copyright 2025 Onebrain. All rights reserved.

## Support

For support, contact your development team or raise an issue in the repository.
