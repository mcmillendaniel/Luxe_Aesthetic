import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCluster {
  heading: string;
  faqs: FAQ[];
}

export function FAQPage() {
  const navigate = useNavigate();
  // State format: "clusterIndex-faqIndex" or null
  const [openFaq, setOpenFaq] = useState<string | null>('0-0'); // Cluster 1 Question 1 open by default

  const clusters: FAQCluster[] = [
    {
      heading: "If you've never had Botox",
      faqs: [
        {
          question: "I've never had Botox. Where do I even start?",
          answer: "The best place to start is a consultation. Dr. Daniel will walk you through what's possible, what to expect, and whether it's right for you — no pressure, no commitment. Most first-time clients leave wishing they'd come sooner.",
        },
        {
          question: "Will it look obvious? I don't want to look different.",
          answer: "The goal is never transformation — it's refinement. Dr. Daniel's approach is conservative by design. The results should make people think you look well-rested, not like you've had something done.",
        },
        {
          question: "Does it hurt?",
          answer: "Most clients describe it as a quick pinch. We use the smallest needles available and take our time. For clients who are nervous, we can apply a topical numbing cream.",
        },
        {
          question: "What if I don't like the results?",
          answer: "Botox is temporary — results typically last 3 to 4 months. If something isn't quite right, we'll address it. Dr. Daniel follows up with every new client to make sure you're happy with how things settle.",
        },
      ],
    },
    {
      heading: "About Dr. Daniel and Luxe",
      faqs: [
        {
          question: "Who performs my treatment?",
          answer: "Dr. Stephanie Daniel performs every treatment personally. We don't have rotating staff or nurses performing injections. When you come to Luxe, you see Dr. Daniel.",
        },
        {
          question: "What products do you use?",
          answer: "We use FDA-approved neurotoxins and fillers from the leading manufacturers. Dr. Daniel will tell you exactly what she's using and why it's right for your goals.",
        },
        {
          question: "How is Luxe different from a chain medspa?",
          answer: "At a chain, you may see a different provider every visit. At Luxe, Dr. Daniel knows your face, your history, and your goals. The relationship is the difference.",
        },
      ],
    },
    {
      heading: "Booking and preparation",
      faqs: [
        {
          question: "How far in advance should I book?",
          answer: "For a standard consultation, we can usually see you within 1 to 2 weeks. Members with the Reserve plan have same-week availability guaranteed.",
        },
        {
          question: "How do I prepare for my appointment?",
          answer: "Avoid blood-thinning medications (aspirin, ibuprofen) for 3 days before your appointment if possible. Arrive with clean skin, no heavy makeup. That's it — we handle the rest.",
        },
        {
          question: "Can I have a consultation before I commit to anything?",
          answer: "Absolutely. That's what the consultation is for. There is no pressure to book a treatment at your first visit.",
        },
      ],
    },
    {
      heading: "Medical weight management",
      faqs: [
        {
          question: "Is this right for me?",
          answer: "The program starts with a medical consultation where Dr. Daniel reviews your health history, goals, and whether you're a good candidate. Not everyone is — and we'll be honest about that.",
        },
        {
          question: "What does the program involve?",
          answer: "An initial medical consultation, a personalized protocol, regular check-ins, and ongoing monitoring. This is a relationship, not a prescription.",
        },
        {
          question: "Is this just an Ozempic prescription?",
          answer: "The medication is one tool. The relationship is what makes it work.",
        },
      ],
    },
  ];

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
