'use client';

import { useEffect, useRef } from 'react';

export default function GranimBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const granimRef = useRef<unknown>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    import('granim').then(({ default: Granim }) => {
      granimRef.current = new Granim({
        element: canvasRef.current!,
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states: {
          'default-state': {
            gradients: [
              ['#1e3a5f', '#2563eb'],
              ['#1e40af', '#3b82f6'],
              ['#1e3a5f', '#1e40af'],
            ],
            transitionSpeed: 4000,
          },
        },
      });
    });

    return () => {
      if (granimRef.current && typeof (granimRef.current as { destroy?: () => void }).destroy === 'function') {
        (granimRef.current as { destroy: () => void }).destroy();
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.15,
      }}
      aria-hidden="true"
    />
  );
}
