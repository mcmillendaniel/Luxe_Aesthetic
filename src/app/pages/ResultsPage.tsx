import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Button } from '../components/Button';

interface ResultItem {
  id: string;
  service: string;
  beforeImage: string;
  afterImage: string;
}

const results: ResultItem[] = [
  {
    id: '1',
    service: 'Botox',
    beforeImage: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780890859/LuxeAesthetic_Botox_Before_Image_a2ru9c.png',
    afterImage: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780890859/LuxeAesthetic_Botox_After_Image_rpbs0t.png',
  },
  {
    id: '2',
    service: 'Filler',
    beforeImage: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780890859/LuxeAesthetic_Filler_Before_Image_jfrvbf.png',
    afterImage: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780890859/LuxeAesthetic_Filler_After_Image_fd4bix.png',
  },
  {
    id: '3',
    service: 'Body Contouring',
    beforeImage: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780896902/Final_BC_Before_Image_xyhpij.png',
    afterImage: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780896901/Final_BC_After_Image_zlb1ec.png',
  },
]

const testimonials = [
  {
    quote: "I was nervous about looking overdone. Dr. Daniel completely understood and gave me exactly what I asked for. Natural, refreshed, still me.",
    attribution: "Sarah M., Botox",
  },
  {
    quote: "The GLP-1 program changed my relationship with my health. This is medicine, not a shortcut.",
    attribution: "Jennifer K., Medical Weight Management",
  },
  {
    quote: "I've been to other places. There's no comparison. Luxe feels different from the moment you walk in.",
    attribution: "Amanda R., Filler",
  },
  {
    quote: "The consultation alone was worth it. No pressure, just honesty about what would actually help.",
    attribution: "Lisa T., Body Contouring",
  },
];

export function ResultsPage() {
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

const filteredResults = results;  

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredResults.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredResults.length) % filteredResults.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <div style={{ backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      <Navigation currentPage="Results" />

      {/* Page Header */}
      <section style={{ backgroundColor: '#F3EFE8', padding: '80px 0' }}>
        <div className="max-w-screen-xl mx-auto px-12 text-center">
          <div style={{ marginBottom: '16px' }}>
            <span style={{
              fontFamily: 'Jost',
              fontWeight: 400,
              fontSize: '11px',
              letterSpacing: '0.12em',
              color: '#A89E97',
            }}>
              RESULTS
            </span>
    </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '48px',
            color: '#2A2420',
            marginBottom: '16px',
          }}>
            Real clients. Real results.
          </h1>

          <p style={{
            fontFamily: 'Jost',
            fontWeight: 300,
            fontSize: '17px',
            color: '#6B5E57',
          }}>
            Every photo shown with patient consent. Click on photos to interact with a sliding Before/After comparison.
          </p>
    </div>
      </section>


      {/* Results Grid */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '64px 0' }}>
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {results.map((result, index) => {
              const filteredIndex = index;

              return (
                <div
                  key={result.id}
                  style={{
                    transition: 'opacity 250ms ease, transform 250ms ease',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setHoveredCard(result.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => openLightbox(filteredIndex)}                  >
                    {/* Service Label */}
                    <div style={{
                      fontFamily: 'Jost',
                      fontWeight: 400,
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      color: '#A89E97',
                      marginBottom: '12px',
                    }}>
                      {result.service.toUpperCase()}
    </div>

                    {/* Before/After Slider */}
                    <div style={{ position: 'relative' }}>
                      <BeforeAfterSlider
                        beforeImage={result.beforeImage}
                        afterImage={result.afterImage}
                      />

                      {/* Hover Overlay */}
                      {hoveredCard === result.id && (
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          backgroundColor: 'rgba(42, 36, 32, 0.3)',
                          borderRadius: '4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'opacity 200ms ease',
                          marginBottom: '12px',
                        }}>
                          <span style={{
                            fontFamily: 'Jost',
                            fontWeight: 400,
                            fontSize: '12px',
                            letterSpacing: '0.1em',
                            color: '#FEFCF9',
                          }}>
                            VIEW
                          </span>
    </div>
                      )}
    </div>
    </div>
    </div>
              );
            })}
    </div>
    </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ backgroundColor: '#F3EFE8', padding: '96px 0' }}>
        <div className="max-w-screen-xl mx-auto px-12">
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '36px',
            color: '#2A2420',
            marginBottom: '48px',
            textAlign: 'center',
          }}>
            What our clients say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#F3EFE8',
                  border: '1px solid #DDD7D0',
                  borderRadius: '2px',
                  padding: '32px',
                  position: 'relative',
                }}
              >
                <div style={{
                  fontFamily: 'Cormorant Garamond',
                  fontSize: '72px',
                  color: '#EDD5D2',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}>
                  "
    </div>

                <p style={{
                  fontFamily: 'Cormorant Garamond',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '20px',
                  lineHeight: 1.6,
                  color: '#2A2420',
                  marginBottom: '16px',
                }}>
                  {testimonial.quote}
                </p>

                <p style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  fontSize: '13px',
                  color: '#6B5E57',
                }}>
                  — {testimonial.attribution}
                </p>
    </div>
            ))}
    </div>

          <div style={{ textAlign: 'center' }}>
            <Button variant="primary" onClick={() => navigate('/book')}>
              BOOK A CONSULTATION
            </Button>
    </div>
    </div>
      </section>

      {/* Final CTA Block */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '64px 0' }}>
        <div className="max-w-screen-lg mx-auto px-12 text-center">
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '36px',
            color: '#2A2420',
            marginBottom: '32px',
          }}>
            Ready to see your results?
          </h2>

          <Button variant="primary" onClick={() => navigate('/book')}>
            BOOK A CONSULTATION
          </Button>
    </div>
      </section>

      {/* Footer Placeholder */}
      <Footer />
      <MobileStickyBookBar />

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(42, 36, 32, 0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '48px',
          }}
          onClick={closeLightbox}
        >
          <div
            style={{
              maxWidth: '800px',
              width: '100%',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <BeforeAfterSlider
              beforeImage={filteredResults[lightboxIndex].beforeImage}
              afterImage={filteredResults[lightboxIndex].afterImage}
            />

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                width: '32px',
                height: '32px',
                backgroundColor: 'transparent',
                border: 'none',
                color: '#FEFCF9',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #FEFCF9';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
            >
              ✕
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                backgroundColor: '#D4A5A0',
                border: 'none',
                borderRadius: '50%',
                color: '#FEFCF9',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #FEFCF9';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="12,16 6,10 12,4" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                backgroundColor: '#D4A5A0',
                border: 'none',
                borderRadius: '50%',
                color: '#FEFCF9',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #FEFCF9';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="8,4 14,10 8,16" />
              </svg>
            </button>
    </div>
    </div>
      )}
    </div>
  );
}
