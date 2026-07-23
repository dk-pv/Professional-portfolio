"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageLoader from "./PageLoader";

export default function LoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>
    </>
  );
}
