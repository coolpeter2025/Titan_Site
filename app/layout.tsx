import type { Metadata, Viewport } from "next";
import { Gantari } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, TAGLINE, SITE_URL } from "@/lib/seo";

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-gantari",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${TAGLINE}`,
  description:
    "Titan Homes Group is Tampa Bay's premier licensed general contractor. Kitchen remodeling, bathroom renovations, full home renovations, home additions, new construction, and storm damage repair. FL License #CBC1264713.",
  keywords:
    "home remodeling Tampa, kitchen remodeling Tampa FL, bathroom renovation Tampa Bay, general contractor Tampa, home addition Tampa, storm damage repair Tampa",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: `${SITE_NAME} — ${TAGLINE}`,
    description:
      "Tampa Bay's most trusted licensed general contractor. 10+ years, 350+ projects completed. Kitchen, bath, full renovations, additions, new construction.",
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${gantari.variable}`}>
      <body className="antialiased bg-white text-gray-900 font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
