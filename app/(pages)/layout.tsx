import React from "react"

import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getMeData } from "@/actions/me"
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
}

type Props = {
  children: React.ReactNode
}
export default function RootLayout(props: Props) {
  const { children } = props
  return (
    <html lang="en" className="max-w-[1500px] mx-auto p-20 scroll-smooth">
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
