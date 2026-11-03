# Contrato de contenido (panel ↔ plantillas)

Todas las plantillas leen el mismo `content.json`. El panel futuro edita estos campos; la plantilla solo cambia el aspecto.

```json
{
  "shop": {
    "name": "string",
    "category": "string",
    "city": "string",
    "address": "string",
    "phone": "string (E.164, para tel:)",
    "phoneDisplay": "string (visible)",
    "whatsapp": "string (sin +, para wa.me)",
    "tagline": "string",
    "story": "string",
    "hours": [{ "days": "string", "time": "string" }],
    "menu": [{ "name": "string", "desc": "string", "price": "string" }]
  }
}
```

Cada tienda en el panel tendrá además: `templateId` (ej. `granada-dia`) y, más adelante, fotos.

**Demo del panel** (`plantillas/panel/`): edita estos campos, elige plantilla y guarda un borrador en `localStorage` (`fha_plantilla_draft` + `fha_plantilla_id`). Las plantillas leen ese borrador antes que `content.json`. Es una demo local, no el panel multi-tienda con login.

Regenerar HTML de plantillas: `node plantillas/build-templates.mjs`
