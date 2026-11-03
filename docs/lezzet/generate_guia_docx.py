# -*- coding: utf-8 -*-
"""Generate LEZZET commercial guide DOCX — plain language for restaurant owners."""
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from pathlib import Path

doc = Document()

for section in doc.sections:
    section.top_margin = Cm(1.8)
    section.bottom_margin = Cm(1.8)
    section.left_margin = Cm(2)
    section.right_margin = Cm(2)


def set_run_font(run, size=11, bold=False, color=None):
    run.font.name = "Calibri"
    run._element.rPr.rFonts.set(qn("w:eastAsia"), "Calibri")
    run.font.size = Pt(size)
    run.bold = bold
    if color:
        run.font.color.rgb = color


def add_h(text, level=1):
    p = doc.add_heading(text, level=level)
    for run in p.runs:
        set_run_font(
            run,
            size=16 if level == 1 else (13 if level == 2 else 12),
            bold=True,
            color=RGBColor(0x7F, 0x1D, 0x1D) if level == 1 else RGBColor(0x1C, 0x19, 0x17),
        )
    return p


def add_p(text, bold=False, size=11, space_after=6):
    p = doc.add_paragraph()
    run = p.add_run(text)
    set_run_font(run, size=size, bold=bold)
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.space_before = Pt(0)
    return p


def add_bullets(items):
    for item in items:
        p = doc.add_paragraph(style="List Bullet")
        run = p.add_run(item)
        set_run_font(run, size=11)
        p.paragraph_format.space_after = Pt(3)


def add_table(headers, rows):
    table = doc.add_table(rows=1 + len(rows), cols=len(headers))
    table.style = "Table Grid"
    for i, h in enumerate(headers):
        cell = table.rows[0].cells[i]
        cell.text = ""
        run = cell.paragraphs[0].add_run(h)
        set_run_font(run, size=10, bold=True, color=RGBColor(0x7F, 0x1D, 0x1D))
    for r_i, row in enumerate(rows):
        for c_i, val in enumerate(row):
            cell = table.rows[r_i + 1].cells[c_i]
            cell.text = ""
            run = cell.paragraphs[0].add_run(val)
            set_run_font(run, size=10)
    doc.add_paragraph()


# ---------------------------------------------------------------------------
title = doc.add_paragraph()
title.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = title.add_run("PROPUESTA PARA LEZZET")
set_run_font(r, size=18, bold=True, color=RGBColor(0x7F, 0x1D, 0x1D))

sub = doc.add_paragraph()
sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
r = sub.add_run(
    "Página web del restaurante + servicio de actualización mensual\n"
    "Explicado en lenguaje claro (sin tecnicismos)\n"
    "LEZZET · Móstoles · Flow Home Apps · Octubre 2026"
)
set_run_font(r, size=11, color=RGBColor(0x57, 0x53, 0x4E))

add_p(
    "Este documento sirve para enseñárselo al propietario en la reunión "
    "o para que Cristiano lo tenga a mano y explique cada punto sin dudar. "
    "Todo está escrito como se lo dirías a alguien que no trabaja en informática.",
    size=10,
)

# ---------------------------------------------------------------------------
add_h("1. De qué va esta propuesta (en una frase)", 1)
add_p(
    "Os hacemos una página web propia del restaurante, pensada sobre todo para el móvil, "
    "donde la gente vea la carta, las opiniones de Google, cómo llegar, y pueda pedir mesa "
    "por WhatsApp. Vosotros no tenéis que “entrar en un programa”: los cambios me los "
    "mandáis por WhatsApp y yo los publico."
)
add_p("Demo para enseñar (aún no es la web oficial):", bold=True)
add_p("https://cristianoqa.github.io/lezzet/")

add_h("1.1 Situación actual de LEZZET", 2)
add_bullets(
    [
        "Local: C. Camino de Leganés, 16, 28937 Móstoles (Madrid).",
        "Teléfono: +34 919 95 25 30.",
        "Instagram: @restaurante.turco.",
        "En Google tenéis muy buena nota (~4,9), pero no hay una web vuestra.",
        "La gente os encuentra sobre todo en Google Maps, Just Eat o Uber Eats "
        "(esas apps se quedan una comisión de cada pedido).",
    ]
)
add_p(
    "La idea: tener un sitio vuestro. Quien busque “turco Móstoles” puede entrar a vuestra web, "
    "ver platos y precios, y reservar mesa por WhatsApp — sin pasar solo por Just Eat."
)

# ---------------------------------------------------------------------------
add_h("2. Qué verá el cliente en la web (recorrido)", 1)
add_p(
    "Cuando abras la demo en el móvil del dueño, enseña en este orden y di lo que pone entre comillas:"
)
add_bullets(
    [
        "Portada con foto del local — «Así os ve quien os busca en el móvil.»",
        "Carta / platos destacados con precios — «Aquí controláis lo que se ve, no solo Just Eat.»",
        "Opiniones de Google — «La gente confía en lo que ya os han escrito.»",
        "Botón de reserva / eventos por WhatsApp — «Pulsa y os escribe al móvil del restaurante.»",
        "Horario, dirección, teléfono y mapa — «Para que no tengan que preguntar.»",
        "Instagram — «Enlazado a vuestra cuenta actual.»",
    ]
)
add_p(
    "Pregunta clave en la reunión: «¿Los precios de sala son estos, o Just Eat los tiene distintos?» "
    "Así evitamos publicar precios equivocados."
)

# ---------------------------------------------------------------------------
add_h("3. Qué incluye el pago único de puesta en marcha", 1)
add_p(
    "Es el trabajo de crear y publicar la web la primera vez. Se paga una sola vez "
    "(no es la cuota mensual)."
)
add_h("3.1 Qué recibís", 2)
add_bullets(
    [
        "Web que se ve bien en el móvil (la mayoría de clientes buscan así).",
        "Foto grande del local en la portada.",
        "Carta destacada (platos estrella y precios). Si queréis toda la carta, se puede ampliar.",
        "Bloque con la nota de Google y enlace para dejar reseña.",
        "Botón para escribir por WhatsApp (reservas o eventos).",
        "Horarios, dirección, teléfono y mapa para llegar.",
        "Enlace a Instagram.",
        "Nombre de internet propio (ejemplo: lezzetmostoles.es) — el primer año va incluido "
        "si lo acordamos en el precio de puesta en marcha. Es la dirección que la gente escribe "
        "en el navegador, como el “apellido” de vuestra web.",
        "La web queda publicada con candado de seguridad (el candadito del navegador).",
        "Que Google entienda mínimamente quiénes sois (nombre + Móstoles + enlaces a Google "
        "e Instagram). No prometemos “salir los primeros” en Google.",
        "La primera semana después de publicar: ajustamos textos, precios y fotos que me enviéis.",
        "Al publicar de verdad, se quita el aviso de “esto es solo una propuesta”.",
    ]
)

add_h("3.2 Qué NO incluye ese pago (salvo que lo pactemos aparte)", 2)
add_bullets(
    [
        "Pedidos a domicilio desde vuestra web (como Just Eat). Eso sería una fase posterior.",
        "Aplicación para instalar en el móvil (App Store / Play Store).",
        "Traducir toda la web a varios idiomas.",
        "Caja, facturas o control de stock de cocina.",
        "Sesión de fotos de un fotógrafo profesional (si la queréis, la paga el local al fotógrafo; yo puedo ayudar a coordinar).",
        "Anuncios de pago en Instagram o Google (el dinero de los anuncios lo pone el restaurante).",
        "Garantía de ser el nº 1 en Google.",
    ]
)

# ---------------------------------------------------------------------------
add_h("4. Los planes mensuales (lo más importante)", 1)
add_p(
    "La web se queda vieja si nadie actualiza precios, platos o fotos. "
    "La cuota mensual es el servicio de “vosotros me pedís el cambio por WhatsApp y yo lo publico”. "
    "No hace falta que aprendáis ningún programa.",
    bold=True,
)
add_p(
    "Compromiso recomendado: mínimo 3 meses (así da tiempo a ver si os encaja el ritmo). "
    "Después se puede seguir mes a mes."
)

add_h("4.1 Comparativa sencilla de los tres planes", 2)
add_table(
    ["", "Esencial — 39 €/mes", "Crecimiento — 69 €/mes", "Pro local — 99–129 €/mes"],
    [
        [
            "Para quién",
            "Queréis web limpia y pocos cambios",
            "Queréis más movimiento online",
            "Queréis crecer también con anuncios",
        ],
        [
            "Cambios al mes",
            "Hasta 2 tandas",
            "Hasta 6 tandas",
            "Prioridad (más tandas + anuncios)",
        ],
        [
            "Qué hago yo",
            "Actualizo lo que me mandéis",
            "Lo mismo + 1 idea de Instagram + mirar ficha Google",
            "Lo de Crecimiento + ayudaros con anuncios (presupuesto de ads aparte)",
        ],
        [
            "Cómo pedís el cambio",
            "WhatsApp",
            "WhatsApp",
            "WhatsApp",
        ],
        [
            "Tiempo habitual",
            "24–48 h laborables",
            "24–48 h laborables",
            "Prioridad en laborables",
        ],
        [
            "Informe",
            "No",
            "Un resumen corto por WhatsApp 1 vez al mes",
            "Informe mensual de 1 página",
        ],
    ],
)
add_p(
    "Para LEZZET lo habitual es empezar por Esencial (39 €) o Crecimiento (69 €). "
    "Pro local solo si preguntan por anuncios de pago.",
    bold=True,
)

add_h("4.2 Plan Esencial (39 €/mes) — qué pasa de verdad", 2)
add_p("Incluye:")
add_bullets(
    [
        "Hasta 2 “tandas” de cambios al mes (ver qué es una tanda en el punto 4.4).",
        "Ejemplos: cambiar precios de varios platos; añadir o quitar un plato; cambiar horario; "
        "cambiar teléfono; subir fotos nuevas que me enviéis; corregir un enlace que no abre.",
        "Yo reviso que la web siga abierta y visible.",
        "Si algo se rompe (enlace, mapa, WhatsApp), lo arreglo.",
        "Os respondo en 24–48 horas en días laborables.",
    ]
)
add_p("Ejemplo de un mes típico con Esencial:")
add_bullets(
    [
        "Semana 1: me mandáis «sube el adana a 13,50 € y quita el plato X» → 1 tanda.",
        "Semana 3: me mandáis 4 fotos nuevas de platos → 1 tanda.",
        "Ese mes ya habéis usado las 2 tandas. Si hace falta otra, lo hablamos (extra o pasar a Crecimiento).",
    ]
)
add_p("No incluye en Esencial: ideas de Instagram, revisar a fondo la ficha de Google, ni anuncios.")

add_h("4.3 Plan Crecimiento (69 €/mes) — qué pasa de verdad", 2)
add_p("Incluye todo lo del Esencial, y además:")
add_bullets(
    [
        "Hasta 6 tandas de cambios al mes (más margen si cambiáis carta a menudo).",
        "1 vez al mes: os propongo un texto corto / idea para Instagram (vosotros publicáis o me pedís ayuda).",
        "Revisión ligera de vuestra ficha de Google (horarios, fotos, descripción) — no es una agencia de marketing completa.",
        "Recordatorio amable para pedir reseñas a clientes contentos.",
        "1 mensaje al mes por WhatsApp resumiendo qué se ha actualizado.",
    ]
)
add_p("Ejemplo de un mes típico con Crecimiento:")
add_bullets(
    [
        "Varias actualizaciones de carta y fotos a lo largo del mes (hasta 6 tandas).",
        "Os paso una frase lista para Instagram sobre un plato estrella.",
        "Compruebo que en Google el horario coincida con la web.",
    ]
)

add_h("4.4 Plan Pro local (99–129 €/mes) — solo si preguntan", 2)
add_p(
    "Es Crecimiento + ayuda con anuncios de pago (Instagram/Google). "
    "El dinero que se gasta en los anuncios lo pone el restaurante aparte "
    "(ejemplo: 5–10 €/día). Yo ayudo a montarlos y os paso un resumen mensual sencillo "
    "(visitas, clics, si hubo más reservas)."
)
add_p("No lo ofrezcas de entrada en LEZZET; solo si el dueño pregunta por “publicidad”.")

add_h("4.5 Qué cuenta como “1 tanda / 1 cambio”", 2)
add_p(
    "Para que no haya malentendidos: una “tanda” es un mensaje vuestro con una petición "
    "agrupada, no cada plato suelto."
)
add_bullets(
    [
        "Cambiar el precio de uno o varios platos en el mismo WhatsApp = 1 tanda.",
        "Enviar hasta unas 5 fotos nuevas en el mismo WhatsApp = 1 tanda.",
        "Actualizar horario o teléfono = 1 tanda.",
        "Añadir un plato nuevo (nombre + precio + foto) = 1 tanda.",
        "NO entra en la cuota (se presupuesta aparte): rediseñar toda una sección, crear otra página, "
        "traducir idiomas, montar anuncios (salvo plan Pro), sesión de fotos profesional.",
    ]
)

add_h("4.6 ¿Quién actualiza la web: vosotros o yo?", 2)
add_p("Recomendación clara: que lo lleve yo con la cuota. No un “panel” para que el local entre a editar.", bold=True)
add_table(
    ["Opción", "Ventajas", "Inconvenientes"],
    [
        [
            "Yo actualizo (cuota mensual)",
            "Vosotros solo mandáis WhatsApp; la web no se estropea; cobráis tranquilidad",
            "Dependéis de enviarme los cambios (precios/fotos)",
        ],
        [
            "Panel para que editáis vosotros",
            "Suena a “autonomía”",
            "Cuesta más montarlo; suele liarse; dejan de pagar cuota; la web se ve mal al poco tiempo",
        ],
    ],
)
add_p("Frase lista para decir:")
add_p(
    "«Puedo dejarte un panel para subir fotos tú, pero la mayoría de restaurantes no lo usan "
    "y la web se queda desactualizada. Lo que mejor funciona: me mandáis por WhatsApp la foto "
    "o el precio nuevo y yo lo publico en 24–48 h. Eso va en la cuota mensual.»",
    bold=True,
)

# ---------------------------------------------------------------------------
add_h("5. Precios de puesta en marcha (pago único)", 1)
add_table(
    ["Opción", "Qué incluye (en castellano claro)", "Precio"],
    [
        [
            "Recomendada",
            "Web completa + nombre de internet el 1er año + publicación + WhatsApp + Instagram + Google + 1 semana de ajustes",
            "450 €",
        ],
        [
            "Lanzamiento (si dudan)",
            "Lo mismo que la recomendada, precio de cierre",
            "399 €",
        ],
        [
            "Amplia",
            "Lo recomendado + carta completa online + código QR para la mesa + una ronda extra de fotos",
            "550–650 €",
        ],
    ],
)
add_p(
    "Cómo presentar: empieza por 450 €. Si se frenan por dinero, ofrece 399 € sin quitar cosas.",
    bold=True,
)

add_h("5.1 Extras opcionales (una sola vez)", 2)
add_table(
    ["Extra", "Para qué sirve", "Precio orientativo"],
    [
        [
            "Carta completa online",
            "Todas las secciones de la carta en la web, no solo destacados",
            "80–150 € (o regalo si firman Crecimiento 3 meses)",
        ],
        [
            "QR de mesa",
            "Pegatina/tarjeta: el cliente escanea y abre la web o la carta",
            "30–50 € (diseño listo para imprimir)",
        ],
        [
            "Poner al día la ficha de Google (1 vez)",
            "Fotos, horarios, descripción y primeros avisos en Google",
            "80 €",
        ],
        [
            "Botones Just Eat / Uber Eats",
            "Enlaces a vuestras fichas actuales",
            "Incluido en la puesta en marcha",
        ],
        [
            "Fotos profesionales",
            "Sesión con fotógrafo",
            "Lo paga el local al fotógrafo",
        ],
        [
            "Renovar el nombre de internet (año 2 en adelante)",
            "Seguir siendo dueños de lezzetmostoles.es (o el que elijáis)",
            "Unos 10–15 €/año",
        ],
    ],
)

add_h("5.2 Ejemplos de oferta cerrada (números redondos)", 2)
add_bullets(
    [
        "450 € de puesta en marcha + Esencial 39 € × 3 meses → el primer mes pagáis 489 €; luego 39 €/mes.",
        "399 € de lanzamiento + el primer mes de Esencial gratis → el primer mes 399 €; luego 39 €/mes.",
        "450 € + Crecimiento 69 € (primer mes de cuota gratis) → el primer mes 450 €; luego 69 €/mes.",
    ]
)

# ---------------------------------------------------------------------------
add_h("6. Cómo explicar los precios en voz alta", 1)
add_p(
    "«La puesta en marcha son 450 euros: es crear la web, el nombre en internet y dejarlo todo listo. "
    "Para que la carta y las fotos no se queden viejas: 39 euros al mes si hacéis pocos cambios "
    "(hasta 2 tandas), o 69 si queréis más movimiento (hasta 6) y un poco de apoyo en Instagram y Google. "
    "Vosotros me mandáis los cambios por WhatsApp y yo los publico. Sin programas raros. "
    "¿Empezamos por el de 39 o el de 69?»"
)
add_p("Si frena por dinero:")
add_p(
    "«Dejamos la web en 399 euros de lanzamiento y el primer mes del plan Esencial gratis.»",
    bold=True,
)

# ---------------------------------------------------------------------------
add_h("7. Cómo llevar la reunión (10–15 minutos)", 1)
add_h("7.1 Orden", 2)
add_bullets(
    [
        "Abrir la demo en EL MÓVIL del dueño (no en tu portátil).",
        "Frase de apertura: «Hoy estás sobre todo en Google y Just Eat. Quien busca turco en Móstoles no tiene vuestra web. Esto es cómo os verían.»",
        "Recorrer la demo (sección 2).",
        "Preguntar precios de sala vs Just Eat.",
        "Pedir 8–12 fotos buenas por WhatsApp (fachada, parrilla, platos, sala).",
        "Cerrar con precio de puesta en marcha + plan mensual (sección 4 y 5).",
    ]
)
add_h("7.2 Preguntas para cerrar", 2)
add_bullets(
    [
        "«¿Te lo dejo publicado con vuestro nombre de internet esta semana?»",
        "«¿Preferís que yo actualice la carta cada mes, o un panel? (Recomiendo que lo lleve yo.)»",
        "«¿Empezamos por Esencial 39 €/mes o Crecimiento 69 €/mes?»",
    ]
)
add_h("7.3 Qué no decir", 2)
add_bullets(
    [
        "No menciones HTML, código, servidores, GitHub, “IA”, etc.",
        "No prometas “ser el primero en Google” ni “llenar el local”.",
        "Habla de: más reservas, imagen seria, WhatsApp directo, menos dependencia solo de Just Eat.",
    ]
)

# ---------------------------------------------------------------------------
add_h("8. Mensajes listos para WhatsApp / Instagram", 1)

add_h("8.1 Primera toma de contacto", 2)
add_p(
    "Hola 👋 Soy Cristiano (Flow Home Apps).\n\n"
    "He preparado una propuesta de página web para LEZZET (versión demo, aún no es oficial):\n"
    "👉 https://cristianoqa.github.io/lezzet/\n\n"
    "Está pensada para móvil: carta, reseñas de Google, reserva por WhatsApp, horarios, mapa e Instagram.\n\n"
    "¿Te viene bien que hablemos 10 minutos esta semana para enseñártela y ver si te encaja "
    "publicarla con vuestro dominio?\n"
    "Puedo pasarme al local o lo vemos por llamada/WhatsApp. ¡Gracias!"
)

add_h("8.2 Después de ver la demo (con precios)", 2)
add_p(
    "Hola,\n\n"
    "Como hablamos, la propuesta para LEZZET quedaría así:\n\n"
    "• Puesta en marcha: 450 € (web completa + nombre de internet el 1er año + dejarlo publicado "
    "+ ajustes la 1ª semana)\n"
    "• Actualización mensual: 39 €/mes (hasta 2 cambios: precios, platos, fotos, horarios) "
    "o 69 €/mes si preferís más movimiento (hasta 6 cambios + un poco de apoyo en Instagram/Google)\n\n"
    "Vosotros me enviáis los cambios por WhatsApp y yo los publico en 24–48 h.\n\n"
    "Si os encaja, esta semana dejamos el nombre de internet y las fotos y la publicamos "
    "sin el aviso de “propuesta”.\n"
    "¿Lo vemos?"
)

add_h("8.3 Recordatorio (si no contestan en 3–4 días)", 2)
add_p(
    "Hola de nuevo 🙂 ¿Pudisteis mirar la demo de LEZZET?\n"
    "https://cristianoqa.github.io/lezzet/\n\n"
    "Si queréis, os dejo 10 min esta semana sin compromiso. Un saludo."
)

# ---------------------------------------------------------------------------
add_h("9. Lista del día de la reunión", 1)
add_bullets(
    [
        "Abrir la demo en su móvil",
        "Mostrar Instagram ya enlazado",
        "Pedir 8–12 fotos (fachada, parrilla, platos, sala)",
        "Confirmar precios de SALA (Just Eat puede ser distinto)",
        "Anotar el nombre de internet que prefieren (ej. lezzetmostoles.es)",
        "Enviar esta oferta por WhatsApp el mismo día",
        "Acordar forma de pago (Bizum / transferencia / enlace de cobro)",
        "Acordar fecha de publicación",
    ]
)

add_h("10. Después del “sí” — pasos", 1)
add_bullets(
    [
        "Cobrar la puesta en marcha (o 50 % al empezar y 50 % al publicar).",
        "Registrar el nombre de internet y quitar el aviso de “propuesta”.",
        "Sustituir fotos de demo por fotos reales del local.",
        "Ajustar precios de sala.",
        "Activar la cuota mensual (Bizum cada mes o recordatorio).",
        "Entregar la dirección final de la web y, si quieren, el QR de mesa.",
    ]
)

# ---------------------------------------------------------------------------
add_h("11. Mini glosario (si preguntan “¿eso qué es?”)", 1)
add_table(
    ["Si dicen / leen…", "Explícalo así"],
    [
        ["Dominio / nombre de internet", "La dirección tipo lezzetmostoles.es que la gente escribe para entrar"],
        ["Hosting / servidor", "El sitio donde “vive” la web para que esté abierta 24 h"],
        ["HTTPS / candado", "Que la visita sea segura; el navegador muestra el candadito"],
        ["SEO", "Ayudar a que Google entienda el nombre del local y Móstoles (sin garantizar el puesto 1)"],
        ["Landing / web", "La página del restaurante (una sola página clara, pensada para móvil)"],
        ["Setup / puesta en marcha", "El trabajo y el pago de crear y publicar la web la primera vez"],
        ["Cuota / mantenimiento", "Pago mensual para que yo actualice lo que me mandéis por WhatsApp"],
        ["Tanda / cambio", "Una petición agrupada por WhatsApp (varios precios juntos = 1 tanda)"],
        ["QR", "Cuadradito para escanear con el móvil y abrir la web o la carta"],
        ["Ficha de Google", "Lo que sale en Google Maps cuando buscan el restaurante"],
        ["Panel / CMS", "Programa para que el local edite la web solo — no lo recomendamos al principio"],
        ["Ads / anuncios", "Publicidad de pago en Instagram o Google; el presupuesto lo pone el local"],
    ],
)

add_h("12. Resumen en una tabla", 1)
add_table(
    ["Tema", "Decisión / número"],
    [
        ["Demo para enseñar", "https://cristianoqa.github.io/lezzet/"],
        ["Puesta en marcha", "450 € (o 399 € si hay que cerrar)"],
        ["Plan mensual habitual", "39 € Esencial o 69 € Crecimiento"],
        ["Mínimo de cuota", "3 meses"],
        ["¿Panel para el local?", "No ahora — WhatsApp → yo publico"],
        ["Objetivo", "Web propia + reservas WhatsApp + cuota estable"],
    ],
)

add_p("— Fin del documento — Flow Home Apps · Para enseñar o tener a mano en la reunión", size=9)

out1 = Path(r"D:\cristianoqa.github.io\docs\lezzet\Guia-Comercial-LEZZET.docx")
out2 = Path(r"D:\jarvis\outputs\marketing\lezzet\Guia-Comercial-LEZZET.docx")
msg_path = Path(r"D:\cristianoqa.github.io\docs\lezzet\Mensaje-WhatsApp-LEZZET.txt")
out1.parent.mkdir(parents=True, exist_ok=True)
out2.parent.mkdir(parents=True, exist_ok=True)
doc.save(out1)
doc.save(out2)

msg_path.write_text(
    """MENSAJE PARA CITAR AL PROPIETARIO DE LEZZET
============================================

--- PRIMERA TOMA DE CONTACTO ---

Hola 👋 Soy Cristiano (Flow Home Apps).

He preparado una propuesta de página web para LEZZET (versión demo, aún no es oficial):
👉 https://cristianoqa.github.io/lezzet/

Está pensada para móvil: carta, reseñas de Google, reserva por WhatsApp, horarios, mapa e Instagram.

¿Te viene bien que hablemos 10 minutos esta semana para enseñártela y ver si te encaja publicarla con vuestro dominio?
Puedo pasarme al local o lo vemos por llamada/WhatsApp. ¡Gracias!

--- DESPUÉS DE VER LA DEMO (CON PRECIOS) ---

Hola,

Como hablamos, la propuesta para LEZZET quedaría así:

• Puesta en marcha: 450 € (web completa + nombre de internet el 1er año + dejarlo publicado + ajustes la 1ª semana)
• Actualización mensual: 39 €/mes (hasta 2 cambios: precios, platos, fotos, horarios) o 69 €/mes si preferís más movimiento (hasta 6 cambios + un poco de apoyo en Instagram/Google)

Vosotros me enviáis los cambios por WhatsApp y yo los publico en 24–48 h.

Si os encaja, esta semana dejamos el nombre de internet y las fotos y la publicamos sin el aviso de “propuesta”.
¿Lo vemos?

--- RECORDATORIO (3–4 DÍAS) ---

Hola de nuevo 🙂 ¿Pudisteis mirar la demo de LEZZET?
https://cristianoqa.github.io/lezzet/

Si queréis, os dejo 10 min esta semana sin compromiso. Un saludo.
""",
    encoding="utf-8",
)

# Clean temp extract if any
extract = Path(r"D:\cristianoqa.github.io\docs\lezzet\_extracted.txt")
if extract.exists():
    extract.unlink()

print(out1)
print(out2)
print(msg_path)
print("docx_bytes", out1.stat().st_size)
