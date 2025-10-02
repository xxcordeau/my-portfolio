import styled from "styled-components";
import { ArrowLeft, Moon, Sun, Languages } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid #e5e7eb;
  
  .dark & {
    background: rgba(3, 7, 18, 0.8);
    border-bottom-color: #1f2937;
  }
`;

const NavContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 0.6;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  font-size: 0.875rem;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 0.6;
  }
`;

const NavAnchor = styled.a`
  font-size: 0.875rem;
  transition: opacity 0.3s;
  
  &:hover {
    opacity: 0.6;
  }
`;

const IconButton = styled.button`
  padding: 0.5rem;
  border-radius: 9999px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: background-color 0.2s;
  
  &:hover {
    background: #f3f4f6;
  }
  
  .dark &:hover {
    background: #1f2937;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  span {
    font-size: 0.75rem;
  }
`;

export const Navigation = () => {
  const [location] = useLocation();
  const isHome = location === "/";
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  return (
    <Nav>
      <NavContainer>
        <LogoLink href="/">
          {!isHome && <ArrowLeft />}
          <span>{t.nav.portfolio}</span>
        </LogoLink>
        
        <NavLinks>
          <NavLink href="/">{t.nav.projects}</NavLink>
          <NavAnchor href="#contact">{t.nav.contact}</NavAnchor>
          
          <IconButton onClick={toggleLanguage} aria-label="Toggle language">
            <Languages />
            <span>{language.toUpperCase()}</span>
          </IconButton>
          
          <IconButton onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <Moon /> : <Sun />}
          </IconButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
