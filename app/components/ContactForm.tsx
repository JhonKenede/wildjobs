export const ContactForm = () => (
  <section id="contact" className="py-16 bg-blue-600 text-white">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Nombre</label>
          <input 
            type="text" 
            id="name" 
            className="w-full p-2 rounded bg-white text-black opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Tu nombre" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            className="w-full p-2 rounded bg-white text-black opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Tu correo electrónico" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Mensaje</label>
          <textarea 
            id="message" 
            className="w-full p-2 rounded bg-white text-black opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Tu mensaje"
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          Enviar
        </button>
      </form>
    </div>
  </section>
);
