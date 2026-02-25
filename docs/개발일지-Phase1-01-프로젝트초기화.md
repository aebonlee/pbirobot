# 개발일지 - Phase 1~2: 프로젝트 초기화 및 전체 구조 구축

**날짜**: 2026-02-26
**Phase**: 1~2 (기초 + 정적 페이지 + 제품/콘텐츠)

---

## 완료 항목

### 프로젝트 초기화
- Next.js 16 (App Router, TypeScript) 프로젝트 생성
- Tailwind CSS v4 + 커스텀 디자인 토큰 설정
- 의존성: framer-motion, next-intl, zustand, react-hook-form, zod, lucide-react, clsx, tailwind-merge

### i18n 설정 (next-intl)
- `localePrefix: 'as-needed'` 설정 (한국어: `/about`, 영어: `/en/about`)
- 미들웨어 설정 완료
- 한/영 번역 파일 (messages/ko.json, messages/en.json)

### 레이아웃 컴포넌트
- **Header**: 반응형 네비게이션, 스크롤 시 배경 변경, 모바일 메뉴
- **Footer**: 회사정보, 링크 그룹, 저작권
- **LocaleSwitcher**: 한/영 전환 버튼

### UI 컴포넌트
- Button (4 variants), Card, Accordion, Input, Textarea
- SectionTitle, ScrollReveal (Framer Motion)

### 페이지 구현
| 페이지 | 경로 | 구성 |
|---|---|---|
| 홈 | `/` | Hero, 제품 쇼케이스, 기업 하이라이트, CTA |
| 회사소개 | `/about` | 비전, 3대 가치, 인증 배지 |
| 연혁 | `/about/journey` | 타임라인 (2019~2025) |
| 제품 목록 | `/products` | 제품 카드 + 비교 테이블 |
| 제품 상세 | `/products/[slug]` | 갤러리, 기능, 스펙 |
| 스토어 | `/store` | 제품 카드 + 장바구니 담기 |
| 장바구니 | `/store/cart` | 수량 조절, 합계 |
| 블로그 | `/blog` | 목록 (4개 포스트) |
| FAQ | `/faq` | 카테고리별 아코디언 (10개) |
| 문의 | `/contact` | 폼 + 회사정보 + 지도 |
| 견적 요청 | `/quote` | 다단계 폼 |

### 데이터 모델링
- 제품: AquaSense 2 Pro/Ultra (TypeScript 타입 + 정적 데이터)
- FAQ: 4 카테고리, 10개 항목
- 연혁: 7개 이벤트 (2019~2025)

### 상태 관리
- Zustand 장바구니 (localStorage persist)

### API 라우트
- `POST /api/contact` - 문의 접수
- `POST /api/quote` - 견적 요청

---

## 기술 결정사항
- Tailwind v4 `@theme inline` 방식으로 커스텀 컬러 정의
- `<html class="dark">` 상시 적용 (다크모드 고정)
- Pretendard CDN으로 한국어 폰트 로딩
- next-intl v4 비동기 params 패턴 적용

## 다음 단계
- 빌드 검증 및 오류 수정
- Toss Payments 결제 연동
- MDX 블로그 시스템
- Vercel 배포
