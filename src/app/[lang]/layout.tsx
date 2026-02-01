import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import '../globals.css';
import { i18n } from '@/i18n-config';
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'VibeCheck',
  description: 'Discover your personality vibe',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

// Placeholder IDs - replace with real ones in .env
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PLACEHOLDER';
// const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || 'ca-pub-PLACEHOLDER';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100`}
        suppressHydrationWarning
      >
        {children}
        <GoogleAnalytics gaId={GA_ID} />
        {/* <GoogleAdSense publisherId={ADSENSE_ID} /> */}
      </body>
    </html>
  );
}
