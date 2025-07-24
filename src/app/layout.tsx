import './globals.css';
import type { Metadata } from 'next';
import Navbar from './components/Navbar/NavBar';
import AnnouncementBar from './components/Navbar/AnnouncementBar';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Container from './components/Container';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Trove Market',
  description: 'Shop fresh vegetables, premium meat, and seafood delivered to your door.',
  openGraph: {
    title: 'Trove Market',
    description: 'Shop fresh vegetables, premium meat, and seafood delivered to your door.',
    url: 'https://www.trovemarket.com',
    siteName: 'Trove Market',
    images: [
      {
        url: '/assets/images/logo.avif',
        width: 1200,
        height: 630,
        alt: 'Trove Market Banner Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-background text-text">
        <AnnouncementBar />
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
