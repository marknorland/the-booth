import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'

// The Booth — a tribute to Jensen Huang.
// Light mode is the diner where it began: cream counter, black coffee, ketchup red.
// Dark mode is where it went: a datacenter at 3 a.m., silicon green on near-black.
// One green thread runs through both.

const { theme, problems } = makeColors({
  label: 'The Booth',
  roles: {
    accent: '#4f9a2a', // silicon green — the thread from booth to datacenter
    danger: '#c0392b', // ketchup bottle
    success: '#2e8b6a', // a cooler green, so it stays apart from accent
    warning: '#b8741a', // coffee, refilled
    pro: '#7a5aa6', // neon "OPEN" sign
  },
  light: {
    gray: {
      anchors: {
        'surface-0': '#ece3d4',
        'surface-1': '#f3ebde',
        'surface-2': '#faf6ef',
        'text-primary': '#221a14',
        'text-secondary': '#4b3e33',
        'text-muted': '#65574a',
      },
    },
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#0b0f0c',
        'surface-1': '#111712',
        'surface-2': '#161e17',
        'surface-3': '#1b241c',
        'text-primary': '#e7eee5',
        'text-secondary': '#bac8b7',
        'text-muted': '#94a391',
      },
    },
  },
})

// A night window: a coffee cup at the left whose steam becomes circuit traces,
// running up to a grid of lights at the top right. Original art, no marks.
const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<style>
.st{fill:#cfe6c2;animation:tw 6s ease-in-out infinite}
.s2{animation-delay:2s}.s3{animation-delay:4s}
@keyframes tw{0%,100%{opacity:.15}50%{opacity:.7}}
.steam{fill:none;stroke:#e9dcc6;stroke-width:3;stroke-linecap:round;opacity:.45;stroke-dasharray:14 22;animation:rise 7s linear infinite}
@keyframes rise{to{stroke-dashoffset:-360}}
.trace{fill:none;stroke:#5fae36;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;opacity:.55;stroke-dasharray:6 18;animation:flow 5s linear infinite}
@keyframes flow{to{stroke-dashoffset:-240}}
.core{fill:#5fae36;animation:blink 3.2s ease-in-out infinite}
@keyframes blink{0%,100%{opacity:.12}40%{opacity:.85}}
.d1{animation-delay:.4s}.d2{animation-delay:.9s}.d3{animation-delay:1.5s}.d4{animation-delay:2.1s}.d5{animation-delay:2.7s}
</style>
<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070a08"/><stop offset="1" stop-color="#121a14"/></linearGradient>
<radialGradient id="lamp" cx=".12" cy=".7" r=".45"><stop offset="0" stop-color="#b8741a" stop-opacity=".28"/><stop offset="1" stop-color="#b8741a" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1600" height="1000" fill="url(#sky)"/>
<rect width="1600" height="1000" fill="url(#lamp)"/>
<g>
<circle class="st" cx="420" cy="120" r="1.6"/><circle class="st s2" cx="700" cy="70" r="1.2"/>
<circle class="st s3" cx="900" cy="180" r="1.4"/><circle class="st" cx="1050" cy="90" r="1.1"/>
<circle class="st s2" cx="260" cy="260" r="1.3"/><circle class="st s3" cx="610" cy="300" r="1"/>
<circle class="st" cx="800" cy="420" r="1.2"/><circle class="st s2" cx="1180" cy="520" r="1.1"/>
</g>
<svg x="0" y="0" width="1600" height="1000" viewBox="0 0 600 1000" preserveAspectRatio="xMinYMid meet">
<rect x="0" y="760" width="600" height="14" fill="#3a1f1a" opacity=".9"/>
<path d="M90 690 h150 l-14 90 h-122 z" fill="#efe6d6" opacity=".9"/>
<path d="M240 710 q42 6 30 40 q-8 18 -38 18" fill="none" stroke="#efe6d6" stroke-width="10" opacity=".9"/>
<ellipse cx="165" cy="690" rx="75" ry="10" fill="#2a1a10"/>
<path class="steam" d="M140 670 C120 610 175 580 150 520 S180 430 200 380 L200 300 L320 300 L320 190 L480 190 L480 80 L600 80"/>
<path class="steam" style="animation-delay:-3s" d="M185 668 C205 610 160 570 190 515 S165 440 230 400 L360 400 L360 260 L600 260"/>
</svg>
<svg x="0" y="0" width="1600" height="1000" viewBox="0 0 640 420" preserveAspectRatio="xMaxYMin meet">
<path class="trace" d="M0 80 L180 80 L180 150 L300 150"/>
<path class="trace" style="animation-delay:-2s" d="M0 260 L120 260 L120 210 L300 210"/>
<g transform="translate(320 60)">
<rect x="-14" y="-14" width="300" height="230" rx="10" fill="none" stroke="#5fae36" stroke-opacity=".35" stroke-width="2"/>
<rect class="core" x="0" y="0" width="40" height="40" rx="4"/><rect class="core d1" x="56" y="0" width="40" height="40" rx="4"/><rect class="core d2" x="112" y="0" width="40" height="40" rx="4"/><rect class="core d3" x="168" y="0" width="40" height="40" rx="4"/><rect class="core d4" x="224" y="0" width="40" height="40" rx="4"/>
<rect class="core d2" x="0" y="56" width="40" height="40" rx="4"/><rect class="core d4" x="56" y="56" width="40" height="40" rx="4"/><rect class="core" x="112" y="56" width="40" height="40" rx="4"/><rect class="core d5" x="168" y="56" width="40" height="40" rx="4"/><rect class="core d1" x="224" y="56" width="40" height="40" rx="4"/>
<rect class="core d3" x="0" y="112" width="40" height="40" rx="4"/><rect class="core d5" x="56" y="112" width="40" height="40" rx="4"/><rect class="core d1" x="112" y="112" width="40" height="40" rx="4"/><rect class="core d2" x="168" y="112" width="40" height="40" rx="4"/><rect class="core" x="224" y="112" width="40" height="40" rx="4"/>
<rect class="core d4" x="0" y="168" width="40" height="40" rx="4"/><rect class="core d1" x="56" y="168" width="40" height="40" rx="4"/><rect class="core d3" x="112" y="168" width="40" height="40" rx="4"/><rect class="core" x="168" y="168" width="40" height="40" rx="4"/><rect class="core d5" x="224" y="168" width="40" height="40" rx="4"/>
</g>
</svg>
</svg>`

const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: 'the-booth', glass: { blur: 18, opacity: 0.72 } },
}

// The road, one stop per turn. Kept to what is on the public record.
const JOURNEY: readonly string[] = [
  '1963 · Born in Tainan, Taiwan.',
  '1973 · Age 9, sent to rural Kentucky. At boarding school, his chore was cleaning the bathrooms.',
  "Age 15 · Denny's, Portland, Oregon: dishwasher, then busboy, then waiter. He calls it his first lesson in work.",
  '1984 · Electrical engineering degree, Oregon State.',
  '1984–93 · Chip designer at AMD, then LSI Logic.',
  "1993 · A Denny's booth in San Jose, with Chris Malachowsky and Curtis Priem. A company begins.",
  '1997 · After a first chip misfired, they were close to running out of money. RIVA 128 kept the lights on.',
  '1999 · GeForce 256, the chip that made "GPU" a word.',
  '2006 · CUDA: a bet that graphics chips could do any math. For years, almost nobody cared.',
  '2012 · AlexNet trains on two gaming GPUs. Deep learning arrives.',
  '2016 · He delivers the first DGX-1 to a small AI lab himself.',
  "2023 · Denny's puts a plaque on the booth where it started.",
  "Today · Much of modern AI, Claude's world included, runs on the road that started in that booth.",
  '"I wish upon you ample doses of pain and suffering." Stanford, 2024. Character, he said, comes from what you get through.',
]

const shortLine = (i: number) => `☕ ${JOURNEY[i % JOURNEY.length]}`

export const register: Register = on => {
  let stop = 0

  on('session.start', async ($, e, next) => {
    await $.command.register({
      name: 'jensen',
      description: "The road from a Denny's booth to the engine room of AI",
    })

    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))
    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }

    const set = await $.theme.set(LOOK)
    stop = 0
    $.ui.status(set.isDrawn ? shortLine(stop) : `☕ The booth is open. Type /jensen for the road.`)

    return next(e)
  })

  // Each finished turn walks one stop down the road.
  on('turn.complete', async ($, e, next) => {
    stop += 1
    $.ui.status(shortLine(stop))

    return next(e)
  })

  on('command.run', { command: 'jensen' }, async () => {
    const here = stop % JOURNEY.length
    const lines = JOURNEY.map((line, i) => `${i === here ? '▶' : ' '} ${line}`)

    return {
      text: [
        "THE BOOTH — from a Denny's booth to the engine room of AI",
        '',
        ...lines,
        '',
        'From the dish pit to the datacenter, he kept doing the work in front of him.',
        'Thank you, Jensen. Hope you are well.',
      ].join('\n'),
    }
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return (
      <Svg
        source={SCENE}
        alt="A coffee cup in a night diner window; its steam turns into circuit traces running to a grid of glowing chip cores"
        isInteractive
      />
    )
  })
}
