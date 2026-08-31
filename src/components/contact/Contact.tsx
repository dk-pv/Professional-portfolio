import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ContactCTA() {
  return (
    <section id="contact" className="section wrap reveal">
      <SectionHeader index="05" label="Contact" title="Get in touch" />

      <p className="mt-6 max-w-xl text-lg leading-relaxed">
        Open to full-stack roles, enterprise projects and technical
        collaboration. Tell me what you&apos;re building.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Link href="/contact" className="btn btn-solid">
          Contact me
        </Link>
        <a href="mailto:danish.pv999@gmail.com" className="link-u text-sm">
          danish.pv999@gmail.com
        </a>
      </div>
    </section>
  );
}
