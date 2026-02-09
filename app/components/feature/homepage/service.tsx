"use client"; // required in Next.js 13+ for client-side interactivity

import Image from "next/image";
import React from "react";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Build responsive and modern web applications using React and Next.js.",
    image: "/images/web-development.jpg",
  },
  {
    title: "UI/UX Design",
    description: "Design user-friendly interfaces and improve user experience.",
    image: "/images/ui-ux.jpg",
  },
  {
    title: "Data Analysis",
    description: "Analyze data efficiently using modern tools and dashboards.",
    image: "/images/data-analysis.jpg",
  },
];

const Service: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
