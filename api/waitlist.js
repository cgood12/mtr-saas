// Vercel Serverless Function - MTR Direct Waitlist
// Captures emails with metadata, logs to /tmp, notifies via FormSubmit

import { readFileSync, writeFileSync, existsSync } from 'fs';

const WAITLIST_FILE = '/tmp/mtr-waitlist.json';

function loadWaitlist() {
  try {
    if (existsSync(WAITLIST_FILE)) {
      return JSON.parse(readFileSync(WAITLIST_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('[WAITLIST] Failed to read file:', e.message);
  }
  return [];
}

function saveWaitlist(entries) {
  try {
    writeFileSync(WAITLIST_FILE, JSON.stringify(entries, null, 2));
  } catch (e) {
    console.error('[WAITLIST] Failed to write file:', e.message);
  }
}

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { email, name, city, propertyType, propertyCount, painPoints, source } = req.body || {};

    if (!email || !email.includes('@') || email.length < 5) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    // Build signup entry
    const entry = {
      email: email.trim().toLowerCase(),
      name: (name || '').trim() || null,
      city: (city || '').trim() || null,
      propertyType: propertyType || null,
      propertyCount: propertyCount || null,
      painPoints: painPoints || null,
      source: source || 'unknown',
      timestamp: new Date().toISOString(),
    };

    console.log(`[WAITLIST] New signup: ${entry.email} (source: ${entry.source}) at ${entry.timestamp}`);

    // Append to local JSON file
    const waitlist = loadWaitlist();
    waitlist.push(entry);
    saveWaitlist(waitlist);

    // Build notification email body
    const details = [
      `Email: ${entry.email}`,
      entry.name ? `Name: ${entry.name}` : null,
      entry.city ? `City: ${entry.city}` : null,
      entry.propertyType ? `Property Type: ${entry.propertyType}` : null,
      entry.propertyCount ? `Properties: ${entry.propertyCount}` : null,
      entry.painPoints ? `Pain Points: ${Array.isArray(entry.painPoints) ? entry.painPoints.join(', ') : entry.painPoints}` : null,
      `Source: ${entry.source}`,
      `Time: ${entry.timestamp}`,
    ].filter(Boolean).join('\n');

    // Send notification via FormSubmit
    try {
      await fetch('https://formsubmit.co/ajax/chadwick23.ai@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          email: entry.email,
          _subject: `🏠 New MTR Direct Signup! (${entry.source})`,
          message: details,
          _template: 'table'
        })
      });
    } catch (notifyErr) {
      console.error('[WAITLIST] FormSubmit notification failed:', notifyErr.message);
      // Don't fail the signup if notification fails
    }

    return res.status(200).json({
      success: true,
      message: 'Welcome to the waitlist!'
    });

  } catch (error) {
    console.error('[WAITLIST] Error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
