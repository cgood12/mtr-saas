// Vercel Serverless Function - MTR Direct Waitlist
// Captures emails and stores them in Vercel KV (or logs for now)

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    // Log the signup (visible in Vercel logs)
    console.log(`[WAITLIST] New signup: ${email} at ${new Date().toISOString()}`);

    // TODO: Add to Vercel KV, Google Sheet, or email service
    // For now, we'll use FormSubmit as a backup notification
    
    // Send notification email via FormSubmit.co (free, no signup)
    await fetch('https://formsubmit.co/ajax/chadwick23.ai@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        _subject: '🏠 New MTR Direct Waitlist Signup!',
        message: `New waitlist signup: ${email}`,
        _template: 'table'
      })
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Welcome to the waitlist!' 
    });

  } catch (error) {
    console.error('[WAITLIST] Error:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
