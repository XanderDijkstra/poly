// LogisticsMap renders an animated network of European polymer hubs on
// a stylised continent silhouette. All city nodes and coastline vertices
// are projected from real lat/lon onto the same viewBox using:
//   x = (lon + 10) * 10           (spans  -10 deg E .. 50 deg E)
//   y = (70  - lat) * 13.7        (spans  ~35 deg N .. 70 deg N)

interface Node {
  id: string;
  x: number;
  y: number;
  label?: string;
  size?: "lg" | "md" | "sm";
}

interface Flow {
  from: string;
  to: string;
  duration: number;
  delay?: number;
  curvature?: number;
}

const NODES: Node[] = [
  { id: "rotterdam", x: 145, y: 248, label: "Rotterdam", size: "lg" },
  { id: "antwerp", x: 144, y: 257, size: "md" },
  { id: "hamburg", x: 200, y: 225, label: "Hamburg", size: "lg" },
  { id: "lehavre", x: 101, y: 281, size: "sm" },
  { id: "felixstowe", x: 113, y: 247, size: "sm" },
  { id: "london", x: 99, y: 253, size: "sm" },
  { id: "marseille", x: 154, y: 366, label: "Marseille", size: "md" },
  { id: "tarragona", x: 113, y: 395, size: "sm" },
  { id: "genoa", x: 189, y: 351, size: "sm" },
  { id: "trieste", x: 238, y: 334, size: "sm" },
  { id: "gdansk", x: 287, y: 215, size: "sm" },
  { id: "istanbul", x: 390, y: 397, label: "Istanbul", size: "md" },
  { id: "mersin", x: 446, y: 455, size: "sm" },
  { id: "oslo", x: 208, y: 139, size: "sm" },
  { id: "stockholm", x: 281, y: 147, size: "sm" },
  { id: "madrid", x: 63, y: 405, size: "sm" },
];

const FLOWS: Flow[] = [
  { from: "rotterdam", to: "hamburg", duration: 6, delay: 0, curvature: 0.18 },
  { from: "felixstowe", to: "rotterdam", duration: 4.5, delay: 0.6, curvature: -0.25 },
  { from: "rotterdam", to: "marseille", duration: 9, delay: 1.2, curvature: 0.22 },
  { from: "antwerp", to: "tarragona", duration: 8, delay: 0.4, curvature: 0.3 },
  { from: "hamburg", to: "gdansk", duration: 5, delay: 1.8, curvature: 0.2 },
  { from: "trieste", to: "istanbul", duration: 7.5, delay: 0.9, curvature: 0.18 },
  { from: "tarragona", to: "genoa", duration: 6, delay: 2.2, curvature: -0.22 },
  { from: "marseille", to: "istanbul", duration: 10, delay: 0, curvature: 0.16 },
  { from: "rotterdam", to: "felixstowe", duration: 4.5, delay: 2.8, curvature: 0.25 },
  { from: "hamburg", to: "stockholm", duration: 6.5, delay: 1.5, curvature: -0.2 },
  { from: "lehavre", to: "madrid", duration: 8, delay: 0.7, curvature: 0.28 },
  { from: "genoa", to: "marseille", duration: 4, delay: 3.2, curvature: -0.2 },
];

const NODE_MAP = Object.fromEntries(NODES.map((n) => [n.id, n]));

function bezierPath(from: Node, to: Node, curvature = 0.2): string {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const offsetX = -dy * curvature;
  const offsetY = dx * curvature;
  return `M${from.x},${from.y} Q${mx + offsetX},${my + offsetY} ${to.x},${to.y}`;
}

// Continental Europe (Iberia → France → Low Countries → Baltic →
// down through Eastern Europe → Black Sea → Anatolia → Greek coast →
// up Adriatic east coast → down Italian east coast around the boot →
// up Italian west → S France → Iberia east coast → close).
const EUROPE_MAINLAND =
  "M 44,460 L 10,452 L 9,429 L 14,395 L 7,371 L 16,364 " +
  "L 71,366 L 94,345 L 89,327 L 55,296 L 84,279 L 119,261 " +
  "L 145,248 L 187,222 L 207,222 L 256,218 L 287,215 L 311,197 " +
  "L 341,180 L 348,145 L 403,138 L 425,205 L 415,260 L 440,310 " +
  "L 470,330 L 460,355 L 386,354 L 374,377 L 390,397 L 451,384 " +
  "L 510,395 L 540,400 L 540,440 L 470,455 L 446,455 L 407,453 " +
  "L 374,451 L 336,440 L 317,437 L 295,405 L 281,374 L 264,363 " +
  "L 252,354 L 238,334 L 223,337 L 235,362 L 269,396 L 285,412 " +
  "L 270,440 L 245,418 L 218,384 L 189,351 L 173,361 L 154,366 " +
  "L 132,377 L 121,392 L 113,395 L 96,420 L 78,455 Z";

// Great Britain (England + Wales + Scotland as one stylised shape).
const EUROPE_UK =
  "M 78,200 L 92,170 L 102,140 L 117,108 L 128,108 L 132,140 " +
  "L 121,170 L 132,200 L 138,220 L 132,240 L 122,254 L 105,260 " +
  "L 90,254 L 82,238 L 80,218 Z";

// Ireland.
const EUROPE_IRELAND =
  "M 32,232 L 50,224 L 62,232 L 60,252 L 50,260 L 36,256 L 28,244 Z";

// Scandinavia (Denmark / Sweden / Norway as a single peninsula).
const EUROPE_SCAND =
  "M 184,200 L 187,170 L 206,169 L 226,197 L 217,170 L 219,150 " +
  "L 207,139 L 158,151 L 153,131 L 161,104 L 204,90 L 244,40 " +
  "L 289,15 L 358,10 L 405,18 L 410,80 L 380,135 L 348,145 " +
  "L 305,148 L 281,170 L 245,195 L 215,200 Z";

// Finland (separate east of the Bothnian Gulf).
const EUROPE_FINLAND =
  "M 348,145 L 380,135 L 405,80 L 415,138 L 403,138 Z";

// Iceland (small, top-left corner, anchors the eye).
const EUROPE_ICELAND =
  "M 30,90 L 55,80 L 65,92 L 55,108 L 35,105 Z";

function nodeSize(size?: "lg" | "md" | "sm") {
  if (size === "lg") return { dot: 2.6, ringMax: 18, pulse: 3 };
  if (size === "md") return { dot: 2.1, ringMax: 14, pulse: 3.4 };
  return { dot: 1.6, ringMax: 10, pulse: 4 };
}

const LAND_PATHS = [
  EUROPE_MAINLAND,
  EUROPE_UK,
  EUROPE_IRELAND,
  EUROPE_SCAND,
  EUROPE_FINLAND,
  EUROPE_ICELAND,
];

export function LogisticsMap() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-primary/20 bg-primary shadow-[0_30px_60px_-30px_rgba(15,42,74,0.5)]"
      style={{ aspectRatio: "5 / 4" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 600 480"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="lm-dots"
            width="18"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.7" fill="rgba(226,232,240,0.07)" />
          </pattern>
          <radialGradient id="lm-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#0EA5E9" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lm-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F2A4A" />
            <stop offset="100%" stopColor="#0B1F37" />
          </linearGradient>
          <filter
            id="lm-particle-glow"
            x="-200%"
            y="-200%"
            width="500%"
            height="500%"
          >
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="lm-fade" cx="48%" cy="55%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="85%" stopColor="#FFFFFF" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <mask id="lm-mask" maskUnits="userSpaceOnUse">
            <rect width="600" height="480" fill="url(#lm-fade)" />
          </mask>
        </defs>

        <rect width="600" height="480" fill="url(#lm-bg)" />
        <rect width="600" height="480" fill="url(#lm-dots)" />

        <g opacity="0.55">
          <circle cx="200" cy="260" r="170" fill="url(#lm-glow)" />
          <circle cx="430" cy="380" r="120" fill="url(#lm-glow)" />
        </g>

        <g mask="url(#lm-mask)">
          <g
            fill="rgba(96,165,250,0.12)"
            stroke="rgba(148,197,255,0.45)"
            strokeWidth="0.7"
            strokeLinejoin="round"
          >
            {LAND_PATHS.map((d, i) => (
              <path key={`land-${i}`} d={d} />
            ))}
          </g>
          <g
            fill="none"
            stroke="rgba(148,197,255,0.20)"
            strokeWidth="0.4"
            strokeDasharray="1 2"
          >
            {LAND_PATHS.map((d, i) => (
              <path key={`outline-${i}`} d={d} />
            ))}
          </g>
        </g>

        <g
          stroke="rgba(226,232,240,0.18)"
          strokeWidth="0.6"
          strokeDasharray="2 3"
          fill="none"
        >
          {FLOWS.map((flow, i) => {
            const from = NODE_MAP[flow.from];
            const to = NODE_MAP[flow.to];
            return (
              <path
                key={`bg-${i}`}
                d={bezierPath(from, to, flow.curvature ?? 0.2)}
              />
            );
          })}
        </g>

        <g fill="none">
          {FLOWS.map((flow, i) => {
            const from = NODE_MAP[flow.from];
            const to = NODE_MAP[flow.to];
            const d = bezierPath(from, to, flow.curvature ?? 0.2);
            return (
              <path
                key={`active-${i}`}
                d={d}
                stroke="#0EA5E9"
                strokeOpacity="0.32"
                strokeWidth="1.1"
              />
            );
          })}
        </g>

        <g>
          {FLOWS.map((flow, i) => {
            const from = NODE_MAP[flow.from];
            const to = NODE_MAP[flow.to];
            const d = bezierPath(from, to, flow.curvature ?? 0.2);
            return (
              <g key={`particle-${i}`}>
                <circle r="2.2" fill="#67E8F9" filter="url(#lm-particle-glow)">
                  <animateMotion
                    dur={`${flow.duration}s`}
                    begin={`${flow.delay ?? 0}s`}
                    repeatCount="indefinite"
                    path={d}
                    rotate="auto"
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.1;0.9;1"
                    dur={`${flow.duration}s`}
                    begin={`${flow.delay ?? 0}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </g>

        <g>
          {NODES.map((n) => {
            const s = nodeSize(n.size);
            const beginOffset = (n.x + n.y) % 4;
            return (
              <g key={n.id} transform={`translate(${n.x},${n.y})`}>
                <circle
                  r={s.dot}
                  stroke="#0EA5E9"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.7"
                >
                  <animate
                    attributeName="r"
                    values={`${s.dot};${s.ringMax}`}
                    dur={`${s.pulse}s`}
                    begin={`${beginOffset}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.55;0"
                    dur={`${s.pulse}s`}
                    begin={`${beginOffset}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r={s.dot} fill="#FFFFFF" opacity="0.95">
                  <animate
                    attributeName="opacity"
                    values="0.95;0.55;0.95"
                    dur="3s"
                    begin={`${beginOffset}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                {n.label && (
                  <text
                    x={s.dot + 4}
                    y={2}
                    fontSize="7"
                    fontFamily="JetBrains Mono, ui-monospace, monospace"
                    fill="rgba(226,232,240,0.7)"
                    style={{ letterSpacing: "0.04em" }}
                  >
                    {n.label}
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-x-4 bottom-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-primary-foreground/60 font-mono">
        <span className="inline-flex items-center gap-2">
          <span className="relative inline-flex h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-70" />
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-success" />
          </span>
          Live polymer flow
        </span>
        <span className="hidden sm:inline">EU · UK · TR · MEAF</span>
      </div>
    </div>
  );
}
