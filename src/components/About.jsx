export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-wide text-slate-400 mb-3">
          About
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
          Building interfaces with intention.
        </h2>

        <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>
            I’m a frontend developer focused on building clean, thoughtful
            interfaces that feel fast and intuitive.
          </p>

          <p>
            I care deeply about clarity — in layout, interaction, and code — and
            enjoy working on products where design and engineering meet.
          </p>

          <p>
            Most of my work explores UI structure, state-driven interactions,
            and the small details that improve real user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
