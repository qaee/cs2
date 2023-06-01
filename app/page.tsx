import Image from 'next/image'
import CS2Header from "@/app/sections/header/header";
import CS2Content from "@/app/sections/content/content";

export default function Home() {
  return (
      <div>
        <CS2Header />
        <CS2Content></CS2Content>
      </div>
  )
}
