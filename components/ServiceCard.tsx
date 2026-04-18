import Link from "next/link";
import Image from "next/image";
import { Service } from "@/lib/data";
import ServiceIcon from "@/components/ServiceIcon";

interface ServiceCardProps {
  service: Service;
  showLearnMore?: boolean;
}

export default function ServiceCard({ service, showLearnMore = true }: ServiceCardProps) {
  return (
    <div className="group bg-white text-[var(--ink)] rounded-xl overflow-hidden flex flex-col border border-[var(--lavender-hover)] shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--navy)]">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, rgba(26,31,58,0) 45%, rgba(26,31,58,0.55) 100%)" }}
        />
        {/* Icon badge */}
        <div className="absolute left-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-[10px] bg-white text-[var(--navy)] shadow-[0_6px_14px_-4px_rgba(26,31,58,0.35)]">
          <ServiceIcon slug={service.slug} size={22} />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold leading-tight tracking-tight text-[var(--ink)]">
          {service.name}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-[var(--muted)]">
          {service.shortDescription}
        </p>
        {showLearnMore && (
          <Link
            href={`/services#${service.slug}`}
            className="inline-flex items-center gap-1.5 self-start text-sm font-bold text-[var(--navy)] hover:gap-2.5 transition-all"
          >
            Learn more
            <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
