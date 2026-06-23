import { useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function FillerServicePage() {
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
                FILLER
              </span>
    </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              fontSize: '48px',
              color: '#2A2420',
              marginBottom: '24px',
            }}>
              Restore what time has quietly shifted.
            </h1>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.75,
              color: '#6B5E57',
              marginBottom: '32px',
            }}>
              Volume and structure, balanced with intention.
            </p>

            <Button variant="primary" onClick={() => navigate('/book')}>
              BOOK A FILLER CONSULTATION
            </Button>
    </div>

          {/* Right: Image */}
          <div>
            <ImageWithFallback
              src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891274/LuxeAesthetic_Filler_Header_ehxbqa.png"
              alt="Filler treatment"
              style={{
                width: '100%',
                aspectRatio: '4/3',
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
              Dr. Daniel approaches filler treatment as facial architecture—not just filling lines, but understanding the structural changes that happen over time. During your consultation, she'll assess bone resorption, fat pad descent, and ligament laxity to create a treatment plan that addresses the underlying cause, not just the visible effect.
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#6B5E57',
              marginBottom: '24px',
            }}>
              Treatment is performed with premium hyaluronic acid fillers, chosen specifically for the area being treated. Dr. Daniel uses advanced injection techniques including microdroplet placement and cannula methods to minimize bruising and achieve natural-looking results. Most sessions take 30 to 45 minutes.
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#6B5E57',
            }}>
              You'll see immediate volume improvement, with final results settling over the next two weeks as any swelling subsides. Results typically last 12 to 18 months depending on the product used and the treatment area. Dr. Daniel will create a maintenance plan tailored to your goals and timeline.
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
                BOOK A FILLER CONSULTATION
              </Button>
    </div>
    </div>
    </div>
      </section>

      {/* Section 4: First-Timer Reassurance Block */}
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
            Never had filler before?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Point 1 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#D4A5A0',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEFCF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
    </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '12px',
              }}>
                It looks natural.
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Strategic placement restores structure without looking overdone. The goal is to refresh, not to change who you are.
              </p>
    </div>

            {/* Point 2 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#D4A5A0',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEFCF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
    </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '12px',
              }}>
                Results are immediate.
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                You'll see volume restoration right away. Final results settle over two weeks as any minor swelling resolves.
              </p>
    </div>

            {/* Point 3 */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#D4A5A0',
                margin: '0 auto 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FEFCF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M2 12h20" />
                </svg>
    </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '12px',
              }}>
                It's reversible.
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Hyaluronic acid fillers can be dissolved if needed. This safety net allows for conservative, buildable treatment.
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
                  src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780890859/LuxeAesthetic_Filler_Before_Image_jfrvbf.png"
                  alt="Before filler treatment"
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '2px' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'Jost', fontWeight: 400, fontSize: '11px', letterSpacing: '0.08em', color: '#A89E97', marginBottom: '8px' }}>AFTER</div>
                <ImageWithFallback
                  src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780890859/LuxeAesthetic_Filler_After_Image_fd4bix.png"
                  alt="After filler treatment"
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
              "Dr. Daniel explained exactly what would restore structure without looking overdone. The results are subtle and beautiful."
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '13px',
              color: '#6B5E57',
            }}>
              — Jennifer L., Filler client
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
              imageUrl="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891274/LuxeAesthetic_Body_Contouring_Header_d4cjs2.png"
              serviceName="Body Contouring"
              descriptor="Non-invasive fat reduction and skin tightening for precise body sculpting."
              tileHeadline="Body Sculpting"
              ctaLabel="LEARN MORE"
              href="/services/body-contouring"
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
            BOOK A FILLER CONSULTATION
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
