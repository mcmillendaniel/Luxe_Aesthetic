import { useEffect } from 'react';
import { Link } from 'react-router';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Results', href: '/results' },
    { name: 'About', href: '/about' },
    { name: 'Memberships', href: '/memberships' },
  ];

  if (!isOpen) return null;

  return (
    <div
      className="w-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#FAF8F4',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        opacity: isOpen ? 1 : 0,
        transition: 'opacity 200ms ease',
      }}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close navigation menu"
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
        onFocus={(e) => {
          e.currentTarget.style.outline = '2px solid #C48B8B';
          e.currentTarget.style.outlineOffset = '3px';
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
          stroke="#2C1810"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0',
          marginBottom: '48px',
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={onClose}
            className="text-lg py-4"
            style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              color: '#3B281E',
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'opacity 150ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
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
      </nav>

      {/* Book Button */}
      <Link
        to="/book"
        onClick={onClose}
        className="w-full py-4"
        style={{
          maxWidth: '400px',
          minHeight: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#2C1810',
          color: '#FFFFFF',
          fontFamily: 'Jost',
          fontWeight: 400,
          fontSize: '12px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          borderRadius: '2px',
          cursor: 'pointer',
          transition: 'background-color 200ms ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#1A0F08';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#2C1810';
        }}
        onFocus={(e) => {
          e.currentTarget.style.outline = '2px solid #C48B8B';
          e.currentTarget.style.outlineOffset = '3px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.outline = 'none';
        }}
      >
        BOOK A CONSULTATION
      </Link>
    </div>
  );
}
