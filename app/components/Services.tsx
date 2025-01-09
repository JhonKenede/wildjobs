"use client";
import { useState } from "react";
import Image from "next/image";

// Definir el tipo de los servicios
interface Service {
  title: string;
  description: string;
  image: string;
}

export const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null); // Usar el tipo 'Service'

  const services: Service[] = [
    {
      title: "Aire Acondicionado",
      description:
        "Instalamos y mantenemos sistemas de aire acondicionado de alto rendimiento, asegurando un clima confortable y eficiente en tu hogar o empresa.",
      image: "/images/services/service1.jpg",
    },
    {
      title: "Instalaciones Eléctricas",
      description:
        "Instalamos sistemas eléctricos seguros y eficientes, adaptados a tus necesidades, garantizando la máxima seguridad y fiabilidad.",
      image: "/images/services/servicio4.jpg",
    },
    {
      title: "Mantenimiento Eléctrico",
      description:
        "Realizamos mantenimiento preventivo y correctivo para asegurar que tu instalación eléctrica funcione sin interrupciones ni fallos.",
      image: "/images/services/service2.jpg",
    },
    {
      title: "Reparaciones Urgentes",
      description:
        "Ofrecemos servicio de reparación urgente para cualquier fallo eléctrico, trabajando con rapidez y eficacia para solucionar el problema de inmediato.",
      image: "/images/services/service3.jpg",
    },
  ];

  const handleServiceClick = (service: Service) => {  // Usar el tipo 'Service'
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => handleServiceClick(service)}
                role="button" // Agregar role="button"
                tabIndex={0}  // Hacerlo accesible con la tecla Tab
                onKeyPress={(e) => { // Soporte para teclado
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
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
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
          onClick={closeModal} // Cerrar modal al hacer clic en el fondo
          role="button" // Añadir role="button" para accesibilidad
          tabIndex={0} // Hacerlo accesible con teclado
          onKeyPress={(e) => { // Soporte para teclado
            if (e.key === "Enter" || e.key === " ") {
              closeModal();
            }
          }}
        >
          <div
            className="bg-white rounded-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar el modal al hacer clic en su contenido
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
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-gray-700">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-gray-700">Mensaje</label>
                <textarea
                  id="message"
                  className="w-full p-2 rounded border border-gray-300"
                  placeholder="Tu mensaje"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
