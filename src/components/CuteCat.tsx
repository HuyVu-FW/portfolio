import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useDragControls } from 'framer-motion';

const CatContainer = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  cursor: grab;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:active {
    cursor: grabbing;
  }
`;

const CatImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
`;

const SoundIcon = styled(motion.div)`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  background: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const CuteCat: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio());
  const [currentHour] = useState(new Date().getHours());
  const dragControls = useDragControls();

  useEffect(() => {
    // Chọn nhạc dựa vào thời gian
    if (currentHour >= 6 && currentHour < 18) {
      // Nhạc sáng (6h - 17h59)
      audio.src = '/sounds/morning.mp3';
    } else {
      // Nhạc đêm (18h - 5h59)
      audio.src = '/sounds/night.mp3';
    }

    audio.loop = true;
  }, [currentHour]);

  const toggleSound = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const catVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <CatContainer
      variants={catVariants}
      initial="initial"
      animate="animate"
      onClick={toggleSound}
      drag
      dragControls={dragControls}
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={{
        top: 0,
        left: 0,
        right: window.innerWidth - 60,
        bottom: window.innerHeight - 60
      }}
    >
      <CatImage src="/images/cute-cat.png" alt="Cute Cat" />
      <SoundIcon
        animate={{
          scale: isPlaying ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 1,
          repeat: isPlaying ? Infinity : 0,
        }}
      >
        {isPlaying ? '🔊' : '🔈'}
      </SoundIcon>
    </CatContainer>
  );
};

export default CuteCat; 