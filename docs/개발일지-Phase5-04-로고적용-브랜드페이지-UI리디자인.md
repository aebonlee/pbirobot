# 개발일지 - Phase 5: 로고 적용 + 브랜드 페이지 + 기업 UI 리디자인

**날짜**: 2026-02-26
**Phase**: 5 (브랜드 아이덴티티 정립)

---

## 주요 작업 내역

### 1. PBI Robot 로고 이미지 적용

`src/images/logo.webp` 로고 파일을 헤더/푸터에 적용.

- 헤더: 로고 원본 색상 그대로 표시 (검정 로고 + 화이트 배경)
- 푸터: 다크 배경 위 반전(invert) 처리

```ts
// src/lib/images.ts
import logo from "@/images/logo.webp";
export const images = { logo, hero, pro: {...}, ultra: {...} };
```

### 2. 헤더/푸터 기업 사이트 리디자인

기존 다크(검정) 테마에서 **전문적인 기업 사이트 디자인**으로 전환.

#### 헤더 (Header.tsx)

| 항목 | Before | After |
|------|--------|-------|
| 배경 | `bg-gray-950` (검정) | `bg-white/95` (화이트) |
| 로고 | `brightness-0 invert` | 원본 그대로 |
| 네비 텍스트 | `text-gray-300` (밝은 회색) | `text-gray-600` (짙은 회색) |
| 활성 메뉴 | `text-white bg-white/15` | `text-primary bg-primary/8` |
| CTA 버튼 | `bg-white text-gray-900` | `bg-primary text-white` |
| 스크롤 시 | 검정 + 흰 테두리 | 화이트 + 회색 테두리 + shadow |

#### 푸터 (Footer.tsx)

| 항목 | Before | After |
|------|--------|-------|
| 배경 | `bg-gray-950` (순수 검정) | `bg-[#0a1a2e]` (딥 네이비) |
| 아이콘 | 기본 회색 | `text-sky-500/70` 포인트 |
| 링크 호버 | `hover:text-white` | `hover:text-sky-400` (연락처) |
| 간격 | 기본 | 넉넉한 여백 (`py-14 lg:py-20`) |

#### LocaleSwitcher

- `text-gray-500 hover:text-gray-900 hover:bg-gray-100` (라이트 테마)

### 3. 브랜드 소개 페이지 신규 생성

`/about/brand` 경로에 브랜드 아이덴티티 페이지 추가.

#### 페이지 구성

1. **로고 섹션** - 화이트/다크 배경 위 로고 표시
2. **브랜드 의미** - P(Pure) / B(Bot) / I(Innovation) 카드
3. **브랜드 컬러** - Black / Blue / White 컬러 팔레트
4. **로고 사용 가이드** - 최소 크기, 여백, 다크 배경 예시

#### 관련 파일

```
src/app/[locale]/about/brand/page.tsx    ← 라우트 페이지
src/components/about/BrandContent.tsx    ← 컴포넌트
messages/ko.json → "brand" 섹션          ← 한국어 번역
messages/en.json → "brand" 섹션          ← 영어 번역
```

#### 네비게이션 연결

- 푸터 "회사" 섹션에 "브랜드" 링크 추가
- `nav.brand` 번역 키 추가 (ko: "브랜드", en: "Brand")

### 4. 히어로 타이틀 모바일 추가 조정

- `text-2xl sm:text-3xl` 로 추가 축소 (3줄 → 1줄)

---

## 디자인 원칙

- **로고 원본 색상 존중**: 화이트 배경 헤더에서 로고 필터 없이 표시
- **브랜드 블루(#0056B3)**: 활성 메뉴, CTA, 아이콘 포인트에 통일 적용
- **라이트 헤더 + 다크 푸터**: 일반적인 기업 사이트 레이아웃 패턴
- **딥 네이비 푸터**: 순수 검정보다 세련된 느낌

---

## 커밋 히스토리

| 커밋 | 내용 |
|------|------|
| `1e8e7c4` | 히어로 타이틀 모바일 폰트 크기 추가 축소 |
| `afcc821` | PBI Robot 로고 이미지 적용 (헤더/푸터) |
| `874a750` | 브랜드 페이지 추가 및 다크 테마 헤더/푸터 적용 |
| `55984b5` | 전문 기업 사이트 디자인으로 헤더/푸터 리디자인 |

---

## 현재 사이트 구조

```
/ (홈)
├── /about (회사소개)
│   ├── /about/journey (연혁)
│   └── /about/brand (브랜드) ← NEW
├── /products (제품)
│   ├── /products/aquasense-2-pro
│   └── /products/aquasense-2-ultra
├── /store (스토어)
│   └── /store/cart (장바구니)
├── /blog (블로그)
├── /faq (FAQ)
├── /contact (문의)
└── /quote (견적 요청)
```
