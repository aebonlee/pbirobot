import type { ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogPost {
  slug: string;
  title: { ko: string; en: string };
  excerpt: { ko: string; en: string };
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'aquasense-2-launch',
    title: {
      ko: 'AquaSense 2 시리즈 공식 출시',
      en: 'AquaSense 2 Series Official Launch',
    },
    excerpt: {
      ko: '차세대 AI 수영장 청소 로봇 AquaSense 2 Pro와 Ultra가 공식 출시되었습니다. 혁신적인 3D 매핑 내비게이션과 수질 모니터링 기능을 만나보세요.',
      en: 'The next-generation AI pool cleaning robots AquaSense 2 Pro and Ultra have been officially launched. Experience innovative 3D mapping navigation and water quality monitoring.',
    },
    date: '2025-03-15',
    readTime: '5 min',
    category: 'news',
  },
  {
    slug: 'ai-navigation-technology',
    title: {
      ko: 'AI 내비게이션 기술의 비밀',
      en: 'The Secret Behind AI Navigation Technology',
    },
    excerpt: {
      ko: 'PBI Robot의 특허 기술인 AI 기반 3D 매핑 내비게이션이 어떻게 수영장을 효율적으로 청소하는지 알아봅니다.',
      en: 'Discover how PBI Robot\'s patented AI-based 3D mapping navigation efficiently cleans your pool.',
    },
    date: '2025-02-28',
    readTime: '7 min',
    category: 'tech',
  },
  {
    slug: 'pool-maintenance-tips',
    title: {
      ko: '수영장 관리 팁 5가지',
      en: '5 Pool Maintenance Tips',
    },
    excerpt: {
      ko: '수영장을 깨끗하고 안전하게 유지하기 위한 전문가의 필수 관리 팁을 소개합니다. 로봇 청소기와 함께 더 쉽게 관리하세요.',
      en: 'Expert essential maintenance tips to keep your pool clean and safe. Make it easier with a robotic cleaner.',
    },
    date: '2025-02-10',
    readTime: '4 min',
    category: 'tips',
  },
  {
    slug: 'ces-2025-exhibition',
    title: {
      ko: 'CES 2025 전시회 참가 후기',
      en: 'CES 2025 Exhibition Recap',
    },
    excerpt: {
      ko: 'CES 2025에서 AquaSense 2 시리즈를 선보이며 글로벌 시장의 뜨거운 관심을 받았습니다. 현장 분위기를 전해드립니다.',
      en: 'We showcased the AquaSense 2 series at CES 2025, receiving tremendous interest from the global market.',
    },
    date: '2025-01-20',
    readTime: '6 min',
    category: 'events',
  },
  {
    slug: 'water-quality-monitoring',
    title: {
      ko: '실시간 수질 모니터링의 중요성',
      en: 'The Importance of Real-Time Water Quality Monitoring',
    },
    excerpt: {
      ko: '수영장 수질 관리가 왜 중요한지, AquaSense 2 Ultra의 실시간 수질 모니터링 센서가 어떻게 도움이 되는지 알아봅니다.',
      en: 'Learn why pool water quality management matters and how AquaSense 2 Ultra\'s real-time sensors help.',
    },
    date: '2024-12-15',
    readTime: '5 min',
    category: 'tech',
  },
  {
    slug: 'commercial-pool-solutions',
    title: {
      ko: '상업용 수영장 솔루션 가이드',
      en: 'Commercial Pool Solutions Guide',
    },
    excerpt: {
      ko: '대형 상업용 수영장에 최적화된 자동화 청소 솔루션을 소개합니다. 비용 절감과 효율적인 관리 방법을 확인하세요.',
      en: 'Introducing automated cleaning solutions optimized for large commercial pools. Check out cost savings and efficient management methods.',
    },
    date: '2024-11-28',
    readTime: '6 min',
    category: 'tips',
  },
];

const categoryColors: Record<string, string> = {
  news: '#0056B3',
  tech: '#00855A',
  tips: '#C87200',
  events: '#8B1AC8',
};

const Blog = (): ReactElement => {
  const { t, language } = useLanguage();

  const formatDate = (dateStr: string): string => {
    const d = new Date(dateStr);
    if (language === 'ko') {
      return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
    }
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getCategoryLabel = (category: string): string => {
    const key = `blog.categories.${category}`;
    const val = t(key);
    return val === key ? category.charAt(0).toUpperCase() + category.slice(1) : val;
  };

  return (
    <>
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <h2 data-aos="fade-up">{t('blog.title')}</h2>
          <p data-aos="fade-up" data-aos-delay="100">{t('blog.subtitle')}</p>
        </div>
      </section>

      {/* ── Blog Grid ── */}
      <section className="section-ed" data-aos="fade-up">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div
                className="blog-card"
                key={post.slug}
                data-aos="fade-up"
                data-aos-delay={String(index * 80)}
              >
                <div
                  className="blog-card-header"
                  style={{
                    height: '180px',
                    background: `linear-gradient(135deg, ${categoryColors[post.category] || '#1B2A4A'}, ${categoryColors[post.category] || '#1B2A4A'}cc)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '4px 14px',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: 'rgba(255,255,255,0.2)',
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {getCategoryLabel(post.category)}
                  </span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{post.title[language]}</h3>
                  <p className="blog-card-excerpt">{post.excerpt[language]}</p>
                  <div className="blog-card-meta">
                    <span>{formatDate(post.date)}</span>
                    <span>&middot;</span>
                    <span>{post.readTime} {language === 'ko' ? '읽기' : 'read'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
