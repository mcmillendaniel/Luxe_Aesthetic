import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './Button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import useScrollReveal from '../hooks/useScrollReveal';
import BotoxBefore from '../../imports/LuxeAesthetic_Botox_Before_Image.png';
import BotoxAfter from '../../imports/LuxeAesthetic_Botox_After_Image.png';
import FillerBefore from '../../imports/LuxeAesthetic_Filler_Before_Image.png';
import FillerAfter from '../../imports/LuxeAesthetic_Filler_After_Image.png';
import BodyContouringBefore from '../../imports/LuxeAesthetic_Body_Contouring_Before_Image.png';
import BodyContouringAfter from '../../imports/LuxeAesthetic_Body_Contouring_After_Image.png';

const RESULTS = [
  {
    beforeUrl: BotoxBefore,
    afterUrl: BotoxAfter,
  },
  {
    beforeUrl: FillerBefore,
    afterUrl: FillerAfter,
  },
  {
    beforeUrl: BodyContouringBefore,
    afterUrl: BodyContouringAfter,
  }
];

interface ResultCardProps {
  beforeUrl: string;
  afterUrl: string;
}

function ResultCard({ beforeUrl, afterUrl }: ResultCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full"
    >
      <div
        className="grid grid-cols-2 gap-1 md:gap-2 rounded overflow-hidden mb-4 cursor-pointer"
        style={{
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 300ms ease-out',
        }}
      >
        <div className="relative h-[280px] md:h-[320px]">
          <div
            className="absolute top-2 left-2 px-2 py-1 rounded-sm z-10 uppercase tracking-wider text-xs"
            style={{
              backgroundColor: 'rgba(42, 36, 32, 0.8)',
              color: '#FEFCF9',
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '11px',
              letterSpacing: '0.05em',
            }}
          >
            Before
          </div>
          <ImageWithFallback
            src={beforeUrl}
            alt="Before treatment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-[280px] md:h-[320px]">
          <div
            className="absolute top-2 left-2 px-2 py-1 rounded-sm z-10 uppercase tracking-wider text-xs"
            style={{
              backgroundColor: 'rgba(42, 36, 32, 0.8)',
              color: '#FEFCF9',
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '11px',
              letterSpacing: '0.05em',
            }}
          >
            After
          </div>
          <ImageWithFallback
            src={afterUrl}
            alt="After treatment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p
        className="text-xs text-center px-4"
        style={{
          fontFamily: 'Jost',
          fontWeight: 300,
          color: '#A89E97',
        }}
      >
        Results shown with patient consent. Individual results may vary.
      </p>
    </div>
  );
}

export function ResultsProofSection() {
  const navigate = useNavigate();
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="px-4 md:px-8 lg:px-16 py-16 md:py-24"
      style={{
        backgroundColor: '#F3EFE8',
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Section Headline */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-12 md:mb-16"
          style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            color: '#2A2420',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease-out, transform 700ms ease-out',
          }}
        >
          Real clients. Real results.
        </h2>

        {/* Results Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:w-3/4 lg:mx-auto">
          {RESULTS.map((result, index) => (
            <div
              key={index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 700ms ease-out ${100 + index * 120}ms, transform 700ms ease-out ${100 + index * 120}ms`,
              }}
            >
              <ResultCard {...result} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className="flex justify-center mt-8 md:mt-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 500ms ease-out 480ms',
          }}
        >
          <Button variant="secondary" className="w-full sm:w-auto" onClick={() => navigate('/results')}>See the Full Gallery</Button>
        </div>
      </div>
    </section>
  );
}
