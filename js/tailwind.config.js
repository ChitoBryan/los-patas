/* ============================================================
   LOS PATAS — Configuración de Tailwind (CDN)
   Debe cargarse DESPUÉS del script CDN de Tailwind.
   ============================================================ */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "error": "#ba1a1a",
        "surface": "#fff8f7",
        "on-primary-fixed": "#410005",
        "on-primary-fixed-variant": "#930018",
        "surface-dim": "#f1d3d1",
        "on-error-container": "#93000a",
        "on-background": "#271717",
        "surface-tint": "#bb1427",
        "on-tertiary-container": "#c8ecff",
        "on-error": "#ffffff",
        "primary": "#a2001c",
        "error-container": "#ffdad6",
        "secondary": "#55606a",
        "on-tertiary-fixed": "#001f2a",
        "background": "#fff8f7",
        "surface-container-highest": "#fadcd9",
        "on-primary-container": "#ffdfdd",
        "primary-container": "#c8202e",
        "tertiary-fixed": "#bde9ff",
        "primary-fixed": "#ffdad7",
        "inverse-on-surface": "#ffedeb",
        "primary-fixed-dim": "#ffb3af",
        "tertiary-container": "#007090",
        "secondary-fixed-dim": "#bdc8d3",
        "surface-container": "#ffe9e7",
        "on-tertiary": "#ffffff",
        "surface-container-high": "#ffe1df",
        "secondary-container": "#d8e4f0",
        "on-primary": "#ffffff",
        "on-secondary-fixed-variant": "#3d4851",
        "inverse-surface": "#3e2c2b",
        "surface-container-low": "#fff0ef",
        "surface-container-lowest": "#ffffff",
        "outline": "#906f6d",
        "on-secondary-container": "#5b6670",
        "on-tertiary-fixed-variant": "#004d64",
        "tertiary": "#005670",
        "tertiary-fixed-dim": "#81d1f4",
        "outline-variant": "#e4bdbb",
        "on-surface-variant": "#5b403e",
        "on-secondary": "#ffffff",
        "on-surface": "#271717",
        "secondary-fixed": "#d8e4f0",
        "surface-variant": "#fadcd9",
        "on-secondary-fixed": "#121d25",
        "inverse-primary": "#ffb3af",
        "surface-bright": "#fff8f7"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "xs": "8px",
        "sm": "16px",
        "xl": "64px",
        "lg": "40px",
        "md": "24px",
        "gutter": "20px",
        "margin-desktop": "48px",
        "base": "4px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "headline-sm": ["Anton"],
        "headline-md": ["Anton"],
        "headline-lg-mobile": ["Anton"],
        "title-lg": ["Inter"],
        "label-sm": ["Inter"],
        "body-lg": ["Inter"],
        "headline-lg": ["Anton"],
        "label-md": ["Inter"],
        "display": ["Anton"],
        "body-md": ["Inter"]
      },
      fontSize: {
        "headline-sm": ["24px", { "lineHeight": "1.2", "fontWeight": "400" }],
        "headline-md": ["32px", { "lineHeight": "1.2", "fontWeight": "400" }],
        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "400" }],
        "title-lg": ["20px", { "lineHeight": "28px", "fontWeight": "700" }],
        "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }],
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "headline-lg": ["48px", { "lineHeight": "1.2", "letterSpacing": "0.02em", "fontWeight": "400" }],
        "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "display": ["72px", { "lineHeight": "1.1", "letterSpacing": "0.02em", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }]
      }
    }
  }
};
