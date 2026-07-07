import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { faqClusters } from '../data/faqData';

export function FAQPage() {
  const navigate = useNavigate();
  // State format: "clusterIndex-faqIndex" or null
  const [openFaq, setOpenFaq] = useState<string | null>('0-0'); // Cluster 1 Question 1 open by default

  const clusters = faqClusters;

  const toggleFaq = (clusterIndex: number, faqIndex: number) => {
    const key = `${clusterIndex}-${faqIndex}`;
    setOpenFaq(openFaq === key ? null : key);
  };

  return (
    <div style={{ backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      <Navigation currentPage="FAQ" />

      {/* Page Header */}
      <section style={{ backgroundColor: '#F3EFE8', padding: '80px 0' }}>
        <div className="max-w-screen-xl mx-auto px-12 text-center">
          <h1 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '48px',
            color: '#2A2420',
          }}>
            Questions we hear all the time.
          </h1>
    </div>
      </section>

      {/* FAQ Accordion */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '96px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 12px' }}>
          {clusters.map((cluster, clusterIndex) => (
            <div key={clusterIndex} style={{ marginBottom: clusterIndex < clusters.length - 1 ? '64px' : '0' }}>
              {/* Cluster Heading */}
              <h2 style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                fontSize: '24px',
                color: '#2A2420',
                marginBottom: '24px',
              }}>
                {cluster.heading}
              </h2>

              {/* FAQ Items */}
              <div>
                {cluster.faqs.map((faq, faqIndex) => {
                  const key = `${clusterIndex}-${faqIndex}`;
                  const isOpen = openFaq === key;

                  return (
                    <div
                      key={faqIndex}
                      style={{
                        borderBottom: '1px solid ' + (isOpen ? '#D4A5A0' : '#DDD7D0'),
                      }}
                    >
                      {/* Question Button */}
                      <button
                        onClick={() => toggleFaq(clusterIndex, faqIndex)}
                        style={{
                          width: '100%',
                          padding: '24px 0',
                          backgroundColor: isOpen ? '#F3EFE8' : '#FAF8F4',
                          border: 'none',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'background-color 150ms ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#F3EFE8';
                        }}
                        onMouseLeave={(e) => {
                          if (!isOpen) {
                            e.currentTarget.style.backgroundColor = '#FAF8F4';
                          }
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.outline = '2px solid #D4A5A0';
                          e.currentTarget.style.outlineOffset = '2px';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.outline = 'none';
                        }}
                      >
                        <span style={{
                          fontFamily: 'Jost',
                          fontWeight: 300,
                          fontSize: '16px',
                          color: '#2A2420',
                          paddingRight: '24px',
                        }}>
                          {faq.question}
                        </span>

                        {/* Plus/X Icon */}
                        <div style={{
                          width: '24px',
                          height: '24px',
                          position: 'relative',
                          flexShrink: 0,
                        }}>
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) rotate(${isOpen ? '45deg' : '0deg'})`,
                            transition: 'transform 200ms ease',
                          }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                              {/* Horizontal line */}
                              <line x1="6" y1="12" x2="18" y2="12" stroke="#D4A5A0" strokeWidth="2" strokeLinecap="round" />
                              {/* Vertical line */}
                              <line x1="12" y1="6" x2="12" y2="18" stroke="#D4A5A0" strokeWidth="2" strokeLinecap="round" />
                            </svg>
    </div>
    </div>
                      </button>

                      {/* Answer Panel */}
                      <div
                        style={{
                          maxHeight: isOpen ? '500px' : '0',
                          overflow: 'hidden',
                          transition: isOpen ? 'max-height 500ms ease-out' : 'max-height 300ms ease-in',
                        }}
                      >
                        <div style={{
                          backgroundColor: '#F3EFE8',
                          padding: '24px 32px',
                        }}>
                          <p style={{
                            fontFamily: 'Jost',
                            fontWeight: 300,
                            fontSize: '15px',
                            lineHeight: 1.75,
                            color: '#6B5E57',
                            margin: 0,
                          }}>
                            {faq.answer}
                          </p>
    </div>
    </div>
    </div>
                  );
                })}
    </div>
    </div>
          ))}
    </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ backgroundColor: '#F3EFE8', padding: '64px 0' }}>
        <div className="max-w-screen-lg mx-auto px-12 text-center">
          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '32px',
            color: '#2A2420',
            marginBottom: '32px',
          }}>
            Still have questions?
          </h2>

          <Button variant="primary" onClick={() => navigate('/book')}>
            BOOK A CONSULTATION
          </Button>
    </div>
      </section>

      {/* Footer Placeholder */}
      <Footer />
      <MobileStickyBookBar />
    </div>
  );
}
