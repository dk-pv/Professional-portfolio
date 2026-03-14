"use client";

export default function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* grid */}

      <div
        className="
        absolute inset-0 grid-animation
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:40px_40px]
        opacity-30
        "
      />

      {/* glow layer */}

      <div className="absolute w-[700px] h-[700px] bg-indigo-500 blur-[200px] opacity-20 rounded-full -top-40 left-0"/>

      <div className="absolute w-[600px] h-[600px] bg-green-400 blur-[200px] opacity-20 rounded-full bottom-0 right-0"/>

    </div>
  );
}