"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PageLoader from "./PageLoader";

export default function LoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600); // 👈 match your loader animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <PageLoader key="loader" />
      ) : (
        <div key="content">{children}</div>
      )}
    </AnimatePresence>
  );
}