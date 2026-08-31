import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import FooterSimple from "@/components/ui/FooterSimple";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Danish Pv — Full Stack Developer open to enterprise projects, full-stack roles and technical collaboration.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="wrap pb-24 pt-32 md:pt-40">
        <div className="rule pt-6">
          <p className="mono-label">Contact</p>
          <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold tracking-tight">
            Get in touch
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">
            Whether it&apos;s an enterprise build, a full-stack role, or a hard
            problem worth solving — send a message and I&apos;ll get back to
            you.
          </p>
        </div>

        <div className="mt-14 grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <ContactForm />

          <div>
            <dl>
              <div className="border-b border-[var(--line)] py-4">
                <dt className="mono-label text-[var(--ink-3)]">Email</dt>
                <dd className="mt-1.5">
                  <a href="mailto:danish.pv999@gmail.com" className="link-u text-[15px]">
                    danish.pv999@gmail.com
                  </a>
                </dd>
              </div>
              <div className="border-b border-[var(--line)] py-4">
                <dt className="mono-label text-[var(--ink-3)]">Phone</dt>
                <dd className="mt-1.5">
                  <a href="tel:+917994890280" className="link-u text-[15px]">
                    +91 79948 90280
                  </a>
                </dd>
              </div>
              <div className="border-b border-[var(--line)] py-4">
                <dt className="mono-label text-[var(--ink-3)]">Elsewhere</dt>
                <dd className="mt-1.5 flex gap-5">
                  <a
                    href="https://github.com/dk-pv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-u text-[15px]"
                  >
                    GitHub
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/danish-pv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-u text-[15px]"
                  >
                    LinkedIn
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <FooterSimple />
    </>
  );
}
