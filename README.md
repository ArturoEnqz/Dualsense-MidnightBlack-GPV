# DualSense Midnight Black — Gamepad Viewer Skin

Skin SVG lo más fiel posible al **DualSense Midnight Black** para [Gamepad Viewer](https://gamepadviewer.com/).

## Vista previa

```bash
npm install
npm run dev
```

Abre la URL que imprime Vite (por defecto `http://127.0.0.1:43145`).

## Usar en Gamepad Viewer

1. Publica la carpeta `public/skin/` (o `skin/`) en un host estático.
2. Abre:

```
https://gamepadviewer.com/?p=1&css=https://TU-DOMINIO/skin/style.css
```

Los assets SVG se resuelven relativos a `style.css`, así que deben vivir en el mismo directorio.

## Qué incluye

| Archivo | Rol |
|---------|-----|
| `shell.svg` | Cuerpo two-tone + touchpad + mute |
| `abxy.svg` / `dpad.svg` | Botones y cruceta |
| `sticks.svg` | Análogos |
| `bumpers.svg` / `triggers.svg` | L1/R1 y L2/R2 |
| `touchpad.svg` / `lightbar.svg` | Touchpad y barras LED |
| `back_start.svg` / `meta.svg` | Create, Options, PS |
| `style.css` | Posiciones y estados `.pressed` |

## Paleta (muestreada de material oficial Sony)

| Pieza | Hex | Notas |
|-------|-----|--------|
| Outer shell | `#1E2129` | Carbón con matiz azul |
| Inner plate | `#0A0B10` | Negro más profundo |
| Touchpad | `#252830` | Separado del shell |
| Botones | `#2C303A` | Plástico oscuro |
| Detalles | `#B0B5C0` | Gris claro (iconografía) |
| Light bar | azul DualSense | Capa `lightbar.svg` |

Sony describe Midnight Black como *“two subtly different shades of black with light grey detailing”* y un *“subtle blue hue”* ([PlayStation Blog, 2021](https://blog.playstation.com/2021/05/13/two-new-dualsense-wireless-controller-colors-hit-shelves-starting-next-month/)).

## Créditos

- Geometría SVG original: [Istador/gamepadviewer-skins](https://github.com/Istador/gamepadviewer-skins) (PS5 White), MPL-2.0
- Viewer: [gamepadviewer.com](https://gamepadviewer.com/) (mrmcpowned)
- DualSense / PlayStation son marcas de Sony Interactive Entertainment

## Licencia

Los SVG derivados siguen **MPL-2.0** (ver `skin/LICENSE.md`). El resto del repo de preview puede usarse libremente.


## GitHub Pages

1. En el repo: **Settings → Pages → Source**: Deploy from branch `main`, folder `/ (root)`.
2. Tras el deploy, la skin queda en:

```
https://arturoenqz.github.io/Dualsense-MidnightBlack-GPV/public/skin/style.css
```

o, si prefieres una URL más corta, también está en:

```
https://arturoenqz.github.io/Dualsense-MidnightBlack-GPV/skin/style.css
```

3. Gamepad Viewer:

```
https://gamepadviewer.com/?p=1&css=https://arturoenqz.github.io/Dualsense-MidnightBlack-GPV/skin/style.css
```

Preview del overlay: `.../public/skin/preview.html` o `.../skin/` según cómo configures Pages.
