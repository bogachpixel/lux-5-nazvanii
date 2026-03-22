import React from "react";

/* ─── Карточки — точно 3, как на скриншоте ─── */
const cards = [
  {
    number: "01",
    title: "Опирается на знания",
    description: "Работает на базе лучших книг по бизнесу, психологии и лидерству",
    icon: (
      /* Книга — открытые страницы */
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Идеи → действия",
    description: "Превращает мысли в конкретные, понятные шаги к результату",
    icon: (
      /* Лампочка */
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Глубоко и по сути",
    description: "Кратко, точно — каждый ответ направлен на реальный рост",
    icon: (
      /* Мишень — концентрические круги */
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
];

/* ─── Фоновый цвет страницы ─── */
const BG = "#ede5d4";
/* ─── Цвет карточки ─── */
const CARD_BG = "#f6f0e4";

export function DarkLuxe() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: ${BG}; }

        .root {
          font-family: 'Inter', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 36px;
          background:
            radial-gradient(ellipse 80% 60% at 10% 10%, rgba(210,185,120,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 70% 55% at 90% 90%, rgba(195,165,95,0.18) 0%, transparent 55%),
            ${BG};
        }

        /* ── Сетка 3 колонки ── */
        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 860px;
          width: 100%;
        }

        /* ── Карточка ── */
        .card {
          position: relative;
          border-radius: 16px;
          border: 1px solid rgba(185,155,90,0.22);
          background: ${CARD_BG};
          box-shadow:
            4px 4px 12px rgba(160,130,70,0.10),
            -2px -2px 8px rgba(255,255,255,0.72);
          padding: 22px 20px 0;
          display: flex;
          flex-direction: column;
          gap: 0;
          cursor: pointer;
          overflow: hidden;
          transition: transform 0.26s ease, box-shadow 0.26s ease, border-color 0.26s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: rgba(185,155,90,0.42);
          box-shadow:
            6px 8px 18px rgba(150,120,55,0.14),
            -2px -2px 8px rgba(255,255,255,0.8);
        }

        /* ── Номер ── */
        .num {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: rgba(170,135,60,0.52);
          line-height: 1;
          margin-bottom: 16px;
        }

        /* ── Строка: иконка + заголовок ── */
        .top-row {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 14px;
        }

        /* ── Neumorphism-иконка ── */
        .icon-box {
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 11px;
          background: ${CARD_BG};
          /* Neumorphism: выпуклый рельеф */
          box-shadow:
            4px 4px 9px rgba(150,120,55,0.18),
            -4px -4px 9px rgba(255,255,255,0.85),
            inset 1px 1px 2px rgba(255,255,255,0.6),
            inset -1px -1px 2px rgba(150,120,55,0.08);
          border: 1px solid rgba(185,155,90,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(155,118,48,0.82);
          transition: box-shadow 0.26s ease, color 0.26s ease;
        }

        .card:hover .icon-box {
          color: rgba(145,108,38,1);
          box-shadow:
            5px 5px 12px rgba(140,110,45,0.22),
            -4px -4px 9px rgba(255,255,255,0.9),
            inset 1px 1px 2px rgba(255,255,255,0.7),
            inset -1px -1px 2px rgba(140,110,45,0.1);
        }

        /* ── Заголовок ── */
        .title {
          color: rgba(50,36,12,0.88);
          font-size: 14.5px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: -0.015em;
        }

        /* ── Описание ── */
        .desc {
          color: rgba(80,60,22,0.52);
          font-size: 12.5px;
          font-weight: 400;
          line-height: 1.65;
          margin-bottom: 18px;
        }

        /* ── Тёмно-бежевая полоска снизу ── */
        .stripe {
          height: 3px;
          background: linear-gradient(
            to right,
            rgba(160,128,68,0.55) 0%,
            rgba(185,150,80,0.35) 40%,
            rgba(185,150,80,0.08) 100%
          );
          margin: 0 -0px;          /* на всю ширину карточки */
          border-radius: 0 0 16px 16px;
        }
      `}</style>

      <div className="root">
        <div className="grid">
          {cards.map((card) => (
            <div key={card.number} className="card">
              <span className="num">{card.number}</span>

              <div className="top-row">
                <div className="icon-box">{card.icon}</div>
                <h3 className="title">{card.title}</h3>
              </div>

              <p className="desc">{card.description}</p>

              {/* Тёмно-бежевая полосочка */}
              <div className="stripe" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
