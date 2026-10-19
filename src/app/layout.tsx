import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#171A1D',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://treadcraftautocare.com'),
  title: {
    default: 'TreadCraft Auto Care | Precision on Every Mile',
    template: '%s | TreadCraft Auto Care',
  },
  description:
    'Modern, dependable, premium tyre and wheel care specialist offering professional touchless tyre fitting, 3D laser wheel alignment, dynamic balancing, and 32-point safety inspections.',
  keywords: [
    'tyre servicing',
    'wheel alignment',
    'wheel balancing',
    'touchless tyre fitting',
    'laser alignment',
    'puncture repair',
    'EV tyres',
    'performance tyres',
    'London tyre workshop',
  ],
  authors: [{ name: 'TreadCraft Auto Care' }],
  openGraph: {
    title: 'TreadCraft Auto Care — Precision on Every Mile',
    description:
      'Engineered tyre fitting, 3D laser wheel alignment, and chassis geometry diagnostics. Zero alloy rim scratches guaranteed.',
    siteName: 'TreadCraft Auto Care',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'TreadCraft Auto Care Workshop & Tyre Servicing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TreadCraft Auto Care — Precision on Every Mile',
    description:
      'Modern, dependable tyre and wheel care specialist offering touchless tyre fitting and 3D laser wheel alignment.',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: 'TreadCraft Auto Care',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=85',
    description: 'Precision tyre fitting, 3D laser wheel alignment, dynamic balancing, and vehicle tyre care.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 4, Apex Autocare Park, Precision Way',
      addressLocality: 'London',
      postalCode: 'NW10 7HQ',
      addressCountry: 'GB',
    },
    telephone: '+442089457200',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:30',
        closes: '16:30',
      },
    ],
    priceRange: '££',
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="site-wrapper">
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
