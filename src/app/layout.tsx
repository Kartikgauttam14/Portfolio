import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ThemeProvider from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kartik Gauttam | Full Stack Developer & AI/ML Enthusiast',
  description: 'Portfolio of Kartik Gauttam - B.Tech CSE student specializing in full-stack development and AI/ML systems. Open Source Contributor and Project Admin at SSoC.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'AI/ML', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Kartik Gauttam' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kartikgauttam.com',
    siteName: 'Kartik Gauttam Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
