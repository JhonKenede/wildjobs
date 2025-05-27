import BotonLlamar from "./CallButton";

export const Hero = () => (
  <section
    className="relative bg-cover bg-center py-20 text-white"
    style={{ backgroundImage: "url(/images/fondo2.png)" }}
  >
    {/* Sombra que cubre TODO el fondo */}
    <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

    {/* Contenido encima de la sombra */}
    <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 gap-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
        Servicios Profesionales de Aire Acondicionado y Electricidad en la Costa
        del Sol
      </h1>
      <p className="text-sm sm:text-base leading-relaxed">
        Instalación, reparación y mantenimiento con máxima eficiencia y
        confianza. En WildJobs, somos especialistas en servicios eléctricos y
        sistemas de aire acondicionado en Marbella, Estepona, San Pedro
        Alcántara y alrededores. Brindamos soluciones rápidas, seguras y
        profesionales tanto para hogares como para negocios. Nos enfocamos en la
        eficiencia energética y el confort de tu espacio.
      </p>
      <BotonLlamar />
    </div>
  </section>
);
