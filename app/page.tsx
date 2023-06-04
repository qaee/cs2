'use client'
import Image from 'next/image'
import CS2Header from "@/app/sections/header/header";
import CS2Content from "@/app/sections/content/content";
import { ThemeProvider } from "@mui/material";
import {theme} from "@/app/sections/header/theme";

export default function Home() {
  return (
      <>
        <CS2Header />
        <CS2Content></CS2Content>
      </>
  )
}
