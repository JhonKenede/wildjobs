"use client";

import { useState } from "react";

export default function BotonLlamar() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="tel:633662935"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="px-6 py-3 bg-[#FD5314] rounded text-xl font-semibold hover:bg-[#FF7F3F] transition duration-300 ease-in-out transform hover:scale-105 inline-block"
    >
      {hover ? "633 66 29 35" : "Llámanos"}
    </a>
  );
}
