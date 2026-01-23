export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Logo + Text */}
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold tracking-tight">
              monovo<span className="text-gray-400">®</span>
            </h2>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Beyond websites. Real strategies to fuel your growth.
              Just tools and strategies that help your business grow
              and your brand shine.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h3 className="text-sm font-medium mb-3">Pages</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Work</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Let’s Talk</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2025 monovo® Studio. All rights reserved.</p>

          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            Let’s Talk
            <span className="w-2 h-2 bg-black rounded-full"></span>
          </button>
        </div>

      </div>
    </footer>
  );
}
