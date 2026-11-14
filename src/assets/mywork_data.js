// Projects shown in the Portfolio section.
// Covers for CodeMirror case studies come from codemirror.in's public media storage.
const CM_MEDIA = 'https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects'
const CM_WORK = 'https://www.codemirror.in/work'

const mywork_data = [
  {
    title: 'Finicify Terminal – Fund Analytics & Reporting',
    category: 'Web App · Fintech',
    summary: 'Web app that turns daily Turkish fund data (TEFAS, KAP) into ratings, risk views, model portfolios and branded PDF reports with a creator → reviewer → publisher flow.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'Google Gemini'],
    cover: `${CM_MEDIA}/fund-analytics-reporting-platform/cover.jpg`,
    link: `${CM_WORK}/fund-analytics-reporting-platform`,
  },
  {
    title: 'Finicify IR Web – Investor Relations Platform',
    category: 'Web App · Multi-tenant SaaS',
    summary: 'One Next.js app runs a branded investor relations site for every listed company, each on its own domain with automatic HTTPS, all managed from one admin console.',
    stack: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Docker', 'Caddy'],
    cover: `${CM_MEDIA}/investor-relations-website-platform/cover.jpg`,
    link: `${CM_WORK}/investor-relations-website-platform`,
  },
  {
    title: 'HRMS, Projects & Invoicing Platform',
    category: 'Web App · Internal SaaS',
    summary: 'One login for projects, time tracking, invoicing and HR. Node.js + Express backend with JWT auth, RBAC, GST-compliant invoicing and payroll (PF, professional tax, TDS).',
    stack: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'React', 'Docker'],
  },
  {
    title: 'WhatsApp Marketing Platform for a Silk Retailer',
    category: 'Web App · Marketing',
    summary: 'Built on the official WhatsApp Business API: upload contact lists, create approved templates, and send birthday, festival and offer campaigns to 30,000+ contacts with delivery tracking.',
    stack: ['Node.js', 'Express.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'React', 'WhatsApp API'],
    cover: `${CM_MEDIA}/retail-whatsapp-marketing-platform/cover.jpg`,
    link: `${CM_WORK}/retail-whatsapp-marketing-platform`,
  },
  {
    title: 'Admissions & Payments Platform – Ultimate Life Summit',
    category: 'Web App · EdTech',
    summary: 'Family portal with a six-step application, document uploads, e-signatures and card payments (full, deposit or plan), plus a staff side to review, email and track every family.',
    stack: ['Node.js', 'Express.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'React', 'Stripe'],
    cover: `${CM_MEDIA}/ultimate-life-summit-admissions-platform/cover.jpg`,
    link: `${CM_WORK}/ultimate-life-summit-admissions-platform`,
  },
  {
    title: "AI Children's Book Studio",
    category: 'Web App · AI',
    summary: 'AI web app that turns a manuscript or a parent’s idea into an illustrated, print-ready picture book, keeping characters consistent across pages.',
    stack: ['Node.js', 'Express.js', 'TypeScript', 'Supabase', 'Redis', 'OpenAI', 'React'],
    cover: `${CM_MEDIA}/ai-childrens-book-studio/cover.jpg`,
    link: `${CM_WORK}/ai-childrens-book-studio`,
  },
  {
    title: 'Website & CMS for an India Expansion Consultancy',
    category: 'Website · CMS',
    summary: 'English and German website with a custom admin that publishes articles, captures guide-download leads (expiring secure links) and posts to LinkedIn.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'DeepL API', 'LinkedIn API'],
    cover: `${CM_MEDIA}/india-expansion-website-cms/cover.jpg`,
    link: `${CM_WORK}/india-expansion-website-cms`,
  },
  {
    title: 'Fintech Website with a Custom Content Admin',
    category: 'Website · CMS',
    summary: 'Animated scroll-story website for an AI money-decision app, with a waitlist, article and video library, and an admin so the team can publish without a developer.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'GSAP', 'Framer Motion', 'Cloudinary'],
    cover: `${CM_MEDIA}/fintech-website-with-cms/wl-cover.jpg`,
    link: `${CM_WORK}/fintech-website-with-cms`,
  },
  {
    title: 'Bilingual Website for a Capital Markets Fintech',
    category: 'Website · Fintech',
    summary: 'Turned a design prototype into a Turkish and English Next.js website for three capital markets products, built for SEO and demo bookings.',
    stack: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    cover: `${CM_MEDIA}/capital-markets-fintech-website/cover.jpg`,
    link: `${CM_WORK}/capital-markets-fintech-website`,
  },
  {
    title: 'CodeMirror Website & CMS',
    category: 'Website · CMS',
    summary: 'Company website on the Next.js App Router with Server Components, Server Actions and on-demand revalidation, plus a Supabase admin for projects, jobs and CV applications.',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'GSAP', 'Vercel'],
    link: 'https://www.codemirror.in/',
    linkLabel: 'Visit site',
  },
  {
    title: 'AI GitHub Integration Platform (Freelance – Mendel Lab)',
    category: 'Web App · AI · DevOps',
    summary: 'AI-driven platform for repository analysis and pull-request reviews using GitHub OAuth and the GitHub Apps API, with full DevOps on AWS EC2, NGINX and webhooks.',
    stack: ['Node.js', 'Express.js', 'GitHub Apps API', 'OAuth', 'AWS EC2', 'NGINX'],
  },
  {
    title: 'School Management SaaS (CodeClout)',
    category: 'Web App · Multi-tenant SaaS',
    summary: 'Multi-tenant school management SaaS with 6+ user roles: secure Node.js REST APIs, JWT-based RBAC, PostgreSQL schemas, AWS S3 storage and scheduled jobs.',
    stack: ['Node.js', 'JavaScript', 'React', 'PostgreSQL', 'AWS S3'],
  },
]

export default mywork_data
