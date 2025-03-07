import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 2rem;
`;

const CarouselImage = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselControls = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

const CarouselDot = styled(motion.button)<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.active ? '#3498db' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#3498db' : 'rgba(255, 255, 255, 0.8)'};
  }
`;

interface CarouselProps {
  images: string[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CarouselContainer>
      <AnimatePresence initial={false}>
        <CarouselImage
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <CarouselControls>
        {images.map((_, index) => (
          <CarouselDot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </CarouselControls>
    </CarouselContainer>
  );
};

export default Carousel; 