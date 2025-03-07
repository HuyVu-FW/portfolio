import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

type ThemeMode = 'light' | 'dark';
type ThemeColor = 'blue' | 'purple' | 'green' | 'orange';

interface ThemeContextType {
  mode: ThemeMode;
  color: ThemeColor;
  toggleTheme: () => void;
  setColor: (color: ThemeColor) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  color: 'blue',
  toggleTheme: () => {},
  setColor: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const getColorPalette = (color: ThemeColor) => {
  switch (color) {
    case 'blue':
      return {
        primary: '#3498db',
        secondary: '#2c3e50',
        accent: '#2980b9',
      };
    case 'purple':
      return {
        primary: '#9b59b6',
        secondary: '#2c3e50',
        accent: '#8e44ad',
      };
    case 'green':
      return {
        primary: '#2ecc71',
        secondary: '#2c3e50',
        accent: '#27ae60',
      };
    case 'orange':
      return {
        primary: '#e67e22',
        secondary: '#2c3e50',
        accent: '#d35400',
      };
    default:
      return {
        primary: '#3498db',
        secondary: '#2c3e50',
        accent: '#2980b9',
      };
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem('themeMode');
    return (savedMode as ThemeMode) || 'light';
  });

  const [color, setColor] = useState<ThemeColor>(() => {
    const savedColor = localStorage.getItem('themeColor');
    return (savedColor as ThemeColor) || 'blue';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('themeColor', color);
  }, [color]);

  const toggleTheme = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const colorPalette = getColorPalette(color);

  const theme = {
    mode,
    colors: {
      background: mode === 'dark' ? '#1a1a1a' : '#ffffff',
      text: mode === 'dark' ? '#ffffff' : '#2c3e50',
      primary: colorPalette.primary,
      secondary: colorPalette.secondary,
      accent: colorPalette.accent,
      surface: mode === 'dark' ? '#2d2d2d' : '#f5f5f5',
      border: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <ThemeContext.Provider value={{ mode, color, toggleTheme, setColor }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}; 