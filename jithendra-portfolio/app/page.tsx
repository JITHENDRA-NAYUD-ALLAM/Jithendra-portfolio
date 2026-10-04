"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, BarChart3, BrainCircuit, Code2, Download,
  ExternalLink, Github, Linkedin, Mail, Menu, Moon, Sparkles, Sun, X,
  Zap, Terminal, Cpu, Layers3, Phone
} from "lucide-react";

const skillGroups = [
  {
    title: "Currently Working With", tone: "green",
    items: ["Java", "Python", "SQL / MySQL", "JavaScript", "React.js", "Power BI", "Advanced Excel", "Git / GitHub"]
  },
  {
    title: "Advanced / Building With", tone: "blue",
    items: ["Data Structures & Algorithms", "REST APIs", "Spring Boot", "Pandas / NumPy", "Power Query", "DAX", "MongoDB", "Next.js"]
  },
  {
    title: "Exploring", tone: "violet",
    items: ["TypeScript", "FastAPI", "PostgreSQL / PostGIS", "Docker", "AI / LLM Integration", "GIS & Geospatial Systems", "Optimization", "Cloud Deployment"]
  }
];

const projects = [
  { title: "TalentFlow", type: "FULL-STACK WEB APP", text: "Job application tracking platform with structured records, status management, filtering and a responsive React interface.", tags: ["React", "JavaScript", "CRUD", "UI"], accent: "violet", href: "https://github.com/JITHENDRA-NAYUD-ALLAM", label: "View on GitHub" },
  { title: "Sales Analytics Command Center", type: "DATA ANALYTICS", text: "Interactive business dashboard for revenue, product, region and performance analysis with KPI storytelling.", tags: ["Power BI", "DAX", "Power Query"], accent: "cyan", href: "#contact", label: "Open project" },
  { title: "Cookies Sales Intelligence", type: "EXCEL ANALYTICS", text: "Advanced Excel dashboard transforming transactional sales data into clean KPIs, trends and category-level insights.", tags: ["Excel", "Pivot", "Power Query"], accent: "orange", href: "/EXCEL.DASHBOARD_Cookie_Sales_Analysis.xlsx", label: "Open Excel workbook" },
  { title: "CITYMIND", type: "CURRENTLY BUILDING", text: "AI-powered urban planning and simulation platform combining geospatial data, software engineering, analytics and optimization.", tags: ["Next.js", "Python", "GIS", "AI"], accent: "green", building: true, href: "#currently-building", label: "Explore the build" },
];

const experience = [
  { date: "2026 — PRESENT", role: "Technology & Data Projects", company: "Independent / Portfolio Development", text: "Building software applications, analytics dashboards and data-driven systems while strengthening Java, Python, SQL, React and problem-solving skills." },
  { date: "2025 — 2026", role: "Software & Analytics Development", company: "Project-Based Work", text: "Developed web applications and analytical solutions covering CRUD workflows, dashboards, SQL analysis, data transformation and visualization." },
];

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2><p>{sub}</p></div>;
}

export default function Home() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <main className={dark ? "site dark" : "site light"}>
      <motion.div className="progress" style={{ scaleX }} />
      <div className="noise" /><div className="orb orb1" /><div className="orb orb2" /><div className="orb orb3" />

      <header className="nav-wrap">
        <nav className="nav">
          <a className="brand" href="#top"><span>J</span><strong>JITHENDRA</strong><small>SOFTWARE · DATA</small></a>
          <div className={menu ? "navlinks open" : "navlinks"}>
            {[['About','about'],['Skills','skills'],['Projects','projects'],['Experience','experience'],['Contact','contact']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}
          </div>
          <div className="nav-actions"><button className="icon-btn" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={16}/></a><button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Open menu">{menu ? <X/> : <Menu/>}</button></div>
        </nav>
      </header>

      <section id="top" className="hero container">
        <div className="hero-copy">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="availability"><i/> OPEN TO SOFTWARE · DATA OPPORTUNITIES</motion.div>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}}>Code.<br/><em>Data.</em><br/>Build.</motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.2}}>I&apos;m <b>ALLAM JITHENDRA NAYUD</b>, a software and data-focused developer building web applications, analytical dashboards and data-driven systems.</motion.p>
          <motion.p className="college-line" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.25}}><b>NIT Andhra Pradesh</b> graduate focused on software development and data analytics.</motion.p>
          <motion.div className="hero-buttons" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.3}}><a className="primary" href="#projects">Explore my work <ArrowDownRight size={18}/></a><a className="secondary" href="/Jithendra_Nayud_Resume.pdf">Download CV <Download size={17}/></a></motion.div>
          <div className="mini-stats"><div><b>04+</b><span>Core projects</span></div><div><b>03</b><span>Skill levels</span></div><div><b>∞</b><span>Build mindset</span></div></div>
        </div>
        <div className="hero-visual">
          <motion.div className="profile-wrap" initial={{opacity:0,scale:.82,y:30}} animate={{opacity:1,scale:1,y:0}} transition={{duration:1,delay:.15,type:"spring",stiffness:80}}>
            <div className="profile-ring ring-a"/><div className="profile-ring ring-b"/>
            <motion.div className="profile-photo" animate={{y:[0,-10,0]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}}><img src="/profile-transparent.png" alt="Allam Jithendra Nayud" /></motion.div>
            <motion.div className="profile-badge badge-code" animate={{y:[0,-9,0]}} transition={{duration:3.5,repeat:Infinity,ease:"easeInOut"}}><Code2 size={16}/><span>BUILDING<br/><b>SOFTWARE</b></span></motion.div>
            <motion.div className="profile-badge badge-data" animate={{y:[0,9,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}}><BarChart3 size={16}/><span>DATA<br/><b>DRIVEN</b></span></motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="section container">
        <SectionTitle eyebrow="01 / ABOUT" title="Software first. Data always." sub="A developer focused on building useful products, solving problems with code and turning information into decisions." />
        <div className="about-grid"><div className="about-copy"><p>I enjoy moving from an idea to a working product: understanding the problem, structuring the data, writing the logic, building the interface and making the result useful.</p><p>My current focus is <b>Java, Python, SQL, React, data analytics and problem solving</b>, with deeper work in full-stack development, APIs, databases and modern AI-enabled applications.</p><div className="quote"><Sparkles size={19}/><span>Build clearly. Analyze deeply. Keep learning.</span></div></div><div className="about-cards"><div><Code2/><b>Build</b><span>Web apps, APIs & software systems</span></div><div><BrainCircuit/><b>Analyze</b><span>SQL, dashboards & data workflows</span></div><div><Terminal/><b>Solve</b><span>DSA, logic & real-world problems</span></div><div><Cpu/><b>Explore</b><span>AI, cloud & modern developer tools</span></div></div></div>
      </section>

      <section id="skills" className="section container"><SectionTitle eyebrow="02 / TECH STACK" title="Three levels. One honest stack." sub="A clear view of what I use now, what I am actively building deeper expertise in, and what I am exploring next." /><div className="skill-groups">{skillGroups.map((group,gi)=><motion.div key={group.title} className={`skill-group ${group.tone}`} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:gi*.12}}><div className="group-head"><span>{String(gi+1).padStart(2,'0')}</span><h3>{group.title}</h3></div><div className="skill-chips">{group.items.map((item,i)=><motion.span key={item} initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:gi*.12+i*.035}}>{item}</motion.span>)}</div></motion.div>)}</div><div className="stack-footer"><Layers3 size={17}/><span>Focused on depth over collecting technologies.</span></div></section>

      <section id="projects" className="section container"><SectionTitle eyebrow="03 / SELECTED WORK" title="Proof, not promises." sub="Projects that show how I build software, work with data and approach real problems." /><div className="project-grid">{projects.map((p,i)=><motion.article key={p.title} className={`project-card ${p.accent} ${p.building ? 'building' : ''}`} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.08}}><div className="project-top"><span>{String(i+1).padStart(2,'0')}</span><small>{p.type}</small></div><div className="project-icon">{p.building ? <Sparkles size={30}/> : <BarChart3 size={30}/>}</div><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><a href={p.href} target={p.href.startsWith("http") ? "_blank" : undefined} rel={p.href.startsWith("http") ? "noreferrer" : undefined}>{p.label} <ArrowUpRight size={16}/></a></motion.article>)}</div></section>

      <section id="experience" className="section container"><SectionTitle eyebrow="04 / EXPERIENCE" title="Building through hands-on work." sub="A technical view of my software, analytics and project-building journey." /><div className="timeline">{experience.map((e,i)=><motion.div className="timeline-item" key={e.role} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.12}}><div className="time">{e.date}</div><div className="node"><i/></div><div className="timeline-content"><h3>{e.role}</h3><b>{e.company}</b><p>{e.text}</p></div></motion.div>)}</div></section>

      <section className="building-banner container"><div><span className="eyebrow">// CURRENTLY BUILDING</span><h2>CITYMIND</h2><p>AI Urban Infrastructure Planning & Simulation Engine</p><small>Next.js · Python · GIS · PostGIS · Analytics · Optimization · AI</small></div><a href="/projects/citymind">Explore the build <ArrowUpRight size={18}/></a></section>

      <section className="marquee"><div>JAVA ✦ PYTHON ✦ SQL ✦ REACT ✦ NEXT.JS ✦ POWER BI ✦ DSA ✦ AI ✦ </div><div aria-hidden>JAVA ✦ PYTHON ✦ SQL ✦ REACT ✦ NEXT.JS ✦ POWER BI ✦ DSA ✦ AI ✦ </div></section>

      <section id="contact" className="contact container"><div className="contact-box"><div><span className="eyebrow">05 / CONTACT</span><h2>Let&apos;s build<br/><em>something useful.</em></h2><p>Open to software development, data analytics and technology opportunities.</p></div><div className="contact-actions"><a className="primary email-action" href="https://mail.google.com/mail/?view=cm&fs=1&to=jithendraallam99@gmail.com&su=Portfolio%20Contact" target="_blank" rel="noreferrer"><Mail size={18}/> Email me</a><a className="contact-phone" href="tel:+917893141989"><Phone size={18}/> +91-789-3141-989</a><div className="socials"><a className="social-github" href="https://github.com/JITHENDRA-NAYUD-ALLAM" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={27}/></a><a className="social-linkedin" href="https://linkedin.com/in/jithendra-nayud-a974a933b" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={27}/></a></div></div></div></section>

      <footer><div className="container footer-in"><span>© 2026 ALLAM JITHENDRA NAYUD</span><span>BUILT WITH <Zap size={12}/> CODE & CURIOSITY</span></div></footer>
    </main>
  );
}
