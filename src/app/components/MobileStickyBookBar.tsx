import { useLocation, Link } from 'react-router';

export function MobileStickyBookBar() {
  const location = useLocation();

  // Don't show on /book page
  if (location.pathname === '/book') {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 md:hidden z-40 h-16"
      style={{
        backgroundColor: '#2C1810',
        paddingBottom: 'env(safe-area-inset-bottom, 0)',
      }}
    >
      <div className="flex items-center justify-center h-full px-6">
        <Link
          to="/book"
          className="w-full h-11 flex items-center justify-center rounded-sm uppercase tracking-widest text-xs cursor-pointer"
          style={{
            backgroundColor: '#2C1810',
            color: '#FFFFFF',
            fontFamily: 'Jost',
            fontWeight: 400,
            textDecoration: 'none',
            transition: 'opacity 200ms ease',
            minHeight: '44px',
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
          onTouchEnd={(e) => {
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
          BOOK A CONSULTATION
        </Link>
      </div>
    </div>
  );
}
