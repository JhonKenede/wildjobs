"use client";
import { useState } from "react";
import Image from "next/image";
import BotonLlamar from "./CallButton";

interface Service {
  title: string;
  description: string;
  image: string;
}

export const Services = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      title: "Climatización y Aire Acondicionado",
      description:
        "Instalamos y mantenemos sistemas de aire acondicionado eficientes en la Costa del Sol. Soluciones modernas, de bajo consumo, para hogares, empresas y locales comerciales",
      image: "/images/services/service1.jpg",
    },
    {
      title: "Instalaciones Eléctricas",
      description:
        "Instalamos sistemas eléctricos seguros y eficientes en Marbella. Electricistas certificados, tecnología moderna y cumplimiento total de normativas vigentes.",
      image: "/images/services/servicio4.jpg",
    },
    {
      title: "Mantenimiento Eléctrico",
      description:
        "Servicio eléctrico preventivo y correctivo en San Pedro Alcantara. Evita fallos y cortes con atención rápida, segura y profesional.",
      image: "/images/services/service2.jpg",
    },
    {
      title: "Servicios Urgentes",
      description:
        "Reparaciones eléctricas urgentes en Estepona. Solucionamos cortes, cortocircuitos y averías con rapidez, seguridad y atención profesional inmediata.",
      image: "/images/services/service3.jpg",
    },
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const data = {
      to: ["wildjobs.oficia@gmail.com"], // destinatario interno fijo
      subject: `Solicitud de presupuesto: ${selectedService?.title}`,
      html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
      <p><strong>Servicio:</strong> ${selectedService?.title}</p>
      <p><strong>Descripción:</strong> ${selectedService?.description}</p>
    `,
      clientEmail: email,
      clientName: name,
      serviceTitle: selectedService?.title || "Sin título",
    };

    console.log("🟡 Enviando datos:", data);

    try {
      const response = await fetch(
        "https://wildjobs-backend.onrender.com/api/v1/email/send",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      console.log("🟢 Respuesta:", result);

      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("No se pudo enviar el correo");
      }
    } catch (err) {
      console.error("❌ Error:", err);
      setError("Error de red");
    }

    setLoading(false);
  };

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      !(
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLInputElement
      )
    ) {
      if (e.key === " " || e.key === "Enter") {
        closeModal();
      }
    }
  };

  return (
    <>
      {/* Sección de servicios */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#dddddd] via-gray-200 to-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => handleServiceClick(service)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleServiceClick(service);
                  }
                }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={closeModal}
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full p-6 relative overflow-auto max-h-[80vh] focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-900 absolute top-4 right-4"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Contáctanos sobre: {selectedService?.title}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 rounded border border-gray-300 text-black"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 rounded border border-gray-300 text-black"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-2 rounded border border-gray-300 text-black"
                  placeholder="Tu mensaje"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
              {success && (
                <p className="text-green-600 mt-4 text-center">
                  Correo enviado ✅
                </p>
              )}
              {error && (
                <p className="text-red-600 mt-4 text-center">{error}</p>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Servicios urgentes */}
      <section className="bg-[#0F3E64] text-white py-16 px-4 sm:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Texto a la izquierda */}
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 scroll-mt-28">
              Servicios Urgentes
            </h1>
            <p className="text-sm sm:text-base mb-6 max-w-xl leading-relaxed">
              Atención inmediata de 6 a 22 h. Brindamos asistencia remota y
              visitas rápidas en la Costa del Sol. Si no se resuelve el problema
              por teléfono, acudimos con técnicos certificados para reparar
              fallos eléctricos o de climatización en viviendas, locales y
              oficinas.
            </p>
            <div className="w-full flex justify-start sm:justify-start">
              <BotonLlamar />
            </div>
          </div>

          {/* Imagen a la derecha */}
          <div className="w-full flex justify-center items-center">
            <Image
              src="/images/jhon24hnaranja.png"
              alt="Servicio 24 horas"
              width={140}
              height={140}
              className="object-contain sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};
