import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/store", label: "Store" },
];

const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const headingFont = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Digivation",
    default: "Digivation | Digital Transformation Specialists",
  },
  description:
    "Digivation delivers AI, cloud, and digital transformation services that modernise operations and unlock growth for African enterprises.",
  metadataBase: new URL("https://www.digivation.co.za"),
  openGraph: {
    title: "Digivation | Digital Transformation Specialists",
    description:
      "Strategic AI, cloud, and automation solutions tailored for telecom and enterprise teams across Africa.",
    url: "https://www.digivation.co.za",
    siteName: "Digivation",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digivation | Digital Transformation Specialists",
    description:
      "Strategic AI, cloud, and automation solutions tailored for telecom and enterprise teams across Africa.",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B63F3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${headingFont.variable} min-h-screen bg-surface text-slate-900 antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[10000] focus:rounded focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <header className="sticky top-0 z-[9999] border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <nav
            aria-label="Primary"
            className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 text-sm"
          >
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-tint font-heading text-base text-primary">
                DG
              </span>
              <span className="font-heading tracking-wide">Digivation</span>
            </Link>
            <div className="hidden gap-5 text-sm font-medium text-muted md:flex">
              {navigation.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="transition hover:text-primary focus-brand"
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="hidden rounded-full bg-primary-gradient px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition hover:shadow-lg focus-brand md:inline-flex"
            >
              Start a project
            </Link>
            <details className="relative md:hidden">
              <summary className="inline-flex cursor-pointer list-none rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-muted shadow-sm transition hover:border-primary hover:text-primary focus-brand">
                Menu
              </summary>
              <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur">
                <nav className="flex flex-col gap-2 text-sm font-medium text-muted">
                  {navigation.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="rounded-lg px-2 py-2 transition hover:bg-primary-tint-light hover:text-primary focus-brand"
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="rounded-lg bg-primary-gradient px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white focus-brand"
                  >
                    Start a project
                  </Link>
                </nav>
              </div>
            </details>
          </nav>
        </header>
        <main id="main" className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} Digivation. All rights reserved.</p>
            <div className="flex gap-3">
              <Link href="/privacy" className="hover:text-blue-600">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-blue-600">
                Terms
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
