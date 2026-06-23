import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';

function BookNowButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/book"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '44px',
        padding: '0 24px',
        fontFamily: 'Jost',
        fontWeight: 400,
        fontSize: '12px',
        letterSpacing: isHovered ? '0.12em' : '0.1em',
        textTransform: 'uppercase',
        backgroundColor: isHovered ? '#3B281E' : '#D4A5A0',
        color: '#FEFCF9',
        textDecoration: 'none',
        borderRadius: '2px',
        cursor: 'pointer',
        transition: 'background-color 250ms ease, letter-spacing 250ms ease',
      }}
      onFocus={(e) => {
        e.currentTarget.style.outline = '2px solid #D4A5A0';
        e.currentTarget.style.outlineOffset = '2px';
      }}
      onBlur={(e) => {
        e.currentTarget.style.outline = 'none';
      }}
    >
      Book Now
    </Link>
  );
}

interface NavigationProps {
  currentPage?: string;
  forceScrolled?: boolean;
  forceMegaMenuOpen?: boolean;
  hideBookButton?: boolean;
}

export function Navigation({ currentPage = 'Home', forceScrolled = false, forceMegaMenuOpen = false, hideBookButton = false }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(forceMegaMenuOpen);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (forceScrolled || forceMegaMenuOpen) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceScrolled, forceMegaMenuOpen]);

  const handleServicesMouseEnter = () => {
    if (forceMegaMenuOpen || isMobile) return;

    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    servicesTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(true);
    }, 150);
  };

  const handleServicesMouseLeave = () => {
    if (forceMegaMenuOpen || isMobile) return;

    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }

    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasMegaMenu: true },
    { name: 'Results', href: '/results' },
    { name: 'About', href: '/about' },
    { name: 'Memberships', href: '/memberships' },
  ];

  const megaMenuItems = [
    { name: 'Botox', href: '/services/botox' },
    { name: 'Filler', href: '/services/filler' },
    { name: 'Body Contouring', href: '/services/body-contouring' },
    { name: 'GLP-1 Program', href: '/services/glp1' },
    { name: 'Memberships', href: '/memberships' },
  ];

  return (
    <nav
      className="h-16 md:h-20"
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(250, 248, 244, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid #DDD7D0' : '1px solid transparent',
        boxShadow: isScrolled ? '0 2px 16px rgba(59, 40, 30, 0.08)' : 'none',
        paddingTop: isScrolled ? '12px' : '16px',
        paddingBottom: isScrolled ? '12px' : '16px',
        transition: 'border-bottom 200ms ease, box-shadow 300ms ease, padding-top 300ms ease, padding-bottom 300ms ease',
        zIndex: 1000,
      }}
    >
      <div
        className="px-4 md:px-8 lg:px-16"
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo/Wordmark */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              fontSize: '22px',
              color: '#2A2420',
              lineHeight: 1,
              marginBottom: '4px',
            }}
          >
            Luxe Aesthetic
          </div>
          <div
            style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '11px',
              color: '#A89E97',
            }}
          >
            Raleigh, NC
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          className="hidden md:flex"
          style={{
            alignItems: 'center',
            gap: '40px',
          }}
        >
            {navLinks.map((link) => (
              <div
                key={link.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => {
                  setHoveredLink(link.name);
                  if (link.hasMegaMenu) handleServicesMouseEnter();
                }}
                onMouseLeave={() => {
                  setHoveredLink(null);
                  if (link.hasMegaMenu) handleServicesMouseLeave();
                }}
              >
                <Link
                  to={link.href}
                  className="py-2"
                  style={{
                    fontFamily: 'Jost',
                    fontWeight: 300,
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    color: currentPage === link.name ? '#2A2420' : '#6B5E57',
                    textDecoration: 'none',
                    transition: 'color 200ms ease',
                    display: 'inline-block',
                    paddingBottom: '4px',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.outline = '2px solid #D4A5A0';
                    e.currentTarget.style.outlineOffset = '4px';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.outline = 'none';
                  }}
                >
                  {link.name}
                  {/* Underline */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: '1px',
                      backgroundColor: currentPage === link.name ? '#2A2420' : '#C48B8B',
                      width: currentPage === link.name ? '100%' : (hoveredLink === link.name ? '100%' : '0%'),
                      transition: 'width 250ms ease-out',
                    }}
                  />
                </Link>
              </div>
            ))}
        </div>

        {/* Desktop CTA Button */}
        {!hideBookButton && (
          <div className="hidden md:block">
            <BookNowButton />
          </div>
        )}

        {/* Mobile Hamburger Icon */}
        <button
          className="flex md:hidden"
            onClick={toggleMobileMenu}
            style={{
              width: '44px',
              height: '44px',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            aria-label="Open navigation menu"
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid #D4A5A0';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
            }}
          >
            <span
              style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#2A2420',
                borderRadius: '2px',
                transition: 'all 300ms ease',
                transform: isMobileMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
              }}
            />
            <span
              style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#2A2420',
                borderRadius: '2px',
                transition: 'all 300ms ease',
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#2A2420',
                borderRadius: '2px',
                transition: 'all 300ms ease',
                transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
              }}
            />
        </button>
      </div>

      {/* Desktop Mega Menu */}
      <div
        className="hidden md:block"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#FAF8F4',
            boxShadow: '0 8px 32px rgba(42, 36, 32, 0.08)',
            opacity: isMegaMenuOpen ? 1 : 0,
            transform: isMegaMenuOpen ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'opacity 250ms cubic-bezier(0.16, 1, 0.3, 1), transform 250ms cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: isMegaMenuOpen ? 'auto' : 'none',
            zIndex: 999,
          }}
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
        >
          <div
            style={{
              maxWidth: '1320px',
              margin: '0 auto',
              padding: '24px 48px',
              display: 'grid',
              gridTemplateColumns: `repeat(${megaMenuItems.length}, 1fr)`,
              gap: '8px',
            }}
          >
            {megaMenuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  fontSize: '14px',
                  color: '#6B5E57',
                  textDecoration: 'none',
                  padding: '16px 24px',
                  borderRadius: '4px',
                  transition: 'background-color 150ms ease',
                  display: 'block',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F3EFE8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = '2px solid #C48B8B';
                  e.currentTarget.style.outlineOffset = '3px';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = 'none';
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden"
        style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#FAF8F4',
            borderBottom: '1px solid #DDD7D0',
            boxShadow: '0 8px 32px rgba(42, 36, 32, 0.08)',
            maxHeight: isMobileMenuOpen ? '500px' : '0',
            overflow: 'hidden',
            transition: 'max-height 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            zIndex: 999,
          }}
        >
          <div
            style={{
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  fontSize: '16px',
                  color: currentPage === link.name ? '#2A2420' : '#6B5E57',
                  textDecoration: 'none',
                  padding: '16px',
                  borderRadius: '4px',
                  backgroundColor: currentPage === link.name ? '#F3EFE8' : 'transparent',
                  transition: 'background-color 150ms ease',
                  display: 'block',
                  borderLeft: currentPage === link.name ? '3px solid #D4A5A0' : '3px solid transparent',
                  cursor: 'pointer',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = '2px solid #D4A5A0';
                  e.currentTarget.style.outlineOffset = '2px';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = 'none';
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Book Button */}
            {!hideBookButton && (
              <Link
                to="/book"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  marginTop: '16px',
                  height: '48px',
                  padding: '0 24px',
                  fontFamily: 'Jost',
                  fontWeight: 400,
                  fontSize: '12px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  backgroundColor: '#D4A5A0',
                  color: '#FEFCF9',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '2px',
                  transition: 'background-color 200ms ease',
                  cursor: 'pointer',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.outline = '2px solid #C48B8B';
                  e.currentTarget.style.outlineOffset = '3px';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.outline = 'none';
                }}
              >
                BOOK NOW
              </Link>
            )}
          </div>
      </div>
    </nav>
  );
}
