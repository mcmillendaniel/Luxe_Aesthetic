import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

export function MembershipsPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a long-term commitment?",
      answer: "No. All plans are month-to-month. You can pause or cancel with 30 days notice.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, anytime. Changes take effect on your next billing cycle.",
    },
    {
      question: "What if I want to try it first?",
      answer: "Your first consultation is always a conversation, not a commitment. Book one and let's talk about what would work best for you.",
    },
  ];

  return (
    <div style={{ backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      <Navigation currentPage="Memberships" />

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
              MEMBERSHIPS
            </span>
    </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '48px',
            color: '#2A2420',
            marginBottom: '16px',
          }}>
            Make it part of how you take care of yourself.
          </h1>

          <p style={{
            fontFamily: 'Jost',
            fontWeight: 300,
            fontSize: '17px',
            color: '#6B5E57',
          }}>
            Three plans. One practice. Ongoing results.
          </p>
    </div>
      </section>

      {/* Membership Tiers Section */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '96px 0' }}>
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Tier 1 - Refresh */}
            <div style={{
              backgroundColor: '#F3EFE8',
              border: '1px solid #DDD7D0',
              borderRadius: '2px',
              padding: '40px 32px',
            }}>
              <div style={{
                fontFamily: 'Jost',
                fontWeight: 400,
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#A89E97',
                marginBottom: '8px',
              }}>
                REFRESH
    </div>

              <h2 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '28px',
                color: '#2A2420',
                marginBottom: '12px',
              }}>
                The Refresh Plan
              </h2>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
                marginBottom: '32px',
              }}>
                For clients maintaining one primary treatment.
              </p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginBottom: '32px',
              }}>
                {[
                  'One primary treatment per month',
                  'Priority booking',
                  '10% off all additional services',
                  'No long-term commitment',
                ].map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      fontFamily: 'Jost',
                      fontWeight: 300,
                      fontSize: '15px',
                      lineHeight: 1.75,
                      color: '#6B5E57',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                    }}
                  >
                    <span style={{ color: '#D4A5A0', flexShrink: 0 }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="secondary" onClick={() => navigate('/book')}>
                GET STARTED
              </Button>
    </div>

            {/* Tier 2 - Radiance (Featured) */}
            <div style={{ position: 'relative', marginTop: '-32px' }}>
              <div style={{
                backgroundColor: '#F3EFE8',
                border: '1px solid #D4A5A0',
                borderRadius: '2px',
                padding: '40px 32px',
                position: 'relative',
              }}>
                {/* Most Popular Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#EDD5D2',
                  color: '#7A4D48',
                  fontFamily: 'Jost',
                  fontWeight: 400,
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  padding: '4px 12px',
                  borderRadius: '2px',
                }}>
                  MOST POPULAR
    </div>
                <div style={{
                  fontFamily: 'Jost',
                  fontWeight: 400,
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: '#A89E97',
                  marginBottom: '8px',
                }}>
                  RADIANCE
    </div>

                <h2 style={{
                  fontFamily: 'Cormorant Garamond',
                  fontWeight: 400,
                  fontSize: '28px',
                  color: '#2A2420',
                  marginBottom: '12px',
                }}>
                  The Radiance Plan
                </h2>

                <p style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  fontSize: '15px',
                  lineHeight: 1.75,
                  color: '#6B5E57',
                  marginBottom: '32px',
                }}>
                  For clients combining 2–3 services quarterly.
                </p>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: '32px',
                }}>
                  {[
                    'Two treatments per month',
                    'Quarterly filler or body contouring session',
                    '15% off all additional services',
                    'Dedicated scheduling contact',
                    'Exclusive member events',
                  ].map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: 'Jost',
                        fontWeight: 300,
                        fontSize: '15px',
                        lineHeight: 1.75,
                        color: '#6B5E57',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                      }}
                    >
                      <span style={{ color: '#D4A5A0', flexShrink: 0 }}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="primary" onClick={() => navigate('/book')}>
                  GET STARTED
                </Button>
    </div>
    </div>

            {/* Tier 3 - Reserve */}
            <div style={{
              backgroundColor: '#F3EFE8',
              border: '1px solid #DDD7D0',
              borderRadius: '2px',
              padding: '40px 32px',
            }}>
              <div style={{
                fontFamily: 'Jost',
                fontWeight: 400,
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#A89E97',
                marginBottom: '8px',
              }}>
                RESERVE
    </div>

              <h2 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '28px',
                color: '#2A2420',
                marginBottom: '12px',
              }}>
                The Reserve Plan
              </h2>

              <p style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.75,
                color: '#6B5E57',
                marginBottom: '32px',
              }}>
                Full access, priority booking, exclusive pricing.
              </p>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginBottom: '32px',
              }}>
                {[
                  'Unlimited treatments',
                  'Annual full-face assessment',
                  '20% off all services',
                  'Same-week availability guaranteed',
                  'GLP-1 program included',
                  'Annual gift',
                ].map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      fontFamily: 'Jost',
                      fontWeight: 300,
                      fontSize: '15px',
                      lineHeight: 1.75,
                      color: '#6B5E57',
                      marginBottom: '12px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                    }}
                  >
                    <span style={{ color: '#D4A5A0', flexShrink: 0 }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="ghost" onClick={() => navigate('/book')}>
                GET STARTED
              </Button>
    </div>
    </div>
    </div>
      </section>

      {/* FAQ Section */}
      <section style={{ backgroundColor: '#F3EFE8', padding: '80px 0' }}>
        <div className="max-w-screen-lg mx-auto px-12">
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '32px',
            color: '#2A2420',
            marginBottom: '48px',
            textAlign: 'center',
          }}>
            Common questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FAF8F4',
                  border: '1px solid #DDD7D0',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '24px 32px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = '2px solid #D4A5A0';
                    e.currentTarget.style.outlineOffset = '-2px';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = 'none';
                  }}
                >
                  <span style={{
                    fontFamily: 'Jost',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#2A2420',
                  }}>
                    {faq.question}
                  </span>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#6B5E57"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease',
                      flexShrink: 0,
                      marginLeft: '16px',
                    }}
                  >
                    <polyline points="6,8 10,12 14,8" />
                  </svg>
                </button>

                <div
                  style={{
                    maxHeight: openFaq === index ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 300ms ease',
                  }}
                >
                  <div style={{ padding: '0 32px 24px' }}>
                    <p style={{
                      fontFamily: 'Jost',
                      fontWeight: 300,
                      fontSize: '15px',
                      lineHeight: 1.75,
                      color: '#6B5E57',
                    }}>
                      {faq.answer}
                    </p>
    </div>
    </div>
    </div>
            ))}
    </div>
    </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '64px 0' }}>
        <div className="max-w-screen-lg mx-auto px-12 text-center">
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '36px',
            color: '#2A2420',
            marginBottom: '32px',
          }}>
            Ready to get started?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" onClick={() => navigate('/book')}>
              GET STARTED
            </Button>
            <Button variant="secondary" onClick={() => navigate('/book')}>
              BOOK A CONSULTATION
            </Button>
    </div>
    </div>
      </section>

      {/* Footer Placeholder */}
      <Footer />
      <MobileStickyBookBar />
    </div>
  );
}
