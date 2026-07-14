import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Novabit Media Group — Building the Future of Digital Media',
    template: '%s | Novabit Media Group',
  },
  description:
    'Novabit Media Group is a modern media holding company creating and growing innovative digital media brands that combine trusted journalism, technology, and exceptional digital experiences.',
  keywords: [
    'Novabit Media Group',
    'digital media',
    'media holding company',
    'Novabit.az',
    'Soma.az',
    'journalism',
    'Azerbaijan media',
    'technology journalism',
  ],
  authors: [{ name: 'Novabit Media Group' }],
  creator: 'Novabit Media Group',
  publisher: 'Novabit Media Group',
  metadataBase: new URL('https://novabit.media'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://novabit.media',
    siteName: 'Novabit Media Group',
    title: 'Novabit Media Group — Building the Future of Digital Media',
    description:
      'A modern media holding company creating and growing innovative digital media brands across the region and beyond.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Novabit Media Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novabit Media Group',
    description: 'Building the Future of Digital Media.',
    creator: '@novabitaz',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#030712" />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} font-sans antialiased bg-[#030712] text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
