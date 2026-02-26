# PBI Robot 웹사이트 리뉴얼 계획

## Context
PBI Robot(주식회사 피비아이)의 기존 Odoo 기반 웹사이트를 Next.js 기반 현대적 웹사이트로 리뉴얼.
로봇 수영장 청소기(AquaSense 2 Pro/Ultra)를 판매하는 기업으로, 테크/프리미엄 이미지의 다국어(한/영) 사이트 + 온라인 스토어 구축.

---

## 기술 스택
- **Framework**: Next.js 16 (App Router, TypeScript, Turbopack)
- **Styling**: Tailwind CSS v4 + Framer Motion (애니메이션)
- **i18n**: next-intl v4 (한국어 기본, 영어 전환, localePrefix: 'as-needed')
- **State**: Zustand (장바구니, localStorage persist)
- **Payment**: Toss Payments SDK v2 (예정)
- **Forms**: react-hook-form + zod
- **Email**: Resend API (예정)
- **Icons**: lucide-react
- **Deploy**: Vercel (자동 배포)

## 디자인 컨셉
- **화이트/라이트 테마** - 기업 아이덴티티 반영
- 배경: #ffffff(페이지) / #f7f8fa(섹션) / #ffffff(카드)
- 텍스트: #111827(제목), #4b5563(본문), #9ca3af(부가)
- 강조: #0056b3(Primary), #0078d4(Accent)
- 폰트: Pretendard (CDN)

---

## 구현 순서 (4단계)

### Phase 1: 기초 + 정적 페이지 [완료]
- Next.js 프로젝트 초기화 + 의존성 설치
- Tailwind v4 설정 (@theme inline 커스텀 컬러)
- next-intl i18n 설정 + middleware
- 레이아웃 (Header, Footer, MobileNav, LocaleSwitcher)
- UI 컴포넌트 (Button, Card, Accordion, Input)
- 공유 컴포넌트 (SectionTitle, ScrollReveal, ProductImage)
- 홈 페이지, 회사소개, 연혁, FAQ, 문의 페이지

### Phase 2: 제품 + 콘텐츠 [완료]
- 제품 데이터 모델링, 제품 목록/상세/비교 페이지
- 블로그 목록 (6개 포스트, 카테고리별 컬러/아이콘)
- 견적 요청 폼 (react-hook-form + zod)
- SEO generateMetadata 모든 페이지 적용

### Phase 3: 스토어 + 이미지 [완료]
- Zustand 장바구니 구현 (localStorage persist)
- 스토어 목록 + 장바구니 페이지
- 실제 제품 이미지 적용 (9장 webp)
- 제품 상세 갤러리 + 썸네일 선택 기능
- Next.js Image 최적화 적용

### Phase 4: 배포 + 마무리 [완료]
- GitHub Pages → Vercel 배포 전환
- middleware 복원 (clean URL: /about, /en/about)
- Framer Motion ScrollReveal 애니메이션
- 히어로 타이틀 반응형 조정

---

## 남은 작업 (향후)
- [ ] Toss Payments 결제 연동
- [ ] Resend API 이메일 발송 (문의/견적 폼)
- [ ] 블로그 MDX 콘텐츠 시스템
- [ ] Kakao Maps 연동 (문의 페이지)
- [ ] Lighthouse 최적화
- [ ] 커스텀 도메인 연결
