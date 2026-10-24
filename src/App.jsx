
import { useEffect, useState } from 'react';

const projects = [
  {
    number: '01',
    name: 'Luxe Store',
    category: 'E-commerce concept',
    description:
      'A premium shopping experience with a clean product layout and focused calls to action.',
    tags: ['React', 'Tailwind CSS'],
    style: 'project-luxe',
    letter: 'L',
  },
  {
    number: '02',
    name: 'SmartPrep',
    category: 'Education platform concept',
    description:
      'A learning dashboard concept designed around courses, progress tracking, and student workflows.',
    tags: ['React', 'UI Design'],
    style: 'project-prep',
    letter: 'S',
  },
  {
    number: '03',
    name: 'NextWave',
    category: 'Agency website concept',
    description:
      'A modern digital agency concept with clear services, bold typography, and a conversion-focused layout.',
    tags: ['Web Design', 'Responsive'],
    style: 'project-wave',
    letter: 'N',
  },
];

const services = [
  {
    number: '01',
    title: 'Website Development',
    description:
      'Responsive business websites built to work smoothly across desktop, tablet, and mobile.',
  },
  {
    number: '02',
    title: 'Frontend Development',
    description:
      'Modern interfaces using React, JavaScript, Tailwind CSS, and reusable components.',
  },
  {
    number: '03',
    title: 'Backend & Database',
    description:
      'Core PHP and MySQL functionality for forms, dashboards, CRUD systems, and dynamic websites.',
  },
  {
    number: '04',
    title: 'Website Improvements',
    description:
      'Layout fixes, responsive adjustments, bug fixing, and improvements to existing websites.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description:
      'We discuss your goals, audience, required features, and project scope.',
  },
  {
    number: '02',
    title: 'Plan & Build',
    description:
      'I organize the structure and build the website in clear, manageable steps.',
  },
  {
    number: '03',
    title: 'Test & Refine',
    description:
      'I check responsiveness, functionality, layout, and common issues.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'The finished website is prepared for deployment and handover.',
  },
];

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--border)] px-3 py-2 text-sm hover:opacity-75"
    >
      <span aria-hidden="true" className="text-base">
        {isDark ? '☀' : '☾'}
      </span>

      <span>{isDark ? 'Dark' : 'Light'}</span>

      <span
        className={`relative h-5 w-9 rounded-full ${
          isDark ? 'bg-[var(--accent-bg)]' : 'bg-[var(--surface)]'
        }`}
        aria-hidden="true"
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full shadow transition-all ${
            isDark
              ? 'left-[18px] bg-white'
              : 'left-0.5 bg-[var(--text)]'
          }`}
        />
      </span>
    </button>
  );
}

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--page-bg)]/95 backdrop-blur-xl">
      <nav className="container-main flex min-h-[76px] items-center justify-between gap-4">
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2"
          aria-label="Nexora Digital home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent-bg)] text-lg font-bold text-[var(--accent-fg)]">
            N
          </span>
          <span className="text-lg font-bold tracking-tight">
            nexora<span className="text-[var(--accent)]">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--accent-bg)] px-5 py-3 text-sm font-semibold text-[var(--accent-fg)] transition hover:opacity-80 sm:inline-flex"
          >
            Start a project <span className="ml-2">↗</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-xl lg:hidden"
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--page-bg)] px-5 py-5 lg:hidden">
          <div className="container-main flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[var(--muted)] hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit rounded-full bg-[var(--accent-bg)] px-5 py-3 text-sm font-semibold text-[var(--accent-fg)]"
            >
              Start a project ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="grid-paper overflow-hidden">
      <div className="container-main grid min-h-[690px] items-center gap-14 py-20 lg:grid-cols-[1.35fr_0.65fr] lg:py-28">
        <div>
          <div className="mono mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Independent web development studio
          </div>

          <h1 className="display-title max-w-4xl text-6xl font-semibold sm:text-7xl md:text-8xl xl:text-[112px]">
            Digital ideas,
            <br />
            built to
            <br />
            <span className="outline-text">move</span>{' '}
            <span className="text-[var(--accent)]">forward.</span>
          </h1>

          <p className="mt-9 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            I build modern, responsive websites that help businesses present
            their ideas clearly and give visitors a better online experience.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[var(--accent-bg)] px-6 py-4 text-sm font-semibold text-[var(--accent-fg)] transition hover:opacity-80"
            >
              Let&apos;s work together <span className="ml-2">↗</span>
            </a>

            <a
              href="#work"
              className="rounded-full border border-[var(--border)] px-6 py-4 text-sm font-semibold transition hover:bg-[var(--surface)]"
            >
              Explore selected work ↓
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[var(--muted)]">
            <span>React & JavaScript</span>
            <span>Responsive design</span>
            <span>PHP & MySQL</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[40px] border border-[var(--border)]" />

          <div className="relative overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--card-bg)] p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
              <div className="mono text-xs text-[var(--muted)]">
                NEXORA / STUDIO
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--border)]" />
              </div>
            </div>

            <div className="py-10">
              <div className="mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Build / Create / Launch
              </div>

              <div className="mt-6 text-5xl font-semibold leading-none tracking-[-0.08em] sm:text-6xl">
                Make it
                <br />
                matter<span className="text-[var(--accent)]">.</span>
              </div>

              <p className="mt-5 max-w-xs text-sm leading-7 text-[var(--muted)]">
                Thoughtful development. Clear design. Useful digital
                experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[var(--surface)] p-4">
                <div className="mono text-xs text-[var(--muted)]">FOCUS</div>
                <div className="mt-3 font-semibold">Digital craft</div>
              </div>
              <div className="rounded-2xl bg-[var(--accent-bg)] p-4 text-[var(--accent-fg)]">
                <div className="mono text-xs opacity-75">APPROACH</div>
                <div className="mt-3 font-semibold">Built with care ↗</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-5">
              <span className="mono text-xs text-[var(--muted)]">
                DIGITAL STUDIO
              </span>
              <span className="text-sm font-semibold">01 — 04</span>
            </div>
          </div>

          <div className="absolute -right-3 -top-5 flex h-16 w-16 rotate-12 items-center justify-center rounded-2xl bg-[var(--accent-bg)] text-3xl text-[var(--accent-fg)] shadow-xl sm:-right-6">
            ↗
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="border-t border-[var(--border)] py-20 sm:py-28">
      <div className="container-main grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            01 / A little about me
          </p>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Good websites start with clear thinking.
          </h2>
        </div>

        <div>
          <p className="text-xl leading-9 text-[var(--muted)] sm:text-2xl sm:leading-10">
            Nexora Digital is a website concept built around one idea: make
            digital experiences useful, accessible, and easy to understand.
          </p>

          <p className="mt-6 leading-8 text-[var(--muted)]">
            I focus on responsive frontend development, practical website
            functionality, and clean layouts. This website is a studio concept
            and portfolio demonstration, not a claim of completed client
            projects.
          </p>

          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-3 text-sm font-semibold"
          >
            See what I can build <span className="text-[var(--accent)]">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-28"
    >
      <div className="container-main">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              02 / What I do
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Useful by design.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-[var(--muted)]">
            Practical web development services for businesses, creators, and
            people bringing a new idea online.
          </p>
        </div>

        <div className="grid border-l border-t border-[var(--border)] sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group border-b border-r border-[var(--border)] p-6 sm:p-8 lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="mono text-xs text-[var(--muted)]">
                  / {service.number}
                </span>
                <span className="text-2xl transition group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-semibold tracking-tight sm:text-3xl">
                {service.title}
              </h3>

              <p className="mt-4 max-w-md leading-7 text-[var(--muted)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="container-main">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
              03 / Selected concepts
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Ideas in progress.
            </h2>
          </div>

          <p className="max-w-md leading-7 text-[var(--muted)]">
            A few concept projects exploring different layouts and digital
            experiences. These are demonstrations, not verified client work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.number} className="group min-w-0">
              <div
                className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] p-6 sm:p-8 ${project.style}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="mono rounded-full border border-current/20 px-3 py-2 text-xs">
                    CONCEPT / {project.number}
                  </span>
                  <span className="text-2xl transition group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-[180px] font-bold leading-none tracking-[-0.12em] opacity-[0.09] sm:text-[220px]">
                    {project.letter}
                  </span>
                </div>

                <div className="relative">
                  <p className="mono text-xs uppercase tracking-wider opacity-70">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                    {project.name}
                  </h3>
                </div>
              </div>

              <div className="pt-5">
                <p className="leading-7 text-[var(--muted)]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      id="process"
      className="border-y border-[var(--border)] bg-[var(--surface)] py-20 sm:py-28"
    >
      <div className="container-main">
        <p className="mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
          04 / How it works
        </p>

        <div className="mt-5 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            From first idea to launch.
          </h2>

          <div className="border-t border-[var(--border)]">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-3 border-b border-[var(--border)] py-6 sm:grid-cols-[70px_1fr]"
              >
                <span className="mono text-xs text-[var(--accent)]">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    message: '',
  });

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const recipient = 'devwithali@gmail.com';
    const subject = encodeURIComponent(
      `Project enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Service: ${form.service}\n\n` +
      `Project details:\n${form.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-main grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mono text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            05 / Get in touch
          </p>

          <h2 className="display-title mt-6 text-5xl font-semibold sm:text-7xl">
            Have an idea?
            <br />
            <span className="outline-text">Let&apos;s</span>
            <br />
            build it.
          </h2>

          <p className="mt-8 max-w-md leading-8 text-[var(--muted)]">
            Tell me a little about your project, what you want to achieve, and
            the features you need. We can start from there.
          </p>

          <div className="mt-10 border-t border-[var(--border)] pt-6">
            <p className="mono text-xs uppercase tracking-wider text-[var(--muted)]">
              Prefer email?
            </p>
            <p className="mt-3 text-lg font-medium">
              Replace the placeholder email in this file before publishing.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] p-6 sm:p-9"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block text-sm">
              Your name
              <input
                required
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--page-bg)] px-4 py-3 outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />
            </label>

            <label className="block text-sm">
              Email address
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--page-bg)] px-4 py-3 outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
              />
            </label>
          </div>

          <label className="mt-6 block text-sm">
            What do you need?
            <select
              name="service"
              value={form.service}
              onChange={updateField}
              className="mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--page-bg)] px-4 py-3 outline-none focus:border-[var(--accent)]"
            >
              {services.map((service) => (
                <option key={service.number} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Other project">Other project</option>
            </select>
          </label>

          <label className="mt-6 block text-sm">
            Project details
            <textarea
              required
              name="message"
              value={form.message}
              onChange={updateField}
              rows={5}
              placeholder="Tell me about your idea, goals, and required features..."
              className="mt-2 w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--page-bg)] px-4 py-3 outline-none placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
            />
          </label>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[var(--accent-bg)] px-6 py-4 text-sm font-semibold text-[var(--accent-fg)] transition hover:opacity-80"
          >
            Prepare email <span>↗</span>
          </button>

          <p className="mt-4 text-xs leading-5 text-[var(--muted)]">
            This form opens your default email application. It does not send
            messages directly from the website.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] py-8">
      <div className="container-main flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <a href="#home" className="text-lg font-bold tracking-tight">
          nexora<span className="text-[var(--accent)]">.</span>
        </a>

        <p className="text-sm text-[var(--muted)]">
          A digital studio concept. Built with care.
        </p>

        <a
          href="#home"
          className="text-sm font-medium hover:text-[var(--accent)]"
        >
          Back to top ↑
        </a>
      </div>

      <div className="container-main mt-6 border-t border-[var(--border)] pt-5">
        <p className="mono text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} NEXORA DIGITAL
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('nexora-theme') || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem('nexora-theme', theme);
    } catch {
      // The theme still works if browser storage is unavailable.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  }

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-[var(--page-bg)] text-[var(--text)]"
    >
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

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
  );
}
