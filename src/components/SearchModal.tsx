import { useState, useEffect, useRef, type ReactElement, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: string;
  title: string;
  path: string;
  description?: string;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps): ReactElement | null => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const doSearch = (q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const lower = q.toLowerCase();
    const found: SearchResult[] = [];

    // Search products
    products.forEach(p => {
      const name = p.name[language].toLowerCase();
      const tagline = p.tagline[language].toLowerCase();
      const desc = p.description[language].toLowerCase();
      if (name.includes(lower) || tagline.includes(lower) || desc.includes(lower)) {
        found.push({
          type: language === 'ko' ? '제품' : 'Product',
          title: p.name[language],
          path: `/products/${p.slug}`,
          description: p.tagline[language]
        });
      }
    });

    // Search pages
    const pages = [
      { title: language === 'ko' ? '제품 목록' : 'Products', path: '/products', keywords: 'product 제품 aquasense' },
      { title: language === 'ko' ? '스토어' : 'Store', path: '/store', keywords: 'store 스토어 구매 buy' },
      { title: language === 'ko' ? '회사 소개' : 'About', path: '/about', keywords: 'about 회사 소개 company' },
      { title: language === 'ko' ? '연혁' : 'Journey', path: '/about/journey', keywords: 'journey 연혁 history' },
      { title: language === 'ko' ? '브랜드' : 'Brand', path: '/about/brand', keywords: 'brand 브랜드 로고 logo' },
      { title: language === 'ko' ? '블로그' : 'Blog', path: '/blog', keywords: 'blog 블로그 news' },
      { title: 'FAQ', path: '/faq', keywords: 'faq 질문 question' },
      { title: language === 'ko' ? '문의' : 'Contact', path: '/contact', keywords: 'contact 문의 연락' },
      { title: language === 'ko' ? '견적 요청' : 'Quote', path: '/quote', keywords: 'quote 견적 estimate' },
    ];

    pages.forEach(p => {
      if (p.title.toLowerCase().includes(lower) || p.keywords.includes(lower)) {
        found.push({ type: language === 'ko' ? '페이지' : 'Page', title: p.title, path: p.path });
      }
    });

    setResults(found);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    doSearch(val);
  };

  const handleNavigate = (path: string) => {
    onClose();
    navigate(path);
  };

  const hasQuery = query.trim().length > 0;

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-modal-header">
          <div className="search-input-wrapper">
            <svg className="search-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="search-input"
              placeholder={t('search.placeholder')}
              value={query}
              onChange={handleChange}
            />
            <button className="search-close-btn" onClick={onClose}>ESC</button>
          </div>
        </div>

        <div className="search-modal-body">
          {!hasQuery && (
            <div className="search-hint">{t('search.hint')}</div>
          )}

          {hasQuery && results.length === 0 && (
            <div className="search-empty">{t('search.noResults')}</div>
          )}

          {results.length > 0 && (
            <div className="search-group">
              {results.map((item, i) => (
                <button
                  key={i}
                  className="search-result-item"
                  onClick={() => handleNavigate(item.path)}
                >
                  <span className="search-result-type">{item.type}</span>
                  <div className="search-result-info">
                    <span className="search-result-title">{item.title}</span>
                    {item.description && (
                      <span className="search-result-meta">{item.description}</span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
