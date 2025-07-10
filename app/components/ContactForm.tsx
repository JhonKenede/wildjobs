import { useState } from "react";
import axios from "axios";

// Definir el tipo del servicio que se pasará como prop
interface Service {
  title: string;
  description: string;
  image: string;
}

interface ContactFormProps {
  selectedService: Service | null;
}

export const ContactForm = ({ selectedService }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    console.log("Enviando formulario...");
    try {
      const response = await axios.post(
        "https://wildjobs-backend.onrender.com/api/v1/email/send", // Cambia esto por la URL de tu backend
        {
          to: [email],
          subject: `Solicitud de presupuesto: ${selectedService?.title}`,
          body: `Nombre: ${name}\nEmail: ${email}\n\nMensaje: ${message}\n\nTipo de servicio: ${selectedService?.title}\nDescripción: ${selectedService?.description}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Respuesta recibida de Resend API: ", response);
      if (response.status === 200) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.error("Error al enviar correo: ", err);
      setError("Ocurrió un error al enviar el correo");
    }
    setLoading(false);
  };

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 rounded bg-white text-black opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 rounded bg-white text-black opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          className="w-full p-2 rounded bg-white text-black opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      {success && (
        <p className="text-green-500 mt-4 text-center">Correo enviado ✅</p>
      )}
      {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
    </form>
  );
};
