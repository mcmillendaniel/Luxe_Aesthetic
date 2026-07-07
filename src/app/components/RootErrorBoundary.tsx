import { useRouteError } from 'react-router';

// Branded fallback shown when a runtime error bubbles up through the router,
// instead of React Router's default developer error screen. Kept intentionally
// self-contained (a plain anchor, no heavy components) so it stays reliable
// even when part of the app is broken.
export function RootErrorBoundary() {
  const error = useRouteError();
  if (import.meta.env.DEV) {
    // Surface the real error while developing.
    console.error(error);
  }

  return (
    <div
      style={{
        backgroundColor: '#FAF8F4',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '520px' }}>
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
            SOMETHING WENT WRONG
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'Cormorant Garamond',
            fontWeight: 400,
            fontSize: '44px',
            color: '#2A2420',
            marginBottom: '20px',
          }}
        >
          We hit an unexpected error
        </h1>

        <p
          style={{
            fontFamily: 'Jost',
            fontWeight: 300,
            fontSize: '16px',
            lineHeight: 1.7,
            color: '#6B5E57',
            marginBottom: '40px',
          }}
        >
          Sorry — something didn&rsquo;t load as expected. Please refresh the
          page or return to the homepage. If it keeps happening, give us a call
          and we&rsquo;ll help you book.
        </p>

        <a
          href="/"
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
            display: 'inline-block',
          }}
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
