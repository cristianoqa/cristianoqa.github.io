import {
  clearDraft,
  readDraft,
  readTemplateId,
  writeDraft
} from "../motor.js";

const DEFAULT_CONTENT_URL = "../content.json";
const CATALOG_URL = "../catalog.json";

const form = document.getElementById("shop-form");
const templateSelect = document.getElementById("templateId");
const hoursList = document.getElementById("hours-list");
const menuList = document.getElementById("menu-list");
const statusEl = document.getElementById("status");
const preview = document.getElementById("preview");
const previewLabel = document.getElementById("preview-label");

let catalog = [];

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.style.color = isError ? "#b42318" : "#0f6b5c";
}

function hourRow(item = { days: "", time: "" }) {
  const wrap = document.createElement("div");
  wrap.className = "list-block";
  wrap.innerHTML = `
    <div class="row-2">
      <label>Días<input data-field="days" value="${escapeAttr(item.days)}" /></label>
      <label>Horario<input data-field="time" value="${escapeAttr(item.time)}" /></label>
    </div>
    <div class="list-actions">
      <button type="button" class="ghost-btn" data-remove>Quitar</button>
    </div>
  `;
  wrap.querySelector("[data-remove]").addEventListener("click", () => wrap.remove());
  return wrap;
}

function menuRow(item = { name: "", desc: "", price: "" }) {
  const wrap = document.createElement("div");
  wrap.className = "list-block";
  wrap.innerHTML = `
    <div class="row-2">
      <label>Nombre<input data-field="name" value="${escapeAttr(item.name)}" /></label>
      <label>Precio<input data-field="price" value="${escapeAttr(item.price)}" /></label>
    </div>
    <label>Detalle<input data-field="desc" value="${escapeAttr(item.desc)}" /></label>
    <div class="list-actions">
      <button type="button" class="ghost-btn" data-remove>Quitar</button>
    </div>
  `;
  wrap.querySelector("[data-remove]").addEventListener("click", () => wrap.remove());
  return wrap;
}

function escapeAttr(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function readList(container, fields) {
  return [...container.children]
    .map((row) => {
      const item = {};
      for (const field of fields) {
        item[field] = row.querySelector(`[data-field="${field}"]`)?.value?.trim() ?? "";
      }
      return item;
    })
    .filter((item) => Object.values(item).some(Boolean));
}

function fillForm(shop) {
  for (const key of [
    "name",
    "category",
    "city",
    "address",
    "phone",
    "phoneDisplay",
    "whatsapp",
    "tagline",
    "story"
  ]) {
    const el = document.getElementById(key);
    if (el) el.value = shop[key] ?? "";
  }
  hoursList.replaceChildren(
    ...(shop.hours?.length ? shop.hours : [{ days: "", time: "" }]).map(hourRow)
  );
  menuList.replaceChildren(
    ...(shop.menu?.length ? shop.menu : [{ name: "", desc: "", price: "" }]).map(menuRow)
  );
}

function collectDocument() {
  return {
    shop: {
      name: document.getElementById("name").value.trim(),
      category: document.getElementById("category").value.trim(),
      city: document.getElementById("city").value.trim(),
      address: document.getElementById("address").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      phoneDisplay: document.getElementById("phoneDisplay").value.trim(),
      whatsapp: document.getElementById("whatsapp").value.replace(/\D/g, ""),
      tagline: document.getElementById("tagline").value.trim(),
      story: document.getElementById("story").value.trim(),
      hours: readList(hoursList, ["days", "time"]),
      menu: readList(menuList, ["name", "desc", "price"])
    }
  };
}

function previewUrl(templateId) {
  return `../${templateId}/`;
}

function refreshPreview(templateId) {
  const url = `${previewUrl(templateId)}?preview=${Date.now()}`;
  preview.src = url;
  const entry = catalog.find((item) => item.id === templateId);
  previewLabel.textContent = entry ? `${entry.name} · ${entry.vibe}` : templateId;
}

function saveAndPreview({ openTab = false } = {}) {
  const templateId = templateSelect.value;
  const data = collectDocument();
  if (!templateId) {
    setStatus("Elige una plantilla.", true);
    return;
  }
  if (!data.shop.name || !data.shop.story) {
    setStatus("Completa al menos el nombre y el texto de la tienda.", true);
    return;
  }
  try {
    writeDraft(data, templateId);
  } catch (error) {
    console.error(error);
    setStatus("No se pudo guardar el borrador en este navegador.", true);
    return;
  }
  setStatus("Borrador guardado en este navegador. La vista previa usa esos datos.");
  refreshPreview(templateId);
  if (openTab) {
    window.open(previewUrl(templateId), "_blank", "noopener,noreferrer");
  }
}

async function loadCatalog() {
  const res = await fetch(CATALOG_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("No se pudo cargar el catálogo de plantillas.");
  catalog = await res.json();
  templateSelect.replaceChildren(
    ...catalog.map((item) => {
      const opt = document.createElement("option");
      opt.value = item.id;
      opt.textContent = `${item.name} — ${item.for}`;
      return opt;
    })
  );
}

async function loadInitialContent() {
  const draft = readDraft();
  const savedTemplate = readTemplateId();
  if (draft?.shop) {
    fillForm(draft.shop);
    if (catalog.some((item) => item.id === savedTemplate)) {
      templateSelect.value = savedTemplate;
    }
    setStatus("Se ha cargado el borrador guardado en este navegador.");
    return templateSelect.value;
  }
  const res = await fetch(DEFAULT_CONTENT_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("No se pudo cargar content.json de ejemplo.");
  const content = await res.json();
  fillForm(content.shop);
  setStatus("Datos de ejemplo cargados. Cámbialos y pulsa Guardar y ver.");
  return templateSelect.value;
}

document.getElementById("add-hour").addEventListener("click", () => {
  hoursList.append(hourRow());
});

document.getElementById("add-menu").addEventListener("click", () => {
  menuList.append(menuRow());
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  saveAndPreview();
});

document.getElementById("open-tab").addEventListener("click", () => {
  saveAndPreview({ openTab: true });
});

document.getElementById("download-json").addEventListener("click", () => {
  const data = collectDocument();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "content.json";
  a.click();
  URL.revokeObjectURL(url);
  setStatus("JSON descargado. Misma forma que usa el motor de plantillas.");
});

document.getElementById("reset-draft").addEventListener("click", async () => {
  clearDraft();
  const res = await fetch(DEFAULT_CONTENT_URL, { cache: "no-store" });
  fillForm((await res.json()).shop);
  templateSelect.selectedIndex = 0;
  setStatus("Borrador borrado. Datos de ejemplo restaurados.");
  refreshPreview(templateSelect.value);
});

templateSelect.addEventListener("change", () => {
  writeDraft(collectDocument(), templateSelect.value);
  refreshPreview(templateSelect.value);
  setStatus("Plantilla cambiada. Mismos datos, otro estilo.");
});

try {
  await loadCatalog();
  const templateId = await loadInitialContent();
  refreshPreview(templateId);
} catch (error) {
  console.error(error);
  setStatus(error.message || "No se pudo iniciar el panel.", true);
}
