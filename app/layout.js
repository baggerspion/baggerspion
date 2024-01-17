import { SpeedInsights } from '@vercel/speed-insights/next'

import { Raleway } from 'next/font/google'
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const font = Raleway({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Baggerspion.',
  description: 'Fractional Engineering Leadership from Paul Finlayson Adams',
  metadataBase: new URL('https://baggerspion.net'),
  openGraph: {
    title: 'Baggerspion.',
    description: 'Fractional Engineering Leadership from Paul Finlayson Adams',
    type: 'website',
    url: 'https://baggerspion.net',
    images: [
      {
        url: `/paul.jpg`
      },
    ],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}