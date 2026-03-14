import "./globals.css"
import Navbar from "@/components/ui/Navbar"
import SmoothScroll from "@/components/ui/SmoothScroll"
import CursorEffect from "@/components/ui/CursorEffect"
import ScrollProgress from "@/components/ui/ScrollProgress"
export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {

 return (

  <html lang="en">

   <body>
    <Navbar/>

    <SmoothScroll/>
    <ScrollProgress/>    
    <CursorEffect/> 
    {children}

   </body>

  </html>

 )

}