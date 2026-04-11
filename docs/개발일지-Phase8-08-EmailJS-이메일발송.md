# 개발일지 - Phase 8: EmailJS 이메일 발송 기능 구현

**날짜**: 2026-04-12
**Phase**: 8 (기능 추가)

---

## 배경

- 기존 문의하기(ContactForm)와 견적요청(QuoteForm) 폼은 `window.open(mailto:...)` 방식으로 사용자의 기본 메일 클라이언트를 열어 이메일을 작성하도록 유도
- 이 방식은 사용자 환경에 메일 클라이언트가 설정되어 있지 않으면 작동하지 않고, 모바일에서 UX가 불편
- 본 프로젝트는 Next.js `output: "export"` 정적 사이트로 GitHub Pages에 배포되므로 서버사이드 API 사용 불가
- 폼 제출 시 서버 없이 **브라우저에서 직접 이메일을 발송**할 수 있는 솔루션 필요

---

## 기술 결정: EmailJS 선택 이유

| 검토 옵션 | 장점 | 단점 | 선택 |
|-----------|------|------|------|
| **EmailJS** | 무료 200건/월, 브라우저 전용, Gmail SMTP 직접 연동, npm 패키지 | 무료 플랜 제한 | **채택** |
| Formspree | 간편 설정 | 무료 50건/월, 커스텀 필드 제한 | - |
| Netlify Forms | 빌드 통합 | GitHub Pages에서 미지원 | - |
| 자체 API | 완전한 제어 | 별도 서버 필요 (정적 사이트 불가) | - |

**핵심 선택 근거**:
- 정적 사이트(GitHub Pages)에서 서버 없이 동작
- Gmail SMTP(`pbi240426@gmail.com`) 직접 연동 가능
- `@emailjs/browser` npm 패키지로 React 프로젝트에 깔끔하게 통합
- 월 200건 무료 요청은 초기 트래픽에 충분

---

## 주요 변경 사항

### 1. EmailJS 패키지 설치

```bash
npm install @emailjs/browser
```

`package.json`에 `"@emailjs/browser": "^4.4.1"` 추가.

### 2. EMAILJS_CONFIG 상수 추가

`src/lib/constants.ts`에 EmailJS 설정 상수를 추가하여 서비스 ID, 템플릿 ID, 공개 키를 중앙 관리.

```ts
export const EMAILJS_CONFIG = {
  serviceId: "service_xxx",       // EmailJS 서비스 ID
  contactTemplateId: "template_contact",  // 문의 이메일 템플릿 ID
  quoteTemplateId: "template_quote",      // 견적 이메일 템플릿 ID
  publicKey: "xxx",               // EmailJS 공개 키
} as const;
```

> **참고**: 현재 플레이스홀더 값. 실제 EmailJS 계정 설정 후 교체 필요.

### 3. ContactForm - 문의하기 폼 EmailJS 통합

**Before** (mailto 방식):
```ts
const onSubmit = (data: ContactFormData) => {
  const mailtoUrl = `mailto:pbi240426@gmail.com?subject=${...}&body=${...}`;
  window.open(mailtoUrl);
};
```

**After** (EmailJS 방식):
```ts
const onSubmit = async (data: ContactFormData) => {
  try {
    setError(false);
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || "-",
        subject: data.subject,
        message: data.message,
        to_email: "pbi240426@gmail.com",
      },
      EMAILJS_CONFIG.publicKey
    );
    setIsSubmitted(true);
  } catch {
    setError(true);
  }
};
```

주요 변경점:
- `import emailjs from "@emailjs/browser"` 추가
- `EMAILJS_CONFIG` import 추가
- `window.open(mailto:...)` 제거 → `emailjs.send()` 비동기 호출
- `error` 상태 추가 (`useState(false)`)
- 전송 실패 시 에러 메시지 UI 표시 (빨간색 텍스트)
- `isSubmitting` 상태로 중복 전송 방지 (버튼 disabled)

### 4. QuoteForm - 견적요청 폼 EmailJS 통합

ContactForm과 동일한 패턴으로 EmailJS 통합. 견적 전용 템플릿 변수 사용:

```ts
await emailjs.send(
  EMAILJS_CONFIG.serviceId,
  EMAILJS_CONFIG.quoteTemplateId,
  {
    company_name: data.companyName || "-",
    contact_name: data.contactName,
    from_email: data.email,
    phone: data.phone,
    pool_type: data.poolType || "-",
    pool_size: data.poolSize || "-",
    quantity: data.quantity || "-",
    message: data.message || "",
    to_email: "pbi240426@gmail.com",
  },
  EMAILJS_CONFIG.publicKey
);
```

### 5. 번역 파일에 에러 메시지 추가

**ko.json**:
```json
"error": "이메일 전송에 실패했습니다. 직접 문의해주세요: pbi240426@gmail.com"
```

**en.json**:
```json
"error": "Failed to send email. Please contact us directly: pbi240426@gmail.com"
```

에러 메시지에 직접 연락 가능한 이메일 주소를 포함하여 발송 실패 시에도 사용자가 문의할 수 있도록 함.

---

## 아키텍처 개요

```
[사용자 브라우저]
    |
    | 1. 폼 작성 및 제출
    v
[ContactForm / QuoteForm]
    |
    | 2. emailjs.send() 호출 (클라이언트 사이드)
    v
[EmailJS API 서버]
    |
    | 3. 템플릿 변수 매핑 → 이메일 생성
    v
[Gmail SMTP (pbi240426@gmail.com)]
    |
    | 4. 이메일 발송
    v
[pbi240426@gmail.com 수신함]
```

- 전체 과정이 브라우저에서 시작되어 서버 없이 완료
- EmailJS 공개 키(Public Key)만 클라이언트에 노출 (비밀 키 아님)
- 발신자 제한, 도메인 제한 등은 EmailJS 대시보드에서 설정 가능

---

## 수정 파일 목록

| 파일 | 변경 내용 |
|------|----------|
| `package.json` | `@emailjs/browser: ^4.4.1` 의존성 추가 |
| `src/lib/constants.ts` | `EMAILJS_CONFIG` 상수 추가 (serviceId, templateId, publicKey) |
| `src/components/contact/ContactForm.tsx` | `mailto:` → `emailjs.send()`, 에러 상태/UI 추가 |
| `src/components/quote/QuoteForm.tsx` | `mailto:` → `emailjs.send()`, 에러 상태/UI 추가 |
| `messages/ko.json` | 폼 에러 메시지 키 추가 (`contact.form.error`, `quote.form.error`) |
| `messages/en.json` | 폼 에러 메시지 키 추가 (`contact.form.error`, `quote.form.error`) |

---

## EmailJS 설정 가이드 (배포 후 필수)

현재 `EMAILJS_CONFIG`에 플레이스홀더 값이 설정되어 있으므로, 실제 이메일 발송을 위해 아래 단계를 수행해야 합니다.

### Step 1: EmailJS 가입

1. [https://www.emailjs.com](https://www.emailjs.com) 접속
2. 무료 계정 생성 (Free Plan: 200건/월)

### Step 2: Gmail 서비스 연결

1. EmailJS 대시보드 → **Email Services** → **Add New Service**
2. **Gmail** 선택
3. `pbi240426@gmail.com` 계정으로 OAuth 인증
4. 생성된 **Service ID** 기록 (예: `service_abc123`)

### Step 3: 문의 이메일 템플릿 생성

1. **Email Templates** → **Create New Template**
2. 템플릿 이름: `contact_template` (또는 원하는 이름)
3. 템플릿 내용 예시:

```
제목: [PBI Robot 문의] {{subject}}

보내는 사람: {{from_name}} ({{from_email}})
연락처: {{phone}}

---
{{message}}
```

4. **To Email**: `{{to_email}}` 또는 직접 `pbi240426@gmail.com` 입력
5. 생성된 **Template ID** 기록

### Step 4: 견적 이메일 템플릿 생성

1. 새 템플릿 생성
2. 템플릿 내용 예시:

```
제목: [PBI Robot 견적요청] {{company_name}} - {{contact_name}}

회사명: {{company_name}}
담당자: {{contact_name}}
이메일: {{from_email}}
연락처: {{phone}}

수영장 유형: {{pool_type}}
수영장 크기: {{pool_size}}
수량: {{quantity}}

---
{{message}}
```

3. 생성된 **Template ID** 기록

### Step 5: Public Key 확인

1. EmailJS 대시보드 → **Account** → **General**
2. **Public Key** 복사

### Step 6: constants.ts 업데이트

`src/lib/constants.ts`의 `EMAILJS_CONFIG`를 실제 값으로 교체:

```ts
export const EMAILJS_CONFIG = {
  serviceId: "service_abc123",          // Step 2에서 확인한 값
  contactTemplateId: "template_xyz789", // Step 3에서 확인한 값
  quoteTemplateId: "template_def456",   // Step 4에서 확인한 값
  publicKey: "user_aBcDeFgHiJkLmN",    // Step 5에서 확인한 값
} as const;
```

### Step 7: 테스트

1. 문의하기 페이지에서 테스트 폼 제출
2. 견적요청 페이지에서 테스트 폼 제출
3. `pbi240426@gmail.com` 수신함에서 이메일 도착 확인

---

## 다음 단계

- [ ] EmailJS 계정 생성 및 Gmail 서비스 연결
- [ ] 문의/견적 이메일 템플릿 생성
- [ ] `EMAILJS_CONFIG` 실제 값으로 업데이트
- [ ] 로컬 환경에서 이메일 발송 테스트
- [ ] 배포 후 프로덕션 환경에서 최종 확인
- [ ] EmailJS 대시보드에서 도메인 제한 설정 (`pbirobot.dreamitbiz.com`만 허용)
- [ ] 월간 발송량 모니터링 (무료 플랜 200건/월 제한)
