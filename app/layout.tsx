'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import {theme} from "@/app/sections/header/theme";
import { ThemeProvider } from "@mui/material";
import react from "react"
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <ThemeProvider theme={theme}>
      <body className="container" >{children}</body>
    </ThemeProvider>
    </html>
  )
}
