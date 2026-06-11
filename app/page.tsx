import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-8">
                🚀 Available for Freelance & Full-time
              </span>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Building
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Digital Experiences
                </span>
              </h1>

              <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">
                Hi, I'm{" "}
                <span className="font-semibold text-slate-900">
                  John Doe
                </span>
                , a Frontend Developer specializing in React, Next.js and
                TypeScript. I create fast, scalable and visually stunning web
                applications with exceptional user experiences.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind",
                  "Redux",
                  "Node.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white shadow-md border border-slate-200 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  href="/projects"
                  className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-700 transition-all"
                >
                  View Projects →
                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-2xl border border-slate-300 bg-white font-semibold hover:bg-slate-50 transition-all"
                >
                  Contact Me
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16">
                <div>
                  <h3 className="text-4xl font-bold text-slate-900">
                    1+
                  </h3>
                  <p className="text-slate-500 mt-1">
                    Years Experience
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-slate-900">
                    20+
                  </h3>
                  <p className="text-slate-500 mt-1">
                    Projects Built
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-slate-900">
                    10+
                  </h3>
                  <p className="text-slate-500 mt-1">
                    Technologies
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Main Card */}
                <div className="w-[400px] h-[500px] rounded-[40px] bg-white/80 backdrop-blur-xl border border-white shadow-2xl flex flex-col items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-7xl text-white">
                    👨‍💻
                  </div>

                  <h3 className="mt-8 text-3xl font-bold">
                    John Doe
                  </h3>

                  <p className="text-slate-500 mt-2">
                    Frontend Developer
                  </p>
                </div>

                {/* Floating Card 1 */}
                <div className="absolute -left-16 top-10 bg-white rounded-2xl p-4 shadow-xl border">
                  <p className="font-semibold">⚡ Performance</p>
                  <span className="text-green-600 text-sm">
                    95+ Lighthouse
                  </span>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute -right-10 bottom-20 bg-white rounded-2xl p-4 shadow-xl border">
                  <p className="font-semibold">🔥 Projects</p>
                  <span className="text-blue-600 text-sm">
                    20+ Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}