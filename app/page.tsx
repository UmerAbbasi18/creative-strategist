import WaitlistForm from "@/components/waitlist-form";

const services = [
  {
    icon: "🧠",
    title: "Creative Strategy Consulting",
    description:
      "Audit winning ads, reverse engineer competitors, and build growth-ready concepts for Cyprus ecommerce brands.",
  },
  {
    icon: "🎨",
    title: "Static Ad Creation",
    description:
      "Premium Meta, TikTok, email, and landing page visuals built to stop the scroll and increase conversions.",
  },
  {
    icon: "🎬",
    title: "UGC Video Production",
    description:
      "AI spokespersons, demos, and testimonial-style videos designed for stronger hooks and retention.",
  },
  {
    icon: "✍️",
    title: "AI Copywriting",
    description:
      "High-converting ad scripts, VSLs, sales pages, and email sequences focused on ROI and retention.",
  },
  {
    icon: "📦",
    title: "Content & Digital Products",
    description:
      "Audience-first content systems plus monetizable guides, templates, and productized deliverables.",
  },
  {
    icon: "⚙️",
    title: "AI Systems Implementation",
    description:
      "Custom generative AI workflows that reduce production time and scale your creative output.",
  },
];

const benefits = [
  "Performance-first creative strategy, not guesswork",
  "Faster production cycles with AI-assisted pipelines",
  "Messaging built around conversion psychology and offer positioning",
];

const processSteps = [
  {
    title: "Discovery & Audit",
    description: "We analyze your brand, offers, competitors, and current ad performance.",
  },
  {
    title: "Strategy & Concepts",
    description: "We deliver custom angles, hooks, and creative briefs tailored to your growth goals.",
  },
  {
    title: "Production",
    description: "Your ads, scripts, and assets are produced with fast, AI-powered workflows.",
  },
  {
    title: "Iteration & Scale",
    description: "We refine what works and build repeatable systems to keep performance improving.",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-slate-950 to-cyan-500/10" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-20 md:px-10">
          <p className="mb-4 inline-flex w-fit rounded-full border border-indigo-400/50 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-200">
            AI-Powered Creative Agency · Cyprus
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Transform Your Ecommerce Ads with AI-Powered Creativity
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Creative Strategist helps ecommerce brands launch better-performing ads with strategy, scripts, UGC,
            and AI production systems built for measurable growth.
          </p>
          <div className="mt-10">
            <a
              href="#waitlist"
              className="inline-flex items-center rounded-xl bg-indigo-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-400"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-6 py-20 md:px-10">
        <section id="services" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl font-bold text-white">
            Services
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            End-to-end creative strategy and production support for brands that want faster execution and better ad
            performance.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-indigo-500/50"
              >
                <span className="text-2xl" aria-hidden>
                  {service.icon}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="benefits-heading" className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 p-8">
          <h2 id="benefits-heading" className="text-3xl font-bold text-white">
            Why Creative Strategist
          </h2>
          <p className="mt-3 text-slate-200">Built for brands that care about ROI, speed, and creative quality.</p>
          <ul className="mt-6 space-y-3 text-slate-100">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" aria-hidden />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="how-it-works-heading">
          <h2 id="how-it-works-heading" className="text-3xl font-bold text-white">
            How It Works
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
                <p className="text-sm font-medium text-indigo-300">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="waitlist" aria-labelledby="waitlist-heading" className="rounded-3xl border border-slate-800 bg-white p-8 text-slate-900 shadow-2xl shadow-slate-950/20 dark:bg-slate-900 dark:text-slate-100">
          <h2 id="waitlist-heading" className="text-3xl font-bold">
            Join the waitlist
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Get early access to AI-powered creative strategy and production support for your ecommerce brand.
          </p>
          <div className="mt-8 max-w-xl">
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-slate-200">Creative Strategist</p>
            <p>AI-powered creative strategy and ad production for ecommerce brands in Cyprus.</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-4">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#waitlist" className="transition hover:text-white">
              Waitlist
            </a>
            <a href="#" className="transition hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-white">
              Instagram
            </a>
          </nav>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-xs text-slate-500">
          © {new Date().getFullYear()} Creative Strategist. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
