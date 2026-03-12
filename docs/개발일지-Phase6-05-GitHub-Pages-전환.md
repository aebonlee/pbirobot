# 개발일지 - Phase 6: GitHub Pages 전환

**날짜**: 2026-03-13
**Phase**: 6 (배포 플랫폼 전환)

---

## 배경

- 커스텀 도메인 `pbirobot.dreamitbiz.com`이 GitHub Pages를 가리키고 있으나, GitHub Pages 설정이 없어 404 발생
- Vercel 배포에서 순수 GitHub Pages 정적 사이트로 전환 필요

---

## 주요 변경 사항

### 1. next.config.ts - 정적 빌드 설정

`output: 'export'` 추가하여 Next.js 정적 빌드(Static Export) 활성화.

```ts
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

### 2. middleware.ts 삭제

GitHub Pages는 서버사이드 미들웨어를 지원하지 않으므로 삭제.

- `next-intl/middleware` 기반 로케일 감지/리다이렉트 → 정적 라우팅으로 전환
- `_vercel` 참조 제거됨

### 3. next-intl 라우팅 설정 변경

`localePrefix`를 `'as-needed'`에서 `'always'`로 변경.

```ts
// src/i18n/routing.ts
export const routing = defineRouting({
  locales: ["ko", "en"],
  defaultLocale: "ko",
  localePrefix: "always", // 변경: 미들웨어 없이 정적 라우팅 지원
});
```

**이유**: 미들웨어 없이는 `/about` → `/ko/about` 리다이렉트가 불가능. 모든 URL에 로케일 프리픽스를 포함하여 정적 파일과 1:1 매핑.

### 4. metadataBase 업데이트

Vercel 도메인에서 GitHub Pages 커스텀 도메인으로 변경.

```ts
// src/app/[locale]/layout.tsx
metadataBase: new URL("https://pbirobot.dreamitbiz.com"),
```

### 5. GitHub Actions 워크플로우 생성

`.github/workflows/deploy.yml` 생성 - main 브랜치 push 시 자동 배포.

- Node.js 20 + npm ci → next build → GitHub Pages 배포
- `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages` 사용

### 6. CNAME 파일 생성

`public/CNAME`에 `pbirobot.dreamitbiz.com` 설정하여 커스텀 도메인 연결.

---

## URL 구조 변경

| 항목 | Before (Vercel) | After (GitHub Pages) |
|------|----------------|---------------------|
| 한국어 홈 | `/` | `/ko` |
| 영어 홈 | `/en` | `/en` |
| 한국어 회사소개 | `/about` | `/ko/about` |
| 영어 회사소개 | `/en/about` | `/en/about` |
| 루트 `/` | 한국어 직접 렌더링 | `/ko`로 리다이렉트 |

---

## 빌드 결과

정적 빌드 성공 확인 (`npm run build`):
- `out/` 폴더에 30개 HTML 파일 생성
- 모든 로케일(ko/en) × 모든 페이지 정상 출력
- CNAME 파일 `out/` 폴더에 복사 확인

---

## 수정 파일 목록

| 파일 | 변경 |
|------|------|
| `next.config.ts` | `output: 'export'` 추가 |
| `middleware.ts` | 삭제 |
| `src/i18n/routing.ts` | `localePrefix: 'always'` 변경 |
| `src/app/[locale]/layout.tsx` | `metadataBase` 도메인 변경 |
| `.github/workflows/deploy.yml` | 신규 생성 |
| `public/CNAME` | 신규 생성 |

---

## 참고

- Next.js `output: 'export'`는 서버사이드 기능(API Routes, Middleware, ISR) 미지원
- next-intl v4는 정적 빌드 공식 지원 (`localePrefix: 'always'` + `generateStaticParams`)
- GitHub Pages 배포 후 GitHub 저장소 Settings → Pages에서 Source를 "GitHub Actions"로 설정 필요
