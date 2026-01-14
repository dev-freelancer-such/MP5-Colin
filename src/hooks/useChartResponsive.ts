import { useEffect, useState } from 'react';

interface ChartResponsiveConfig {
  defaultHeight: number;
  mobileHeight?: number;
  tabletHeight?: number;
  minWidth?: number;
  enableHorizontalScroll?: boolean;
}

interface ChartResponsiveResult {
  height: number;
  minWidth: number | undefined;
  shouldScroll: boolean;
}

/**
 * Hook to handle chart responsiveness
 * Returns adjusted height and scroll settings based on screen size
 */
export const useChartResponsive = (
  config: ChartResponsiveConfig
): ChartResponsiveResult => {
  const {
    defaultHeight,
    mobileHeight = 250,
    tabletHeight = 300,
    minWidth = 500,
    enableHorizontalScroll = true,
  } = config;

  const [height, setHeight] = useState(defaultHeight);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Mobile: < 640px
      if (width < 640) {
        setHeight(mobileHeight);
        setShouldScroll(enableHorizontalScroll);
      }
      // Tablet: 640px - 1024px
      else if (width < 1024) {
        setHeight(tabletHeight);
        setShouldScroll(false);
      }
      // Desktop: >= 1024px
      else {
        setHeight(defaultHeight);
        setShouldScroll(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [defaultHeight, mobileHeight, tabletHeight, enableHorizontalScroll]);

  return {
    height,
    minWidth: shouldScroll ? minWidth : undefined,
    shouldScroll,
  };
};
