import { getMeData } from "@/actions/me"
import "@/app/globals.css"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const me = await getMeData()
  if(!me) return {
    title: "Portfolio"
  }
  return {
    title: `${me.name}'s Portfolio Studio`,
    icons: [me.avatar]
  }
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="m-0">{children}</body>
    </html>
  )
}
