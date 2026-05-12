import type { ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { journeyData } from '../data/journey';

const Journey = (): ReactElement => {
  const { t, language } = useLanguage();

  return (
    <>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <h2 data-aos="fade-up">{t('journey.title')}</h2>
          <p data-aos="fade-up" data-aos-delay="100">{t('journey.subtitle')}</p>
        </div>
      </section>

      {/* ── Timeline Section ── */}
      <section className="section-ed" data-aos="fade-up">
        <div className="container">
          <div className="timeline">
            {journeyData.map((item, index) => (
              <div
                className="timeline-item"
                key={item.year}
                data-aos="fade-up"
                data-aos-delay={String(index * 100)}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title[language]}</h4>
                  <p>{item.description[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Journey;
