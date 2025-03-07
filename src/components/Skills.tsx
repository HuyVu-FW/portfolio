import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const SkillsSection = styled.section`
  padding: 4rem 2rem;
  background: ${props => props.theme.mode === 'dark' ? '#1a1a1a' : '#f8f9fa'};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  color: ${props => props.theme.mode === 'dark' ? '#fff' : '#2c3e50'};
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(45deg, #2c3e50, #3498db);
    border-radius: 2px;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: ${props => props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)'};
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid ${props => props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)'};
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #2c3e50, #3498db);
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.2rem;
  color: ${props => props.theme.mode === 'dark' ? '#fff' : '#2c3e50'};
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  color: ${props => props.theme.mode === 'dark' ? '#e0e0e0' : '#34495e'};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    {
      icon: '💻',
      title: t.skills.frontend.title,
      description: t.skills.frontend.description,
      technologies: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS']
    },
    {
      icon: '⚙️',
      title: t.skills.backend.title,
      description: t.skills.backend.description,
      technologies: ['Java', 'Spring Boot', 'Django', 'Node.js', 'Express']
    },
    {
      icon: '🎨',
      title: t.skills.design.title,
      description: t.skills.design.description,
      technologies: ['Figma', 'Adobe XD', 'UI/UX Design', 'Responsive Design']
    },
    {
      icon: '📱',
      title: t.skills.mobile.title,
      description: t.skills.mobile.description,
      technologies: ['React Native', 'Flutter', 'Mobile UI/UX', 'Cross-platform']
    },
    {
      icon: '🛠️',
      title: t.skills.tools.title,
      description: t.skills.tools.description,
      technologies: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile']
    },
    {
      icon: '📊',
      title: t.skills.database.title,
      description: t.skills.database.description,
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <SkillsSection id="skills">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t.skills.title}
        </Title>

        <SkillsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} variants={itemVariants}>
              <SkillIcon>{skill.icon}</SkillIcon>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillDescription>{skill.description}</SkillDescription>
              <SkillDescription style={{ marginTop: '1rem', color: '#3498db' }}>
                {skill.technologies.join(' • ')}
              </SkillDescription>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 