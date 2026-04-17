import Link from "next/link";
import { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
  showLearnMore?: boolean;
}

export default function ServiceCard({ service, showLearnMore = true }: ServiceCardProps) {
  return (
    <div className="group bg-[var(--navy)] text-white rounded-lg overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-2xl">
      <div className="p-6 sm:p-7 flex-1 flex flex-col">
        <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center text-2xl mb-5">
          {service.icon}
        </div>
        <h3 className="text-xl sm:text-2xl font-semibold leading-tight mb-3">
          {service.name}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed mb-5 flex-1">
          {service.shortDescription}
        </p>
        <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-2">
          {showLearnMore && (
            <Link
              href={`/services#${service.slug}`}
              className="inline-flex items-center justify-center bg-[var(--lavender)] hover:bg-[var(--lavender-hover)] text-[var(--navy)] px-5 py-2.5 rounded font-bold text-sm min-h-[44px] transition-colors flex-1"
            >
              Learn More
            </Link>
          )}
          <a
            href="tel:+17277094141"
            className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white px-5 py-2.5 rounded font-bold text-sm min-h-[44px] transition-colors flex-1"
          >
            Get Quote
          </a>
        </div>
      </div>
    </div>
  );
}
