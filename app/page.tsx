export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/business-analyst-bg.png')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-950/30"></div>

      {/* Main Content */}
      <section className="relative z-10 flex min-h-screen items-center px-6 md:px-12">
        <div className="max-w-3xl text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Business Analyst Portfolio
          </p>

          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
            Rahul Sable
          </h1>

          <h2 className="mb-6 text-xl font-medium text-blue-200 md:text-2xl">
            Data-Driven Business Analyst
          </h2>

          <p className="mb-8 max-w-2xl text-base leading-7 text-gray-300">
            Transforming business requirements into actionable insights,
            improving workflows, and delivering data-driven solutions for
            better business decisions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
              View Projects
            </button>

            <button className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}