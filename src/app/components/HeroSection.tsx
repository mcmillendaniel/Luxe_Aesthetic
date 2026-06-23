import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import HeroImage from '../../imports/Hero_Image.png';

interface HeroSectionProps {
  isMobile?: boolean;
}

export function HeroSection({ isMobile = false }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animations after a brief delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);

    if (!isMobile) {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, [isMobile]);

  // Parallax calculation: max 15% movement
  const parallaxOffset = isMobile ? 0 : Math.min(scrollY * 0.15, 100);

  const headlineStyle: React.CSSProperties = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(24px)',
    transition: 'opacity 900ms ease-out, transform 900ms ease-out',
  };

  const subheadStyle: React.CSSProperties = {
    opacity: mounted ? 0.9 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(16px)',
    transition: 'opacity 700ms ease-out 200ms, transform 700ms ease-out 200ms',
  };

  const ctaRowStyle: React.CSSProperties = {
    opacity: mounted ? 1 : 0,
    transition: 'opacity 600ms ease-out 450ms',
  };

  const trustSignalStyle: React.CSSProperties = {
    opacity: mounted ? 0.75 : 0,
    transition: 'opacity 500ms ease-out 650ms',
  };

  const primaryButtonStyle: React.CSSProperties = {
    transition: 'background-color 200ms ease',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    transition: 'all 200ms ease',
  };

  return (
    <div
      className="min-h-screen"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background Image with Parallax */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '115%',
          transform: `translateY(${parallaxOffset}px)`,
          transition: isMobile ? 'none' : 'transform 0.1s ease-out',
        }}
      >
        <ImageWithFallback
          src={HeroImage}
          alt="Luxe Aesthetic med spa model"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>

      {/* Warm Scrim Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(42, 36, 32, 0.35)',
          zIndex: 1,
        }}
      />

      {/* Content Block */}
      <div className="relative h-full flex items-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-0 pb-16 md:pb-24" style={{ zIndex: 2 }}>
        <div className="max-w-2xl w-full">
          {/* Headline */}
          <h1
            className="font-light text-4xl md:text-5xl lg:text-7xl mb-4 leading-tight tracking-tight"
            style={{
              fontFamily: 'Cormorant Garamond',
              color: '#FEFCF9',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              ...headlineStyle,
            }}
          >
            You've been thinking about it long enough.
          </h1>

          {/* Subhead */}
          <p
            className="font-light text-sm md:text-base lg:text-lg leading-relaxed mb-8"
            style={{
              fontFamily: 'Jost',
              color: '#FEFCF9',
              ...subheadStyle,
            }}
          >
            Botox, filler, body contouring, and medical weight management —
            in a practice designed to feel as good as the results.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6" style={ctaRowStyle}>
            <Link
              to="/book"
              className="py-4 px-6 font-normal text-xs uppercase tracking-wider rounded-sm cursor-pointer inline-flex items-center justify-center w-full sm:w-auto bg-[#2C1810] text-white hover:bg-[#1a0f0a]"
              style={{
                fontFamily: 'Jost',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                minHeight: '44px',
                ...primaryButtonStyle,
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #C48B8B';
                e.currentTarget.style.outlineOffset = '3px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
            >
              Book a Consultation
            </Link>
            <Link
              to="/results"
              className="py-4 px-6 font-normal text-xs uppercase tracking-wider rounded-sm cursor-pointer inline-flex items-center justify-center w-full sm:w-auto bg-transparent border border-white text-white"
              style={{
                fontFamily: 'Jost',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                minHeight: '44px',
                ...secondaryButtonStyle,
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #C48B8B';
                e.currentTarget.style.outlineOffset = '3px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
            >
              See Our Results
            </Link>
          </div>

          {/* Trust Signal */}
          <div
            className="font-light text-xs md:text-sm"
            style={{
              fontFamily: 'Jost',
              color: '#FEFCF9',
              ...trustSignalStyle,
            }}
          >
            Serving Raleigh since 2018  ·  500+ five-star reviews
          </div>
        </div>
      </div>
    </div>
  );
}