# PBI Robot Website

AI 기반 로봇 수영장 청소기 **AquaSense 시리즈**를 판매하는 PBI Robot(주식회사 피비아이)의 공식 웹사이트.

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 + Framer Motion
- **i18n**: next-intl (Korean default, English)
- **State**: Zustand (cart)
- **Forms**: react-hook-form + zod
- **Icons**: lucide-react

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/[locale]/     # Pages (ko, en)
├── components/       # React components
├── data/             # Static product/FAQ data
├── i18n/             # Internationalization
├── lib/              # Utilities
├── store/            # Zustand stores
└── types/            # TypeScript types
messages/             # Translation files (ko.json, en.json)
docs/                 # Development logs
```

## Pages

- `/` - Home
- `/about` - About, `/about/journey` - Timeline
- `/products` - Product list, `/products/[slug]` - Detail
- `/store` - Store, `/store/cart` - Cart
- `/blog` - Blog
- `/faq` - FAQ
- `/contact` - Contact
- `/quote` - Quote request


## License / 라이선스

**저작권 (c) 2025-2026 드림아이티비즈(DreamIT Biz). 모든 권리 보유.**

본 소프트웨어는 저작권법 및 지적재산권법에 의해 보호되는 독점 소프트웨어입니다. 본 프로젝트는 소프트웨어 저작권 등록이 완료되어 법적 보호를 받습니다.

- 본 소프트웨어의 무단 복제, 수정, 배포 또는 사용은 엄격히 금지됩니다.
- 저작권자의 사전 서면 허가 없이 본 소프트웨어의 어떠한 부분도 복제하거나 전송할 수 없습니다.
- 본 소프트웨어는 DreamIT Biz(https://www.dreamitbiz.com) 교육 플랫폼의 일부로 제공됩니다.

라이선스 문의: aebon@dreamitbiz.com

---

**Copyright (c) 2025-2026 DreamIT Biz (Ph.D Aebon Lee). All Rights Reserved.**

This software is proprietary and protected under applicable copyright and intellectual property laws. This project has been registered for software copyright protection.

- Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
- No part of this software may be reproduced or transmitted in any form without prior written permission from the copyright holder.
- This software is provided as part of the DreamIT Biz (https://www.dreamitbiz.com) educational platform.

For licensing inquiries, contact: aebon@dreamitbiz.com

---

**Designed & Developed by Ph.D Aebon Lee**

DreamIT Biz | https://www.dreamitbiz.com

