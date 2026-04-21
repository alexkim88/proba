const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

const NOVA_POSHTA_API_KEY = 'f4f0da1ec6558faa69d6300f1537034e';


const PORT = 8081;
const HOST = '127.0.0.1';

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

// Helper for Nova Poshta Proxy
const handleNovaPoshtaProxy = (req, res) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        try {
            const params = JSON.parse(body);
            params.apiKey = NOVA_POSHTA_API_KEY;

            const postData = JSON.stringify(params);
            const options = {
                hostname: 'api.novaposhta.ua',
                port: 443,
                path: '/v2.0/json/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(postData)
                }
            };

            const proxyReq = https.request(options, proxyRes => {
                res.writeHead(proxyRes.statusCode, proxyRes.headers);
                proxyRes.pipe(res, { end: true });
            });

            proxyReq.on('error', e => {
                console.error(`Proxy error: ${e.message}`);
                res.writeHead(500);
                res.end('Proxy Error');
            });

            proxyReq.write(postData);
            proxyReq.end();
        } catch (e) {
            res.writeHead(400);
            res.end('Invalid JSON');
        }
    });
};

const server = http.createServer((req, res) => {
    if (req.url === '/api/nova-poshta' && req.method === 'POST') {
        return handleNovaPoshtaProxy(req, res);
    }

    // Remove query string for file lookup
    const parsedUrl = new URL(req.url, `http://${HOST}:${PORT}`);
    let filePath = '.' + decodeURIComponent(parsedUrl.pathname);

    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 Not Found: ' + filePath);
            } else {
                res.writeHead(500);
                res.end('500 Internal Server Error: ' + error.code);
            }
        } else {
            res.writeHead(200, {
                'Content-Type': contentType,
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, HOST, () => {
    console.log(`Server is running!`);
    console.log(`Main Site: http://${HOST}:${PORT}/index.html`);
    console.log(`Admin Panel: http://${HOST}:${PORT}/admin.html`);
    console.log(`Press Ctrl+C to stop the server.`);
});
