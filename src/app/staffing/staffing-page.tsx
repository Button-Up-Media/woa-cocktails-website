"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./staffing.module.css";

const TEAM = [
  { img: "/reference-assets/design-home/founder-fabio.jpg", pos: "center 24%", name: "Fabio Perez", role: "Founder" },
  { img: "/reference-assets/design-home/founder-hector.jpg", pos: "center 24%", name: "Hector Taveras", role: "Founder" },
  { img: "/reference-assets/design-home/staff-shake.jpg", pos: "center 38%", name: "Bar service", role: "Hospitality" },
  { img: "/reference-assets/design-home/gal-rooftop-bartender.jpg", pos: "center 25%", name: "Rooftop lead", role: "Bartender" },
] as const;

const ROLES = [
  {
    n: "01",
    role: "Bartenders",
    pitch: "Years of luxury hospitality. Cocktail craft, technique, presentation. The face of the bar.",
    img: "/reference-assets/design-home/svc-shake.jpg",
  },
  {
    n: "02",
    role: "Hosts & Captains",
    pitch: "Front-of-house leadership. Guest greeting, flow management and orchestration on the floor.",
    img: "/reference-assets/design-home/svc-team.jpg",
  },
  {
    n: "03",
    role: "Barbacks",
    pitch: "The invisible engine. Ice, glass and garnish keep moving so the bar never loses rhythm.",
    img: "/reference-assets/design-home/svc-pour.jpg",
  },
  {
    n: "04",
    role: "Event Leads",
    pitch: "The on-the-day captain. A single point of contact who owns timeline, team and recovery.",
    img: "/reference-assets/design-home/founders-bar.jpg",
  },
] as const;

const STEPS = [
  {
    n: "01",
    t: "Discovery call",
    d: "A 15-minute consult to cover date, guest count, event style and the support required.",
  },
  {
    n: "02",
    t: "Tailored team",
    d: "Within two business days we propose the team shape, ratios, lead and all-in quote.",
  },
  {
    n: "03",
    t: "Pre-event briefing",
    d: "The captain reviews the venue with the host, aligning timing, run of show and contingencies.",
  },
  {
    n: "04",
    t: "Event day",
    d: "The team arrives uniformed and briefed. We host. You enjoy your own event.",
  },
] as const;

const FAQS = [
  {
    q: "Can we book bartenders alone, without the full mobile bar?",
    a: "Absolutely. Staffing-only is one of our most common bookings — a venue bar with our team running it, or a private home with our bartenders behind the host's own setup.",
  },
  {
    q: "What's the bartender-to-guest ratio?",
    a: "A practical baseline is one bartender per 50 to 60 guests for a flowing reception, with a barback added around 100 guests. We adjust based on menu complexity and service style.",
  },
  {
    q: "Are your staff full-time WOA employees?",
    a: "Our core team is in-house. For larger events we bring on vetted hospitality professionals we have worked with for years, never cold-call agency staff.",
  },
  {
    q: "Do you provide uniforms?",
    a: "Yes. We maintain a clean WOA standard by default and can custom-uniform the team to match a brand, wedding palette or venue aesthetic.",
  },
  {
    q: "What if a staff member doesn't show up?",
    a: "Every event has a designated Event Lead and a backup roster. Last-minute changes happen behind the scenes so the host never feels it.",
  },
] as const;

const FEATURE_IMAGES = [
  "/reference-assets/current-site/events/summer-party/events-summer-party-01-597a9340-1.jpg",
  "/reference-assets/current-site/events/summer-party/events-summer-party-10-597a9348-1.jpg",
  "/reference-assets/current-site/events/summer-party/events-summer-party-21-597a9493-1.jpg",
  "/reference-assets/current-site/events/summer-party/events-summer-party-33-597a9646-1.jpg",
  "/reference-assets/current-site/events/summer-party/events-summer-party-40-597a9554-1.jpg",
  "/reference-assets/current-site/events/summer-party/events-summer-party-53-597a9703-2.jpg",
] as const;

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerBrand}>
              WOA
              <span className={styles.logoDiamond} aria-hidden="true" />
            </div>
            <p>A luxury hospitality and beverage house creating mobile bar experiences, cocktail programs and curated activations across New York and Miami.</p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>
                <Link href="/mobile-bar">Mobile Bar Experience</Link>
              </li>
              <li>
                <Link href="/staffing">Bartending &amp; Hospitality Staffing</Link>
              </li>
              <li>
                <Link href="/classes">Mixology Classes</Link>
              </li>
              <li>
                <Link href="/contact">Beverage Consulting</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>House</h4>
            <ul>
              <li>
                <Link href="/about">About / Founders</Link>
              </li>
              <li>
                <Link href="/contact">Contact / Book Now</Link>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>© {new Date().getFullYear()} WOA Cocktails · All rights reserved</span>
          <div className={styles.footerLinks}>
            <Link href="/contact">Privacy</Link>
            <Link href="/contact">Terms</Link>
            <Link href="/contact">Press</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HeroRolodex() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TEAM.length;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % total);
    }, 3600);
    return () => window.clearInterval(id);
  }, [paused, total]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActive((value) => (value + 1) % total);
      }
      if (event.key === "ArrowLeft") {
        setActive((value) => (value - 1 + total) % total);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [total]);

  return (
    <div
      className={styles.rolodex}
      role="region"
      aria-roledescription="carousel"
      aria-label="WOA hospitality team"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <span className={styles.rolodexHint}>— the team</span>
      <div className={styles.rolodexStack}>
        {TEAM.map((member, index) => {
          const offset = (index - active + total) % total;
          return (
            <button
              key={member.name}
              type="button"
              className={[styles.rolodexCard, offset === 0 ? styles.front : ""].filter(Boolean).join(" ")}
              style={{ zIndex: total - offset, ["--off" as never]: offset } as React.CSSProperties}
              onClick={() => setActive(index)}
              aria-label={`Show portrait ${index + 1} of ${total}`}
              aria-current={offset === 0}
              tabIndex={offset === 0 ? 0 : -1}
            >
              <Image src={member.img} alt={member.name} fill sizes="(max-width: 980px) 100vw, 380px" style={{ objectFit: "cover", objectPosition: member.pos }} />
              <div className={styles.rolodexCap}>
                <span className={styles.rolodexRole}>{member.role}</span>
                <span className={styles.rolodexName}>{member.name}</span>
              </div>
            </button>
          );
        })}
      </div>
      <div className={styles.rolodexControls}>
        <button type="button" className={styles.rolodexArr} onClick={() => setActive((value) => (value - 1 + total) % total)} aria-label="Previous">
          ←
        </button>
        <span className={styles.rolodexCount}>
          <b>{String(active + 1).padStart(2, "0")}</b> / {String(total).padStart(2, "0")}
        </span>
        <button type="button" className={styles.rolodexArr} onClick={() => setActive((value) => (value + 1) % total)} aria-label="Next">
          →
        </button>
      </div>
    </div>
  );
}

function PullQuote() {
  return (
    <section className={styles.pull}>
      <div className={styles.wrap}>
        <p className={styles.pullText}>
          We do not think of ourselves as bartenders.
          <br />
          <span>We think of ourselves as hosts</span> who happen to run the best bar in the room.
        </p>
      </div>
    </section>
  );
}

function Roles() {
  return (
    <section className={styles.roles}>
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.chapterNum}>[ 01 / The Roles ]</div>
            <div className={styles.eyebrow}>Four roles</div>
          </div>
          <h2>
            Four roles. <span className={styles.italic}>One</span> standard.
          </h2>
        </div>

        <div className={styles.rolesGrid}>
          {ROLES.map((role) => (
            <article className={styles.roleCard} key={role.n}>
              <figure className={styles.roleImg}>
                <Image src={role.img} alt={role.role} fill sizes="(max-width: 980px) 100vw, 25vw" />
              </figure>
              <div className={styles.roleBody}>
                <span className={styles.roleNum}>— {role.n}</span>
                <h3>{role.role}</h3>
                <p>{role.pitch}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature() {
  return (
    <section className={styles.feature}>
      <div className={styles.wrap}>
        <div className={styles.featureHead}>
          <span className={styles.featureStamp}>Featured · 2025</span>
          <div>
            <div className={styles.chapterNum}>[ 02 / In Action ]</div>
            <h2>
              <span className={styles.italic}>WOA Summer Party</span>
              <br />
              Dumbo House NYC.
            </h2>
            <p>
              A WOA-hosted rooftop summer party with a full hospitality team, running open-bar service sunset to late, framed by the Manhattan skyline.
            </p>
          </div>
        </div>

        <div className={styles.featureGrid}>
          {FEATURE_IMAGES.map((src, index) => (
            <figure
              key={src}
              className={[
                styles.featurePhoto,
                index === 0 ? styles.span6x2 : "",
                index === 1 ? styles.span6x1 : "",
                index === 2 ? styles.span6x1 : "",
                index === 3 ? styles.span6x1 : "",
                index === 4 ? styles.span6x1 : "",
                index === 5 ? styles.span12x1 : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Image src={src} alt={`WOA Summer Party photo ${index + 1}`} fill sizes="(max-width: 820px) 100vw, 33vw" />
            </figure>
          ))}
        </div>

        <div className={styles.featureMeta}>
          <div>
            <div className={styles.metaLabel}>Venue</div>
            <b>Dumbo House NYC</b>
          </div>
          <div>
            <div className={styles.metaLabel}>Format</div>
            <b>Rooftop · Open bar</b>
          </div>
          <div>
            <div className={styles.metaLabel}>Team</div>
            <b>9 hospitality staff</b>
          </div>
          <div>
            <div className={styles.metaLabel}>Date</div>
            <b>Summer 2025</b>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className={styles.process}>
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.chapterNum}>[ 03 / How It Works ]</div>
            <div className={styles.eyebrow}>Process</div>
          </div>
          <h2>
            From inquiry to <span className={styles.italic}>last call</span>.
          </h2>
        </div>

        <div className={styles.stepGrid}>
          {STEPS.map((step) => (
            <article className={styles.step} key={step.n}>
              <span className={styles.stepNum}>— {step.n}</span>
              <h3>{step.t}</h3>
              <p>{step.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.wrap}>
        <div className={styles.faqGrid}>
          <div className={styles.faqIntro}>
            <div className={styles.chapterNum}>[ FAQ ]</div>
            <div className={styles.eyebrow}>Common questions</div>
            <h2>
              About <span className={styles.italic}>the team</span>.
            </h2>
          </div>
          <div className={styles.questions}>
            {FAQS.map((faq, index) => (
              <details key={faq.q} className={styles.question} open={index === 0}>
                <summary>{faq.q}</summary>
                <div className={styles.answer}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <>
      <section className={styles.cta}>
        <div className={styles.ctaBg}>
          <Image src="/reference-assets/current-site/events/summer-party/events-summer-party-40-597a9554-1.jpg" alt="" fill sizes="100vw" />
        </div>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>— Inquire</div>
          <h2>
            Staff your <span className={styles.italic}>next</span> event.
          </h2>
          <p>
            15-minute discovery call. We&apos;ll assess the brief, propose the right team shape and send a quote within two business days.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.primaryButton}>
              Book a discovery call <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              All ways to reach us
            </Link>
          </div>
        </div>
      </section>
      <nav className={styles.otherServices} aria-label="Other services">
        <Link href="/mobile-bar">
          <span className={styles.dir}>← Previous service</span>
          <span className={styles.ttl}>
            Mobile Bar <span className={styles.italic}>Experience</span>
          </span>
        </Link>
        <Link href="/contact">
          <span className={styles.dir}>Next service →</span>
          <span className={styles.ttl}>
            Mixology <span className={styles.italic}>Classes</span>
          </span>
        </Link>
      </nav>
    </>
  );
}

export default function StaffingPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrowRow}>
                <span className={styles.eyebrow}>— Service 02 · The People</span>
              </div>
              <span className={styles.heroRule} />
              <h1>
                Bartending &amp;
                <br />
                hospitality staffing.
              </h1>
              <p>
                Professional bartending and hospitality staffing for private, corporate and luxury events. WOA places experienced bartenders and hospitality professionals trained to deliver quiet professionalism and guest-focused warmth.
              </p>
              <Link href="/contact" className={styles.heroPitch}>
                <span className={styles.pitchDot} />
                <span>
                  Staff your next event <span className={styles.crimsonArrow}>→</span>
                </span>
              </Link>
            </div>

            <HeroRolodex />
          </div>
        </div>
      </section>

      <PullQuote />
      <Roles />
      <Feature />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
