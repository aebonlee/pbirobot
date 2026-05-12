import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import site from '../../config/site';
import type { ReactElement, ChangeEvent } from 'react';

const Footer = (): ReactElement => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-mark">{site.name}</div>
            <p className="footer-tag">
              {t('footer.tagline')}.
              DreamIT Biz Group이 운영합니다.
            </p>
            <div className="company-info">
              <p><strong>{site.company.name}</strong></p>
              <p>대표이사: {site.company.ceo}</p>
              <p>사업자등록번호: {site.company.bizNumber}</p>
            </div>
          </div>
          <div>
            <h5>{t('footer.quickLinks')}</h5>
            <ul>
              {site.footerLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.path}>{t(link.labelKey)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>패밀리</h5>
            <ul>
              <li><a href={site.parentSite.url} target="_blank" rel="noopener noreferrer">{site.parentSite.name}</a></li>
              {site.familySites.map((s, i) => (
                <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>문의</h5>
            <ul>
              <li>{site.company.email}</li>
              <li>{site.company.phone}</li>
              {site.company.businessHours && <li className="footer-muted">{site.company.businessHours}</li>}
            </ul>
            <div className="footer-family">
              <select
                defaultValue=""
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  if (e.target.value) window.open(e.target.value, '_blank');
                  e.target.value = '';
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value={site.parentSite.url}>{site.parentSite.name} (본사이트)</option>
                {site.familySites.map((s, i) => (
                  <option key={i} value={s.url}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2025 &mdash; {new Date().getFullYear()} PBI Robot &middot; All rights reserved</span>
          <span className="footer-version">v.2026.05 &middot; Editorial</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
