"use client"

import Particles from "react-tsparticles"

export default function HeroParticles(){

 return(

 <Particles
   className="absolute inset-0 -z-10"
   options={{

    fullScreen:false,

    particles:{
      number:{value:60},

      size:{
        value:{min:1,max:3}
      },

      move:{
        enable:true,
        speed:0.6
      },

      color:{value:"#6366f1"},

      links:{
        enable:true,
        distance:140,
        color:"#6366f1",
        opacity:0.3
      },

      opacity:{
        value:0.6
      }

    },

    interactivity:{
      events:{
        onHover:{enable:true,mode:"grab"}
      }
    }

   }}
  />

 )

}