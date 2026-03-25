import BackgroundPattern from "@/components/common/BackgroundPattern";

const Hero = () => {
  return (
    <section className="relative overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:px-8">
      <BackgroundPattern />

      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl md:text-6xl">
          Business Analyst
        </h1>

        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Data-driven insights and smart digital solutions for business growth.
        </p>

        <button className="mt-8 rounded-full bg-black px-6 py-3 text-white">
          Let’s Talk
        </button>
      </div>
    </section>
  );
};

export default Hero;