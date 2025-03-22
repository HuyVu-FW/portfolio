import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StorySection = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.colors.surface};
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
  color: ${props => props.theme.colors.text};
  margin-bottom: 4rem;
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
    background: linear-gradient(45deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    border-radius: 2px;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${props => props.theme.colors.primary};
  }
`;

const TimelineItem = styled(motion.div)<{ position: 'left' | 'right' }>`
  position: relative;
  width: 50%;
  padding: 2rem;
  margin-bottom: 2rem;
  ${props => props.position === 'left' ? 'margin-right: auto;' : 'margin-left: auto;'}
`;

const Year = styled.div<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  ${props => props.position === 'left' ? 'right: -60px;' : 'left: -60px;'}
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 500;
`;

const Content = styled.div`
  background: ${props => props.theme.colors.background};
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.border};
`;

const Story: React.FC = () => {
  const timelineData = [
    {
      year: '2022',
      position: 'left' as const,
      content: 'Bắt đầu hành trình lập trình với niềm đam mê và tinh thần học hỏi không ngừng.'
    },
    {
      year: '2023',
      position: 'right' as const,
      content: 'Phát triển kỹ năng chuyên môn và tham gia các dự án thực tế và bắt đầu chia sẻ kinh nghiệm của mình qua việc giảng dạy'
    },
    {
      year: '2024',
      position: 'left' as const,
      content: 'Mở rộng kiến thức về web development và trải nghiệm thêm về lĩnh vực đồ da thủ công'
    },
    {
      year: '2025',
      position: 'right' as const,
      content: 'Tiếp tục phát triển và đóng góp cho cộng đồng lập trình.'
    }
  ];

  return (
    <StorySection id="story">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Câu chuyện của tôi
        </Title>

        <Timeline>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.year}
              position={item.position}
              initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Year position={item.position}>{item.year}</Year>
              <Content>{item.content}</Content>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </StorySection>
  );
};

export default Story; 