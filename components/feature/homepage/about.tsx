import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          About Me
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          I am a detail-oriented Business Analyst with a strong foundation in 
          data analysis, requirement gathering, and stakeholder communication. 
          I specialize in transforming complex business needs into clear, 
          actionable solutions that drive measurable results.
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          With experience in data visualization, SQL-based analysis, and Agile 
          methodologies, I bridge the gap between technical teams and business 
          stakeholders. My goal is to improve processes, enhance efficiency, 
          and support data-driven decision-making.
        </p>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
          Core Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Requirement Gathering",
            "BRD & FRD Documentation",
            "SQL",
            "Power BI",
            "Excel",
            "Stakeholder Management",
            "Agile & Scrum",
            "Data Analysis",
            "Process Improvement",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-lg text-center"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Tools & Technologies
        </h2>

        <div className="flex flex-wrap gap-3">
          {["JIRA", "Confluence", "MS Visio", "Power BI", "SQL", "Excel"].map(
            (tool, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
              >
                {tool}
              </span>
            )
          )}
        </div>

      </div>
    </div>
  );
};

export default About;