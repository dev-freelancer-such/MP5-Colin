import { useEffect, useState } from 'react';

interface UseResponsiveOptions {
  breakpoint?: number;
  onBreakpoint?: (isBelow: boolean) => void;
}

export const useResponsive = (options?: UseResponsiveOptions) => {
  const { breakpoint = 991, onBreakpoint } = options || {};
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const isBelow = window.innerWidth < breakpoint;
      setIsBelowBreakpoint(isBelow);

      if (onBreakpoint) {
        onBreakpoint(isBelow);
      }
    };

    // Kiểm tra kích thước màn hình ban đầu
    handleResize();

    // Thêm event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint, onBreakpoint]);

  return { isBelowBreakpoint };
};
