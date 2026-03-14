"use client"

import { motion } from "framer-motion"

export default function GlowButton({
 children,
 className=""
}:{
 children:React.ReactNode
 className?:string
}){

 return(

 <motion.button
  whileHover={{scale:1.07}}
  whileTap={{scale:0.95}}
  transition={{type:"spring",stiffness:300}}
  className={`
  relative px-8 py-3 rounded-full
  bg-gradient-to-r from-indigo-500 to-purple-500
  text-white font-semibold
  shadow-[0_0_25px_rgba(99,102,241,0.5)]
  hover:shadow-[0_0_45px_rgba(99,102,241,0.8)]
  transition
  ${className}
  `}
 >

  {children}

 </motion.button>

 )

}