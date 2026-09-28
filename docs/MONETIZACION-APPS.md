# Flow Home Apps — monetización + IDs de producto (Play / App Store)

Última actualización: 28 sep 2026  
**Memio: discontinuada** (fuera del catálogo; no crear productos).

Regla global: **funciones digitales = Play Billing / Apple IAP**. **Ko-fi / PayPal = solo propina** (nunca desbloquean Pro).

---

## Resumen

| App | Modelo | Play | App Store |
|-----|--------|------|-----------|
| MyPass | Local gratis + Sync de pago + tip | Sí | Sí |
| Lunera | Freemium Pro | Sí | Sí |
| ReformaPRO | Freemium B2B | Sí | Sí |
| Monexa | Freemium Pro | Sí | Sí |
| Misiva | Tip primero; Pro opcional fase 2 | Sí | No |
| Miravista | Tip / unlock opcional | Sí | No |

---

## Cómo pegar en Play Console

1. App → **Monetizar** → **Productos** → Suscripciones / Compras in-app.  
2. **ID del producto** = columna **Play product ID** (exacto, minúsculas, `_`).  
3. Nombre visible = columna **Nombre en tienda**.  
4. Precio base orientativo en EUR (ajusta después por país).  
5. En el código usa el mismo ID (BillingClient / RevenueCat / etc.).

**Apple App Store Connect:** mismo significado; Product ID sugerido en columna **Apple Product ID** (reverse-DNS).

---

## 1. Lunera — freemium Pro

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Suscripción | `lunera_pro_monthly` | `apps.flowhome.lunera.pro.monthly` | Lunera Pro (mensual) | 2,99 € / mes |
| Suscripción | `lunera_pro_yearly` | `apps.flowhome.lunera.pro.yearly` | Lunera Pro (anual) | 19,99 € / año |
| Compra única (opcional) | `lunera_pro_lifetime` | `apps.flowhome.lunera.pro.lifetime` | Lunera Pro (para siempre) | 39,99 € |

**Gratis:** ciclo básico, invitado, Aprende, 1–2 recordatorios.  
**Pro:** PDF/export, IA ampliada, sync, temas, recordatorios/widgets ilimitados, etapas avanzadas.

Grupo de suscripción Play (sugerido): `lunera_pro` (monthly + yearly como base plans del mismo grupo).

---

## 2. MyPass — Sync+ (núcleo local gratis)

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Suscripción | `mypass_sync_monthly` | `apps.flowhome.mypass.sync.monthly` | MyPass Sync (mensual) | 1,49 € / mes |
| Suscripción | `mypass_sync_yearly` | `apps.flowhome.mypass.sync.yearly` | MyPass Sync (anual) | 12,99 € / año |
| Compra única (opcional) | `mypass_sync_lifetime` | `apps.flowhome.mypass.sync.lifetime` | MyPass Sync (para siempre) | 24,99 € |

**Gratis:** bóveda, Recovery Key, backup local, Autofill, TOTP, biometría.  
**De pago:** sync multi-dispositivo + historial de revisiones.  
**Tip:** Ko-fi (sin unlock).

Grupo Play: `mypass_sync`.

---

## 3. ReformaPRO — Pro / Negocio

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Suscripción | `reformapro_pro_monthly` | `apps.flowhome.reformapro.pro.monthly` | ReformaPRO Pro (mensual) | **3,99 € / mes** (lanzamiento) |
| Suscripción | `reformapro_pro_yearly` | `apps.flowhome.reformapro.pro.yearly` | ReformaPRO Pro (anual) | **29,99 € / año** (lanzamiento) |

**Gratis:** catálogo básico, **hasta 5 presupuestos activos**, PDF con marca.  
**Pro:** ilimitados, firma, equipo, obra/calendario, sin marca, plantillas/voz.

Grupo Play: `reformapro_pro`.  
**Precios de lanzamiento** (subir cuando haya tracción): 3,99 €/mes · 29,99 €/año.  
*(Web/PWA: mismo entitlement vía backend; cobro web aparte si aplica — no mezclar con IAP móvil.)*

---

## 4. Monexa — Pro

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Suscripción | `monexa_pro_monthly` | `apps.flowhome.monexa.pro.monthly` | Monexa Pro (mensual) | 2,99 € / mes |
| Suscripción | `monexa_pro_yearly` | `apps.flowhome.monexa.pro.yearly` | Monexa Pro (anual) | 19,99 € / año |

**Gratis:** 1 grupo, movimientos, categorías, presupuestos básicos.  
**Pro:** más grupos, OCR, voz, insights / cierre de mes, import CSV.

Grupo Play: `monexa_pro`.

---

## 5. Misiva — tip primero; Pro fase 2 (solo Play)

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Compra única | `misiva_pro_unlock` | — (no iOS) | Misiva Pro | 3,99 € una vez |

**Fase 1 (lanzamiento):** solo Ko-fi / PayPal, sin IAP.  
**Fase 2:** crear `misiva_pro_unlock` → plantillas / anti-repetición avanzada.  
Gemini = API key del usuario (él paga a Google).

---

## 6. Miravista — tip / unlock (solo Play)

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Compra única | `miravista_pro_unlock` | — (no iOS) | Miravista Pro | 2,49 € una vez |

**Gratis:** 480p/720p, 1 visor, QR+PIN.  
**Pro:** 1080p + 2 visores.  
**Fase 1:** tip; crear IAP cuando haya usuarios.

---

## Lista copia-pega (solo IDs Play)

```
lunera_pro_monthly
lunera_pro_yearly
lunera_pro_lifetime
mypass_sync_monthly
mypass_sync_yearly
mypass_sync_lifetime
reformapro_pro_monthly
reformapro_pro_yearly
monexa_pro_monthly
monexa_pro_yearly
misiva_pro_unlock
miravista_pro_unlock
```

## Lista copia-pega (solo IDs Apple)

```
apps.flowhome.lunera.pro.monthly
apps.flowhome.lunera.pro.yearly
apps.flowhome.lunera.pro.lifetime
apps.flowhome.mypass.sync.monthly
apps.flowhome.mypass.sync.yearly
apps.flowhome.mypass.sync.lifetime
apps.flowhome.reformapro.pro.monthly
apps.flowhome.reformapro.pro.yearly
apps.flowhome.monexa.pro.monthly
apps.flowhome.monexa.pro.yearly
```

---

## Checklist por app (Play / Apple)

- [ ] Productos creados con los IDs de arriba (no renombrar después).
- [ ] Grupo de suscripción configurado (Lunera / MyPass / ReformaPRO / Monexa).
- [ ] Texto ficha: qué es gratis / qué es Pro.
- [ ] Botón **Restaurar compras** en Ajustes.
- [ ] Data safety = política publicada.
- [ ] Ko-fi sin “desbloquea Pro”.
- [ ] Misiva / Miravista: IAP solo en fase 2.

---

## Orden de implementación

1. Lunera (`lunera_pro_*`) + ReformaPRO (`reformapro_pro_*`)  
2. Monexa (`monexa_pro_*`)  
3. MyPass (`mypass_sync_*`)  
4. Misiva / Miravista IAP solo con tracción  

Tip global: https://ko-fi.com/cristianodeveloper
