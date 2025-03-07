import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Story from './components/Story';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import CuteCat from './components/CuteCat';

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContainer>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Story />
                  <Skills />
                  <Projects />
                  <ContactSection />
                  <Footer />
                  <ScrollToTop />
                </>
              } />
            </Routes>
            <CuteCat />
          </AppContainer>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
