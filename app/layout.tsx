import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
})

export const metadata = {
  title: 'The Official Trump Meme | GetTrumpMemes',
  description: 'Trump Meme Coin - The Official Meme Coin of Trump Supporters',
  icons: {
    icon: [
      { url: '/trumpimg/T-Meme-Logo_1.webp', type: 'image/webp' },
      { url: '/favicon.ico' }
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/trumpimg/T-Meme-Logo_1.webp', type: 'image/webp' }
    ]
  },
  openGraph: {
    title: 'The Official Trump Meme | GetTrumpMemes',
    description: 'Trump Meme Coin - The Official Meme Coin of Trump Supporters',
    images: ['/trumpimg/T-Meme-Logo_1.webp'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.variable} __variable_4d318d __variable_ea5f4b antialiased`}>
        {children}
      </body>
    </html>
  )
}
