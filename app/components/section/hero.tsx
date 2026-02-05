// components/sections/Hero.tsx

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center px-6 md:px-16">
      <div className="max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold">
          monovo
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl">
          Beyond websites. Real strategies to fuel your growth.
        </p>

        <button className="mt-8 px-6 py-3 rounded-full bg-black text-white">
          Let’s Talk
        </button>
      </div>
    </section>
  );
}
