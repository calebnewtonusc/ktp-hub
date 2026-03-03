'use client';

import { useEffect, useRef } from 'react';

export default function TypedHero() {
  const elRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<import('typed.js').default | null>(null);

  useEffect(() => {
    if (!elRef.current) return;

    import('typed.js').then(({ default: Typed }) => {
      typedRef.current = new Typed(elRef.current!, {
        strings: [
          'Kappa Theta Pi.',
          'Business. Technology. Leadership.',
          'USC Chapter Hub.',
        ],
        typeSpeed: 55,
        backSpeed: 30,
        backDelay: 1800,
        startDelay: 400,
        loop: true,
        smartBackspace: true,
      });
    });

    return () => {
      typedRef.current?.destroy();
    };
  }, []);

  return (
    <span
      ref={elRef}
      className="gradient-text"
      aria-label="Kappa Theta Pi. Business. Technology. Leadership."
    />
  );
}
