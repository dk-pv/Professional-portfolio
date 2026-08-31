type Props = {
  index?: string;
  label: string;
  title: string;
  as?: "h1" | "h2";
  lead?: string;
};

/* Editorial section head: hairline rule, mono index, big title.
   The index is the home page's table of contents — standalone pages
   omit it and show the label alone. */
export default function SectionHeader({
  index,
  label,
  title,
  as: Heading = "h2",
  lead,
}: Props) {
  return (
    <div className="rule pt-6">
      <p className="mono-label">
        {index && (
          <span className="text-[var(--accent)]">{index} / </span>
        )}
        {label}
      </p>
      <Heading className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-tight">
        {title}
      </Heading>
      {lead && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed">{lead}</p>
      )}
    </div>
  );
}
