import { useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BodyContouringServicePage() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      <Navigation currentPage="Services" />

      {/* Section 2: Service Hero */}
      <section style={{ backgroundColor: '#F3EFE8', padding: '80px 0' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-screen-xl mx-auto px-12">
          {/* Left: Text */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span style={{
                fontFamily: 'Jost',
                fontWeight: 400,
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#A89E97',
              }}>
                BODY CONTOURING
              </span>
    </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              fontSize: '48px',
              color: '#2A2420',
              marginBottom: '24px',
            }}>
              Results that outlast the treatment.
            </h1>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.75,
              color: '#6B5E57',
              marginBottom: '32px',
            }}>
              Non-invasive fat reduction and skin tightening for precise body sculpting. Dr. Daniel uses advanced technology to target stubborn areas that resist diet and exercise.
            </p>

            <Button variant="primary" onClick={() => navigate('/book')}>
              BOOK A CONSULTATION
            </Button>
    </div>

          {/* Right: Image */}
          <div>
            <ImageWithFallback
              src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891274/LuxeAesthetic_Body_Contouring_Header_d4cjs2.png"
              alt="Body contouring treatment"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                borderRadius: '4px',
              }}
            />
    </div>
    </div>
      </section>

      {/* Section 3: Service Detail Content */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '96px 0' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-screen-xl mx-auto px-12">
          {/* Left: Main Content (65%) */}
          <div className="lg:col-span-8">
            <h2 style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              fontSize: '36px',
              color: '#2A2420',
              marginBottom: '24px',
            }}>
              What to expect
            </h2>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#6B5E57',
              marginBottom: '24px',
            }}>
              Body contouring addresses localized fat deposits and skin laxity through non-surgical methods. During your consultation, Dr. Daniel will assess the areas you'd like to target, discuss realistic outcomes, and recommend the most effective treatment protocol for your body type and goals.
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#6B5E57',
              marginBottom: '24px',
            }}>
              Treatment sessions typically last 45 to 60 minutes depending on the area being treated. You may experience mild warmth or cooling sensations during the procedure, but most clients find it comfortable enough to read or relax. There's no downtime—you can return to normal activities immediately.
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#6B5E57',
            }}>
              Results develop gradually as your body naturally processes the treated fat cells over 8 to 12 weeks. Most clients see optimal results after 2 to 3 treatment sessions spaced 4 to 6 weeks apart. Once fat cells are eliminated, they don't return—making results long-lasting when paired with a stable weight.
            </p>
    </div>

          {/* Right: Sidebar (35%) */}
          <div className="lg:col-span-4">
            <div style={{
              backgroundColor: '#F3EFE8',
              border: '1px solid #DDD7D0',
              borderRadius: '2px',
              padding: '32px',
            }}>
              <ImageWithFallback
                src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780894692/LuxeAesthetic_Dr._Daniel_Headshot_yzmyay.png"
                alt="Dr. Stephanie Daniel"
                style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginBottom: '24px',
                }}
              />

              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '8px',
              }}>
                Dr. Stephanie Daniel
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: 1.75,
                color: '#6B5E57',
                marginBottom: '24px',
              }}>
                Board-certified physician specializing in aesthetic medicine. Every treatment performed personally.
              </p>

              <Button variant="primary" onClick={() => navigate('/book')}>
                BOOK A CONSULTATION
              </Button>
    </div>
    </div>
    </div>
      </section>

      {/* Section 4: How It Works */}
      <section style={{ backgroundColor: '#E8E2D9', padding: '64px 0' }}>
        <div className="max-w-screen-xl mx-auto px-12">
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '32px',
            color: '#2A2420',
            marginBottom: '48px',
            textAlign: 'center',
          }}>
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#D4A5A0',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '28px',
                color: '#FEFCF9',
              }}>
                1
    </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '12px',
              }}>
                Target
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Advanced technology is applied to the treatment area, targeting fat cells beneath the skin without affecting surrounding tissue.
              </p>
    </div>

            {/* Step 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#D4A5A0',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '28px',
                color: '#FEFCF9',
              }}>
                2
    </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '12px',
              }}>
                Eliminate
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Treated fat cells are crystallized and marked for elimination. Your body's natural metabolic processes take over from here.
              </p>
    </div>

            {/* Step 3 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: '#D4A5A0',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '28px',
                color: '#FEFCF9',
              }}>
                3
    </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '12px',
              }}>
                Transform
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Over 8 to 12 weeks, your body naturally flushes out destroyed fat cells. Results continue to improve as the area contours and tightens.
              </p>
    </div>
    </div>
    </div>
      </section>

      {/* Section 5: Before/After */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '96px 0' }}>
        <div className="max-w-screen-xl mx-auto px-12">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div style={{ fontFamily: 'Jost', fontWeight: 400, fontSize: '11px', letterSpacing: '0.08em', color: '#A89E97', marginBottom: '8px' }}>BEFORE</div>
                <ImageWithFallback
                  src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780896902/Final_BC_Before_Image_xyhpij.png"
                  alt="Before body contouring treatment"
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '2px' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'Jost', fontWeight: 400, fontSize: '11px', letterSpacing: '0.08em', color: '#A89E97', marginBottom: '8px' }}>AFTER</div>
                <ImageWithFallback
                  src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780896901/Final_BC_After_Image_zlb1ec.png"
                  alt="After body contouring treatment"
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '2px' }}
                />
              </div>
            </div>
            <p style={{ fontFamily: 'Jost', fontWeight: 300, fontSize: '13px', color: '#A89E97', textAlign: 'center', marginTop: '16px' }}>
              Results shown with patient consent. Individual results may vary.
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button variant="secondary" onClick={() => navigate('/results')}>SEE ALL RESULTS</Button>
          </div>
        </div>
      </section>

      {/* Section 6: Named Testimonial */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '64px 0' }}>
        <div className="max-w-screen-lg mx-auto px-12">
          <div style={{
            backgroundColor: '#F3EFE8',
            border: '1px solid #DDD7D0',
            borderRadius: '2px',
            padding: '48px',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: '20px',
              lineHeight: 1.6,
              color: '#2A2420',
              marginBottom: '16px',
            }}>
              "I finally got rid of the stubborn areas that wouldn't budge no matter how much I worked out. The results look completely natural."
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '13px',
              color: '#6B5E57',
            }}>
              — Rachel K., Body Contouring client
            </p>
    </div>
    </div>
      </section>

      {/* Section 7: Related Services */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '96px 0' }}>
        <div className="max-w-screen-xl mx-auto px-12">
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '36px',
            color: '#2A2420',
            marginBottom: '48px',
            textAlign: 'center',
          }}>
            You might also be interested in
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl mx-auto">
            <ServiceCard
              imageUrl="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891274/Botox_Header_tfszoi.png"
              serviceName="Botox"
              descriptor="Precision neurotoxin treatments for natural-looking smoothing and prevention."
              tileHeadline="Injectable Neurotoxin"
              ctaLabel="LEARN MORE"
              href="/services/botox"
            />
            <ServiceCard
              imageUrl="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891275/LuxeAesthetic_GLP-1_Header_gcdm5w.png"
              serviceName="Medical Weight Management"
              descriptor="Physician-supervised GLP-1 program with comprehensive metabolic support."
              tileHeadline="GLP-1 Program"
              ctaLabel="LEARN MORE"
              href="/services/medical-weight-management"
            />
    </div>
    </div>
      </section>

      {/* Section 8: Final CTA Block */}
      <section style={{ backgroundColor: '#F3EFE8', padding: '96px 0' }}>
        <div className="max-w-screen-lg mx-auto px-12 text-center">
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '36px',
            color: '#2A2420',
            marginBottom: '32px',
          }}>
            Ready to book?
          </h2>

          <Button variant="primary" onClick={() => navigate('/book')}>
            BOOK A CONSULTATION
          </Button>

          <p style={{
            fontFamily: 'Jost',
            fontWeight: 300,
            fontSize: '14px',
            color: '#A89E97',
            marginTop: '24px',
          }}>
            Prefer to text? Reach us at [number].
          </p>
    </div>
      </section>

      {/* Section 9: Footer Placeholder */}
      <Footer />
      <MobileStickyBookBar />
    </div>
  );
}
