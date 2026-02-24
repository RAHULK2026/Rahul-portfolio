export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-semibold">
          Rahul Sable
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer">Home</li>
         <div> Hi, I'm Rahul Sable

Senior Business Analyst based in Tokyo, Japan,
currently working at Rakuten with 10+ years of experience
in business analysis, stakeholder management,
and agile project delivery.

Fluent in Japanese (Business Level) and English.</div>
          <li className="hover:text-black cursor-pointer">About</li>
         <div> I am a results-driven Business Analyst with over 10 years of experience
in e-commerce and enterprise environments.

At Rakuten, I work closely with cross-functional teams,
stakeholders, and vendors to gather requirements,
define business processes, and ensure smooth project delivery.

I specialize in:
- Requirement Gathering
- Agile Methodologies
- Business Process Improvement
- Vendor Coordination

Languages:
- Japanese (Business Level)
- English (Professional)</div>
          <li className="hover:text-black cursor-pointer">Services</li>

          <li className="hover:text-black cursor-pointer">Case Studies</li>
        </ul>

        {/* CTA */}
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800">
          Let’s Talk
        </button>

      </div>
    </nav>
  );
}
