// Vercel Serverless Function - MTR Direct Admin API
// Returns waitlist signups (password-protected)

import { readFileSync, existsSync } from 'fs';

const WAITLIST_FILE = '/tmp/mtr-waitlist.json';
const ADMIN_PASSWORD = 'mtr2026';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const password = req.query.password;
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    let entries = [];
    if (existsSync(WAITLIST_FILE)) {
      entries = JSON.parse(readFileSync(WAITLIST_FILE, 'utf8'));
    }
    return res.status(200).json({
      count: entries.length,
      entries: entries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    });
  } catch (error) {
    console.error('[ADMIN] Error reading waitlist:', error);
    return res.status(500).json({ error: 'Failed to load waitlist data' });
  }
}
