import Image from "next/image";
import Link from "next/link";
import { getServices, getLocations } from "@/lib/data";

export default function Footer() {
  const services = getServices();
  const locations = getLocations();
  const primaryLocations = locations.slice(0, 8);

  return (
    <footer className="bg-[var(--navy-deep)] text-white/85">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo/titan-lockup-on-navy.svg"
                alt="Titan Homes Group"
                width={220}
                height={44}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Tampa&apos;s Trusted Home Remodeling Experts — licensed, bonded, and insured general contractor serving Tampa Bay since 2015.
            </p>
            <p className="text-white/60 text-xs">License #CBC1264713</p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-white/75 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-white/75 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-white/75 hover:text-white">Services</Link></li>
              <li><Link href="/locations" className="text-white/75 hover:text-white">Areas Served</Link></li>
              <li><Link href="/contact" className="text-white/75 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services#${s.slug}`} className="text-white/75 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-white/55 text-xs uppercase tracking-wider mb-1">Tampa</p>
                <p className="text-white/80 text-xs mb-1">5103 Memorial Hwy, Tampa, FL 33634</p>
                <a href="tel:+17277094141" className="text-white font-semibold hover:text-[var(--lavender)]">
                  (727) 709-4141
                </a>
              </li>
              <li className="pt-1">
                <p className="text-white/55 text-xs uppercase tracking-wider mb-1">Hours</p>
                <p className="text-white/80 text-xs">Monday – Friday, 9:00 AM – 5:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations strip */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-white/55 text-xs uppercase tracking-wider mb-3">Service Areas</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {primaryLocations.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="text-white/70 hover:text-white">
                {l.name}
              </Link>
            ))}
            <Link href="/locations" className="text-[var(--lavender)] font-semibold hover:text-white">
              View all →
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/55 text-xs">
            &copy; {new Date().getFullYear()} Titan Homes Group. All rights reserved. | Licensed, Insured & Bonded #CBC1264713
          </p>
          <div className="flex gap-5 text-xs">
            <Link href="/about" className="text-white/55 hover:text-white/85">About</Link>
            <Link href="/contact" className="text-white/55 hover:text-white/85">Contact</Link>
            <Link href="/services" className="text-white/55 hover:text-white/85">Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
