import { Link } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function NotFoundPage() {
  return (
    <div style={{ backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
      <Navigation currentPage="" forceScrolled />

      <section
        style={{
          backgroundColor: '#F3EFE8',
          padding: '160px 0 120px',
          textAlign: 'center',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-12">
          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                fontFamily: 'Jost',
                fontWeight: 400,
                fontSize: '11px',
                letterSpacing: '0.12em',
                color: '#A89E97',
              }}
            >
              ERROR 404
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              fontSize: '48px',
              color: '#2A2420',
              marginBottom: '20px',
            }}
          >
            This page couldn&rsquo;t be found
          </h1>

          <p
            style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#6B5E57',
              maxWidth: '520px',
              margin: '0 auto 40px',
            }}
          >
            The page you&rsquo;re looking for may have moved or no longer
            exists. Explore our treatments or head back to the homepage to
            continue.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/"
              style={{
                fontFamily: 'Jost',
                fontWeight: 400,
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#FAF8F4',
                backgroundColor: '#2A2420',
                padding: '15px 32px',
                borderRadius: '2px',
                textDecoration: 'none',
              }}
            >
              Back to Home
            </Link>
            <Link
              to="/services"
              style={{
                fontFamily: 'Jost',
                fontWeight: 400,
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#2A2420',
                border: '1px solid #2A2420',
                padding: '14px 32px',
                borderRadius: '2px',
                textDecoration: 'none',
              }}
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
