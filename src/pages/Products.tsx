import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';
import { productImages } from '../lib/images';

const formatPrice = (price: number | null, locale: string): string => {
  if (price === null) return locale === 'ko' ? '문의' : 'Contact';
  return locale === 'ko' ? `${price.toLocaleString()}원` : `$${price.toLocaleString()}`;
};

const Products = (): ReactElement => {
  const { t, language } = useLanguage();
  const lang = language as 'ko' | 'en';

  const comparisonRows = [
    {
      label: { ko: '가격', en: 'Price' },
      pro: { ko: '6,000,000원', en: 'Contact' },
      ultra: { ko: '8,000,000원', en: 'Contact' },
      type: 'text' as const,
    },
    {
      label: { ko: '청소 범위', en: 'Coverage' },
      pro: { ko: '최대 150㎡', en: 'Up to 150㎡' },
      ultra: { ko: '최대 300㎡', en: 'Up to 300㎡' },
      type: 'text' as const,
    },
    {
      label: { ko: '청소 시간', en: 'Runtime' },
      pro: { ko: '최대 3시간', en: 'Up to 3 hours' },
      ultra: { ko: '최대 5시간', en: 'Up to 5 hours' },
      type: 'text' as const,
    },
    {
      label: { ko: '필터 용량', en: 'Filter' },
      pro: { ko: '5L', en: '5L' },
      ultra: { ko: '8L', en: '8L' },
      type: 'text' as const,
    },
    {
      label: { ko: 'AI 내비게이션', en: 'AI Navigation' },
      pro: true,
      ultra: true,
      type: 'bool' as const,
    },
    {
      label: { ko: '앱 제어', en: 'App Control' },
      pro: true,
      ultra: true,
      type: 'bool' as const,
    },
    {
      label: { ko: '수질 모니터링', en: 'Water Quality' },
      pro: false,
      ultra: true,
      type: 'bool' as const,
    },
    {
      label: { ko: 'LTE 연결', en: 'LTE' },
      pro: false,
      ultra: true,
      type: 'bool' as const,
    },
    {
      label: { ko: '멀티 풀 관리', en: 'Multi-Pool' },
      pro: false,
      ultra: true,
      type: 'bool' as const,
    },
    {
      label: { ko: '보증', en: 'Warranty' },
      pro: { ko: '2년', en: '2 Years' },
      ultra: { ko: '3년', en: '3 Years' },
      type: 'text' as const,
    },
  ];

  const CheckSvg = (): ReactElement => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00855A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const CrossSvg = (): ReactElement => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h2>{t('products.title')}</h2>
          <p>{t('products.subtitle')}</p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <span className="section-num">01</span>
            <h2 className="section-title-ed">{t('products.title')}</h2>
            <span className="section-meta">{lang === 'ko' ? '제품 라인업' : 'Product Lineup'}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {products.map((product) => {
              const imgs = productImages[product.slug as keyof typeof productImages];
              const mainImg = imgs?.[0];

              return (
                <div className="product-card" key={product.id} data-aos="fade-up">
                  <div style={{ position: 'relative' }}>
                    <div className="product-thumbnail" style={{ height: '280px', padding: 0 }}>
                      {mainImg ? (
                        <img
                          src={mainImg}
                          alt={product.name[lang]}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      )}
                    </div>
                    {product.badge && (
                      <span
                        className={`product-badge${product.badge === 'PREMIUM' ? ' premium' : ''}`}
                        style={{ position: 'absolute', top: '12px', left: '12px' }}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="product-info">
                    <h3 className="product-title" style={{ fontSize: '20px', fontWeight: 800 }}>
                      {product.name[lang]}
                    </h3>
                    <p className="product-description" style={{ WebkitLineClamp: 3 }}>
                      {product.tagline[lang]}
                    </p>
                    <div className="product-bottom">
                      <span className="product-price">
                        {formatPrice(product.price.krw, lang)}
                      </span>
                      <Link to={`/products/${product.slug}`} className="btn btn-primary">
                        {lang === 'ko' ? '자세히 보기' : 'Learn More'}
                        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-ed" style={{ background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-num">02</span>
            <h2 className="section-title-ed">{t('products.compare')}</h2>
            <span className="section-meta">{lang === 'ko' ? '사양 비교' : 'Spec Comparison'}</span>
          </div>

          <div data-aos="fade-up" style={{ overflowX: 'auto' }}>
            <table className="spec-table" style={{ minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--navy-800)' }}>
                  <td style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', background: 'transparent', width: '30%' }}>
                    {lang === 'ko' ? '사양' : 'Specification'}
                  </td>
                  <td style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary-blue)', textAlign: 'center', background: 'transparent' }}>
                    AquaSense 2 Pro
                  </td>
                  <td style={{ fontWeight: 700, fontSize: '0.95rem', color: '#C87200', textAlign: 'center', background: 'transparent' }}>
                    AquaSense 2 Ultra
                  </td>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600 }}>
                      {row.label[lang]}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {row.type === 'bool' ? (
                        row.pro ? <CheckSvg /> : <CrossSvg />
                      ) : (
                        (row.pro as { ko: string; en: string })[lang]
                      )}
                    </td>
                    <td style={{ textAlign: 'center' }}>
                      {row.type === 'bool' ? (
                        row.ultra ? <CheckSvg /> : <CrossSvg />
                      ) : (
                        (row.ultra as { ko: string; en: string })[lang]
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
