'use client';

import Link from "next/link";
import styled from 'styled-components';

const PageWrapper = styled.div`
  background: var(--background);
  min-height: 100vh;
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Header = styled.header`
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--foreground);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--secondary);
  max-width: 700px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  background: var(--background);

  &:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  padding: 0.4rem 0.9rem;
  background: rgba(102, 126, 234, 0.1);
  color: var(--accent);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const ProjectLink = styled(Link)`
  flex: 1;
  padding: 0.75rem 1.5rem;
  background: var(--foreground);
  color: var(--background);
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  text-align: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const GithubLink = styled(Link)`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  color: var(--foreground);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--foreground);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

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
    technologies: ["React", "D3.js", "Weather API", "CSS"],
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
    <PageWrapper>
      <Container>
        <Header>
          <Title>My Projects</Title>
          <Subtitle>
            A collection of projects I&apos;ve worked on, showcasing my skills and passion for development
          </Subtitle>
        </Header>

        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              
              <TechStack>
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>

              <ProjectLinks>
                <ProjectLink href={project.link}>
                  View Project
                </ProjectLink>
                <GithubLink href={project.github} aria-label="View on GitHub">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </GithubLink>
              </ProjectLinks>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Container>
    </PageWrapper>
  );
}
