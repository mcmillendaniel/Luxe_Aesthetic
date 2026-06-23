import { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import useCountUp from '../hooks/useCountUp';

interface NumericStatProps {
  endValue: number;
  duration: number;
  subtitle: string;
  suffix: string;
  triggered: boolean;
}

interface TextStatProps {
  value: string;
  subtitle: string;
  triggered: boolean;
}

function NumericStat({ endValue, duration, subtitle, suffix, triggered }: NumericStatProps) {
  const count = useCountUp({
    end: endValue,
    duration,
    start: 0,
    triggerOnce: true,
    triggered,
  });

  // Format the display value
  const displayValue = Math.floor(count).toLocaleString() + suffix;

  return (
    <div className="w-1/2 md:w-auto text-center py-8 px-4">
      <div
        className="text-4xl md:text-5xl mb-2"
        style={{
          fontFamily: 'Cormorant Garamond',
          fontWeight: 400,
          color: '#2A2420',
          opacity: triggered ? 1 : 0,
          transition: 'opacity 400ms ease-out',
        }}
      >
        {displayValue}
      </div>
      <div
        className="text-xs md:text-sm uppercase tracking-widest"
        style={{
          fontFamily: 'Jost',
          fontWeight: 300,
          letterSpacing: '0.05em',
          color: '#6B5E57',
          opacity: triggered ? 1 : 0,
          transition: 'opacity 400ms ease-out 200ms',
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}

function TextStat({ value, subtitle, triggered }: TextStatProps) {
  return (
    <div className="w-1/2 md:w-auto text-center py-8 px-4">
      <div
        className="text-4xl md:text-5xl mb-2"
        style={{
          fontFamily: 'Cormorant Garamond',
          fontWeight: 400,
          color: '#2A2420',
          opacity: triggered ? 1 : 0,
          transition: 'opacity 400ms ease-out',
        }}
      >
        {value}
      </div>
      <div
        className="text-xs md:text-sm uppercase tracking-widest"
        style={{
          fontFamily: 'Jost',
          fontWeight: 300,
          letterSpacing: '0.05em',
          color: '#6B5E57',
          opacity: triggered ? 1 : 0,
          transition: 'opacity 400ms ease-out 200ms',
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}

export function CredibilityBarSection() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.3 });
  const [countReady, setCountReady] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => setCountReady(true), 150);
      return () => clearTimeout(t);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="px-4 md:px-8 lg:px-16 py-12 md:py-16"
      style={{
        backgroundColor: '#E8E2D9',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 800ms ease-out, transform 800ms ease-out',
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-0 md:justify-between">
          <TextStat
            value="Board Certified"
            subtitle="Medical provider"
            triggered={countReady}
          />

          <NumericStat
            endValue={500}
            duration={1800}
            subtitle="Five-star reviews"
            suffix="+"
            triggered={countReady}
          />

          <NumericStat
            endValue={8}
            duration={1200}
            subtitle="Years serving Raleigh"
            suffix="+"
            triggered={countReady}
          />

          <NumericStat
            endValue={10000}
            duration={2200}
            subtitle="Treatments performed"
            suffix="+"
            triggered={countReady}
          />
        </div>
      </div>
    </section>
  );
}
