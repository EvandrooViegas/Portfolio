import React from "react"

import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getMeData } from "@/actions/me"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const me = await getMeData()
  if(!me) return {
    title: "Portfolio"
  }
  return {
    title: `${me.name}'s Portfolio`,
    icons: [me.avatar]
  }
}
type Props = {
  children: React.ReactNode
}
export default function RootLayout(props: Props) {
  const { children } = props
  return (
    <html lang="en" className="max-w-[1500px] mx-auto md:p-24 p-8 scroll-smooth">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
