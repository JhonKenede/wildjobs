export const Hero = () => (
  <section className="relative bg-cover bg-center h-[70vh] text-white" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4 text-center">Expertos en Electricidad y Aire Acondicionado</h1>
      <p className="text-lg mb-6 text-center max-w-3xl">
        Garantizamos la eficiencia energética y el confort en tu hogar o empresa. Servicios rápidos, seguros y profesionales en electricidad y aire acondicionado.
      </p>
      <a href="#services" className="px-6 py-3 bg-blue-600 rounded text-xl font-semibold hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
        Conoce nuestros servicios
      </a>
    </div>
  </section>
);
