import Link from "next/link";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Browse my portfolio of projects and work",
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with Next.js, featuring product management, shopping cart, and secure payment processing.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management System",
    description: "A collaborative task management tool with real-time updates, team collaboration features, and advanced filtering capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that provides real-time weather data, forecasts, and historical weather patterns with beautiful visualizations.",
    technologies: ["React", "D3.js", "Weather API", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description: "A content management system specifically designed for developers and creatives to showcase their work with a modern, customizable interface.",
    technologies: ["Next.js", "Sanity CMS", "TypeScript", "Vercel"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description: "A comprehensive fitness tracking application with workout planning, progress tracking, and nutritional information to help users achieve their fitness goals.",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A modern blogging platform with markdown support, SEO optimization, and a powerful admin dashboard for content management.",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <div className="bg-white dark:bg-zinc-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Link
                    href={project.link}
                    className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 text-sm font-medium"
                  >
                    View Project
                  </Link>
                  <Link
                    href={project.github}
                    className="px-4 py-2 border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white rounded-md transition-colors duration-200 text-sm font-medium"
                    aria-label="View on GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
