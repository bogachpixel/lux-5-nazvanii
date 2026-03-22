import React from "react";

const tags = [
  "МЫШЛЕНИЕ",
  "БИЗНЕС",
  "MLM",
  "ПСИХОЛОГИЯ",
  "ЛИДЕРСТВО",
  "ПРОДАЖИ",
  "РОСТ",
];

const BG = "#ede5d4";

export function TagBar() {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${BG}; }

        .root {
          font-family: 'Montserrat', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 40px;
          background:
            radial-gradient(ellipse 80% 60% at 10% 20%, rgba(210,185,120,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 70% 55% at 88% 85%, rgba(195,165,90,0.16) 0%, transparent 55%),
            ${BG};
        }

        .tags-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        /* ── Тег — neumorphism + glassmorphism ── */
        .tag {
          padding: 9px 20px;
          border-radius: 40px;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          cursor: pointer;
          user-select: none;
          outline: none;
          border: 1px solid rgba(200,170,100,0.22);

          /* Glassmorphism */
          background: rgba(245,235,210,0.45);
          backdrop-filter: blur(14px) saturate(150%);
          -webkit-backdrop-filter: blur(14px) saturate(150%);

          /* Neumorphism */
          box-shadow:
            4px 4px 10px rgba(145,115,50,0.16),
            -3px -3px 9px rgba(255,255,255,0.82),
            inset 0 1px 0 rgba(255,255,255,0.55);

          color: rgba(110,82,28,0.65);
          transition: all 0.22s ease;
        }

        /* Hover */
        .tag:not(.active):hover {
          color: rgba(105,76,22,0.9);
          border-color: rgba(190,158,82,0.38);
          background: rgba(245,235,210,0.62);
          transform: translateY(-1px);
          box-shadow:
            5px 6px 13px rgba(140,110,45,0.18),
            -3px -3px 10px rgba(255,255,255,0.88),
            inset 0 1px 0 rgba(255,255,255,0.6);
        }

        /* Active — вдавленный */
        .tag.active {
          color: rgba(115,84,18,0.95);
          border-color: rgba(185,150,72,0.40);
          background: rgba(230,210,160,0.55);
          backdrop-filter: blur(16px) saturate(170%);
          -webkit-backdrop-filter: blur(16px) saturate(170%);
          box-shadow:
            inset 3px 3px 7px rgba(135,105,40,0.20),
            inset -2px -2px 6px rgba(255,255,255,0.68),
            0 0 0 1px rgba(185,150,72,0.20);
          transform: translateY(0);
        }
      `}</style>

      <div className="root">
        <div className="tags-row">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`tag${active === tag ? " active" : ""}`}
              onClick={() => setActive(active === tag ? null : tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
