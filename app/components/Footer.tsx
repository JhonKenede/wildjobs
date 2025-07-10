import Link from "next/link";

export const Footer = () => (
  <footer className="bg-gray-800 text-white w-full">
    <div className="py-12 px-6 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Sobre Nosotros */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <p className="text-gray-400">633 693 246</p>
          <p className="text-gray-400">wildjobs.oficia@gmail.com</p>
          <p className="text-gray-400">Marbella - Estepona</p>
        </div>

        {/* Enlaces Útiles */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces Útiles</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about">
                <p className="hover:underline text-gray-400">Nosotros</p>
              </Link>
            </li>

            <li>
              <a
                href="/privacy-policy"
                className="hover:underline text-gray-400"
              >
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <ul className="flex space-x-4">
            {/* Íconos de redes sociales */}
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.845c0-2.509 1.493-3.89 3.776-3.89 1.095 0 2.238.194 2.238.194v2.462h-1.261c-1.244 0-1.632.774-1.632 1.562v1.878h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg
                  className="h-6 w-6 fill-current text-gray-400 hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.94 9.94 0 01-2.828.775A4.932 4.932 0 0023.337 3.1a9.865 9.865 0 01-3.127 1.195 4.924 4.924 0 00-8.39 4.49A13.978 13.978 0 011.671 3.149a4.926 4.926 0 001.523 6.574 4.902 4.902 0 01-2.229-.616v.062a4.928 4.928 0 003.946 4.829 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.864 9.864 0 010 19.54a13.94 13.94 0 007.548 2.212c9.054 0 14.004-7.506 14.004-14.004 0-.214-.005-.428-.014-.641A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Derechos Reservados */}
    <div className="bg-gray-900 text-gray-500 text-center py-4">
      &copy; {new Date().getFullYear()} Electricidad Profesional. Todos los
      derechos reservados.
    </div>
  </footer>
);
