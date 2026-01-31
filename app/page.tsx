'use client';

import Link from "next/link";
import styled from 'styled-components';

const PageWrapper = styled.div`
  background: var(--background);
  min-height: 100vh;
`;

const Hero = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8rem 2rem 6rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 4rem;
    min-height: 70vh;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--foreground);
  margin-bottom: 1.5rem;
  max-width: 900px;
`;

const Name = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  color: var(--secondary);
  margin-bottom: 3rem;
  max-width: 700px;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  padding: 1rem 2rem;
  background: var(--foreground);
  color: var(--background);
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: transform 0.2s ease, opacity 0.2s ease;
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`;

const SecondaryButton = styled(Link)`
  padding: 1rem 2rem;
  border: 2px solid var(--border);
  color: var(--foreground);
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  display: inline-block;

  &:hover {
    border-color: var(--foreground);
  }
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--foreground);
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--secondary);
  max-width: 700px;
  margin-bottom: 4rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const FeatureCard = styled.div`
  padding: 0;
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 1.5rem;
  color: var(--accent);

  svg {
    width: 100%;
    height: 100%;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`;

const FeatureDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--secondary);
`;

const SkillsSection = styled(Section)`
  background: rgba(0, 0, 0, 0.02);
  border-radius: 0;
  padding: 6rem 2rem;
  margin: 0;
  max-width: 100%;

  @media (prefers-color-scheme: dark) {
    background: rgba(255, 255, 255, 0.02);
  }
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 800px;
`;

const Skill = styled.span`
  padding: 0.75rem 1.5rem;
  background: var(--background);
  border: 1px solid var(--border);
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--foreground);
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: var(--accent);
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <Hero>
        <HeroTitle>
          Hi, I&apos;m <Name>Carl Bradbury</Name>
        </HeroTitle>
        <HeroSubtitle>
          A passionate developer building modern web applications
          with cutting-edge technologies and a focus on exceptional user experiences.
        </HeroSubtitle>
        <CTAGroup>
          <PrimaryButton href="/projects">
            View Projects
          </PrimaryButton>
          <SecondaryButton href="/experience">
            My Experience
          </SecondaryButton>
        </CTAGroup>
      </Hero>

      <Section>
        <SectionTitle>About Me</SectionTitle>
        <SectionSubtitle>
          I specialize in creating elegant solutions to complex problems,
          with a focus on user experience and performance.
        </SectionSubtitle>
        
        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </FeatureIcon>
            <FeatureTitle>Clean Code</FeatureTitle>
            <FeatureDescription>
              Writing maintainable, scalable code following best practices and industry standards.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </FeatureIcon>
            <FeatureTitle>Innovation</FeatureTitle>
            <FeatureDescription>
              Constantly exploring new technologies and approaches to solve complex challenges.
            </FeatureDescription>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </FeatureIcon>
            <FeatureTitle>Performance</FeatureTitle>
            <FeatureDescription>
              Optimizing applications for speed and efficiency to deliver the best user experience.
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>

      <SkillsSection>
        <SkillsContainer>
          <SectionTitle>Technical Skills</SectionTitle>
          <SkillsList>
            {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Styled Components', 'Git'].map((skill) => (
              <Skill key={skill}>
                {skill}
              </Skill>
            ))}
          </SkillsList>
        </SkillsContainer>
      </SkillsSection>
    </PageWrapper>
  );
}
