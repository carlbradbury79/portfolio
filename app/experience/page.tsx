export const metadata = {
  title: "Experience | Portfolio",
  description: "My professional experience and knowledge sharing",
};

const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description: "Leading development of enterprise web applications, mentoring junior developers, and implementing best practices across the team.",
    achievements: [
      "Architected and deployed microservices infrastructure serving 100k+ users",
      "Reduced page load times by 60% through performance optimization",
      "Mentored 5 junior developers, improving team productivity by 40%",
    ],
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client-facing web applications using modern JavaScript frameworks and cloud technologies.",
    achievements: [
      "Built and launched 8 production applications using React and Node.js",
      "Implemented CI/CD pipelines reducing deployment time by 75%",
      "Improved code quality through comprehensive testing practices",
    ],
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Creative Web Studio",
    period: "2018 - 2020",
    description: "Created responsive and accessible web interfaces, collaborating closely with designers and backend developers.",
    achievements: [
      "Developed reusable component library adopted across 15+ projects",
      "Achieved 100% accessibility compliance on all projects",
      "Reduced bug reports by 45% through comprehensive testing",
    ],
  },
];

const articles = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    date: "December 2025",
    excerpt: "Best practices and patterns for building maintainable React applications that scale with your team and user base.",
    category: "React",
  },
  {
    id: 2,
    title: "Modern CSS Techniques for 2025",
    date: "November 2025",
    excerpt: "Exploring the latest CSS features including container queries, cascade layers, and modern layout techniques.",
    category: "CSS",
  },
  {
    id: 3,
    title: "TypeScript Tips for JavaScript Developers",
    date: "October 2025",
    excerpt: "A practical guide to adopting TypeScript in your existing JavaScript projects with real-world examples.",
    category: "TypeScript",
  },
  {
    id: 4,
    title: "Optimizing Next.js Performance",
    date: "September 2025",
    excerpt: "Deep dive into Next.js performance optimization strategies including SSR, ISR, and edge computing.",
    category: "Next.js",
  },
];

export default function Experience() {
  return (
    <div className="bg-white dark:bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Experience & Knowledge
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            My professional journey and insights from years of building web applications
          </p>
        </div>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-500 mb-2">
                      {experience.company}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-full">
                    {experience.period}
                  </span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {experience.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Key Achievements:
                  </p>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li
                        key={index}
                        className="flex items-start text-zinc-600 dark:text-zinc-400"
                      >
                        <svg
                          className="w-5 h-5 text-blue-600 dark:text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Knowledge Sharing Section */}
        <section>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">
            Articles & Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-500">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                  {article.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {article.excerpt}
                </p>
                <button className="text-blue-600 dark:text-blue-500 font-medium hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  Read more →
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
