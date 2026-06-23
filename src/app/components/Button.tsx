import { ButtonHTMLAttributes, ReactNode, useState } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'text';
type ButtonState = 'default' | 'hover' | 'pressed' | 'focus' | 'disabled' | 'loading';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  state?: ButtonState;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  state = 'default',
  children,
  className = '',
  style,
  ...props
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Use internal hover state if no explicit state is provided
  const effectiveState = state !== 'default' ? state : (isHovered ? 'hover' : 'default');

  const isLoading = effectiveState === 'loading';
  const isDisabled = effectiveState === 'disabled' || isLoading;

  const getButtonStyles = () => {
    const baseStyles: React.CSSProperties = {
      height: '48px',
      paddingLeft: '32px',
      paddingRight: '32px',
      fontFamily: 'Jost',
      fontWeight: 400,
      fontSize: '12px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      borderRadius: '2px',
      transition: 'background-color 250ms ease, color 250ms ease, border-color 250ms ease',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      border: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      pointerEvents: isLoading ? 'none' : 'auto',
    };

    // Primary Button
    if (variant === 'primary') {
      if (effectiveState === 'disabled') {
        return {
          ...baseStyles,
          backgroundColor: '#DDD7D0',
          color: '#A89E97',
        };
      }
      if (effectiveState ==='loading') {
        return {
          ...baseStyles,
          backgroundColor: '#2C1810',
          color: '#FFFFFF',
        };
      }
      if (effectiveState ==='pressed') {
        return {
          ...baseStyles,
          backgroundColor: '#1a0f0a',
          color: '#FFFFFF',
          transform: 'scale(0.98)',
        };
      }
      if (effectiveState ==='focus') {
        return {
          ...baseStyles,
          backgroundColor: '#2C1810',
          color: '#FFFFFF',
          outline: '2px solid #2A2420',
          outlineOffset: '4px',
        };
      }
      if (effectiveState ==='hover') {
        return {
          ...baseStyles,
          backgroundColor: '#1a0f0a',
          color: '#FFFFFF',
        };
      }
      // default
      return {
        ...baseStyles,
        backgroundColor: '#2C1810',
        color: '#FFFFFF',
      };
    }

    // Secondary Button
    if (variant === 'secondary') {
      if (effectiveState ==='disabled') {
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: '#A89E97',
          border: '1px solid #DDD7D0',
        };
      }
      if (effectiveState ==='loading') {
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: '#2A2420',
          border: '1px solid #DDD7D0',
        };
      }
      if (effectiveState ==='pressed') {
        return {
          ...baseStyles,
          backgroundColor: '#E8E2D9',
          color: '#2A2420',
          border: '1px solid #A89E97',
        };
      }
      if (effectiveState ==='focus') {
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: '#2A2420',
          border: '1px solid #DDD7D0',
          outline: '2px solid #D4A5A0',
          outlineOffset: '4px',
        };
      }
      if (effectiveState ==='hover') {
        return {
          ...baseStyles,
          backgroundColor: '#2C1810',
          color: '#FFFFFF',
          border: '1px solid #2C1810',
        };
      }
      // default
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: '#2A2420',
        border: '1px solid #DDD7D0',
      };
    }

    // Ghost Button
    if (variant === 'ghost') {
      if (effectiveState ==='disabled') {
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: '#A89E97',
          border: '1px solid #DDD7D0',
        };
      }
      if (effectiveState ==='loading') {
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: '#2C1810',
          border: '1px solid #2C1810',
        };
      }
      if (effectiveState ==='pressed') {
        return {
          ...baseStyles,
          backgroundColor: '#F3EFE8',
          color: '#2C1810',
          border: '1px solid #2C1810',
        };
      }
      if (effectiveState ==='focus') {
        return {
          ...baseStyles,
          backgroundColor: 'transparent',
          color: '#2C1810',
          border: '1px solid #2C1810',
          outline: '2px solid #2C1810',
          outlineOffset: '4px',
        };
      }
      if (effectiveState ==='hover') {
        return {
          ...baseStyles,
          backgroundColor: '#2C1810',
          color: '#FFFFFF',
          border: '1px solid #2C1810',
        };
      }
      // default
      return {
        ...baseStyles,
        backgroundColor: 'transparent',
        color: '#2C1810',
        border: '1px solid #2C1810',
      };
    }

    // Text Link
    if (variant === 'text') {
      const textBaseStyles: React.CSSProperties = {
        ...baseStyles,
        height: 'auto',
        padding: '0',
        backgroundColor: 'transparent',
        border: 'none',
        transition: 'all 150ms ease',
      };

      if (effectiveState ==='disabled') {
        return {
          ...textBaseStyles,
          color: '#A89E97',
          textDecoration: 'none',
        };
      }
      if (effectiveState ==='loading') {
        return {
          ...textBaseStyles,
          color: '#A67870',
          textDecoration: 'none',
        };
      }
      if (effectiveState ==='pressed') {
        return {
          ...textBaseStyles,
          color: '#7A4D48',
          textDecoration: 'none',
        };
      }
      if (effectiveState ==='focus') {
        return {
          ...textBaseStyles,
          color: '#A67870',
          textDecoration: 'none',
          outline: '2px solid #D4A5A0',
          outlineOffset: '2px',
        };
      }
      if (effectiveState ==='hover') {
        return {
          ...textBaseStyles,
          color: '#A67870',
          textDecoration: 'underline',
        };
      }
      // default
      return {
        ...textBaseStyles,
        color: '#A67870',
        textDecoration: 'none',
      };
    }

    return baseStyles;
  };

  return (
    <button
      style={{ ...getButtonStyles(), ...style }}
      disabled={isDisabled}
      className={className}
      onMouseEnter={() => !isDisabled && setIsHovered(true)}
      onMouseLeave={() => !isDisabled && setIsHovered(false)}
      {...props}
    >
      {isLoading ? (
        <>
          <Spinner />
          {variant !== 'text' && children}
        </>
      ) : (
        children
      )}
    </button>
  );
}

function Spinner() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{
        animation: 'spin 1s linear infinite',
      }}
    >
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="30"
        opacity="0.25"
      />
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="10 20"
      />
    </svg>
  );
}
