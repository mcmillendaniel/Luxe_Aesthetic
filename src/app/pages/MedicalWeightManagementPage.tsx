import { useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function MedicalWeightManagementPage() {
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
                MEDICAL WEIGHT MANAGEMENT
              </span>
    </div>

            <h1 style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              fontSize: '48px',
              color: '#2A2420',
              marginBottom: '24px',
            }}>
              Medically supervised. Genuinely transformative.
            </h1>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '17px',
              lineHeight: 1.75,
              color: '#6B5E57',
              marginBottom: '32px',
            }}>
              A physician-guided GLP-1 program with comprehensive metabolic support. Dr. Daniel treats weight management as the medical issue it is—not a willpower problem.
            </p>

            <Button variant="primary" onClick={() => navigate('/book')}>
              SCHEDULE A MEDICAL CONSULTATION
            </Button>
    </div>

          {/* Right: Image */}
          <div>
            <ImageWithFallback
              src="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780893562/LuxeAesthetic_GLP1_Header_Photo_l8w5m1.png"
              alt="Medical weight management consultation"
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
              Your consultation begins with a complete medical assessment. Dr. Daniel will review your health history, current medications, metabolic markers, and weight loss goals. She'll order lab work to establish baseline metrics and determine if GLP-1 therapy is appropriate for you. This isn't a quick prescription—it's a medical evaluation.
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#6B5E57',
              marginBottom: '24px',
            }}>
              If you're a candidate, Dr. Daniel will design a treatment protocol tailored to your body's response. You'll start with a conservative dose, with adjustments made based on your tolerance, side effects, and progress. Monthly check-ins track your weight, metabolic health, and overall well-being. This program includes nutritional guidance, lifestyle coaching, and ongoing medical oversight.
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.75,
              color: '#6B5E57',
            }}>
              Most clients see steady, sustainable weight loss over several months. The medication works by regulating appetite and blood sugar, making it easier to adopt healthier eating patterns. Dr. Daniel's goal isn't just weight loss—it's metabolic improvement and long-term health. You'll have a physician guiding you through every phase of treatment.
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
                SCHEDULE A MEDICAL CONSULTATION
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
                Medical Evaluation
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Comprehensive health assessment, lab work, and candidacy review. Dr. Daniel determines if GLP-1 therapy is appropriate for you.
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
                Personalized Protocol
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Custom dosing plan with ongoing adjustments. Monthly check-ins track progress, manage side effects, and optimize results.
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
                Sustained Results
              </h3>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}>
                Gradual, sustainable weight loss with metabolic improvement. Nutritional support and lifestyle guidance included throughout.
              </p>
    </div>
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
              "Dr. Daniel treated this like the medical issue it is. For the first time, I had a physician who understood that willpower wasn't the problem."
            </p>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '13px',
              color: '#6B5E57',
            }}>
              — Michelle T., Weight Management client
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
              imageUrl="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891274/LuxeAesthetic_Body_Contouring_Header_d4cjs2.png"
              serviceName="Body Contouring"
              descriptor="Non-invasive fat reduction and skin tightening for precise body sculpting."
              tileHeadline="Body Sculpting"
              ctaLabel="LEARN MORE"
              href="/services/body-contouring"
            />
            <ServiceCard
              imageUrl="https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891275/LuxeAesthetic_Membership_Card_uli4pw.png"
              serviceName="Memberships"
              descriptor="Curated treatment plans with exclusive pricing and priority access."
              tileHeadline="Membership Programs"
              ctaLabel="VIEW OPTIONS"
              href="/memberships"
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
            SCHEDULE A MEDICAL CONSULTATION
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
