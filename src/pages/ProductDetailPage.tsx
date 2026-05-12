import { useState, type ReactElement } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getProductBySlug } from '../data/products';
import { productImages } from '../lib/images';

const formatPrice = (price: number | null, locale: string): string => {
  if (price === null) return locale === 'ko' ? '문의' : 'Contact';
  return locale === 'ko' ? `${price.toLocaleString()}원` : `$${price.toLocaleString()}`;
};

const getFeatureIcon = (iconName: string): ReactElement => {
  switch (iconName) {
    case 'Navigation':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </svg>
      );
    case 'Zap':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'Smartphone':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case 'Battery':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
          <line x1="23" y1="13" x2="23" y2="11" />
          <line x1="6" y1="10" x2="6" y2="14" />
          <line x1="10" y1="10" x2="10" y2="14" />
          <line x1="14" y1="10" x2="14" y2="14" />
        </svg>
      );
    case 'Droplets':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
          <path d="M12.56 14.69c1.34 0 2.44-1.12 2.44-2.48 0-.71-.35-1.38-1.05-1.95S12.78 9.2 12.56 8.3c-.18.89-.7 1.74-1.4 2.3s-1.04 1.17-1.04 1.88c0 1.36 1.1 2.48 2.44 2.48z" />
          <path d="M17 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S17.29 6.75 17 5.3c-.29 1.45-1.14 2.84-2.29 3.76S13 11.1 13 12.25c0 2.22 1.8 4.05 4 4.05z" />
        </svg>
      );
    case 'Building':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="1" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      );
    case 'Shield':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l2 2" />
        </svg>
      );
  }
};

const ProductDetailPage = (): ReactElement => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useLanguage();
  const lang = language as 'ko' | 'en';

  const product = slug ? getProductBySlug(slug) : undefined;

  const imgs = product
    ? (productImages[product.slug as keyof typeof productImages] ?? [])
    : [];
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h2>{product.name[lang]}</h2>
          <p>{product.tagline[lang]}</p>
        </div>
      </section>

      {/* Gallery + Info */}
      <section className="section-ed">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'start',
            }}
            data-aos="fade-up"
          >
            {/* Left: Gallery */}
            <div>
              <div className="gallery-main">
                {imgs.length > 0 ? (
                  <img
                    src={imgs[selectedImage]}
                    alt={`${product.name[lang]} - ${selectedImage + 1}`}
                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-light-gray)' }}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                )}
              </div>
              {imgs.length > 1 && (
                <div className="gallery-thumbs" style={{ flexDirection: 'row', marginTop: '0.75rem' }}>
                  {imgs.map((img, idx) => (
                    <button
                      key={idx}
                      className={`gallery-thumb${idx === selectedImage ? ' active' : ''}`}
                      onClick={() => setSelectedImage(idx)}
                      type="button"
                      aria-label={`${lang === 'ko' ? '이미지' : 'Image'} ${idx + 1}`}
                    >
                      <img src={img} alt={`${product.name[lang]} thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Product Info */}
            <div className="product-info-section">
              {product.badge && (
                <span className={`product-badge${product.badge === 'PREMIUM' ? ' premium' : ''}`}>
                  {product.badge}
                </span>
              )}

              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                {product.name[lang]}
              </h2>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 500 }}>
                {product.tagline[lang]}
              </p>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {product.description[lang]}
              </p>

              <div className="product-price-tag">
                {formatPrice(product.price.krw, lang)}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <Link to="/store" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  {lang === 'ko' ? '구매하기' : 'Buy Now'}
                </Link>
                <Link to="/quote" className="btn btn-ghost">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  {t('products.inquire')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-ed" style={{ background: 'var(--bg-light-gray)' }}>
        <div className="container">
          <div className="section-head">
            <span className="section-num">01</span>
            <h2 className="section-title-ed">{t('products.features')}</h2>
            <span className="section-meta">{lang === 'ko' ? '주요 기능' : 'Key Features'}</span>
          </div>

          <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {product.features.map((feature, idx) => (
              <div className="feature-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="feature-card-icon">
                  {getFeatureIcon(feature.icon)}
                </div>
                <h4>{feature.title[lang]}</h4>
                <p>{feature.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="section-ed">
        <div className="container">
          <div className="section-head">
            <span className="section-num">02</span>
            <h2 className="section-title-ed">{t('products.specs')}</h2>
            <span className="section-meta">{lang === 'ko' ? '상세 사양' : 'Detailed Specs'}</span>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up">
            <table className="spec-table">
              <tbody>
                {product.specs.map((spec, idx) => (
                  <tr key={idx}>
                    <td>{spec.label[lang]}</td>
                    <td>{spec.value[lang]}</td>
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

export default ProductDetailPage;
