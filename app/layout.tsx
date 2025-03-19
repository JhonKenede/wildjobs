import type { Metadata } from "next";
import "./styles/globals.css";
import { Header } from "./components/Header"; // Ajusta la ruta si `Header` está en `components`
import { Footer } from "./components/Footer"; // Ajusta la ruta si `Footer` está en `components`

export const metadata: Metadata = {
  title: "Electricidad Profesional",
  description: "Servicios eléctricos de calidad en tu zona.",
  icons: {
    icon: "/logos/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-cover bg-center text-white min-h-screen flex flex-col items-center justify-start"
        // style={{
        //   backgroundImage: 'url(/images/principal-photon.jpg)', // Ruta relativa a la carpeta public
        // }}
      >
        <Header />
        <main className="relative z-10 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
