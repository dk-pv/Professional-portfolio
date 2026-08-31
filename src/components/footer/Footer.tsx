const socials = [
  { href: "https://github.com/dk-pv", label: "GitHub" },
  { href: "https://www.linkedin.com/in/danish-pv/", label: "LinkedIn" },
  { href: "mailto:danish.pv999@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="rule">
      <div className="wrap flex flex-col items-start justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-[var(--ink)]">Danish Pv</p>
          <p className="mono-label mt-1 text-[var(--ink-3)]">
            © {new Date().getFullYear()} · Full Stack Developer
          </p>
        </div>

        <ul className="flex gap-6">
          {socials.map(({ href, label }) => {
            const external = !href.startsWith("mailto:");
            return (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="link-u text-sm"
                >
                  {label}
                  {external && (
                    <span className="sr-only"> (opens in new tab)</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
