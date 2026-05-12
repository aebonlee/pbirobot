import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';
import { productImages } from '../lib/images';
import type { ReactElement } from 'react';

const formatPrice = (price: number | null, locale: string): string => {
  if (price === null) return locale === 'ko' ? '문의' : 'Contact';
  return locale === 'ko' ? `${price.toLocaleString()}원` : `$${price.toLocaleString()}`;
};

const Home = (): ReactElement => {
  const { t, language } = useLanguage();

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-editorial">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">
                <span>PBI ROBOT / {language === 'ko' ? 'AI 수영장 청소 로봇' : 'AI Pool Cleaning Robot'}</span>
              </div>
              <h1 className="hero-title-ed">
                {t('home.hero.subtitle')}<br />
                <span className="accent">{t('home.hero.title')}</span>
              </h1>
              <p className="hero-lead">
                {t('home.hero.description')}
              </p>
              <div className="hero-actions-ed">
                <Link className="btn btn-primary" to="/products">
                  {t('home.hero.cta')}
                  <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
                <Link className="btn btn-ghost" to="/quote">
                  {t('home.hero.ctaSecondary')}
                </Link>
              </div>
            </div>

            <div className="hero-side">
              <div className="metric-stack">
                <div className="metric">
                  <div className="metric-num"><span className="accent">40</span><span className="small">%</span></div>
                  <div className="metric-label">{language === 'ko' ? '에너지 절감' : 'Energy Savings'}</div>
                </div>
                <div className="metric">
                  <div className="metric-num">15<span className="small">+</span></div>
                  <div className="metric-label">{language === 'ko' ? '수출 국가' : 'Export Countries'}</div>
                </div>
                <div className="metric">
                  <div className="metric-num"><span className="accent">15</span><span className="small">%</span></div>
                  <div className="metric-label">{language === 'ko' ? 'R&D 투자' : 'R&D Investment'}</div>
                </div>
                <div className="metric">
                  <div className="metric-num">99.7<span className="small">%</span></div>
                  <div className="metric-label">{language === 'ko' ? '청소율' : 'Cleaning Rate'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Showcase ── */}
      <section className="section-ed" id="products" data-aos="fade-up">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 01 / Products</div>
            <h2 className="section-title-ed">
              {t('home.showcase.title')}
            </h2>
            <div className="section-meta">{t('home.showcase.description')}</div>
          </div>
          <div className="showcase-grid">
            {products.map((product) => {
              const imgs = productImages[product.slug as keyof typeof productImages];
              const mainImg = imgs ? imgs[0] : product.images[0];
              return (
                <Link
                  to={`/products/${product.slug}`}
                  className="showcase-card"
                  key={product.id}
                  data-aos="fade-up"
                >
                  <img
                    className="showcase-card-image"
                    src={mainImg}
                    alt={product.name[language]}
                    loading="lazy"
                  />
                  <div className="showcase-card-body">
                    {product.badge && (
                      <span className={`product-badge${product.badge === 'PREMIUM' ? ' premium' : ''}`} style={{ marginBottom: '0.75rem', display: 'inline-block' }}>
                        {product.badge}
                      </span>
                    )}
                    <h3>{product.name[language]}</h3>
                    <p>{product.tagline[language]}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="product-price-tag" style={{ fontSize: '1.4rem' }}>
                        {formatPrice(language === 'ko' ? product.price.krw : product.price.usd, language)}
                      </span>
                      <span className="btn btn-ghost" style={{ padding: '8px 16px', fontSize: '13px' }}>
                        {t('home.showcase.subtitle')}
                        <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Company Highlights ── */}
      <section className="section-ed" id="highlights" data-aos="fade-up">
        <div className="container">
          <div className="section-head">
            <div className="section-num">&mdash; 02 / Highlights</div>
            <h2 className="section-title-ed">
              {t('home.highlights.title')}
            </h2>
            <div className="section-meta">{t('home.highlights.subtitle')}</div>
          </div>
          <div className="pillars">
            {/* Efficiency */}
            <div className="pillar" data-aos="fade-up">
              <div className="pillar-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                /01
              </div>
              <h4>{t('home.highlights.efficiency.title')}</h4>
              <p>{t('home.highlights.efficiency.description')}</p>
            </div>

            {/* Global */}
            <div className="pillar" data-aos="fade-up">
              <div className="pillar-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                /02
              </div>
              <h4>{t('home.highlights.global.title')}</h4>
              <p>{t('home.highlights.global.description')}</p>
            </div>

            {/* Innovation */}
            <div className="pillar" data-aos="fade-up">
              <div className="pillar-num" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                /03
              </div>
              <h4>{t('home.highlights.innovation.title')}</h4>
              <p>{t('home.highlights.innovation.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-ed" data-aos="fade-up">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="cta-eyebrow">&mdash; {language === 'ko' ? '문의하기' : 'Contact Us'}</div>
              <h2 className="cta-title-ed">
                {t('home.cta.title')}
              </h2>
            </div>
            <div className="cta-side">
              <p>{t('home.cta.description')}</p>
              <Link className="btn btn-cta" to="/quote">
                {t('home.cta.button')}
                <svg className="btn-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
