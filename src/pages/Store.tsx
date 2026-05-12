import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCartStore } from '../store/cart-store';
import { products } from '../data/products';
import { productImages } from '../lib/images';

const formatPrice = (price: number | null, locale: string): string => {
  if (price === null) return locale === 'ko' ? '문의' : 'Contact';
  return locale === 'ko' ? `${price.toLocaleString()}원` : `$${price.toLocaleString()}`;
};

const Store = (): ReactElement => {
  const { t, language } = useLanguage();
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    const price = language === 'ko' ? product.price.krw : product.price.usd;
    if (price === null) return;
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name[language],
      price,
      image: product.images[0] || '',
    });
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('store.title')}</h1>
          <p>{t('store.subtitle')}</p>
        </div>
      </section>

      <section className="shop-section">
        <div className="container">
          <div className="shop-grid">
            {products.map((product) => {
              const imgs = productImages[product.slug as keyof typeof productImages];
              const price = language === 'ko' ? product.price.krw : product.price.usd;

              return (
                <div key={product.id} className="product-card">
                  <div className="product-thumbnail">
                    {imgs && imgs[0] ? (
                      <img
                        src={imgs[0]}
                        alt={product.name[language]}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    )}
                    {product.badge && (
                      <span className="badge" style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        fontSize: '11px',
                        fontWeight: 700,
                        background: 'var(--primary-blue)',
                        color: 'white',
                      }}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="product-info">
                    <h3 className="product-title">{product.name[language]}</h3>
                    <p className="product-description">{product.tagline[language]}</p>
                    <div className="product-bottom">
                      <span className="product-price">{formatPrice(price, language)}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                      {price !== null ? (
                        <button
                          className="add-to-cart-btn"
                          onClick={() => handleAddToCart(product.id)}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            style={{ width: '16px', height: '16px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                          </svg>
                          {t('common.addToCart')}
                        </button>
                      ) : (
                        <Link to="/contact" className="add-to-cart-btn" style={{ textDecoration: 'none' }}>
                          {language === 'ko' ? '문의하기' : 'Contact Us'}
                        </Link>
                      )}
                      <Link
                        to={`/products/${product.slug}`}
                        className="btn btn-ghost"
                        style={{ fontSize: '13px', padding: '8px 16px' }}
                      >
                        {t('common.learnMore')}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
