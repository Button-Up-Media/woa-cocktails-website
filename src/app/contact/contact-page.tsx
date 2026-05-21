"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./contact.module.css";

type Market = "nyc" | "mia";

const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
] as const;

const FAQS = [
  {
    q: "How far in advance should we book?",
    a: "Most weddings and larger private events book 4 to 8 months ahead. Corporate activations and pop-ups are often 2 to 6 weeks out. If you are on a tighter timeline, send the details anyway and we will do our best to make it work.",
  },
  {
    q: "Do you provide alcohol or just the bar service?",
    a: "We can structure it either way. WOA can source the alcohol, mixers, glassware and ice, or we can run a BYOB bar where you supply spirits and we handle the rest. Your proposal will outline both paths clearly.",
  },
  {
    q: "What is included in the mobile bar package?",
    a: "Luxury mobile bar setup, signature cocktail design, premium mixers, fresh garnish, bar tools, professional bartenders, hospitality staff, setup and breakdown. Every event is scoped to fit the guest count and format.",
  },
  {
    q: "Do you travel outside NYC and Miami?",
    a: "Yes. We regularly travel across the tri-state and South Florida regions, and accept select destination work nationwide. Travel and accommodation are quoted separately when needed.",
  },
  {
    q: "Can you accommodate non-alcoholic and zero-proof menus?",
    a: "Absolutely. Our zero-proof and low-ABV programs are treated with the same care as our spirited menus, with the same craft, presentation and hospitality standard.",
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

function buildCalendar() {
  const days: Array<{ day: number; off?: boolean; available?: boolean }> = [];

  for (let d = 26; d <= 30; d += 1) {
    days.push({ day: d, off: true });
  }

  for (let d = 1; d <= 31; d += 1) {
    const isWeekday = ((d + 4) % 7) >= 1 && ((d + 4) % 7) <= 5;
    const available = isWeekday && d >= 12 && d !== 25;
    days.push({ day: d, available });
  }

  while (days.length % 7 !== 0) {
    days.push({ day: days.length - 35 + 1, off: true });
  }

  return days;
}

function dayLabel(day: number) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dow = (day + 4) % 7;
  return `${weekDays[dow]}, May ${day}, 2026`;
}

function Scheduler() {
  const calendar = useMemo(() => buildCalendar(), []);
  const [selectedDay, setSelectedDay] = useState(14);
  const [selectedTime, setSelectedTime] = useState<(typeof TIME_SLOTS)[number]>("2:00 PM");
  const [confirmed, setConfirmed] = useState(false);

  const currentLabel = dayLabel(selectedDay);

  if (confirmed) {
    return (
      <div className={styles.schedulerSuccess}>
        <span className={styles.successMark} aria-hidden="true" />
        <h3>You&apos;re booked.</h3>
        <p>
          Discovery call confirmed for <b>{currentLabel}</b> at <b>{selectedTime}</b> ET.
          A calendar invite and meeting link are on their way to your inbox.
        </p>
        <button type="button" className={styles.secondaryButton} onClick={() => setConfirmed(false)}>
          Pick a different time
        </button>
      </div>
    );
  }

  return (
    <div className={styles.scheduler} id="schedule">
      <header className={styles.schedulerHead}>
        <div className={styles.schedulerIntro}>
          <span className={styles.eyebrow}>— Discovery Call</span>
          <h2>
            Schedule a <span className={styles.italic}>15-min</span> consult.
          </h2>
          <p>15 minutes · Video call · No commitment · NYC &amp; Miami</p>
        </div>
        <div className={styles.badge}>
          <span>15</span>
          <small>MIN</small>
        </div>
      </header>

      <div className={styles.schedulerBody}>
        <section className={styles.calendarPane} aria-label="May 2026 calendar">
          <div className={styles.calendarMonth}>
            <span>May <em>2026</em></span>
            <div className={styles.calendarArrows} aria-hidden="true">
              <span>‹</span>
              <span>›</span>
            </div>
          </div>
          <div className={styles.calendarGrid}>
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <div key={day} className={styles.calendarDow}>
                {day}
              </div>
            ))}
            {calendar.map((item, index) => (
              <button
                key={`${item.day}-${index}`}
                type="button"
                disabled={item.off || !item.available}
                className={[
                  styles.calendarDay,
                  item.off ? styles.calendarOff : "",
                  item.available ? styles.calendarAvailable : "",
                  item.day === selectedDay && !item.off ? styles.calendarSelected : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => {
                  if (item.available) {
                    setSelectedDay(item.day);
                  }
                }}
              >
                {item.day}
              </button>
            ))}
          </div>
          <div className={styles.calendarFoot}>
            <div>
              <span className={styles.dotMark} />
              Available · May {selectedDay}
            </div>
            <span>Eastern Time (UTC−5)</span>
          </div>
        </section>

        <section className={styles.timePane} aria-label="Available times">
          <div className={styles.timeHead}>
            <span className={styles.eyebrowMuted}>Selected</span>
            <span className={styles.selectedDay}>{currentLabel}</span>
          </div>
          <div className={styles.timeList}>
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                className={[styles.timeSlot, selectedTime === slot ? styles.timeOn : ""].filter(Boolean).join(" ")}
                onClick={() => setSelectedTime(slot)}
              >
                <span className={styles.timeDot} />
                {slot}
              </button>
            ))}
          </div>
          <button type="button" className={styles.confirmButton} onClick={() => setConfirmed(true)}>
            Confirm {selectedTime} <span aria-hidden="true">→</span>
          </button>
        </section>
      </div>

      <footer className={styles.schedulerFoot}>
        <span>This will be replaced with a live Calendly embed.</span>
        <span className={styles.poweredBy}>
          Powered by <b>Calendly</b>
        </span>
      </footer>
    </div>
  );
}

function TrustRow() {
  return (
    <section className={styles.trust}>
      <div className={styles.wrap}>
        <div className={styles.trustGrid}>
          <article className={styles.trustCard}>
            <span className={styles.trustIcon} aria-hidden="true" />
            <div>
              <div className={styles.trustTitle}>Reply within 2 business days</div>
              <p>Every inquiry is read and answered personally by our team. No auto-replies.</p>
            </div>
          </article>
          <article className={styles.trustCard}>
            <span className={styles.trustIcon} aria-hidden="true" />
            <div>
              <div className={styles.trustTitle}>No pressure, no obligation</div>
              <p>The discovery call is a 15-minute conversation. We will listen, share ideas and send a proposal.</p>
            </div>
          </article>
          <article className={styles.trustCard}>
            <span className={styles.trustIcon} aria-hidden="true" />
            <div>
              <div className={styles.trustTitle}>Or reach us directly</div>
              <p>
                <a href="mailto:hello@woacocktails.com">hello@woacocktails.com</a>
                <br />
                NYC <a href="tel:+19175550100">+1 (917) 555-0100</a>
                <br />
                MIA <a href="tel:+13055550100">+1 (305) 555-0100</a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className={styles.faq}>
      <div className={styles.wrap}>
        <div className={styles.faqGrid}>
          <div className={styles.faqIntro}>
            <div className={styles.monoLabel}>[ FAQ ]</div>
            <div className={styles.eyebrow} style={{ marginTop: 18 }}>
              Common questions
            </div>
            <h2>
              Answers, <span className={styles.italic}>before</span> you ask.
            </h2>
            <p>Don&apos;t see your question? Send us a note and we&apos;ll reply personally.</p>
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

function Coverage() {
  return (
    <section className={styles.coverage}>
      <div className={styles.wrap}>
        <div className={styles.coverageGrid}>
          <article className={styles.locationCard}>
            <span className={styles.eyebrow}>— Market 01</span>
            <h3>
              New <span className={styles.italic}>York.</span>
            </h3>
            <p>Manhattan · Brooklyn · Queens · The Hamptons · Westchester · New Jersey · Connecticut shoreline · Hudson Valley.</p>
            <div className={styles.locationMeta}>
              <div>
                <b>6 yrs</b>
                Operating since
              </div>
              <div>
                <b>NYC</b>
                Headquarters
              </div>
            </div>
          </article>
          <article className={styles.locationCard}>
            <span className={styles.eyebrow}>— Market 02</span>
            <h3>
              Mi<span className={styles.italic}>ami.</span>
            </h3>
            <p>Miami · Miami Beach · Brickell · Coral Gables · Bal Harbour · Fort Lauderdale · Palm Beach (select dates).</p>
            <div className={styles.locationMeta}>
              <div>
                <b>2026</b>
                Expansion
              </div>
              <div>
                <b>Wynwood</b>
                Local HQ
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Header({ market, setMarket, menuOpen, setMenuOpen }: { market: Market; setMarket: (next: Market) => void; menuOpen: boolean; setMenuOpen: (next: boolean) => void; }) {
  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.logo} aria-label="WOA Cocktails home">
        <span className={styles.logoText}>WOA</span>
        <span className={styles.logoDiamond} aria-hidden="true" />
      </Link>

      <nav className={styles.navLinks} aria-label="Primary">
        <Link href="/about">About</Link>
        <a href="#schedule">Scheduler</a>
        <Link href="/contact" className={styles.activeLink}>
          Contact
        </Link>
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
        <a className={styles.bookButton} href="#schedule">
          Book Now <span aria-hidden="true">→</span>
        </a>
        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}

function MobileMenu({ market, setMarket, menuOpen, setMenuOpen }: { market: Market; setMarket: (next: Market) => void; menuOpen: boolean; setMenuOpen: (next: boolean) => void; }) {
  return (
    <div className={[styles.drawer, menuOpen ? styles.drawerOpen : ""].filter(Boolean).join(" ")} aria-hidden={!menuOpen}>
      <div className={styles.drawerInner}>
        <div className={styles.drawerLinks}>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <a href="#schedule" onClick={() => setMenuOpen(false)}>
            Scheduler
          </a>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
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
          <a className={styles.bookButton} href="#schedule" onClick={() => setMenuOpen(false)}>
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
            <p>
              A luxury hospitality and beverage house creating mobile bar experiences, beverage programs and curated activations across New York and Miami.
            </p>
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
                <a href="#schedule">Scheduler</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Markets</h4>
            <ul>
              <li>
                <b>New York</b>
                <br />
                <span>NYC · Tri-state · The Hamptons</span>
              </li>
              <li>
                <b>Miami</b>
                <br />
                <span>Miami · Beach · Brickell · Coral Gables</span>
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

export default function ContactPage() {
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
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>— Inquire · Book a Consult</span>
              <h1>
                Let&apos;s host <span className={styles.italic}>something</span>
                <br />
                unforgettable.
              </h1>
              <p>
                Book a 15-minute discovery call with WOA. We&apos;ll listen, share ideas and send a tailored proposal within two business days.
              </p>
              <div className={styles.heroStats}>
                <div>
                  <span className={styles.statValue}>2-Day</span>
                  Response
                </div>
                <div>
                  <span className={styles.statValue}>500+</span>
                  Events curated
                </div>
                <div>
                  <span className={styles.statValue}>5★</span>
                  Avg. rating
                </div>
              </div>
              <a href="#schedule" className={styles.primaryButton}>
                Jump to scheduler <span aria-hidden="true">↓</span>
              </a>
            </div>
            <figure className={styles.heroPhoto}>
              <Image
                src="/reference-assets/design-home/founders-cheers.jpg"
                alt="WOA co-founders Fabio Perez and Hector Taveras sharing a toast"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 42vw"
              />
              <figcaption>
                <span className={styles.eyebrowAmber}>— Your hosts</span>
                <span>
                  Fabio &amp; Hector,
                  <br />
                  co-founders
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.main}>
        <div className={styles.wrap}>
          <Scheduler />
        </div>
      </section>

      <TrustRow />
      <FAQ />
      <Coverage />
      <Footer />
    </main>
  );
}
