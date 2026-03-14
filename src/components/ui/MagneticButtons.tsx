"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function MagneticButton({children}:{children:React.ReactNode}){

 const ref = useRef<HTMLButtonElement>(null)

 const handleMove = (e:any)=>{

  const rect = ref.current?.getBoundingClientRect()

  if(!rect) return

  const x = e.clientX - rect.left - rect.width/2
  const y = e.clientY - rect.top - rect.height/2

  ref.current!.style.transform = `translate(${x*0.2}px,${y*0.2}px)`
 }

 const reset = ()=>{
  if(ref.current) ref.current.style.transform="translate(0,0)"
 }

 return(

  <motion.button
   ref={ref}
   onMouseMove={handleMove}
   onMouseLeave={reset}
   className="px-8 py-3 rounded-full bg-indigo-500 text-white"
  >

   {children}

  </motion.button>

 )

}