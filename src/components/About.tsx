import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Carousel from './Carousel';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.mode === 'dark' ? '#1a1a1a' : '#f8f9fa'};
  color: ${props => props.theme.mode === 'dark' ? '#fff' : '#333'};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: ${props => props.theme.mode === 'dark' ? '#fff' : '#333'};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutCard = styled(motion.div)`
  background: ${props => props.theme.mode === 'dark' ? '#2d2d2d' : '#fff'};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AboutTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.mode === 'dark' ? '#fff' : '#333'};
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.theme.mode === 'dark' ? '#ddd' : '#666'};
  margin-bottom: 1.5rem;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: ${props => props.theme.mode === 'dark' ? '#ddd' : '#666'};
  font-size: 1rem;

  &::before {
    content: "•";
    color: #3498db;
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const About: React.FC = () => {
  const { t } = useLanguage();

  const programmingImages = [
    'img/side/code/code1.png',
    'img/side/code/code2.png',
    'img/side/code/code1.png'
  ];

  const teachingImages = [
    'img/side/mentor/mentor1.png',
    'img/side/mentor/mentor2.png',
    'img/side/mentor/mentor3.png',
    'img/side/mentor/mentor4.png'


  ];

  const leathercraftImages = [
    'img/side/artisan/pochette.jpg',
    'img/side/artisan/wallet.jpg',
    'img/side/artisan/kelly_mini.jpg',
  ];

  return (
    <AboutSection id="about">
      <Container>
        <Title>{t('about.title')}</Title>
        <AboutGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AboutCard variants={itemVariants}>
            <AboutTitle>{t('about.programming.title')}</AboutTitle>
            <Carousel images={programmingImages} interval={3000} />
            <AboutText>{t('about.programming.description')}</AboutText>
            <SkillsList>
              <SkillItem>{t('about.programming.skills.frontend')}</SkillItem>
              <SkillItem>{t('about.programming.skills.backend')}</SkillItem>
              <SkillItem>{t('about.programming.skills.mobile')}</SkillItem>
              <SkillItem>{t('about.programming.skills.tools')}</SkillItem>
            </SkillsList>
          </AboutCard>

          <AboutCard variants={itemVariants}>
            <AboutTitle>{t('about.teaching.title')}</AboutTitle>
            <Carousel images={teachingImages} interval={4000} />
            <AboutText>{t('about.teaching.description')}</AboutText>
            <SkillsList>
              <SkillItem>{t('about.teaching.skills.technical')}</SkillItem>
              <SkillItem>{t('about.teaching.skills.soft')}</SkillItem>
              <SkillItem>{t('about.teaching.skills.methodology')}</SkillItem>
            </SkillsList>
          </AboutCard>

          <AboutCard variants={itemVariants}>
            <AboutTitle>{t('about.leathercraft.title')}</AboutTitle>
            <Carousel images={leathercraftImages} interval={5000} />
            <AboutText>{t('about.leathercraft.description')}</AboutText>
            <SkillsList>
              <SkillItem>{t('about.leathercraft.skills.design')}</SkillItem>
              <SkillItem>{t('about.leathercraft.skills.crafting')}</SkillItem>
              <SkillItem>{t('about.leathercraft.skills.quality')}</SkillItem>
            </SkillsList>
          </AboutCard>
        </AboutGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 