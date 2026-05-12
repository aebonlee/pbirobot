import type { ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { images } from '../lib/images';

const Brand = (): ReactElement => {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <h2 data-aos="fade-up">{t('brand.title')}</h2>
          <p data-aos="fade-up" data-aos-delay="100">{t('brand.subtitle')}</p>
        </div>
      </section>

      {/* ── Logo Section ── */}
      <section className="section-ed" data-aos="fade-up">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 01 / Logo</div>
            <h2 className="section-title-ed">{t('brand.logoTitle')}</h2>
            <div className="section-meta">Brand Identity</div>
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '640px', marginBottom: '2rem' }}>
            {t('brand.logoDescription')}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '700px' }}>
            {/* White background */}
            <div
              style={{
                background: '#FFFFFF',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '3rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <img src={images.logo} alt="PBI Robot Logo (light)" style={{ maxWidth: '180px', height: 'auto' }} />
            </div>
            {/* Dark background */}
            <div
              style={{
                background: '#111827',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '3rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={images.logo} alt="PBI Robot Logo (dark)" style={{ maxWidth: '180px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Meaning ── */}
      <section className="section-ed" style={{ background: 'var(--bg-light-gray)' }} data-aos="fade-up">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 02 / Meaning</div>
            <h2 className="section-title-ed">{t('brand.meaningTitle')}</h2>
            <div className="section-meta">P &middot; B &middot; I</div>
          </div>
          <div className="pillars">
            {/* P = Pure */}
            <div className="pillar" data-aos="fade-up" data-aos-delay="0">
              <div className="pillar-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
                P
              </div>
              <h4>{t('brand.pure')}</h4>
              <p>{t('brand.pureDesc')}</p>
            </div>

            {/* B = Bot */}
            <div className="pillar" data-aos="fade-up" data-aos-delay="100">
              <div className="pillar-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                  <line x1="8" y1="16" x2="8" y2="16" />
                  <line x1="16" y1="16" x2="16" y2="16" />
                </svg>
                B
              </div>
              <h4>{t('brand.bot')}</h4>
              <p>{t('brand.botDesc')}</p>
            </div>

            {/* I = Innovation */}
            <div className="pillar" data-aos="fade-up" data-aos-delay="200">
              <div className="pillar-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5C8.35 12.26 8.82 13.02 9 14" />
                </svg>
                I
              </div>
              <h4>{t('brand.innovation')}</h4>
              <p>{t('brand.innovationDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand Colors ── */}
      <section className="section-ed" data-aos="fade-up">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 03 / Colors</div>
            <h2 className="section-title-ed">{t('brand.colorsTitle')}</h2>
            <div className="section-meta">Brand Palette</div>
          </div>
          <div className="brand-colors">
            {/* Black */}
            <div className="brand-color-swatch" data-aos="fade-up" data-aos-delay="0">
              <div className="brand-color-preview" style={{ background: '#111827' }} />
              <div className="brand-color-info">
                <h4>PBI Black</h4>
                <p>#111827</p>
                <p style={{ marginTop: '4px' }}>{t('brand.blackDesc')}</p>
              </div>
            </div>

            {/* Blue */}
            <div className="brand-color-swatch" data-aos="fade-up" data-aos-delay="100">
              <div className="brand-color-preview" style={{ background: '#0056B3' }} />
              <div className="brand-color-info">
                <h4>PBI Blue</h4>
                <p>#0056B3</p>
                <p style={{ marginTop: '4px' }}>{t('brand.blueDesc')}</p>
              </div>
            </div>

            {/* White */}
            <div className="brand-color-swatch" data-aos="fade-up" data-aos-delay="200">
              <div className="brand-color-preview" style={{ background: '#FFFFFF', border: '1px solid var(--border-color)' }} />
              <div className="brand-color-info">
                <h4>PBI White</h4>
                <p>#FFFFFF</p>
                <p style={{ marginTop: '4px' }}>{t('brand.whiteDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logo Usage Guidelines ── */}
      <section className="section-ed" style={{ background: 'var(--bg-light-gray)' }} data-aos="fade-up">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 04 / Usage</div>
            <h2 className="section-title-ed">{t('brand.usageTitle')}</h2>
            <div className="section-meta">Guidelines</div>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
              {t('brand.usageDesc')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {/* Minimum Size */}
              <div
                style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div style={{ marginBottom: '1rem' }}>
                  <img src={images.logo} alt="Min size" style={{ width: '40px', height: 'auto' }} />
                </div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Minimum Size
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>40px width</p>
              </div>

              {/* Clear Space */}
              <div
                style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div style={{ marginBottom: '1rem', border: '2px dashed var(--border-color)', borderRadius: '8px', padding: '12px', display: 'inline-block' }}>
                  <img src={images.logo} alt="Clear space" style={{ width: '60px', height: 'auto' }} />
                </div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Clear Space
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>1x logo height</p>
              </div>

              {/* Dark Background */}
              <div
                style={{
                  background: '#111827',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '2rem',
                  textAlign: 'center',
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div style={{ marginBottom: '1rem' }}>
                  <img src={images.logo} alt="Dark bg" style={{ width: '60px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
                </div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                  Dark Background
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Inverted logo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
