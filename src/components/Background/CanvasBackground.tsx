import { useEffect, useRef } from 'react';

/**
 * Matrix-style green code rain rendered on HTML5 Canvas.
 * Uses lightweight character columns falling at random speeds.
 * Respects prefers-reduced-motion.
 */
const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let columns: number[] = [];
    let colCount = 0;
    const FONT_SIZE = 14;
    const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF{}[]<>/:;=+-*&#@$!?~'.split('');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      colCount = Math.floor(canvas.width / FONT_SIZE);
      // Preserve existing column positions, add new ones if wider
      const newCols = new Array(colCount).fill(0);
      for (let i = 0; i < Math.min(columns.length, colCount); i++) {
        newCols[i] = columns[i];
      }
      columns = newCols;
    };

    const draw = () => {
      // Semi-transparent black overlay creates the trail effect
      ctx.fillStyle = 'rgba(5, 8, 7, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < colCount; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = columns[i] * FONT_SIZE;

        // Random brightness for depth effect
        const brightness = Math.random();
        if (brightness > 0.95) {
          // Bright leading character
          ctx.fillStyle = '#39FF88';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#39FF88';
        } else if (brightness > 0.7) {
          ctx.fillStyle = 'rgba(57, 255, 136, 0.6)';
          ctx.shadowBlur = 0;
          ctx.shadowColor = 'transparent';
        } else {
          ctx.fillStyle = 'rgba(57, 255, 136, 0.15)';
          ctx.shadowBlur = 0;
          ctx.shadowColor = 'transparent';
        }

        ctx.font = `${FONT_SIZE}px 'Fira Code', monospace`;
        ctx.fillText(char, x, y);

        // Reset column when it goes past the screen, with randomness
        if (y > canvas.height && Math.random() > 0.975) {
          columns[i] = 0;
        }
        columns[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.4,
      }}
    />
  );
};

export default CanvasBackground;
