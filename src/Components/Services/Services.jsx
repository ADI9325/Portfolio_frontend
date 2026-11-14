import './Services.css'

const servicesData = [
  {
    s_no: "01",
    s_name: "Backend & API Development",
    s_desc: "Design and build secure REST APIs with Node.js, TypeScript, NestJS and Express.js: authentication, role-based access, validation and clean, modular architecture.",
    features: ["Node.js", "NestJS", "Express.js", "TypeScript"]
  },
  {
    s_no: "02",
    s_name: "Full-Stack SaaS Development",
    s_desc: "Build complete multi-tenant SaaS products end to end, from PostgreSQL schema to React / Next.js screens, with JWT auth, RBAC and admin panels.",
    features: ["Multi-tenant", "RBAC", "React", "Next.js"]
  },
  {
    s_no: "03",
    s_name: "Python & Data Services",
    s_desc: "Build Python (FastAPI) services for data-heavy products: scheduled syncs from external APIs, retries, idempotent jobs and analytics calculations.",
    features: ["Python", "FastAPI", "Background Jobs", "Queues"]
  },
  {
    s_no: "04",
    s_name: "Integrations & Payments",
    s_desc: "Connect products to third-party services: WhatsApp Business API, Stripe payments, GitHub APIs, email, LinkedIn, DeepL and financial data APIs.",
    features: ["WhatsApp API", "Stripe", "Webhooks", "Third-party APIs"]
  },
  {
    s_no: "05",
    s_name: "AI-Powered Features",
    s_desc: "Add AI to real products: assistants with function calling over your data, AI content generation, and code-review automation using Gemini and OpenAI.",
    features: ["Google Gemini", "OpenAI", "Function Calling", "Automation"]
  },
  {
    s_no: "06",
    s_name: "Databases, Cloud & DevOps",
    s_desc: "Design PostgreSQL schemas with Drizzle or Prisma, add Redis caching, and ship with Docker, CI/CD, NGINX or Caddy on AWS and Vercel.",
    features: ["PostgreSQL", "Docker", "AWS", "CI/CD"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="section-head">
        <p className="section-label">02. services</p>
        <h2>What I can build for you</h2>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <article key={service.s_no} className="card service-card">
            <span className="service-num mono">{service.s_no}</span>
            <h3>{service.s_name}</h3>
            <p>{service.s_desc}</p>
            <div className="chip-list">
              {service.features.map((f) => (
                <span key={f} className="chip">{f}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
