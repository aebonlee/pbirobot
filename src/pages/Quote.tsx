import { useState, type ReactElement, type FormEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { sendEmail } from '../utils/notifications';

interface QuoteFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  poolType: string;
  poolSize: string;
  quantity: string;
  message: string;
}

const Quote = (): ReactElement => {
  const { t, language } = useLanguage();

  const [form, setForm] = useState<QuoteFormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    poolType: '',
    poolSize: '',
    quantity: '1',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof QuoteFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await sendEmail({
        to: 'pbi240426@gmail.com',
        subject: `[견적 요청] ${form.companyName || form.contactName}`,
        html: `
          <h3>견적 요청서</h3>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;width:120px;">회사명</td><td style="padding:8px;border:1px solid #ddd;">${form.companyName}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">담당자</td><td style="padding:8px;border:1px solid #ddd;">${form.contactName}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">이메일</td><td style="padding:8px;border:1px solid #ddd;">${form.email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">전화번호</td><td style="padding:8px;border:1px solid #ddd;">${form.phone}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">수영장 유형</td><td style="padding:8px;border:1px solid #ddd;">${form.poolType}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">수영장 크기</td><td style="padding:8px;border:1px solid #ddd;">${form.poolSize}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">수량</td><td style="padding:8px;border:1px solid #ddd;">${form.quantity}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">추가 메시지</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap;">${form.message}</td></tr>
          </table>
        `,
      });

      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(result.error || (language === 'ko' ? '전송에 실패했습니다.' : 'Failed to send.'));
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
          <h2 data-aos="fade-up">{t('quote.title')}</h2>
          <p data-aos="fade-up" data-aos-delay="100">{t('quote.subtitle')}</p>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section className="section-ed" data-aos="fade-up">
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <div className="auth-card-google" style={{ padding: '2.5rem' }}>
              {isSubmitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {language === 'ko' ? '견적 요청이 접수되었습니다' : 'Quote request has been submitted'}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    {language === 'ko' ? '담당자가 확인 후 연락드리겠습니다.' : 'Our team will review and contact you soon.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)', textAlign: 'center' }}>
                    {language === 'ko' ? '견적 요청서' : 'Quote Request Form'}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1.5rem' }}>
                    {language === 'ko' ? '필요한 정보를 입력해 주세요.' : 'Please fill in the required information.'}
                  </p>

                  {error && <div className="auth-error" style={{ marginBottom: '1rem' }}>{error}</div>}

                  {/* Company Name */}
                  <div className="auth-input-group" style={{ marginBottom: '1rem' }}>
                    <input
                      type="text"
                      placeholder={t('quote.form.companyName')}
                      value={form.companyName}
                      onChange={(e) => handleChange('companyName', e.target.value)}
                    />
                  </div>

                  {/* Contact Name */}
                  <div className="auth-input-group" style={{ marginBottom: '1rem' }}>
                    <input
                      type="text"
                      placeholder={t('quote.form.contactName')}
                      value={form.contactName}
                      onChange={(e) => handleChange('contactName', e.target.value)}
                      required
                    />
                  </div>

                  {/* Email & Phone in a row */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="auth-input-group">
                      <input
                        type="email"
                        placeholder={t('quote.form.email')}
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="auth-input-group">
                      <input
                        type="tel"
                        placeholder={t('quote.form.phone')}
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Pool Type */}
                  <div className="auth-input-group" style={{ marginBottom: '1rem' }}>
                    <select
                      value={form.poolType}
                      onChange={(e) => handleChange('poolType', e.target.value)}
                      required
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid var(--border-medium)',
                        borderRadius: '8px',
                        fontSize: '15px',
                        color: form.poolType ? 'var(--text-primary)' : 'var(--text-light)',
                        background: 'var(--bg-white)',
                        fontFamily: 'inherit',
                        boxSizing: 'border-box',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="" disabled>{t('quote.form.poolType')}</option>
                      <option value="residential">{language === 'ko' ? '가정용' : 'Residential'}</option>
                      <option value="commercial">{language === 'ko' ? '상업용' : 'Commercial'}</option>
                      <option value="public">{language === 'ko' ? '공공시설' : 'Public Facility'}</option>
                      <option value="other">{language === 'ko' ? '기타' : 'Other'}</option>
                    </select>
                  </div>

                  {/* Pool Size & Quantity */}
                  <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="auth-input-group">
                      <input
                        type="text"
                        placeholder={t('quote.form.poolSize')}
                        value={form.poolSize}
                        onChange={(e) => handleChange('poolSize', e.target.value)}
                      />
                    </div>
                    <div className="auth-input-group">
                      <input
                        type="number"
                        placeholder={t('quote.form.quantity')}
                        min="1"
                        value={form.quantity}
                        onChange={(e) => handleChange('quantity', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="auth-input-group" style={{ marginBottom: '1.5rem' }}>
                    <textarea
                      placeholder={t('quote.form.message')}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
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
                      ? (language === 'ko' ? '전송 중...' : 'Submitting...')
                      : (language === 'ko' ? '견적 요청하기' : 'Submit Quote Request')
                    }
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quote;
