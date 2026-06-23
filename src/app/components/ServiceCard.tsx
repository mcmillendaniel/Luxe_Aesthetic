import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from './Button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ServiceCardProps {
  imageUrl: string;
  serviceName: string;
  descriptor: string;
  tileHeadline: string;
  ctaLabel: string;
  href?: string;
  forceHover?: boolean;
}

export function ServiceCard({
  imageUrl,
  serviceName,
  descriptor,
  tileHeadline,
  ctaLabel,
  href,
  forceHover = false,
}: ServiceCardProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(forceHover);
  const [imageLoaded, setImageLoaded] = useState(false);

  const hoverState = isHovered || forceHover;

  return (
<div
      onMouseEnter={() => !forceHover && setIsHovered(true)}
      onMouseLeave={() => !forceHover && setIsHovered(false)}
      onClick={() => href && (navigate(href))}
      className="h-full flex flex-col p-4 md:p-6 rounded-sm cursor-pointer"
      style={{
        backgroundColor: '#FAF8F4',
        border: `1px solid ${hoverState ? '#D4A5A0' : '#DDD7D0'}`,
        transform: hoverState ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hoverState ? '0 12px 32px rgba(59, 40, 30, 0.10)' : '0 0 0 rgba(59, 40, 30, 0)',
        transition: 'all 300ms ease-out',
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid #D4A5A0';
        e.currentTarget.style.outlineOffset = '4px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none';
      }}
      tabIndex={0}
    >
      {/* Service Image */}
      <div
        className="w-full overflow-hidden rounded-sm mb-6 aspect-[4/3] md:aspect-[3/2]"
        style={{
          backgroundColor: '#E8E2D9',
        }}
      >
        <ImageWithFallback
          src={imageUrl}
          alt={`${serviceName} treatment at Luxe Aesthetic`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className="w-full h-full object-cover"
          style={{
            opacity: imageLoaded ? 1 : 0,
            transform: hoverState ? 'scale(1.04)' : 'scale(1)',
            transition: 'opacity 400ms ease-in, transform 400ms ease-out',
          }}
        />
      </div>

      {/* Tile Headline with underline reveal */}
      <div
        className="relative inline-block w-fit mb-2"
        style={{
          fontFamily: 'Jost',
          fontWeight: 300,
          fontSize: '13px',
          letterSpacing: '0.03em',
          color: '#A89E97',
        }}
      >
        {tileHeadline}
        <span
          style={{
            position: 'absolute',
            bottom: '-2px',
            left: 0,
            height: '1px',
            backgroundColor: '#C48B8B',
            width: hoverState ? '100%' : '0%',
            transition: 'width 300ms ease-out',
          }}
        />
      </div>

      {/* Service Name */}
      <h3
        className="mb-3 text-2xl md:text-3xl"
        style={{
          fontFamily: 'Cormorant Garamond',
          fontWeight: 400,
          letterSpacing: '0.01em',
          color: '#2A2420',
        }}
      >
        {serviceName}
      </h3>

      {/* Descriptor */}
      <p
        className="mb-6 flex-grow text-sm md:text-base"
        style={{
          fontFamily: 'Jost',
          fontWeight: 300,
          lineHeight: 1.75,
          color: '#6B5E57',
        }}
      >
        {descriptor}
      </p>

      {/* CTA Button */}
      <Button
        variant="primary"
        onClick={(e) => {
          e.stopPropagation();
          if (href) navigate(href);
        }}
        style={{
          minHeight: '44px',
        }}
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
