// Renders the app to static HTML after the build, so search engines and
// link previews get the full page content without running JavaScript.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath = path.join(root, 'dist', 'index.html')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render } = await import(pathToFileURL(ssrEntry).href)
const appHtml = render()
const html = readFileSync(htmlPath, 'utf8')

if (!html.includes('<div id="root"></div>')) throw new Error('root div not found in dist/index.html')
writeFileSync(htmlPath, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`))
rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Prerendered ${(appHtml.length / 1024).toFixed(1)} kB of HTML into dist/index.html`)
