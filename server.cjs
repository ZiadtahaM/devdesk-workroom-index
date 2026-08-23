const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8085;
const DIR = path.join(__dirname, 'dist', 'public');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

let evidenceTasks = [
  { id: 'ev-1', title: 'Monorepo Zero-Downtime Migration', status: 'verified_pass', artifactsCount: 8, contractTestsPassing: true, timestamp: new Date().toISOString() },
  { id: 'ev-2', title: 'Argon2id Vault Cryptographic Hardening', status: 'verified_pass', artifactsCount: 12, contractTestsPassing: true, timestamp: new Date().toISOString() }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const reqPath = parsedUrl.pathname;
  const method = req.method;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (reqPath.startsWith('/api/')) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (reqPath.includes('evidence') || reqPath.includes('tasks')) return res.end(JSON.stringify(evidenceTasks));
    if (reqPath.includes('metrics')) {
      return res.end(JSON.stringify({
        totalEvidenceItems: 24,
        contractTestsPassed: 100,
        architecturalReviewScore: 98.2
      }));
    }
    return res.end(JSON.stringify({ success: true, evidenceTasks }));
  }

  let file = path.join(DIR, reqPath === '/' ? 'index.html' : reqPath);
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    file = path.join(DIR, 'index.html');
  }
  if (!fs.existsSync(file)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
    return;
  }
  const ext = path.extname(file).toLowerCase();
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log('DevDesk Workroom Index Backend & Frontend listening at http://localhost:' + PORT);
});
