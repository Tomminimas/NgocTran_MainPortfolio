import { INFO } from "@/data/profile";
import { EXPERIENCE_SIMPLE, WORK_DETAILED } from "@/data/experience";
import { AWARDS } from "@/data/awards";
import { PROJECTS } from "@/data/projects";
import AutoCarousel from "@/components/AutoCarousel";
import { Section, Container, Card } from "@/components/Sections";

export default function Page() {
  return (
    <div>
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="container mt-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-sm font-semibold tracking-wide">NGOC TRAN</a>
            <div className="hidden items-center gap-4 sm:flex">
              {[["About","about"],["Experience","experience"],["Work","work"],["Awards","awards"],["Projects","projects"],["Contact","contact"]].map(([label,id])=> (
                <a key={id} href={`#${id}`} className="text-sm opacity-80 hover:opacity-100">{label as string}</a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <Section id="home" className="pt-36">
        <Container>
          <div className="mx-auto max-w-3xl rounded-[28px] border border-white/15 bg-black/50 p-10 text-center shadow-2xl">
            <div className="mx-auto h-1 w-24 rounded-full bg-white/20" />
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-5xl">{INFO.name}</h1>
            <p className="mt-3 text-sm tracking-wider opacity-80">{INFO.tagline}</p>
            <p className="mx-auto mt-6 max-w-2xl opacity-90">{INFO.focus}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <span className="badge">{INFO.currentRole}</span>
              <span className="badge">{INFO.location}</span>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="#projects" className="btn btn-primary">Enter Portfolio</a>
              <a href={INFO.resumeUrl} download className="btn btn-ghost">Download Resume</a>
              <a href="#contact" className="btn btn-ghost">Contact</a>
            </div>
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section id="about">
        <Container>
          <div className="grid items-start gap-8 md:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="mt-4 leading-relaxed opacity-90">Hi! I'm Ngoc, a senior double‑majoring in Business Analytics and Finance. I love predictive modeling (XGBoost), Tableau dashboards, and financial analysis.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python (pandas)","R (tidyverse)","SQL","Tableau","Excel modeling"].map(s=> <span key={s} className="badge">{s}</span>)}
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Education</h3>
              <ul className="mt-4 space-y-3">
                <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="font-medium">Ball State University – Miller College of Business</div>
                  <div className="text-sm opacity-80">B.S. Business Analytics & Finance (Expected 2026) • GPA 3.9/4.0</div>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="text-sm font-semibold tracking-wide opacity-80">Find me</h4>
                <div className="mt-3 flex flex-wrap gap-3">
                  {INFO.socials.map(s => <a key={s.label} href={s.href} className="badge">{s.label}</a>)}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <Container>
          <h2 className="text-center text-3xl font-extrabold">Experience</h2>
          <p className="mt-2 text-center opacity-80">Corporate roles & projects in analytics, finance, and ops</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {EXPERIENCE_SIMPLE.map(job => (
              <Card key={`${job.org}-${job.year}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{job.title} • {job.org}</h3>
                  <span className="badge">{job.year}</span>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 opacity-90">
                  {job.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map(t => <span key={t} className="badge">{t}</span>)}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <AutoCarousel items={WORK_DETAILED} />
          </div>
        </Container>
      </Section>

      {/* Work Experience */}
      <Section id="work">
        <Container>
          <h2 className="text-center text-3xl font-extrabold">Work Experience</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {EXPERIENCE_SIMPLE.slice(0,4).map(job => (
              <Card key={`work-${job.org}-${job.year}`}>
                <span className="badge">{job.year}</span>
                <h3 className="mt-3 text-xl font-semibold">{job.org}</h3>
                <div className="mt-1 text-sm opacity-80">{job.title}</div>
                <ul className="mt-4 list-disc space-y-2 pl-5 opacity-90">
                  {job.bullets.map((b,i)=>(<li key={i}>{b}</li>))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Awards */}
      <Section id="awards">
        <Container>
          <h2 className="text-center text-3xl font-extrabold">Honors & Awards</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {AWARDS.map(a => (
              <Card key={`${a.name}-${a.year}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{a.name}</h3>
                  <span className="badge">{a.year}</span>
                </div>
                <p className="mt-3 opacity-90">{a.note}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <Container>
          <h2 className="text-center text-3xl font-extrabold">Recent Projects</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map(p => (
              <Card key={p.title}>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-3 opacity-90">{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.tags.map(t=> <span key={t} className="badge">{t}</span>)}</div>
                <div className="mt-6 flex items-center gap-3">
                  <a href={p.github} className="btn btn-ghost">GitHub</a>
                  <a href={p.demo} className="btn btn-primary">Live Demo</a>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <Container>
          <h2 className="text-center text-3xl font-extrabold">Get In Touch</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold uppercase tracking-wide opacity-80">Email</div>
              <a href={`mailto:${INFO.email}`} className="mt-2 block text-lg font-semibold">{INFO.email}</a>
              <div className="mt-6 text-sm font-semibold uppercase tracking-wide opacity-80">Phone</div>
              <a href={`sms:${INFO.phone}`} className="mt-2 block text-lg font-semibold">{INFO.phone}</a>
            </Card>
            <Card className="md:col-span-2">
              {/* Wire up with a service (Formspree/Resend) later */}
              <form onSubmit={(e)=>{e.preventDefault(); alert("Thanks! Connect a real form service to send.");}} className="grid gap-4">
                <input required placeholder="Your Full Name" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:opacity-60" />
                <input required type="email" placeholder="Your Email" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:opacity-60" />
                <textarea required rows={5} placeholder="Your Message" className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:opacity-60" />
                <button className="btn btn-primary w-fit">Send message</button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="pb-16 pt-8">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 text-sm opacity-70 md:flex-row">
            <div>© {new Date().getFullYear()} {INFO.name}. All rights reserved.</div>
            <div className="flex gap-4">{INFO.socials.map(s=> <a key={s.label} href={s.href} className="opacity-80 hover:opacity-100">{s.label}</a>)}</div>
          </div>
        </Container>
      </footer>
    </div>
  );
}