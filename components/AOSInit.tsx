'use client';

import { useEffect } from 'react';

export default function AOSInit() {
  useEffect(() => {
    // Dynamically import AOS to avoid SSR issues
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 700,
        once: true,
        easing: 'ease-out-cubic',
        offset: 60,
      });
    });
  }, []);

  return null;
}
