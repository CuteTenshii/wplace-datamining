(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "0f5526c28af3fe231e905447f161f05590c76727"
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
  b = {},
  v = function(o, d, u) {
    let h = Promise.resolve();
    if (d && d.length > 0) {
      let i = function(t) {
        return Promise.all(t.map(s => Promise.resolve(s).then(f => ({
          status: "fulfilled",
          value: f
        }), f => ({
          status: "rejected",
          reason: f
        }))))
      };
      const n = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        g = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      h = i(d.map(t => {
        if (t = w(t, u), t in b) return;
        b[t] = !0;
        const s = t.endsWith(".css"),
          f = s ? '[rel="stylesheet"]' : "";
        if (!!u)
          for (let c = n.length - 1; c >= 0; c--) {
            const a = n[c];
            if (a.href === t && (!s || a.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${t}"]${f}`)) return;
        const r = document.createElement("link");
        if (r.rel = s ? "stylesheet" : m, s || (r.as = "script"), r.crossOrigin = "", r.href = t, g && r.setAttribute("nonce", g), document.head.appendChild(r), s) return new Promise((c, a) => {
          r.addEventListener("load", c), r.addEventListener("error", () => a(new Error(`Unable to preload CSS for ${t}`)))
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