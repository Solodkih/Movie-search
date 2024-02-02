import { useState, useEffect } from 'react';

export const SCREEN_SM = 425.5;
export const SCREEN_MD = 800.5;
export const SCREEN_LG = 992.5;
export const SCREEN_XL = 1200.5;
export const SCREEN_XXL = 1400.5;

export const useResize = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};
