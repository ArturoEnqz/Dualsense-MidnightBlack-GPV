import "./styles.css";

const palette = [
  { name: "Outer shell", hex: "#1E2129", color: "#1e2129" },
  { name: "Inner plate", hex: "#0A0B10", color: "#0a0b10" },
  { name: "Touchpad", hex: "#252830", color: "#252830" },
  { name: "Buttons", hex: "#2C303A", color: "#2c303a" },
  { name: "Light grey detail", hex: "#B0B5C0", color: "#b0b5c0" },
  { name: "Light bar", hex: "#3DA9FF", color: "#3da9ff" },
];

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <header class="hero">
    <div class="hero__stage">
      <div class="hero__glow" aria-hidden="true"></div>
      <div class="viewer-wrap">
        <iframe
          id="skin-frame"
          title="DualSense Midnight Black preview"
          src="/skin/preview.html"
          style="width:100%;height:100%;border:0;background:transparent;pointer-events:none"
        ></iframe>
        <div class="status" id="pad-status">Modo demo · conecta un DualSense para probar en vivo</div>
      </div>
    </div>
    <div class="hero__copy">
      <h1 class="brand"><span>DUALSENSE</span>Midnight Black</h1>
      <p class="lede">
        Skin SVG para Gamepad Viewer, calibrada con fotos oficiales de Sony:
        dos negros con matiz azul y detalles en gris claro.
      </p>
      <div class="cta-row">
        <a class="btn btn--primary" href="#usar">Usar en Gamepad Viewer</a>
        <a class="btn btn--ghost" href="/skin/style.css" target="_blank" rel="noreferrer">Ver style.css</a>
      </div>
    </div>
  </header>

  <section id="paleta">
    <h2 class="section-title">Paleta Midnight Black</h2>
    <p class="section-lede">
      Sony describe esta edición como dos tonos de negro con un sutil matiz azul
      y detalles en gris claro — la misma dirección que usamos en los SVG.
    </p>
    <div class="palette">
      ${palette
        .map(
          (s) => `
        <div class="swatch" style="background: linear-gradient(160deg, ${s.color} 0%, #05060a 140%)">
          <strong>${s.name}</strong>
          <span>${s.hex}</span>
        </div>`
        )
        .join("")}
    </div>
    <div class="demo-keys" id="demo-keys">
      <button class="chip" data-ids="3">△</button>
      <button class="chip" data-ids="1">○</button>
      <button class="chip" data-ids="0">✕</button>
      <button class="chip" data-ids="2">□</button>
      <button class="chip" data-ids="12">D-Pad ↑</button>
      <button class="chip" data-ids="4,5">L1 / R1</button>
      <button class="chip" data-ids="6,7">L2 / R2</button>
      <button class="chip" data-ids="17">Touchpad</button>
      <button class="chip" data-ids="16">PS</button>
    </div>
  </section>

  <section id="usar">
    <h2 class="section-title">Cómo usarla</h2>
    <p class="section-lede">
      Gamepad Viewer carga skins custom con el parámetro <code>css=</code>.
      Publica la carpeta <code>skin/</code> (GitHub Pages, gist, Netlify…) y apunta a <code>style.css</code>.
    </p>
    <div class="steps">
      <div class="step">
        <div class="step__n">1</div>
        <p>Sube <code>public/skin/</code> a un hosting estático con CORS abierto (GitHub Pages funciona bien).</p>
      </div>
      <div class="step">
        <div class="step__n">2</div>
        <p>Abre Gamepad Viewer con tu URL de CSS:</p>
        <code class="code-block">https://gamepadviewer.com/?p=1&amp;css=https://TU-DOMINIO/skin/style.css</code>
      </div>
      <div class="step">
        <div class="step__n">3</div>
        <p>
          En OBS/Browser Source usa ~800×640, fondo transparente.
          Localmente puedes servir esta app y probar el overlay en
          <a href="/skin/preview.html">/skin/preview.html</a>.
        </p>
      </div>
    </div>
  </section>

  <section id="refs">
    <h2 class="section-title">Referencias oficiales</h2>
    <p class="section-lede">
      Material de producto PlayStation usado para acertar tonos, light bar y el contraste de dos negros.
    </p>
    <div class="refs">
      <figure>
        <img src="/refs/official-midnight-front.jpg" alt="DualSense Midnight Black frontal, blog PlayStation" />
        <figcaption>Midnight Black — frontal (PlayStation Blog, 2021)</figcaption>
      </figure>
      <figure>
        <img src="/refs/official-promo.jpg" alt="Midnight Black y Cosmic Red en promo galaxy" />
        <figcaption>Lanzamiento Galaxy — Midnight Black abajo a la derecha</figcaption>
      </figure>
    </div>
  </section>

  <footer>
    Skin basada en los SVG PS5 White de
    <a href="https://github.com/Istador/gamepadviewer-skins" target="_blank" rel="noreferrer">Istador/gamepadviewer-skins</a>
    (MPL-2.0). Gamepad Viewer por
    <a href="https://gamepadviewer.com/" target="_blank" rel="noreferrer">mrmcpowned</a>.
    DualSense y PlayStation son marcas de Sony Interactive Entertainment.
  </footer>
`;

const frame = document.querySelector<HTMLIFrameElement>("#skin-frame")!;
const status = document.querySelector<HTMLDivElement>("#pad-status")!;

document.querySelectorAll<HTMLButtonElement>("#demo-keys .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    const ids = (chip.dataset.ids || "").split(",").filter(Boolean);
    frame.contentWindow?.postMessage({ type: "press", ids }, "*");
  });
});

window.addEventListener("gamepadconnected", (e) => {
  status.textContent = `Conectado: ${e.gamepad.id}`;
  status.classList.add("status--live");
});

window.addEventListener("gamepaddisconnected", () => {
  status.textContent = "Modo demo · conecta un DualSense para probar en vivo";
  status.classList.remove("status--live");
});
