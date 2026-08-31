import SectionHeader from "@/components/ui/SectionHeader";

const facts = [
  { label: "Experience", value: "2+ years" },
  { label: "Projects delivered", value: "10+" },
  { label: "Focus", value: "Enterprise & ERP systems" },
  { label: "Backend", value: "NestJS · Node.js" },
  { label: "Data", value: "PostgreSQL · MongoDB" },
  { label: "Currently", value: "Emarath ERP & internal tooling" },
];

export default function About({ titleAs = "h2" }: { titleAs?: "h1" | "h2" }) {
  return (
    <section id="about" className="section wrap reveal">
      <SectionHeader
        index={titleAs === "h2" ? "01" : undefined}
        label="About"
        title="Profile"
        as={titleAs}
      />

      <div className="mt-12 grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-16">
        {/* Left: narrative */}
        <div className="space-y-6 text-[17px] leading-relaxed">
          <p className="text-xl leading-relaxed text-[var(--ink)]">
            I build the systems businesses run on — ERP platforms, real-time
            tracking and internal tooling used by real teams. My work lives in
            the parts that are hard to get right: data modeling, access
            control, real-time reliability, and APIs that stay clean as a
            product grows.
          </p>

          <p>
            Over the last two years I&apos;ve shipped enterprise software end
            to end: Emarath ERP, a multi-module enterprise ERP workspace
            spanning sales, HR, finance and marketing operations, and
            FleetTrack — a real-time vehicle-tracking platform that streams
            live telemetry over WebSockets. I own features from the database
            schema and API design through to production.
          </p>

          <p>
            I work across the stack with intent — modeling data in PostgreSQL
            and MongoDB, building secure REST APIs with role-based access
            control, adding real-time features with Socket.IO, and shipping
            responsive Next.js frontends. I optimize for the next engineer:
            clear boundaries, predictable APIs, and code that&apos;s
            straightforward to extend.
          </p>
        </div>

        {/* Right: facts column */}
        <dl>
          {facts.map((f) => (
            <div
              key={f.label}
              className="flex items-baseline justify-between gap-6 border-b border-[var(--line)] py-3.5"
            >
              <dt className="mono-label text-[var(--ink-3)]">{f.label}</dt>
              <dd className="text-right text-sm font-medium text-[var(--ink)]">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
