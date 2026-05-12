import { useState, type ReactElement, type FormEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { sendEmail } from '../utils/notifications';
import site from '../config/site';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = (): ReactElement => {
  const { t, language } = useLanguage();

  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await sendEmail({
        to: 'pbi240426@gmail.com',
        subject: `[문의] ${form.subject}`,
        html: `
          <h3>웹사이트 문의</h3>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;width:120px;">이름</td><td style="padding:8px;border:1px solid #ddd;">${form.name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">이메일</td><td style="padding:8px;border:1px solid #ddd;">${form.email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">전화번호</td><td style="padding:8px;border:1px solid #ddd;">${form.phone}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">제목</td><td style="padding:8px;border:1px solid #ddd;">${form.subject}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">내용</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${form.message}</td></tr>
          </table>
        `,
      });

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(result.error || (language === 'ko' ? '전송에 실패했습니다. 다시 시도해주세요.' : 'Failed to send. Please try again.'));
      }
    } catch {
      setError(language === 'ko' ? '오류가 발생했습니다.' : 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <h2 data-aos="fade-up">{t('contact.title')}</h2>
          <p data-aos="fade-up" data-aos-delay="100">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="section-ed" data-aos="fade-up">
        <div className="container">
          <div className="contact-grid">
            {/* ── Left: Contact Form ── */}
            <div className="auth-card-google" style={{ padding: '2rem' }}>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {language === 'ko' ? '문의가 접수되었습니다' : 'Your message has been sent'}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {language === 'ko' ? '빠른 시일 내에 답변 드리겠습니다.' : 'We will respond as soon as possible.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                    {t('contact.form.name') ? (language === 'ko' ? '문의 양식' : 'Contact Form') : 'Contact Form'}
                  </h3>

                  {error && <div className="auth-error" style={{ marginBottom: '1rem' }}>{error}</div>}

                  <div className="auth-input-group" style={{ marginBottom: '1rem' }}>
                    <input
                      type="text"
                      placeholder={t('contact.form.name')}
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="auth-input-group" style={{ marginBottom: '1rem' }}>
                    <input
                      type="email"
                      placeholder={t('contact.form.email')}
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="auth-input-group" style={{ marginBottom: '1rem' }}>
                    <input
                      type="tel"
                      placeholder={t('contact.form.phone')}
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="auth-input-group" style={{ marginBottom: '1rem' }}>
                    <input
                      type="text"
                      placeholder={t('contact.form.subject')}
                      value={form.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      required
                    />
                  </div>
                  <div className="auth-input-group" style={{ marginBottom: '1.5rem' }}>
                    <textarea
                      placeholder={t('contact.form.message')}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '8px',
                        fontSize: '15px',
                        color: 'var(--text-primary)',
                        background: 'var(--bg-white)',
                        fontFamily: 'inherit',
                        resize: 'vertical',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {loading
                      ? (language === 'ko' ? '전송 중...' : 'Sending...')
                      : (language === 'ko' ? '문의 보내기' : 'Send Message')
                    }
                  </button>
                </form>
              )}
            </div>

            {/* ── Right: Company Info ── */}
            <div className="contact-info-card" data-aos="fade-up" data-aos-delay="100">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                {language === 'ko' ? '회사 정보' : 'Company Info'}
              </h3>

              {/* Address */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">{language === 'ko' ? '주소' : 'Address'}</div>
                  <div className="contact-info-value">{site.company.address}</div>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">{language === 'ko' ? '전화' : 'Phone'}</div>
                  <div className="contact-info-value">{site.company.phone}</div>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">{language === 'ko' ? '이메일' : 'Email'}</div>
                  <div className="contact-info-value">{site.company.email}</div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="contact-info-item" style={{ marginBottom: 0 }}>
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">{language === 'ko' ? '영업시간' : 'Business Hours'}</div>
                  <div className="contact-info-value">{site.company.businessHours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
