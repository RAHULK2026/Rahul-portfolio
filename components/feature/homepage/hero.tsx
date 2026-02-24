export default function Hero() {
  return (
    <section className="px-6 mt-6">
      <div
        className="max-w-7xl mx-auto rounded-3xl min-h-[75vh] flex items-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="w-full h-full bg-black/70 rounded-3xl flex items-center">
          <div className="px-12 max-w-2xl">

            <h1 className="text-white text-6xl font-bold leading-tight">
              Business Analysis <br /> That Drives Better Decisions
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Helping organizations turn complex data into clear insights,
              optimize processes, and achieve measurable growth.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
