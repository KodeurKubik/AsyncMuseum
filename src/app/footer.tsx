import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 md:py-0 mt-10">
      <div className="mx-auto max-w-[1400px] px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-400 md:text-left">
          © 2025 Kodeur_Kubik - License MIT
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/KodeurKubik/AsyncMuseum/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 underline-offset-4 hover:underline hover:text-white transition-colors"
          >
            Github
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-400 underline-offset-4 hover:underline hover:text-white transition-colors"
          >
            Votez pour ce site!
          </Link>
        </div>
      </div>
    </footer>
  );
}
