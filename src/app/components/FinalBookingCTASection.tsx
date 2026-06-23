import { useNavigate } from 'react-router';
import { Button } from './Button';

export function FinalBookingCTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-12" style={{ backgroundColor: '#F3EFE8' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl mb-4"
          style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            color: '#2A2420',
          }}
        >
          Ready when you are.
        </h2>

        <p
          className="text-base leading-relaxed mb-8"
          style={{
            fontFamily: 'Jost',
            fontWeight: 300,
            lineHeight: 1.75,
            color: '#6B5E57',
          }}
        >
          Book a consultation with Dr. Daniel and let's talk about what you're looking for.
        </p>

        <Button
          variant="secondary"
          className="w-full sm:w-auto"
          style={{ minHeight: '48px' }}
          onClick={() => navigate('/book')}
        >
          BOOK A CONSULTATION
        </Button>

        <p
          className="text-sm mt-6"
          style={{
            fontFamily: 'Jost',
            fontWeight: 300,
            color: '#A89E97',
          }}
        >
          Prefer to text? Reach us at (919) 555-0182. We respond within one business day.
        </p>
      </div>
    </section>
  );
}
