# PBI Robot 웹사이트 리뉴얼 계획

## Context
PBI Robot(주식회사 피비아이)의 기존 Odoo 기반 웹사이트를 Next.js 기반 현대적 웹사이트로 리뉴얼.
로봇 수영장 청소기(AquaSense 2 Pro/Ultra)를 판매하는 기업으로, 테크/프리미엄 이미지의 다국어(한/영) 사이트 + 온라인 스토어 구축.

---

## 기술 스택
- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS + Framer Motion (애니메이션)
- **i18n**: next-intl (한국어 기본, 영어 전환)
- **State**: Zustand (장바구니, UI 상태)
- **Payment**: Toss Payments SDK v2
- **Forms**: react-hook-form + zod
- **Blog**: MDX (파일 기반)
- **Email**: Resend API
- **Maps**: Kakao Maps SDK
- **Icons**: lucide-react
- **Deploy**: Vercel

## 디자인 컨셉
- **다크 톤 기반** + 블루 액센트 (#0056b3)
- 배경: #141416(페이지) / #1c1c1e(섹션) / #363638(카드)
- 텍스트: white(제목), #c7c7cc(본문)
- 강조: #0056b3(CTA), #00d4ff(하이라이트)
- 폰트: Pretendard(한국어) + Inter(영어)

---

## 구현 순서 (4단계)

### Phase 1: 기초 + 정적 페이지 [완료]
- Next.js 프로젝트 초기화 + 의존성 설치
- Tailwind 설정 (커스텀 컬러, 폰트, 컨테이너)
- next-intl i18n 설정 + 미들웨어
- 레이아웃 (Header, Footer, MobileNav, LocaleSwitcher)
- UI 컴포넌트 (Button, Card, Accordion, Input 등)
- 공유 컴포넌트 (SectionTitle, ScrollReveal)
- 홈 페이지, 회사소개, 연혁, FAQ, 문의 페이지

### Phase 2: 제품 + 콘텐츠 [완료]
- 제품 데이터 모델링, 제품 목록/상세/비교 페이지
- 블로그 목록 (정적 데이터 기반)
- 견적 요청 폼
- API 라우트 (문의, 견적)
- SEO 메타데이터

### Phase 3: 스토어 + 결제 [진행중]
- Zustand 장바구니 구현 완료
- 스토어 목록 + 장바구니 페이지 완료
- Toss Payments 연동 예정

### Phase 4: 마무리 + 배포 [예정]
- Framer Motion 애니메이션
- Lighthouse 최적화
- Vercel 배포
