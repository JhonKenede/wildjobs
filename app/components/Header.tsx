"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMail } from "react-icons/fi";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000); // Oculta después de 2s
      });
    }
  };

  return (
    <header className="bg-[rgba(31,41,55,0.9)] backdrop-blur-sm text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3">
          <Link href="/" className="block">
            <Image
              src="/logos/logo_circular_transparente.png"
              alt="Electricidad Profesional Logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
              priority
            />
          </Link>
          <h1 className="hidden sm:block text-xl sm:text-2xl font-bold tracking-tight">
            WildJobs
          </h1>
        </div>

        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul
          className={`absolute sm:relative top-full left-0 sm:top-0 sm:left-auto bg-[rgba(31,41,55,0.95)] sm:bg-transparent w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 px-6 sm:px-0 py-4 sm:py-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden sm:flex"
          }`}
        >
          <li
            className="flex items-center gap-2 text-sm sm:text-base cursor-pointer"
            onClick={() => copyToClipboard("+34 633 693 246")}
          >
            <FiPhone className="text-blue-400" />
            <span>633 693 246</span>
          </li>
          <li
            className="flex items-center gap-2 text-sm sm:text-base cursor-pointer"
            onClick={() => copyToClipboard("wildjobs.oficia@gmail.com")}
          >
            <FiMail className="text-blue-400" />
            <span>wildjobs.oficia@gmail.com</span>
          </li>
        </ul>
      </nav>

      {/* Copiado feedback */}
      {copiedText && (
        <div className="absolute bottom-0 right-0 mb-2 mr-4 bg-green-600 text-white px-4 py-2 rounded shadow-md text-sm">
          Copiado: {copiedText}
        </div>
      )}
    </header>
  );
};
