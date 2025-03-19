// components/AboutUs.tsx
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          Sobre Nosotros
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Texto */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Comprometidos con la excelencia
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              En <span className="font-semibold">[Nombre de tu Empresa]</span>, nos dedicamos a ofrecer soluciones de{" "}
              <span className="text-blue-600">electricidad</span> y{" "}
              <span className="text-blue-600">aire acondicionado</span> con los más altos estándares de calidad.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Nuestro equipo combina experiencia, innovación y compromiso para
              garantizar resultados que superen tus expectativas. Estamos
              listos para transformar tus necesidades en soluciones eficientes y
              sostenibles.
            </p>
          </div>

          {/* Imagen */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/about-us.jpg"
              alt="Nuestro equipo trabajando"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
