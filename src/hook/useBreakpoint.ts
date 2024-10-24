import { useState, useEffect } from 'react';

// Define your breakpoints here
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1400,
  xl: 1920,
};

const getBreakpoint = (width: number) => {
  if (width >= breakpoints.xl) return 'xl';
  if (width >= breakpoints.lg) return 'lg';
  if (width >= breakpoints.md) return 'md';
  if (width >= breakpoints.sm) return 'sm';
  return 'xs';
};

export const useBreakpoint = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setBreakpoint(getBreakpoint(width));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { screenWidth, breakpoint };
};
