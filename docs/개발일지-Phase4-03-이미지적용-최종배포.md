# 개발일지 - Phase 4: 실제 이미지 적용 + 최종 배포

**날짜**: 2026-02-26
**Phase**: 4 (마무리 + 배포)

---

## 주요 작업 내역

### 1. 실제 제품 이미지 적용

`src/images/` 에 업로드된 9장의 webp 이미지를 사이트 전체에 적용.

#### 이미지 매핑

| 파일 | 내용 | 적용 위치 |
|------|------|-----------|
| pbi_8.webp | 야간 풀 전경 (럭셔리) | 히어로 섹션 배경 |
| pbi_2.webp | AquaSense 2 Pro 배너 (CES 수상) | Pro 메인 이미지 |
| pbi_4.webp | 주거용 풀 라이프스타일 | Pro 갤러리 2번 |
| pbi_1.webp | 무선 충전 도크 | Pro 갤러리 3번 |
| pbi_9.webp | 상업용 풀 (낮, 모던 건물) | Ultra 메인 이미지 |
| pbi_3.webp | 벽면 수중 청소 | Ultra 갤러리 2번 |
| pbi_7.webp | 항공뷰 청소 경로 | Ultra 갤러리 3번 |
| pbi_5.webp | 수중 클로즈업 (벽면) | 예비 |
| pbi_6.webp | 수중 클로즈업 (바닥) | 예비 |

#### 이미지 관리 구조

```
src/lib/images.ts  ← 중앙 이미지 맵 (static import)
src/images/        ← 원본 이미지 파일
```

```ts
// src/lib/images.ts
import hero from "@/images/pbi_8.webp";
import proBanner from "@/images/pbi_2.webp";
// ...
export const productImages = {
  "aquasense-2-pro": [proBanner, proLifestyle, proCharging],
  "aquasense-2-ultra": [ultraCommercial, ultraWall, ultraAerial],
};
```

### 2. 제품 상세 페이지 갤러리

- 메인 이미지 + 3장 썸네일 선택 UI
- `useState`로 선택된 이미지 인덱스 관리
- 선택된 썸네일에 `border-primary` 하이라이트

### 3. 히어로 타이틀 반응형 조정

"스마트한 수영장 관리의 시작" 줄바꿈 방지:
- 모바일: `text-3xl` (기존 `text-4xl`)
- 데스크탑: `lg:text-6xl` (기존 `lg:text-7xl`)
- `tracking-tight` 추가

### 4. CNAME 파일 정리

GitHub Pages용 CNAME 파일 2개 삭제:
- `/CNAME`
- `/public/CNAME`

---

## 현재 배포 구조

```
코드 수정 → git push origin main
  → Vercel 자동 감지 및 빌드
  → https://pbirobot.vercel.app 에서 서빙
```

## URL 구조

| 언어 | URL 예시 |
|------|----------|
| 한국어 (기본) | `/about`, `/products`, `/store` |
| 영어 | `/en/about`, `/en/products`, `/en/store` |

## 전체 커밋 히스토리 (이번 세션)

| 커밋 | 내용 |
|------|------|
| `f7b1380` | .claude/ gitignore 추가 |
| `0265aac` | Vercel 전환, 제품 이미지 개선, SEO 메타데이터 추가 |
| `c68e810` | 개발일지 추가 |
| `20e32e7` | GitHub Pages 워크플로우 삭제 |
| `f748f5d` | CNAME 파일 삭제 |
| `de7908d` | 실제 제품 이미지 적용 |
| `af215f7` | 히어로 타이틀 폰트 크기/자간 조정 |
