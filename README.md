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
