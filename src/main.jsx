import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download,
  Menu, X, Database, BarChart3, Code2, BrainCircuit, ExternalLink,
  Award, BriefcaseBusiness, GraduationCap, ChevronDown
} from "lucide-react";
import "./styles.css";

const skills = [
  { name: "Python", icon: Code2, level: "Programming" },
  { name: "SQL", icon: Database, level: "Data & DB" },
  { name: "Power BI", icon: BarChart3, level: "Analytics" },
  { name: "Machine Learning", icon: BrainCircuit, level: "AI" },
  { name: "Pandas / NumPy", icon: BarChart3, level: "Libraries" },
  { name: "MySQL / DBMS", icon: Database, level: "Database" },
  { name: "C / C++", icon: Code2, level: "Programming" },
  { name: "Git / GitHub", icon: Github, level: "Tools" }
];

const projects = [
  {
    number: "01",
    title: "Portable Air-Quality Monitoring Device",
    category: "IoT / Product-Based Project",
    description: "A portable IoT device concept for air-quality monitoring using an embedded sensing approach, developed as a product-oriented environmental monitoring system.",
    tags: ["IoT", "Environmental Monitoring", "Embedded"],
    featured: true
  },
  {
    number: "02",
    title: "Sales Data Analysis using Python",
    category: "Data Analytics",
    description: "Cleaned and processed datasets with Pandas, performed exploratory data analysis, and created Matplotlib visualizations to identify trends and generate data-driven insights.",
    tags: ["Python", "Pandas", "EDA", "Matplotlib"]
  },
  {
    number: "03",
    title: "Power BI Dashboard",
    category: "Data Visualization",
    description: "Designed interactive dashboards using KPI cards, slicers, and visual reports to communicate business insights through effective data visualization.",
    tags: ["Power BI", "KPI", "Dashboard"]
  },
  {
    number: "04",
    title: "School Management System",
    category: "Database Project",
    description: "A database-driven application designed for efficient management of student and staff information.",
    tags: ["MySQL", "DBMS", "Application"]
  }
];

const navItems = ["home", "about", "skills", "experience", "projects", "education", "contact"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [photoRotation, setPhotoRotation] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const sections = navItems
        .map(id => document.getElementById(id))
        .filter(Boolean);
      const current = sections.reduce((best, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - 120);
        return distance < best.distance ? { id: section.id, distance } : best;
      }, { id: "home", distance: Infinity });
      setActive(current.id);
    };
    const onScrollRotation = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      setPhotoRotation(progress * 360);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", onScrollRotation, { passive: true });
    onScrollRotation();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollRotation);
    };
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")}>
            <span className="brand-mark">GB</span>
            <span>Giribala<span className="dot">.</span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navItems.map(id => (
              <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>
                {id}
              </button>
            ))}
            <button className="nav-cta" onClick={() => go("contact")}>Let's Talk <ArrowUpRight size={15}/></button>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse"></span> Open to opportunities</div>
              <h1>Turning data into <em>ideas</em> and ideas into impact.</h1>
              <p className="hero-lead">
                I'm <strong>Giribala Balasubramanian</strong>, a Computer Science Engineering student focused on
                Data Analytics, Business Intelligence, Machine Learning, and Full-Stack Development.
              </p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => go("projects")}>Explore my work <ArrowUpRight size={18}/></button>
                <a className="ghost-btn" href="/Giribala_Balasubramanian_Resume.pdf" download><Download size={17}/> Download CV</a>
              </div>
              <div className="quick-links">
                <a href="https://github.com/Giribala330" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
                <a href="https://www.linkedin.com/in/giribala2005" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
                <a href="mailto:giribala636@gmail.com"><Mail size={18}/> Email</a>
              </div>
            </div>

            <div className="hero-art">
              <div className="red-halo"></div>
              <div className="scan-line"></div>
              <div className="photo-orbit" style={{ transform: `rotate(${photoRotation}deg)` }}>
                <span className="orbit-dot"></span>
                <span className="orbit-label">KARUPPU · {Math.round(photoRotation)}°</span>
              </div>
              <div className="photo-frame" style={{ transform: `rotate(${photoRotation * 0.18 - 4}deg)` }}>
                <div className="photo-glow"></div>
                <img src="/karuppu-hero.png" alt="Giribala portfolio visual" />
                <div className="photo-overlay"></div>
                <div className="photo-caption"><span>GB / 2026</span><b>THE BLACK & RED CODE</b></div>
              </div>
              <div className="floating-chip chip-a"><BarChart3 size={16}/> DATA ANALYTICS</div>
              <div className="floating-chip chip-b"><BrainCircuit size={16}/> MACHINE LEARNING</div>
            </div>
          </div>
          <div className="scroll-hint"><span></span> Scroll to explore</div>
        </section>

        <section id="about" className="section light-section">
          <div className="container two-col">
            <div>
              <p className="section-label">01 — About</p>
              <h2>Curious mind.<br/><span>Practical builder.</span></h2>
            </div>
            <div className="about-copy">
              <p className="large-text">
                I’m a Computer Science Engineering undergraduate with hands-on experience in Python, SQL,
                Data Analytics, Power BI, database-driven applications, and full-stack development.
              </p>
              <p>
                My project experience spans IoT, analytics, data visualization, and database systems. I enjoy
                turning structured data into clear insights and building applications that solve practical problems.
              </p>
              <div className="location"><MapPin size={17}/> Chennai, Tamil Nadu, India</div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-label">02 — Toolkit</p>
                <h2>Skills that make<br/><span>ideas executable.</span></h2>
              </div>
              <p className="section-note">A practical toolkit across programming, analytics, visualization, databases, and development.</p>
            </div>
            <div className="skills-grid">
              {skills.map(({name, icon: Icon, level}) => (
                <div className="skill-card" key={name}>
                  <div className="skill-icon"><Icon size={22}/></div>
                  <div><span>{level}</span><h3>{name}</h3></div>
                  <ArrowUpRight className="skill-arrow" size={18}/>
                </div>
              ))}
            </div>
            <div className="tech-strip">
              <span>Jupyter Notebook</span><span>Microsoft Excel</span><span>VS Code</span><span>Git</span><span>GitHub</span><span>Matplotlib</span>
            </div>
          </div>
        </section>

        <section id="experience" className="section light-section">
          <div className="container two-col">
            <div>
              <p className="section-label">03 — Experience</p>
              <h2>Learning by<br/><span>building.</span></h2>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-meta"><span>Internship</span><span>Chennai</span></div>
                <h3>Full Stack Development Intern</h3>
                <h4>VCodeZ</h4>
                <ul>
                  <li>Worked on frontend and backend web development.</li>
                  <li>Managed structured data using relational databases.</li>
                  <li>Strengthened debugging, teamwork, and software development skills.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="section-label">04 — Selected Work</p>
                <h2>Projects with a<br/><span>purpose.</span></h2>
              </div>
              <p className="section-note">A selection of academic and product-oriented work from IoT, analytics, visualization, and database development.</p>
            </div>
            <div className="projects-grid">
              {projects.map(project => (
                <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.number}>
                  <div className="project-top">
                    <span className="project-number">{project.number}</span>
                    {project.featured && <span className="featured-label">Featured</span>}
                  </div>
                  <div className="project-body">
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
                  </div>
                  <div className="project-bottom"><span>Case study</span><ArrowUpRight size={19}/></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container education-grid">
            <div>
              <p className="section-label">05 — Education</p>
              <h2>Building the<br/><span>foundation.</span></h2>
            </div>
            <div className="edu-list">
              <div className="edu-card">
                <div className="edu-icon"><GraduationCap /></div>
                <div><span>2023 — 2027</span><h3>B.Tech in Computer Science Engineering</h3><p>SRM Institute of Science and Technology, Chennai</p></div>
                <strong>7.47<br/><small>CGPA</small></strong>
              </div>
              <div className="edu-card">
                <div className="edu-icon"><GraduationCap /></div>
                <div><span>2023</span><h3>Higher Secondary Certificate</h3><p>Amalorpavam Higher Secondary School</p></div>
                <strong>73.67%<br/><small>Score</small></strong>
              </div>
              <div className="edu-card">
                <div className="edu-icon"><GraduationCap /></div>
                <div><span>2021</span><h3>Secondary School Certificate</h3><p>SRVS National Hr. Sec. School, Karaikal</p></div>
                <strong>All Pass<br/><small>Result</small></strong>
              </div>
            </div>
          </div>
        </section>

        <section className="achievement-band">
          <div className="container achievement-inner">
            <Award size={38}/>
            <div><p>Achievement</p><h3>UK Registered Design — Portable Air-Quality Monitoring Device</h3><span>Design No. 6521417 · Granted 29 July 2026</span></div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-box">
            <div>
              <p className="section-label">06 — Contact</p>
              <h2>Let's build something<br/><span>meaningful.</span></h2>
              <p className="contact-copy">Have an opportunity, project idea, or collaboration in mind? I’d be happy to connect.</p>
            </div>
            <div className="contact-actions">
              <a href="mailto:giribala636@gmail.com" className="contact-link"><Mail/><div><span>Email me</span><b>giribala636@gmail.com</b></div><ArrowUpRight/></a>
              <a href="https://www.linkedin.com/in/giribala2005" target="_blank" rel="noreferrer" className="contact-link"><Linkedin/><div><span>Connect on LinkedIn</span><b>/giribala2005</b></div><ArrowUpRight/></a>
              <a href="https://github.com/Giribala330" target="_blank" rel="noreferrer" className="contact-link"><Github/><div><span>View GitHub</span><b>/Giribala330</b></div><ArrowUpRight/></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Giribala Balasubramanian</span>
          <span>Designed & built with purpose.</span>
          <button onClick={() => go("home")}>Back to top ↑</button>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
