import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import TypewriterText from './TypewriterText';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 0 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  width: 100%;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(44, 62, 80, 0.2), rgba(52, 152, 219, 0.2));
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: 2rem;
  }
`;

const HeroContent = styled.div`
  text-align: left;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Greeting = styled(motion.h2)`
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 1rem;
  font-weight: 300;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const TypewriterWrapper = styled.div`
  display: inline-block;
  font-size: 1.8rem;
  color: #3498db;
  font-weight: 500;
  margin-bottom: 2rem;
  min-width: 300px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    min-width: 250px;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 3rem;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const RoleContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #2c3e50;
  cursor: pointer;
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const ScrollLine = styled(motion.div)`
  width: 2px;
  height: 60px;
  background: #2c3e50;
  border-radius: 2px;
`;

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const roles = [
    t('hero.roles.developer'),
    t('hero.roles.teacher'),
    t('hero.roles.artisan')
  ];

  return (
    <HeroSection id="hero">
      <HeroContainer>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Greeting>{t('hero.greeting')}</Greeting>
            <Name>{t('hero.name')}</Name>
            <TypewriterWrapper>
              <TypewriterText 
                texts={roles}
                typingSpeed={100}
                deletingSpeed={50}
                delayBetweenTexts={2000}
              />
            </TypewriterWrapper>
            <Description>{t('hero.description')}</Description>
          </motion.div>
        </HeroContent>
        <ImageContainer>
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <HeroImage src="/images/hero.jpg" alt="Hero" />
          </motion.div>
        </ImageContainer>
      </HeroContainer>

      <ScrollIndicator onClick={scrollToAbout}>
        <ScrollText>Cuộn xuống</ScrollText>
        <ScrollLine
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero; 