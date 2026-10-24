
import { useState } from 'react'

const services = [
  {
    n: '01',
    title: 'Web design',
    text: 'Distinctive digital experiences that make your brand feel clear, confident, and memorable.',
    tags: ['UI/UX', 'Responsive design', 'Design systems'],
  },
  {
    n: '02',
    title: 'Web development',
    text: 'Fast, responsive websites built with clean code and practical features that work.',
    tags: ['React', 'Frontend', 'Integrations'],
  },
  {
    n: '03',
    title: 'E-commerce',
    text: 'Online stores that make products easy to discover and purchasing simple.',
    tags: ['Product pages', 'Shopping flows', 'Storefronts'],
  },
  {
    n: '04',
    title: 'Website fixes',
    text: 'Practical improvements to existing websites, from layout issues to broken features.',
    tags: ['Debugging', 'Performance', 'Maintenance'],
  },
]

const projects = [
  {
    n: '01',
    name: 'FORM / STUDIO',
    type: 'Brand & digital concept',
    description: 'A bold editorial identity for a fictional creative studio.',
    className: 'bg-[#d6ff45]',
    mark: 'FORM.',
    detail: 'Type-led identity',
  },
  {
    n: '02',
    name: 'OBJECTS',
    type: 'E-commerce concept',
    description: 'A minimal product storefront for a fictional homeware brand.',
    className: 'bg-[#e6d9ff]',
    mark: 'O/',
    detail: 'Commerce experience',
  },
  {
    n: '03',
    name: 'FIELDWORK',
    type: 'Business website concept',
    description: 'A confident online presence for a fictional architecture practice.',
    className: 'bg-[#f3a78d]',
    mark: 'FW—',
    detail: 'Business website',
  },
]

function Eyebrow({ children }) {
  return (
    <p className="mono text-[11px] uppercase tracking-[0.16em] text-[#65655b]">
      {children}
    </p>
  )
}

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    ['Services', '#services'],
    ['Selected work', '#work'],
    ['Process', '#process'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[#171713]/15 bg-[#f5f4ed]/95 backdrop-blur">
      <nav className="container-main flex min-h-[76px] items-center justify-between">
        <a href="#home" aria-label="Nexora Digital home" className="text-[21px] font-bold tracking-[-0.07em]">
          NEXORA<span className="text-[#748b13]">®</span>
        </a>

        <button
          type="button"
          className="border border-[#171713]/20 px-4 py-2 text-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close −' : 'Menu +'}
        </button>

        <div
          id="main-menu"
          className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[75px] flex-col gap-5 border-b border-[#171713]/15 bg-[#f5f4ed] p-5 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#55554d] transition hover:text-black"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-between gap-5 bg-[#d6ff45] px-5 py-3 text-sm font-semibold transition hover:bg-[#c8f12c]"
          >
            Start a project <Arrow diagonal />
          </a>
        </div>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="grid-paper overflow-hidden border-b border-[#171713]/15">
      <div className="container-main py-20 sm:py-28 lg:py-36">
        <div className="flex flex-wrap items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#7b9218]" />
          <Eyebrow>Independent digital studio · Open for projects</Eyebrow>
        </div>

        <h1 className="display-title mt-10 max-w-[1100px] text-[clamp(4rem,12vw,10.5rem)] font-bold">
          GOOD IDEAS.
          <br />
          <span className="outline-text">BUILT</span>{' '}
          <span className="text-[#778d17]">BETTER.</span>
        </h1>

        <div className="mt-12 grid gap-8 md:grid-cols-[1fr_300px] md:items-end">
          <p className="max-w-[570px] text-lg leading-8 text-[#55554d] sm:text-xl">
            We design and build digital experiences for businesses ready to
            make a stronger impression online.
          </p>

          <a
            href="#work"
            className="group flex w-fit items-center gap-5 border-b border-[#171713] pb-3 text-sm font-semibold"
          >
            Explore selected work
            <span className="transition group-hover:translate-x-1">
              <Arrow />
            </span>
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-between gap-5 border-t border-[#171713]/20 pt-5">
          <Eyebrow>Strategy / Design / Development</Eyebrow>
          <Eyebrow>Independent studio · Worldwide</Eyebrow>
        </div>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="container-main grid gap-8 py-24 md:grid-cols-[0.65fr_1.35fr] md:py-32">
      <Eyebrow>01 — Our approach</Eyebrow>
      <div>
        <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-6xl">
          Digital work should look sharp, feel effortless, and do its job.
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-8 text-[#626258]">
          Nexora is a fictional independent studio concept built to demonstrate
          thoughtful design, responsive frontend development, and clear
          communication. Every section is designed around what a potential
          client needs to know.
        </p>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-[#171713] py-24 text-[#f5f4ed] sm:py-32">
      <div className="container-main">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>02 — What we do</Eyebrow>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.065em] sm:text-7xl">
              Useful by design.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/55">
            Clear services. Practical solutions. No unnecessary complexity.
          </p>
        </div>

        <div className="mt-14 border-t border-white/20">
          {services.map((service) => (
            <article
              key={service.n}
              className="group grid gap-5 border-b border-white/20 py-8 transition md:grid-cols-[60px_1fr_1fr_40px] md:items-center"
            >
              <span className="mono text-xs text-[#d6ff45]">{service.n}</span>
              <h3 className="text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                {service.title}
              </h3>
              <div>
                <p className="max-w-md text-sm leading-7 text-white/60">
                  {service.text}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/20 px-2.5 py-1 text-[10px] text-white/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="hidden text-2xl text-[#d6ff45] transition group-hover:translate-x-1 md:block">
                <Arrow diagonal />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="work" className="container-main py-24 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>03 — Selected concepts</Eyebrow>
          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.065em] sm:text-7xl">
            Made to stand out.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-7 text-[#626258]">
          Three fictional brand concepts exploring different digital
          directions. These are portfolio concepts, not client projects.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.n} className="group">
            <div
              className={`${project.className} relative flex aspect-[4/4.2] flex-col justify-between overflow-hidden p-6 sm:p-8`}
            >
              <div className="flex items-center justify-between">
                <span className="mono text-[11px]">{project.n} / CONCEPT</span>
                <span className="text-xl"><Arrow diagonal /></span>
              </div>

              <div className="flex flex-1 items-center justify-center">
                <span className="text-center text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.09em] transition duration-300 group-hover:scale-105">
                  {project.mark}
                </span>
              </div>

              <p className="mono text-[10px] uppercase tracking-[0.12em]">
                {project.detail}
              </p>
            </div>

            <div className="flex items-start justify-between gap-4 py-5">
              <div>
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="mt-1 text-xs text-[#626258]">{project.type}</p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-[#626258]">
                  {project.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    ['01', 'Listen', 'We clarify your goals, audience, content, and priorities.'],
    ['02', 'Plan', 'We agree on scope, design direction, timeline, and deliverables.'],
    ['03', 'Build', 'We develop the experience and test the important user flows.'],
    ['04', 'Deliver', 'We review the result, resolve agreed issues, and prepare handover.'],
  ]

  return (
    <section id="process" className="border-y border-[#171713]/15 bg-[#e9e8df] py-24 sm:py-32">
      <div className="container-main">
        <Eyebrow>04 — How we work</Eyebrow>
        <h2 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.065em] sm:text-7xl">
          Straightforward from start to finish.
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, title, text]) => (
            <article key={n} className="border-t border-[#171713]/25 pt-5">
              <span className="mono text-xs text-[#778d17]">{n}</span>
              <h3 className="mt-7 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#626258]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Web development',
    message: '',
  })

  const [error, setError] = useState('')

  function updateField(event) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      setError('Please complete your name, email, and project details.')
      return
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!validEmail.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    const recipient = 'hello@nexora.example'
    const subject = encodeURIComponent(`Project inquiry: ${form.service}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${form.service}\n\nProject details:\n${message}`,
    )

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="container-main py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>05 — Start a conversation</Eyebrow>
          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.075em] sm:text-7xl">
            Have a good idea?
            <span className="mt-2 block text-[#778d17]">Let's build it.</span>
          </h2>
          <p className="mt-7 max-w-md leading-8 text-[#626258]">
            Tell us what you want to create, what problem it solves, and
            what you'd like to achieve.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 bg-[#d6ff45] px-4 py-3 text-sm font-medium">
            Project inquiries welcome <Arrow diagonal />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border border-[#171713]/20 bg-white/40 p-5 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Your name
              <input
                name="name"
                value={form.name}
                onChange={updateField}
                autoComplete="name"
                required
                maxLength={100}
                className="mt-2 block w-full rounded-none border border-[#171713]/20 bg-transparent px-3 py-3 outline-none focus:border-[#778d17]"
                placeholder="Name"
              />
            </label>

            <label className="text-sm font-medium">
              Email address
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateField}
                autoComplete="email"
                required
                maxLength={254}
                className="mt-2 block w-full rounded-none border border-[#171713]/20 bg-transparent px-3 py-3 outline-none focus:border-[#778d17]"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium">
            What do you need?
            <select
              name="service"
              value={form.service}
              onChange={updateField}
              className="mt-2 block w-full rounded-none border border-[#171713]/20 bg-[#f5f4ed] px-3 py-3 outline-none focus:border-[#778d17]"
            >
              <option>Web design</option>
              <option>Web development</option>
              <option>E-commerce</option>
              <option>Website fixes</option>
              <option>Something else</option>
            </select>
          </label>

          <label className="mt-5 block text-sm font-medium">
            Tell us about your project
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              required
              minLength={10}
              maxLength={3000}
              rows={5}
              className="mt-2 block w-full resize-y rounded-none border border-[#171713]/20 bg-transparent px-3 py-3 outline-none focus:border-[#778d17]"
              placeholder="What are you looking to build?"
            />
          </label>

          {error && (
            <p role="alert" className="mt-4 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-between bg-[#d6ff45] px-5 py-4 text-sm font-semibold transition hover:bg-[#c8f12c]"
          >
            Prepare email inquiry <Arrow diagonal />
          </button>

          <p className="mt-4 text-xs leading-5 text-[#77776d]">
            This demo opens your default email application. It does not send
            or store submissions on a server.
          </p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#171713] py-8 text-[#f5f4ed]">
      <div className="container-main flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="text-xl font-bold tracking-[-0.07em]">
          NEXORA<span className="text-[#d6ff45]">®</span>
        </a>
        <p className="text-xs text-white/50">
          Independent studio concept · Built with React
        </p>
        <a href="#home" className="text-sm hover:text-[#d6ff45]">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f4ed] text-[#171713]">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
