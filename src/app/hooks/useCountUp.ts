import { useEffect, useState, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  triggerOnce?: boolean;
  triggered: boolean;
}

export default function useCountUp({
  end,
  duration = 2000,
  start = 0,
  triggerOnce = true,
  triggered,
}: UseCountUpOptions): number {
  const [count, setCount] = useState(start);
  const hasTriggeredRef = useRef(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Don't start if not triggered
    if (!triggered) return;

    // If triggerOnce is true and we've already triggered, don't animate again
    if (triggerOnce && hasTriggeredRef.current) return;

    // Mark as triggered
    hasTriggeredRef.current = true;

    const startTime = performance.now();
    const range = end - start;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out quad: progress = 1 - (1 - t)^2
      const easedProgress = 1 - Math.pow(1 - progress, 2);

      const currentCount = start + range * easedProgress;
      setCount(currentCount);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly at the target value
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, start, triggered, triggerOnce]);

  return count;
}
