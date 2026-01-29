export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white">
      
      {/* Smoke / overlay effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col justify-between h-full">

        {/* Main Heading */}
        <div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            monovo
          </h1>

          <p className="mt-6 max-w-xl text-blue-100 leading-relaxed">
            Beyond websites. Real strategies to fuel your growth.
            Just tools and strategies that help your business grow
            and your brand shine.
          </p>
        </div>

        {/* Bottom content */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mt-16">

          {/* Footer text */}
          <p className="text-sm text-blue-200">
            © 2025 monovo® Studio
          </p>

          {/* Contact Card */}
          <div className="flex items-center gap-4 bg-white/15 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Marketing Manager"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-blue-100">Marketing Manager</p>
              <p className="font-semibold">Md Shahin Alam</p>
              <button className="mt-2 px-4 py-1.5 text-sm bg-white text-blue-700 rounded-full hover:bg-blue-100 transition">
                Let’s Talk
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
