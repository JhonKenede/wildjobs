"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Importamos Link para la navegación en Next.js

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para manejar el clic en el enlace y cerrar el menú
  const handleMenuClick = () => {
    setMenuOpen(false); // Cierra el menú
  };

  return (
    <header className="bg-blue-600 text-white py-4 w-full fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" passHref> {/* Esto redirige a la página principal */}
            <Image
              src="/logos/logo.jpg" // Ruta relativa a la carpeta `public`
              alt="Electricidad Profesional Logo"
              width={40}
              height={40}
              className="h-10 w-10 mr-2"
              priority
            />
          </Link>
          {/* Título con tamaño de fuente adaptado */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Electricidad & Aire Acondicionado</h1>
        </div>

        {/* Botón de menú para móviles */}
        <button
          className="sm:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        {/* Menú de navegación */}
        <ul
          className={`absolute sm:relative top-full left-0 sm:top-0 sm:left-auto bg-blue-600 sm:bg-transparent w-full sm:w-auto flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden sm:flex"
          }`}
        >
          <li>
            <Link href="/" className="hover:underline block" onClick={handleMenuClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline block" onClick={handleMenuClick}>
              Nosotros
            </Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};
