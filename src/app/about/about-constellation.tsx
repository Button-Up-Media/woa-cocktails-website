"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./about.module.css";

type Card =
  | {
      id: string;
      kind: "photo";
      front: { img: string; pos: string; label: string };
      back: { eyebrow: string; title: string; body: string };
    }
  | {
      id: string;
      kind: "text";
      front: { lg: string; sm: string };
      back: { eyebrow: string; title: string; body: string };
    }
  | {
      id: string;
      kind: "art";
      front: { label: string };
      back: { eyebrow: string; title: string; body: string };
    };

const CARDS: Card[] = [
  {
    id: "fabio",
    kind: "photo",
    front: {
      img: "/reference-assets/design-about/founder-fabio.jpg",
      pos: "center 20%",
      label: "Co-Founder",
    },
    back: {
      eyebrow: "Co-Founder",
      title: "Fabio Perez.",
      body:
        "A hospitality professional with years in NYC luxury restaurants and beverage operations. Fabio leads guest experience, hospitality standards, and the WOA team philosophy: every pour is a posture.",
    },
  },
  {
    id: "hector",
    kind: "photo",
    front: {
      img: "/reference-assets/design-about/cocktail-work-of-art.jpg",
      pos: "center 35%",
      label: "Co-Founder",
    },
    back: {
      eyebrow: "Co-Founder",
      title: "Hector Taveras.",
      body:
        "A beverage director and event execution lead with deep experience in restaurant leadership. Hector drives menu architecture, cocktail development, and the craft side of every WOA experience.",
    },
  },
  {
    id: "founders",
    kind: "photo",
    front: {
      img: "/reference-assets/design-about/framed-founders.png",
      pos: "center 32%",
      label: "The Founders",
    },
    back: {
      eyebrow: "The Founders",
      title: "Fabio & Hector.",
      body:
        "Longtime friends and hospitality professionals who founded WOA in 2020 during the pandemic. What started as cocktail content on social became a full hospitality house now operating across New York and Miami.",
    },
  },
  {
    id: "nyc",
    kind: "photo",
    front: {
      img: "/reference-assets/design-about/city-nyc.jpg",
      pos: "center 45%",
      label: "Market 01",
    },
    back: {
      eyebrow: "Market 01",
      title: "The Big Apple.",
      body:
        "Born here. Built here. Six years of hospitality across Manhattan, Brooklyn, Queens, the Hamptons and the tri-state. WOA's roots, and still our home market.",
    },
  },
  {
    id: "miami",
    kind: "photo",
    front: {
      img: "/reference-assets/design-about/city-miami.jpeg",
      pos: "center 55%",
      label: "Market 02",
    },
    back: {
      eyebrow: "Market 02",
      title: "Dade County.",
      body:
        "Now serving Miami, Miami Beach, Brickell, Coral Gables, Bal Harbour and Fort Lauderdale. Rooftops, estates and brand activations, the same WOA standard in a new climate.",
    },
  },
  {
    id: "origin",
    kind: "text",
    front: { lg: "2020", sm: "Est." },
    back: {
      eyebrow: "The Origin",
      title: "Born in a pandemic.",
      body:
        "WOA started in 2020 when NYC's bars went dark. Two friends made cocktails on camera as a creative outlet. The community built itself. The brand followed.",
    },
  },
  {
    id: "events",
    kind: "text",
    front: { lg: "500+", sm: "Events curated" },
    back: {
      eyebrow: "Scale",
      title: "500+ events.",
      body:
        "Weddings, corporate activations, brand launches, rooftop parties, intimate dinners. Every one custom-built to the moment, never a template, never a copy.",
    },
  },
  {
    id: "drink",
    kind: "photo",
    front: {
      img: "/reference-assets/design-about/founder-hector.jpg",
      pos: "center 25%",
      label: "The Signature",
    },
    back: {
      eyebrow: "The Work",
      title: "A work of art.",
      body:
        "Every cocktail is built with care: fresh ingredients, balanced spec, named to the moment. The drinks are why people remember the night. We treat each one like a piece of art.",
    },
  },
  {
    id: "cart",
    kind: "art",
    front: { label: "The Mobile Bar" },
    back: {
      eyebrow: "The Cart",
      title: "Wheels & all.",
      body:
        "Our signature luxury mobile bar, wheeled into rooftops, gardens, estates and hotel ballrooms. The first thing your guests notice. The last thing they forget.",
    },
  },
];

const POSITIONS: Record<string, { x: string; y: string; r: number; dur: number }> =
  {
    fabio: { x: "6%", y: "5%", r: -4, dur: 22 },
    hector: { x: "72%", y: "7%", r: 3, dur: 26 },
    founders: { x: "40%", y: "18%", r: -2, dur: 24 },
    nyc: { x: "74%", y: "38%", r: 2, dur: 25 },
    miami: { x: "5%", y: "42%", r: -3, dur: 28 },
    origin: { x: "44%", y: "50%", r: 4, dur: 21 },
    events: { x: "74%", y: "65%", r: -2, dur: 23 },
    drink: { x: "18%", y: "66%", r: 3, dur: 27 },
    cart: { x: "46%", y: "75%", r: -3, dur: 25 },
  };

function CartArt() {
  return (
    <svg
      viewBox="0 0 240 180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="20" y1="160" x2="220" y2="160" />
      <path d="M 80 160 L 80 70 Q 80 65 85 65 L 155 65 Q 160 65 160 70 L 160 160" />
      <line x1="70" y1="65" x2="170" y2="65" />
      <circle cx="92" cy="170" r="7" />
      <circle cx="148" cy="170" r="7" />
      <path d="M 88 38 L 88 65 L 106 65 L 106 38 Q 106 34 102 34 L 92 34 Q 88 34 88 38 Z" />
      <line x1="88" y1="46" x2="106" y2="46" />
      <path d="M 122 44 Q 122 60 132 62 Q 142 60 142 44 Z" />
      <line x1="132" y1="62" x2="132" y2="65" />
      <rect x="110" y="100" width="40" height="28" />
      <path d="M 116 108 L 119 122 L 122 112 L 125 122 L 128 108" />
      <path d="M 132 114 L 136 118 L 140 114 L 136 110 Z" />
      <path d="M 144 122 L 147 108 L 150 122" />
    </svg>
  );
}

function FloatCard({
  card,
  isActive,
  onActivate,
  onClose,
  index,
}: {
  card: Card;
  isActive: boolean;
  onActivate: (id: string) => void;
  onClose: () => void;
  index: number;
}) {
  const pos = POSITIONS[card.id];
  const style = isActive
    ? undefined
    : ({
        left: pos.x,
        top: pos.y,
        "--rot": `${pos.r}deg`,
        "--dur": `${pos.dur}s`,
        "--delay": `${-index * 1.4}s`,
      } as React.CSSProperties);

  const renderFront = () => {
    if (card.kind === "photo") {
      return (
        <>
          <Image
            src={card.front.img}
            alt=""
            fill
            sizes="(max-width: 820px) 140px, 230px"
            style={{ objectPosition: card.front.pos }}
          />
          <span className={styles.label}>{card.front.label}</span>
        </>
      );
    }
    if (card.kind === "text") {
      return (
        <div className={styles.textCard}>
          <span className={styles.textLarge}>{card.front.lg}</span>
          <span className={styles.textSmall}>{card.front.sm}</span>
        </div>
      );
    }
    return (
      <div className={styles.artCard}>
        <CartArt />
        <span className={styles.artLabel}>{card.front.label}</span>
      </div>
    );
  };

  return (
    <button
      type="button"
      className={[
        styles.card,
        styles[card.kind],
        styles[card.id],
        isActive ? styles.active : "",
      ].join(" ")}
      style={style}
      onClick={(event) => {
        event.stopPropagation();
        if (isActive) {
          onClose();
        } else {
          onActivate(card.id);
        }
      }}
      aria-pressed={isActive}
      aria-label={`Card: ${card.back.title}`}
    >
      <span className={styles.inner}>
        <span className={`${styles.face} ${styles.front}`}>{renderFront()}</span>
        <span className={`${styles.face} ${styles.back}`}>
          <span className={styles.eyebrow}>{card.back.eyebrow}</span>
          <span className={styles.title}>{card.back.title}</span>
          <span className={styles.body}>{card.back.body}</span>
          <span className={styles.hintText}>tap to close ✕</span>
        </span>
      </span>
    </button>
  );
}

export default function AboutConstellation() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section
        className={`${styles.stage} ${active ? styles.stageActive : ""}`}
        onClick={() => setActive(null)}
        aria-label="Floating constellation of WOA story cards"
      >
        <div className={styles.stageInner}>
          {CARDS.map((card, index) => (
            <FloatCard
              key={card.id}
              card={card}
              index={index}
              isActive={active === card.id}
              onActivate={setActive}
              onClose={() => setActive(null)}
            />
          ))}
        </div>

        <span className={`${styles.hint} ${active ? styles.hintHidden : ""}`}>
          ↻ floating · tap any card
        </span>
      </section>

      <footer className={styles.footer}>
        The WOA story, founders, and markets presented as a floating constellation.
      </footer>
    </>
  );
}
