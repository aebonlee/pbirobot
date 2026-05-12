import getSupabase from './supabase';

export interface EmailParams {
  to: string;
  subject: string;
  html: string;
  type?: string;
}

export interface SMSParams {
  receiver: string;
  message: string;
}

export interface NotificationResult {
  success: boolean;
  error?: string;
}

export async function sendEmail(params: EmailParams): Promise<NotificationResult> {
  const sb = getSupabase();
  if (!sb) return { success: false, error: 'Supabase 초기화 실패' };

  try {
    const { data, error } = await sb.functions.invoke('send-email', { body: params });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[notifications] sendEmail 오류:', msg);
    return { success: false, error: msg };
  }
}

export async function sendSMS(params: SMSParams): Promise<NotificationResult> {
  const sb = getSupabase();
  if (!sb) return { success: false, error: 'Supabase 초기화 실패' };

  try {
    const { data, error } = await sb.functions.invoke('send-sms', { body: params });
    if (error) throw error;
    if (data?.error) throw new Error(data.error);
    if (!data?.success) throw new Error(data?.message || 'SMS 발송 실패');
    return { success: true };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[notifications] sendSMS 오류:', msg);
    return { success: false, error: msg };
  }
}

export async function sendBoth(params: {
  email: EmailParams;
  sms: SMSParams;
}): Promise<{ email: NotificationResult; sms: NotificationResult }> {
  const [emailResult, smsResult] = await Promise.allSettled([
    sendEmail(params.email),
    sendSMS(params.sms),
  ]);

  return {
    email: emailResult.status === 'fulfilled'
      ? emailResult.value
      : { success: false, error: emailResult.reason?.message },
    sms: smsResult.status === 'fulfilled'
      ? smsResult.value
      : { success: false, error: smsResult.reason?.message },
  };
}

export function buildEmailHtml(params: {
  title: string;
  body: string;
  siteName?: string;
  siteUrl?: string;
  primaryColor?: string;
}): string {
  const {
    title,
    body,
    siteName = 'PBI Robot',
    siteUrl = 'https://pbirobot.dreamitbiz.com',
    primaryColor = '#1B2A4A',
  } = params;

  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Apple SD Gothic Neo',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
        <tr>
          <td style="background:${primaryColor};padding:24px 32px;">
            <a href="${siteUrl}" style="color:#fff;font-size:20px;font-weight:700;text-decoration:none;">${siteName}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;color:#333;font-size:15px;line-height:1.7;">
            <h2 style="margin:0 0 20px;font-size:18px;color:#111;">${title}</h2>
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;background:#f9f9f9;border-top:1px solid #eee;font-size:12px;color:#999;text-align:center;">
            본 메일은 발신 전용입니다. 문의: <a href="mailto:pbi240426@gmail.com" style="color:${primaryColor};">pbi240426@gmail.com</a><br>
            &copy; ${new Date().getFullYear()} PBI Robot. All rights reserved.
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
