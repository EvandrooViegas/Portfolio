import React from "react"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

type Props = {
  children: React.ReactNode
}
export default function RootLayout(props: Props) {
  const { children } = props
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}