"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./site-header.module.css";

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </svg>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
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
            className={styles.servicesMenu}
            onMouseEnter={() => setServicesOpen(true)}
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
            <div className={`${styles.servicesPanel} ${servicesOpen ? styles.servicesOpen : ""}`} role="menu">
              {[
                { label: "Mobile Bar Experience", href: "/mobile-bar", num: "01" },
                { label: "Bartending & Hospitality Staffing", href: "/staffing", num: "02" },
                { label: "Mixology Private Classes", href: "/classes", num: "03" },
              ].map((item) => (
                <Link key={item.label} href={item.href} role="menuitem" className={styles.servicesItem} onClick={() => setServicesOpen(false)}>
                  <span className={styles.servicesNum}>{item.num}</span>
                  <span className={styles.servicesLabel}>{item.label}</span>
                  <span className={styles.servicesArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about">About</Link>
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
              { label: "Mixology Private Classes", href: "/classes", num: "03" },
            ].map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className={styles.drawerSub}>
                <span className={styles.servicesNum}>{item.num}</span>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
          <div className={styles.drawerFoot}>
            <Link className={`${styles.button} ${styles.buttonSolid}`} href="/contact" onClick={() => setMenuOpen(false)}>
              Book Now <span className={styles.arr}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
