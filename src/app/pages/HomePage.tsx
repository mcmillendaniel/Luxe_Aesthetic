import { HeroSection } from '../components/HeroSection';
import { ServicesTeaserSection } from '../components/ServicesTeaserSection';
import { ResultsProofSection } from '../components/ResultsProofSection';
import { CredibilityBarSection } from '../components/CredibilityBarSection';
import { FeaturedProviderSection } from '../components/FeaturedProviderSection';
import { MembershipsTeaserSection } from '../components/MembershipsTeaserSection';
import { FinalBookingCTASection } from '../components/FinalBookingCTASection';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { MobileStickyBookBar } from '../components/MobileStickyBookBar';
import useScrollReveal from '../hooks/useScrollReveal';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
}

function ScrollRevealSection({ children }: ScrollRevealSectionProps) {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <div
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 600ms ease-out, transform 600ms ease-out',
      }}
    >
      {children}
    </div>
  );
}

export function HomePage() {
  return (
    <div className="pb-16 md:pb-0" style={{ backgroundColor: '#FAF8F4' }}>
      <Navigation currentPage="Home" />

      {/* Beat 1 - Hero (no scroll reveal animation) */}
      <HeroSection />

      {/* Beat 2 - Services Teaser (has internal scroll reveal) */}
      <ServicesTeaserSection />

      {/* Beat 3 - Results Proof Strip (has internal scroll reveal) */}
      <ResultsProofSection />

      {/* Beat 4 - Credibility Bar (has internal scroll reveal) */}
      <CredibilityBarSection />

      {/* Beat 5 - Featured Provider */}
      <ScrollRevealSection>
        <FeaturedProviderSection />
      </ScrollRevealSection>

      {/* Beat 6 - Memberships Teaser */}
      <ScrollRevealSection>
        <MembershipsTeaserSection />
      </ScrollRevealSection>

      {/* Beat 7 - Final Booking CTA */}
      <ScrollRevealSection>
        <FinalBookingCTASection />
      </ScrollRevealSection>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Book Bar */}
      <MobileStickyBookBar />
    </div>
  );
}
