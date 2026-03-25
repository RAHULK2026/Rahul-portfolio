import React from "react";

interface Project {
  title: string;
  company: string;
  duration: string;
  description: string;
  tools: string[];
}

const projects: Project[] = [
  {
    title: "Sales Data Dashboard",
    company: "HDFC Bank",
    duration: "Jan 2023 - Dec 2023",
    description:
      "Analyzed sales and customer data to identify revenue growth opportunities. Created Power BI dashboards for management decision-making.",
    tools: ["Power BI", "SQL", "Excel", "Data Modeling"],
  },
  {
    title: "Requirement Gathering & BRD Documentation",
    company: "FinTech Project",
    duration: "2024",
    description:
      "Worked closely with stakeholders to gather business requirements and prepared BRD & FRD documents. Coordinated between technical and business teams.",
    tools: ["JIRA", "Confluence", "MS Visio", "Agile"],
  },
  {
    title: "Customer Retention Analysis",
    company: "E-commerce Domain",
    duration: "2024",
    description:
      "Performed churn analysis using SQL and created actionable insights that improved retention by 12%.",
    tools: ["SQL", "Excel", "Data Analysis"],
  },
];

const Work: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        My Work Experiencea
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {project.company} | {project.duration}
            </p>

            <p className="text-gray-600 mt-4">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Work;