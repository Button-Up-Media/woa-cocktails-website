"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./home.module.css";

type GalleryFilter = "All" | "Weddings" | "Corporate" | "Rooftop" | "Brand" | "Cocktails";

const SERVICES = [
  {
    id: "svc-mobile-bar",
    n: "01",
    img: "/reference-assets/design-home/hero-pour.jpg",
    tag: "Flagship",
    title: ["Full-Service ", "Mobile Bar"],
    it: " Experience",
    desc:
      "Our signature experience. Luxury mobile bars, signature cocktails and a full hospitality team, curated end-to-end for weddings, private events and brand moments.",
    list: ["Luxury bar setup", "Signature cocktails", "Premium mixers & garnish", "Bartenders & hosts", "Setup & breakdown"],
    meta: "Most booked",
  },
  {
    id: "svc-staffing",
    n: "02",
    img: "/reference-assets/design-home/svc-team.jpg",
    tag: "Staffing",
    title: ["Bartending &", "Hospitality"],
    it: " Staffing",
    desc:
      "Experienced bartenders and hospitality professionals trained in elevated, guest-focused service for private, corporate and luxury events.",
    list: ["Bartenders", "Hosts & captains", "Barbacks", "Event leads"],
    meta: "By the event",
  },
  {
    id: "svc-classes",
    n: "03",
    img: "/reference-assets/design-home/svc-class.jpg",
    tag: "Experiences",
    title: ["Mixology"],
    it: " Classes",
    desc:
      "Interactive cocktail classes that combine entertainment, education and hospitality, led by professional mixologists and designed to feel hands-on and premium.",
    list: ["Team building", "Brand activations", "Private groups", "Off-sites"],
    meta: "1-60 guests",
  },
] as const;

const GALLERY_FILTERS: GalleryFilter[] = ["All", "Weddings", "Corporate", "Rooftop", "Brand", "Cocktails"];

const GALLERY_ITEMS = [
  { cat: "Cocktails", img: "/reference-assets/design-home/hero-coupe.jpg", cap: "Signature coupe · Brooklyn", span: "s-6-tall" },
  { cat: "Rooftop", img: "/reference-assets/design-home/gal-rooftop-shake.jpg", cap: "Rooftop · golden hour", span: "s-3-tall" },
  { cat: "Rooftop", img: "/reference-assets/design-home/gal-rooftop-pour.jpg", cap: "Service · summer party", span: "s-3-tall" },
  { cat: "Rooftop", img: "/reference-assets/design-home/gal-rooftop-team.jpg", cap: "WOA staff on rooftop", span: "s-4-sq" },
  { cat: "Cocktails", img: "/reference-assets/design-home/cocktail-pomegranate.jpg", cap: "Mezcal and pomegranate", span: "s-4-sq" },
  { cat: "Rooftop", img: "/reference-assets/design-home/gal-rooftop-bartender.jpg", cap: "Pour with the bridge backdrop", span: "s-4-tall" },
  { cat: "Brand", img: "/reference-assets/design-home/gal-cinco.jpg", cap: "Cinco de Mayo · pop-up", span: "s-7-wide" },
  { cat: "Corporate", img: "/reference-assets/design-home/svc-class.jpg", cap: "Cocktail class · NYC", span: "s-5-wide" },
  { cat: "Weddings", img: "/reference-assets/design-home/gal-ruby-rocks.jpg", cap: "Wedding signature · ruby and smoke", span: "s-4-sq" },
  { cat: "Rooftop", img: "/reference-assets/design-home/gal-rooftop-group.jpg", cap: "Hosts mid-service", span: "s-4-sq" },
  { cat: "Brand", img: "/reference-assets/design-home/founders-cheers.jpg", cap: "Guests with WOA coconut signature", span: "s-4-tall" },
] as const;

const TESTIMONIALS = [
  {
    body:
      "WOA didn’t just bartend our wedding. They curated the atmosphere. From the bar build to the final pour, every detail felt intentional.",
    who: "Camila & James",
    role: "Wedding · Brooklyn",
  },
  {
    body:
      "We’ve booked WOA for three corporate activations now. Their team is professional, polished, and treats every guest like the only guest.",
    who: "Lena Vasquez",
    role: "Head of Events · Press House",
  },
  {
    body:
      "The cocktail class was the highlight of our offsite. Genuinely warm, deeply skilled, and somehow effortless to host alongside.",
    who: "Marcus Reed",
    role: "VP People · Drift Studio",
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

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>("All");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const heroImage = "/reference-assets/design-home/hero-bridge.jpg";
  const aboutQuote =
    "What began during a pandemic, two friends making cocktails on camera, became a hospitality house. We believe every pour is a posture. Every gathering, a chance to make something feel intentional. Thank you for letting us host you.";

  return (
    <main className={styles.page}>
      <header className={styles.nav}>
        <Link href="/" className={`${styles.logo} ${scrolled ? styles.logoScrolled : ""}`} aria-label="WOA Cocktails home">
          <span className={styles.logoSeg}>
            <span className={styles.logoCap}>W</span>
            <span className={styles.logoTail}>ork</span>
          </span>
          <span className={styles.logoSep}>·</span>
          <span className={styles.logoSeg}>
            <span className={styles.logoCap}>O</span>
            <span className={styles.logoTail}>f</span>
          </span>
          <span className={styles.logoSep}>·</span>
          <span className={styles.logoSeg}>
            <span className={styles.logoCap}>A</span>
            <span className={styles.logoTail}>rt</span>
          </span>
          <span className={styles.logoDiamond} aria-hidden="true" />
        </Link>

        <nav className={styles.navLinks} aria-label="Primary">
          <div
            className={`${styles.servicesMenu} ${servicesOpen ? styles.servicesOpen : ""}`}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={styles.servicesTrigger}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services <span className={styles.chev} aria-hidden="true">▾</span>
            </button>
            <div className={styles.servicesPanel} role="menu">
              {[
                { label: "Mobile Bar Experience", href: "/mobile-bar", num: "01" },
                { label: "Bartending & Hospitality Staffing", href: "/staffing", num: "02" },
                { label: "Mixology Private Classes", href: "#services", num: "03" },
              ].map((item) => (
                <a key={item.label} href={item.href} role="menuitem" className={styles.servicesItem} onClick={() => setServicesOpen(false)}>
                  <span className={styles.servicesNum}>{item.num}</span>
                  <span className={styles.servicesLabel}>{item.label}</span>
                  <span className={styles.servicesArrow}>→</span>
                </a>
              ))}
            </div>
          </div>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className={styles.navRight}>
          <Link className={`${styles.button} ${styles.buttonSolid}`} href="/contact">
            Book Now <span className={styles.arr}>→</span>
          </Link>
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`} aria-hidden={!menuOpen}>
        <div className={styles.drawerInner}>
          <div className={styles.drawerGroup}>
            <div className={styles.drawerLabel}>Services</div>
            {[
              { label: "Mobile Bar Experience", href: "/mobile-bar", num: "01" },
              { label: "Bartending & Hospitality Staffing", href: "/staffing", num: "02" },
              { label: "Mixology Private Classes", href: "#services", num: "03" },
            ].map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className={styles.drawerSub}>
                <span className={styles.servicesNum}>{item.num}</span>
                {item.label}
              </a>
            ))}
          </div>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <a href="#founders" onClick={() => setMenuOpen(false)}>Founders</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className={styles.drawerFoot}>
            <Link className={`${styles.button} ${styles.buttonSolid}`} href="/contact">
              Book Now <span className={styles.arr}>→</span>
            </Link>
          </div>
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image className={styles.cover} src={heroImage} alt="WOA Cocktails luxury mobile bar service" fill priority sizes="100vw" />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroTop}>
            <span className={styles.eyebrow}>A hospitality and beverage house · Est. 2020</span>
            <span className={`${styles.eyebrow} ${styles.dim}`} style={{ textAlign: "right", lineHeight: 1.7 }}>
              New York · Tri-State
              <br />
              Miami · Downtown
            </span>
          </div>

          <div className={styles.heroBody}>
            <div>
              <span className={styles.heroRule} />
              <h1 className={`${styles.display} ${styles.heroTitle}`}>
                A work of <em>art</em>
                <br />
                in every pour.
              </h1>
              <div className={styles.heroCta}>
                <Link href="/contact" className={`${styles.button} ${styles.buttonSolid}`}>
                  Inquire for your event <span className={styles.arr}>→</span>
                </Link>
                <a href="#services" className={`${styles.button} ${styles.buttonGhost}`}>
                  Explore services
                </a>
              </div>
            </div>
            <aside className={styles.heroAside}>
              WOA is a full-service luxury hospitality and beverage house, crafting elevated mobile bar experiences, cocktail programs and curated activations for weddings, corporate events and brand moments across <b>New York</b> and <b>Miami</b>.
              <div className={styles.statRow}>
                <div className={styles.stat}>
                  <b>6yr</b>
                  <span>operating</span>
                </div>
                <div className={styles.stat}>
                  <b>500+</b>
                  <span>events curated</span>
                </div>
              </div>
            </aside>
          </div>

          <div className={styles.heroMeta}>
            <div className={styles.markets}>
              <span>
                <span className={styles.dotmark} />
                <b>NYC</b>&nbsp;·&nbsp;6 yrs operating
              </span>
              <span>
                <span className={styles.dotmark} />
                <b>Miami</b>&nbsp;·&nbsp;now booking
              </span>
            </div>
            <span>Featured · Weddings · Corporate · Brand Activations</span>
          </div>
        </div>
      </section>

      <section className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {[
            "Weddings",
            "★",
            "Luxury Private Events",
            "★",
            "Corporate Activations",
            "★",
            "Rooftop Soirées",
            "★",
            "Brand Pop-Ups",
            "★",
            "Mixology Classes",
            "★",
            "Hospitality Staffing",
          ]
            .flatMap((item) => [item, item])
            .map((item, index) =>
              item === "★" ? (
                <span key={`${item}-${index}`} className={styles.star} />
              ) : (
                <span key={`${item}-${index}`}>{item}</span>
              ),
            )}
        </div>
      </section>

      <section className={styles.belt} id="about">
        <div className={styles.wrap}>
          <div className={styles.beltGrid}>
            <figure className={styles.framed}>
              <Image className={styles.cover} src="/reference-assets/design-home/framed-founders.png" alt="WOA co-founders Fabio Perez and Hector Taveras behind their bar, in a gilded frame" fill priority sizes="(max-width: 980px) 90vw, 560px" />
            </figure>
            <div className={styles.beltText}>
              <span className={styles.eyebrow}>The House</span>
              <p className={styles.beltDisplay}>
                Hospitality is more than serving drinks. It’s <span className={styles.it}>atmosphere</span>, <span className={styles.it}>intention</span>, and the quiet choreography that turns an evening into something <span className={styles.it}>memorable</span>.
              </p>
              <p className={styles.beltCopy}>
                Founded in 2020 by hospitality professionals Fabio Perez and Hector Taveras, WOA, short for <em>Work of Art</em>, has grown from a pandemic-born cocktail studio in New York into a full beverage and hospitality house now serving Miami.
              </p>
              <div className={styles.stats}>
                <div className={styles.statCard}>
                  <b>6yr</b>
                  <span>NYC operations</span>
                </div>
                <div className={styles.statCard}>
                  <b>500+</b>
                  <span>events curated</span>
                </div>
                <div className={styles.statCard}>
                  <b>NYC · MIA</b>
                  <span>active markets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.ix}>[ 01 / Services ]</div>
              <div className={styles.eyebrow}>What we do</div>
            </div>
            <h2 className={`${styles.display} ${styles.sectionTitle}`}>
              Three services, <span className={styles.it}>one</span> standard.
            </h2>
          </div>
        </div>
        <div className={styles.wrapFull}>
          <div className={styles.svc}>
            {SERVICES.map((service) => (
              <article className={styles.svcCard} key={service.id} id={service.id}>
                <div className={styles.svcThumb}>
                  <Image className={styles.cover} src={service.img} alt={service.title.join("") + service.it} fill sizes="(max-width: 920px) 100vw, 33vw" />
                  <span className={styles.svcNum}>— {service.n}</span>
                  <span className={styles.svcTag}>{service.tag}</span>
                </div>
                <div className={styles.svcBody}>
                  <h3 className={styles.svcTitle}>
                    {service.title.map((part, index) => (
                      <span key={`${service.id}-${index}`}>{part}</span>
                    ))}
                    {service.it ? <span className={styles.it}>{service.it}</span> : null}
                  </h3>
                  <p className={styles.svcDesc}>{service.desc}</p>
                  <ul className={styles.svcList}>
                    {service.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className={styles.svcMeta}>
                    <span>{service.meta}</span>
                    {service.id === "svc-mobile-bar" ? (
                      <Link href="/mobile-bar" className={styles.arr}>
                        Learn more →
                      </Link>
                    ) : service.id === "svc-staffing" ? (
                      <Link href="/staffing" className={styles.arr}>
                        Learn more →
                      </Link>
                    ) : (
                      <span className={styles.arr}>Learn more →</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.miami}>
        <div className={styles.miamiImg}>
          <Image className={styles.cover} src="/reference-assets/design-home/miami-sunset.jpg" alt="WOA rooftop bar at sunset, Miami" fill sizes="(max-width: 980px) 100vw, 55vw" />
          <span className={styles.miamiStamp}>New · 2026 Expansion</span>
          <span className={styles.miamiCap}>[ rooftop · golden hour · WOA mobile bar ]</span>
        </div>
        <div className={styles.miamiBody}>
          <div className={styles.ix}>[ 02 / Expansion ]</div>
          <div className={styles.eyebrow}>From NYC to Miami</div>
          <h2 className={`${styles.display} ${styles.sectionTitle} ${styles.miamiTitle}`}>
            WOA is <span className={styles.it}>now in Miami.</span>
          </h2>
          <p className={styles.miamiCopy}>
            After six years of building hospitality experiences across New York, WOA Cocktails has officially expanded into Miami, bringing the same elevated service to rooftops, estates, hotels and brand activations from Brickell to Miami Beach.
          </p>
          <ul className={styles.checks}>
            <li>Luxury private events</li>
            <li>Weddings</li>
            <li>Rooftop events</li>
            <li>Corporate activations</li>
            <li>Mobile bar experiences</li>
            <li>Cocktail classes</li>
            <li>Beverage consulting</li>
            <li>Hospitality staffing</li>
            <li>Hotel partnerships</li>
            <li>Press and brand activations</li>
          </ul>
          <div className={styles.rowButtons}>
            <Link href="/contact" className={`${styles.button} ${styles.buttonSolid}`}>
              Book a Miami event <span className={styles.arr}>→</span>
            </Link>
            <Link href="/contact" className={`${styles.button} ${styles.buttonGhost}`}>
              Speak with Fabio
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.founders} id="founders">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.ix}>[ 03 / Founders ]</div>
              <div className={styles.eyebrow}>A note from the house</div>
            </div>
            <h2 className={`${styles.display} ${styles.sectionTitle}`}>
              Founded by friends. <span className={styles.it}>Built</span> on hospitality.
            </h2>
          </div>

          <div className={styles.foundersGrid}>
            <div className={styles.founderStack}>
              <figure className={`${styles.ph} ${styles.founderImg}`}>
                <Image className={styles.cover} src="/reference-assets/design-home/founder-hector.jpg" alt="Hector Taveras, co-founder of WOA Cocktails" fill sizes="(max-width: 980px) 45vw, 280px" />
              </figure>
              <figure className={`${styles.ph} ${styles.founderImg} ${styles.tall}`} style={{ transform: "translateY(48px)" }}>
                <Image className={styles.cover} src="/reference-assets/design-home/founder-fabio.jpg" alt="Fabio Perez, co-founder of WOA Cocktails" fill sizes="(max-width: 980px) 45vw, 280px" />
              </figure>
            </div>
            <div className={styles.foundersCopy}>
              <p className={styles.quote}>{aboutQuote}</p>
              <div className={styles.quoteSig}>
                <span className={styles.quoteLine} />
                <span>Fabio Perez & Hector Taveras · Co-founders</span>
              </div>
              <div className={styles.founderNotes}>
                <div>
                  <div className={`${styles.eyebrow} ${styles.dim}`}>Origin</div>
                  <p>
                    Founded 2020 in New York during the pandemic, born from cocktail tutorials on social and evolved into private deliveries before growing into a full hospitality brand.
                  </p>
                </div>
                <div>
                  <div className={`${styles.eyebrow} ${styles.dim}`}>Background</div>
                  <p>
                    Years of luxury hospitality, beverage operations, restaurant leadership and event execution channeled into one curated house.
                  </p>
                </div>
              </div>
              <div className={styles.founderLinkWrap}>
                <Link href="/about" className={styles.linkArrow}>
                  Read the full story →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallery} id="gallery">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.ix}>[ 04 / Gallery ]</div>
              <div className={styles.eyebrow}>Selected work</div>
            </div>
            <h2 className={`${styles.display} ${styles.sectionTitle}`}>
              Moments we’ve <span className={styles.it}>made.</span>
            </h2>
          </div>
          <div className={styles.catTabs}>
            {GALLERY_FILTERS.map((filter) => (
              <button key={filter} type="button" className={galleryFilter === filter ? styles.on : ""} onClick={() => setGalleryFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
          <div className={styles.galGrid}>
            {GALLERY_ITEMS.map((item) => {
              const dim = galleryFilter !== "All" && item.cat !== galleryFilter;
              return (
                <figure key={item.cap} className={`${styles.gal} ${styles[item.span]} ${dim ? styles.dimGallery : ""}`}>
                  <Image className={styles.cover} src={item.img} alt={item.cap} fill sizes="(max-width: 820px) 50vw, 20vw" />
                  <figcaption className={styles.galCap}>{item.cap}</figcaption>
                </figure>
              );
            })}
          </div>
          <div className={styles.centerButton}>
            <Link href="/contact" className={styles.button}>
              View full gallery <span className={styles.arr}>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.testi} id="testimonials">
        <div className={styles.wrap}>
          <div className={styles.sectionHead}>
            <div>
              <div className={styles.ix}>[ 05 / Praise ]</div>
              <div className={`${styles.eyebrow} ${styles.amber}`}>From our hosts</div>
            </div>
            <h2 className={`${styles.display} ${styles.sectionTitle}`}>
              Hospitality is felt, <span className={styles.it}>not announced.</span>
            </h2>
          </div>
          <div className={styles.testiGrid}>
            {TESTIMONIALS.map((testimonial) => (
              <article className={styles.testiCard} key={testimonial.who}>
                <div>
                  <div className={styles.stars}>★ ★ ★ ★ ★</div>
                  <div className={styles.testiBody}>&ldquo;{testimonial.body}&rdquo;</div>
                </div>
                <div className={styles.author}>
                  <b>{testimonial.who}</b>
                  {testimonial.role}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand} id="contact">
        <div className={styles.ctaBandBg}>
          <Image className={styles.cover} src="/reference-assets/design-home/cocktail-pomegranate.jpg" alt="" fill sizes="100vw" />
        </div>
        <div className={styles.wrap}>
          <div className={styles.eyebrow}>Inquire</div>
          <h2 className={`${styles.display} ${styles.ctaTitle}`}>
            Let’s host <span className={styles.it}>something</span>
            <br />
            unforgettable.
          </h2>
          <p className={styles.ctaCopy}>
            Tell us about your event, date, market and vision. We’ll send a tailored proposal within two business days.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={`${styles.button} ${styles.buttonSolid}`}>
              Begin an inquiry <span className={styles.arr}>→</span>
            </Link>
            <a href="tel:+19175550100" className={`${styles.button} ${styles.buttonGhost}`}>
              Call the house
            </a>
          </div>
          <div className={styles.contactGrid}>
            <ContactCol label="Email" value="hello@woacocktails.com" />
            <ContactCol label="NYC" value="+1 (917) 555-0100" />
            <ContactCol label="Miami" value="+1 (305) 555-0100" />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerBrand}>
                WOA<span className={styles.logoDiamond} />
              </div>
              <p>
                A luxury hospitality and beverage house. Mobile bar experiences, consulting and curated activations across New York and Miami.
              </p>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><Link href="/mobile-bar">Mobile Bar Experience</Link></li>
                <li><Link href="/staffing">Bartender Services</Link></li>
                <li><Link href="/pricing">Packages &amp; Pricing</Link></li>
                <li><a href="#services">Mixology Classes</a></li>
              </ul>
            </div>
            <div>
              <h4>House</h4>
              <ul>
                <li><a href="#about">About / Founders</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact / Book Now</a></li>
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
            <div className={styles.legal}>
              <a href="#contact">Privacy</a>
              <a href="#contact">Terms</a>
              <a href="#contact">Press</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ContactCol({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className={`${styles.eyebrow} ${styles.dim}`}>{label}</div>
      <div className={styles.contactValue}>{value}</div>
    </div>
  );
}
