import React, { createContext, useContext, useState, useEffect } from 'react';

export type AppTheme = 'blush' | 'dusk';

interface ThemeContextType {
  theme: AppTheme;
  setTheme: (theme: AppTheme) => void;
  toggleTheme: () => void;
  isBlush: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(() => {
    try {
      const saved = localStorage.getItem('catracho_theme');
      if (saved === 'blush' || saved === 'dusk') return saved;
    } catch {}
    return 'blush'; // Default to ultra-soft pretty romantic blush
  });

  useEffect(() => {
    try {
      localStorage.setItem('catracho_theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'blush' ? 'dusk' : 'blush'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isBlush: theme === 'blush' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
