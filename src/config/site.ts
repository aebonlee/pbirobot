/**
 * PBI Robot 사이트 설정 (v6 template 기반)
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'pbirobot',

  name: 'PBI Robot',
  nameKo: 'PBI 로봇',
  description: 'AI 기반 로봇 수영장 청소기 - AquaSense 시리즈',
  url: 'https://pbirobot.dreamitbiz.com',

  dbPrefix: 'pbi_',

  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  brand: {
    parts: [
      { text: 'PBI', className: 'brand-dream' },
      { text: ' Robot', className: 'brand-it' },
    ]
  },

  themeColor: '#1B2A4A',

  company: {
    name: '주식회사 피비아이',
    ceo: '대표이사',
    bizNumber: '000-00-00000',
    address: '충남 아산시 배방읍 호서로 79번길 20, 호서대학교 벤처창업기업관 212호',
    email: 'pbi240426@gmail.com',
    phone: '010-9975-2648',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: {
    shop: true,
    community: false,
    search: true,
    auth: true,
    license: false,
  },

  colors: [
    { name: 'blue', color: '#1B2A4A' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#5B2C8B' },
    { name: 'orange', color: '#D4760A' },
  ],

  menuItems: [
    { path: '/products', labelKey: 'nav.products', activePath: '/products' },
    { path: '/store', labelKey: 'nav.store', activePath: '/store' },
    {
      labelKey: 'nav.about',
      path: '/about',
      activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: 'nav.aboutCompany' },
        { path: '/about/journey', labelKey: 'nav.journey' },
        { path: '/about/brand', labelKey: 'nav.brand' },
      ]
    },
    { path: '/blog', labelKey: 'nav.blog', activePath: '/blog' },
    { path: '/faq', labelKey: 'nav.faq', activePath: '/faq' },
    { path: '/contact', labelKey: 'nav.contact', activePath: '/contact' },
    { path: '/quote', labelKey: 'nav.quote', activePath: '/quote' },
  ],

  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/products', labelKey: 'nav.products' },
    { path: '/store', labelKey: 'nav.store' },
    { path: '/about', labelKey: 'nav.about' },
    { path: '/faq', labelKey: 'nav.faq' },
    { path: '/contact', labelKey: 'nav.contact' },
  ],

  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'AI 프롬프트 교육', url: 'https://ai-prompt.dreamitbiz.com' },
  ]
};

export default site;
