"use client";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 pt-20 pb-10 text-gray-800 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Política de Privacidad y Protección de Datos
      </h1>

      <p className="mb-6">
        En <strong>Wildjobs</strong>, nos tomamos muy en serio la privacidad y
        protección de los datos personales de nuestros clientes y visitantes. De
        acuerdo con el Reglamento General de Protección de Datos (RGPD), te
        informamos de lo siguiente:
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Responsable del tratamiento
      </h2>
      <p className="mb-4">
        Wildjobs
        <br />
        Correo electrónico:{" "}
        <a
          href="mailto:wildjobs.oficial@gmail.com"
          className="text-blue-500 underline"
        >
          wildjobs.oficial@gmail.com
        </a>
        <br />
        Finalidad: prestación de servicios técnicos, atención al cliente,
        gestión de presupuestos y comunicaciones relacionadas.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Datos que recopilamos
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Nombre y apellidos</li>
        <li>Dirección de correo electrónico</li>
        <li>Número de teléfono</li>
        <li>Dirección física (cuando sea necesaria para realizar servicios)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Finalidad del tratamiento
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Contacto con el cliente</li>
        <li>Gestión de presupuestos y servicios</li>
        <li>Envío de comunicaciones relacionadas con nuestros servicios</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. Conservación de los datos
      </h2>
      <p className="mb-4">
        Conservamos los datos personales únicamente durante el tiempo necesario
        para cumplir con su finalidad y obligaciones legales.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. Derechos del usuario
      </h2>
      <p className="mb-4">
        Puedes ejercer tus derechos de acceso, rectificación, supresión,
        oposición o limitación del tratamiento escribiéndonos a{" "}
        <a
          href="mailto:wildjobs.oficial@gmail.com"
          className="text-blue-500 underline"
        >
          wildjobs.oficial@gmail.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">
        6. Seguridad de los datos
      </h2>
      <p className="mb-4">
        Aplicamos medidas técnicas y organizativas adecuadas para proteger tus
        datos contra accesos no autorizados o usos indebidos.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Modificaciones</h2>
      <p>
        Nos reservamos el derecho a modificar esta política para adaptarla a
        cambios legales o a la evolución de nuestros servicios.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
