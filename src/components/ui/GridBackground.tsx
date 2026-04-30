// "use client";

// import { motion } from "framer-motion";

// export default function GridBackground() {
//   return (
//     <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

//       {/* ── Dot grid ── */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "radial-gradient(circle, rgba(245,158,11,0.18) 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* ── Line grid overlay ── */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, rgba(245,158,11,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,158,11,0.04) 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* ── Diagonal accent ── */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(135deg, transparent, transparent 80px, rgba(6,182,212,0.025) 80px, rgba(6,182,212,0.025) 81px)",
//         }}
//       />

//       {/* ── AMBER glow — top left ── */}
//       <motion.div
//         animate={{ scale: [1, 1.18, 1], opacity: [0.18, 0.28, 0.18] }}
//         transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
//         className="absolute rounded-full"
//         style={{
//           width: 700,
//           height: 700,
//           background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
//           filter: "blur(100px)",
//           top: "-15%",
//           left: "-12%",
//         }}
//       />

//       {/* ── CYAN glow — bottom right ── */}
//       <motion.div
//         animate={{ scale: [1, 1.22, 1], opacity: [0.14, 0.22, 0.14] }}
//         transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
//         className="absolute rounded-full"
//         style={{
//           width: 650,
//           height: 650,
//           background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
//           filter: "blur(100px)",
//           bottom: "-10%",
//           right: "-10%",
//         }}
//       />

//       {/* ── Amber mid-accent (drifting slowly) ── */}
//       <motion.div
//         animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.07, 0.12, 0.07] }}
//         transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//         className="absolute rounded-full"
//         style={{
//           width: 400,
//           height: 400,
//           background: "radial-gradient(circle, #fbbf24 0%, transparent 70%)",
//           filter: "blur(80px)",
//           top: "40%",
//           left: "30%",
//         }}
//       />

//       {/* ── Vignette ── */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.72) 100%)",
//         }}
//       />
//     </div>
//   );
// }




"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* ── Pure black base ── */}
      <div className="absolute inset-0" style={{ background: "#000000" }} />

      {/* ── Dot grid — whole page ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245,158,11,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Subtle line grid ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(245,158,11,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,158,11,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Diagonal accent ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 100px, rgba(6,182,212,0.02) 100px, rgba(6,182,212,0.02) 101px)",
        }}
      />

      {/* ── HERO ZONE: Amber top-left ── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full"
        style={{
          width: 800,
          height: 800,
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
          filter: "blur(110px)",
          top: "-10vh",
          left: "-10vw",
        }}
      />

      {/* ── HERO ZONE: Cyan bottom-right ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.22, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(110px)",
          top: "30vh",
          right: "-8vw",
        }}
      />

      {/* ── ABOUT ZONE: Amber bottom-left (flipped) ── */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.14, 0.22, 0.14] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
          filter: "blur(110px)",
          top: "90vh",
          left: "-5vw",
        }}
      />

      {/* ── ABOUT ZONE: Cyan top-right (flipped) ── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute rounded-full"
        style={{
          width: 650,
          height: 650,
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(110px)",
          top: "80vh",
          right: "-5vw",
        }}
      />

      {/* ── SKILLS ZONE: Cyan center ── */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(120px)",
          top: "160vh",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* ── PROJECTS ZONE: Amber right ── */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.23, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
          filter: "blur(110px)",
          top: "230vh",
          right: "-8vw",
        }}
      />

      {/* ── PROJECTS ZONE: Cyan left ── */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.19, 0.12] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          filter: "blur(110px)",
          top: "270vh",
          left: "-6vw",
        }}
      />

      {/* ── CONTACT ZONE: Amber center bottom ── */}
      <motion.div
        animate={{ scale: [1, 1.22, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
          filter: "blur(120px)",
          top: "340vh",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      {/* ── Vignette — edges always dark ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />
    </div>
  );
}