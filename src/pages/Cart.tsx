import { useEffect, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCartStore } from '../store/cart-store';

const formatPrice = (price: number | null, locale: string): string => {
  if (price === null) return locale === 'ko' ? '문의' : 'Contact';
  return locale === 'ko' ? `${price.toLocaleString()}원` : `$${price.toLocaleString()}`;
};

const Cart = (): ReactElement => {
  const { t, language } = useLanguage();
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalPrice = getTotalPrice();

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{t('store.cart.title')}</h1>
        </div>
      </section>

      <section className="cart-section">
        <div className="container">
          {items.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="cart-empty-icon">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p>{t('store.cart.empty')}</p>
              <Link to="/store" className="btn btn-primary">{t('store.cart.continueShopping')}</Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.productId} className="cart-item">
                    <div className="cart-item-info">
                      <h4>{item.name}</h4>
                      <span className="cart-item-price">{formatPrice(item.price, language)}</span>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-control">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label="Decrease quantity"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            style={{ width: '14px', height: '14px' }}>
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          disabled={item.quantity >= 99}
                          aria-label="Increase quantity"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            style={{ width: '14px', height: '14px' }}>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                      </div>
                      <span className="cart-item-subtotal">
                        {formatPrice(item.price * item.quantity, language)}
                      </span>
                      <button
                        className="cart-item-remove"
                        onClick={() => removeItem(item.productId)}
                        aria-label="Remove item"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 6h18" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3>{t('store.cart.title')}</h3>
                <div className="cart-summary-row">
                  <span>{t('store.cart.subtotal')}</span>
                  <span>{formatPrice(totalPrice, language)}</span>
                </div>
                <div className="cart-summary-row">
                  <span>{t('store.cart.shipping')}</span>
                  <span>{t('store.cart.shippingFree')}</span>
                </div>
                <div className="cart-summary-total">
                  <span>{t('store.cart.total')}</span>
                  <span>{formatPrice(totalPrice, language)}</span>
                </div>
                <Link to="/checkout" className="btn btn-primary cart-checkout-btn">
                  {t('store.cart.checkout')}
                </Link>
                <Link to="/store" className="cart-continue-link">
                  {t('store.cart.continueShopping')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
