import { Link, useNavigate } from 'react-router';
import { Button } from './Button';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer>
      {/* Main Footer */}
      <div
        className="py-12 lg:py-16 px-6 lg:px-12 border-t"
        style={{
          backgroundColor: '#E8E2D9',
          borderTopColor: '#DDD7D0',
        }}
      >
        <div className="max-w-screen-xl mx-auto">
          {/* Mobile: Single Centered Stack */}
          <div className="lg:hidden flex flex-col items-center text-center space-y-8">
            {/* Logo/Wordmark */}
            <div>
              <div
                className="text-xl mb-1"
                style={{
                  fontFamily: 'Cormorant Garamond',
                  fontWeight: 400,
                  color: '#2A2420',
                  lineHeight: 1,
                }}
              >
                Luxe Aesthetic
              </div>
              <div
                className="text-xs"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  color: '#A89E97',
                }}
              >
                Raleigh, NC
              </div>
            </div>

            {/* Tagline */}
            <p
              className="text-sm max-w-xs"
              style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                lineHeight: 1.6,
                color: '#6B5E57',
              }}
            >
              A practice built on trust, results, and the belief that you deserve both.
            </p>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Results', href: '/results' },
                { label: 'About', href: '/about' },
                { label: 'Memberships', href: '/memberships' },
                { label: 'Book Now', href: '/book' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm py-2"
                  style={{
                    fontFamily: 'Jost',
                    fontWeight: 300,
                    color: '#6B5E57',
                    textDecoration: 'none',
                    transition: 'color 150ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2A2420';
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6B5E57';
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = '2px solid #D4A5A0';
                    e.currentTarget.style.outlineOffset = '2px';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = 'none';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Services Links */}
            <nav className="flex flex-col gap-2">
              <div
                className="text-xs uppercase tracking-widest mb-2"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  color: '#A89E97',
                }}
              >
                Services
              </div>
              {[
                { label: 'Botox & Neurotoxins', href: '/services/botox' },
                { label: 'Filler', href: '/services/filler' },
                { label: 'Body Contouring', href: '/services/body-contouring' },
                { label: 'Medical Weight Management', href: '/services/medical-weight-management' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm py-2"
                  style={{
                    fontFamily: 'Jost',
                    fontWeight: 300,
                    color: '#6B5E57',
                    textDecoration: 'none',
                    transition: 'color 150ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#2A2420';
                    e.currentTarget.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6B5E57';
                    e.currentTarget.style.textDecoration = 'none';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = '2px solid #D4A5A0';
                    e.currentTarget.style.outlineOffset = '2px';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = 'none';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Info */}
            <div>
              <div
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  color: '#A89E97',
                }}
              >
                Visit Us
              </div>
              <div className="mb-4">
                <p
                  className="text-sm mb-1"
                  style={{
                    fontFamily: 'Jost',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#6B5E57',
                  }}
                >
                  4000 Blue Ridge Road, Suite 101
                </p>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: 'Jost',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#6B5E57',
                  }}
                >
                  Raleigh, NC 27612
                </p>
              </div>
              <p
                className="text-sm mb-2"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  color: '#6B5E57',
                }}
              >
                (919) 555-0182
              </p>
              <p
                className="text-xs mb-6"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  color: '#A89E97',
                }}
              >
                Mon–Fri 9am–6pm, Sat 10am–4pm
              </p>
            </div>

            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Luxe Aesthetic on Instagram"
              style={{
                display: 'inline-block',
                transition: 'color 150ms ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const svg = e.currentTarget.querySelector('svg');
                if (svg) svg.style.stroke = '#D4A5A0';
              }}
              onMouseLeave={(e) => {
                const svg = e.currentTarget.querySelector('svg');
                if (svg) svg.style.stroke = '#A89E97';
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = '2px solid #D4A5A0';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = 'none';
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#A89E97"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: 'stroke 150ms ease' }}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* CTA Button */}
            <Button
              variant="secondary"
              className="w-full max-w-sm"
              style={{ minHeight: '44px' }}
              onClick={() => navigate('/book')}
            >
              BOOK A CONSULTATION
            </Button>
          </div>

          {/* Desktop: Multi-Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {/* Column 1 - Brand */}
            <div>
              <div
                className="text-xl mb-1"
                style={{
                  fontFamily: 'Cormorant Garamond',
                  fontWeight: 400,
                  color: '#2A2420',
                  lineHeight: 1,
                }}
              >
                Luxe Aesthetic
              </div>
              <div
                className="text-xs mb-6"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  color: '#A89E97',
                }}
              >
                Raleigh, NC
              </div>

              <p
                className="text-sm mb-8 max-w-[220px]"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: '#6B5E57',
                }}
              >
                A practice built on trust, results, and the belief that you deserve both.
              </p>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Luxe Aesthetic on Instagram"
                style={{
                  display: 'inline-block',
                  transition: 'color 150ms ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.style.stroke = '#D4A5A0';
                }}
                onMouseLeave={(e) => {
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) svg.style.stroke = '#A89E97';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = '2px solid #D4A5A0';
                  e.currentTarget.style.outlineOffset = '2px';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = 'none';
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A89E97"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transition: 'stroke 150ms ease' }}
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>

            {/* Column 2 - Navigation */}
            <div>
              <div
                className="text-xs uppercase tracking-widest mb-4"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  color: '#A89E97',
                }}
              >
                Explore
              </div>

              <nav className="flex flex-col gap-3">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/services' },
                  { label: 'Results', href: '/results' },
                  { label: 'About', href: '/about' },
                  { label: 'Memberships', href: '/memberships' },
                  { label: 'Book Now', href: '/book' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm py-2"
                    style={{
                      fontFamily: 'Jost',
                      fontWeight: 300,
                      color: '#6B5E57',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#2A2420';
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#6B5E57';
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = '2px solid #D4A5A0';
                      e.currentTarget.style.outlineOffset = '2px';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = 'none';
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3 - Services */}
            <div>
              <div
                className="text-xs uppercase tracking-widest mb-4"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  color: '#A89E97',
                }}
              >
                Services
              </div>

              <nav className="flex flex-col gap-3">
                {[
                  { label: 'Botox & Neurotoxins', href: '/services/botox' },
                  { label: 'Filler', href: '/services/filler' },
                  { label: 'Body Contouring', href: '/services/body-contouring' },
                  { label: 'Medical Weight Management', href: '/services/medical-weight-management' },
                  { label: 'Memberships', href: '/memberships' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm py-2"
                    style={{
                      fontFamily: 'Jost',
                      fontWeight: 300,
                      color: '#6B5E57',
                      textDecoration: 'none',
                      transition: 'color 150ms ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#2A2420';
                      e.currentTarget.style.textDecoration = 'underline';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#6B5E57';
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.outline = '2px solid #D4A5A0';
                      e.currentTarget.style.outlineOffset = '2px';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.outline = 'none';
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 4 - Contact & CTA */}
            <div>
              <div
                className="text-xs uppercase tracking-widest mb-4"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 400,
                  letterSpacing: '0.12em',
                  color: '#A89E97',
                }}
              >
                Visit Us
              </div>

              <div className="mb-6">
                <p
                  className="text-sm mb-1"
                  style={{
                    fontFamily: 'Jost',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#6B5E57',
                  }}
                >
                  4000 Blue Ridge Road, Suite 101
                </p>
                <p
                  className="text-sm"
                  style={{
                    fontFamily: 'Jost',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: '#6B5E57',
                  }}
                >
                  Raleigh, NC 27612
                </p>
              </div>

              <p
                className="text-sm mb-2"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  color: '#6B5E57',
                }}
              >
                (919) 555-0182
              </p>

              <p
                className="text-xs mb-8"
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  color: '#A89E97',
                }}
              >
                Mon–Fri 9am–6pm, Sat 10am–4pm
              </p>

              <Button
                variant="secondary"
                style={{ width: '100%', minHeight: '44px' }}
                onClick={() => navigate('/book')}
              >
                BOOK A CONSULTATION
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="py-4 px-6" style={{ backgroundColor: '#2A2420' }}>
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-center md:text-left">
            {/* Left Side */}
            <div
              className="text-xs order-2 md:order-1"
              style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                color: '#A89E97',
              }}
            >
              Serving Raleigh since 2018 · 500+ five-star reviews
            </div>

            {/* Right Side */}
            <div
              className="text-xs order-3"
              style={{
                fontFamily: 'Jost',
                fontWeight: 300,
                color: '#A89E97',
              }}
            >
              © {currentYear} Luxe Aesthetic · Raleigh, NC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
