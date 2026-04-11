# PBI Robot - 기술 문서

> **PBI Robot** 웹사이트의 아키텍처, 기술 스택, 프로젝트 구조, 개발/배포 가이드를 정리한 종합 기술 문서입니다.

**최종 업데이트**: 2026-04-11
**사이트 URL**: https://pbirobot.dreamitbiz.com
**저장소**: https://github.com/aebonlee/pbirobot

---

## 목차

1. [프로젝트 개요](#1-프로젝트-개요)
2. [기술 스택](#2-기술-스택)
3. [프로젝트 구조](#3-프로젝트-구조)
4. [아키텍처](#4-아키텍처)
5. [디자인 시스템](#5-디자인-시스템)
6. [다국어(i18n) 시스템](#6-다국어i18n-시스템)
7. [데이터 모델](#7-데이터-모델)
8. [컴포넌트 시스템](#8-컴포넌트-시스템)
9. [상태 관리](#9-상태-관리)
10. [라우팅 및 페이지](#10-라우팅-및-페이지)
11. [SEO](#11-seo)
12. [개발 가이드](#12-개발-가이드)
13. [배포](#13-배포)
14. [향후 계획](#14-향후-계획)

---

## 1. 프로젝트 개요

PBI Robot(주식회사 피비아이)의 AI 로봇 수영장 청소기 **AquaSense 시리즈**를 소개하고 판매하는 웹사이트입니다.

- **제품**: AquaSense 2 Pro (가정용), AquaSense 2 Ultra (상업용)
- **언어**: 한국어(기본), 영어
- **배포**: GitHub Pages (정적 사이트)
- **도메인**: `pbirobot.dreamitbiz.com`

---

## 2. 기술 스택

| 분류 | 기술 | 버전 |
|------|------|------|
| **Framework** | Next.js (App Router) | 16.1.6 |
| **UI** | React | 19.2.3 |
| **언어** | TypeScript | 5.x |
| **스타일링** | Tailwind CSS | 4.x |
| **애니메이션** | Framer Motion | 12.x |
| **다국어** | next-intl | 4.8.x |
| **상태관리** | Zustand | 5.x |
| **폼** | react-hook-form + Zod | 7.x / 4.x |
| **아이콘** | lucide-react | 0.575.x |
| **폰트** | Pretendard (CDN) | 1.3.9 |
| **배포** | GitHub Actions → GitHub Pages | - |

---

## 3. 프로젝트 구조

```
pbirobot/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 배포 워크플로우
├── docs/                       # 개발 문서
├── messages/
│   ├── ko.json                 # 한국어 번역
│   └── en.json                 # 영어 번역
├── public/
│   ├── CNAME                   # 커스텀 도메인 설정
│   ├── robots.txt              # 크롤러 설정
│   └── sitemap.xml             # SEO 사이트맵
├── src/
│   ├── app/                    # Next.js App Router 페이지
│   │   ├── [locale]/           # 로케일별 페이지 (ko, en)
│   │   │   ├── layout.tsx      # 로케일 레이아웃 (HTML 구조)
│   │   │   ├── page.tsx        # 홈 페이지
│   │   │   ├── about/          # 회사소개
│   │   │   │   ├── brand/      # 브랜드
│   │   │   │   └── journey/    # 연혁
│   │   │   ├── blog/           # 블로그
│   │   │   ├── contact/        # 문의
│   │   │   ├── faq/            # FAQ
│   │   │   ├── products/       # 제품 목록
│   │   │   │   └── [slug]/     # 제품 상세
│   │   │   ├── quote/          # 견적 요청
│   │   │   └── store/          # 스토어
│   │   │       └── cart/       # 장바구니
│   │   ├── globals.css         # 글로벌 스타일 + Tailwind 테마
│   │   ├── layout.tsx          # 루트 레이아웃 (pass-through)
│   │   ├── page.tsx            # 루트 → /ko 리다이렉트
│   │   └── not-found.tsx       # 404 페이지
│   ├── components/
│   │   ├── about/              # 회사소개 관련 컴포넌트
│   │   ├── blog/               # 블로그 관련 컴포넌트
│   │   ├── contact/            # 문의 관련 컴포넌트
│   │   ├── faq/                # FAQ 관련 컴포넌트
│   │   ├── home/               # 홈 페이지 컴포넌트
│   │   ├── layout/             # 레이아웃 (Header, Footer, LocaleSwitcher)
│   │   ├── products/           # 제품 관련 컴포넌트
│   │   ├── quote/              # 견적 요청 컴포넌트
│   │   ├── shared/             # 공용 컴포넌트
│   │   ├── store/              # 스토어 컴포넌트
│   │   └── ui/                 # UI 프리미티브 (Button, Card, Input, Accordion)
│   ├── data/                   # 정적 데이터
│   │   ├── products.ts         # 제품 데이터
│   │   ├── faq.ts              # FAQ 데이터
│   │   └── journey.ts          # 연혁 데이터
│   ├── i18n/                   # 다국어 설정
│   │   ├── routing.ts          # 로케일 라우팅 정의
│   │   ├── request.ts          # 서버사이드 메시지 로딩
│   │   └── navigation.ts      # 로케일 인식 네비게이션 유틸리티
│   ├── images/                 # 제품/브랜드 이미지 (.webp)
│   ├── lib/                    # 유틸리티
│   │   ├── constants.ts        # 사이트 설정, 네비게이션, 회사 정보
│   │   ├── images.ts           # 이미지 import 레지스트리
│   │   └── utils.ts            # cn(), formatPrice()
│   ├── store/                  # Zustand 스토어
│   │   └── cart-store.ts       # 장바구니 상태 관리
│   └── types/                  # TypeScript 타입
│       ├── product.ts          # Product, ProductFeature, ProductSpec
│       └── cart.ts             # CartItem, CartState
├── next.config.ts              # Next.js 설정 (정적 export)
├── tsconfig.json               # TypeScript 설정
├── postcss.config.mjs          # PostCSS (Tailwind v4)
└── package.json                # 의존성 및 스크립트
```

---

## 4. 아키텍처

### 4.1 빌드 방식

**정적 사이트 생성 (Static Export)**

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",        // 정적 HTML 빌드
  images: { unoptimized: true },  // GitHub Pages용
};
```

- `npm run build` 실행 시 `out/` 폴더에 30개 HTML 파일 생성
- 서버사이드 기능 미사용 (API Routes, Middleware, ISR 불가)
- `generateStaticParams()`로 모든 동적 라우트 사전 생성

### 4.2 이중 i18n 전략

| 전략 | 대상 | 데이터 소스 |
|------|------|------------|
| **next-intl 메시지** | UI 라벨, 버튼, 네비게이션, 폼 텍스트 | `messages/ko.json`, `messages/en.json` |
| **인라인 이중 언어 객체** | 제품 데이터, FAQ, 연혁 | `{ ko: "...", en: "..." }` 형태 |

UI 텍스트는 `useTranslations()` 훅으로, 제품/FAQ 데이터는 `data[locale]` 방식으로 접근합니다.

### 4.3 컴포넌트 계층

```
UI 프리미티브 (Button, Card, Input, Accordion)
    ↓ 조합
공용 컴포넌트 (SectionTitle, ScrollReveal, ProductImage)
    ↓ 조합
페이지 컴포넌트 (HeroSection, ProductShowcase, FAQContent, ...)
    ↓ 사용
페이지 (app/[locale]/page.tsx, app/[locale]/products/page.tsx, ...)
```

---

## 5. 디자인 시스템

### 5.1 컬러 팔레트

Tailwind CSS v4의 `@theme inline` 지시어로 정의됩니다 (`globals.css`).

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--color-page` | `#ffffff` | 페이지 배경 |
| `--color-section` | `#f7f8fa` | 섹션 배경 |
| `--color-card` | `#ffffff` | 카드 배경 |
| `--color-card-hover` | `#f0f2f5` | 카드 호버 |
| `--color-border` | `#e2e4e8` | 테두리 |
| `--color-primary` | `#0056b3` | 주 강조색 (파란색) |
| `--color-primary-hover` | `#004494` | 주 강조색 호버 |
| `--color-accent` | `#0078d4` | 보조 강조색 |
| `--color-text-primary` | `#111827` | 제목 텍스트 |
| `--color-text-secondary` | `#4b5563` | 본문 텍스트 |
| `--color-text-muted` | `#9ca3af` | 보조 텍스트 |
| `--color-success` | `#16a34a` | 성공 |
| `--color-error` | `#dc2626` | 에러 |
| `--color-warning` | `#d97706` | 경고 |

### 5.2 타이포그래피

```css
--font-sans: "Pretendard", "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

- **Pretendard**: 한국어 최적화 웹폰트 (CDN 동적 서브셋)
- 라이트 테마 전용 (다크 모드 미지원)

### 5.3 커스텀 유틸리티 클래스

| 클래스 | 설명 |
|--------|------|
| `.container-custom` | 반응형 컨테이너 (max-width: 1280px, 반응형 패딩) |
| `.gradient-text` | primary → accent 그라데이션 텍스트 |
| `.gradient-border` | primary → accent 그라데이션 테두리 |

### 5.4 UI 컴포넌트

| 컴포넌트 | 파일 | 설명 |
|----------|------|------|
| `Button` | `ui/Button.tsx` | 4 variants (primary/secondary/outline/ghost), 3 sizes |
| `Card` | `ui/Card.tsx` | hover 효과 옵션, CardHeader/CardContent 포함 |
| `Input` | `ui/Input.tsx` | label/error 지원, Textarea 포함. react-hook-form 호환 |
| `Accordion` | `ui/Accordion.tsx` | 단일 열기 방식, 애니메이션 chevron |

---

## 6. 다국어(i18n) 시스템

### 6.1 설정

```ts
// src/i18n/routing.ts
export const routing = defineRouting({
  locales: ["ko", "en"],
  defaultLocale: "ko",
  localePrefix: "always",  // 모든 URL에 /ko, /en 프리픽스 포함
});
```

### 6.2 URL 구조

| 경로 | 설명 |
|------|------|
| `/` | → `/ko` 리다이렉트 |
| `/ko` | 한국어 홈 |
| `/en` | 영어 홈 |
| `/ko/products` | 한국어 제품 목록 |
| `/en/products/aquasense-2-pro` | 영어 제품 상세 |

### 6.3 번역 파일 구조

`messages/ko.json` 및 `messages/en.json`의 최상위 키:

```
common      - 공통 (회사명, 연락처, 버튼 텍스트)
nav         - 네비게이션 메뉴
home        - 홈 페이지 (hero, showcase, highlights, cta)
about       - 회사소개 (vision, values, certifications)
brand       - 브랜드 소개
journey     - 연혁 제목
products    - 제품 페이지 UI
store       - 스토어/장바구니/결제
blog        - 블로그 UI
faq         - FAQ 카테고리
contact     - 문의 폼/회사 정보
quote       - 견적 요청 폼
footer      - 푸터 섹션 제목
```

### 6.4 사용 방법

**컴포넌트에서 번역 사용:**

```tsx
"use client";
import { useTranslations, useLocale } from "next-intl";

export function MyComponent() {
  const t = useTranslations("products");
  const locale = useLocale() as "ko" | "en";

  return <h1>{t("title")}</h1>;  // "전체 제품" or "All Products"
}
```

**로케일 인식 링크:**

```tsx
import { Link } from "@/i18n/navigation";

// 현재 로케일에 맞게 자동으로 /ko/products 또는 /en/products
<Link href="/products">Products</Link>
```

---

## 7. 데이터 모델

### 7.1 Product

```ts
interface Product {
  id: string;                              // "aquasense-2-pro"
  slug: string;                            // URL 슬러그
  name: { ko: string; en: string };        // 제품명
  tagline: { ko: string; en: string };     // 태그라인
  description: { ko: string; en: string }; // 상세 설명
  price: {
    krw: number;                           // 원화 가격 (예: 6000000)
    usd: number | null;                    // 달러 가격 (null = "문의바람")
  };
  images: string[];                        // 이미지 경로 (현재 미사용*)
  videoUrl?: string;                       // YouTube 임베드 URL
  features: ProductFeature[];              // 주요 기능 목록
  specs: ProductSpec[];                    // 사양 테이블
  badge?: string;                          // "BEST", "PREMIUM"
  inStock: boolean;                        // 재고 상태
}
```

> *\* 실제 이미지 표시는 `src/lib/images.ts`의 `productImages` 사용*

**현재 등록된 제품:**

| 제품 | KRW | USD | Badge |
|------|-----|-----|-------|
| AquaSense 2 Pro | 6,000,000원 | 문의바람 | BEST |
| AquaSense 2 Ultra | 8,000,000원 | 문의바람 | PREMIUM |

### 7.2 CartItem

```ts
interface CartItem {
  productId: string;
  slug: string;
  name: string;       // 현재 로케일 기준 제품명 스냅샷
  price: number;       // 현재 로케일 기준 가격
  quantity: number;
  image: string;
}
```

### 7.3 이미지 관리

제품 이미지는 `src/images/` 폴더에 `.webp` 형식으로 저장되며, `src/lib/images.ts`에서 중앙 관리됩니다.

```ts
// src/lib/images.ts
export const productImages = {
  "aquasense-2-pro": [proBanner, proLifestyle, proCharging],
  "aquasense-2-ultra": [ultraCommercial, ultraWall, ultraAerial],
} as const;
```

| 파일 | 용도 |
|------|------|
| `logo.webp` | 사이트 로고 |
| `pbi_8.webp` | 히어로 배너 |
| `pbi_1~4.webp` | Pro 제품 이미지 |
| `pbi_3,7,9.webp` | Ultra 제품 이미지 |
| `pbi_5,6.webp` | 수중 촬영 디테일 |

---

## 8. 컴포넌트 시스템

### 8.1 공용 컴포넌트

| 컴포넌트 | 파일 | 설명 |
|----------|------|------|
| `SectionTitle` | `shared/SectionTitle.tsx` | 섹션 제목 + 부제목 (서버 컴포넌트) |
| `ScrollReveal` | `shared/ScrollReveal.tsx` | 스크롤 트리거 페이드인 애니메이션 래퍼 |
| `ProductImage` | `shared/ProductImage.tsx` | SVG 기반 제품 일러스트 (애니메이션 포함) |

### 8.2 레이아웃 컴포넌트

| 컴포넌트 | 파일 | 설명 |
|----------|------|------|
| `Header` | `layout/Header.tsx` | 고정 헤더, 스크롤 시 배경 변화, 반응형 모바일 메뉴 |
| `Footer` | `layout/Footer.tsx` | 4열 푸터 (회사정보, 회사 링크, 제품 링크, 지원) |
| `LocaleSwitcher` | `layout/LocaleSwitcher.tsx` | KO/EN 언어 전환 버튼 |

### 8.3 페이지별 컴포넌트

| 페이지 | 컴포넌트 |
|--------|---------|
| 홈 | `HeroSection`, `ProductShowcase`, `CompanyHighlights`, `CTASection` |
| 회사소개 | `VisionSection`, `ValuesSection`, `CertificationBadges` |
| 브랜드 | `BrandContent` |
| 연혁 | `Timeline` |
| 제품 | `ProductList`, `ProductDetail`, `ComparisonTable` |
| 스토어 | `StoreContent`, `CartContent` |
| 블로그 | `BlogList` |
| FAQ | `FAQContent` |
| 문의 | `ContactContent`, `ContactForm`, `CompanyInfoCard` |
| 견적 | `QuoteForm` |

---

## 9. 상태 관리

### 9.1 장바구니 (Zustand)

```ts
// src/store/cart-store.ts
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => { /* 추가 또는 수량 증가 */ },
      removeItem: (productId) => { /* 항목 제거 */ },
      updateQuantity: (productId, quantity) => { /* 수량 변경, 0이면 제거 */ },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => { /* 전체 수량 합계 */ },
      getTotalPrice: () => { /* 전체 금액 합계 */ },
    }),
    { name: "pbi-cart" }  // localStorage 키
  )
);
```

**특징:**
- `zustand/middleware/persist`로 `localStorage`에 자동 저장
- 동일 제품 추가 시 수량만 +1 증가
- `updateQuantity(id, 0)` 호출 시 자동 제거
- USD 가격이 `null`인 제품은 장바구니 추가 불가 (영어 로케일)

---

## 10. 라우팅 및 페이지

### 10.1 전체 라우트 맵

| 경로 | 페이지 | 빌드 방식 |
|------|--------|----------|
| `/` | 루트 리다이렉트 → `/ko` | Static |
| `/_not-found` | 404 페이지 (한/영) | Static |
| `/[locale]` | 홈 | SSG (ko, en) |
| `/[locale]/about` | 회사소개 | SSG |
| `/[locale]/about/brand` | 브랜드 | SSG |
| `/[locale]/about/journey` | 연혁 | SSG |
| `/[locale]/blog` | 블로그 | SSG |
| `/[locale]/contact` | 문의 | SSG |
| `/[locale]/faq` | FAQ | SSG |
| `/[locale]/products` | 제품 목록 | SSG |
| `/[locale]/products/[slug]` | 제품 상세 | SSG (2개 제품) |
| `/[locale]/quote` | 견적 요청 | SSG |
| `/[locale]/store` | 스토어 | SSG |
| `/[locale]/store/cart` | 장바구니 | SSG |

**총 30개 정적 HTML 페이지** (2 로케일 x 14 페이지 + 루트 + 404)

### 10.2 정적 파라미터 생성

```tsx
// src/app/[locale]/layout.tsx
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// src/app/[locale]/products/[slug]/page.tsx
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}
```

---

## 11. SEO

### 11.1 메타데이터

각 로케일 레이아웃에서 `generateMetadata()`로 동적 생성:

- **title template**: `%s | PBI Robot`
- **Open Graph**: type, url, title, description, siteName, locale, images
- **Twitter Card**: summary_large_image
- **Alternates**: `hreflang` 한/영 교차 링크
- **metadataBase**: `https://pbirobot.dreamitbiz.com`

### 11.2 정적 SEO 파일

| 파일 | 설명 |
|------|------|
| `public/robots.txt` | 모든 크롤러 허용, 사이트맵 참조 |
| `public/sitemap.xml` | 22개 URL, hreflang 교차 참조, 우선순위/변경 빈도 설정 |
| `public/CNAME` | GitHub Pages 커스텀 도메인 |

---

## 12. 개발 가이드

### 12.1 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 시작 (http://localhost:3000)
npm run dev

# 프로덕션 빌드
npm run build

# 린트 검사
npm run lint
```

### 12.2 새 페이지 추가

1. `src/app/[locale]/새페이지/page.tsx` 생성
2. `setRequestLocale(locale)` 호출 (정적 빌드용)
3. 필요시 `messages/ko.json`, `messages/en.json`에 번역 추가
4. `src/lib/constants.ts`의 `NAV_ITEMS`에 메뉴 항목 추가
5. `public/sitemap.xml`에 URL 추가

```tsx
// 새 페이지 템플릿
import { setRequestLocale } from "next-intl/server";

export default async function NewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        {/* 내용 */}
      </div>
    </section>
  );
}
```

### 12.3 새 제품 추가

1. `src/data/products.ts`에 `Product` 객체 추가
2. `src/images/`에 제품 이미지 3장 (WebP) 추가
3. `src/lib/images.ts`에 이미지 import 및 `productImages` 매핑 추가
4. `public/sitemap.xml`에 제품 상세 URL 추가

### 12.4 번역 추가/수정

1. `messages/ko.json`과 `messages/en.json` 동시에 수정
2. 같은 키 구조를 유지 (누락 시 런타임 에러)
3. 컴포넌트에서 `useTranslations("섹션명")` 또는 `t("키")` 사용

### 12.5 코드 컨벤션

| 항목 | 규칙 |
|------|------|
| 컴포넌트 | PascalCase, named export |
| 파일명 | PascalCase (컴포넌트), camelCase (유틸리티) |
| 스타일링 | Tailwind 유틸리티 클래스 + `cn()` |
| 클라이언트 컴포넌트 | 파일 상단에 `"use client"` |
| 이미지 | WebP 형식, `next/image`의 `Image` 컴포넌트 사용 |
| 경로 alias | `@/` → `./src/` |

---

## 13. 배포

### 13.1 자동 배포 파이프라인

```
main 브랜치 push → GitHub Actions 실행 → 정적 빌드 → GitHub Pages 배포
```

**워크플로우** (`.github/workflows/deploy.yml`):

1. `actions/checkout@v4` - 코드 체크아웃
2. `actions/setup-node@v4` - Node.js 20 설정
3. `npm install` - 의존성 설치
4. `npm run build` - Next.js 정적 빌드 (`out/` 생성)
5. Root redirect 생성 - `out/index.html`에 `/ko` 리다이렉트 추가
6. `actions/configure-pages@v5` - Pages 설정
7. `actions/upload-pages-artifact@v3` - `out/` 업로드
8. `actions/deploy-pages@v4` - GitHub Pages 배포

### 13.2 수동 배포

GitHub Actions 탭에서 `workflow_dispatch`로 수동 실행 가능.

### 13.3 커스텀 도메인

- **CNAME**: `pbirobot.dreamitbiz.com`
- GitHub 저장소 Settings → Pages → Custom domain에 설정 필요
- DNS: `dreamitbiz.com`의 CNAME 레코드가 `aebonlee.github.io` 가리킴

### 13.4 주의사항

- `output: "export"` 사용으로 **서버사이드 기능 불가** (API Routes, Middleware, ISR)
- `package-lock.json`이 미커밋 상태 → 빌드 재현성을 위해 커밋 권장
- 빌드 시 TypeScript strict 모드 적용 → 타입 에러 시 빌드 실패

---

## 14. 향후 계획

### 미구현 기능

| 기능 | 설명 | 우선순위 |
|------|------|---------|
| Toss Payments | 결제 연동 (서버 필요) | 높음 |
| Resend API | 문의/견적 이메일 자동 발송 (서버 필요) | 높음 |
| Kakao Maps | 문의 페이지 지도 연동 | 중간 |
| 블로그 MDX | MDX 기반 콘텐츠 시스템 | 중간 |
| OG 이미지 | Open Graph 이미지 생성 | 낮음 |
| Lighthouse 최적화 | 성능/접근성 점수 개선 | 낮음 |

### 서버 기능 필요시

Toss Payments, Resend API 등 서버사이드 기능이 필요할 경우:
1. `output: "export"` 제거
2. Vercel 또는 자체 서버로 배포 전환
3. API Routes (`app/api/`) 추가
4. 미들웨어 복원 (로케일 자동 감지)

---

## 개발 이력

| Phase | 날짜 | 내용 |
|-------|------|------|
| Phase 1 | 2026-02 | 프로젝트 초기화, 레이아웃, UI 컴포넌트, 정적 페이지 |
| Phase 3 | 2026-02 | Vercel 전환, UI 개선 |
| Phase 4 | 2026-03 | 실제 이미지 적용, 최종 배포 |
| Phase 5 | 2026-03 | 로고 적용, 브랜드 페이지, UI 리디자인 |
| Phase 6 | 2026-03 | GitHub Pages 전환, 정적 빌드 설정 |
| Phase 7 | 2026-04 | 빌드 오류 수정, 전체 코드 점검, 배포 수정 |

자세한 내용은 `docs/개발일지-Phase*.md` 파일을 참고하세요.
