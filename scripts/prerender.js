// Renders every page to static HTML after the build, so search engines and
// link previews get full content without running JavaScript.
// Writes dist/index.html, dist/work/<slug>/index.html and dist/sitemap.xml.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const SITE = 'https://aditya-portfolio-woad-nine.vercel.app'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, routes, findProject } = await import(pathToFileURL(ssrEntry).href)
const template = readFileSync(path.join(dist, 'index.html'), 'utf8')
if (!template.includes('<div id="root"></div>')) throw new Error('root div not found in dist/index.html')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Swap the page-specific tags in <head> for a case study page.
const withHead = (html, { title, description, url, image }) => {
  const set = (re, value) => {
    if (!re.test(html)) throw new Error(`head tag not found: ${re}`)
    html = html.replace(re, value)
  }
  set(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
  set(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
  set(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
  set(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
  set(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
  set(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`)
  set(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(title)}`)
  set(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(description)}`)
  set(/(<meta property="og:type" content=")[^"]*/, '$1article')
  if (image) {
    set(/(<meta property="og:image" content=")[^"]*/, `$1${image}`)
    set(/(<meta name="twitter:image" content=")[^"]*/, `$1${image}`)
    html = html.replace(/\s*<meta property="og:image:(width|height)" content="[^"]*" \/>/g, '')
  }
  return html
}

for (const route of routes) {
  let html = template.replace('<div id="root"></div>', `<div id="root">${render(route)}</div>`)
  const project = findProject(route)
  let file = path.join(dist, 'index.html')

  if (project) {
    html = withHead(html, {
      title: `${project.title} | Aditya Bagade`,
      description: project.summary,
      url: `${SITE}${route}`,
      image: project.cover,
    })
    const dir = path.join(dist, 'work', project.slug)
    mkdirSync(dir, { recursive: true })
    file = path.join(dir, 'index.html')
  }
  writeFileSync(file, html)
}

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url>
    <loc>${SITE}${r}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>
`
writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)
rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Prerendered ${routes.length} pages and wrote sitemap.xml`)
