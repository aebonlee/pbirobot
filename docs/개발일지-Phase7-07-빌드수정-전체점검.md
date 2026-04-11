# 개발일지 - Phase 7: 빌드 오류 수정 및 전체 코드 점검

**날짜**: 2026-04-11
**Phase**: 7 (유지보수 / 버그 수정)

---

## 배경

- GitHub 리포지토리 전체 재검토 요청에 따라 코드베이스 전면 점검 수행
- `npm run build` 실행 시 TypeScript 컴파일 에러로 **빌드 불가** 상태 발견
- 배포 워크플로우, UI 버그, 데이터 불일치 등 다수 문제 확인 및 수정

---

## 발견된 문제 및 수정 사항

### 1. [CRITICAL] price.usd 타입 불일치 - 빌드 차단

**문제**: `products.ts`에서 `usd: "문의바람"` (string)이 `Product` 타입의 `usd: number`에 할당되어 TypeScript 컴파일 에러 발생.

**수정**:
- `src/types/product.ts`: `usd: number` → `usd: number | null`
- `src/data/products.ts`: `usd: "문의바람"` → `usd: null` (2개 제품)
- `src/lib/utils.ts`: `formatPrice()` 함수가 `null`을 받으면 한국어 "문의바람", 영어 "Contact Us" 반환

```ts
// Before
price: { krw: number; usd: number; }
usd: "문의바람"  // TS Error!

// After
price: { krw: number; usd: number | null; }
usd: null  // OK
```

### 2. [CRITICAL] USD 가격 $NaN 표시

**문제**: 영어 로케일에서 모든 가격 표시 컴포넌트가 `formatPrice("문의바람")` → `$NaN` 표시.

**수정 파일**:
- `StoreContent.tsx`: null 가격일 때 "장바구니 추가" 버튼 대신 "문의하기/Contact Us" 링크 표시
- `ComparisonTable.tsx`: null USD 가격에 "Contact Us" 텍스트 표시

### 3. [SIGNIFICANT] 연락처 정보 불일치

**문제**:
| 항목 | constants.ts | ko.json | en.json |
|------|-------------|---------|---------|
| 전화 | 02-6949-0136 | 010-9975-2648 | +82-2-6949-0136 |
| 이메일 | info@pbirobot.com | pbi240426@gmail.com | info@pbirobot.com |
| 주소 | 서울 금천구 | 충남 아산시 | Seoul Geumcheon-gu |

Footer에서 `tel:` href는 constants.ts 값을, 표시 텍스트는 번역 파일 값을 사용하여 불일치 발생.

**수정**:
- `Footer.tsx`: `tel:`, `mailto:` href를 번역 파일 값 `t("common.phone")`, `t("common.email")`로 통일
- `CompanyInfoCard.tsx`: `COMPANY_INFO` 하드코딩 → 번역 키 `tc("phone")`, `tc("email")`, `tc("address")` 사용

### 4. [SIGNIFICANT] 잘못된 Tailwind CSS 클래스

**문제**: `Header.tsx`의 모바일 메뉴에서 `bg-primary/8` 사용 — 유효하지 않은 opacity 값.

**수정**: `bg-primary/8` → `bg-primary/10`

### 5. [SIGNIFICANT] Root page.tsx 리다이렉트 문제

**문제**:
- `<meta httpEquiv="refresh">` 태그가 `<body>` 내 `<div>` 안에 위치 (무효)
- JavaScript는 `/ko`로, meta는 `/ko/`로 리다이렉트 (트레일링 슬래시 불일치)

**수정**: `<meta>` 태그 제거, 모든 링크를 `/ko`로 통일

### 6. [SIGNIFICANT] 404 페이지 한국어 전용

**문제**: `not-found.tsx`가 한국어만 표시하여 영어 사용자가 404 만나면 한국어 텍스트만 보임.

**수정**: 한/영 이중 언어 404 페이지로 변경, `/ko`와 `/en` 두 개의 홈 링크 제공

### 7. [MODERATE] URL 설정 불일치

**문제**: `SITE_CONFIG.url`이 `https://pbirobot.com`이지만 실제 도메인은 `pbirobot.dreamitbiz.com`.

**수정**: `constants.ts`의 URL을 `https://pbirobot.dreamitbiz.com`으로 통일

### 8. [MODERATE] 중복 GitHub Actions 워크플로우

**문제**: `deploy.yml`과 `nextjs.yml` 모두 `main` 브랜치 push 시 트리거 → 중복 빌드/배포.

**수정**:
- `nextjs.yml` 삭제 (중복)
- `deploy.yml` 유지 (root redirect 포함, 더 간결)
- `deploy.yml`의 `npm ci` → `npm install` 변경 (package-lock.json 부재 대응)

---

## 수정 파일 목록

| 파일 | 변경 내용 |
|------|----------|
| `src/types/product.ts` | `usd` 타입을 `number \| null`로 변경 |
| `src/data/products.ts` | `usd: "문의바람"` → `usd: null` |
| `src/lib/utils.ts` | `formatPrice()` null 가격 처리 추가 |
| `src/components/store/StoreContent.tsx` | null 가격 시 Contact Us 링크 |
| `src/components/products/ComparisonTable.tsx` | null USD 가격 표시 처리 |
| `src/components/layout/Footer.tsx` | tel/mailto href를 번역 값으로 통일 |
| `src/components/contact/CompanyInfoCard.tsx` | COMPANY_INFO → 번역 키 사용 |
| `src/components/layout/Header.tsx` | `bg-primary/8` → `bg-primary/10` |
| `src/app/page.tsx` | meta 태그 제거, 슬래시 통일 |
| `src/app/not-found.tsx` | 한/영 이중 언어 404 |
| `src/lib/constants.ts` | URL/ogImage 경로 수정 |
| `.github/workflows/deploy.yml` | `npm ci` → `npm install` |
| `.github/workflows/nextjs.yml` | 삭제 (중복) |

---

## 빌드 결과

수정 후 `npm run build` 성공:
- 30개 정적 페이지 모두 정상 생성
- TypeScript 컴파일 에러 0건
- 모든 로케일(ko/en) × 모든 페이지 정상 빌드

---

## 향후 검토 필요 사항

- [ ] `ko.json`과 `en.json`의 연락처 정보가 의도적으로 다른 것인지 확인 (다른 사무소?)
- [ ] OG 이미지(`/og-image.png`) 실제 파일 생성 필요
- [ ] `package-lock.json` 생성 및 커밋 권장 (재현 가능한 빌드)
- [ ] Product 이미지 경로(`products.ts`의 `images` 필드)가 현재 미사용 — 정리 또는 활용 결정
