(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ab54e7d2bb082741522faef467264167f3245873"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "2873cead-a87c-4550-afcc-7d8128f4def3", e._sentryDebugIdIdentifier = "sentry-dbid-2873cead-a87c-4550-afcc-7d8128f4def3")
  })()
} catch {}
const m = "modulepreload",
  w = function(e, o) {
    return new URL(e, o).href
  },
  g = {},
  v = function(o, d, u) {
    let h = Promise.resolve();
    if (d && d.length > 0) {
      let i = function(t) {
        return Promise.all(t.map(s => Promise.resolve(s).then(a => ({
          status: "fulfilled",
          value: a
        }), a => ({
          status: "rejected",
          reason: a
        }))))
      };
      const n = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        b = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      h = i(d.map(t => {
        if (t = w(t, u), t in g) return;
        g[t] = !0;
        const s = t.endsWith(".css"),
          a = s ? '[rel="stylesheet"]' : "";
        if (!!u)
          for (let f = n.length - 1; f >= 0; f--) {
            const c = n[f];
            if (c.href === t && (!s || c.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${t}"]${a}`)) return;
        const r = document.createElement("link");
        if (r.rel = s ? "stylesheet" : m, s || (r.as = "script"), r.crossOrigin = "", r.href = t, b && r.setAttribute("nonce", b), document.head.appendChild(r), s) return new Promise((f, c) => {
          r.addEventListener("load", f), r.addEventListener("error", () => c(new Error(`Unable to preload CSS for ${t}`)))
        })
      }))
    }

    function y(i) {
      const n = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (n.payload = i, window.dispatchEvent(n), !n.defaultPrevented) throw i
    }
    return h.then(i => {
      for (const n of i || []) n.status === "rejected" && y(n.reason);
      return o().catch(y)
    })
  };
export {
  v as _
};