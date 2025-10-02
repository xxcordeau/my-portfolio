import styled from "styled-components";
import { Link } from "wouter";
import { Portfolio } from "../data/portfolios";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PortfolioCardProps {
  portfolio: Portfolio;
}

const CardLink = styled(Link)`
  display: block;
`;

const Card = styled.div`
  background: white;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  
  .dark & {
    background: #111827;
  }
  
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .dark &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
  }
`;

const ImageContainer = styled.div<{ $color: string }>`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background-color: ${props => props.$color};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const CardInfo = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  
  .dark & {
    color: #9ca3af;
  }
`;

const Price = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  white-space: nowrap;
  
  .dark & {
    color: #9ca3af;
  }
`;

const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #f3f4f6;
  border-radius: 9999px;
  font-size: 0.75rem;
  color: #374151;
  margin-top: 1rem;
  
  .dark & {
    background: #1f2937;
    color: #d1d5db;
  }
`;

export const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
  return (
    <CardLink href={`/portfolio/${portfolio.id}`}>
      <Card>
        <ImageContainer $color={portfolio.color}>
          <ImageWithFallback
            src={portfolio.thumbnail}
            alt={portfolio.title}
          />
        </ImageContainer>
        
        <CardContent>
          <CardHeader>
            <CardInfo>
              <Title>{portfolio.title}</Title>
              <Subtitle>{portfolio.subtitle}</Subtitle>
            </CardInfo>
            <Price>{portfolio.price}</Price>
          </CardHeader>
          
          <CategoryBadge>{portfolio.category}</CategoryBadge>
        </CardContent>
      </Card>
    </CardLink>
  );
};
