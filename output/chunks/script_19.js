(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "a1c3c518b70a92c25ec2b85baf48e9981ce90ce8"
    };
    var o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f48e8017-3f7e-40b0-9f34-cb514ffed3f1", e._sentryDebugIdIdentifier = "sentry-dbid-f48e8017-3f7e-40b0-9f34-cb514ffed3f1")
  } catch {}
})();
const L = "en",
  f = ["en", "pt", "ch", "de", "es", "fr", "it", "jp", "pl", "ru", "uk", "vi"],
  g = "PARAGLIDE_LOCALE",
  d = ["localStorage", "preferredLanguage", "baseLocale"];
globalThis.__paraglide = {};
let c = !1,
  p = () => {
    let e;
    for (const o of d) {
      if (o === "baseLocale") e = L;
      else if (o === "preferredLanguage") e = w();
      else if (o === "localStorage") e = localStorage.getItem(g) ?? void 0;
      else if (u(o) && l.has(o)) {
        const t = l.get(o);
        if (t) {
          const a = t.getLocale();
          if (a instanceof Promise) continue;
          e = a
        }
      }
      if (e !== void 0) {
        const t = h(e);
        return c || (c = !0, y(t, {
          reload: !1
        })), t
      }
    }
    throw new Error("No locale found. Read the docs https://inlang.com/m/gerre34r/library-inlang-paraglideJs/errors#no-locale-found")
  },
  y = (e, o) => {
    const t = {
      reload: !0,
      ...o
    };
    let a;
    try {
      a = p()
    } catch {}
    for (const r of d)
      if (r !== "baseLocale") {
        if (r === "localStorage" && typeof window < "u") localStorage.setItem(g, e);
        else if (u(r) && l.has(r)) {
          const s = l.get(r);
          if (s) {
            const i = s.setLocale(e);
            i instanceof Promise && i.catch(b => {
              console.warn(`Custom strategy "${r}" setLocale failed:`, b)
            })
          }
        }
      } t.reload && window.location && e !== a && window.location.reload()
  };

function n(e) {
  return e ? f.includes(e) : !1
}

function h(e) {
  if (n(e) === !1) throw new Error(`Invalid locale: ${e}. Expected one of: ${f.join(", ")}`);
  return e
}

function w() {
  var o;
  if (!((o = navigator == null ? void 0 : navigator.languages) != null && o.length)) return;
  const e = navigator.languages.map(t => {
    var a;
    return {
      fullTag: t.toLowerCase(),
      baseTag: (a = t.split("-")[0]) == null ? void 0 : a.toLowerCase()
    }
  });
  for (const t of e) {
    if (n(t.fullTag)) return t.fullTag;
    if (n(t.baseTag)) return t.baseTag
  }
}
const l = new Map;

function u(e) {
  return typeof e == "string" && /^custom-[A-Za-z0-9_-]+$/.test(e)
}
export {
  p as g, g as l
};