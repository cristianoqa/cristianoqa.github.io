import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

const catalog = [
  { id: "granada-dia", name: "Granada día", vibe: "Bar de barrio a pleno sol", for: "Bares y cervecerías" },
  { id: "lezzet-mesa", name: "Lezzet mesa", vibe: "Mesa larga y carta serif", for: "Restaurantes" },
  { id: "mare-azul", name: "Mar azul", vibe: "Franja marina y precios mono", for: "Pescadería / marisquería" },
  { id: "hornada", name: "Hornada", vibe: "Harina, cacao y mañana", for: "Panadería / pastelería" },
  { id: "corte-rojo", name: "Corte rojo", vibe: "Sello de carnicería brutal", for: "Carnicería / charcutería" },
  { id: "filo-negro", name: "Filo negro", vibe: "Contraste y tipografía vertical", for: "Barbería / salón" },
  { id: "ramo-verde", name: "Ramo verde", vibe: "Fotos solapadas y aire", for: "Floristería" },
  { id: "pista-negra", name: "Pista negra", vibe: "Diagonales y energía", for: "Gimnasio / deporte" },
  { id: "tomo-papel", name: "Tomo papel", vibe: "Revista moderna, no periódico", for: "Librería / café lectura" },
  { id: "noche-lima", name: "Noche lima", vibe: "Oscuro, un solo acento", for: "Cócteles / local nocturno" },
  { id: "plaza-viva", name: "Plaza viva", vibe: "Baldosas y ofertas", for: "Mercado / frutería" },
  { id: "calma-azul", name: "Calma azul", vibe: "Clínica limpia y clara", for: "Clínica / farmacia" },
  { id: "fuego-cartel", name: "Fuego cartel", vibe: "Cartel grueso de calle", for: "Pizza / comida rápida" },
  { id: "cueva-oro", name: "Cueva oro", vibe: "Ceremonia centrada", for: "Vinoteca / gourmet" },
  { id: "taller-plano", name: "Taller plano", vibe: "Cuadrícula de plano técnico", for: "Taller / reparaciones" },
];

writeFileSync(join(root, "catalog.json"), JSON.stringify(catalog, null, 2));

const foot = `<footer class="site-foot"><p><span data-bind="shop.name"></span> · <span data-bind="shop.city"></span></p><p>© <span data-year></span> · Plantilla Flow Home Apps</p></footer>
<script type="module" src="../motor.js"></script>
</body></html>`;

function page(id, fonts, css, body) {
  const meta = catalog.find((c) => c.id === id);
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex,nofollow" />
<title>${meta.name} — Plantilla Flow Home</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="${fonts}" rel="stylesheet" />
<style>
*,*::before,*::after{box-sizing:border-box}html{scroll-behavior:smooth}
img{max-width:100%;display:block;height:auto}a{color:inherit}
.demo{margin:0;padding:.55rem 1rem;text-align:center;font-size:.82rem;font-weight:600}
.hours-row{display:flex;justify-content:space-between;gap:1rem;padding:.55rem 0;border-bottom:1px solid color-mix(in srgb, currentColor 14%, transparent)}
.menu-item{display:flex;justify-content:space-between;gap:1rem;align-items:flex-start}
.menu-item h3{margin:0 0 .25rem;font-size:1.05rem}.menu-item p{margin:0;opacity:.8;font-size:.92rem}
.menu-item__price{font-weight:700;white-space:nowrap}
.site-foot{padding:2rem 1.25rem;font-size:.85rem;opacity:.75}
.wrap{width:min(1100px,100% - 2rem);margin-inline:auto}
.btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:.7rem 1.2rem;font-weight:700;text-decoration:none}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
${css}
</style>
</head>
<body>
<p class="demo">Plantilla demo · Flow Home Apps · Contenido de ejemplo para el panel</p>
${body}
${foot}`;
  mkdirSync(join(root, id), { recursive: true });
  writeFileSync(join(root, id, "index.html"), html);
}

page(
  "granada-dia",
  "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Figtree:wght@400;600;700&display=swap",
  `:root{--ink:#0f1410;--foam:#f7f4ea;--hop:#2f6b3a;--amber:#d4a017}
body{margin:0;font-family:Figtree,sans-serif;background:var(--foam);color:#2b302c}
.demo{background:var(--amber);color:var(--ink)}
.hero{min-height:78vh;display:grid;align-content:end;padding:2rem 0 3rem;background:linear-gradient(180deg,rgba(15,20,16,.2),rgba(15,20,16,.78)),radial-gradient(circle at 80% 10%,#5f8f4a,transparent 42%),var(--ink);color:#fff}
.hero h1{font-family:"Archivo Black",sans-serif;font-size:clamp(3rem,12vw,6.5rem);line-height:.9;margin:.4rem 0;text-transform:uppercase}
.hero .cat{letter-spacing:.18em;text-transform:uppercase;font-size:.75rem;color:#f0d070}
.cta{display:flex;flex-wrap:wrap;gap:.7rem;margin-top:1.4rem}
.btn-a{background:var(--amber);color:var(--ink)}.btn-b{border:2px solid #fff;color:#fff}
.band{padding:3rem 0}.band h2{font-family:"Archivo Black",sans-serif;font-size:2rem;margin:0 0 1rem}
.two{display:grid;gap:2rem}@media(min-width:800px){.two{grid-template-columns:1fr 1fr}}
.panel{background:#fff;border:1px solid rgba(15,20,16,.12);border-radius:16px;padding:1.25rem}`,
  `<header class="hero"><div class="wrap">
<p class="cat"><span data-bind="shop.category"></span> · <span data-bind="shop.city"></span></p>
<h1 data-bind="shop.name"></h1>
<p data-bind="shop.tagline"></p>
<div class="cta">
<a class="btn btn-a" data-bind-href="telHref">Llamar · <span data-bind="shop.phoneDisplay"></span></a>
<a class="btn btn-b" href="#carta">Ver productos</a>
</div></div></header>
<section class="band"><div class="wrap two">
<div><h2>Quiénes somos</h2><p data-bind="shop.story"></p></div>
<div class="panel" data-hours></div>
</div></section>
<section class="band" id="carta" style="background:#ece7d6"><div class="wrap">
<h2>Lo de hoy</h2><div data-menu style="display:grid;gap:1rem"></div>
<p style="margin-top:1.5rem"><a class="btn btn-a" data-bind-href="waHref">WhatsApp</a></p>
</div></section>`
);

page(
  "lezzet-mesa",
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Source+Sans+3:wght@400;600;700&display=swap",
  `:root{--brand:#9f1239;--ink:#1c1917;--soft:#fafaf9;--gold:#b45309}
body{margin:0;font-family:"Source Sans 3",sans-serif;background:var(--soft);color:var(--ink)}
.demo{background:var(--brand);color:#fff}
.top{display:flex;justify-content:space-between;align-items:center;padding:1rem 0}
.brand{font-family:"Cormorant Garamond",serif;font-size:1.6rem;font-weight:700;color:var(--brand)}
.split{display:grid;gap:0;min-height:70vh}@media(min-width:900px){.split{grid-template-columns:1.05fr .95fr}}
.visual{background:linear-gradient(145deg,#7f1d1d,#b91c1c 45%,#f59e0b);min-height:280px;position:relative}
.visual::after{content:"MESA";position:absolute;right:8%;bottom:8%;font-family:"Cormorant Garamond",serif;font-size:clamp(3rem,10vw,6rem);color:rgba(255,255,255,.2);line-height:1}
.copy{padding:2.5rem 1.25rem;display:grid;align-content:center;max-width:34rem}
.copy h1{font-family:"Cormorant Garamond",serif;font-size:clamp(2.8rem,7vw,4.5rem);line-height:.95;margin:0 0 .8rem;color:var(--brand)}
.btn-a{background:var(--brand);color:#fff;border-radius:999px}.btn-b{border:1.5px solid var(--ink);border-radius:999px}
.section{padding:3rem 0}.menu-item{padding:1rem 0;border-bottom:1px solid rgba(28,25,23,.12)}.menu-item__price{color:var(--gold)}`,
  `<div class="wrap top"><div class="brand" data-bind="shop.name"></div><a class="btn btn-b" data-bind-href="telHref">Reservar / llamar</a></div>
<section class="split"><div class="visual" aria-hidden="true"></div>
<div class="copy">
<p style="text-transform:uppercase;letter-spacing:.16em;font-size:.75rem;color:var(--gold)" data-bind="shop.category"></p>
<h1 data-bind="shop.tagline"></h1>
<p data-bind="shop.story"></p>
<div style="display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.2rem">
<a class="btn btn-a" data-bind-href="waHref">WhatsApp</a>
<a class="btn btn-b" href="#carta">Carta</a>
</div></div></section>
<section class="section" id="carta"><div class="wrap">
<h2 style="font-family:Cormorant Garamond,serif;font-size:2.4rem;margin:0">Carta breve</h2>
<div data-menu></div><div style="margin-top:1.5rem" data-hours></div>
</div></section>`
);

page(
  "mare-azul",
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&family=IBM+Plex+Sans:wght@400;600;700&display=swap",
  `:root{--sea:#073b4c;--foam:#f4f8fb;--accent:#118ab2}
body{margin:0;font-family:"IBM Plex Sans",sans-serif;background:var(--foam);color:var(--sea)}
.demo{background:var(--sea);color:#fff}
.stripe{background:var(--sea);color:#fff;padding:4rem 0 3rem}
.stripe h1{font-size:clamp(2.4rem,6vw,4rem);margin:0;letter-spacing:-.03em}
.meta{font-family:"IBM Plex Mono",monospace;font-size:.85rem;opacity:.85;margin-top:.8rem}
.btn-a{background:#fff;color:var(--sea)}.btn-b{border:1px solid #fff;color:#fff}
.section{padding:2.5rem 0;border-bottom:8px solid var(--sea)}
.menu-item__price{font-family:"IBM Plex Mono",monospace;color:var(--accent)}
h2{margin:0 0 1rem;font-size:1rem;letter-spacing:.2em;text-transform:uppercase}`,
  `<section class="stripe"><div class="wrap">
<p class="meta"><span data-bind="shop.category"></span> / <span data-bind="shop.city"></span></p>
<h1 data-bind="shop.name"></h1>
<p style="max-width:36rem;font-size:1.15rem" data-bind="shop.tagline"></p>
<div style="display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.4rem">
<a class="btn btn-a" data-bind-href="telHref">Llamar</a>
<a class="btn btn-b" data-bind-href="waHref">WhatsApp</a>
</div></div></section>
<section class="section"><div class="wrap"><h2>Horario</h2><div data-hours></div></div></section>
<section class="section" id="carta"><div class="wrap"><h2>Mostrador</h2><div data-menu style="display:grid;gap:1.2rem"></div></div></section>
<section class="section"><div class="wrap"><p data-bind="shop.story"></p><p data-bind="shop.address"></p></div></section>`
);

page(
  "hornada",
  "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Nunito:wght@400;600;700&display=swap",
  `:root{--flour:#fff8f1;--cocoa:#4a2c1a;--cherry:#9b1d3a;--crumb:#efe0d0}
body{margin:0;font-family:Nunito,sans-serif;background:var(--flour);color:var(--cocoa)}
.demo{background:var(--cocoa);color:var(--flour)}
.hero{padding:3.5rem 0 2rem;text-align:center}
.hero h1{font-family:Fraunces,serif;font-size:clamp(2.8rem,8vw,4.8rem);margin:0;line-height:1}
.pill{display:inline-block;margin-top:1rem;padding:.35rem .9rem;border-radius:999px;background:var(--crumb);font-weight:700;font-size:.85rem}
.btn-a{background:var(--cherry);color:#fff;border-radius:999px}.btn-b{border:2px solid var(--cocoa);border-radius:999px}
.tray{background:var(--crumb);border-radius:28px;padding:1.5rem}
.menu-item{background:#fff;border-radius:18px;padding:1rem;margin-bottom:.8rem}
.grid{display:grid;gap:1rem;padding-bottom:3rem}@media(min-width:800px){.grid{grid-template-columns:1.2fr .8fr}}`,
  `<header class="hero"><div class="wrap">
<p class="pill" data-bind="shop.category"></p>
<h1 data-bind="shop.name"></h1>
<p style="max-width:28rem;margin:1rem auto 0;font-size:1.15rem" data-bind="shop.tagline"></p>
<div style="display:flex;justify-content:center;gap:.7rem;flex-wrap:wrap;margin-top:1.4rem">
<a class="btn btn-a" data-bind-href="waHref">Pedir por WhatsApp</a>
<a class="btn btn-b" data-bind-href="telHref">Llamar</a>
</div></div></header>
<section class="wrap grid">
<div class="tray"><h2 style="font-family:Fraunces,serif;margin-top:0">Hoy en mostrador</h2><div data-menu></div></div>
<div class="tray"><h2 style="font-family:Fraunces,serif;margin-top:0">Horario</h2><div data-hours></div><p style="margin-top:1rem" data-bind="shop.story"></p></div>
</section>`
);

page(
  "corte-rojo",
  "https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;600;700&display=swap",
  `:root{--ink:#111;--paper:#f2efe8;--blood:#c1121f}
body{margin:0;font-family:Manrope,sans-serif;background:var(--paper);color:var(--ink)}
.demo{background:var(--blood);color:#fff}
.frame{border:4px solid var(--ink);margin:1rem;padding:1.25rem}
.stamp{display:inline-block;border:3px solid var(--blood);color:var(--blood);padding:.35rem .7rem;font-family:Anton,sans-serif;letter-spacing:.08em;text-transform:uppercase;transform:rotate(-2deg)}
h1{font-family:Anton,sans-serif;font-size:clamp(3rem,11vw,6rem);line-height:.9;margin:.6rem 0;text-transform:uppercase}
.btn-a{background:var(--blood);color:#fff;text-transform:uppercase}.btn-b{border:3px solid var(--ink);text-transform:uppercase}
.price-board{background:var(--ink);color:var(--paper);padding:1.25rem}
.menu-item{border-bottom:2px dashed rgba(242,239,232,.35);padding:.9rem 0}
.menu-item__price{color:#ffb703;font-family:Anton,sans-serif;font-size:1.3rem}
.two{display:grid;gap:1rem;margin-top:1.2rem}@media(min-width:800px){.two{grid-template-columns:1fr 1fr}}`,
  `<div class="frame">
<p class="stamp" data-bind="shop.category"></p>
<h1 data-bind="shop.name"></h1>
<p style="font-size:1.2rem;max-width:34rem" data-bind="shop.tagline"></p>
<div style="display:flex;gap:.7rem;flex-wrap:wrap;margin:1.2rem 0 1.8rem">
<a class="btn btn-a" data-bind-href="telHref">Encargar</a>
<a class="btn btn-b" data-bind-href="waHref">WhatsApp</a>
</div>
<div class="price-board" id="carta"><div data-menu></div></div>
<div class="two"><div data-hours></div><p data-bind="shop.story"></p></div>
</div>`
);

page(
  "filo-negro",
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap",
  `:root{--bg:#0a0a0a;--fg:#f5f5f5;--chrome:#c0c0c0}
body{margin:0;font-family:"DM Sans",sans-serif;background:var(--bg);color:var(--fg)}
.demo{background:#f5f5f5;color:#0a0a0a}
.layout{display:grid;min-height:100vh}@media(min-width:860px){.layout{grid-template-columns:120px 1fr}}
.spine{writing-mode:vertical-rl;transform:rotate(180deg);display:flex;align-items:center;justify-content:center;border-right:1px solid #333;font-family:"Bebas Neue",sans-serif;font-size:2.4rem;letter-spacing:.2em;color:var(--chrome);padding:1rem}
.main{padding:2rem 1.25rem 3rem}
h1{font-family:"Bebas Neue",sans-serif;font-size:clamp(3.5rem,12vw,7rem);line-height:.85;margin:0;letter-spacing:.02em}
.btn-a{background:#fff;color:#000}.btn-b{border:1px solid var(--chrome);color:#fff}
.rail{display:grid;gap:2rem;margin-top:2rem}@media(min-width:800px){.rail{grid-template-columns:1.2fr .8fr}}
.menu-item{border-top:1px solid #333;padding:1rem 0}.menu-item__price{color:var(--chrome)}`,
  `<div class="layout">
<aside class="spine" data-bind="shop.category"></aside>
<div class="main">
<p style="color:var(--chrome);letter-spacing:.18em;text-transform:uppercase;font-size:.75rem" data-bind="shop.city"></p>
<h1 data-bind="shop.name"></h1>
<p style="max-width:30rem;font-size:1.15rem;margin:1rem 0 1.4rem" data-bind="shop.tagline"></p>
<div style="display:flex;gap:.7rem;flex-wrap:wrap">
<a class="btn btn-a" data-bind-href="telHref">Pedir cita</a>
<a class="btn btn-b" data-bind-href="waHref">WhatsApp</a>
</div>
<div class="rail">
<div id="carta"><div data-menu></div></div>
<div><div data-hours></div><p style="margin-top:1rem;color:#bbb" data-bind="shop.story"></p></div>
</div></div></div>`
);

page(
  "ramo-verde",
  "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Karla:wght@400;600;700&display=swap",
  `:root{--leaf:#1f5c3a;--mist:#eef6f0;--ink:#1b2a22;--petal:#d8efe0}
body{margin:0;font-family:Karla,sans-serif;background:var(--mist);color:var(--ink)}
.demo{background:var(--leaf);color:#fff}
.hero{padding:3rem 0 1rem}
.hero h1{font-family:"Libre Baskerville",serif;font-size:clamp(2.4rem,7vw,4.2rem);line-height:1.05;margin:0;max-width:14ch}
.stack{position:relative;height:220px;margin:2rem 0}
.stack span{position:absolute;width:42%;aspect-ratio:4/5;border-radius:18px;background:var(--petal);border:1px solid rgba(31,92,58,.2)}
.stack span:nth-child(1){left:0;top:10px;background:#c9e4d3}.stack span:nth-child(2){left:28%;top:0;background:#b7dcc6}.stack span:nth-child(3){left:55%;top:24px;background:#a5d4b8}
.btn-a{background:var(--leaf);color:#fff;border-radius:999px}.btn-b{border:1.5px solid var(--leaf);border-radius:999px;color:var(--leaf)}
.section{padding:1rem 0 3rem}.menu-item{background:#fff;border-radius:20px;padding:1rem;margin-bottom:.75rem;box-shadow:0 8px 24px rgba(31,92,58,.06)}`,
  `<header class="hero"><div class="wrap">
<p style="color:var(--leaf);font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-size:.8rem" data-bind="shop.category"></p>
<h1 data-bind="shop.tagline"></h1>
<p style="max-width:32rem" data-bind="shop.story"></p>
<div class="stack" aria-hidden="true"><span></span><span></span><span></span></div>
<div style="display:flex;gap:.7rem;flex-wrap:wrap">
<a class="btn btn-a" data-bind-href="waHref">Encargar ramo</a>
<a class="btn btn-b" data-bind-href="telHref">Llamar</a>
</div></div></header>
<section class="section"><div class="wrap" style="display:grid;gap:1.5rem">
<div><h2 style="font-family:Libre Baskerville,serif" data-bind="shop.name"></h2><div data-menu></div></div>
<div data-hours></div>
</div></section>`
);

page(
  "pista-negra",
  "https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Inter:wght@400;600;700&display=swap",
  `:root{--bg:#101010;--fg:#f7f7f7;--volt:#d6ff3f}
body{margin:0;font-family:Inter,sans-serif;background:var(--bg);color:var(--fg)}
.demo{background:var(--volt);color:#111}
.slash{clip-path:polygon(0 0,100% 0,100% 78%,0 100%);background:linear-gradient(120deg,#1a1a1a,#000 50%,#222);padding:4rem 0 6rem}
h1{font-family:Oswald,sans-serif;font-size:clamp(3rem,10vw,6rem);text-transform:uppercase;line-height:.9;margin:0}
.btn-a{background:var(--volt);color:#111;text-transform:uppercase;letter-spacing:.06em}.btn-b{border:2px solid var(--volt);color:var(--volt);text-transform:uppercase}
.board{margin-top:-3rem;background:#181818;border:1px solid #333;padding:1.25rem}
.menu-item{border-bottom:1px solid #333;padding:1rem 0}.menu-item__price{color:var(--volt);font-family:Oswald,sans-serif;font-size:1.4rem}
.cols{display:grid;gap:1.5rem;padding:2rem 0 3rem}@media(min-width:800px){.cols{grid-template-columns:1.3fr .7fr}}`,
  `<section class="slash"><div class="wrap">
<p style="color:var(--volt);font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:.8rem" data-bind="shop.category"></p>
<h1 data-bind="shop.name"></h1>
<p style="max-width:30rem;margin:1rem 0 1.4rem" data-bind="shop.tagline"></p>
<div style="display:flex;gap:.7rem;flex-wrap:wrap">
<a class="btn btn-a" data-bind-href="telHref">Probar clase</a>
<a class="btn btn-b" data-bind-href="waHref">WhatsApp</a>
</div></div></section>
<section class="wrap cols">
<div class="board" id="carta"><div data-menu></div></div>
<div><div data-hours></div><p style="opacity:.75;margin-top:1rem" data-bind="shop.story"></p></div>
</section>`
);

page(
  "tomo-papel",
  "https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,600;6..72,700&family=Schibsted+Grotesk:wght@400;600;700&display=swap",
  `:root{--paper:#f6f1e7;--ink:#221f1a;--rule:#cfc6b6;--mark:#0b3d2e}
body{margin:0;font-family:"Schibsted Grotesk",sans-serif;background:var(--paper);color:var(--ink)}
.demo{background:var(--mark);color:#fff}
.mast{padding:2rem 0 1rem;border-bottom:2px solid var(--ink)}
.mast h1{font-family:Newsreader,serif;font-size:clamp(2.6rem,7vw,4.5rem);margin:0;max-width:16ch;line-height:1.05}
.issue{display:flex;justify-content:space-between;gap:1rem;font-size:.8rem;letter-spacing:.12em;text-transform:uppercase;margin-bottom:.8rem}
.cols{display:grid;gap:2rem;padding:2rem 0;border-bottom:1px solid var(--rule)}@media(min-width:900px){.cols{grid-template-columns:1.4fr 1fr;align-items:start}}
.btn-a{background:var(--ink);color:var(--paper)}.btn-b{border:1px solid var(--ink)}
.menu-item{padding:1rem 0;border-bottom:1px solid var(--rule)}.menu-item h3{font-family:Newsreader,serif}`,
  `<div class="wrap mast">
<div class="issue"><span data-bind="shop.city"></span><span data-bind="shop.category"></span></div>
<h1 data-bind="shop.name"></h1>
<p style="max-width:36rem;font-size:1.15rem" data-bind="shop.tagline"></p>
</div>
<section class="wrap cols">
<article>
<p data-bind="shop.story"></p>
<div style="display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.2rem">
<a class="btn btn-a" data-bind-href="waHref">Escribir</a>
<a class="btn btn-b" data-bind-href="telHref">Llamar</a>
</div>
</article>
<aside data-hours></aside>
</section>
<section class="wrap" id="carta" style="padding:2rem 0 3rem"><div data-menu></div></section>`
);

page(
  "noche-lima",
  "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Work+Sans:wght@400;600&display=swap",
  `:root{--void:#070707;--lime:#c8ff3e;--mute:#9a9a9a}
body{margin:0;font-family:"Work Sans",sans-serif;background:var(--void);color:#f2f2f2}
.demo{background:var(--lime);color:#070707}
.stage{min-height:80vh;display:grid;place-content:center;text-align:center;padding:3rem 1rem}
h1{font-family:Syne,sans-serif;font-size:clamp(3rem,11vw,6.5rem);margin:0;letter-spacing:-.04em}
.tag{color:var(--lime);font-weight:700;letter-spacing:.2em;text-transform:uppercase;font-size:.75rem}
.btn-a{background:var(--lime);color:#070707;border-radius:0}.btn-b{border:1px solid var(--lime);color:var(--lime);border-radius:0}
.bottom{display:grid;gap:1.5rem;padding:0 0 3rem}@media(min-width:800px){.bottom{grid-template-columns:1fr 1fr}}
.menu-item{border-top:1px solid #222;padding:1rem 0}.menu-item__price{color:var(--lime)}`,
  `<section class="stage">
<p class="tag" data-bind="shop.category"></p>
<h1 data-bind="shop.name"></h1>
<p style="max-width:26rem;margin:1rem auto;color:var(--mute)" data-bind="shop.tagline"></p>
<div style="display:flex;justify-content:center;gap:.7rem;flex-wrap:wrap;margin-top:1.2rem">
<a class="btn btn-a" data-bind-href="telHref">Reservar</a>
<a class="btn btn-b" data-bind-href="waHref">WhatsApp</a>
</div>
</section>
<section class="wrap bottom">
<div data-menu></div>
<div><div data-hours></div><p style="color:var(--mute);margin-top:1rem" data-bind="shop.story"></p></div>
</section>`
);

page(
  "plaza-viva",
  "https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;700&display=swap",
  `:root{--sun:#ffe566;--tile:#ff6b35;--sky:#4cc9f0;--ink:#1d3557;--ground:#fff7e8}
body{margin:0;font-family:Nunito,sans-serif;background:var(--ground);color:var(--ink)}
.demo{background:var(--tile);color:#fff}
.banner{background:repeating-linear-gradient(90deg,var(--sun) 0 28px,var(--sky) 28px 56px);padding:1rem 0}
.card{background:#fff;border:4px solid var(--ink);border-radius:8px;padding:1.25rem;box-shadow:8px 8px 0 var(--ink)}
h1{font-family:Fredoka,sans-serif;font-size:clamp(2.6rem,8vw,4.5rem);margin:.4rem 0;line-height:1}
.btn-a{background:var(--tile);color:#fff;border:3px solid var(--ink);box-shadow:4px 4px 0 var(--ink)}.btn-b{background:var(--sky);border:3px solid var(--ink);box-shadow:4px 4px 0 var(--ink)}
.grid{display:grid;gap:1rem;padding:1.5rem 0 3rem}@media(min-width:800px){.grid{grid-template-columns:1fr 1fr}}
.menu-item{background:var(--sun);border:3px solid var(--ink);border-radius:8px;padding:1rem;margin-bottom:.8rem}`,
  `<div class="banner"><div class="wrap card">
<p style="font-weight:800;text-transform:uppercase;letter-spacing:.08em" data-bind="shop.category"></p>
<h1 data-bind="shop.name"></h1>
<p data-bind="shop.tagline"></p>
<div style="display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1rem">
<a class="btn btn-a" data-bind-href="waHref">Pedir</a>
<a class="btn btn-b" data-bind-href="telHref">Llamar</a>
</div>
</div></div>
<section class="wrap grid">
<div><h2 style="font-family:Fredoka,sans-serif">Ofertas</h2><div data-menu></div></div>
<div class="card"><h2 style="font-family:Fredoka,sans-serif;margin-top:0">Horario</h2><div data-hours></div><p data-bind="shop.story"></p></div>
</section>`
);

page(
  "calma-azul",
  "https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
  `:root{--ice:#f5f9fc;--ink:#16324f;--line:#c9d8e6;--focus:#2a6f97}
body{margin:0;font-family:"IBM Plex Sans",sans-serif;background:var(--ice);color:var(--ink)}
.demo{background:var(--focus);color:#fff}
.shell{max-width:880px;margin:2rem auto;padding:0 1rem 3rem}
.hero{background:#fff;border:1px solid var(--line);border-radius:18px;padding:2rem}
h1{font-family:"Source Serif 4",serif;font-size:clamp(2.2rem,5vw,3.2rem);margin:.3rem 0 0;line-height:1.15}
.btn-a{background:var(--focus);color:#fff;border-radius:10px}.btn-b{border:1px solid var(--line);border-radius:10px;background:#fff}
.block{background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.25rem;margin-top:1rem}
.menu-item{padding:.9rem 0;border-bottom:1px solid var(--line)}.menu-item:last-child{border-bottom:0}`,
  `<div class="shell">
<section class="hero">
<p style="color:var(--focus);font-weight:600;font-size:.9rem" data-bind="shop.category"></p>
<h1 data-bind="shop.name"></h1>
<p style="max-width:36rem" data-bind="shop.tagline"></p>
<div style="display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.2rem">
<a class="btn btn-a" data-bind-href="telHref">Pedir cita</a>
<a class="btn btn-b" data-bind-href="waHref">WhatsApp</a>
</div>
</section>
<div class="block" data-hours></div>
<div class="block" id="carta"><div data-menu></div></div>
<div class="block"><p data-bind="shop.story"></p><p data-bind="shop.address"></p></div>
</div>`
);

page(
  "fuego-cartel",
  "https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Barlow+Condensed:wght@500;700;800&display=swap",
  `:root{--bg:#111;--fire:#ff3b00;--cream:#fff2d8;--ink:#111}
body{margin:0;font-family:"Barlow Condensed",sans-serif;background:var(--bg);color:var(--cream)}
.demo{background:var(--fire);color:#fff}
.poster{margin:1rem;border:6px solid var(--cream);padding:1.5rem;background:var(--fire);color:#fff;box-shadow:0 0 0 8px var(--bg),0 0 0 14px var(--cream)}
h1{font-family:"Luckiest Guy",cursive;font-size:clamp(3rem,12vw,6rem);line-height:.9;margin:.4rem 0;letter-spacing:.02em}
.btn-a{background:var(--cream);color:var(--ink);text-transform:uppercase;font-size:1.1rem}.btn-b{border:3px solid var(--cream);text-transform:uppercase}
.list{margin:1rem;border:4px solid var(--cream);padding:1rem}
.menu-item{border-bottom:2px solid rgba(255,242,216,.25);padding:.8rem 0}.menu-item__price{font-size:1.5rem}`,
  `<section class="poster">
<p style="text-transform:uppercase;letter-spacing:.14em;font-weight:800" data-bind="shop.category"></p>
<h1 data-bind="shop.name"></h1>
<p style="font-size:1.35rem;max-width:28rem" data-bind="shop.tagline"></p>
<div style="display:flex;gap:.7rem;flex-wrap:wrap;margin-top:1.2rem">
<a class="btn btn-a" data-bind-href="waHref">Pedir ya</a>
<a class="btn btn-b" data-bind-href="telHref">Llamar</a>
</div>
</section>
<section class="list"><div data-menu></div><div style="margin-top:1rem" data-hours></div><p data-bind="shop.story"></p></section>`
);

page(
  "cueva-oro",
  "https://fonts.googleapis.com/css2?family=Cormorant:wght@500;600;700&family=Jost:wght@300;400;500&display=swap",
  `:root{--void:#14110f;--gold:#c6a75e;--fog:#d9d2c5}
body{margin:0;font-family:Jost,sans-serif;background:var(--void);color:var(--fog);font-weight:300}
.demo{background:var(--gold);color:#14110f}
.center{min-height:75vh;display:grid;place-content:center;text-align:center;padding:3rem 1rem}
.line{width:48px;height:1px;background:var(--gold);margin:1rem auto}
h1{font-family:Cormorant,serif;font-size:clamp(3rem,9vw,5.5rem);font-weight:600;margin:0;letter-spacing:.08em}
.btn-a{border:1px solid var(--gold);color:var(--gold);letter-spacing:.14em;text-transform:uppercase;font-size:.8rem;background:transparent}
.panel{max-width:720px;margin:0 auto 3rem;padding:0 1rem}
.menu-item{text-align:left;border-top:1px solid rgba(198,167,94,.25);padding:1.1rem 0}.menu-item__price{color:var(--gold)}`,
  `<section class="center">
<p style="letter-spacing:.28em;text-transform:uppercase;font-size:.72rem;color:var(--gold)" data-bind="shop.category"></p>
<div class="line"></div>
<h1 data-bind="shop.name"></h1>
<div class="line"></div>
<p style="max-width:26rem;margin:0 auto;font-size:1.05rem" data-bind="shop.tagline"></p>
<p style="margin-top:1.5rem"><a class="btn btn-a" data-bind-href="telHref">Reservar mesa</a></p>
</section>
<section class="panel">
<div data-menu></div>
<div style="margin-top:1.5rem" data-hours></div>
<p style="opacity:.75;margin-top:1.5rem" data-bind="shop.story"></p>
<p><a class="btn btn-a" data-bind-href="waHref">WhatsApp</a></p>
</section>`
);

page(
  "taller-plano",
  "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;600&display=swap",
  `:root{--bg:#e9eef2;--ink:#102a43;--line:#7b8a99;--accent:#0b6e4f}
body{margin:0;font-family:"Space Grotesk",sans-serif;background:var(--bg);color:var(--ink);
background-image:linear-gradient(rgba(16,42,67,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(16,42,67,.06) 1px,transparent 1px);
background-size:28px 28px}
.demo{background:var(--ink);color:#fff}
.sheet{max-width:980px;margin:1.5rem auto;padding:1rem;border:1px solid var(--line);background:rgba(255,255,255,.86)}
.meta{font-family:"IBM Plex Mono",monospace;font-size:.78rem;display:flex;justify-content:space-between;gap:1rem;border-bottom:1px solid var(--line);padding-bottom:.7rem}
h1{font-size:clamp(2.2rem,6vw,3.6rem);margin:.8rem 0 .4rem;letter-spacing:-.03em}
.btn-a{background:var(--accent);color:#fff}.btn-b{border:1px solid var(--ink)}
.grid{display:grid;gap:1rem;margin-top:1.2rem}@media(min-width:800px){.grid{grid-template-columns:1.2fr .8fr}}
.box{border:1px dashed var(--line);padding:1rem}
.menu-item__price{font-family:"IBM Plex Mono",monospace;color:var(--accent)}`,
  `<div class="sheet">
<div class="meta"><span>PLANO / WEB</span><span data-bind="shop.city"></span><span data-bind="shop.category"></span></div>
<h1 data-bind="shop.name"></h1>
<p data-bind="shop.tagline"></p>
<div style="display:flex;gap:.7rem;flex-wrap:wrap;margin:1rem 0">
<a class="btn btn-a" data-bind-href="telHref">Pedir cita</a>
<a class="btn btn-b" data-bind-href="waHref">WhatsApp</a>
</div>
<div class="grid">
<div class="box" id="carta"><div data-menu></div></div>
<div class="box"><div data-hours></div><p style="margin-top:1rem" data-bind="shop.story"></p><p data-bind="shop.address"></p></div>
</div>
</div>`
);

console.log(`Generated ${catalog.length} plantillas in ${root}`);
