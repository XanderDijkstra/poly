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
  { id: "rotterdam", x: 200, y: 218, label: "Rotterdam", size: "lg" },
  { id: "antwerp", x: 195, y: 238, size: "md" },
  { id: "hamburg", x: 258, y: 195, label: "Hamburg", size: "lg" },
  { id: "lehavre", x: 158, y: 258, size: "sm" },
  { id: "felixstowe", x: 168, y: 210, size: "sm" },
  { id: "london", x: 152, y: 215, size: "sm" },
  { id: "marseille", x: 218, y: 360, label: "Marseille", size: "md" },
  { id: "tarragona", x: 158, y: 388, size: "sm" },
  { id: "genoa", x: 250, y: 348, size: "sm" },
  { id: "trieste", x: 290, y: 322, size: "sm" },
  { id: "gdansk", x: 338, y: 198, size: "sm" },
  { id: "istanbul", x: 442, y: 360, label: "Istanbul", size: "md" },
  { id: "mersin", x: 498, y: 408, size: "sm" },
  { id: "oslo", x: 252, y: 130, size: "sm" },
  { id: "stockholm", x: 305, y: 145, size: "sm" },
  { id: "madrid", x: 100, y: 408, size: "sm" },
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

// Simplified Europe silhouette in viewBox 600x480, anchored so all
// city nodes (Rotterdam, Hamburg, Gdansk, Stockholm, Marseille, Genoa,
// Madrid, Istanbul, Mersin, etc.) sit on land.
const EUROPE_MAINLAND =
  "M 85,420 L 70,395 L 78,360 L 100,345 L 130,335 L 145,318 " +
  "L 150,295 L 132,280 L 150,268 L 178,252 L 205,212 L 240,188 " +
  "L 275,180 L 295,196 L 325,196 L 360,186 L 395,182 L 425,200 " +
  "L 450,232 L 462,268 L 478,300 L 470,328 L 458,352 L 478,366 " +
  "L 510,360 L 540,378 L 548,406 L 530,425 L 478,428 L 430,428 " +
  "L 380,425 L 340,425 L 312,418 L 305,432 L 290,420 L 278,395 " +
  "L 270,372 L 252,358 L 232,360 L 215,366 L 192,370 L 170,382 " +
  "L 148,398 L 122,418 Z";

// United Kingdom (Felixstowe and London nodes sit on this).
const EUROPE_UK =
  "M 132,202 L 152,192 L 172,200 L 178,218 L 175,238 L 160,250 " +
  "L 142,248 L 128,235 L 124,218 Z";

// Ireland.
const EUROPE_IRELAND =
  "M 92,222 L 108,215 L 122,222 L 124,238 L 110,245 L 95,238 Z";

// Scandinavia (Norway / Sweden / Finland — Oslo, Stockholm sit here).
const EUROPE_SCAND =
  "M 250,168 L 235,135 L 235,105 L 248,78 L 268,68 L 290,75 " +
  "L 318,90 L 352,108 L 388,125 L 400,150 L 385,168 L 352,172 " +
  "L 320,168 L 296,162 L 275,160 Z";

function nodeSize(size?: "lg" | "md" | "sm") {
  if (size === "lg") return { dot: 2.6, ringMax: 18, pulse: 3 };
  if (size === "md") return { dot: 2.1, ringMax: 14, pulse: 3.4 };
  return { dot: 1.6, ringMax: 10, pulse: 4 };
}

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
          <filter id="lm-particle-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="lm-fade" cx="48%" cy="55%" r="55%">
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

        <g mask="url(#lm-mask)">
          <g
            fill="rgba(96,165,250,0.10)"
            stroke="rgba(148,197,255,0.35)"
            strokeWidth="0.8"
            strokeLinejoin="round"
          >
            <path d={EUROPE_MAINLAND} />
            <path d={EUROPE_UK} />
            <path d={EUROPE_IRELAND} />
            <path d={EUROPE_SCAND} />
          </g>
          <g
            fill="none"
            stroke="rgba(148,197,255,0.18)"
            strokeWidth="0.4"
            strokeDasharray="1 2"
          >
            <path d={EUROPE_MAINLAND} />
            <path d={EUROPE_UK} />
            <path d={EUROPE_IRELAND} />
            <path d={EUROPE_SCAND} />
          </g>
        </g>

        <g opacity="0.6">
          <circle cx="200" cy="240" r="180" fill="url(#lm-glow)" />
          <circle cx="430" cy="360" r="120" fill="url(#lm-glow)" />
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
                <circle
                  r="2.2"
                  fill="#67E8F9"
                  filter="url(#lm-particle-glow)"
                >
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
