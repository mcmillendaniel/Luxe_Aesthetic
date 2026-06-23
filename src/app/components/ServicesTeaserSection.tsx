import { useNavigate } from 'react-router';
import { ServiceCard } from './ServiceCard';
import { Button } from './Button';
import useScrollReveal from '../hooks/useScrollReveal';
import BotoxHeader from '../../imports/Botox_Header.png';
import FillerHeader from '../../imports/LuxeAesthetic_Filler_Header.png';
import BodyContouringHeader from '../../imports/LuxeAesthetic_Body_Contouring_Header.png';
import GLP1Header from '../../imports/LuxeAesthetic_GLP-1_Header.png';
import MembershipCard from '../../imports/LuxeAesthetic_Membership_Card.png';

const SERVICES = [
  {
    imageUrl: BotoxHeader,
    serviceName: "Botox & Neurotoxins",
    descriptor: "Natural movement, expertly placed.",
    tileHeadline: "Soften. Refresh. Still you.",
    ctaLabel: "Book a Botox Consultation",
  },
  {
    imageUrl: FillerHeader,
    serviceName: "Filler",
    descriptor: "Volume and structure, balanced with intention.",
    tileHeadline: "Restore what time has quietly shifted.",
    ctaLabel: "Book a Filler Consultation",
  },
  {
    imageUrl: BodyContouringHeader,
    serviceName: "Body Contouring",
    descriptor: "Non-invasive sculpting for lasting change.",
    tileHeadline: "Results that outlast the treatment.",
    ctaLabel: "Book a Consultation",
  },
  {
    imageUrl: GLP1Header,
    serviceName: "Medical Weight Management",
    descriptor: "GLP-1 programs designed around you, not a protocol.",
    tileHeadline: "Medically supervised. Genuinely transformative.",
    ctaLabel: "Schedule a Medical Consultation",
  },
  {
    imageUrl: MembershipCard,
    serviceName: "Memberships",
    descriptor: "Monthly care plans for clients who've made it a lifestyle.",
    tileHeadline: "Maintain your results, not just chase them.",
    ctaLabel: "Get Started",
  }
];

export function ServicesTeaserSection() {
  const navigate = useNavigate();
  const [headingRef, headingVisible] = useScrollReveal({ threshold: 0.15 });
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-screen-xl mx-auto">
        {/* Section Headline */}
        <h2
          ref={headingRef as React.RefObject<HTMLHeadingElement>}
          className="text-3xl md:text-4xl lg:text-5xl text-center mb-16"
          style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            color: '#2A2420',
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease-out, transform 700ms ease-out',
          }}
        >
          Every treatment. One standard of care.
        </h2>

        {/* Service Cards Grid */}
        <div ref={cardsRef as React.RefObject<HTMLDivElement>}>
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
            {SERVICES.slice(0, 3).map((service, index) => (
              <div
                key={service.serviceName}
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 600ms ease-out ${index * 120}ms, transform 600ms ease-out ${index * 120}ms`,
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          {/* Row 2: 2 cards, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:w-2/3 lg:mx-auto">
            {SERVICES.slice(3).map((service, index) => (
              <div
                key={service.serviceName}
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 600ms ease-out ${(index + 3) * 120}ms, transform 600ms ease-out ${(index + 3) * 120}ms`,
                }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10 md:mt-16">
          <Button variant="secondary" className="w-full sm:w-auto" onClick={() => navigate('/services')}>Explore All Services</Button>
        </div>
      </div>
    </section>
  );
}
