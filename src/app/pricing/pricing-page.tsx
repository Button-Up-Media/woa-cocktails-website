"use client";

import Link from "next/link";
import styles from "./pricing.module.css";

const PACKAGES = [
  {
    id: "pkg-01",
    n: "01",
    name: "Mobile Bar Experience",
    sub: "The flagship, full hospitality end-to-end.",
    price: "$2,500",
    unit: "starting",
    tag: "Most booked",
    includes: [
      "Luxury mobile bar setup, delivery and install",
      "Custom cocktail menu design",
      "Up to 3 signature cocktails developed for the event",
      "Professional bartenders and hospitality staff",
      "Premium mixers, garnishes and fresh ice",
      "Full bar tools, equipment and glassware",
      "Setup and breakdown",
      "4-hour service window, extendable",
    ],
    notes: "Final quote scales with guest count, hours, market, menu complexity and bar build.",
    cta: "Inquire for Mobile Bar",
  },
  {
    id: "pkg-02",
    n: "02",
    name: "Bartending & Hospitality Staffing",
    sub: "Experienced WOA team, by the event or by the hour.",
    price: "$85",
    unit: "per bartender / hour",
    tag: "Flexible",
    includes: [
      "WOA-trained bartenders, hosts, barbacks and event leads",
      "Pre-event briefing with venue walkthrough",
      "Uniformed and presentation-ready",
      "Backup roster on call",
      "Captain assigned for events of 80+ guests",
      "Travel within NYC and Miami included",
      "Custom uniforms available on request",
    ],
    notes: "4-hour minimum per booking. Travel outside NYC and Miami quoted separately.",
    cta: "Inquire for Staffing",
  },
  {
    id: "pkg-03",
    n: "03",
    name: "Mixology Private Class",
    sub: "Hands-on cocktail class led by a WOA mixologist.",
    price: "$150",
    unit: "per guest",
    tag: "Per guest",
    includes: [
      "90-minute hands-on class",
      "3 cocktails learned and made",
      "Premium base spirits, mixers, garnishes and ice",
      "Tools, jiggers, shakers and glassware",
      "Recipe cards sent after class",
      "Professional WOA mixologist leading",
      "On-site at office, home or venue",
    ],
    notes: "10-guest minimum. Group rates available for 30+. Brand-themed menus available.",
    cta: "Inquire for a Class",
  },
] as const;

const ADDONS = [
  { name: "Signature cocktail, additional", price: "$200 / each" },
  { name: "Branded menu cards and signage", price: "$300+" },
  { name: "Custom uniforms", price: "$80 / person" },
  { name: "Premium glassware upgrade", price: "$2.50 / guest" },
  { name: "Zero-proof program", price: "Included" },
  { name: "Live ice carving", price: "$1,500+" },
  { name: "Travel outside NYC / Miami", price: "Quoted" },
  { name: "Multi-day event, per day", price: "$1,200+" },
] as const;

const INCLUDED = [
  {
    title: "Discovery call",
    body: "15 minutes. Listening, ideas, scope. No charge, no pressure.",
  },
  {
    title: "Tailored proposal",
    body: "Within 2 business days. Itemized, no surprises.",
  },
  {
    title: "Pre-event walkthrough",
    body: "We meet you and the venue. Locations, timing, contingencies.",
  },
  {
    title: "Hospitality",
    body: "The standard is not bartending. The standard is feeling hosted.",
  },
] as const;

const PR_FAQ = [
  {
    q: "Why custom-quoted instead of flat packages?",
    a: "Too many honest variables. Guest count, hours, market, venue access, bar build, menu complexity and staffing all shift the cost. The starting prices above are a fair floor, and we send a full proposal within two business days after a 15-minute discovery call.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes. 50% to hold the date, balance due 7 days before the event. Deposits are non-refundable beyond 30 days out, and partially refundable inside that window. Specifics live in the proposal.",
  },
  {
    q: "Do prices include alcohol?",
    a: "Not by default. WOA can source and supply premium base spirits as an add-on, or we can run a fully BYOB bar where you supply spirits and we handle everything else. Mixers, garnishes and ice are always included.",
  },
  {
    q: "Do you charge for travel?",
    a: "Travel within NYC and Miami metro is included. Tri-state, South Florida and destination events are quoted separately based on distance, crew size and accommodation needs.",
  },
  {
    q: "Are gratuity and taxes included?",
    a: "Tax is added at quote. Gratuity is optional and at the host's discretion. For events where we manage cash or card sales, a standard 18% gratuity is applied at the bar.",
  },
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

function PricingHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrap}>
        <div className={styles.heroTop}>
          <span className={styles.eyebrow}>— Packages &amp; Pricing</span>
          <span className={styles.heroStamp}>Rate Card · 2026</span>
        </div>

        <h1 className={styles.heroTitle}>
          Pricing<span className={styles.dot}>.</span>
        </h1>
        <p className={styles.heroLede}>
          Every event is unique, so every WOA event is custom-quoted. Below are the starting points for each service - a simple, honest place to begin a conversation.
        </p>

        <div className={styles.jumpGrid}>
          <a href="#pkg-01" className={styles.jump}>
            <span className={styles.jumpNum}>01</span>
            <span className={styles.jumpLabel}>Mobile Bar</span>
            <span className={styles.jumpFrom}>
              from <b>$2,500</b>
            </span>
          </a>
          <a href="#pkg-02" className={styles.jump}>
            <span className={styles.jumpNum}>02</span>
            <span className={styles.jumpLabel}>Staffing</span>
            <span className={styles.jumpFrom}>
              from <b>$85<small>/hr</small></b>
            </span>
          </a>
          <a href="#pkg-03" className={styles.jump}>
            <span className={styles.jumpNum}>03</span>
            <span className={styles.jumpLabel}>Mixology Class</span>
            <span className={styles.jumpFrom}>
              from <b>$150<small>/guest</small></b>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className={styles.packages}>
      <div className={styles.wrap}>
        {PACKAGES.map((pkg) => (
          <article className={styles.package} id={pkg.id} key={pkg.id}>
            <header className={styles.packageHead}>
              <div className={styles.packageLhs}>
                <span className={styles.packageNum}>— No. {pkg.n}</span>
                <h2 className={styles.packageName}>{pkg.name}</h2>
                <p className={styles.packageSub}>{pkg.sub}</p>
                <span className={styles.packageTag}>{pkg.tag}</span>
              </div>
              <div className={styles.packageRhs}>
                <span className={styles.packageFrom}>Starting from</span>
                <span className={styles.packagePrice}>{pkg.price}</span>
                <span className={styles.packageUnit}>{pkg.unit}</span>
              </div>
            </header>

            <div className={styles.packageBody}>
              <div className={styles.packageIncl}>
                <span className={styles.sectionNum}>— Included</span>
                <ul>
                  {pkg.includes.map((line) => (
                    <li key={line}>
                      <span className={styles.bullet} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <aside className={styles.packageAside}>
                <div className={styles.packageNotes}>
                  <span className={styles.sectionNumMuted}>— Note</span>
                  <p>{pkg.notes}</p>
                </div>
                <Link href="/contact" className={styles.primaryButton}>
                  {pkg.cta} <span aria-hidden="true">→</span>
                </Link>
              </aside>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Addons() {
  return (
    <section className={styles.addons}>
      <div className={styles.wrap}>
        <div className={styles.sectionHeadStack}>
          <span className={styles.sectionNum}>[ A LA CARTE ]</span>
          <h2>
            Add to <span className={styles.italic}>any</span> package.
          </h2>
        </div>
        <ul className={styles.addonsList}>
          {ADDONS.map((addon) => (
            <li key={addon.name}>
              <span className={styles.addonName}>{addon.name}</span>
              <span className={styles.dots} aria-hidden="true" />
              <span className={styles.addonPrice}>{addon.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Included() {
  return (
    <section className={styles.included}>
      <div className={styles.wrap}>
        <div className={styles.sectionHeadStack}>
          <span className={styles.sectionNum}>[ ALWAYS INCLUDED ]</span>
          <h2>
            Things you&apos;ll <span className={styles.italic}>never</span> see on the invoice.
          </h2>
        </div>

        <div className={styles.includedGrid}>
          {INCLUDED.map((item) => (
            <div className={styles.inclCard} key={item.title}>
              <span className={styles.cardDot} />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
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
            <span className={styles.sectionNum}>[ FAQ ]</span>
            <div className={styles.eyebrow}>About pricing</div>
            <h2>
              Honest answers, <span className={styles.italic}>before</span> the proposal.
            </h2>
          </div>
          <div className={styles.questions}>
            {PR_FAQ.map((faq, index) => (
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
    <section className={styles.cta}>
      <div className={styles.wrap}>
        <span className={styles.eyebrow}>— Inquire</span>
        <h2>
          Let&apos;s build <span className={styles.italic}>something</span> tailored.
        </h2>
        <p>
          15-minute discovery call. We assess the brief, confirm the right package, and send a proposal within two business days.
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
  );
}

export default function PricingPage() {
  return (
    <main className={styles.page}>
      <PricingHero />
      <Packages />
      <Addons />
      <Included />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
