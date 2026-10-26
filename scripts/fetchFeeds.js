import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.resolve(__dirname, '../src/data/writingPosts.json');

function extractItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemRegex.exec(xml)) !== null) {
    const itemStr = match[1];
    const titleMatch = /<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/.exec(itemStr);
    const linkMatch = /<link>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/.exec(itemStr);
    const pubDateMatch = /<pubDate>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/pubDate>/.exec(itemStr);
    const descMatch = /<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/.exec(itemStr);
    items.push({
      title: titleMatch ? titleMatch[1].trim() : '',
      link: linkMatch ? linkMatch[1].trim() : '',
      pubDate: pubDateMatch ? pubDateMatch[1].trim() : '',
      description: descMatch ? descMatch[1].trim() : ''
    });
  }
  return items;
}

async function updateFeeds() {
  console.log('[fetchFeeds] Fetching latest Substack and Psychology Today feeds...');
  try {
    let existingData = { substackPosts: [], ptPosts: [] };
    if (fs.existsSync(outputPath)) {
      try {
        existingData = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
      } catch (err) {
        console.warn('[fetchFeeds] Could not read existing data:', err.message);
      }
    }

    let substackPosts = existingData.substackPosts || [];
    let ptPosts = existingData.ptPosts || [];

    try {
      const sRes = await fetch('https://elizabethmateer.substack.com/feed', {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ElizabethMateerSite/1.0)' },
        signal: AbortSignal.timeout(8000)
      });
      if (sRes.ok) {
        const sXml = await sRes.text();
        const parsed = extractItems(sXml).slice(0, 3);
        if (parsed.length > 0) {
          substackPosts = parsed;
          console.log(`[fetchFeeds] Successfully retrieved ${parsed.length} Substack essays.`);
        }
      }
    } catch (err) {
      console.warn('[fetchFeeds] Could not refresh Substack feed, keeping existing:', err.message);
    }

    try {
      const pRes = await fetch('https://www.psychologytoday.com/us/blog/the-architecture-of-identity/feed', {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ElizabethMateerSite/1.0)' },
        signal: AbortSignal.timeout(8000)
      });
      if (pRes.ok) {
        const pXml = await pRes.text();
        const parsed = extractItems(pXml).slice(0, 3);
        if (parsed.length > 0) {
          ptPosts = parsed;
          console.log(`[fetchFeeds] Successfully retrieved ${parsed.length} Psychology Today articles.`);
        }
      }
    } catch (err) {
      console.warn('[fetchFeeds] Could not refresh PT feed, keeping existing:', err.message);
    }

    const outputData = { substackPosts, ptPosts };
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf-8');
    console.log('[fetchFeeds] Successfully updated writingPosts.json');
  } catch (error) {
    console.error('[fetchFeeds] Error updating feeds:', error.message);
    // Don't fail the build if fetching fails
  }
}

updateFeeds();
