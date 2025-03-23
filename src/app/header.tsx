"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [tab, setTab] = useState<"infos" | "oeuvres" | "visite-virtuelle">(
    pathname.startsWith("/oeuvres")
      ? "oeuvres"
      : pathname.startsWith("/visite-virtuelle")
      ? "visite-virtuelle"
      : "infos",
  );

  useEffect(() => {
    setTab(
      pathname.startsWith("/oeuvres")
        ? "oeuvres"
        : pathname.startsWith("/visite-virtuelle")
        ? "visite-virtuelle"
        : "infos",
    );
  }, [pathname]);

  return (
    <header className="fixed top-0 sm:top-4 left-0 right-0 z-50 mx-auto w-full sm:w-[95%] sm:max-w-5xl">
      <div className="rounded-none sm:rounded-xl border-b sm:border border-white/20 bg-black/80 backdrop-blur-xl shadow-lg">
        <div className="container flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6">
          <Link
            href="/infos"
            className="flex items-center space-x-2 px-0 sm:px-2"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              ASYNCMUSEUM
            </span>
          </Link>
          <nav className="hidden sm:flex items-center space-x-1">
            <Link
              href="/infos"
              className={`rounded-lg px-5 py-2.5 text-base font-medium transition-colors hover:bg-white/10 ${
                tab == "infos"
                  ? "text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Infos
            </Link>
            <Link
              href="/oeuvres"
              className={`rounded-lg px-5 py-2.5 text-base font-medium transition-colors hover:bg-white/10 ${
                tab == "oeuvres"
                  ? "text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Oeuvres
            </Link>
            <Link
              href="/visite-virtuelle"
              className={`rounded-lg px-5 py-2.5 text-base font-medium transition-colors hover:bg-white/10 ${
                tab == "visite-virtuelle"
                  ? "text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-purple-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Visite Virtuelle
            </Link>
          </nav>
          <div className="sm:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-400 h-10 w-10 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "max-h-[300px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col py-4 px-6 space-y-2">
          <Link
            href="/infos"
            className={`rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-white/10 ${
              tab == "infos"
                ? "text-white relative flex items-center"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Infos
            {tab == "infos" && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 rounded-r-md"></span>
            )}
          </Link>
          <Link
            href="/oeuvres"
            className={`rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-white/10 ${
              tab == "infos"
                ? "text-white relative flex items-center"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Oeuvres
            {tab == "oeuvres" && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 rounded-r-md"></span>
            )}
          </Link>
          <Link
            href="/visite-virtuelle"
            className={`rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-white/10 ${
              tab == "infos"
                ? "text-white relative flex items-center"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Visite Virtuelle
            {tab == "visite-virtuelle" && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 rounded-r-md"></span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
