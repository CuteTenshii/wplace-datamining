const j = "modulepreload",
  A = function(e, t) {
    return new URL(e, t).href
  },
  v = {},
  o = function(t, n, u) {
    let d = Promise.resolve();
    if (n && n.length > 0) {
      let l = function(r) {
        return Promise.all(r.map(i => Promise.resolve(i).then(m => ({
          status: "fulfilled",
          value: m
        }), m => ({
          status: "rejected",
          reason: m
        }))))
      };
      const s = document.getElementsByTagName("link"),
        c = document.querySelector("meta[property=csp-nonce]"),
        L = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
      d = l(n.map(r => {
        if (r = A(r, u), r in v) return;
        v[r] = !0;
        const i = r.endsWith(".css"),
          m = i ? '[rel="stylesheet"]' : "";
        if (!!u)
          for (let _ = s.length - 1; _ >= 0; _--) {
            const f = s[_];
            if (f.href === r && (!i || f.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${r}"]${m}`)) return;
        const a = document.createElement("link");
        if (a.rel = i ? "stylesheet" : j, i || (a.as = "script"), a.crossOrigin = "", a.href = r, L && a.setAttribute("nonce", L), document.head.appendChild(a), i) return new Promise((_, f) => {
          a.addEventListener("load", _), a.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${r}`)))
        })
      }))
    }

    function E(l) {
      const s = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (s.payload = l, window.dispatchEvent(s), !s.defaultPrevented) throw l
    }
    return d.then(l => {
      for (const s of l || []) s.status === "rejected" && E(s.reason);
      return t().catch(E)
    })
  };
const R = ["en", "pt", "ch", "de", "es", "fr", "it", "jp", "pl", "ru", "uk", "vi"],
  y = Object.assign({
    "../../../messages/ch.json": () => o(() => import("./CcDRPSlK.js"), [], import.meta.url),
    "../../../messages/de.json": () => o(() => import("./Dg-Ex7A_.js"), [], import.meta.url),
    "../../../messages/en.json": () => o(() => import("./CnMUQrcR.js"), [], import.meta.url),
    "../../../messages/es.json": () => o(() => import("./C3nZFM6G.js"), [], import.meta.url),
    "../../../messages/fr.json": () => o(() => import("./BCjggjwE.js"), [], import.meta.url),
    "../../../messages/it.json": () => o(() => import("./B5owodwt.js"), [], import.meta.url),
    "../../../messages/jp.json": () => o(() => import("./D63R32S9.js"), [], import.meta.url),
    "../../../messages/pl.json": () => o(() => import("./1Nm7ixsq.js"), [], import.meta.url),
    "../../../messages/pt.json": () => o(() => import("./CPr7mXVd.js"), [], import.meta.url),
    "../../../messages/ru.json": () => o(() => import("./DFoclBSZ.js"), [], import.meta.url),
    "../../../messages/uk.json": () => o(() => import("./DaGdHzoB.js"), [], import.meta.url),
    "../../../messages/vi.json": () => o(() => import("./D7ZutNPj.js"), [], import.meta.url)
  }),
  h = new Map,
  O = "PARAGLIDE_LOCALE";
let w = "en",
  g;

function V() {
  return w
}

function p(e) {
  return typeof e == "string" && R.includes(e)
}
async function P(e) {
  let t = h.get(e);
  if (!t) {
    const n = `../../../messages/${e}.json`,
      u = y[n];
    if (!u) throw new Error(`No message catalog is configured for locale "${e}"`);
    t = u().then(d => b(e, d.default)), h.set(e, t)
  }
  g = await t, w = e
}
async function C() {
  if (typeof window > "u") {
    await P("en");
    return
  }
  await P(T() ?? I() ?? "en")
}

function S() {
  if (!g) throw new Error("The message catalog was used before initializeLocale() completed");
  return g
}

function T() {
  try {
    const e = localStorage.getItem(O);
    return p(e) ? e : void 0
  } catch {
    return
  }
}

function I() {
  for (const e of navigator.languages ?? []) {
    const t = e.toLowerCase();
    if (p(t)) return t;
    const n = t.split("-")[0];
    if (p(n)) return n
  }
}

function b(e, t) {
  if (typeof t != "object" || t === null || Array.isArray(t)) throw new Error(`The message catalog for locale "${e}" is not an object`);
  return t
}
export {
  o as _, S as a, V as g, C as i, O as l
};