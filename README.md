# Tesla Electricidad — Sitio Web Corporativo

Sitio web de presentación para **Tesla Electricidad**, empresa especializada en instalaciones de media y baja tensión con sede en Tuxtla Gutiérrez, Chiapas.

**Live:** [estebanmakiatoowo.github.io/tesla_electricidad_web_page](https://estebanmakiatoowo.github.io/tesla_electricidad_web_page)

---

## Stack

| Tecnología | Versión | Uso |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.9 | Tipado estático |
| Vite | 7 | Bundler / dev server |
| Tailwind CSS | 4 | Estilos utilitarios |
| GSAP + ScrollTrigger | 3 | Animaciones de scroll |
| Framer Motion | 12 | Animaciones declarativas |

---

## Estructura del proyecto

```
src/
├── application/
│   ├── constants/       # IDs de secciones, links de navegación
│   └── data/            # Datos estáticos (empresa, servicios, galería, testimonios)
│
├── infrastructure/
│   ├── gsap/            # Registro de plugins y config global de GSAP
│   └── framerMotion/    # LazyMotion provider
│
└── presentation/
    ├── animations/      # Variantes y transiciones reutilizables de Framer Motion
    ├── components/ui/   # Componentes atómicos
    ├── layouts/         # RootLayout, PageLayout
    └── sections/        # Secciones de la página
```

### Secciones

| Sección | Descripción |
|---|---|
| `Hero` | Pantalla completa con stats animados y fondo de relámpagos |
| `Services` | Grid de cards con servicios eléctricos |
| `Products` | Catálogo de productos |
| `Gallery` | Showcase de proyectos con TiltedCard |
| `About` | Historia de la empresa + highlights |
| `Testimonials` | Testimonios de clientes |
| `ContactCTA` | Llamada a la acción con logo con efecto eléctrico |
| `Footer` | Links, contacto y créditos |

### Componentes UI destacados

- **`FadeContent`** — Fade-in/out con GSAP ScrollTrigger. Soporta blur, delay y repeat.
- **`BlurText`** — Animación de texto letra por letra con desenfoque.
- **`ShinyText`** — Texto con efecto de brillo deslizante.
- **`CountUp`** — Contador numérico animado al entrar al viewport.
- **`SpotlightCard`** — Card con spotlight que sigue el cursor.
- **`TiltedCard`** — Card con efecto 3D tilt en hover.
- **`Magnet`** — Wrapper que atrae elementos hacia el cursor.
- **`StaggeredMenu`** — Navbar fullscreen con animación escalonada.
- **`Lightning`** — Canvas con efecto de relámpago animado.
- **`ScrollStack`** — Secciones apiladas con efecto de profundidad al hacer scroll.
- **`ParallaxSection`** — Sección con entrada parallax scrubbed.

---

## Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview

# Lint
npm run lint

# Deploy a GitHub Pages
npm run deploy
```

---

## Arquitectura de animaciones

Las animaciones de scroll se manejan con **GSAP ScrollTrigger** (`ignoreMobileResize: true` activado globalmente). El componente `FadeContent` es el building block principal:

- `start: 'top <threshold>%'` — el elemento entra cuando llega a cierto % del viewport
- `end: 'bottom top'` — el reverse se dispara solo cuando el elemento sale completamente por arriba
- `toggleActions: 'play reverse play reverse'` — permite ver la animación de entrada al bajar y al volver a subir

Las animaciones de entrada de UI (Hero) usan **Framer Motion** con `LazyMotion + domAnimation` para minimizar el bundle.

---

## Deploy

El proyecto se publica en **GitHub Pages** usando `gh-pages`. El `base` de Vite está configurado en `/tesla_electricidad_web_page/` para que los assets resuelvan correctamente.

```bash
npm run deploy   # ejecuta build y publica la carpeta dist/
```

---

## Personalización de contenido

Todo el contenido editable está centralizado en [`src/application/data/`](src/application/data/):

- `company.data.ts` — nombre, teléfono, email, dirección, año de fundación
- `services.data.ts` — lista de servicios con icono, descripción y features
- `gallery.data.ts` — proyectos del showcase con imagen y categoría
- `testimonials.data.ts` — testimonios de clientes
