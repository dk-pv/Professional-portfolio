"use client"

import { motion } from "framer-motion"

const experiences = [

 {
  year:"2025 — Present",
  company:"SDEC (Calicut Business Park)",
  role:"MERN Stack Developer",
  description:
   "Working on full-stack applications including booking systems, payments and admin dashboards using Node.js, Express.js, MongoDB and Next.js."
 },

 {
  year:"2024 — 2025",
  company:"BridgeOn Solution",
  role:"MERN Stack Developer Intern",
  description:
   "Developed real-world MERN applications including job portals and educational platforms with authentication, REST APIs and real-time features."
 }

]

export default function Experience(){

 return(

 <section id="experience" className="relative py-40 px-6 overflow-hidden">

  {/* glow background */}

  <div className="absolute w-[600px] h-[600px] bg-indigo-500 blur-[220px] opacity-20 rounded-full top-10 left-0"/>
  <div className="absolute w-[500px] h-[500px] bg-green-400 blur-[220px] opacity-20 rounded-full bottom-0 right-0"/>

  <div className="max-w-5xl mx-auto relative z-10">

   {/* title */}

   <motion.div
    initial={{opacity:0,y:40}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    className="text-center mb-24"
   >

    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-green-400 bg-clip-text text-transparent">

     Experience

    </h2>

   </motion.div>


   {/* timeline */}

   <div className="relative">

    {/* vertical line */}

    <div className="absolute left-5 top-0 w-[2px] h-full bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-green-400/60"/>

    <div className="space-y-20">

    {experiences.map((exp,index)=>(

     <motion.div
      key={index}
      initial={{opacity:0,x:-40}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:0.6,delay:index*0.2}}
      viewport={{once:true}}
      className="relative pl-16"
     >

      {/* timeline node */}

      <motion.div
       whileHover={{scale:1.2}}
       className="absolute left-0 top-2 w-5 h-5 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.9)]"
      />

      {/* card */}

      <motion.div
       whileHover={{y:-6}}
       className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transition hover:border-indigo-400/40 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
      >

       <p className="text-indigo-400 text-sm mb-2">

        {exp.year}

       </p>

       <h3 className="text-xl font-semibold text-white">

        {exp.role}

       </h3>

       <p className="text-gray-400 text-sm mb-3">

        {exp.company}

       </p>

       <p className="text-gray-400 text-sm leading-relaxed">

        {exp.description}

       </p>

      </motion.div>

     </motion.div>

    ))}

    </div>

   </div>

  </div>

 </section>

 )

}