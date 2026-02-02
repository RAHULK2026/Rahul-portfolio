export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-semibold">
          ClientName
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">About</li>
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
