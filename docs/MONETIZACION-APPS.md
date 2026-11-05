# Flow Home Apps — monetización + IDs de producto (Play / App Store)

Última actualización: 5 nov 2026  
**Memio: discontinuada** (fuera del catálogo).

---

## Fase 1 (vigente hasta que Cristiano diga «ya»)

- Apps **100 % gratis**. Sin IAP Apple, sin Play Billing, sin ads, sin paywall que desbloqueé features.
- **Ko-fi / PayPal = solo propina** (nunca desbloquean Pro).
- Play Console: **no comerciante** mientras no haya cobros; pasar a comerciante **antes** del primer cobro.
- Soft-ask Plan **B**: como mucho cada **30 días** tras “Ahora no”; opción **“No volver a mostrar”**.

### Patrón UX obligatorio (todas las apps del alcance)

| Elemento | Estándar |
|----------|----------|
| **Entrada fija** | Siempre bajo **Ajustes** (o «Más» si no hay Ajustes) → fila **Apoyar** |
| **Label ES** | `Apoyar` |
| **Label EN** | `Support` |
| **Label PT** | `Apoiar` |
| **Subtítulo** | Invítame un helado · Ko-fi / PayPal |
| **Pantalla** | Tip dedicada (Ko-fi primario + PayPal). No mezclar con «soporte técnico / email». |
| **Disclaimer** | Propina voluntaria; no desbloquea funciones de pago. |
| **URLs** | `https://ko-fi.com/cristianodeveloper` · `https://paypal.me/cristianodeveloper` |
| **Soft-ask** | Tras N éxitos de uso; cooldown 30d; neverAgain |

**Alcance Fase 1 tip/soft-ask:** Misiva, Lunera, MyPass, Monexa, ReformaPRO, Miravista, Tareas Family.  
**Landing** (`cristianoqa.github.io` `#apoyo`): mantener sección estática; sin soft-ask web.  
**Fuera:** Flow Desk, Memio.

---

## Fase 2 (solo cuando Cristiano lo ordene, mismo tramo)

1. Alta autónomo / gestoría.  
2. Play comerciante + datos públicos + Términos.  
3. Apple IAP + Google Play Billing.  
4. Activar Pro/pago.  

Regla: **funciones digitales = Play Billing / Apple IAP**. Tip Ko-fi/PayPal sigue siendo solo propina.

---

## Resumen productos (preparados; no activos en Fase 1)

| App | Modelo futuro | Play | App Store |
|-----|---------------|------|-----------|
| MyPass | Local gratis + Sync de pago + tip | Sí | Sí |
| Lunera | Freemium Pro | Sí | Sí |
| ReformaPRO | Freemium B2B | Sí | Sí |
| Monexa | Freemium Pro | Sí | Sí |
| Misiva | Tip primero; Pro opcional fase 2 | Sí | No |
| Miravista | Tip / unlock opcional | Sí | No |
| Tareas Family | Tip Fase 1; Pro TBD | Sí | TBD |

---

## Cómo pegar en Play Console (Fase 2)

1. App → **Monetizar** → **Productos** → Suscripciones / Compras in-app.  
2. **ID del producto** = columna **Play product ID** (exacto, minúsculas, `_`).  
3. Nombre visible = columna **Nombre en tienda**.  
4. Precio base orientativo en EUR.  
5. En el código usa el mismo ID.

---

## 1. Lunera — freemium Pro

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Suscripción | `lunera_pro_monthly` | `apps.flowhome.lunera.pro.monthly` | Lunera Pro (mensual) | 2,99 € / mes |
| Suscripción | `lunera_pro_yearly` | `apps.flowhome.lunera.pro.yearly` | Lunera Pro (anual) | 19,99 € / año |
| Compra única (opcional) | `lunera_pro_lifetime` | `apps.flowhome.lunera.pro.lifetime` | Lunera Pro (para siempre) | 39,99 € |

Grupo Play: `lunera_pro`.

---

## 2. MyPass — Sync+

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Suscripción | `mypass_sync_monthly` | `apps.flowhome.mypass.sync.monthly` | MyPass Sync (mensual) | 1,49 € / mes |
| Suscripción | `mypass_sync_yearly` | `apps.flowhome.mypass.sync.yearly` | MyPass Sync (anual) | 12,99 € / año |
| Compra única (opcional) | `mypass_sync_lifetime` | `apps.flowhome.mypass.sync.lifetime` | MyPass Sync (para siempre) | 24,99 € |

Grupo Play: `mypass_sync`.

---

## 3. ReformaPRO — Pro / Negocio

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Suscripción | `reformapro_pro_monthly` | `apps.flowhome.reformapro.pro.monthly` | ReformaPRO Pro (mensual) | 3,99 € / mes |
| Suscripción | `reformapro_pro_yearly` | `apps.flowhome.reformapro.pro.yearly` | ReformaPRO Pro (anual) | 29,99 € / año |

Grupo Play: `reformapro_pro`.

---

## 4. Monexa — Pro

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Suscripción | `monexa_pro_monthly` | `apps.flowhome.monexa.pro.monthly` | Monexa Pro (mensual) | 2,99 € / mes |
| Suscripción | `monexa_pro_yearly` | `apps.flowhome.monexa.pro.yearly` | Monexa Pro (anual) | 19,99 € / año |

Grupo Play: `monexa_pro`.

---

## 5. Misiva — tip primero; Pro fase 2 (solo Play)

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Compra única | `misiva_pro_unlock` | — | Misiva Pro | 3,99 € una vez |

---

## 6. Miravista — tip / unlock (solo Play)

| Tipo | Play product ID | Apple Product ID | Nombre en tienda | Precio base orient. |
|------|-----------------|------------------|------------------|---------------------|
| Compra única | `miravista_pro_unlock` | — | Miravista Pro | 2,49 € una vez |

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

## Checklist Fase 1 (tip) — hecho 2026-11

| App | Ajustes→Apoyar | Soft-ask 30d+never | Tip Ko-fi/PayPal |
|-----|----------------|--------------------|------------------|
| Misiva | ✅ | ✅ | ✅ |
| ReformaPRO | ✅ Preferencias | ✅ cada 5 presupuestos | ✅ |
| Tareas Family | ✅ Registros | ✅ cada 10 tareas | ✅ |
| Lunera | ✅ | ✅ cada 10 logs | ✅ DonationScreen |
| Monexa | ✅ | ✅ cada 10 gastos | ✅ vía About |
| MyPass | ✅ | ✅ cada 10 unlocks | ✅ |
| Miravista | ✅ | ✅ cada 10 sesiones | ✅ |
| Landing `#apoyo` | n/a (nav) | no (estático) | ✅ |
| Memio / Flow Desk | fuera de alcance | — | — |

## Checklist Fase 2 (IAP)

- [ ] Productos creados con los IDs de arriba.
- [ ] Restaurar compras en Ajustes.
- [ ] Data safety = política publicada.
- [ ] Comerciante Play + ToS.

Tip global: https://ko-fi.com/cristianodeveloper · https://paypal.me/cristianodeveloper
