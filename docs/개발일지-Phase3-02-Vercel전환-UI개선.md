# 개발일지 - Phase 3: Vercel 전환 + UI 개선

**날짜**: 2026-02-26
**Phase**: 3 (스토어 + 결제) + Phase 4 일부 (마무리)

---

## 주요 변경 사항

### 1. Vercel 배포 전환 (GitHub Pages → Vercel)

| 항목 | 변경 전 (GitHub Pages) | 변경 후 (Vercel) |
|---|---|---|
| **배포 방식** | `output: "export"` 정적 빌드 | Vercel 서버사이드 |
| **URL 구조** | `/ko/about/`, `/en/about/` | `/about` (한국어), `/en/about` (영어) |
| **루트 `/`** | `<meta refresh>` → `/ko/` | middleware가 자동 라우팅 |
| **middleware** | 비활성화 | next-intl createMiddleware 복원 |
| **메시지 로드** | 직접 JSON import | `getMessages()` 서버 함수 |
| **trailing slash** | `trailingSlash: true` | 기본값 (없음) |

#### 핵심 설정 변경

**next.config.ts**
```ts
// 변경 전
output: "export",
trailingSlash: true,
basePath: "",

// 변경 후
// output, trailingSlash, basePath 모두 제거
```

**middleware.ts**
```ts
import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

**layout.tsx** - 메시지 로드 방식 변경
```ts
// 변경 전: 직접 import
import koMessages from "../../../messages/ko.json";
import enMessages from "../../../messages/en.json";

// 변경 후: 서버 함수 사용
import { getMessages } from "next-intl/server";
const messages = await getMessages();
```

### 2. 제품 이미지 플레이스홀더 개선

- `ProductImage` 컴포넌트 신규 생성 (`src/components/shared/ProductImage.tsx`)
- SVG 기반 로봇 수영장 청소기 일러스트
- Framer Motion으로 물결 효과, 부유 애니메이션, 버블 효과
- Pro(블루 계열) / Ultra(인디고 계열) 두 가지 컬러 변형
- sm / md / lg 3가지 사이즈

적용 위치:
- 홈 > HeroSection (히어로 이미지)
- 홈 > ProductShowcase (제품 카드)
- 제품 목록 페이지 (ProductList)
- 제품 상세 페이지 (ProductDetail)
- 스토어 페이지 (StoreContent)

### 3. SEO 메타데이터

모든 페이지에 `generateMetadata` 추가:
- 회사소개, 연혁, 제품, 제품 상세, 스토어, 장바구니
- 블로그, FAQ, 문의, 견적요청
- 한국어/영어 메타데이터 분리

### 4. 블로그 콘텐츠 보강

- 4개 → 6개 포스트로 확충
- 카테고리별 컬러 코딩 (뉴스: 블루, 기술: 퍼플, 팁: 에메랄드, 이벤트: 앰버)
- 카테고리별 아이콘 추가
- 3컬럼 그리드 레이아웃으로 변경
- 발췌문 3줄로 확장

### 5. 기타 수정

- CompanyHighlights: `statLabel` locale 하드코딩(`ko`) → 동적 locale 사용
- metadataBase URL: `pbirobot.dreamitbiz.com` → `pbirobot.vercel.app`

---

## 현재 배포 흐름

```
코드 수정 → git push origin main
  → Vercel 자동 감지 및 배포
  → https://pbirobot.vercel.app 에서 서빙
```

## 향후 작업

- [ ] Vercel 프로젝트 설정 (도메인 연결)
- [ ] 실제 제품 이미지/영상 교체
- [ ] Toss Payments 결제 연동 (서버 사용 가능해짐)
- [ ] Resend API 이메일 발송 (API routes 사용 가능해짐)
- [ ] Lighthouse 최적화
