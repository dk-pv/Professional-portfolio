"use client";

import { useEffect, useState } from "react";
import PageLoader from "./PageLoader";

export default function LoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [loading,setLoading] = useState(true)

  useEffect(()=>{

    const timer = setTimeout(()=>{
      setLoading(false)
    },1400)

    return ()=>clearTimeout(timer)

  },[])

  return(
    <>
      {children}
      {loading && <PageLoader/>}
    </>
  )
}
