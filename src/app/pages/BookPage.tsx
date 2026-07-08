import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { FloatingLabelInput } from '../components/FloatingLabelInput';

export function BookPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    contactMethod: 'email',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 10;
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your name.';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter a valid email address.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (formData.message.length > 500) {
      newErrors.message = 'Please keep your message under 500 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setServerError(false);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      setServerError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (isSuccess) {
    return (
      <div style={{ backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
        <Navigation currentPage="Book" hideBookButton />

        <section style={{ backgroundColor: '#F3EFE8', padding: '80px 0' }}>
          <div className="max-w-screen-xl mx-auto px-12 text-center">
            <h1 style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              fontSize: '48px',
              color: '#2A2420',
              marginBottom: '16px',
            }}>
              Let's talk.
            </h1>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '17px',
              color: '#6B5E57',
            }}>
              Your first consultation is a conversation, not a commitment.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: '#FAF8F4', padding: '80px 0' }}>
          <div className="max-w-screen-sm mx-auto px-12 text-center">
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#D4A5A0',
              margin: '0 auto 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FEFCF9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6,16 12,22 26,8" />
              </svg>
            </div>

            <h2 style={{
              fontFamily: 'Cormorant Garamond',
              fontWeight: 400,
              fontSize: '28px',
              color: '#2A2420',
              marginBottom: '16px',
              lineHeight: 1.4,
            }}>
              Thank you. Dr. Daniel's team will be in touch within one business day.
            </h2>

            <p style={{
              fontFamily: 'Jost',
              fontWeight: 300,
              fontSize: '15px',
              color: '#6B5E57',
              marginBottom: '32px',
            }}>
              In the meantime, feel free to browse our results.
            </p>

            <Button variant="secondary" onClick={() => navigate('/results')}>
              SEE OUR RESULTS
            </Button>
          </div>
        </section>

      <Footer />
    </div>
  );
}

return (
  <div style={{ backgroundColor: '#FAF8F4', minHeight: '100vh' }}>
    <Navigation currentPage="Book" hideBookButton />

    {/* Page Header */}
    <section style={{ backgroundColor: '#F3EFE8', padding: '80px 0' }}>
      <div className="max-w-screen-xl mx-auto px-12 text-center">
        <h1 style={{
          fontFamily: 'Cormorant Garamond',
          fontWeight: 400,
          fontSize: '48px',
          color: '#2A2420',
          marginBottom: '16px',
        }}>
          Let's talk.
        </h1>

        <p style={{
          fontFamily: 'Jost',
          fontWeight: 300,
          fontSize: '17px',
          color: '#6B5E57',
        }}>
          Your first consultation is a conversation, not a commitment.
        </p>
      </div>
    </section>

    {/* Server Error Banner */}
    {serverError && (
      <div style={{
        backgroundColor: '#EDD5D2',
        borderLeft: '4px solid #D4A5A0',
        padding: '16px 24px',
        margin: '32px auto',
        maxWidth: '600px',
      }}>
        <p style={{
          fontFamily: 'Jost',
          fontWeight: 400,
          fontSize: '15px',
          color: '#7A4D48',
        }}>
          Something went wrong. Please try again or call us at (919) 555-0100.
        </p>
      </div>
    )}

    {/* Booking Form */}
    <section style={{ backgroundColor: '#FAF8F4', padding: '80px 0' }}>
      <div className="max-w-screen-sm mx-auto px-12">
        <form onSubmit={handleSubmit}>
          {/* Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FloatingLabelInput
              label="First Name"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleFieldChange('firstName', e.target.value)}
              error={errors.firstName}
              required
            />
            <FloatingLabelInput
              label="Last Name"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleFieldChange('lastName', e.target.value)}
              error={errors.lastName}
              required
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: '24px' }}>
            <FloatingLabelInput
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              error={errors.email}
              required
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: '24px' }}>
            <FloatingLabelInput
              label="Phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              error={errors.phone}
              required
            />
          </div>

          {/* Service Interest */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontFamily: 'Jost',
              fontWeight: 400,
              fontSize: '13px',
              letterSpacing: '0.08em',
              color: '#6B5E57',
              marginBottom: '8px',
            }}>
              Service of Interest
            </label>
            <select
              value={formData.service}
              onChange={(e) => handleFieldChange('service', e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#FEFCF9',
                border: '1px solid #DDD7D0',
                borderRadius: '2px',
                fontFamily: 'Jost',
                fontWeight: 300,
                fontSize: '15px',
                color: '#2A2420',
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
              <option value="">Select a topic</option>
              <option value="general">General inquiry</option>
              <option value="membership">Membership information</option>
              <option value="billing">Billing or account question</option>
              <option value="careers">Careers / business inquiry</option>
            </select>
          </div>

          {/* Preferred Contact Method */}
          <div style={{ marginBottom: '32px' }}>
            <label style={{
              display: 'block',
              fontFamily: 'Jost',
              fontWeight: 400,
              fontSize: '13px',
              letterSpacing: '0.08em',
              color: '#6B5E57',
              marginBottom: '12px',
            }}>
              Preferred Contact Method
            </label>

            <div style={{ display: 'flex', gap: '24px' }}>
              <label style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}>
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={formData.contactMethod === 'email'}
                  onChange={(e) => handleFieldChange('contactMethod', e.target.value)}
                  style={{
                    width: '18px',
                    height: '18px',
                    marginRight: '8px',
                    cursor: 'pointer',
                    accentColor: '#D4A5A0',
                  }}
                />
                <span style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  fontSize: '15px',
                  color: '#2A2420',
                }}>
                  Email
                </span>
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}>
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={formData.contactMethod === 'phone'}
                  onChange={(e) => handleFieldChange('contactMethod', e.target.value)}
                  style={{
                    width: '18px',
                    height: '18px',
                    marginRight: '8px',
                    cursor: 'pointer',
                    accentColor: '#D4A5A0',
                  }}
                />
                <span style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  fontSize: '15px',
                  color: '#2A2420',
                }}>
                  Phone
                </span>
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}>
                <input
                  type="radio"
                  name="contactMethod"
                  value="text"
                  checked={formData.contactMethod === 'text'}
                  onChange={(e) => handleFieldChange('contactMethod', e.target.value)}
                  style={{
                    width: '18px',
                    height: '18px',
                    marginRight: '8px',
                    cursor: 'pointer',
                    accentColor: '#D4A5A0',
                  }}
                />
                <span style={{
                  fontFamily: 'Jost',
                  fontWeight: 300,
                  fontSize: '15px',
                  color: '#2A2420',
                }}>
                  Text
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            style={{ width: '100%' }}
          >
            {isSubmitting ? 'SUBMITTING...' : 'BOOK MY CONSULTATION'}
          </Button>
        </form>
      </div>
    </section>

    <Footer />
  </div>
);
}
