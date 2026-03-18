// Vercel Serverless Function - MTR Direct Booking Inquiry
// Accepts guest booking inquiries, saves to /tmp

import { readFileSync, writeFileSync, existsSync } from 'fs';

const BOOKINGS_FILE = '/tmp/mtr-bookings.json';

function loadBookings() {
  try {
    if (existsSync(BOOKINGS_FILE)) {
      return JSON.parse(readFileSync(BOOKINGS_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('[BOOKING] Failed to read file:', e.message);
  }
  return [];
}

function saveBookings(entries) {
  try {
    writeFileSync(BOOKINGS_FILE, JSON.stringify(entries, null, 2));
  } catch (e) {
    console.error('[BOOKING] Failed to write file:', e.message);
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { slug, guestName, email, phone, moveIn, duration, message } = req.body || {};

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    if (!guestName) {
      return res.status(400).json({ error: 'Guest name required' });
    }

    const entry = {
      slug: slug || 'unknown',
      guestName: guestName.trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim() || null,
      moveIn: moveIn || null,
      duration: duration || null,
      message: (message || '').trim() || null,
      createdAt: new Date().toISOString()
    };

    console.log(`[BOOKING] New inquiry from ${entry.guestName} (${entry.email}) for listing: ${entry.slug}`);

    const bookings = loadBookings();
    bookings.push(entry);
    saveBookings(bookings);

    return res.status(200).json({
      success: true,
      message: 'Request sent to host!'
    });

  } catch (error) {
    console.error('[BOOKING] Error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
