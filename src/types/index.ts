/* ───────────────────────────────────────────
 *  Domain types for PBI Robot (v6 template based)
 * ─────────────────────────────────────────── */

// ─── PBI Product (site-specific) ───
export interface PBIProduct {
  id: string;
  slug: string;
  name: { ko: string; en: string };
  tagline: { ko: string; en: string };
  description: { ko: string; en: string };
  price: { krw: number; usd: number | null };
  images: string[];
  videoUrl?: string;
  features: PBIProductFeature[];
  specs: PBIProductSpec[];
  badge?: string;
  inStock: boolean;
}

export interface PBIProductFeature {
  icon: string;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
}

export interface PBIProductSpec {
  label: { ko: string; en: string };
  value: { ko: string; en: string };
}

// ─── Cart (Zustand) ───
export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// ─── Order ───
export interface OrderItemInput {
  product_title: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
}

export interface OrderData {
  order_number: string;
  user_email: string;
  user_name: string;
  user_phone: string;
  total_amount: number;
  payment_method: string;
  user_id?: string | null;
  items?: OrderItemInput[];
}

export interface Order {
  id: string;
  order_number: string;
  user_email: string;
  user_name: string;
  user_phone: string;
  total_amount: number;
  payment_method: string;
  payment_status: PaymentStatus;
  user_id?: string | null;
  portone_payment_id?: string;
  created_at: string;
  paid_at?: string;
  cancelled_at?: string;
  cancel_reason?: string;
  items?: OrderItemInput[];
  order_items?: OrderItemInput[];
}

export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'cancelled' | 'refunded';

// ─── User / Auth ───
export interface UserProfile {
  id: string;
  email: string;
  name: string;
  display_name: string;
  avatar_url: string;
  phone: string;
  provider: string;
  role: string;
  signup_domain: string;
  visited_sites: string[];
  last_sign_in_at: string;
  updated_at: string;
}

export interface AccountBlock {
  status: string;
  reason: string;
  suspended_until: string | null;
}

// ─── Search ───
export interface SearchResultItem {
  id: number;
  title: string;
  titleEn?: string;
  excerpt?: string;
  excerptEn?: string;
  category?: string;
  categoryEn?: string;
  description?: string;
  descriptionEn?: string;
  author?: string;
  date: string;
}

export interface SearchResults {
  blog: SearchResultItem[];
  board: SearchResultItem[];
  gallery: SearchResultItem[];
}

// ─── Site Config ───
export interface BrandPart {
  text: string;
  className: string;
}

export interface MenuItem {
  path: string;
  labelKey: string;
  activePath?: string;
  dropdown?: SubMenuItem[];
}

export interface SubMenuItem {
  path: string;
  labelKey: string;
}

export interface FamilySite {
  name: string;
  url: string;
}

export interface ColorOption {
  name: ColorTheme;
  color: string;
}

export interface CompanyInfo {
  name: string;
  ceo: string;
  bizNumber: string;
  salesNumber?: string;
  publisherNumber?: string;
  address: string;
  email: string;
  phone: string;
  kakao?: string;
  businessHours?: string;
}

export interface SiteFeatures {
  shop: boolean;
  community: boolean;
  search: boolean;
  auth: boolean;
  license: boolean;
}

export interface SiteConfig {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  url: string;
  dbPrefix: string;
  parentSite: { name: string; url: string };
  brand: { parts: BrandPart[] };
  themeColor: string;
  company: CompanyInfo;
  features: SiteFeatures;
  colors: ColorOption[];
  menuItems: MenuItem[];
  footerLinks: { path: string; labelKey: string }[];
  familySites: FamilySite[];
}

// ─── Payment (PortOne V1) ───
export interface PaymentRequest {
  orderId: string;
  orderName: string;
  totalAmount: number;
  payMethod: 'CARD' | 'TRANSFER';
  customer: {
    fullName: string;
    email: string;
    phoneNumber: string;
  };
}

export interface PaymentSuccess {
  paymentId: string;
  txId: string;
}

export interface PaymentError {
  code: string;
  message: string;
}

export type PaymentResult = PaymentSuccess | PaymentError;

// ─── Toast ───
export type ToastType = 'info' | 'success' | 'error' | 'warning';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

// ─── Theme ───
export type ThemeMode = 'auto' | 'light' | 'dark';
export type ColorTheme = 'blue' | 'red' | 'green' | 'purple' | 'orange';

// ─── Language ───
export type Language = 'ko' | 'en';

// ─── FAQ ───
export interface FAQItem {
  id: string;
  category: 'product' | 'purchase' | 'warranty' | 'usage';
  question: { ko: string; en: string };
  answer: { ko: string; en: string };
}

// ─── Journey ───
export interface JourneyEvent {
  year: string;
  title: { ko: string; en: string };
  description: { ko: string; en: string };
  icon: string;
}
