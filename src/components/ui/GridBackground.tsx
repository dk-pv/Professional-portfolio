"use client"

export default function GridBackground(){

 return (

  <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">

   <div className="
    absolute inset-0
    bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
    linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
    bg-[size:40px_40px]
   "/>

  </div>

 )

}