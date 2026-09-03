const projects = [
  {
    number: "01",
    title: "AI-Powered Traffic Management",
    description: "Developed a system for real-time traffic classification and signal optimization that identifies vehicles, ambulances, and people with disabilities.",
    tag: "AI Project",
  },
  {
    number: "02",
    title: "Monitoring Tools",
    description: "Working with SolarWinds and ManageEngine OpManager to track performance, investigate incidents, and support operations.",
    tag: "NOC",
  },
];

const certifications = [
  "Microsoft Azure Fundamentals (AZ-900)",
  "Microsoft 365 Fundamentals (MS-900)",
  "NPTEL: Computer Networks and Internet Protocol - Elite",
  "NPTEL: Introduction to Internet of Things - Elite",
  "NPTEL: Digital Circuits - Elite",
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#home">KK.</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1>Kishore Kumar<span>.</span></h1>
        <p className="intro">Assistant System Engineer at TCS, focused on keeping systems visible, reliable, and running smoothly.</p>
        <div className="hero-actions">
          <a className="button" href="#work">See my work <span aria-hidden="true">↓</span></a>
          <a className="button" href="/Kishore-Kumar-Resume.pdf" download>Download resume <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="section about" id="about">
        <p className="section-label">01 / ABOUT</p>
        <div>
          <h2>Keeping operations on track.</h2>
          <p className="body-copy">I am an Assistant System Engineer at TCS, working in Network Operations Center (NOC) engineering. I monitor systems, manage alerts, and support reliable IT operations using SolarWinds and ManageEngine OpManager. With a degree in Electrical and Electronics Engineering, I am eager to learn, quick to adapt, and motivated to grow in cloud, networking, and IT operations.</p>
          <div className="skills" aria-label="Skills I am learning">
            <span>NOC Operations</span><span>SolarWinds</span><span>ManageEngine OpManager</span><span>Monitoring &amp; Alerts</span><span>Python</span><span>SQL Server</span><span>Gen AI</span>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <p className="section-label">02 / EXPERIENCE</p>
        <div className="timeline">
          <h2>Reliable operations. Eager to grow.</h2>
          <article className="timeline-item">
            <p className="timeline-title">Assistant System Engineer <span>— TCS</span></p>
            <p>Working in NOC operations, using SolarWinds and ManageEngine OpManager to monitor systems, manage alerts, and support operational reliability.</p>
          </article>
          <article className="timeline-item">
            <p className="timeline-title">Inplant Trainee <span>— Bharat Electronics Limited</span></p>
            <p>Gained exposure to development and engineering, quality management, product assurance, and quality testing for defense equipment.</p>
          </article>
          <article className="timeline-item">
            <p className="timeline-title">Intern <span>— Jai Balaji Control Gears Pvt. Ltd.</span></p>
            <p>Learned about electromechanical limit switches and wave-soldering processes.</p>
          </article>
        </div>
      </section>

      <section className="section" id="work">
        <p className="section-label">03 / PROJECTS</p>
        <div>
          <h2>What I work with.</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <p className="project-number">{project.number}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="tag">{project.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section credentials" id="credentials">
        <p className="section-label">04 / CREDENTIALS</p>
        <div>
          <h2>Education &amp; certifications.</h2>
          <p className="body-copy credentials-intro">A foundation in engineering, backed by industry-recognized credentials and continuous learning in cloud, productivity, networks, and IoT.</p>
          <div className="education">
            <strong>B.E. Electrical and Electronics Engineering</strong>
            <span>Sri Sairam Institute of Technology · 2021–2025 · CGPA 7.46</span>
          </div>
          <ul className="certification-list">
            {certifications.map((certification) => <li key={certification}>{certification}</li>)}
          </ul>
          <p className="achievement"><strong>Achievement:</strong> Finalist, Smart India Hackathon 2024.</p>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">05 / CONTACT</p>
        <h2>Let&apos;s make something great.</h2>
        <a className="email" href="mailto:kishorekumar.palani1@gmail.com">kishorekumar.palani1@gmail.com ↗</a>
        <div className="social-links" aria-label="Professional profiles">
          <a href="https://github.com/kishorekumarpalani" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/kishore-kumar-p-1018a924b/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </section>

      <footer>© 2026 Kishore Kumar. Built with Next.js.</footer>
    </main>
  );
}
