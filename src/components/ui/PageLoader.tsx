"use client";

import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >

      {/* glow background */}

      <div className="absolute w-[600px] h-[600px] bg-indigo-500 blur-[200px] opacity-20 rounded-full animate-pulse"/>
      <div className="absolute w-[500px] h-[500px] bg-green-400 blur-[200px] opacity-20 rounded-full animate-pulse"/>

      <div className="relative flex flex-col items-center gap-10">

        {/* animated name */}

        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, y: 0, letterSpacing: "0.1em" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-wide
          bg-gradient-to-r from-indigo-400 via-purple-400 to-green-400
          bg-clip-text text-transparent"
        >
          Danish Pv
        </motion.h1>

        {/* loading dots */}

        <div className="flex gap-2">

          {[0,1,2].map((i)=>(
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-indigo-400"
              animate={{ y:[0,-8,0] }}
              transition={{
                duration:0.6,
                repeat:Infinity,
                delay:i*0.2
              }}
            />
          ))}

        </div>

        {/* progress bar */}

        <motion.div
          initial={{ width:0 }}
          animate={{ width:"160px" }}
          transition={{ duration:1.3 }}
          className="h-[2px] bg-gradient-to-r from-indigo-400 via-purple-400 to-green-400 rounded-full"
        />

      </div>

    </motion.div>
  );
}
