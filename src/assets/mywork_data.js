// Projects shown in the Work section and on each /work/<slug> case study page.
// Images for CodeMirror projects are served from CodeMirror's public media storage.
const mywork_data = [
  {
    "slug": "fund-analytics-reporting-platform",
    "title": "Finicify Terminal – Fund Analytics & Reporting",
    "category": "Web App · Fintech",
    "summary": "Web app that turns daily Turkish fund data (TEFAS, KAP) into ratings, risk views, model portfolios and branded PDF reports with a creator → reviewer → publisher flow.",
    "stack": [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Google Gemini"
    ],
    "cover": "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fund-analytics-reporting-platform/cover.jpg",
    "client": "Finicify",
    "type": "Web app",
    "year": "2026",
    "intro": "We built Finicify Terminal, a web app that turns daily Turkish fund data into ratings, risk views, model portfolios and branded reports.",
    "about": [
      "Finicify serves asset managers in Türkiye, who follow hundreds of investment funds using public data from TEFAS, the national fund platform, and KAP, the public disclosure platform. Teams were building the same reports by hand from different sources every period, and each team calculated risk and performance in its own way. Institutional clients also needed a clear record of who wrote, checked and approved each report.",
      "We built Finicify Terminal, a web app for fund analysts. Every weekday it collects fund prices, fees, holdings and disclosures, then calculates returns, volatility, star ratings and figures for each fund company. Analysts can open any fund to see its price history, asset mix and position changes, and build a model portfolio from a six-question risk quiz. A drag-and-drop report builder turns this data into branded PDF reports, with a creator, reviewer and publisher approval flow. An AI assistant answers questions using the app's own data.",
      "The app now runs on its own. Over 20 scheduled background jobs collect fresh fund data every weekday, re-check it during the day and fill in any missing days, so the numbers stay complete. Data collection runs separately from the app, so heavy updates do not slow users down. New updates go live automatically in about two to three minutes."
    ],
    "scope": [
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "Third-Party API Integration",
      "Deployment & DevOps"
    ],
    "shots": [
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fund-analytics-reporting-platform/screenshot-1.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fund-analytics-reporting-platform/screenshot-2.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fund-analytics-reporting-platform/screenshot-3.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fund-analytics-reporting-platform/screenshot-4.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fund-analytics-reporting-platform/screenshot-5.jpg"
    ]
  },
  {
    "slug": "investor-relations-website-platform",
    "title": "Finicify IR Web – Investor Relations Platform",
    "category": "Web App · Multi-tenant SaaS",
    "summary": "One Next.js app runs a branded investor relations site for every listed company, each on its own domain with automatic HTTPS, all managed from one admin console.",
    "stack": [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Caddy"
    ],
    "cover": "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/investor-relations-website-platform/cover.jpg",
    "client": "Finicify",
    "type": "Web app",
    "year": "2026",
    "intro": "We built Finicify IR Web, a platform that gives each listed company its own branded investor relations website, all run from one admin console.",
    "about": [
      "Finicify wanted to offer listed companies in Türkiye a managed investor relations website. Many of these companies had outdated, disorganised investor pages. Their documents were uploaded by hand with inconsistent labels, and small teams had little time to keep the site current. Turkish rules from SPK, the capital markets regulator, also set out what an investor site should contain. Finicify needed one platform that could launch and run many company sites without new code for each one.",
      "We built Finicify IR Web. One app runs a separate investor site for every company, each with its own logo, colours, web address and automatic HTTPS. A new company gets twelve standard pages in one step. IR teams edit pages in a visual builder, keep reports in a document library with version history, review disclosures pulled from KAP, the public disclosure platform, and manage a financial calendar. Before publishing, the builder checks the site against key items from SPK's required-content list. Sites work in Turkish and English.",
      "The admin console is live, and adding a company takes one step with no code changes. Its pages, theme and web address are created automatically. Every site runs on the same code, so a fix or new feature reaches all companies at once. Pages are rendered on the server, which helps search engines find them, and visitors can download a company's key documents as one \"Investor Set\"."
    ],
    "scope": [
      "Website Development",
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "Third-Party API Integration",
      "Deployment & DevOps"
    ],
    "shots": [
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/investor-relations-website-platform/screenshot-1.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/investor-relations-website-platform/screenshot-2.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/investor-relations-website-platform/screenshot-3.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/investor-relations-website-platform/screenshot-4.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/investor-relations-website-platform/screenshot-5.jpg"
    ]
  },
  {
    "slug": "hrms-projects-invoicing-platform",
    "title": "HRMS, Projects & Invoicing Platform",
    "category": "Web App · Internal SaaS",
    "summary": "One login for projects, time tracking, invoicing and HR. Node.js + Express backend with JWT auth, RBAC, GST-compliant invoicing and payroll (PF, professional tax, TDS).",
    "stack": [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "React",
      "Tailwind CSS",
      "Docker"
    ],
    "client": "IT services company with teams in India and the US",
    "type": "Web app",
    "year": "",
    "intro": "A single platform that runs projects, time tracking, invoicing and HR for an IT services company, built end to end on Node.js, Express and PostgreSQL.",
    "about": [
      "The company ran projects, timesheets, invoices and HR in separate tools and spreadsheets, with teams in India and the US. Managers had no single view of who was working on what, and invoicing and payroll took hours of manual work every month.",
      "I built the complete platform end to end: a Node.js + Express.js + TypeScript backend on PostgreSQL with Drizzle ORM, and a React + Tailwind CSS frontend, all behind one login. JWT authentication and role-based access control run through every REST API and screen, so each person only sees the data and actions their role allows.",
      "The platform covers tasks and issues, timesheets, invoices, employee records, leave, payslips, appraisals and company asset tracking. Invoices are GST-compliant across INR, USD and SGD with automatic CGST/SGST/IGST, and payroll handles PF, professional tax and TDS, including attendance rules with a 6 AM night-shift cut-off and pro-rated pay."
    ],
    "highlights": [
      "Designed the REST API modules and PostgreSQL schemas for every area of the platform",
      "JWT authentication with role-based access control across APIs and UI",
      "GST-compliant multi-currency invoicing with automatic tax split",
      "Payroll with PF, professional tax, TDS and pro-rated pay",
      "Fireflies API integration for meeting notes",
      "Containerized with Docker for consistent deployments"
    ],
    "scope": [
      "Backend Development",
      "Database Design",
      "Frontend Development",
      "Third-Party API Integration",
      "Deployment & DevOps"
    ]
  },
  {
    "slug": "retail-whatsapp-marketing-platform",
    "title": "WhatsApp Marketing Platform for a Silk Retailer",
    "category": "Web App · Marketing",
    "summary": "Built on the official WhatsApp Business API: upload contact lists, create approved templates, and send birthday, festival and offer campaigns to 30,000+ contacts with delivery tracking.",
    "stack": [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "React",
      "WhatsApp API"
    ],
    "cover": "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/retail-whatsapp-marketing-platform/cover.jpg",
    "client": "A silk retail brand",
    "type": "Web app",
    "year": "2026",
    "intro": "A WhatsApp marketing platform that lets a silk retailer send birthday, festival and offer campaigns to 30,000+ contacts and track every message.",
    "about": [
      "A silk retail brand wanted to reach its 30,000+ customer contacts on WhatsApp with birthday wishes, festival greetings and offers. Its marketing team had to do this on time and without technical help. Every message also had to follow WhatsApp's rules: customers must agree to receive messages, and each message design must be approved by Meta first. The team needed one place to plan campaigns and see which messages reached customers.",
      "We built a web platform connected to the official WhatsApp Business API. Staff upload customer lists from Excel or CSV, and the system skips bad phone numbers and duplicates. They create message templates with images, buttons and the customer's name, preview them as a WhatsApp chat and send them to Meta for approval. A step-by-step campaign builder targets all customers, a birthday month, an anniversary month or a chosen list, then sends now or at a set time.",
      "The marketing team can now plan birthday, festival and offer campaigns weeks ahead and run them from one place. Each campaign has its own report showing how many messages were sent, delivered, read or failed, down to each customer, with the reason for any failure. Failed messages can be resent with one click or at a set time each day, and customers who opt out on WhatsApp are left out of future campaigns."
    ],
    "scope": [
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "Third-Party API Integration",
      "Deployment & DevOps"
    ],
    "shots": [
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/retail-whatsapp-marketing-platform/screenshot-1.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/retail-whatsapp-marketing-platform/screenshot-2.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/retail-whatsapp-marketing-platform/screenshot-3.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/retail-whatsapp-marketing-platform/screenshot-4.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/retail-whatsapp-marketing-platform/screenshot-5.jpg"
    ]
  },
  {
    "slug": "ultimate-life-summit-admissions-platform",
    "title": "Admissions & Payments Platform – Ultimate Life Summit",
    "category": "Web App · EdTech",
    "summary": "Family portal with a six-step application, document uploads, e-signatures and card payments (full, deposit or plan), plus a staff side to review, email and track every family.",
    "stack": [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "React",
      "Stripe"
    ],
    "cover": "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ultimate-life-summit-admissions-platform/cover.jpg",
    "client": "Ultimate Life Summit",
    "type": "Web app",
    "year": "",
    "intro": "One online portal where families apply, register and pay for Ultimate Life Summit, and where staff review, email and track every family.",
    "about": [
      "Ultimate Life Summit runs a yearly summit for students. Every year, families apply and the team reviews each application to decide who gets a place. Accepted families then send medical details, insurance cards, consent forms, waivers and travel plans. They also pay tuition, often with a scholarship or a payment plan. The challenge was keeping all of this in one place for every family.",
      "We built a web platform with two sides. Families get their own portal. They fill in a six-step application that saves as they go, upload documents and sign online. Once accepted, they complete registration and pay by card: in full, a deposit only, or a deposit with automatic monthly payments. Any scholarship is taken off first. Staff get an admin portal to review applications, change the forms without a developer, send emails from templates, follow payments and export data to Excel or PDF.",
      "The whole journey, from the first application to the final payment, now runs in one place. Families can see their progress and exactly what they still owe at any time. Staff see the numbers for the current summit on one dashboard. Each year runs as its own cycle, so past summits are archived but still easy to look up."
    ],
    "scope": [
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "Third-Party API Integration",
      "Deployment & DevOps"
    ],
    "shots": [
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ultimate-life-summit-admissions-platform/screenshot-1.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ultimate-life-summit-admissions-platform/screenshot-2.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ultimate-life-summit-admissions-platform/screenshot-3.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ultimate-life-summit-admissions-platform/screenshot-4.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ultimate-life-summit-admissions-platform/screenshot-5.jpg"
    ]
  },
  {
    "slug": "ai-childrens-book-studio",
    "title": "AI Children's Book Studio",
    "category": "Web App · AI",
    "summary": "AI web app that turns a manuscript or a parent’s idea into an illustrated, print-ready picture book, keeping characters consistent across pages.",
    "stack": [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Supabase",
      "Redis",
      "OpenAI",
      "React"
    ],
    "cover": "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ai-childrens-book-studio/cover.jpg",
    "client": "A German children's-book startup",
    "type": "Web app",
    "year": "2026",
    "intro": "We built an AI web app that turns a manuscript, or a parent's idea, into an illustrated, print-ready children's picture book.",
    "about": [
      "Our client, a German children's-book startup, wanted authors and parents to make their own illustrated picture books. Making one usually means hiring an illustrator, keeping each character looking the same on every page, fitting text and pictures onto pages, and preparing files a printer will accept. That takes time and money most first-time authors and families do not have. The client needed one tool that could handle the whole job.",
      "We built a web app that takes a book from idea to print file. Authors upload or paste a manuscript, and the app finds the characters and scenes. Parents can use a step-by-step wizard, and the app writes the story for them. Users pick one of four portraits for each character and lock it, so the character looks the same in every scene. The app then plans the pages, illustrates each scene in one of 15 styles, places the text and designs the covers.",
      "The app is now running as an invite-only beta. One person can go from a finished story to a complete illustrated book, with front and back covers, in a single tool. They can read it as a flipbook and export it as a PDF or as print-ready files. Pictures are made in the background, so the app stays fast while it works. A credit system tracks the cost of each AI action."
    ],
    "scope": [
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "Third-Party API Integration",
      "Deployment & DevOps"
    ],
    "shots": [
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ai-childrens-book-studio/screenshot-1.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ai-childrens-book-studio/screenshot-2.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ai-childrens-book-studio/screenshot-3.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ai-childrens-book-studio/screenshot-4.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/ai-childrens-book-studio/screenshot-5.jpg"
    ]
  },
  {
    "slug": "india-expansion-website-cms",
    "title": "Website & CMS for an India Expansion Consultancy",
    "category": "Website · CMS",
    "summary": "English and German website with a custom admin that publishes articles, captures guide-download leads (expiring secure links) and posts to LinkedIn.",
    "stack": [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "DeepL API",
      "LinkedIn API"
    ],
    "cover": "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/india-expansion-website-cms/cover.jpg",
    "client": "An India market-entry consultancy",
    "type": "Website",
    "year": "2026",
    "intro": "We built an English and German website with a custom admin panel that publishes articles, captures guide-download leads and posts to LinkedIn.",
    "about": [
      "Our client helps global companies set up and grow their operations in India. Their buyers are senior leaders in the US, UK, Middle East, Australia and New Zealand, so the website must explain a complex service clearly and build trust quickly. They also needed every guide download to become a lead, and visitors from Germany to read the site in German.",
      "We built a company website with pages for services, careers, a blog and downloadable guides. To get a guide, visitors fill in a short form and receive the PDF through a secure link that expires after 15 minutes. Visitors from Germany see the site in German automatically. Behind it, we built a custom admin panel where the team edits every page section, writes and features articles, manages guides, reviews leads, updates SEO settings and shares articles to their LinkedIn page in one click.",
      "The client now runs its whole website from one simple admin panel. The team updates pages, publishes articles and checks new leads without touching code, and each new article can reach their LinkedIn followers straight away. German visitors get a translated site with no extra work, because translations are created automatically and saved for reuse."
    ],
    "scope": [
      "Website Development",
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "Third-Party API Integration"
    ],
    "shots": [
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/india-expansion-website-cms/screenshot-1.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/india-expansion-website-cms/screenshot-2.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/india-expansion-website-cms/screenshot-3.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/india-expansion-website-cms/screenshot-4.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/india-expansion-website-cms/screenshot-5.jpg"
    ]
  },
  {
    "slug": "fintech-website-with-cms",
    "title": "Fintech Website with a Custom Content Admin",
    "category": "Website · CMS",
    "summary": "Animated scroll-story website for an AI money-decision app, with a waitlist, article and video library, and an admin so the team can publish without a developer.",
    "stack": [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "GSAP",
      "Framer Motion",
      "Cloudinary"
    ],
    "cover": "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fintech-website-with-cms/wl-cover.jpg",
    "client": "An Indian fintech startup",
    "type": "Website",
    "year": "2026",
    "intro": "We built an animated website and a custom content admin for an AI money-decision app, so the client's team can update pages and publish articles.",
    "about": [
      "The client is building an AI-powered app that helps people think before they spend, borrow or commit to a money decision. Before launch, they needed a website that explains this new idea simply, builds trust and invites people to join a waitlist. Because they work in a regulated area of finance, they also needed clear legal and trust pages. And their team needed a way to update content and publish articles without a developer.",
      "We built a home page that tells the story as you scroll, using animation, video and app screens. The site also has pages on why the product exists and who is behind it, a library of articles and videos with category filters, a waitlist page, and six legal pages with tabs and an on-page contents list. Behind it is a custom content admin. The team can edit every page, save drafts, publish, write articles with videos, manage images and set SEO details.",
      "The client now has a complete website ready for launch, and their team can update pages and publish new articles themselves. Pages, articles and legal content follow one consistent design on desktop and mobile. If the database is ever unavailable, the site keeps working and shows its built-in content, so visitors never see a broken page."
    ],
    "scope": [
      "Website Development",
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "Third-Party API Integration"
    ],
    "shots": [
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fintech-website-with-cms/wl-screenshot-1.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fintech-website-with-cms/wl-screenshot-2.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fintech-website-with-cms/wl-screenshot-3.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/fintech-website-with-cms/wl-screenshot-4.jpg"
    ]
  },
  {
    "slug": "capital-markets-fintech-website",
    "title": "Bilingual Website for a Capital Markets Fintech",
    "category": "Website · Fintech",
    "summary": "Turned a design prototype into a Turkish and English Next.js website for three capital markets products, built for SEO and demo bookings.",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Vercel"
    ],
    "cover": "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/capital-markets-fintech-website/cover.jpg",
    "client": "Finicify",
    "type": "Website",
    "year": "2026",
    "intro": "We turned a fintech company's design prototype into a Turkish and English website that explains its three capital markets products clearly.",
    "about": [
      "Our client is a fintech company in Türkiye with three separate products. One helps asset managers analyse funds and build reports. The other two help listed companies run their investor relations. Their previous website ran on GitHub Pages, and the new design existed only as a clickable prototype. They needed a real website that explains each product to very different buyers, works in Turkish and English, can be found on Google and leads visitors to book a demo.",
      "We rebuilt the prototype as a Next.js website and matched its design, text and colours. It has a page for each product, a product menu, a solutions page for each type of customer and an articles section with filters. Demo buttons open the request form with the right product already chosen. Visitors can switch between Turkish and English, and the site remembers their choice. Each page has its own Google title and description. We also set up hosting on Vercel and moved the domain without touching the client's email.",
      "The new website went live in September 2026. In the following week we added founder profiles, the privacy and terms pages, real product screenshots and the first three articles. Pages are built on the server, so Google can read every page in full. The site also works on phones, with a full-height menu. The client's team can update all text in both languages from one file."
    ],
    "scope": [
      "Website Development",
      "Frontend Development",
      "Deployment & DevOps"
    ],
    "shots": [
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/capital-markets-fintech-website/screenshot-1.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/capital-markets-fintech-website/screenshot-2.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/capital-markets-fintech-website/screenshot-3.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/capital-markets-fintech-website/screenshot-4.jpg",
      "https://tceffiyyszmgvkullpqe.supabase.co/storage/v1/object/public/media/projects/capital-markets-fintech-website/screenshot-5.jpg"
    ]
  },
  {
    "slug": "codemirror-website-cms",
    "title": "CodeMirror Website & CMS",
    "category": "Website · CMS",
    "summary": "Company website on the Next.js App Router with Server Components, Server Actions and on-demand revalidation, plus a Supabase admin for projects, jobs and CV applications.",
    "stack": [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "GSAP",
      "Vercel"
    ],
    "client": "CodeMirror Technologies",
    "type": "Website",
    "year": "2026",
    "intro": "The company website for CodeMirror Technologies, rebuilt on the Next.js App Router with an admin CMS so the team can publish projects and jobs without a developer.",
    "about": [
      "CodeMirror needed a faster, modern website that shows its client work and makes hiring easy. Content changes needed a developer, and job applications arrived in scattered emails.",
      "I rebuilt the site on the Next.js App Router using Server Components, Server Actions, route handlers, middleware and tag-based caching with on-demand revalidation, so pages load fast and update as soon as content changes in the admin.",
      "The admin CMS runs on Supabase (PostgreSQL + storage). The team manages case studies and job openings, candidates apply online with a CV upload, staff review CVs in a built-in viewer, and applicants get automatic email confirmations. Technical SEO is built in: metadata, Open Graph images, JSON-LD and a sitemap."
    ],
    "highlights": [
      "Next.js App Router with Server Components and Server Actions",
      "Tag-based caching with on-demand revalidation",
      "Supabase admin for case studies, jobs and applications",
      "Online job applications with CV upload and an in-admin CV viewer",
      "Automated email confirmations",
      "Technical SEO: metadata, Open Graph images, JSON-LD, sitemap"
    ],
    "scope": [
      "Frontend Development",
      "Backend Development",
      "CMS & Admin",
      "SEO",
      "Deployment"
    ]
  },
  {
    "slug": "mendel-lab-ai-github-platform",
    "title": "AI GitHub Integration Platform (Freelance – Mendel Lab)",
    "category": "Web App · AI · DevOps",
    "summary": "AI-driven platform for repository analysis and pull-request reviews using GitHub OAuth and the GitHub Apps API, with full DevOps on AWS EC2, NGINX and webhooks.",
    "stack": [
      "Node.js",
      "Express.js",
      "GitHub Apps API",
      "OAuth",
      "AWS EC2",
      "NGINX"
    ],
    "client": "Mendel Lab (freelance)",
    "type": "Web app",
    "year": "",
    "intro": "An AI-driven platform that connects to GitHub repositories to analyse code and review pull requests, built as a freelance project for Mendel Lab.",
    "about": [
      "Mendel Lab wanted developers to connect their GitHub repositories and get AI-driven analysis and pull-request reviews without manual setup.",
      "I built the backend in Node.js and Express. Users sign in with GitHub OAuth, and the platform uses the GitHub Apps API to access repositories and react to pull requests through webhooks.",
      "I also handled the full DevOps setup: deployment on AWS EC2 behind NGINX, with webhook endpoints that receive GitHub events reliably."
    ],
    "highlights": [
      "GitHub OAuth sign-in",
      "GitHub Apps API integration for repository access",
      "Webhook-driven pull-request reviews",
      "AI-driven repository analysis",
      "Deployment on AWS EC2 behind NGINX"
    ],
    "scope": [
      "Backend Development",
      "Third-Party API Integration",
      "Deployment & DevOps"
    ]
  },
  {
    "slug": "codeclout-school-management-saas",
    "title": "School Management SaaS (CodeClout)",
    "category": "Web App · Multi-tenant SaaS",
    "summary": "Multi-tenant school management SaaS with 6+ user roles: secure Node.js REST APIs, JWT-based RBAC, PostgreSQL schemas, AWS S3 storage and scheduled jobs.",
    "stack": [
      "Node.js",
      "JavaScript",
      "React",
      "PostgreSQL",
      "AWS S3"
    ],
    "client": "CodeClout Technology",
    "type": "Web app",
    "year": "2021 – 2023",
    "intro": "A multi-tenant school management SaaS with 6+ user roles, where I worked as a full-stack developer from 2021 to 2023.",
    "about": [
      "Schools needed one system for their day-to-day work, with different access for each type of user and every school’s data kept separate.",
      "I designed secure Node.js REST APIs and PostgreSQL database schemas for the school management modules, with JWT-based role-based access control across 6+ user roles.",
      "I also integrated AWS S3 for file storage, email services and scheduled jobs, and built reusable React components that improved frontend performance."
    ],
    "highlights": [
      "Secure Node.js REST APIs",
      "PostgreSQL schemas for multi-tenant data",
      "JWT-based RBAC across 6+ user roles",
      "AWS S3 file storage, email services and scheduled jobs",
      "Reusable React components and frontend performance work"
    ],
    "scope": [
      "Backend Development",
      "Database Design",
      "Frontend Development"
    ]
  }
]

export default mywork_data
