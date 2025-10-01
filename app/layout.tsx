import type { Metadata } from "next";
import "./styles/globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsappButton } from "./components/WhatsappButton"; // nuevo

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wildjobs.es"),
  title: "WildJobs | Electricidad y Climatización en la Costa del Sol",
  description:
    "Servicios de electricidad y aire acondicionado en Marbella y la Costa del Sol. Instalación, reparación y mantenimiento profesional.",
  alternates: {
    canonical: "https://www.wildjobs.es/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.wildjobs.es/",
    siteName: "WildJobs",
    title: "WildJobs | Electricidad y Climatización en la Costa del Sol",
    description:
      "Instalación, reparación y mantenimiento de electricidad y A/A en la Costa del Sol.",
    images: ["/images/og.jpg"], // pon una imagen 1200x630 en /public/og.jpg
  },
  twitter: {
    card: "summary_large_image",
    title: "WildJobs | Electricidad y Climatización",
    description: "Electricidad y aire acondicionado en Marbella y alrededores.",
    images: ["/images/og.jpg"],
  },
  icons: {
    icon: "/logos/logo_circular_transparente.png",
  },
  themeColor: "#0a0a0a",
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
