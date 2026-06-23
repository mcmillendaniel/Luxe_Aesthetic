import { useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BotoxServicePage() {
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
                BOTOX & NEUROTOXINS
              </span>
    </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              fontSize: '48px',
              color: '#2A2420',
              marginBottom: '24px',
            }}>
              Soften. Refresh. Still you.
            </h1>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.75,
              color: '#6B5E57',
              marginBottom: '32px',
            }}>
              Natural movement, expertly placed. Dr. Daniel's approach to neurotoxin treatment is precise, conservative, and built around you — not a formula.
            </p>

            <Button variant="primary" onClick={() => navigate('/book')}>
              BOOK A BOTOX CONSULTATION
            </Button>
    </div>

          {/* Right: Image */}
          <div>
            <ImageWithFallback
              src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891274/Botox_Header_tfszoi.png"
              alt="Botox treatment"
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
              Your Botox consultation begins with a conversation. Dr. Daniel will ask about your concerns, your goals, and what you've noticed about how your face moves. She'll examine the muscles involved and explain exactly where treatment would—and wouldn't—make sense for you.
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#6B5E57',
              marginBottom: '24px',
            }}>
              Treatment itself is quick—usually 10 to 15 minutes. Dr. Daniel uses a precise injection technique designed to minimize discomfort and maximize natural-looking results. You'll see initial softening within a few days, with full results appearing over the next two weeks.
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#6B5E57',
            }}>
              Results typically last three to four months. Many clients return on a regular schedule to maintain their results, while others prefer to come in only when they notice lines returning. Either approach works—this is about what feels right for you.
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
                BOOK A BOTOX CONSULTATION
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
            Never had Botox before?
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
                Dr. Daniel's technique preserves your ability to express yourself. You'll still look like you—just refreshed.
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
                It's quick.
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Most treatments take 10 to 15 minutes. No downtime, no recovery. You can return to your day immediately.
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
                You're in control.
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Dr. Daniel will never recommend more than you need. The goal is subtle improvement, not dramatic change.
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
                  src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780890859/LuxeAesthetic_Botox_Before_Image_a2ru9c.png"
                  alt="Before Botox treatment"
                  style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '2px' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'Jost', fontWeight: 400, fontSize: '11px', letterSpacing: '0.08em', color: '#A89E97', marginBottom: '8px' }}>AFTER</div>
                <ImageWithFallback
                  src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780890859/LuxeAesthetic_Botox_After_Image_rpbs0t.png"
                  alt="After Botox treatment"
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
              "Dr. Daniel was so thorough in our consultation. I felt completely comfortable."
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '13px',
              color: '#6B5E57',
            }}>
              — Sarah M., Botox client
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
              imageUrl="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891274/LuxeAesthetic_Filler_Header_ehxbqa.png"
              serviceName="Filler"
              descriptor="Strategic volume restoration and contouring with premium hyaluronic acid."
              tileHeadline="Dermal Filler"
              ctaLabel="LEARN MORE"
              href="/services/filler"
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
            BOOK A BOTOX CONSULTATION
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
