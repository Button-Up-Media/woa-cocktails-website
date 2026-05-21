"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./classes.module.css";

const INCLUDES = [
  "Professional mixologist-led instruction",
  "All bar tools and ingredients supplied",
  "Signature cocktails tailored to your group",
  "Guided tasting and technique walkthroughs",
  "Setup, cleanup and host support included",
  "Custom themes for birthdays, off-sites and celebrations",
] as const;

const IDEAL_FOR = ["Birthday parties", "Corporate offsites", "Team building", "At-home celebrations", "Client entertaining", "Brand moments"] as const;

const STEPS = [
  {
    num: "01",
    title: "Tell us your date and group size",
    copy: "Share the vibe, venue, guest count and any beverage preferences. We’ll shape the class around the moment.",
  },
  {
    num: "02",
    title: "We build a custom flow",
    copy: "Our team maps out the cocktails, pacing and materials so the session feels polished and easy to host.",
  },
  {
    num: "03",
    title: "You host, we lead the pour",
    copy: "We arrive ready with tools, ingredients and instruction so your guests can learn, taste and enjoy.",
  },
] as const;

const FAQ = [
  {
    q: "How many guests can join a private class?",
    a: "Most classes are best for small to mid-size groups, but we can tailor the format for intimate gatherings, larger teams and brand activations.",
  },
  {
    q: "Do you provide all of the ingredients and tools?",
    a: "Yes. WOA brings the barware, ingredients, tools and setup required for the experience, and we can also source specialty ingredients on request.",
  },
  {
    q: "Can the menu be customized?",
    a: "Absolutely. We can shape the cocktails around seasonality, dietary preferences, spirit preferences and the tone of your event.",
  },
  {
    q: "Is this suitable for corporate events?",
    a: "Yes. The class format works well for team-building, offsites and client events when you want something hands-on, polished and memorable.",
  },
] as const;

export default function ClassesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <div className={styles.heroTop}>
            <span className={styles.eyebrow}>[ 03 / Service ]</span>
            <span className={styles.heroStamp}>Mixology Private Classes</span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.rule} />
              <h1 className={styles.title}>
                The class, <span className={styles.italic}>elevated</span>
                <br />
                into a moment.
              </h1>
              <p className={styles.lead}>
                WOA&apos;s private mixology classes turn your home, office or venue into a hosted tasting room. We bring the instruction, ingredients and barware so your guests can shake, stir and learn together.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/contact" className={`${styles.button} ${styles.buttonSolid}`}>
                  Inquire for your date <span>→</span>
                </Link>
                <Link href="/pricing" className={`${styles.button} ${styles.buttonGhost}`}>
                  View pricing
                </Link>
              </div>
              <div className={styles.heroNotes}>
                <span>Private groups</span>
                <span>Team building</span>
                <span>Birthdays</span>
                <span>NYC & Miami</span>
              </div>
            </div>

            <div className={styles.heroArt}>
              <figure className={styles.mainShot}>
                <Image
                  src="/reference-assets/current-site/classes/classes-01-img_5889.jpeg"
                  alt="WOA private mixology class in action"
                  fill
                  priority
                  sizes="(max-width: 980px) 100vw, 48vw"
                  className={styles.cover}
                />
              </figure>
              <div className={styles.captionRow}>
                <span>Private classes</span>
                <span>Hands-on instruction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>What’s included</div>
              <div className={styles.subhead}>Everything needed for a polished hands-on class.</div>
            </div>
            <p className={styles.sectionCopy}>
              We keep the format intimate, premium and easy to host, with enough room for custom drinks, education and a little showmanship.
            </p>
          </div>
          <div className={styles.includeGrid}>
            {INCLUDES.map((item) => (
              <article key={item} className={styles.includeCard}>
                <span className={styles.includeMark} />
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>Designed for</div>
              <div className={styles.subhead}>The kind of gathering that should feel a little more personal.</div>
            </div>
          </div>
          <div className={styles.pillRow}>
            {IDEAL_FOR.map((item) => (
              <span key={item} className={styles.pill}>
                {item}
              </span>
            ))}
          </div>

          <div className={styles.photoGrid}>
            <figure className={styles.photoTall}>
              <Image
                src="/reference-assets/current-site/events/ink-cocktail-class/events-ink-cocktail-class-01-screen-shot-2024-03-16-at-11.53.53-am.png"
                alt="Cocktail class detail shot"
                fill
                sizes="(max-width: 980px) 100vw, 33vw"
                className={styles.cover}
              />
            </figure>
            <figure className={styles.photoTall}>
              <Image
                src="/reference-assets/current-site/events/ink-cocktail-class/events-ink-cocktail-class-02-screen-shot-2024-03-16-at-11.54.07-am.png"
                alt="Cocktail class with tools and garnish"
                fill
                sizes="(max-width: 980px) 100vw, 33vw"
                className={styles.cover}
              />
            </figure>
            <figure className={styles.photoTall}>
              <Image
                src="/reference-assets/current-site/events/ink-cocktail-class/events-ink-cocktail-class-03-screen-shot-2024-03-16-at-11.54.17-am.png"
                alt="Cocktail class setup"
                fill
                sizes="(max-width: 980px) 100vw, 33vw"
                className={styles.cover}
              />
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>How it works</div>
              <div className={styles.subhead}>Three steps, then we hand over the good part.</div>
            </div>
          </div>
          <div className={styles.stepGrid}>
            {STEPS.map((step) => (
              <article key={step.num} className={styles.stepCard}>
                <span className={styles.stepNum}>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.eyebrow}>FAQ</div>
              <div className={styles.subhead}>A few quick answers before you book.</div>
            </div>
          </div>
          <div className={styles.faqList}>
            {FAQ.map((item, index) => {
              const isOpen = open === index;
              return (
                <article key={item.q} className={styles.faqItem}>
                  <button type="button" className={styles.faqButton} onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen}>
                    <span>{item.q}</span>
                    <span className={styles.faqToggle}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? <p className={styles.faqAnswer}>{item.a}</p> : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.wrap}>
          <span className={styles.eyebrow}>Let’s host something hands-on</span>
          <h2 className={styles.ctaTitle}>
            Bring the class, <span className={styles.italic}>we&apos;ll bring</span> the pour.
          </h2>
          <p className={styles.ctaCopy}>
            Tell us about your date, guest count and venue. We&apos;ll shape a custom class format that feels polished from first shake to final toast.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={`${styles.button} ${styles.buttonSolid}`}>
              Start an inquiry <span>→</span>
            </Link>
            <Link href="/pricing" className={`${styles.button} ${styles.buttonGhost}`}>
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
