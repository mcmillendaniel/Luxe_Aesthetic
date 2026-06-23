import { useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      <Navigation currentPage="About" />

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
              ABOUT
            </span>
    </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '48px',
            color: '#2A2420',
          }}>
            She built the practice she couldn't find.
          </h1>
    </div>
      </section>

      {/* Origin Story Section */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '96px 0' }}>
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mobile: Photo First */}
            <div className="lg:hidden">
              <ImageWithFallback
                src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780894692/LuxeAesthetic_Dr._Daniel_Headshot_yzmyay.png"
                alt="Dr. Stephanie Daniel, founder of Luxe Aesthetic, Raleigh NC"
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  opacity: 0,
                  animation: 'fadeIn 400ms ease forwards',
                }}
              />
    </div>

            {/* Text */}
            <div>
              <h2 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '36px',
                color: '#2A2420',
                marginBottom: '32px',
              }}>
                Dr. Stephanie Daniel, Founder
              </h2>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B5E57',
                marginBottom: '24px',
              }}>
                Dr. Stephanie Daniel created Luxe Aesthetic because she believed clients deserved something the industry wasn't offering — a practice that takes both the medicine and the experience seriously.
              </p>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B5E57',
                marginBottom: '24px',
              }}>
                Board-certified and Raleigh-based, Dr. Daniel trained at [institution] and has spent the last eight years refining an approach that is equal parts clinical precision and personal attention.
              </p>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B5E57',
                marginBottom: '32px',
              }}>
                She performs every treatment personally. She follows up with every client. And she built Luxe around a single belief: that the relationship between provider and client is what makes the results last.
              </p>

              <Button variant="secondary" onClick={() => navigate('/services')}>
                VIEW SERVICES
              </Button>
    </div>

            {/* Desktop: Photo Second */}
            <div className="hidden lg:block">
              <ImageWithFallback
                src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780894692/LuxeAesthetic_Dr._Daniel_Headshot_yzmyay.png"
                alt="Dr. Stephanie Daniel, founder of Luxe Aesthetic, Raleigh NC"
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  opacity: 0,
                  animation: 'fadeIn 400ms ease forwards',
                }}
              />
    </div>
    </div>
    </div>

        <style>{`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}</style>
      </section>

      {/* Credentials Block */}
      <section style={{ backgroundColor: '#E8E2D9', padding: '64px 0' }}>
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {/* Credential 1 */}
            <div style={{
              textAlign: 'center',
              padding: '0 24px',
              borderRight: 'none',
            }}
            className="lg:border-r lg:border-[#DDD7D0]">
              <div style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '36px',
                color: '#2A2420',
                marginBottom: '8px',
              }}>
                Board Certified
    </div>
              <div style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#6B5E57',
              }}>
                In aesthetic medicine
    </div>
    </div>

            {/* Credential 2 */}
            <div style={{
              textAlign: 'center',
              padding: '0 24px',
            }}
            className="lg:border-r lg:border-[#DDD7D0]">
              <div style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '36px',
                color: '#2A2420',
                marginBottom: '8px',
              }}>
                8+ Years
    </div>
              <div style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#6B5E57',
              }}>
                Practicing in Raleigh
    </div>
    </div>

            {/* Credential 3 */}
            <div style={{
              textAlign: 'center',
              padding: '0 24px',
            }}
            className="lg:border-r lg:border-[#DDD7D0]">
              <div style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '36px',
                color: '#2A2420',
                marginBottom: '8px',
              }}>
                Member
    </div>
              <div style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#6B5E57',
              }}>
                American Med Spa Association
    </div>
    </div>

            {/* Credential 4 */}
            <div style={{
              textAlign: 'center',
              padding: '0 24px',
            }}>
              <div style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '36px',
                color: '#2A2420',
                marginBottom: '8px',
              }}>
                Certified
    </div>
              <div style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '14px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: '#6B5E57',
              }}>
                Advanced injection techniques
    </div>
    </div>
    </div>
    </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '96px 0' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 12px' }}>
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '36px',
            color: '#2A2420',
            marginBottom: '48px',
            textAlign: 'center',
          }}>
            How Dr. Daniel practices
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {/* Statement 1 */}
            <div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '16px',
              }}>
                The consultation is the treatment.
              </h3>
              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Most clients come in having already decided they want something. Dr. Daniel's job in the consultation is to understand what they actually need — which is often different, and sometimes less.
              </p>
    </div>

            {/* Statement 2 */}
            <div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '16px',
              }}>
                Results that don't announce themselves.
              </h3>
              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                The goal is never transformation. It's the feeling of looking like yourself on a good day, consistently.
              </p>
    </div>

            {/* Statement 3 */}
            <div>
              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '16px',
              }}>
                A practice, not a transaction.
              </h3>
              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Clients who come to Luxe aren't just booking appointments. They're building a relationship with a provider who knows their face, their history, and their goals.
              </p>
    </div>
    </div>
    </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: '#F3EFE8', padding: '80px 0' }}>
        <div className="max-w-screen-lg mx-auto px-12 text-center">
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '36px',
            color: '#2A2420',
            marginBottom: '32px',
          }}>
            Ready to meet Dr. Daniel?
          </h2>

          <Button variant="primary" onClick={() => navigate('/book')}>
            BOOK WITH DR. DANIEL
          </Button>
    </div>
      </section>

      {/* Footer Placeholder */}
      <Footer />
      <MobileStickyBookBar />
    </div>
  );
}
