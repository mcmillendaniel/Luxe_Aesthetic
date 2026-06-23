import { useState, useRef, useEffect } from 'react';

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  maxLength?: number;
  rows?: number;
  disabled?: boolean;
}

export function FloatingLabelInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  maxLength,
  rows = 4,
  disabled = false,
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const hasValue = value.length > 0;
  const isRaised = isFocused || hasValue;

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const handleBlur = () => {
    setIsFocused(false);

    // Auto-format phone number on blur
    if (type === 'tel' && value) {
      const digits = value.replace(/\D/g, '');
      if (digits.length === 10) {
        const formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
        onChange(formatted);
      }
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: type === 'textarea' ? 'auto' : '48px',
    padding: type === 'textarea' ? '16px' : '16px 12px 8px',
    fontFamily: 'Jost',
    fontWeight: 300,
    fontSize: '15px',
    color: '#2A2420',
    backgroundColor: disabled ? '#E8E2D9' : isFocused ? '#FEFCF9' : '#FAF8F4',
    border: `1px solid ${error ? '#A67870' : isFocused ? '#D4A5A0' : '#DDD7D0'}`,
    borderRadius: '2px',
    outline: 'none',
    transition: 'all 200ms ease',
    cursor: disabled ? 'not-allowed' : 'text',
  };

  const labelStyle: React.CSSProperties = {
    position: 'absolute',
    left: '12px',
    top: isRaised ? '8px' : '50%',
    transform: isRaised ? 'translateY(0)' : 'translateY(-50%)',
    fontFamily: 'Jost',
    fontWeight: 300,
    fontSize: isRaised ? '11px' : '15px',
    color: error ? '#A67870' : '#A89E97',
    transition: 'all 200ms ease',
    pointerEvents: 'none',
    letterSpacing: isRaised ? '0.03em' : '0',
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <div style={{ position: 'relative' }}>
        {type === 'textarea' ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            id={id}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            required={required}
            maxLength={maxLength}
            rows={rows}
            disabled={disabled}
            style={inputStyle}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            id={id}
            type={type}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={handleBlur}
            required={required}
            disabled={disabled}
            style={inputStyle}
          />
        )}

        <label htmlFor={id} style={labelStyle}>
          {label}{required && ' *'}
        </label>
      </div>

      {/* Character counter for textarea */}
      {type === 'textarea' && maxLength && isFocused && (
        <div style={{
          position: 'absolute',
          right: '12px',
          bottom: '12px',
          fontFamily: 'Jost',
          fontWeight: 300,
          fontSize: '12px',
          color: charCount > maxLength ? '#A67870' : '#A89E97',
          pointerEvents: 'none',
        }}>
          {charCount}/{maxLength}
        </div>
      )}

      {/* Error message */}
      {error && (
        <div style={{
          fontFamily: 'Jost',
          fontWeight: 300,
          fontSize: '13px',
          color: '#7A4D48',
          marginTop: '6px',
        }}>
          {error}
        </div>
      )}
    </div>
  );
}
