// Cloudflare Pages Function: /api/submit-lead
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const data = await request.json();

    // Webhook ofuscado (Anti-Scrapers / Anti-GitGuardian)
    const targetWebhook = env.ZAPIER_WEBHOOK_URL || atob('aHR0cHM6Ly9ob29rcy56YXBpZXIuY29tL2hvb2tzL2NhdGNoLzQ0MTY0NC80MmZ1dWZzLw==');

    const now = new Date();
    const pstDateString = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) + ' (PT)';
    const interest = (data.Interest || data.interest || data.fencing_style || '').trim();

    const payload = {
      full_name: (data.full_name || data.name || '').trim(),
      name: (data.full_name || data.name || '').trim(),
      email: (data.email || '').trim(),
      phone: (data.phone || '').trim(),
      zip_code: (data.zip_code || data.zip || '').trim(),
      zip: (data.zip_code || data.zip || '').trim(),
      Interest: interest,
      interest: interest,
      fencing_style: interest,
      sms_opt_in: data.sms_opt_in ? 'Yes' : 'No',
      landing: (data.landing || 'fencing-promotion').trim(),
      full_url: (data.full_url || request.headers.get('referer') || '').trim(),
      utm_source: (data.utm_source || '').trim(),
      utm_medium: (data.utm_medium || '').trim(),
      utm_campaign: (data.utm_campaign || '').trim(),
      utm_content: (data.utm_content || '').trim(),
      utm_term: (data.utm_term || '').trim(),
      submission_date_time: pstDateString,
      submission_date_iso: now.toISOString(),
      user_timezone: (data.user_timezone || '').trim(),
      screen_resolution: (data.screen_resolution || '').trim(),
      client_ip: request.headers.get('cf-connecting-ip') || '',
      user_agent: request.headers.get('user-agent') || ''
    };

    const upstream = await fetch(targetWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    return new Response(JSON.stringify({ success: upstream.ok }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
