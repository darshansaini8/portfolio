import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

const PROFILE_IMAGE =
  "/images/file_00000000794c8211a72d76fd2d821e73.png";

const EMAIL = "mailto:darshansaini@example.com";
const GITHUB = "https://github.com/";
const LINKEDIN = "https://www.linkedin.com/";
const INSTAGRAM = "https://www.instagram.com/";

type Project = {
  number: string;
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  color: string;
  art: "campus" | "gym" | "food" | "learn" | "portfolio";
};

const projects: Project[] = [
  {
    number: "01",
    title: "Smart Campus",
    kicker: "COLLEGE ECOSYSTEM",
    description:
      "A connected digital campus experience for students, academics, notices and placements.",
    tags: ["React", "Node", "MongoDB"],
    color: "yellow",
    art: "campus",
  },
  {
    number: "02",
    title: "Gym Management",
    kicker: "FITNESS PLATFORM",
    description:
      "Members, trainers, attendance, memberships and progress inside one visual system.",
    tags: ["React", "Express", "MongoDB"],
    color: "orange",
    art: "gym",
  },
  {
    number: "03",
    title: "Tiffin",
    kicker: "LOCAL COMMERCE",
    description:
      "A friendly food ordering experience designed around everyday local meal services.",
    tags: ["React", "Node", "UPI"],
    color: "blue",
    art: "food",
  },
  {
    number: "04",
    title: "E-Learning",
    kicker: "EDUCATION PRODUCT",
    description:
      "Courses, lessons, notes and learning progress wrapped into an approachable interface.",
    tags: ["React", "API", "Auth"],
    color: "pink",
    art: "learn",
  },
  {
    number: "05",
    title: "Portfolio",
    kicker: "DIGITAL IDENTITY",
    description:
      "An experimental portfolio where motion, typography and code become part of the identity.",
    tags: ["React", "GSAP", "CSS"],
    color: "purple",
    art: "portfolio",
  },
];

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 6.7 12 14l9-7.3V18a2 2 0 0 1-2 2h-1V10.8L12 16l-6-5.2V20H5a2 2 0 0 1-2-2V6.7Z"
        fill="currentColor"
      />
      <path d="M3 6.7V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v.7L12 14 3 6.7Z" />
    </svg>
  );
}

function Illustration({ type }: { type: Project["art"] }) {
  if (type === "campus") {
    return (
      <svg className="project-art" viewBox="0 0 500 360">
        <defs>
          <linearGradient id="campusSky" x1="0" x2="1">
            <stop offset="0" stopColor="#fff4a8" />
            <stop offset="1" stopColor="#ffe16b" />
          </linearGradient>
        </defs>

        <circle cx="395" cy="65" r="40" fill="#111" opacity=".08" />
        <rect
          x="34"
          y="45"
          width="432"
          height="270"
          rx="34"
          fill="url(#campusSky)"
        />

        <path
          d="M50 280c80-72 122-48 180-18 66 34 115 30 220-35v88H50Z"
          fill="#111"
          opacity=".1"
        />

        <path
          d="M116 150 250 75l134 75"
          fill="#111"
          opacity=".9"
        />

        <path d="M145 150h210v105H145z" fill="#fff" />
        <path d="M170 150h34v105h-34zM235 150h30v105h-30zM296 150h34v105h-34z" fill="#111" />

        <path
          d="M105 255h290"
          stroke="#111"
          strokeWidth="9"
          strokeLinecap="round"
        />

        <circle cx="83" cy="92" r="8" fill="#111" />
        <circle cx="420" cy="128" r="6" fill="#111" />
      </svg>
    );
  }

  if (type === "gym") {
    return (
      <svg className="project-art" viewBox="0 0 500 360">
        <rect x="28" y="35" width="444" height="290" rx="38" fill="#ff7848" />

        <circle cx="380" cy="105" r="74" fill="#111" opacity=".1" />

        <path
          d="M110 225V130m-28 28v39m56-69v137m252-137v137m28-107v39m-56-69v137"
          stroke="#fff"
          strokeWidth="15"
          strokeLinecap="round"
        />

        <path
          d="M94 178h312"
          stroke="#111"
          strokeWidth="16"
          strokeLinecap="round"
        />

        <circle cx="250" cy="105" r="25" fill="#111" />
        <path
          d="M250 133v74m-50 0h100m-72-52 22 35 22-35"
          stroke="#111"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <text x="62" y="292" fontSize="23" fontWeight="800" fill="#111">
          TRAIN • TRACK • GROW
        </text>
      </svg>
    );
  }

  if (type === "food") {
    return (
      <svg className="project-art" viewBox="0 0 500 360">
        <rect x="30" y="35" width="440" height="290" rx="40" fill="#72c7ff" />

        <circle cx="380" cy="85" r="54" fill="#fff" opacity=".65" />

        <path
          d="M145 125h210v30c0 72-46 116-105 116s-105-44-105-116v-30Z"
          fill="#fff"
        />

        <path
          d="M125 125h250"
          stroke="#111"
          strokeWidth="12"
          strokeLinecap="round"
        />

        <path
          d="M185 125V88m65 37V75m65 50V88"
          stroke="#111"
          strokeWidth="10"
          strokeLinecap="round"
        />

        <path
          d="M190 200c25 22 95 22 120 0"
          stroke="#ff6b35"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />

        <circle cx="215" cy="178" r="7" fill="#111" />
        <circle cx="285" cy="178" r="7" fill="#111" />

        <text x="65" y="292" fontSize="24" fontWeight="800" fill="#111">
          GOOD FOOD / GOOD DAY
        </text>
      </svg>
    );
  }

  if (type === "learn") {
    return (
      <svg className="project-art" viewBox="0 0 500 360">
        <rect x="30" y="35" width="440" height="290" rx="38" fill="#ff8ccf" />

        <rect
          x="78"
          y="82"
          width="344"
          height="195"
          rx="18"
          fill="#fff"
        />

        <rect x="102" y="108" width="145" height="13" rx="6" fill="#111" />
        <rect x="102" y="136" width="220" height="9" rx="4" fill="#111" opacity=".15" />
        <rect x="102" y="155" width="190" height="9" rx="4" fill="#111" opacity=".15" />

        <circle cx="350" cy="128" r="35" fill="#b7f15a" />

        <path
          d="m337 128 9 9 18-20"
          stroke="#111"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <rect x="102" y="195" width="270" height="14" rx="7" fill="#111" opacity=".1" />
        <rect x="102" y="195" width="182" height="14" rx="7" fill="#111" />

        <rect x="102" y="228" width="120" height="26" rx="13" fill="#111" />
        <text x="119" y="247" fontSize="13" fill="#fff" fontWeight="700">
          CONTINUE
        </text>
      </svg>
    );
  }

  return (
    <svg className="project-art" viewBox="0 0 500 360">
      <rect x="30" y="35" width="440" height="290" rx="38" fill="#bda4ff" />

      <circle
        cx="250"
        cy="165"
        r="102"
        fill="none"
        stroke="#111"
        strokeWidth="10"
        strokeDasharray="18 13"
      />

      <circle cx="250" cy="165" r="74" fill="#fff" />

      <text
        x="250"
        y="150"
        textAnchor="middle"
        fontSize="25"
        fontWeight="900"
        fill="#111"
      >
        DANNY
      </text>

      <text
        x="250"
        y="180"
        textAnchor="middle"
        fontSize="22"
        fontWeight="700"
        fill="#111"
      >
        DYNAMIC
      </text>

      <path
        d="M105 277h290"
        stroke="#111"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <circle cx="108" cy="277" r="17" fill="#111" />
      <circle cx="392" cy="277" r="17" fill="#111" />
    </svg>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`project-card project-${project.color}`}
      data-project-card
      data-index={index}
    >
      <div className="card-top">
        <span>{project.number}</span>
        <span>{project.kicker}</span>
      </div>

      <div className="art-wrap">
        <Illustration type={project.art} />
      </div>

      <div className="card-copy">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <a className="card-arrow magnetic" href="#contact" aria-label={`Open ${project.title}`}>
        <ArrowUpRight size={21} />
      </a>

      <div className="card-number">{project.number}</div>
    </article>
  );
}

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const story = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const mobileTrack = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useLayoutEffect(() => {
    const rootEl = root.current;
    const storyEl = story.current;
    const trackEl = track.current;

    if (!rootEl || !storyEl || !trackEl) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* HERO */
      const heroTl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTl
        .from(".nav", {
          y: -25,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-kicker",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=.3"
        )
        .from(
          ".hero-title-line",
          {
            yPercent: 110,
            rotate: 2,
            opacity: 0,
            duration: 0.9,
            stagger: 0.09,
          },
          "-=.25"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=.45"
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=.3"
        )
        .from(
          ".hero-photo",
          {
            scale: 0.82,
            rotate: -7,
            opacity: 0,
            duration: 1.1,
          },
          "-=.7"
        )
        .from(
          ".hero-sticker",
          {
            scale: 0,
            rotation: -15,
            duration: 0.65,
            stagger: 0.1,
          },
          "-=.65"
        );

      /* desktop scrollytelling */
      mm.add("(min-width: 901px)", () => {
        const getDistance = () =>
          Math.max(
            0,
            trackEl.scrollWidth -
              storyEl.querySelector(".story-window")!.clientWidth
          );

        const horizontal = gsap.to(trackEl, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: storyEl,
            pin: ".story-window",
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            end: () => `+=${getDistance() * 1.12 + window.innerHeight * 0.8}`,
          },
        });

        const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");

        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              rotation: index % 2 ? 3 : -3,
              y: index % 2 ? 28 : -20,
            },
            {
              rotation: index % 2 ? -3 : 3,
              y: index % 2 ? -20 : 28,
              ease: "none",
              scrollTrigger: {
                trigger: storyEl,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.4,
              },
            }
          );
        });

        ScrollTrigger.create({
          trigger: storyEl,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const count = projects.length - 1;
            setActiveProject(Math.min(count, Math.round(progress * count)));
          },
        });

        return () => {
          horizontal.kill();
        };
      });

      /* mobile / tablet native touch */
      mm.add("(max-width: 900px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>("[data-project-card]");

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              opacity: 0.45,
              y: 35,
              scale: 0.92,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: undefined,
                start: "left 85%",
                end: "left 45%",
                horizontal: true,
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      });

      /* reveal sections */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 45,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      /* refresh on viewport changes */
      const refresh = () => {
        requestAnimationFrame(() => ScrollTrigger.refresh());
      };

      window.addEventListener("resize", refresh, { passive: true });
      window.addEventListener("orientationchange", refresh, { passive: true });

      const observer = new ResizeObserver(refresh);
      observer.observe(rootEl);

      return () => {
        window.removeEventListener("resize", refresh);
        window.removeEventListener("orientationchange", refresh);
        observer.disconnect();
        mm.revert();
      };
    }, rootEl);

    return () => ctx.revert();
  }, []);

  /* Mobile project active card */
  useEffect(() => {
    const el = mobileTrack.current;
    if (!el) return;

    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const cards = [...el.querySelectorAll<HTMLElement>("[data-project-card]")];

        const center = el.scrollLeft + el.clientWidth / 2;

        let closest = 0;
        let distance = Infinity;

        cards.forEach((card, index) => {
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const d = Math.abs(center - cardCenter);

          if (d < distance) {
            distance = d;
            closest = index;
          }
        });

        setActiveProject(closest);
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* Desktop magnetic buttons + cursor */
  useEffect(() => {
    const cursorEl = cursor.current;

    if (!cursorEl || window.matchMedia("(pointer: coarse)").matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let x = mx;
    let y = my;
    let raf = 0;

    const move = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const loop = () => {
      x += (mx - x) * 0.15;
      y += (my - y) * 0.15;

      cursorEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    loop();

    const buttons = [...document.querySelectorAll<HTMLElement>(".magnetic")];

    const cleanups = buttons.map((button) => {
      const enter = () => cursorEl.classList.add("cursor-active");
      const leave = () => {
        cursorEl.classList.remove("cursor-active");
        button.style.transform = "";
      };

      const mousemove = (event: MouseEvent) => {
        const rect = button.getBoundingClientRect();

        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);

        button.style.transform = `translate(${dx * 0.12}px, ${
          dy * 0.12
        }px)`;
      };

      button.addEventListener("mouseenter", enter);
      button.addEventListener("mouseleave", leave);
      button.addEventListener("mousemove", mousemove);

      return () => {
        button.removeEventListener("mouseenter", enter);
        button.removeEventListener("mouseleave", leave);
        button.removeEventListener("mousemove", mousemove);
      };
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);

      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="portfolio" ref={root}>
      <div className="cursor" ref={cursor} />

      <header className="nav">
        <a href="#top" className="brand">
          <span className="brand-mark">D</span>
          <span>
            DANNY<span>.</span>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <a className="nav-cta magnetic" href="#contact">
          Let's talk <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">
                <span className="pulse" />
                MERN STACK DEVELOPER · INDIA
              </div>

              <h1 className="hero-title">
                <span className="title-mask">
                  <span className="hero-title-line">I BUILD</span>
                </span>

                <span className="title-mask">
                  <span className="hero-title-line accent-word">
                    DIGITAL
                  </span>
                </span>

                <span className="title-mask">
                  <span className="hero-title-line">EXPERIENCES.</span>
                </span>
              </h1>

              <p className="hero-description">
                React, Node.js, MongoDB and motion — turning ideas into
                products that feel alive.
              </p>

              <div className="hero-actions">
                <a className="primary-btn magnetic" href="#work">
                  Explore work <ArrowDown size={17} />
                </a>

                <a className="text-btn magnetic" href={EMAIL}>
                  <GmailIcon />
                  Email me
                </a>
              </div>

              <div className="hero-meta">
                <span>22 · B.Tech CSE</span>
                <span>AVAILABLE FOR WORK</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-orbit orbit-one" />
              <div className="hero-orbit orbit-two" />

              <div className="hero-photo">
                <img src={PROFILE_IMAGE} alt="Darshan Saini" />
              </div>

              <div className="hero-sticker sticker-one hero-sticker">
                <strong>05+</strong>
                <small>PROJECTS</small>
              </div>

              <div className="hero-sticker sticker-two hero-sticker">
                <strong>GSAP</strong>
                <small>MOTION</small>
              </div>

              <div className="hero-note">
                <span>01</span>
                <p>
                  CODE
                  <br />
                  WITH
                  <br />
                  CHARACTER.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line">
              <span />
            </div>
            <span>2026</span>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro-section" data-reveal id="about">
          <div className="section-label">
            <span>01</span>
            <span>THE PERSON BEHIND THE CODE</span>
          </div>

          <div className="intro-layout">
            <h2>
              LESS
              <br />
              TEMPLATE.
              <br />
              <em>MORE SOUL.</em>
            </h2>

            <div className="intro-copy">
              <p>
                I'm Darshan — a developer who enjoys building interfaces that
                have personality instead of looking like another template.
              </p>

              <p>
                My sweet spot sits between full-stack development, visual
                design and interaction.
              </p>

              <div className="mini-sign">
                <span>DS</span>
                <small>DESIGN × CODE × MOTION</small>
              </div>
            </div>
          </div>
        </section>

        {/* SCROLLTELLING */}
        <section className="story" ref={story} id="work">
          <div className="story-window">
            <div className="story-heading">
              <div>
                <span className="section-kicker">02 / SELECTED WORK</span>
                <h2>
                  SCROLL.
                  <br />
                  <span>DISCOVER.</span>
                </h2>
              </div>

              <div className="story-counter">
                <strong>
                  0{activeProject + 1}
                </strong>
                <span>/ 0{projects.length}</span>
              </div>
            </div>

            <div className="story-track" ref={track}>
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            <div className="story-progress">
              <div
                className="story-progress-fill"
                style={{
                  width: `${((activeProject + 1) / projects.length) * 100}%`,
                }}
              />
            </div>

            <div className="swipe-hint">
              <span>←</span>
              SWIPE / SCROLL
              <span>→</span>
            </div>
          </div>

          {/* Separate native mobile track */}
          <div className="mobile-story">
            <div className="mobile-story-track" ref={mobileTrack}>
              {projects.map((project, index) => (
                <ProjectCard
                  key={`mobile-${project.title}`}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" data-reveal>
          <div className="section-label">
            <span>03</span>
            <span>TOOLS I SPEAK</span>
          </div>

          <div className="skills-marquee">
            <div className="marquee-track">
              {[
                "REACT",
                "TYPESCRIPT",
                "NODE.JS",
                "MONGODB",
                "GSAP",
                "JAVASCRIPT",
                "EXPRESS",
                "UI / UX",
              ]
                .concat([
                  "REACT",
                  "TYPESCRIPT",
                  "NODE.JS",
                  "MONGODB",
                  "GSAP",
                  "JAVASCRIPT",
                  "EXPRESS",
                  "UI / UX",
                ])
                .map((skill, index) => (
                  <span key={`${skill}-${index}`}>
                    {skill} <b>✳</b>
                  </span>
                ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section" data-reveal>
          <div className="section-label">
            <span>04</span>
            <span>HOW I WORK</span>
          </div>

          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>THINK</h3>
              <p>
                Understand the problem before opening the editor.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>BUILD</h3>
              <p>
                Turn the idea into clean, responsive and maintainable code.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>MOVE</h3>
              <p>
                Add motion only where it creates meaning and personality.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>SHIP</h3>
              <p>
                Test the experience across real screens, not just one laptop.
              </p>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-top">
            <span>05 / CONTACT</span>
            <span>OPEN TO OPPORTUNITIES</span>
          </div>

          <div className="contact-main">
            <h2>
              HAVE AN
              <br />
              <em>IDEA?</em>
            </h2>

            <a className="contact-mail magnetic" href={EMAIL}>
              <span className="gmail-circle">
                <GmailIcon />
              </span>

              <span>LET'S BUILD IT.</span>

              <ArrowUpRight />
            </a>
          </div>

          <div className="social-row">
            <a className="social magnetic" href={GITHUB} target="_blank">
              <Github size={18} />
              GitHub
            </a>

            <a className="social magnetic" href={LINKEDIN} target="_blank">
              <Linkedin size={18} />
              LinkedIn
            </a>

            <a className="social magnetic" href={INSTAGRAM} target="_blank">
              <Instagram size={18} />
              Instagram
            </a>

            <a className="social magnetic" href={EMAIL}>
              <Mail size={18} />
              Gmail
            </a>
          </div>

          <footer>
            <span>© 2026 DANNY DYNAMIC</span>
            <span>BUILT WITH REACT × GSAP</span>
            <span>INDIA</span>
          </footer>
        </section>
      </main>
    </div>
  );
}