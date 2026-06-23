import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ServiceCard } from '../components/ServiceCard';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';

export function ServicesPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();
  }, []);

 const services = [
  {
    imageUrl: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891274/Botox_Header_tfszoi.png',
    serviceName: 'Botox',
    descriptor: 'Precision neurotoxin treatments for natural-looking smoothing and prevention.',
    tileHeadline: 'Injectable Neurotoxin',
    ctaLabel: 'LEARN MORE',
    href: '/services/botox',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891274/LuxeAesthetic_Filler_Header_ehxbqa.png',
    serviceName: 'Filler',
    descriptor: 'Strategic volume restoration and contouring with premium hyaluronic acid.',
    tileHeadline: 'Dermal Filler',
    ctaLabel: 'LEARN MORE',
    href: '/services/filler',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891274/LuxeAesthetic_Body_Contouring_Header_d4cjs2.png',
    serviceName: 'Body Contouring',
    descriptor: 'Non-invasive fat reduction and skin tightening for precise body sculpting.',
    tileHeadline: 'Body Sculpting',
    ctaLabel: 'LEARN MORE',
    href: '/services/body-contouring',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891275/LuxeAesthetic_GLP-1_Header_gcdm5w.png',
    serviceName: 'Medical Weight Management',
    descriptor: 'Physician-supervised GLP-1 program with comprehensive metabolic support.',
    tileHeadline: 'GLP-1 Program',
    ctaLabel: 'LEARN MORE',
    href: '/services/glp1',
  },
  {
    imageUrl: 'https://res.cloudinary.com/dq2z2nf6w/image/upload/v1780891275/LuxeAesthetic_Membership_Card_uli4pw.png',
    serviceName: 'Memberships',
    descriptor: 'Curated treatment plans with exclusive pricing and priority access.',
    tileHeadline: 'Membership Programs',
    ctaLabel: 'VIEW OPTIONS',
    href: '/memberships',
  },
];
  return (
    <div style={{ backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      <Navigation currentPage="Services" />

      {/* Page Header Section */}
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
              OUR SERVICES
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '48px',
            color: '#2A2420',
            marginBottom: '16px',
          }}>
            Every service. One standard of care.
          </h1>

          <p style={{
            fontFamily: 'Jost',
            fontWeight: 300,
            fontSize: '17px',
            color: '#6B5E57',
          }}>
            Dr. Daniel performs every treatment personally.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section style={{ backgroundColor: '#FAF8F4', padding: '96px 0' }}>
        <div
          ref={cardsRef}
          style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 48px' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-x-20 lg:gap-y-12">
            {/* First Row - 3 cards spanning 2 columns each */}
            {services.slice(0, 3).map((service, index) => (
              <div
                key={service.serviceName}
                className="lg:col-span-2"
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 600ms ease-out ${index * 80}ms, transform 600ms ease-out ${index * 80}ms`,
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}

            {/* Second Row - 2 cards centered, each spanning 2 columns with 1 column offset */}
            <div className="lg:col-span-1"></div>
            {services.slice(3).map((service, index) => (
              <div
                key={service.serviceName}
                className="lg:col-span-2"
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 600ms ease-out ${(index + 3) * 80}ms, transform 600ms ease-out ${(index + 3) * 80}ms`,
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
            <div className="lg:col-span-1"></div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileStickyBookBar />
    </div>
  );
}
