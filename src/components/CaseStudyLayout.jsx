import { motion } from "framer-motion";

export default function CaseStudyLayout({ title, summary, sections }) {
  return (
    <article
      className='
  max-w-4xl mx-auto
  px-5 sm:px-6
  py-16 sm:py-20
  pb-28 sm:pb-20
  space-y-14 sm:space-y-20
'
    >
      {/* Header */}
      <header className='space-y-3 sm:space-y-4'>
        <h1
          className='
          text-2xl sm:text-3xl
          font-semibold
          text-gray-900
          leading-tight
        '
        >
          {title}
        </h1>

        <p
          className='
          text-base sm:text-lg
          text-gray-600
          max-w-2xl
          leading-relaxed
        '
        >
          {summary}
        </p>
      </header>
      <motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
  className="hidden sm:flex flex-wrap gap-4 pt-2"
>
  <a
    href="https://github.com/asadasjad/feedback-insight-dashboard"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center
      rounded-lg
      px-4 py-2
      text-sm font-medium
      text-gray-700
      bg-gray-100
      hover:bg-gray-200
      transition
    "
  >
    View GitHub →
  </a>

  <a
    href="https://insight-dashboard-alpha.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center
      rounded-lg
      px-4 py-2
      text-sm font-medium
      text-indigo-600
      bg-indigo-50
      hover:bg-indigo-100
      transition
    "
  >
    Live Demo
  </a>
</motion.div>


      {/* Sections */}
      <div className='space-y-12 sm:space-y-16'>
        {sections.map((section) => (
          <section key={section.heading} className='space-y-3 sm:space-y-4'>
            <h2
              className='
              text-lg sm:text-xl
              font-semibold
              text-gray-900
            '
            >
              {section.heading}
            </h2>

            {section.body && (
              <p
                className='
                text-sm sm:text-base
                text-gray-700
                leading-relaxed
                max-w-3xl
              '
              >
                {section.body}
              </p>
            )}

            {section.list && (
              <ul
                className='
                list-disc list-inside
                space-y-2
                text-sm sm:text-base
                text-gray-700
              '
              >
                {section.list.map((item) => (
                  <li key={item} className='leading-relaxed'>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.media && (
              <div
                className='
                rounded-xl
                bg-gray-100
                p-4 sm:p-6
              '
              >
                {section.media}
              </div>
            )}
          </section>
        ))}
      </div>
      <motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
  className="
    fixed bottom-0 inset-x-0
    sm:hidden
    bg-white
    border-t border-gray-200
    px-4 py-3
    z-50
  "
>
  <div className="flex gap-3">
    {/* Secondary */}
    <a
      href="https://insight-dashboard-alpha.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex-1
        text-center
        rounded-lg
        bg-gray-100
        text-gray-700
        py-3
        text-sm
        font-medium
        transition
        hover:bg-gray-200
      "
    >
      Live Demo
    </a>

    {/* Primary */}
    <a
      href="https://github.com/asadasjad/feedback-insight-dashboard"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex-1
        text-center
        rounded-lg
        bg-indigo-600
        text-white
        py-3
        text-sm
        font-medium
        transition
        hover:bg-indigo-700
      "
    >
      View Code
    </a>
  </div>
</motion.div>


    </article>
  )
}
