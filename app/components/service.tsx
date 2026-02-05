"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Business Analysis",
    desc: "Data-driven insights for smart decisions.",
    img: "/services/analysis.jpg",
  },
  {
    title: "Product Strategy",
    desc: "Product vision aligned with business goals.",
    img: "/services/strategy.jpg",
  },
  {
    title: "UX Research",
    desc: "User research for better experience.",
    img: "/services/ux.jpg",
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0]);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12">

      {/* Right on mobile, left on desktop */}
      <div className="order-2 md:order-1">
        <h2 className="text-3xl font-semibold mb-4">{active.title}</h2>
        <p className="text-gray-600 mb-6">{active.desc}</p>

        <div className="relative h-56 md:h-64 rounded-xl overflow-hidden">
          <Image src={active.img} alt="" fill className="object-cover" />
        </div>
      </div>

      <div className="order-1 md:order-2 flex flex-col gap-6">
        {services.map((s) => (
          <h3
            key={s.title}
            onMouseEnter={() => setActive(s)}
            className={`cursor-pointer text-xl md:text-2xl transition ${
              active.title === s.title
                ? "text-black font-semibold"
                : "text-gray-400 hover:text-black"
            }`}
          >
            {s.title}
          </h3>
        ))}
      </div>
    </section>
  );
}
