const services = [
  {
    title: "Agile Business Analysis",
    description:
      "Understanding business needs and translating them into clear, actionable requirements aligned with Agile practices.",
  },
  {
    title: "Project Management",
    description:
      "End-to-end project planning, execution, and delivery with a focus on timelines, quality, and stakeholder alignment.",
  },
  {
    title: "Requirement to Technical Mapping",
    description:
      "Bridging the gap between business teams and technical teams for scalable and efficient solutions.",
  },
  {
    title: "Data Tracking & Reporting",
    description:
      "Leveraging data insights to track performance, measure outcomes, and support informed decision-making.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Services
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl">
          Helping organizations achieve clarity, efficiency, and growth through
          Agile methodologies, structured analysis, and data-driven insights.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
