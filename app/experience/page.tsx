'use client';

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

const Section = styled.section`
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--foreground);
  margin-bottom: 3rem;
`;

const ExperienceCard = styled.article`
  border-left: 2px solid var(--border);
  padding-left: 2rem;
  margin-bottom: 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
  }

  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ExperienceInfo = styled.div``;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const Company = styled.p`
  font-size: 1.1rem;
  color: var(--accent);
  font-weight: 500;
`;

const Period = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.05);
  color: var(--secondary);
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const Description = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--secondary);
  margin-bottom: 1.5rem;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--secondary);

  &::before {
    content: '✓';
    color: var(--accent);
    font-weight: bold;
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled.article`
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }
`;

const ArticleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Category = styled.span`
  padding: 0.4rem 0.9rem;
  background: rgba(102, 126, 234, 0.1);
  color: var(--accent);
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 0.9rem;
  color: var(--secondary);
`;

const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`;

const Excerpt = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--secondary);
  margin-bottom: 1rem;
`;

const ReadMore = styled.button`
  background: none;
  border: none;
  color: var(--accent);
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

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
    <PageWrapper>
      <Container>
        <Header>
          <Title>Experience & Knowledge</Title>
          <Subtitle>
            My professional journey and insights from years of building web applications
          </Subtitle>
        </Header>

        <Section>
          <SectionTitle>Professional Experience</SectionTitle>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id}>
              <ExperienceHeader>
                <ExperienceInfo>
                  <JobTitle>{experience.title}</JobTitle>
                  <Company>{experience.company}</Company>
                </ExperienceInfo>
                <Period>{experience.period}</Period>
              </ExperienceHeader>
              <Description>{experience.description}</Description>
              <AchievementList>
                {experience.achievements.map((achievement, index) => (
                  <AchievementItem key={index}>
                    {achievement}
                  </AchievementItem>
                ))}
              </AchievementList>
            </ExperienceCard>
          ))}
        </Section>

        <Section>
          <SectionTitle>Articles & Insights</SectionTitle>
          <ArticlesGrid>
            {articles.map((article) => (
              <ArticleCard key={article.id}>
                <ArticleHeader>
                  <Category>{article.category}</Category>
                  <Date>{article.date}</Date>
                </ArticleHeader>
                <ArticleTitle>{article.title}</ArticleTitle>
                <Excerpt>{article.excerpt}</Excerpt>
                <ReadMore>Read more →</ReadMore>
              </ArticleCard>
            ))}
          </ArticlesGrid>
        </Section>
      </Container>
    </PageWrapper>
  );
}
