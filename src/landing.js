import { catalogCardVisible } from "./catalog-filter.mjs";

var year = new Date().getFullYear();
var privacy = {
  es: { misiva: "/policies/mensajetexto.html", mypass: "/policies/mypass-es.html", reformapro: "/policies/reformapro-es.html", miravista: "/policies/miravista-es.html", monexa: "/policies/monexa-es.html", lunera: "/policies/lunera-es.html" },
  en: { misiva: "/policies/misiva.html", mypass: "/policies/mypass.html", reformapro: "/policies/reformapro.html", miravista: "/policies/miravista.html", monexa: "/policies/monexa.html", lunera: "/policies/lunera.html" },
  pt: { misiva: "/policies/misiva-pt.html", mypass: "/policies/mypass-pt.html", reformapro: "/policies/reformapro-pt.html", miravista: "/policies/miravista-pt.html", monexa: "/policies/monexa-pt.html", lunera: "/policies/lunera-pt.html" }
};

var mailLink = "<a class=\"font-semibold text-accent underline decoration-accent/40 underline-offset-4\" href=\"mailto:soporte.flowhomeapps@gmail.com\">soporte.flowhomeapps@gmail.com</a>";

var I18N = {
  es: {
    skip: "Saltar al catálogo de apps",
    brandName: "Cristiano · desarrollador independiente",
    navSections: "Secciones",
    navApps: "Apps",
    navServices: "Webs para tiendas",
    navStores: "Tiendas",
    navTrust: "Transparencia",
    navSupport: "Apoyar",
    ctaCatalog: "Ver Catálogo de Apps",
    ctaHeroBusiness: "Webs para tiendas",
    heroChip: "Apps y sistemas",
    heroTitle: "Herramientas inteligentes para automatizar tu día a día.",
    heroBody: "Apps para el día a día, y también webs para tiendas. Hechas con calma por un desarrollador independiente.",
    servicesKicker: "Para negocios",
    servicesTitle: "Sistemas y páginas web",
    servicesBody: "Hago webs para tiendas y sistemas a medida: el proceso, los datos y la herramienta que el negocio necesita.",
    ctaWeb: "Webs para tiendas",
    ctaSystems: "Cuéntame el sistema",
    storesSkip: "Saltar al contenido",
    storesDocTitle: "Webs para tiendas — Flow Home Apps",
    storesDocDesc: "Diseño y publico la web de tu tienda. El dominio queda a tu nombre. El presupuesto te lo digo al escribirme.",
    storesChip: "Webs para tiendas",
    storesHeroTitle: "La página de tu tienda, hecha y publicada.",
    storesHeroBody: "La diseño, la publico y el dominio queda a tu nombre. Horario, productos, mapa y, si lo pides, un botón a tu WhatsApp. Tú no escribes código.",
    ctaQuote: "Pedir presupuesto",
    ctaQuoteAria: "Pedir presupuesto por WhatsApp",
    ctaQuoteEscAria: "Pedir presupuesto del escaparate por WhatsApp",
    ctaQuoteMoreAria: "Pedir presupuesto con más secciones por WhatsApp",
    storesWaHint: "WhatsApp se abre con el mensaje listo.",
    storesPreferMail: "Escribir por correo",
    storesSeePacks: "Ver qué incluye",
    storesExampleChrome: "ejemplo",
    storesExampleAria: "Abrir el ejemplo de página para una cervecería",
    storesExampleCap: "Propuesta para un bar, para ver el tipo de página. No es el sitio oficial.",
    storesExampleOpen: "Abrir el ejemplo",
    storesTemplatesOpen: "Ver 15 plantillas",
    storesTemplatesTitle: "Elige un estilo. El panel es el mismo.",
    storesTemplatesLead: "Hay quince plantillas distintas. Todas se alimentan del mismo contenido: horario, productos, teléfono y WhatsApp. Tú eliges la piel; el dueño actualiza los datos.",
    storesTemplatesCta: "Ver plantillas",
    storesPanelCta: "Probar demo del panel",
    storesPanelNote: "Hay una demo local en el navegador. El panel real (login + 2FA) irá en panel.flowhomeapps.com cuando el staging pase seguridad; todavía no es producción.",
    storesPanelBadge: "Demo + dominio listo",
    storesPanelTitle: "Web con panel",
    storesPanelBody: "Eliges una de las 15 plantillas y editas horario, productos, fotos y fichaje desde un panel con doble factor. Mientras tanto puedes probar la demo; el acceso multi-tienda se entrega al contratar.",
    storesPanelLink: "Abrir demo del panel",
    storesPanelDomain: "panel.flowhomeapps.com (en preparación)",
    storesFaqPanelQ: "¿Ya puedo gestionar la web con el panel?",
    storesFaqPanelA: "Puedes probar la demo: eliges plantilla, editas los datos y ves el resultado. El panel con usuario, varias tiendas y publicación real se activa cuando contratas esa opción.",
    storesDoneTitle: "Qué queda hecho",
    storesDoneMobileTitle: "Primero el móvil",
    storesDoneMobileBody: "Botones grandes y texto legible, sin pellizcar la pantalla.",
    storesDoneDataTitle: "Datos de la tienda",
    storesDoneDataBody: "Horario, productos y mapa. El botón de WhatsApp, si lo pides, abre tu número. Es un enlace, no una lista de clientes.",
    storesDoneOwnTitle: "Queda a tu nombre",
    storesDoneOwnBody: "Dominio y hosting tuyos, más una guía corta para el día a día.",
    storesPacksTitle: "Elige por lo que vendes.",
    storesPacksLead: "Dos alcances. El presupuesto llega en la respuesta, cuando sé páginas, fotos y si quieres mantenimiento.",
    storesPackBasicKicker: "Si cabe en una visita",
    storesPackBasicTitle: "Escaparate",
    storesPackBasicLead: "Horario, lo que vendes y cómo contactarte.",
    storesPackBasicB1: "De una a tres páginas",
    storesPackBasicB2: "Horario, productos y contacto",
    storesPackBasicB3: "Mapa y, si lo quieres, enlace a WhatsApp",
    storesPackBasicB4: "Preparada para publicar",
    storesPackMoreKicker: "Si hay carta o catálogo",
    storesPackMoreTitle: "Tienda con más secciones",
    storesPackMoreLead: "Varias categorías, más texto y el diseño ajustado a tu marca.",
    storesPackMoreB1: "Todo lo del escaparate",
    storesPackMoreB2: "Secciones por categoría",
    storesPackMoreB3: "Fotos y textos ordenados",
    storesPackMoreB4: "Textos revisados contigo antes de publicar",
    storesStepsTitle: "De la consulta a la web publicada.",
    storesStep1Title: "Me escribes",
    storesStep1Body: "Qué vendes, si tienes fotos y si ya hay dominio. El mensaje de WhatsApp ya trae esas líneas.",
    storesStep2Title: "Te digo el alcance",
    storesStep2Body: "Qué alcance corresponde y el presupuesto. Si no encaja, te lo digo en esa misma respuesta.",
    storesStep3Title: "La publico",
    storesStep3Body: "La dejo online y te entrego el acceso. El dominio sigue siendo tuyo.",
    storesAfterKicker: "Después de publicarla",
    storesAfterLead: "Tres caminos. El presupuesto marca cuál encaja.",
    storesOnlyTitle: "Solo la web",
    storesOnlyBody: "Te dejo la página online y una guía corta. Si más adelante cambias el horario, una foto o un texto, lo haces tú con esa guía. Vale si casi no tocas la página.",
    storesMaintTitle: "Web y mantenimiento",
    storesMaintBody: "Te dejo la misma página online. Cuando quieras cambiar una foto, un precio, una oferta o un aviso, me lo dices y lo hago yo. También miro que la página siga abriendo bien.",
    storesFaqTitle: "Antes de escribir.",
    storesFaqPriceQ: "¿Cuándo sé el presupuesto?",
    storesFaqPriceA: "En la respuesta, cuando sé páginas, fotos y si quieres mantenimiento. No publico un precio único porque el alcance cambia de una tienda a otra.",
    storesFaqLeadsQ: "¿Me consigues clientes o una posición en Google?",
    storesFaqLeadsA: "No. Publico la página y te dejo el dominio. No hago anuncios ni te traigo clientes.",
    storesFaqDomainQ: "¿El dominio queda a mi nombre?",
    storesFaqDomainA: "Sí. Dominio y hosting son tuyos. No te dejo atado a una cuenta mía para poder abrir la web.",
    storesFaqTechQ: "¿Tengo que saber de informática?",
    storesFaqTechA: "No. Tú aportas qué vendes y las fotos que tengas. Si quieres el botón de WhatsApp, también el número. Yo monto y publico.",
    storesCustomNote: "Si lo que necesitas no es la web de una tienda, dilo en el mismo mensaje. También hago sistemas a medida.",
    storesCloseTitle: "Pide el presupuesto.",
    storesCloseBody: "Dime qué vendes. Te respondo con qué incluye y cuánto cuesta.",
    storesCopyMail: "Copiar correo",
    storesCopyOk: "Correo copiado.",
    storesCopyFail: "No se pudo copiar. Selecciona la dirección y cópiala a mano.",
    storesWaBase: "Hola. Quisiera un presupuesto para la página web de mi tienda.\n\nA qué se dedica:\nDominio propio: sí / todavía no\nFotos disponibles: sí / todavía no\n\nGracias.",
    storesWaEsc: "Hola. Quisiera un presupuesto para el escaparate web de mi tienda.\n\nA qué se dedica:\nDominio propio: sí / todavía no\nFotos disponibles: sí / todavía no\n\nGracias.",
    storesWaMore: "Hola. Quisiera un presupuesto para una web con carta o catálogo.\n\nA qué se dedica:\nDominio propio: sí / todavía no\nFotos disponibles: sí / todavía no\n\nGracias.",
    storesMailSubject: "Presupuesto para la web de mi tienda",
    catalogKicker: "Catálogo",
    appsTitle: "Apps",
    filterLabel: "Filtrar apps por plataforma",
    filterAll: "Todas",
    filterIos: "iPhone / iOS",
    filterAndroid: "Android",
    filterBusiness: "Para Negocios",
    filterCount: "apps visibles",
    catalogEmpty: "Ninguna app coincide con este filtro.",
    badgeAppStore: "App Store",
    badgeAndroidWeb: "Android en la web",
    ctaMonexaIos: "iPhone — App Store",
    ctaMonexaAndroid: "Android — descargar",
    badgePlayLive: "Google Play",
    ctaMisivaPlay: "Google Play",
    badgeTestFlight: "TestFlight iOS",
    badgeAndroidOnly: "Solo Android",
    misivaLead: "Programa mensajes a WhatsApp y genera el texto con IA (tu propia API key de Gemini). Todo corre en tu móvil.",
    misivaStatus: "Estado Misiva",
    badgeApk: "APK de prueba",
    misivaB1: "Programaciones diarias y recurrentes",
    misivaB2: "Respuestas asistidas con Gemini",
    misivaB3: "Envío automatizado en el dispositivo",
    misivaB4: "Sin subir tus mensajes a nuestros servidores",
    ctaDownload: "Descargar versión de pruebas (.APK)",
    ctaPrivacy: "Ver política de privacidad",
    misivaNote: "En Google Play. Sin versión para iPhone. El APK sigue aquí por si la tienda no abre.",
    mypassEyebrow: "Bóveda de contraseñas",
    mypassLead: "Bóveda cifrada en el dispositivo, Recovery Key, backup, Autofill y sync. Ahora todo incluido, sin paywall.",
    mypassStatus: "Estado MyPass",
    badgePlay: "Próximamente en Google Play",
    mypassB1: "Contraseña maestra solo en tu móvil",
    mypassB2: "Recovery Key + backup cifrado",
    mypassB3: "Autofill Android y TOTP",
    mypassB4: "Sync en la nube incluido (gratis)",
    mypassNote: "También en TestFlight (iOS) y llegará a Google Play. Activa orígenes desconocidos solo para esta app.",
    reformaproEyebrow: "Presupuestos para reformas",
    reformaproLead: "Presupuestos móviles con catálogo, márgenes, impuestos, PDF y envío al cliente desde obra o visita.",
    reformaproStatus: "Estado ReformaPRO",
    reformaproB1: "Catálogo de materiales y servicios",
    reformaproB2: "Presupuestos con IVA, IRPF y margen visible",
    reformaproB3: "PDF, impresión y envío al cliente",
    reformaproB4: "Android APK + PWA iOS (Safari)",
    ctaTryWeb: "Probar ahora (web / PWA)",
    ctaDownloadApk: "Descargar APK (Android)",
    reformaproCtaIos: "iPhone — instalar PWA",
    reformaproIosBadge: "PWA iOS",
    reformaproNote: "iOS: Safari → Compartir → Añadir a pantalla de inicio (reformapro-web-seven.vercel.app). Android: APK build 6.",
    reformaproVersion: "v0.2.0 · build 6",
    trustKicker: "Confianza",
    trustTitle: "Transparencia",
    trustP1: "<strong>¿Por qué descargas directas?</strong> Soy un desarrollador independiente. Publicar en Google Play lleva tiempo de revisión. Mientras tanto ofrezco APKs firmados desde esta página, sin intermediarios.",
    trustP2: "<strong>Monexa</strong> ya está en el App Store. <strong>Misiva</strong> está en Google Play y no tiene versión para iPhone. <strong>Miravista</strong> sigue solo en Android. <strong>Lunera</strong>, <strong>MyPass</strong> y <strong>ReformaPRO</strong> siguen en TestFlight.",
    trustP3: "Sin tienda falsa ni publicidad oculta. Contacto: " + mailLink + ".",
    trustP4: "Las políticas de privacidad de cada app están en el botón de cada tarjeta (y en el pie de página).",
    supportKicker: "Apoyar",
    supportTitle: "Invítame un helado y sigue el desarrollo",
    supportBody: "Las apps son gratuitas y sin anuncios. Una propina voluntaria ayuda a mejorar la IA, el Autofill y las próximas herramientas.",
    ctaKofi: "Ko-fi · Invítame un helado",
    smEyebrow: "Espejo Wi-Fi (navegador)",
    smLead: "Transmite la pantalla del móvil a cualquier Smart TV por Wi-Fi local. QR + PIN. Sin nube y sin anuncios.",
    smStatus: "Estado Miravista",
    smB1: "MJPEG local con PIN de sesión",
    smB2: "QR para abrir en el navegador de la TV",
    smB3: "Calidad 480p / 720p / 1080p",
    smB4: "Sin cuenta ni servidores cloud",
    smNote: "Solo Android (sin iOS). Misma Wi-Fi en móvil y TV. Activa orígenes desconocidos solo para esta app.",
    monexaEyebrow: "Gastos e ingresos compartidos",
    monexaLead: "Controla gastos e ingresos en grupo: categorías, presupuestos, suscripciones y metas. Sincronización en la nube con tu cuenta.",
    monexaStatus: "Estado Monexa",
    monexaB1: "Movimientos y categorías en grupo",
    monexaB2: "Presupuestos, suscripciones y metas",
    monexaB3: "Gasto rápido y análisis mensual",
    monexaB4: "Sin anuncios invasivos",
    monexaNote: "iPhone en el App Store. Android se descarga en esta página, no en Google Play.",
    luneraEyebrow: "Salud menstrual · FemTech",
    luneraLead: "Predicción de ciclo, registro diario, calendario, etapas de vida y IA educativa. Tus datos de salud se quedan en el dispositivo.",
    luneraB1: "Anillo de ciclo + fases",
    luneraB2: "Registro diario offline",
    luneraB3: "Backup JSON cifrado",
    luneraB4: "Modo invitado sin cuenta",
    ctaAndroid: "Android — APK de prueba",
    ctaPwa: "iPhone — Abrir PWA",
    ctaIosMore: "Más opciones iOS",
    footerColPrivacy: "Privacidad",
    footerColSite: "Sitio",
    footerLunera: "Privacidad Lunera",
    footerMiravista: "Privacidad Miravista",
    footerMonexa: "Privacidad Monexa",
    footerMisiva: "Privacidad Misiva",
    footerMypass: "Privacidad MyPass",
    footerReformapro: "Privacidad ReformaPRO",
    footerStores: "Webs para tiendas",
    footerSupport: "Soporte",
    footerCopy: "© " + year + " Flow Home Apps · Hecho con calma, sin prisa de plataforma."
  },
  en: {
    skip: "Skip to app catalog",
    brandName: "Cristiano · independent developer",
    navSections: "Sections",
    navApps: "Apps",
    navServices: "Shop websites",
    navStores: "Stores",
    navTrust: "Trust",
    navSupport: "Support",
    ctaCatalog: "See the app catalog",
    ctaHeroBusiness: "Shop websites",
    heroChip: "Apps and systems",
    heroTitle: "Smart tools to automate your day.",
    heroBody: "Everyday apps, plus websites for local shops. Built calmly by an independent developer.",
    servicesKicker: "For businesses",
    servicesTitle: "Systems and websites",
    servicesBody: "I build shop websites and custom systems: the process, the data and the tool the business needs.",
    ctaWeb: "Shop websites",
    ctaSystems: "Tell me about the system",
    storesSkip: "Skip to content",
    storesDocTitle: "Shop websites — Flow Home Apps",
    storesDocDesc: "I design and publish your shop website. The domain stays in your name. I share the quote when you write to me.",
    storesChip: "Shop websites",
    storesHeroTitle: "Your shop website, built and published.",
    storesHeroBody: "I design it, publish it, and the domain stays in your name. Hours, products, a map, and a WhatsApp button if you want one. You don’t write code.",
    ctaQuote: "Request a quote",
    ctaQuoteAria: "Request a quote on WhatsApp",
    ctaQuoteEscAria: "Request a showcase website quote on WhatsApp",
    ctaQuoteMoreAria: "Request a multi-section website quote on WhatsApp",
    storesWaHint: "WhatsApp opens with the message ready.",
    storesPreferMail: "Write by email",
    storesSeePacks: "See what’s included",
    storesExampleChrome: "example",
    storesExampleAria: "Open the sample page for a local bar",
    storesExampleCap: "A sample for a bar, to show the kind of page. Not the official site.",
    storesExampleOpen: "Open the example",
    storesTemplatesOpen: "See 15 templates",
    storesTemplatesTitle: "Pick a look. The panel stays the same.",
    storesTemplatesLead: "Fifteen different templates. All use the same content: hours, products, phone and WhatsApp. You choose the skin; the owner updates the data.",
    storesTemplatesCta: "Browse templates",
    storesPanelCta: "Try the panel demo",
    storesPanelNote: "There is a local browser demo. The real panel (login + 2FA) will live at panel.flowhomeapps.com once staging passes security; it is not production yet.",
    storesPanelBadge: "Demo + domain ready",
    storesPanelTitle: "Website with panel",
    storesPanelBody: "Pick one of 15 templates and edit hours, products, photos and clock-in from a panel with two-factor auth. Try the demo for now; multi-shop access ships when you book.",
    storesPanelLink: "Open panel demo",
    storesPanelDomain: "panel.flowhomeapps.com (coming soon)",
    storesFaqPanelQ: "Can I already manage the site with the panel?",
    storesFaqPanelA: "You can try the demo: pick a template, edit the data and see the result. The panel with login, several shops and real publishing activates when you book that option.",
    storesDoneTitle: "What’s included",
    storesDoneMobileTitle: "Mobile first",
    storesDoneMobileBody: "Large buttons and readable text—no pinching the screen.",
    storesDoneDataTitle: "Shop details",
    storesDoneDataBody: "Hours, products and a map. The WhatsApp button, if you ask for it, opens your number. It’s a link, not a client list.",
    storesDoneOwnTitle: "In your name",
    storesDoneOwnBody: "Domain and hosting are yours, plus a short guide for day-to-day use.",
    storesPacksTitle: "Choose by what you sell.",
    storesPacksLead: "Two scopes. The quote comes in the reply once I know pages, photos and whether you want maintenance.",
    storesPackBasicKicker: "If one visit covers it",
    storesPackBasicTitle: "Showcase",
    storesPackBasicLead: "Hours, what you sell and how to reach you.",
    storesPackBasicB1: "One to three pages",
    storesPackBasicB2: "Hours, products and contact",
    storesPackBasicB3: "Map and, if you want, a WhatsApp link",
    storesPackBasicB4: "Ready to publish",
    storesPackMoreKicker: "If you have a menu or catalog",
    storesPackMoreTitle: "Shop with more sections",
    storesPackMoreLead: "Several categories, more copy and a design matched to your brand.",
    storesPackMoreB1: "Everything in the showcase",
    storesPackMoreB2: "Sections by category",
    storesPackMoreB3: "Photos and copy organised",
    storesPackMoreB4: "Copy reviewed with you before publishing",
    storesStepsTitle: "From the enquiry to a live website.",
    storesStep1Title: "You write to me",
    storesStep1Body: "What you sell, whether you have photos and a domain. The WhatsApp message already has those lines.",
    storesStep2Title: "I confirm the scope",
    storesStep2Body: "Which scope fits and the quote. If it isn’t a match, I say so in that same reply.",
    storesStep3Title: "I publish it",
    storesStep3Body: "I put it online and hand you access. The domain stays yours.",
    storesAfterKicker: "After it’s published",
    storesAfterLead: "Three paths. The quote shows which one fits.",
    storesOnlyTitle: "Website only",
    storesOnlyBody: "I leave the page online and a short guide. Later, if you change opening hours, a photo or a line of text, you do it yourself with that guide. Best if you barely touch the page.",
    storesMaintTitle: "Website and maintenance",
    storesMaintBody: "I leave the same page online. When you want to change a photo, a price, an offer or a notice, you tell me and I do it. I also check the page still opens properly.",
    storesFaqTitle: "Before you write.",
    storesFaqPriceQ: "When do I get the quote?",
    storesFaqPriceA: "In the reply, once I know pages, photos and whether you want maintenance. I don’t publish a single price because scope changes from shop to shop.",
    storesFaqLeadsQ: "Do you get me clients or a Google ranking?",
    storesFaqLeadsA: "No. I publish the page and leave you the domain. I don’t run ads or bring you clients.",
    storesFaqDomainQ: "Does the domain stay in my name?",
    storesFaqDomainA: "Yes. Domain and hosting are yours. You’re not locked to an account of mine just to open the site.",
    storesFaqTechQ: "Do I need to know tech?",
    storesFaqTechA: "No. You bring what you sell and the photos you have. If you want the WhatsApp button, also the number. I build and publish.",
    storesCustomNote: "If you need something other than a shop website, say so in the same message. I also build custom systems.",
    storesCloseTitle: "Request your quote.",
    storesCloseBody: "Tell me what you sell. I’ll reply with what’s included and the price.",
    storesCopyMail: "Copy email",
    storesCopyOk: "Email copied.",
    storesCopyFail: "Couldn’t copy. Select the address and copy it yourself.",
    storesWaBase: "Hello. I’d like a quote for my shop website.\n\nWhat the shop does:\nOwn domain: yes / not yet\nPhotos available: yes / not yet\n\nThank you.",
    storesWaEsc: "Hello. I’d like a quote for a showcase website for my shop.\n\nWhat the shop does:\nOwn domain: yes / not yet\nPhotos available: yes / not yet\n\nThank you.",
    storesWaMore: "Hello. I’d like a quote for a website with a menu or catalog.\n\nWhat the shop does:\nOwn domain: yes / not yet\nPhotos available: yes / not yet\n\nThank you.",
    storesMailSubject: "Quote for my shop website",
    catalogKicker: "Catalog",
    appsTitle: "Apps",
    filterLabel: "Filter apps by platform",
    filterAll: "All",
    filterIos: "iPhone / iOS",
    filterAndroid: "Android",
    filterBusiness: "For businesses",
    filterCount: "apps shown",
    catalogEmpty: "No apps match this filter.",
    badgeAppStore: "App Store",
    badgeAndroidWeb: "Android on the web",
    ctaMonexaIos: "iPhone — App Store",
    ctaMonexaAndroid: "Android — download",
    badgePlayLive: "Google Play",
    ctaMisivaPlay: "Google Play",
    badgeTestFlight: "TestFlight iOS",
    badgeAndroidOnly: "Android only",
    misivaLead: "Schedule WhatsApp messages and generate text with AI (your own Gemini API key). Everything runs on your phone.",
    misivaStatus: "Misiva status",
    badgeApk: "Test APK",
    misivaB1: "Daily and recurring schedules",
    misivaB2: "Gemini-assisted replies",
    misivaB3: "Automated sending on-device",
    misivaB4: "We don’t upload your messages to our servers",
    ctaDownload: "Download test build (.APK)",
    ctaPrivacy: "View privacy policy",
    misivaNote: "On Google Play. No iPhone version. The APK stays here if the store does not open.",
    mypassEyebrow: "Password vault",
    mypassLead: "On-device encrypted vault, Recovery Key, backup, Autofill and sync. Everything included, no paywall.",
    mypassStatus: "MyPass status",
    badgePlay: "Coming soon to Google Play",
    mypassB1: "Master password stays on your phone",
    mypassB2: "Recovery Key + encrypted backup",
    mypassB3: "Android Autofill and TOTP",
    mypassB4: "Cloud sync included (free)",
    mypassNote: "Also on TestFlight (iOS) and coming to Google Play. Enable unknown sources only for this app.",
    reformaproEyebrow: "Quoting for renovation jobs",
    reformaproLead: "Mobile-first quotes with catalog, margins, taxes, PDF and client sending from site or visit.",
    reformaproStatus: "ReformaPRO status",
    reformaproB1: "Materials and services catalog",
    reformaproB2: "Quotes with VAT, withholding and visible margin",
    reformaproB3: "PDF, print and client delivery",
    reformaproB4: "Android APK + iOS PWA (Safari)",
    ctaTryWeb: "Try now (web / PWA)",
    ctaDownloadApk: "Download APK (Android)",
    reformaproCtaIos: "iPhone — install PWA",
    reformaproIosBadge: "iOS PWA",
    reformaproNote: "iOS: Safari → Share → Add to Home Screen (reformapro-web-seven.vercel.app). Android: APK build 6.",
    reformaproVersion: "v0.2.0 · build 6",
    trustKicker: "Trust",
    trustTitle: "Transparency",
    trustP1: "<strong>Why direct downloads?</strong> I’m an indie developer. Publishing on Google Play takes review time. Meanwhile I offer signed APKs from this page, no middlemen.",
    trustP2: "<strong>Monexa</strong> is on the App Store. <strong>Misiva</strong> is on Google Play and has no iPhone version. <strong>Miravista</strong> stays Android-only. <strong>Lunera</strong>, <strong>MyPass</strong> and <strong>ReformaPRO</strong> are still on TestFlight.",
    trustP3: "No fake store, no hidden ads. Contact: " + mailLink + ".",
    trustP4: "Each app’s privacy policy is on the card button (and in the footer).",
    supportKicker: "Support",
    supportTitle: "Buy me an ice cream and keep development going",
    supportBody: "The apps are free and ad-free. A voluntary tip helps improve AI, Autofill and upcoming tools.",
    ctaKofi: "Ko-fi · Buy me an ice cream",
    smEyebrow: "Wi-Fi mirror (browser)",
    smLead: "Mirror your phone screen to any Smart TV on local Wi-Fi. QR + PIN. No cloud, no ads.",
    smStatus: "Miravista status",
    smB1: "Local MJPEG with session PIN",
    smB2: "QR to open in the TV browser",
    smB3: "Quality 480p / 720p / 1080p",
    smB4: "No account, no cloud servers",
    smNote: "Android only (no iOS). Same Wi-Fi on phone and TV. Enable unknown sources only for this app.",
    monexaEyebrow: "Shared expenses & income",
    monexaLead: "Track group expenses and income: categories, budgets, subscriptions and goals. Cloud sync with your account.",
    monexaStatus: "Monexa status",
    monexaB1: "Shared movements and categories",
    monexaB2: "Budgets, subscriptions and goals",
    monexaB3: "Quick expense and monthly insights",
    monexaB4: "No invasive ads",
    monexaNote: "iPhone on the App Store. Android downloads from this page, not Google Play.",
    luneraEyebrow: "Menstrual health · FemTech",
    luneraLead: "Cycle prediction, daily logging, calendar, life stages and educational AI. Your health data stays on the device.",
    luneraB1: "Cycle ring + phases",
    luneraB2: "Offline daily log",
    luneraB3: "Encrypted JSON backup",
    luneraB4: "Guest mode, no account",
    ctaAndroid: "Android — test APK",
    ctaPwa: "iPhone — Open PWA",
    ctaIosMore: "More iOS options",
    footerColPrivacy: "Privacy",
    footerColSite: "Site",
    footerLunera: "Lunera privacy",
    footerMiravista: "Miravista privacy",
    footerMonexa: "Monexa privacy",
    footerMisiva: "Misiva privacy",
    footerMypass: "MyPass privacy",
    footerReformapro: "ReformaPRO privacy",
    footerStores: "Shop websites",
    footerSupport: "Support",
    footerCopy: "© " + year + " Flow Home Apps · Built calmly, without platform rush."
  },
  pt: {
    skip: "Ir para o catálogo de apps",
    brandName: "Cristiano · desenvolvedor independente",
    navSections: "Seções",
    navApps: "Apps",
    navServices: "Sites para lojas",
    navStores: "Lojas",
    navTrust: "Transparência",
    navSupport: "Apoiar",
    ctaCatalog: "Ver catálogo de apps",
    ctaHeroBusiness: "Sites para lojas",
    heroChip: "Apps e sistemas",
    heroTitle: "Ferramentas inteligentes para automatizar o seu dia a dia.",
    heroBody: "Apps para o dia a dia, e também sites para lojas. Feitas com calma por um desenvolvedor independente.",
    servicesKicker: "Para negócios",
    servicesTitle: "Sistemas e páginas web",
    servicesBody: "Faço sites para lojas e sistemas sob medida: o processo, os dados e a ferramenta de que o negócio precisa.",
    ctaWeb: "Sites para lojas",
    ctaSystems: "Conta-me o sistema",
    storesSkip: "Saltar para o conteúdo",
    storesDocTitle: "Sites para lojas — Flow Home Apps",
    storesDocDesc: "Desenho e publico o site da sua loja. O domínio fica em seu nome. O orçamento chega quando você me escrever.",
    storesChip: "Sites para lojas",
    storesHeroTitle: "O site da sua loja, feito e publicado.",
    storesHeroBody: "Eu desenho, publico e o domínio fica em seu nome. Horário, produtos, mapa e, se quiser, um botão para o WhatsApp. Você não escreve código.",
    ctaQuote: "Pedir orçamento",
    ctaQuoteAria: "Pedir orçamento pelo WhatsApp",
    ctaQuoteEscAria: "Pedir orçamento do escaparate pelo WhatsApp",
    ctaQuoteMoreAria: "Pedir orçamento com mais seções pelo WhatsApp",
    storesWaHint: "O WhatsApp abre com a mensagem pronta.",
    storesPreferMail: "Escrever por e-mail",
    storesSeePacks: "Ver o que inclui",
    storesExampleChrome: "exemplo",
    storesExampleAria: "Abrir o exemplo de página para uma cervejaria",
    storesExampleCap: "Proposta para um bar, para ver o tipo de página. Não é o site oficial.",
    storesExampleOpen: "Abrir o exemplo",
    storesTemplatesOpen: "Ver 15 modelos",
    storesTemplatesTitle: "Escolha um estilo. O painel é o mesmo.",
    storesTemplatesLead: "Há quinze modelos diferentes. Todos usam o mesmo conteúdo: horário, produtos, telefone e WhatsApp. Você escolhe a pele; o dono atualiza os dados.",
    storesTemplatesCta: "Ver modelos",
    storesPanelCta: "Provar demo do painel",
    storesPanelNote: "Há uma demo local no navegador. O painel real (login + 2FA) ficará em panel.flowhomeapps.com quando o staging passar segurança; ainda não é produção.",
    storesPanelBadge: "Demo + domínio pronto",
    storesPanelTitle: "Site com painel",
    storesPanelBody: "Escolhe um dos 15 modelos e edita horário, produtos, fotos e ponto num painel com dois fatores. Entretanto podes testar a demo; o acesso multi-loja entrega-se ao contratar.",
    storesPanelLink: "Abrir demo do painel",
    storesPanelDomain: "panel.flowhomeapps.com (em preparação)",
    storesFaqPanelQ: "Já posso gerir o site com o painel?",
    storesFaqPanelA: "Pode testar a demo: escolhe o modelo, edita os dados e vê o resultado. O painel com usuário, várias lojas e publicação real ativa-se quando contrata essa opção.",
    storesDoneTitle: "O que fica pronto",
    storesDoneMobileTitle: "Primeiro o telemóvel",
    storesDoneMobileBody: "Botões grandes e texto legível, sem apertar a tela.",
    storesDoneDataTitle: "Dados da loja",
    storesDoneDataBody: "Horário, produtos e mapa. O botão do WhatsApp, se pedir, abre o seu número. É um link, não uma lista de clientes.",
    storesDoneOwnTitle: "Fica em seu nome",
    storesDoneOwnBody: "Domínio e hosting seus, mais um guia curto para o dia a dia.",
    storesPacksTitle: "Escolha pelo que vende.",
    storesPacksLead: "Dois alcances. O orçamento chega na resposta, quando sei páginas, fotos e se quer manutenção.",
    storesPackBasicKicker: "Se cabe numa visita",
    storesPackBasicTitle: "Escaparate",
    storesPackBasicLead: "Horário, o que vende e como contactar.",
    storesPackBasicB1: "De uma a três páginas",
    storesPackBasicB2: "Horário, produtos e contacto",
    storesPackBasicB3: "Mapa e, se quiser, link para WhatsApp",
    storesPackBasicB4: "Pronta para publicar",
    storesPackMoreKicker: "Se há carta ou catálogo",
    storesPackMoreTitle: "Loja com mais seções",
    storesPackMoreLead: "Várias categorias, mais texto e o design ajustado à sua marca.",
    storesPackMoreB1: "Tudo do escaparate",
    storesPackMoreB2: "Seções por categoria",
    storesPackMoreB3: "Fotos e textos organizados",
    storesPackMoreB4: "Textos revistos consigo antes de publicar",
    storesStepsTitle: "Da consulta ao site publicado.",
    storesStep1Title: "Você me escreve",
    storesStep1Body: "O que vende, se tem fotos e se já há domínio. A mensagem do WhatsApp já traz essas linhas.",
    storesStep2Title: "Digo o alcance",
    storesStep2Body: "Qual alcance corresponde e o orçamento. Se não encaixa, digo na mesma resposta.",
    storesStep3Title: "Publico",
    storesStep3Body: "Deixo online e entrego o acesso. O domínio continua seu.",
    storesAfterKicker: "Depois de publicar",
    storesAfterLead: "Três caminhos. O orçamento mostra qual encaixa.",
    storesOnlyTitle: "Só o site",
    storesOnlyBody: "Deixo a página online e um guia curto. Se depois mudar o horário, uma foto ou um texto, você faz com esse guia. Serve se quase não mexe na página.",
    storesMaintTitle: "Site e manutenção",
    storesMaintBody: "Deixo a mesma página online. Quando quiser mudar uma foto, um preço, uma oferta ou um aviso, você me diz e eu faço. Também cuido para a página continuar abrindo bem.",
    storesFaqTitle: "Antes de escrever.",
    storesFaqPriceQ: "Quando sei o orçamento?",
    storesFaqPriceA: "Na resposta, quando sei páginas, fotos e se quer manutenção. Não publico um preço único porque o alcance muda de loja para loja.",
    storesFaqLeadsQ: "Consegue-me clientes ou posição no Google?",
    storesFaqLeadsA: "Não. Publico a página e deixo o domínio. Não faço anúncios nem trago clientes.",
    storesFaqDomainQ: "O domínio fica em meu nome?",
    storesFaqDomainA: "Sim. Domínio e hosting são seus. Não fica preso a uma conta minha para abrir o site.",
    storesFaqTechQ: "Preciso saber de informática?",
    storesFaqTechA: "Não. Você traz o que vende e as fotos que tiver. Se quiser o botão do WhatsApp, também o número. Eu monto e publico.",
    storesCustomNote: "Se o que precisa não é o site de uma loja, diga na mesma mensagem. Também faço sistemas sob medida.",
    storesCloseTitle: "Peça o orçamento.",
    storesCloseBody: "Diga o que vende. Respondo com o que inclui e o preço.",
    storesCopyMail: "Copiar e-mail",
    storesCopyOk: "E-mail copiado.",
    storesCopyFail: "Não foi possível copiar. Selecione o endereço e copie à mão.",
    storesWaBase: "Olá. Gostaria de um orçamento para o site da minha loja.\n\nA que se dedica:\nDomínio próprio: sim / ainda não\nFotos disponíveis: sim / ainda não\n\nObrigado.",
    storesWaEsc: "Olá. Gostaria de um orçamento para o escaparate web da minha loja.\n\nA que se dedica:\nDomínio próprio: sim / ainda não\nFotos disponíveis: sim / ainda não\n\nObrigado.",
    storesWaMore: "Olá. Gostaria de um orçamento para um site com carta ou catálogo.\n\nA que se dedica:\nDomínio próprio: sim / ainda não\nFotos disponíveis: sim / ainda não\n\nObrigado.",
    storesMailSubject: "Orçamento para o site da minha loja",
    catalogKicker: "Catálogo",
    appsTitle: "Apps",
    filterLabel: "Filtrar apps por plataforma",
    filterAll: "Todas",
    filterIos: "iPhone / iOS",
    filterAndroid: "Android",
    filterBusiness: "Para negócios",
    filterCount: "apps visíveis",
    catalogEmpty: "Nenhum app corresponde a este filtro.",
    badgeAppStore: "App Store",
    badgeAndroidWeb: "Android na web",
    ctaMonexaIos: "iPhone — App Store",
    ctaMonexaAndroid: "Android — baixar",
    badgePlayLive: "Google Play",
    ctaMisivaPlay: "Google Play",
    badgeTestFlight: "TestFlight iOS",
    badgeAndroidOnly: "Só Android",
    misivaLead: "Agende mensagens no WhatsApp e gere texto com IA (sua própria API key do Gemini). Tudo roda no seu celular.",
    misivaStatus: "Status Misiva",
    badgeApk: "APK de teste",
    misivaB1: "Agendamentos diários e recorrentes",
    misivaB2: "Respostas assistidas com Gemini",
    misivaB3: "Envio automatizado no dispositivo",
    misivaB4: "Não enviamos suas mensagens aos nossos servidores",
    ctaDownload: "Baixar versão de testes (.APK)",
    ctaPrivacy: "Ver política de privacidade",
    misivaNote: "Na Google Play. Sem versão para iPhone. O APK continua aqui se a loja não abrir.",
    mypassEyebrow: "Cofre de senhas",
    mypassLead: "Cofre criptografado no dispositivo, Recovery Key, backup, Autofill e sync. Tudo incluído, sem paywall.",
    mypassStatus: "Status MyPass",
    badgePlay: "Em breve na Google Play",
    mypassB1: "Senha mestra só no seu celular",
    mypassB2: "Recovery Key + backup criptografado",
    mypassB3: "Autofill Android e TOTP",
    mypassB4: "Sync na nuvem incluído (grátis)",
    mypassNote: "Também no TestFlight (iOS) e chegará à Google Play. Ative origens desconhecidas só para este app.",
    reformaproEyebrow: "Orçamentos para obras e reformas",
    reformaproLead: "Orçamentos mobile com catálogo, margens, impostos, PDF e envio ao cliente no local da obra ou visita.",
    reformaproStatus: "Estado ReformaPRO",
    reformaproB1: "Catálogo de materiais e serviços",
    reformaproB2: "Orçamentos com IVA, retenção e margem visível",
    reformaproB3: "PDF, impressão e envio ao cliente",
    reformaproB4: "Android APK + PWA iOS (Safari)",
    ctaTryWeb: "Experimentar agora (web / PWA)",
    ctaDownloadApk: "Baixar APK (Android)",
    reformaproCtaIos: "iPhone — instalar PWA",
    reformaproIosBadge: "PWA iOS",
    reformaproNote: "iOS: Safari → Partilhar → Adicionar ao ecrã principal (reformapro-web-seven.vercel.app). Android: APK build 6.",
    reformaproVersion: "v0.2.0 · build 6",
    trustKicker: "Confiança",
    trustTitle: "Transparência",
    trustP1: "<strong>Por que downloads diretos?</strong> Sou um desenvolvedor independente. Publicar na Google Play leva tempo de revisão. Enquanto isso ofereço APKs assinados nesta página, sem intermediários.",
    trustP2: "<strong>Monexa</strong> já está na App Store. <strong>Misiva</strong> está na Google Play e não tem versão para iPhone. <strong>Miravista</strong> continua só no Android. <strong>Lunera</strong>, <strong>MyPass</strong> e <strong>ReformaPRO</strong> continuam no TestFlight.",
    trustP3: "Sem loja falsa nem publicidade oculta. Contato: " + mailLink + ".",
    trustP4: "As políticas de privacidade de cada app estão no botão de cada cartão (e no rodapé).",
    supportKicker: "Apoiar",
    supportTitle: "Me pague um sorvete e continue o desenvolvimento",
    supportBody: "Os apps são gratuitos e sem anúncios. Uma gorjeta voluntária ajuda a melhorar a IA, o Autofill e as próximas ferramentas.",
    ctaKofi: "Ko-fi · Me pague um sorvete",
    smEyebrow: "Espelho Wi-Fi (navegador)",
    smLead: "Espelhe a tela do telemóvel em qualquer Smart TV na Wi-Fi local. QR + PIN. Sem nuvem e sem anúncios.",
    smStatus: "Estado Miravista",
    smB1: "MJPEG local com PIN de sessão",
    smB2: "QR para abrir no navegador da TV",
    smB3: "Qualidade 480p / 720p / 1080p",
    smB4: "Sem conta nem servidores cloud",
    smNote: "Só Android (sem iOS). Mesma Wi-Fi no telemóvel e na TV. Ative origens desconhecidas só para este app.",
    monexaEyebrow: "Despesas e receitas partilhadas",
    monexaLead: "Controle despesas e receitas em grupo: categorias, orçamentos, subscrições e metas. Sincronização na nuvem com a sua conta.",
    monexaStatus: "Estado Monexa",
    monexaB1: "Movimentos e categorias em grupo",
    monexaB2: "Orçamentos, subscrições e metas",
    monexaB3: "Despesa rápida e análise mensal",
    monexaB4: "Sem anúncios invasivos",
    monexaNote: "iPhone na App Store. O Android descarrega-se nesta página, não na Google Play.",
    luneraEyebrow: "Saúde menstrual · FemTech",
    luneraLead: "Previsão do ciclo, registo diário, calendário, etapas de vida e IA educativa. Os seus dados de saúde ficam no dispositivo.",
    luneraB1: "Anel do ciclo + fases",
    luneraB2: "Registo diário offline",
    luneraB3: "Backup JSON cifrado",
    luneraB4: "Modo convidado sem conta",
    ctaAndroid: "Android — APK de teste",
    ctaPwa: "iPhone — Abrir PWA",
    ctaIosMore: "Mais opções iOS",
    footerColPrivacy: "Privacidade",
    footerColSite: "Site",
    footerLunera: "Privacidade Lunera",
    footerMiravista: "Privacidade Miravista",
    footerMonexa: "Privacidade Monexa",
    footerMisiva: "Privacidade Misiva",
    footerMypass: "Privacidade MyPass",
    footerReformapro: "Privacidade ReformaPRO",
    footerStores: "Sites para lojas",
    footerSupport: "Suporte",
    footerCopy: "© " + year + " Flow Home Apps · Feito com calma, sem pressa de plataforma."
  }
};

function readStoredLang() {
  try {
    return localStorage.getItem("fha_lang");
  } catch (error) {
    return null;
  }
}

function writeStoredLang(lang) {
  try {
    localStorage.setItem("fha_lang", lang);
  } catch (error) {
    /* Private mode can block storage; the page still switches language. */
  }
}

function detectLang() {
  var q = new URLSearchParams(location.search).get("lang");
  if (q && I18N[q]) return q;
  var saved = readStoredLang();
  if (saved && I18N[saved]) return saved;
  var nav = (navigator.language || "es").toLowerCase();
  if (nav.indexOf("pt") === 0) return "pt";
  if (nav.indexOf("en") === 0) return "en";
  return "es";
}

var currentFilter = "all";

function announceFilter(shown) {
  var status = document.getElementById("filter-status");
  var empty = document.getElementById("catalog-empty");
  var count = document.querySelector("[data-i18n='filterCount']");
  if (!status) return;
  if (shown === 0 && empty) {
    status.textContent = empty.textContent;
    return;
  }
  var lang = document.documentElement.lang === "pt-BR" ? "pt" : document.documentElement.lang;
  if (shown === 1) {
    var one = { es: "1 app visible", en: "1 app shown", pt: "1 app visível" };
    status.textContent = one[lang] || one.es;
    return;
  }
  var suffix = count ? count.textContent : "";
  status.textContent = shown + (suffix ? " " + suffix : "");
}

function applyFilter(filter) {
  currentFilter = filter || "all";
  var cards = document.querySelectorAll("[data-app]");
  var shown = 0;
  cards.forEach(function (card) {
    var visible = catalogCardVisible(
      card.getAttribute("data-platforms"),
      card.getAttribute("data-business") === "true",
      currentFilter
    );
    card.classList.toggle("hidden", !visible);
    card.hidden = !visible;
    if (visible) shown += 1;
  });
  var empty = document.getElementById("catalog-empty");
  if (empty) {
    empty.classList.toggle("hidden", shown !== 0);
    empty.hidden = shown !== 0;
  }
  document.querySelectorAll("[data-filter]").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-filter") === currentFilter ? "true" : "false");
  });
  announceFilter(shown);
}

function waHref(message) {
  return "https://wa.me/34634160319?text=" + encodeURIComponent(message);
}

function mailQuoteHref(subject, body) {
  return "mailto:soporte.flowhomeapps@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
}

var currentLang = "es";

function applyLang(lang) {
  var t = I18N[lang] || I18N.es;
  currentLang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  var isStores = document.body.getAttribute("data-page") === "stores";
  document.title = isStores ? t.storesDocTitle : "Flow Home Apps — " + t.heroTitle;
  var desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", isStores ? t.storesDocDesc : t.heroBody);

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (t[key] != null) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-html");
    if (t[key] != null) el.innerHTML = t[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-aria");
    if (t[key] != null) el.setAttribute("aria-label", t[key]);
  });

  var waMap = { base: t.storesWaBase, esc: t.storesWaEsc, more: t.storesWaMore };
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    var key = el.getAttribute("data-wa");
    if (waMap[key]) el.setAttribute("href", waHref(waMap[key]));
  });
  document.querySelectorAll("[data-mail-quote]").forEach(function (el) {
    el.setAttribute("href", mailQuoteHref(t.storesMailSubject, t.storesWaBase));
  });

  var p = privacy[lang] || privacy.es;
  var links = {
    "privacy-misiva": p.misiva,
    "privacy-mypass": p.mypass,
    "privacy-reformapro": p.reformapro,
    "privacy-miravista": p.miravista,
    "privacy-monexa": p.monexa,
    "privacy-lunera": p.lunera,
    "footer-privacy-misiva": p.misiva,
    "footer-privacy-mypass": p.mypass,
    "footer-privacy-reformapro": p.reformapro,
    "footer-privacy-miravista": p.miravista,
    "footer-privacy-monexa": p.monexa,
    "footer-privacy-lunera": p.lunera
  };
  Object.keys(links).forEach(function (id) {
    var node = document.getElementById(id);
    if (node) node.href = links[id];
  });

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });
  writeStoredLang(lang);
  try {
    var url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  } catch (error) {
    /* file:// or a locked history stack should not break the switcher. */
  }
  applyFilter(currentFilter);
}

var lang = detectLang();
applyLang(lang);

document.querySelectorAll(".lang-switch button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    applyLang(btn.getAttribute("data-lang"));
  });
});

document.querySelectorAll("[data-filter]").forEach(function (btn) {
  btn.addEventListener("click", function () {
    applyFilter(btn.getAttribute("data-filter"));
  });
});

var copyButton = document.getElementById("copy-mail");
var copyStatus = document.getElementById("copy-status");
if (copyButton && copyStatus) {
  copyButton.addEventListener("click", function () {
    var address = "soporte.flowhomeapps@gmail.com";
    var t = I18N[currentLang] || I18N.es;
    function show(message) {
      copyStatus.textContent = message;
    }
    function copyWithField(value) {
      var field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      var copied = false;
      try {
        copied = document.execCommand("copy");
      } catch (error) {
        copied = false;
      }
      document.body.removeChild(field);
      return copied;
    }
    function showResult(copied) {
      show(copied ? t.storesCopyOk : t.storesCopyFail);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address).then(function () {
        showResult(true);
      }).catch(function () {
        showResult(copyWithField(address));
      });
    } else {
      showResult(copyWithField(address));
    }
  });
}
