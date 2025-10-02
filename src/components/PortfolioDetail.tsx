import styled from "styled-components";
import { useRoute, Link } from "wouter";
import { portfolios } from "../data/portfolios";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle2, Code2, Layers } from "lucide-react";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const PageContainer = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  
  .dark & {
    background: #030712;
  }
`;

const NotFoundContainer = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .dark & {
    background: #030712;
  }
`;

const NotFoundContent = styled.div`
  text-align: center;
  
  h2 {
    font-size: 1.875rem;
    margin-bottom: 1rem;
  }
`;

const BackLink = styled(Link)`
  color: #2563eb;
  
  .dark & {
    color: #60a5fa;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

const HeroSection = styled.section`
  padding: 8rem 1.5rem 3rem;
`;

const HeroContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 9999px;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  
  .dark & {
    background: #111827;
    border-color: #1f2937;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.75rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #4b5563;
  margin-bottom: 1rem;
  
  .dark & {
    color: #9ca3af;
  }
`;

const HeroPrice = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  
  .dark & {
    color: #9ca3af;
  }
`;

const ImageSection = styled.section`
  padding: 0 1.5rem 3rem;
`;

const ImageContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const MainImageWrapper = styled.div<{ $color: string }>`
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  background-color: ${props => props.$color};
  
  img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
`;

const Section = styled.section`
  padding: 3rem 1.5rem;
`;

const ContentContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

const ContentBox = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  .dark & {
    background: #111827;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  h2 {
    font-size: 1.875rem;
  }
`;

const OverviewText = styled.p`
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.75;
  
  .dark & {
    color: #d1d5db;
  }
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const TechBadge = styled.span`
  padding: 0.75rem 1.5rem;
  background: #f3f4f6;
  border-radius: 9999px;
  font-size: 0.875rem;
  
  .dark & {
    background: #1f2937;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
`;

const FeatureIcon = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  background: #dcfce7;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;
  
  .dark & {
    background: rgba(22, 101, 52, 0.3);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #16a34a;
  }
  
  .dark & svg {
    color: #4ade80;
  }
`;

const FeatureText = styled.p`
  font-size: 1.125rem;
  color: #374151;
  flex: 1;
  
  .dark & {
    color: #d1d5db;
  }
`;

const GallerySection = styled.section`
  padding: 3rem 1.5rem;
`;

const GalleryContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const GalleryTitle = styled.h2`
  font-size: 1.875rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GalleryItem = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const CTASection = styled.section`
  padding: 5rem 1.5rem;
`;

const CTAContent = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
  
  .dark & {
    color: #9ca3af;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
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

export const PortfolioDetail = () => {
  const [, params] = useRoute("/portfolio/:id");
  const { t } = useLanguage();
  
  const portfolio = portfolios.find((p) => p.id === params?.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!portfolio) {
    return (
      <NotFoundContainer>
        <NotFoundContent>
          <h2>{t.detail.notFound.title}</h2>
          <BackLink href="/">
            {t.detail.notFound.backLink}
          </BackLink>
        </NotFoundContent>
      </NotFoundContainer>
    );
  }

  return (
    <PageContainer>
      <HeroSection>
        <HeroContainer>
          <CategoryBadge>{portfolio.category}</CategoryBadge>
          <HeroTitle>{portfolio.title}</HeroTitle>
          <HeroSubtitle>{portfolio.subtitle}</HeroSubtitle>
          <HeroPrice>{portfolio.price}</HeroPrice>
        </HeroContainer>
      </HeroSection>

      <ImageSection>
        <ImageContainer>
          <MainImageWrapper $color={portfolio.color}>
            <ImageWithFallback
              src={portfolio.thumbnail}
              alt={portfolio.title}
            />
          </MainImageWrapper>
        </ImageContainer>
      </ImageSection>

      <Section>
        <ContentContainer>
          <ContentBox>
            <SectionHeader>
              <Layers />
              <h2>{t.detail.sections.overview}</h2>
            </SectionHeader>
            <OverviewText>{portfolio.details.overview}</OverviewText>
          </ContentBox>
        </ContentContainer>
      </Section>

      <Section>
        <ContentContainer>
          <ContentBox>
            <SectionHeader>
              <Code2 />
              <h2>{t.detail.sections.technologies}</h2>
            </SectionHeader>
            <TechGrid>
              {portfolio.details.technologies.map((tech, index) => (
                <TechBadge key={index}>{tech}</TechBadge>
              ))}
            </TechGrid>
          </ContentBox>
        </ContentContainer>
      </Section>

      <Section>
        <ContentContainer>
          <ContentBox>
            <SectionHeader>
              <CheckCircle2 />
              <h2>{t.detail.sections.features}</h2>
            </SectionHeader>
            <FeatureList>
              {portfolio.details.features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon>
                    <CheckCircle2 />
                  </FeatureIcon>
                  <FeatureText>{feature}</FeatureText>
                </FeatureItem>
              ))}
            </FeatureList>
          </ContentBox>
        </ContentContainer>
      </Section>

      <GallerySection>
        <GalleryContainer>
          <GalleryTitle>{t.detail.sections.gallery}</GalleryTitle>
          <GalleryGrid>
            {portfolio.details.images.map((image, index) => (
              <GalleryItem key={index}>
                <ImageWithFallback
                  src={image}
                  alt={`${portfolio.title} - Image ${index + 1}`}
                />
              </GalleryItem>
            ))}
          </GalleryGrid>
        </GalleryContainer>
      </GallerySection>

      <CTASection>
        <CTAContent>
          <CTATitle>{t.detail.cta.title}</CTATitle>
          <CTADescription>{t.detail.cta.description}</CTADescription>
          <CTAButton href="/">{t.detail.cta.button}</CTAButton>
        </CTAContent>
      </CTASection>

      <Footer>
        <FooterContent>
          <p>{t.detail.footer.copyright}</p>
        </FooterContent>
      </Footer>
    </PageContainer>
  );
};
