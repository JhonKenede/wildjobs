import type { Metadata } from "next";
import "./styles/globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsappButton } from "./components/WhatsappButton"; // nuevo

export const metadata: Metadata = {
  title: "Electricidad Profesional",
  description: "Servicios eléctricos de calidad en tu zona.",
  icons: {
    icon: "/logos/logo_circular_transparente.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-cover bg-center text-white min-h-screen flex flex-col items-center justify-start">
        <Header />
        <main className="relative z-10 w-full">{children}</main>
        <Footer />

        {/* Botón flotante de WhatsApp */}
        <WhatsappButton />
      </body>
    </html>
  );
}
