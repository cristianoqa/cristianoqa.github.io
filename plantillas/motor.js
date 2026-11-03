/**
 * Hydrates a plantilla from shared content.json, or from the panel draft in localStorage.
 * Panel contract: same fields for every template; only the skin changes.
 */

export const DRAFT_KEY = "fha_plantilla_draft";
export const TEMPLATE_KEY = "fha_plantilla_id";

export function readDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !parsed.shop) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** @param {{ shop: Record<string, unknown> }} data Full content document (same shape as content.json). */
export function writeDraft(data, templateId) {
  if (!data?.shop) {
    throw new Error("writeDraft expects { shop: {...} }");
  }
  localStorage.setItem(DRAFT_KEY, JSON.stringify({ shop: data.shop }));
  if (templateId) localStorage.setItem(TEMPLATE_KEY, templateId);
}

export function clearDraft() {
  localStorage.removeItem(DRAFT_KEY);
  localStorage.removeItem(TEMPLATE_KEY);
}

export function readTemplateId() {
  try {
    return localStorage.getItem(TEMPLATE_KEY) || "granada-dia";
  } catch {
    return "granada-dia";
  }
}

export async function loadContent() {
  const draft = readDraft();
  if (draft) return draft;
  const res = await fetch(new URL("./content.json", import.meta.url));
  if (!res.ok) throw new Error("No se pudo cargar content.json");
  return res.json();
}

function getPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function bind(data, root = document) {
  root.querySelectorAll("[data-bind]").forEach((el) => {
    const value = getPath(data, el.getAttribute("data-bind"));
    if (value == null) return;
    if (el.tagName === "IMG") {
      if (typeof value === "string") el.src = value;
      return;
    }
    el.textContent = String(value);
  });

  root.querySelectorAll("[data-bind-href]").forEach((el) => {
    const value = getPath(data, el.getAttribute("data-bind-href"));
    if (value == null) return;
    el.setAttribute("href", String(value));
  });

  const hours = root.querySelector("[data-hours]");
  if (hours && Array.isArray(data.shop?.hours)) {
    hours.innerHTML = data.shop.hours
      .map(
        (row) =>
          `<div class="hours-row"><span>${escapeHtml(row.days)}</span><strong>${escapeHtml(row.time)}</strong></div>`
      )
      .join("");
  }

  const menu = root.querySelector("[data-menu]");
  if (menu && Array.isArray(data.shop?.menu)) {
    menu.innerHTML = data.shop.menu
      .map(
        (item) => `<article class="menu-item">
          <div class="menu-item__text">
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.desc)}</p>
          </div>
          <p class="menu-item__price">${escapeHtml(item.price)}</p>
        </article>`
      )
      .join("");
  }

  const year = root.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function withLinks(data) {
  const shop = data.shop;
  return {
    ...data,
    telHref: `tel:${shop.phone}`,
    waHref: `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(
      `Hola ${shop.name}, os escribo desde vuestra web.`
    )}`,
    mapsHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${shop.address}, ${shop.city}`
    )}`,
  };
}

export async function boot() {
  try {
    const data = await loadContent();
    bind(withLinks(data));
  } catch (error) {
    console.error(error);
  }
}

// Only auto-hydrate template pages (not the panel, which imports these helpers).
if (document.querySelector("[data-bind]")) {
  boot();
}
