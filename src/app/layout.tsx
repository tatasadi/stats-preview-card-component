import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] })

export const metadata: Metadata = {
  title: "Stats Preview Card Component",
  description: "A Challenge from Frontend Mentor",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-very-dark-blue text-white`}>
        {children}
      </body>
    </html>
  )
}
