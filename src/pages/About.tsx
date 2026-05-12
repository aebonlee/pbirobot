import type { ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = (): ReactElement => {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <h2 data-aos="fade-up">{t('about.hero.title')}</h2>
          <p data-aos="fade-up" data-aos-delay="100">{t('about.hero.subtitle')}</p>
        </div>
      </section>

      {/* ── Vision Section ── */}
      <section className="section-ed" data-aos="fade-up">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 01 / Vision</div>
            <h2 className="section-title-ed">{t('about.vision.title')}</h2>
            <div className="section-meta">PBI Robot</div>
          </div>
          <div
            style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '3rem',
              borderTop: '4px solid var(--gold)',
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              {t('about.vision.description')}
            </p>
          </div>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section className="section-ed" style={{ background: 'var(--bg-light-gray)' }} data-aos="fade-up">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 02 / Values</div>
            <h2 className="section-title-ed">{t('about.values.title')}</h2>
            <div className="section-meta">Core Values</div>
          </div>
          <div className="values-grid">
            {/* Efficiency */}
            <div className="value-card" data-aos="fade-up" data-aos-delay="0">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3>{t('about.values.efficiency.title')}</h3>
              <p>{t('about.values.efficiency.description')}</p>
            </div>

            {/* Global */}
            <div className="value-card" data-aos="fade-up" data-aos-delay="100">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>{t('about.values.global.title')}</h3>
              <p>{t('about.values.global.description')}</p>
            </div>

            {/* Innovation */}
            <div className="value-card" data-aos="fade-up" data-aos-delay="200">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5C8.35 12.26 8.82 13.02 9 14" />
                </svg>
              </div>
              <h3>{t('about.values.innovation.title')}</h3>
              <p>{t('about.values.innovation.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications Section ── */}
      <section className="section-ed" data-aos="fade-up">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 03 / Certifications</div>
            <h2 className="section-title-ed">{t('about.certifications.title')}</h2>
            <div className="section-meta">{t('about.certifications.description')}</div>
          </div>
          <div className="cert-grid">
            {/* CE */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay="0">
              <div className="cert-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                  <text x="24" y="28" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="700">CE</text>
                </svg>
              </div>
              <h4>CE</h4>
              <p>European Conformity</p>
            </div>

            {/* FCC */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay="50">
              <div className="cert-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                  <text x="24" y="28" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="700">FCC</text>
                </svg>
              </div>
              <h4>FCC</h4>
              <p>Federal Communications Commission</p>
            </div>

            {/* KC */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay="100">
              <div className="cert-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                  <text x="24" y="28" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="700">KC</text>
                </svg>
              </div>
              <h4>KC</h4>
              <p>Korea Certification</p>
            </div>

            {/* Inno-Biz */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay="150">
              <div className="cert-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                  <path d="M24 14l2.5 5.5L32 20l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" fill="currentColor" />
                </svg>
              </div>
              <h4>Inno-Biz</h4>
              <p>Technology Innovation SME</p>
            </div>

            {/* ISO 9001 */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay="200">
              <div className="cert-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                  <text x="24" y="22" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="700">ISO</text>
                  <text x="24" y="32" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="700">9001</text>
                </svg>
              </div>
              <h4>ISO 9001</h4>
              <p>Quality Management System</p>
            </div>

            {/* IP68 */}
            <div className="cert-card" data-aos="fade-up" data-aos-delay="250">
              <div className="cert-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
                  <text x="24" y="28" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="700">IP68</text>
                </svg>
              </div>
              <h4>IP68</h4>
              <p>Dust &amp; Water Protection</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
