import { useState, type ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { faqData } from '../data/faq';

const categories = ['product', 'purchase', 'warranty', 'usage'] as const;

const FAQ = (): ReactElement => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('product');
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredFAQs = faqData.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <h2 data-aos="fade-up">{t('faq.title')}</h2>
          <p data-aos="fade-up" data-aos-delay="100">{t('faq.subtitle')}</p>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="section-ed" data-aos="fade-up">
        <div className="container">
          <div className="faq-section">
            {/* Category Tabs */}
            <div className="faq-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`faq-tab${activeCategory === cat ? ' active' : ''}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIds(new Set());
                  }}
                >
                  {t(`faq.categories.${cat}`)}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="faq-list">
              {filteredFAQs.map((item, index) => (
                <div
                  className={`faq-item${openIds.has(item.id) ? ' open' : ''}`}
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={String(index * 60)}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleItem(item.id)}
                  >
                    <span>{item.question[language]}</span>
                    <svg className="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className="faq-answer">
                    <p>{item.answer[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
