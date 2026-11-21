import { createReadStream, existsSync, mkdirSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { homedir } from 'node:os';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const templatePath = join(root, 'scripts', 'og', 'index.html');
const outputPath = process.argv[2]
	? resolve(process.cwd(), process.argv[2])
	: join(root, 'static', 'og.png');

const mimeTypes = {
	'.css': 'text/css; charset=utf-8',
	'.html': 'text/html; charset=utf-8',
	'.ico': 'image/x-icon',
	'.js': 'text/javascript; charset=utf-8',
	'.png': 'image/png',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
	'.woff2': 'font/woff2'
};

function findChrome() {
	const candidates = [
		process.env.CHROME_PATH,
		process.env.PUPPETEER_EXECUTABLE_PATH,
		'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
		'/Applications/Chromium.app/Contents/MacOS/Chromium',
		join(homedir(), 'Applications/Google Chrome.app/Contents/MacOS/Google Chrome'),
		join(homedir(), 'Applications/Chromium.app/Contents/MacOS/Chromium'),
		'/usr/bin/google-chrome',
		'/usr/bin/google-chrome-stable',
		'/usr/bin/chromium',
		'/usr/bin/chromium-browser',
		'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
		'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
	];

	const executablePath = candidates.find((candidate) => candidate && existsSync(candidate));

	if (!executablePath) {
		throw new Error(
			'Could not find Chrome or Chromium. Set CHROME_PATH to the browser executable and try again.'
		);
	}

	return executablePath;
}

function createStaticServer() {
	return createServer((request, response) => {
		let pathname;

		try {
			pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://127.0.0.1').pathname);
		} catch {
			response.writeHead(400).end('Bad request');
			return;
		}

		const filePath = resolve(root, `.${pathname}`);

		if (filePath !== root && !filePath.startsWith(root + sep)) {
			response.writeHead(403).end('Forbidden');
			return;
		}

		try {
			if (!statSync(filePath).isFile()) {
				response.writeHead(404).end('Not found');
				return;
			}
		} catch {
			response.writeHead(404).end('Not found');
			return;
		}

		response.writeHead(200, {
			'Cache-Control': 'no-store',
			'Content-Type': mimeTypes[extname(filePath)] ?? 'application/octet-stream'
		});
		createReadStream(filePath).pipe(response);
	});
}

async function startServer(server) {
	await new Promise((resolveListen, rejectListen) => {
		server.once('error', rejectListen);
		server.listen(0, '127.0.0.1', resolveListen);
	});

	const address = server.address();
	if (!address || typeof address === 'string') {
		throw new Error('Failed to determine the local preview server port.');
	}

	return address.port;
}

async function main() {
	if (!existsSync(templatePath)) {
		throw new Error(`Open Graph template not found at ${relative(root, templatePath)}`);
	}

	mkdirSync(dirname(outputPath), { recursive: true });

	const server = createStaticServer();
	const port = await startServer(server);
	let browser;

	try {
		browser = await puppeteer.launch({
			executablePath: findChrome(),
			headless: true,
			args: ['--hide-scrollbars', '--disable-gpu']
		});

		const page = await browser.newPage();
		await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
		await page.goto(`http://127.0.0.1:${port}/scripts/og/index.html`, {
			waitUntil: 'networkidle0'
		});

		await page.evaluate(async () => {
			await document.fonts.ready;
			await Promise.all([...document.images].map((image) => image.decode().catch(() => undefined)));
		});

		// Give the browser one last frame to paint after fonts and images settle.
		await new Promise((resolveTimeout) => setTimeout(resolveTimeout, 150));

		await page.screenshot({ path: outputPath, type: 'png' });
		console.log(`Wrote ${relative(root, outputPath)}`);
	} finally {
		await browser?.close();
		await new Promise((resolveClose) => server.close(resolveClose));
	}
}

await main();
