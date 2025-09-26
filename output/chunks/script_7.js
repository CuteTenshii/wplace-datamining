(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f081a31e50addc038845f96ddcdcac2e385f6a91"
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
  v = function(o, f, u) {
    let h = Promise.resolve();
    if (f && f.length > 0) {
      let i = function(t) {
        return Promise.all(t.map(s => Promise.resolve(s).then(c => ({
          status: "fulfilled",
          value: c
        }), c => ({
          status: "rejected",
          reason: c
        }))))
      };
      const n = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        g = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      h = i(f.map(t => {
        if (t = w(t, u), t in b) return;
        b[t] = !0;
        const s = t.endsWith(".css"),
          c = s ? '[rel="stylesheet"]' : "";
        if (!!u)
          for (let d = n.length - 1; d >= 0; d--) {
            const a = n[d];
            if (a.href === t && (!s || a.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${t}"]${c}`)) return;
        const r = document.createElement("link");
        if (r.rel = s ? "stylesheet" : m, s || (r.as = "script"), r.crossOrigin = "", r.href = t, g && r.setAttribute("nonce", g), document.head.appendChild(r), s) return new Promise((d, a) => {
          r.addEventListener("load", d), r.addEventListener("error", () => a(new Error(`Unable to preload CSS for ${t}`)))
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