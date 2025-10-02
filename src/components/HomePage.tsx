import styled from "styled-components";
import { portfolios } from "../data/portfolios";
import { PortfolioCard } from "./PortfolioCard";
import { useLanguage } from "../contexts/LanguageContext";

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  
  .dark & {
    background: #030712;
  }
`;

const HeroSection = styled.section`
  padding: 8rem 1.5rem 5rem;
`;

const HeroContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.75rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #2563eb, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  max-width: 48rem;
  margin: 0 auto;
  white-space: pre-line;
  
  .dark & {
    color: #9ca3af;
  }
`;

const Section = styled.section`
  padding: 3rem 1.5rem;
`;

const SectionContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  
  .dark & {
    color: #9ca3af;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactSection = styled.section`
  padding: 5rem 1.5rem;
`;

const ContactContent = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
`;

const ContactDescription = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
  
  .dark & {
    color: #9ca3af;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.a`
  padding: 1rem 2rem;
  background: black;
  color: white;
  border-radius: 9999px;
  transition: background-color 0.2s;
  text-decoration: none;
  
  .dark & {
    background: white;
    color: black;
  }
  
  &:hover {
    background: #1f2937;
  }
  
  .dark &:hover {
    background: #e5e7eb;
  }
`;

const SecondaryButton = styled.a`
  padding: 1rem 2rem;
  background: white;
  color: black;
  border: 2px solid black;
  border-radius: 9999px;
  transition: background-color 0.2s;
  text-decoration: none;
  
  .dark & {
    background: #111827;
    color: white;
    border-color: white;
  }
  
  &:hover {
    background: #f9fafb;
  }
  
  .dark &:hover {
    background: #1f2937;
  }
`;

const Footer = styled.footer`
  padding: 3rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  
  .dark & {
    border-top-color: #1f2937;
  }
`;

const FooterContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  
  .dark & {
    color: #9ca3af;
  }
`;

export const HomePage = () => {
  const { t } = useLanguage();

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
             {t.home.hero.greeting}
             <br />
            허정연의 <GradientText>Portfolio</GradientText>입니다.
            <br />
            {/* 저는 <GradientText>{t.home.hero.role}</GradientText> 입니다. */}
          </HeroTitle>
          <HeroDescription>
            {t.home.hero.description}
          </HeroDescription>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>{t.home.projects.title}</SectionTitle>
            <SectionSubtitle>{t.home.projects.subtitle}</SectionSubtitle>
          </SectionHeader>

          <ProjectGrid>
            {portfolios.map((portfolio) => (
              <PortfolioCard key={portfolio.id} portfolio={portfolio} />
            ))}
          </ProjectGrid>
        </SectionContainer>
      </Section>

      <ContactSection id="contact">
        <ContactContent>
          <ContactTitle>{t.home.contact.title}</ContactTitle>
          <ContactDescription>
            {t.home.contact.description}
          </ContactDescription>
          <ButtonGroup>
            <PrimaryButton href="mailto:your.email@example.com">
              {t.home.contact.emailButton}
            </PrimaryButton>
            <SecondaryButton href="#">
              {t.home.contact.downloadButton}
            </SecondaryButton>
          </ButtonGroup>
        </ContactContent>
      </ContactSection>

      <Footer>
        <FooterContent>
          <p>{t.home.footer.copyright}</p>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
};
