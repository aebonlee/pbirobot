# 개발일지 - Phase 1~2: 프로젝트 초기화 및 전체 구조 구축

**날짜**: 2026-02-26
**Phase**: 1~2 (기초 + 정적 페이지 + 제품/콘텐츠)

---

## 사이트 아키텍처

### 원래 계획 vs 현재 구조

| 항목 | 원래 계획 | 현재 구조 | 변경 이유 |
|---|---|---|---|
| **배포** | Vercel (SSR) | GitHub Pages (정적) | 기존 워크플로우 유지 (GitHub Pages + Cloudflare DNS) |
| **렌더링** | Server-side + Static | 100% Static Export (`output: 'export'`) | GitHub Pages는 정적 호스팅만 지원 |
| **i18n 라우팅** | Middleware 기반 (`localePrefix: 'as-needed'`) | `generateStaticParams` + `setRequestLocale` | 정적 export에서 middleware 불가 |
| **URL 구조** | KO: `/about`, EN: `/en/about` | KO: `/ko/about`, EN: `/en/about` | 정적 export는 locale prefix 필수 |
| **루트 `/`** | middleware가 `/about`으로 라우팅 | `<meta refresh>` → `/ko/` 리다이렉트 | 정적 export 제약 |
| **폼 제출** | API Route (`/api/contact`) → Resend 이메일 | `mailto:` 링크 방식 | API Routes 정적 export 불가 |
| **이미지** | Next.js Image Optimization | `unoptimized: true` (원본 그대로) | 정적 export에서 이미지 최적화 불가 |
| **결제** | Toss Payments SDK | 미구현 (서버 필요) | 정적 사이트에서 결제 서버 불가 |

### 현재 빌드 & 배포 흐름

```
코드 수정 → git push origin main
  → GitHub Actions 자동 실행 (.github/workflows/deploy.yml)
    → npm ci → npm run build (Next.js static export → /out 폴더)
    → GitHub Pages에 /out 폴더 배포
    → pbirobot.dreamitbiz.com 에서 서빙 (Cloudflare DNS → GitHub Pages)
```

### 정적 export 핵심 설정

**next.config.ts**
```ts
output: "export"       // 정적 HTML 생성
trailingSlash: true     // /ko/about/ (GitHub Pages 호환)
images: { unoptimized: true }  // 이미지 최적화 비활성화
```

**모든 page.tsx에서 setRequestLocale 호출 필수**
```ts
export default async function SomePage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);  // next-intl 정적 렌더링 활성화
  return <Component />;
}
```

**layout.tsx에서 직접 JSON import**
```ts
import koMessages from "../../../messages/ko.json";
import enMessages from "../../../messages/en.json";
// getMessages() 대신 직접 import (headers() 호출 방지)
```

---

## 현재 구현된 페이지

| 페이지 | 경로 | 구성 |
|---|---|---|
| 홈 | `/ko/` `/en/` | Hero, 제품 쇼케이스, 기업 하이라이트, CTA |
| 회사소개 | `/ko/about/` | 비전, 3대 가치, 인증 배지 |
| 연혁 | `/ko/about/journey/` | 타임라인 (2019~2025) |
| 제품 목록 | `/ko/products/` | 제품 카드 + 비교 테이블 |
| 제품 상세 | `/ko/products/aquasense-2-pro/` | 갤러리, 기능, 스펙 |
| 스토어 | `/ko/store/` | 제품 카드 + 장바구니 담기 |
| 장바구니 | `/ko/store/cart/` | 수량 조절, 합계 |
| 블로그 | `/ko/blog/` | 목록 (4개 포스트) |
| FAQ | `/ko/faq/` | 카테고리별 아코디언 (10개) |
| 문의 | `/ko/contact/` | 폼 (mailto) + 회사정보 + 지도 자리 |
| 견적 요청 | `/ko/quote/` | 견적 폼 (mailto) |

---

## 향후 서버 기능 추가 시

정적 사이트에서 불가능한 기능(결제, 이메일 발송 등)이 필요하면:
1. **Vercel 전환**: `output: 'export'` 제거, middleware 복원, API routes 복원
2. **외부 서비스 연동**: Formspree(폼), Stripe(결제) 등 서드파티 활용
3. **Cloudflare Workers**: 간단한 API를 엣지에서 처리

## 다음 단계
- 배경색 블랙 베이스로 변경
- 실제 제품 이미지/영상 교체
- 블로그 MDX 콘텐츠 작성
