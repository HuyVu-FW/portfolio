import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Nav = styled(motion.nav)<{ scrolled: boolean }>`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.scrolled 
    ? props.theme.mode === 'dark' 
      ? 'rgba(26, 26, 26, 0.95)' 
      : 'rgba(255, 255, 255, 0.95)'
    : 'rgba(255, 255, 255, 0.1)'};
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(45deg, #2c3e50, #3498db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: linear-gradient(45deg, #2c3e50, #3498db);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

const ThemeToggle = styled(motion.button)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)'};
  }
`;

const LanguageToggle = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 100;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 30px;
    height: 2px;
    background: ${props => props.theme.colors.text};
    transition: all 0.3s ease;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.mode === 'dark' 
    ? 'rgba(26, 26, 26, 0.98)' 
    : 'rgba(255, 255, 255, 0.98)'};
  padding: 80px 2rem;
  z-index: 99;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const { mode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const t = translations[language];

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.5
      }
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        scrolled={scrolled}
      >
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('hero')}
        >
          Portfolio
        </Logo>
        <NavLinks>
          <NavLink onClick={() => scrollToSection('hero')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {t.nav.home}
          </NavLink>
          <NavLink onClick={() => scrollToSection('about')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {t.nav.about}
          </NavLink>
          <NavLink onClick={() => scrollToSection('story')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {t.nav.story}
          </NavLink>
          <NavLink onClick={() => scrollToSection('skills')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {t.nav.skills}
          </NavLink>
          <NavLink onClick={() => scrollToSection('projects')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {t.nav.projects}
          </NavLink>
          <LanguageToggle
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === 'vi' ? 'EN' : 'VI'}
          </LanguageToggle>
          <ThemeToggle
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mode === 'light' ? '🌙' : '☀️'}
          </ThemeToggle>
        </NavLinks>
        <MobileMenuButton onClick={toggleMenu}>
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </MobileMenuButton>
      </Nav>

      <MobileMenu
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <NavLink onClick={() => scrollToSection('hero')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {t.nav.home}
        </NavLink>
        <NavLink onClick={() => scrollToSection('about')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {t.nav.about}
        </NavLink>
        <NavLink onClick={() => scrollToSection('story')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {t.nav.story}
        </NavLink>
        <NavLink onClick={() => scrollToSection('skills')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {t.nav.skills}
        </NavLink>
        <NavLink onClick={() => scrollToSection('projects')} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {t.nav.projects}
        </NavLink>
        <LanguageToggle
          onClick={toggleLanguage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {language === 'vi' ? 'EN' : 'VI'}
        </LanguageToggle>
        <ThemeToggle
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mode === 'light' ? '🌙' : '☀️'}
        </ThemeToggle>
      </MobileMenu>
    </>
  );
};

export default Navbar; 