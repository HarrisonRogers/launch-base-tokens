import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ConnectWallet from '@/components/connectWallet';
import Providers from '@/providers/providers';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Base Tokens',
  description: 'Create Base tokens on Base Sepolia with easeeeeeee',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <ConnectWallet />
          <div className="container mt-14 md:mt-28 px-4 md:px-6 mx-auto">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
