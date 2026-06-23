import { useState, useRef, useEffect, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Before treatment',
  afterAlt = 'After treatment',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(8);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const MIN_POSITION = 8;
  const MAX_POSITION = 92;

  // Activation animation - moves to 5% when first clicked
  const activateSlider = useCallback(() => {
    if (!isActivated) {
      setIsActivated(true);
      setSliderPosition(8);
      setHasAnimated(true);
    }
  }, [isActivated]);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const clampedPercentage = Math.min(Math.max(percentage, MIN_POSITION), MAX_POSITION);
    setSliderPosition(clampedPercentage);
  }, []);

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isActivated) {
      activateSlider();
      return;
    }
    setIsDragging(true);
    setHasAnimated(true);
    updatePosition(e.clientX);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, updatePosition]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isActivated) {
      activateSlider();
      return;
    }
    setIsDragging(true);
    setHasAnimated(true);
    updatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleTouchMove = (e: TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, updatePosition]);

  // Keyboard handlers
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isActivated) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateSlider();
      }
      return;
    }

    let newPosition = sliderPosition;
    const step = e.shiftKey ? 20 : 5;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        newPosition = Math.max(sliderPosition - step, MIN_POSITION);
        break;
      case 'ArrowRight':
        e.preventDefault();
        newPosition = Math.min(sliderPosition + step, MAX_POSITION);
        break;
      case 'Home':
        e.preventDefault();
        newPosition = MIN_POSITION;
        break;
      case 'End':
        e.preventDefault();
        newPosition = MAX_POSITION;
        break;
      default:
        return;
    }

    setSliderPosition(newPosition);
    setHasAnimated(true);
  };

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4/5',
          overflow: 'hidden',
          borderRadius: '4px',
          userSelect: 'none',
          touchAction: 'pan-y',
        }}
      >
        {/* After Image (background) */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src={afterImage}
            alt={afterAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Before Image (clipped) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            transition: isActivated
              ? hasAnimated && !isDragging
                ? 'none'
                : 'clip-path 600ms cubic-bezier(0.16, 1, 0.3, 1)'
              : 'clip-path 600ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
               objectPosition: 'top',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Labels */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: 'rgba(42, 36, 32, 0.4)',
            padding: '6px 12px',
            borderRadius: '12px',
            fontFamily: 'Jost',
            fontWeight: 400,
            fontSize: '12px',
            letterSpacing: '0.08em',
            color: '#FEFCF9',
            pointerEvents: 'none',
          }}
        >
          BEFORE
        </div>

        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'rgba(42, 36, 32, 0.4)',
            padding: '6px 12px',
            borderRadius: '12px',
            fontFamily: 'Jost',
            fontWeight: 400,
            fontSize: '12px',
            letterSpacing: '0.08em',
            color: '#FEFCF9',
            pointerEvents: 'none',
          }}
        >
          AFTER
        </div>

        {/* Divider Line */}
        <div
          style={{
            position: 'absolute',
            left: `${sliderPosition}%`,
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: '#FEFCF9',
            transform: 'translateX(-1px)',
            transition: isActivated
              ? hasAnimated && !isDragging
                ? 'none'
                : 'left 600ms cubic-bezier(0.16, 1, 0.3, 1)'
              : 'left 600ms cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'none',
          }}
        />

        {/* Handle */}
        <div
          role="slider"
          aria-label={isActivated ? "Comparison slider" : "Click to activate comparison slider"}
          aria-valuemin={MIN_POSITION}
          aria-valuemax={MAX_POSITION}
          aria-valuenow={Math.round(sliderPosition)}
          tabIndex={0}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onKeyDown={handleKeyDown}
          onFocus={(e) => {
            e.currentTarget.style.outline = '2px solid #D4A5A0';
            e.currentTarget.style.outlineOffset = '4px';
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = 'none';
          }}
          style={{
            position: 'absolute',
            left: `${sliderPosition}%`,
            top: '50%',
            width: '44px',
            height: '44px',
            backgroundColor: isDragging ? '#A67870' : '#D4A5A0',
            borderRadius: '50%',
            transform: `translate(-50%, -50%) scale(${isDragging ? 1.05 : isHovering ? 1.15 : 1})`,
            transition: isActivated
              ? hasAnimated && !isDragging
                ? 'none'
                : `left 600ms cubic-bezier(0.16, 1, 0.3, 1),
                   background-color 200ms ease,
                   transform 200ms ease`
              : `left 600ms cubic-bezier(0.16, 1, 0.3, 1),
                 background-color 200ms ease,
                 transform 200ms ease`,
            cursor: isActivated ? 'ew-resize' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
            boxShadow: '0 2px 8px rgba(42, 36, 32, 0.15)',
          }}
        >
          {/* Left Arrow */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="#FEFCF9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pointerEvents: 'none' }}
          >
            <polyline points="8,10 4,6 8,2" />
          </svg>

          {/* Right Arrow */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="#FEFCF9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pointerEvents: 'none' }}
          >
            <polyline points="4,2 8,6 4,10" />
          </svg>
        </div>
      </div>

      {/* Consent Line */}
      <p
        style={{
          fontFamily: 'Jost',
          fontWeight: 300,
          fontSize: '13px',
          color: '#A89E97',
          textAlign: 'center',
          marginTop: '12px',
        }}
      >
        Results shown with patient consent. Individual results may vary.
      </p>
    </div>
  );
}
