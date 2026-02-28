import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manropeSans = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'AOX Engenharia | Construção Civil e Energia Solar em Cuiabá - MT',
  description:
    'AOX Engenharia — Empresa de engenharia civil em Cuiabá, MT. Construção residencial, comercial, energia solar, projetos e laudos técnicos. CREA-MT registrado.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${manropeSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
