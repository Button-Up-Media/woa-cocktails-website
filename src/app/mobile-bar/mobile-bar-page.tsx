"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./mobile-bar.module.css";

type Market = "nyc" | "mia";

const INCLUDES = [
  {
    n: "01",
    title: "Luxury mobile bar setup",
    desc: "A bespoke bar build tailored in footprint, finish and presentation to the venue and guest count.",
  },
  {
    n: "02",
    title: "Custom cocktail menu design",
    desc: "A curated menu built around the event vision with signature cocktails, classics and zero-proof options.",
  },
  {
    n: "03",
    title: "Signature cocktail development",
    desc: "Original house cocktails developed for the occasion and named to the moment.",
  },
  {
    n: "04",
    title: "Professional bartenders & hosts",
    desc: "Experienced, presentation-ready hospitality staff who know how to move with the room.",
  },
  {
    n: "05",
    title: "Premium mixers, garnish & ice",
    desc: "Fresh ingredients only, with sourced garnish, premium mixers and a polished finish at every pour.",
  },
  {
    n: "06",
    title: "Bar tools & equipment",
    desc: "Full kit - shakers, jiggers, strainers, glassware and the supporting pieces needed to arrive ready.",
  },
  {
    n: "07",
    title: "Setup, breakdown & handling",
    desc: "We arrive early, operate cleanly and leave the host free to stay present with their guests.",
  },
  {
    n: "08",
    title: "Hospitality-focused service",
    desc: "Not bartending as a transaction, but hospitality as the standard.",
  },
] as const;

const IDEAL_FOR = [
  "Weddings",
  "Luxury private events",
  "Corporate events",
  "Brand activations",
  "Rooftop events",
  "Social celebrations",
] as const;

const STEPS = [
  {
    n: "01",
    t: "Discovery call",
    d: "A 15-minute consult to cover the date, market, guest count and the kind of atmosphere you want to create.",
  },
  {
    n: "02",
    t: "Tailored proposal",
    d: "Within two business days we send a proposal with menu direction, staffing, bar build and scope.",
  },
  {
    n: "03",
    t: "Menu & build",
    d: "Optional tasting, signature cocktails finalized and the bar styling locked in for the event.",
  },
  {
    n: "04",
    t: "Event day",
    d: "We arrive early, set up, host and break down so you can stay a guest at your own event.",
  },
] as const;

const FAQS = [
  {
    q: "How is pricing structured?",
    a: "Every event is quoted custom. Guest count, hours, market, bar build, staffing and menu complexity all affect the final scope, so a bespoke proposal is the cleanest way to be honest.",
  },
  {
    q: "Do you supply the alcohol or do we?",
    a: "Either. WOA can source and supply alcohol, mixers, glassware and ice, or we can run a fully BYOB bar where you supply the spirits and we handle the service.",
  },
  {
    q: "What is included in the luxury mobile bar?",
    a: "The full build: front and back bar setup, glassware, ice well, garnish station and any venue-appropriate signage. We spec the footprint to the room.",
  },
  {
    q: "How many guests can WOA serve?",
    a: "From intimate dinners of 12 to brand events of 500+. Staffing and bar count scale to preserve service flow at peak.",
  },
  {
    q: "Can you create a signature cocktail for our event?",
    a: "Yes. Signature cocktail development is included in the flagship package and can be built around theme, color, season or guest of honor.",
  },
] as const;

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

function MBLineArt() {
  return (
    <Image
      className={styles.heroArt}
      src="/reference-assets/design-home/mobile-bar-line-art-red.png"
      alt="Red line-art mobile bar illustration"
      width={1254}
      height={1254}
      priority
    />
  );
}

function Header({
  market,
  setMarket,
  menuOpen,
  setMenuOpen,
}: {
  market: Market;
  setMarket: (next: Market) => void;
  menuOpen: boolean;
  setMenuOpen: (next: boolean) => void;
}) {
  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.logo} aria-label="WOA Cocktails home">
        <span className={styles.logoText}>WOA</span>
        <span className={styles.logoDiamond} aria-hidden="true" />
      </Link>

      <nav className={styles.navLinks} aria-label="Primary">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <a href="#faq">FAQ</a>
      </nav>

      <div className={styles.navRight}>
        <div className={styles.marketPill} aria-label="Market focus">
          <button type="button" className={market === "nyc" ? styles.marketOn : ""} onClick={() => setMarket("nyc")}>
            NYC
          </button>
          <button type="button" className={market === "mia" ? styles.marketOn : ""} onClick={() => setMarket("mia")}>
            Miami
          </button>
        </div>
        <a className={styles.bookButton} href="/contact">
          Book Now <span aria-hidden="true">→</span>
        </a>
        <button type="button" className={styles.burger} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}

function MobileMenu({
  market,
  setMarket,
  menuOpen,
  setMenuOpen,
}: {
  market: Market;
  setMarket: (next: Market) => void;
  menuOpen: boolean;
  setMenuOpen: (next: boolean) => void;
}) {
  return (
    <div className={[styles.drawer, menuOpen ? styles.drawerOpen : ""].filter(Boolean).join(" ")} aria-hidden={!menuOpen}>
      <div className={styles.drawerInner}>
        <div className={styles.drawerLinks}>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
        </div>
        <div className={styles.drawerFoot}>
          <div className={styles.marketPill}>
            <button type="button" className={market === "nyc" ? styles.marketOn : ""} onClick={() => setMarket("nyc")}>
              NYC
            </button>
            <button type="button" className={market === "mia" ? styles.marketOn : ""} onClick={() => setMarket("mia")}>
              Miami
            </button>
          </div>
          <a className={styles.bookButton} href="/contact" onClick={() => setMenuOpen(false)}>
            Book Now <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

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
                <Link href="/contact">Bartender Services</Link>
              </li>
              <li>
                <Link href="/contact">Mixology Classes</Link>
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

function Setup() {
  return (
    <section className={styles.setup}>
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.chapterNum}>[ 01 / The Setup ]</div>
            <div className={styles.eyebrow}>The flagship experience</div>
          </div>
          <h2>
            From <span className={styles.italic}>bar build</span> to final <span className={styles.italic}>pour</span> - every detail curated.
          </h2>
        </div>

        <div className={styles.setupSpread}>
          <figure className={styles.tallPhoto}>
            <Image src="/reference-assets/current-site/services/services-01-img_5855.jpeg" alt="Luxury mobile bar setup" fill sizes="(max-width: 980px) 100vw, 42vw" />
            <figcaption>
              <span className={styles.captionTag}>[ luxury mobile bar · in setup ]</span>
            </figcaption>
          </figure>
          <div className={styles.setupCopy}>
            <p className={styles.lede}>
              From luxury mobile bars and signature cocktail development to hospitality staffing and custom presentation, WOA creates a fully customized bar experience tailored to the atmosphere of each event.
            </p>
            <div className={styles.quote}>
              <span className={styles.quoteMark}>&ldquo;</span>
              We treat the bar as a stage. Every guest who walks up should feel like the only one being served.
              <span className={styles.quoteSig}>— The WOA House</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Includes() {
  return (
    <section className={styles.includes}>
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.chapterNum}>[ 02 / What&apos;s Included ]</div>
            <div className={styles.eyebrow}>Eight elements</div>
          </div>
          <h2>
            Eight elements. <span className={styles.italic}>One</span> standard.
          </h2>
        </div>

        <div className={styles.includeGrid}>
          {INCLUDES.map((item) => (
            <article key={item.n} className={styles.includeItem}>
              <span className={styles.includeNum}>— {item.n}</span>
              <div className={styles.includeBody}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
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
            <div className={styles.chapterNum}>[ 03 / In Action ]</div>
            <h2>
              <span className={styles.italic}>WOA × Style Bender</span>
              <br />
              Cinco de Mayo · Soho House NYC.
            </h2>
            <p>
              A members-only Cinco de Mayo celebration at Soho House NYC. A mezcal-led menu, a fully branded WOA x Style Bender bar build and a hospitality team holding the room from first guest to last call.
            </p>
          </div>
        </div>

        <div className={styles.featureGrid}>
          <figure className={`${styles.featurePhoto} ${styles.span7x2}`}>
            <Image src="/reference-assets/current-site/events/style-bender/events-style-bender-01-597a1849-enhanced-nr-1.jpg" alt="WOA x Style Bender bar at Soho House NYC" fill sizes="(max-width: 820px) 100vw, 60vw" />
          </figure>
          <figure className={`${styles.featurePhoto} ${styles.span5x1}`}>
            <Image src="/reference-assets/current-site/events/style-bender/events-style-bender-21-597a1893-1.jpg" alt="WOA hospitality team serving at the event" fill sizes="(max-width: 820px) 100vw, 35vw" />
          </figure>
          <figure className={`${styles.featurePhoto} ${styles.span5x1}`}>
            <Image src="/reference-assets/current-site/events/style-bender/events-style-bender-09-597a1953-1.jpg" alt="Signature cocktail pour at the event" fill sizes="(max-width: 820px) 100vw, 35vw" />
          </figure>
          <figure className={`${styles.featurePhoto} ${styles.span4x1}`}>
            <Image src="/reference-assets/current-site/events/style-bender/events-style-bender-10-597a1944-1.jpg" alt="Bartender mid-shake at the event" fill sizes="(max-width: 820px) 100vw, 28vw" />
          </figure>
          <figure className={`${styles.featurePhoto} ${styles.span4x1}`}>
            <Image src="/reference-assets/current-site/events/style-bender/events-style-bender-06-597a1806-1.jpg" alt="Cocktail pour in the Soho House feature" fill sizes="(max-width: 820px) 100vw, 28vw" />
          </figure>
          <figure className={`${styles.featurePhoto} ${styles.span4x1}`}>
            <Image src="/reference-assets/current-site/events/style-bender/events-style-bender-04-597a1889-1.jpg" alt="WOA x Style Bender moment at Soho House NYC" fill sizes="(max-width: 820px) 100vw, 28vw" />
          </figure>
        </div>

        <div className={styles.featureMeta}>
          <div>
            <div className={styles.metaLabel}>Venue</div>
            <b>Soho House NYC</b>
          </div>
          <div>
            <div className={styles.metaLabel}>Collab</div>
            <b>Style Bender</b>
          </div>
          <div>
            <div className={styles.metaLabel}>Date</div>
            <b>May 2025</b>
          </div>
          <div>
            <div className={styles.metaLabel}>Format</div>
            <b>Members event · 250 guests</b>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ideal() {
  return (
    <section className={styles.ideal}>
      <div className={styles.wrap}>
        <div className={styles.sectionHead}>
          <div>
            <div className={styles.chapterNum}>[ 04 / Ideal For ]</div>
            <div className={styles.eyebrow}>Best fit</div>
          </div>
          <h2>
            Built for the <span className={styles.italic}>moments</span> that deserve a real bar.
          </h2>
        </div>

        <div className={styles.chipGrid}>
          {IDEAL_FOR.map((item) => (
            <span key={item} className={styles.chip}>
              <span className={styles.chipDot} />
              {item}
            </span>
          ))}
        </div>
        <p className={styles.idealNote}>
          Also available as <b>standalone luxury mobile bar rentals</b> for intimate gatherings and larger hospitality experiences.
        </p>
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
            <div className={styles.chapterNum}>[ 05 / How It Works ]</div>
            <div className={styles.eyebrow}>Process</div>
          </div>
          <h2>
            Four steps to a <span className={styles.italic}>work of art</span>.
          </h2>
        </div>

        <div className={styles.stepGrid}>
          {STEPS.map((step) => (
            <article key={step.n} className={styles.step}>
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
              About the <span className={styles.italic}>experience</span>.
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
          <Image src="/reference-assets/design-home/cocktail-foam.jpg" alt="" fill sizes="100vw" />
        </div>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>— Inquire</div>
          <h2>
            Let&apos;s build <span className={styles.italic}>your</span> bar.
          </h2>
          <p>
            15-minute discovery call. We listen, we share ideas and you&apos;ll have a tailored proposal in your inbox within two business days.
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
        <Link href="/">
          <span className={styles.dir}>← Home</span>
          <span className={styles.ttl}>
            All <span className={styles.italic}>services</span>
          </span>
        </Link>
        <Link href="/contact">
          <span className={styles.dir}>Next service →</span>
          <span className={styles.ttl}>
            Bartending <span className={styles.italic}>&amp; Staffing</span>
          </span>
        </Link>
      </nav>
    </>
  );
}

export default function MobileBarPage() {
  const [market, setMarket] = useState<Market>("nyc");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className={styles.page}>
      <Header market={market} setMarket={setMarket} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu market={market} setMarket={setMarket} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroTop}>
            <span className={styles.eyebrow}>— Service 01 · The Flagship</span>
            <span className={styles.monoTag}>[ Mobile Bar · Experience ]</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.heroRule} />
              <h1>
                The bar, <span className={styles.italic}>elevated</span>
                <br />
                into a moment.
              </h1>
              <p>
                WOA&apos;s signature hospitality experience - luxury mobile bars, signature cocktails and a hospitality team that turns service into a moment.
              </p>
              <Link href="/contact" className={styles.primaryButton}>
                Inquire for your event <span aria-hidden="true">→</span>
              </Link>
            </div>

            <figure className={styles.heroArtFrame}>
              <MBLineArt />
              <figcaption>
                <span>— No. 01</span>
                <span className={styles.heroArtCaption}>A WOA mobile bar, in service.</span>
              </figcaption>
            </figure>
          </div>

          <div className={styles.heroMeta}>
            <span>
              <b>· FLAGSHIP</b> · signature WOA experience
            </span>
            <span>Custom-quoted per event · NYC &amp; Miami</span>
          </div>
        </div>
      </section>

      <Setup />
      <Includes />
      <Feature />
      <Ideal />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
