import { useNavigate } from 'react-router';
import { Button } from './Button';

export function MembershipsTeaserSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 lg:py-24 px-6 md:px-12" style={{ backgroundColor: '#F3EFE8' }}>
      <div className="max-w-screen-xl mx-auto">
        <h2
          className="text-3xl md:text-4xl text-center mb-12"
          style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            color: '#2A2420',
          }}
        >
          Make it part of how you take care of yourself.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {/* Refresh Card */}
          <div
            className="p-6 rounded-sm w-full"
            style={{
              backgroundColor: '#FAF8F4',
              border: '1px solid #DDD7D0',
            }}
          >
            <h3
              className="text-2xl mb-3"
              style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                color: '#2A2420',
              }}
            >
              Refresh
            </h3>

            <p
              className="mb-6 leading-relaxed"
              style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}
            >
              For clients maintaining one primary treatment.
            </p>

            <Button variant="ghost" style={{ minHeight: '44px' }} onClick={() => navigate('/memberships')}>
              LEARN MORE
            </Button>
          </div>

          {/* Radiance Card - Featured */}
          <div
            className="p-6 pt-8 rounded-sm w-full relative"
            style={{
              backgroundColor: '#FAF8F4',
              border: '1px solid #D4A5A0',
            }}
          >
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-1 rounded-sm uppercase tracking-widest"
              style={{
                backgroundColor: '#EDD5D2',
                color: '#7A4D48',
                fontFamily: 'Jost',
                fontWeight: 400,
                fontSize: '11px',
                letterSpacing: '0.12em',
              }}
            >
              MOST POPULAR
            </div>

            <h3
              className="text-2xl mb-3"
              style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                color: '#2A2420',
              }}
            >
              Radiance
            </h3>

            <p
              className="mb-6 leading-relaxed"
              style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}
            >
              For clients combining 2–3 services quarterly.
            </p>

            <Button variant="primary" style={{ minHeight: '44px' }} onClick={() => navigate('/book')}>
              GET STARTED
            </Button>
          </div>

          {/* Reserve Card */}
          <div
            className="p-6 rounded-sm w-full"
            style={{
              backgroundColor: '#FAF8F4',
              border: '1px solid #DDD7D0',
            }}
          >
            <h3
              className="text-2xl mb-3"
              style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 400,
                color: '#2A2420',
              }}
            >
              Reserve
            </h3>

            <p
              className="mb-6 leading-relaxed"
              style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '16px',
                lineHeight: 1.75,
                color: '#6B5E57',
              }}
            >
              Full access, priority booking, exclusive pricing.
            </p>

            <Button variant="ghost" style={{ minHeight: '44px' }} onClick={() => navigate('/memberships')}>
              LEARN MORE
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button variant="secondary" style={{ minHeight: '44px' }} onClick={() => navigate('/memberships')}>
            VIEW MEMBERSHIP OPTIONS
          </Button>
        </div>
      </div>
    </section>
  );
}
