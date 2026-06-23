import { Button } from './Button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturedProviderSection() {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-12" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Photo - First on mobile, first on desktop */}
          <div className="w-full max-w-full md:max-w-[480px] lg:max-w-none mx-auto lg:mx-0">
            <ImageWithFallback
              src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780894692/LuxeAesthetic_Dr._Daniel_Headshot_yzmyay.png"
              alt="Dr. Stephanie Daniel, Luxe Aesthetic, Raleigh NC"
              className="w-full object-cover rounded"
              style={{
                aspectRatio: '3/4',
                opacity: 0,
                animation: 'fadeIn 400ms ease forwards',
              }}
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className="px-6 md:px-0">
            <div className="mb-2">
              <span
                className="uppercase tracking-widest text-xs"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  color: '#A89E97',
                }}
              >
                ABOUT DR. DANIEL
              </span>
            </div>

            <h2
              className="text-2xl md:text-3xl lg:text-4xl mb-6"
              style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                color: '#2A2420',
              }}
            >
              She built the practice she couldn't find.
            </h2>

            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}
            >
              Dr. Stephanie Daniel created Luxe Aesthetic because she believed clients deserved something the industry wasn't offering — a practice that takes both the medicine and the experience seriously. Board-certified and Raleigh-based, she treats every client as an individual, not a treatment plan. Her approach is honest, unhurried, and built on results that speak for themselves.
            </p>

            <Button
              variant="secondary"
              className="w-full md:w-auto"
              style={{ minHeight: '44px' }}
            >
              MEET THE TEAM
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
