import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Confetti = () => {
  useEffect(() => {
    const duration = 5 * 1000; // duración en milisegundos
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return null;
};

export default Confetti;