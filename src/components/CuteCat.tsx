import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useDragControls } from "framer-motion";

const CatContainer = styled(motion.div)`
  position: fixed;
  bottom: 100px;
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
  background: ${({ theme }) => theme.colors.primary || "blue"};
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
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const dragControls = useDragControls();

  useEffect(() => {
    // Cập nhật kích thước màn hình khi resize
    const updateSize = () => setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", updateSize);

    // Chọn nhạc dựa vào thời gian
    audio.src = currentHour >= 6 && currentHour < 18 ? "sound/morning.mp3" : "sound/night.mp3";
    audio.loop = true;

    return () => {
      audio.pause();
      window.removeEventListener("resize", updateSize);
    };
  }, [currentHour, audio]);

  const toggleSound = () => {
    isPlaying ? audio.pause() : audio.play();
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
        ease: "easeInOut",
      },
    },
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
        right: screenSize.width - 60,
        bottom: screenSize.height - 60,
      }}
    >
      <CatImage src="img/cat.png" alt="Cute Cat" />
      <SoundIcon
        animate={{
          scale: isPlaying ? [1, 1.2, 1] : 1,
        }}
        transition={{
          duration: 1,
          repeat: isPlaying ? Infinity : 0,
        }}
      >
        {isPlaying ? "🔊" : "🔈"}
      </SoundIcon>
    </CatContainer>
  );
};

export default CuteCat;
