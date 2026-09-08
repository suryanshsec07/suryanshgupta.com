import { useState, useEffect, useCallback } from 'react';

/**
 * Typing animation effect that cycles through a list of strings.
 */
const TypingEffect: React.FC<{ strings: string[]; speed?: number; deleteSpeed?: number; pause?: number }> = ({
  strings,
  speed = 80,
  deleteSpeed = 40,
  pause = 2000,
}) => {
  const [text, setText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const current = strings[stringIndex];
    if (!isDeleting) {
      setText(current.substring(0, text.length + 1));
      if (text.length === current.length) {
        setTimeout(() => setIsDeleting(true), pause);
        return;
      }
    } else {
      setText(current.substring(0, text.length - 1));
      if (text.length === 0) {
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
        return;
      }
    }
  }, [text, stringIndex, isDeleting, strings, pause]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting, deleteSpeed, speed]);

  return (
    <span>
      {text}
      <span className="typing-cursor" />
    </span>
  );
};

export default TypingEffect;
