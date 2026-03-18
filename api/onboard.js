// Vercel Serverless Function - MTR Direct Host Onboarding
// Accepts property listing data, generates slug, saves to /tmp

import { readFileSync, writeFileSync, existsSync } from 'fs';

const HOSTS_FILE = '/tmp/mtr-hosts.json';

function loadHosts() {
  try {
    if (existsSync(HOSTS_FILE)) {
      return JSON.parse(readFileSync(HOSTS_FILE, 'utf8'));
    }
  } catch (e) {
    console.error('[ONBOARD] Failed to read file:', e.message);
  }
  return [];
}

function saveHosts(entries) {
  try {
    writeFileSync(HOSTS_FILE, JSON.stringify(entries, null, 2));
  } catch (e) {
    console.error('[ONBOARD] Failed to write file:', e.message);
  }
}

function generateSlug(name) {
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const suffix = Math.random().toString(36).substring(2, 6);
  return base + '-' + suffix;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const body = req.body || {};
    const {
      propertyName, city, state, propertyType, bedrooms, bathrooms, maxGuests,
      monthlyRate, minStay, availableFrom, petPolicy,
      headline, description, photoUrl, amenities,
      hostName, hostEmail, hostPhone, contactMethod
    } = body;

    if (!propertyName || !hostEmail) {
      return res.status(400).json({ error: 'Property name and email are required' });
    }

    const slug = generateSlug(propertyName);

    const entry = {
      slug,
      propertyName: propertyName.trim(),
      city: (city || '').trim(),
      state: (state || '').trim(),
      propertyType: propertyType || null,
      bedrooms: bedrooms || null,
      bathrooms: bathrooms || null,
      maxGuests: maxGuests || null,
      monthlyRate: monthlyRate || null,
      minStay: minStay || '30',
      availableFrom: availableFrom || null,
      petPolicy: petPolicy || 'No pets',
      headline: (headline || '').trim(),
      description: (description || '').trim(),
      photoUrl: (photoUrl || '').trim() || null,
      amenities: amenities || [],
      hostName: (hostName || '').trim(),
      hostEmail: hostEmail.trim().toLowerCase(),
      hostPhone: (hostPhone || '').trim() || null,
      contactMethod: contactMethod || 'Email',
      listingUrl: '/listing/' + slug,
      createdAt: new Date().toISOString()
    };

    console.log(`[ONBOARD] New listing: "${entry.propertyName}" by ${entry.hostEmail} -> /listing/${slug}`);

    const hosts = loadHosts();
    hosts.push(entry);
    saveHosts(hosts);

    // Also add to waitlist for tracking
    try {
      const waitlistFile = '/tmp/mtr-waitlist.json';
      let waitlist = [];
      if (existsSync(waitlistFile)) {
        waitlist = JSON.parse(readFileSync(waitlistFile, 'utf8'));
      }
      waitlist.push({
        email: entry.hostEmail,
        name: entry.hostName,
        city: entry.city + ', ' + entry.state,
        source: 'onboard',
        propertyType: entry.propertyType,
        timestamp: entry.createdAt
      });
      writeFileSync(waitlistFile, JSON.stringify(waitlist, null, 2));
    } catch (e) {
      console.error('[ONBOARD] Failed to update waitlist:', e.message);
    }

    return res.status(200).json({
      success: true,
      slug,
      listingUrl: '/listing/' + slug
    });

  } catch (error) {
    console.error('[ONBOARD] Error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
}
