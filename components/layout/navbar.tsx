import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center mt-4">
      <div className="w-[95%] max-w-7xl bg-white rounded-full px-8 py-4 flex items-center justify-between shadow-sm">
        
        {/* Logo */}
        <div className="text-xl font-semibold">
          Monovo<span className="align-super text-sm">®</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
          <li className="hover:text-black cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href="/work">Work</Link>
          </li>
          <li className="hover:text-black cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* Button */}
        <div>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:opacity-90">
            Let’s Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
