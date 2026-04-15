import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase: SupabaseClient | null = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const SSO_KEY = 'dreamit_sso';
const _isLocal = typeof window !== 'undefined' &&
  (location.hostname === 'localhost' || location.hostname === '127.0.0.1');
const _cookieDomain = _isLocal ? '' : ';domain=.dreamitbiz.com';

export function setSharedSession(rt: string): void {
  document.cookie = `${SSO_KEY}=${rt}${_cookieDomain};path=/;max-age=2592000;SameSite=Lax${_isLocal ? '' : ';Secure'}`;
}
export function getSharedSession(): string | null {
  const m = document.cookie.match(/(^| )dreamit_sso=([^;]+)/);
  return m ? m[2] : null;
}
export function clearSharedSession(): void {
  document.cookie = `${SSO_KEY}=${_cookieDomain};path=/;max-age=0`;
}
