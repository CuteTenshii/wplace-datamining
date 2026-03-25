(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "e30448959e42fd3ea2fc5cd1f2671639056880b6"
    };
    var o = new t.Error().stack;
    o && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[o] = "2873cead-a87c-4550-afcc-7d8128f4def3", t._sentryDebugIdIdentifier = "sentry-dbid-2873cead-a87c-4550-afcc-7d8128f4def3")
  } catch {}
})();
const g = "modulepreload",
  E = function(t, o) {
    return new URL(t, o).href
  },
  b = {},
  w = function(o, d, u) {
    let h = Promise.resolve();
    if (d && d.length > 0) {
      let i = function(e) {
        return Promise.all(e.map(s => Promise.resolve(s).then(c => ({
          status: "fulfilled",
          value: c
        }), c => ({
          status: "rejected",
          reason: c
        }))))
      };
      const n = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        m = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      h = i(d.map(e => {
        if (e = E(e, u), e in b) return;
        b[e] = !0;
        const s = e.endsWith(".css"),
          c = s ? '[rel="stylesheet"]' : "";
        if (!!u)
          for (let a = n.length - 1; a >= 0; a--) {
            const f = n[a];
            if (f.href === e && (!s || f.rel === "stylesheet")) return
          } else if (document.querySelector(`link[href="${e}"]${c}`)) return;
        const r = document.createElement("link");
        if (r.rel = s ? "stylesheet" : g, s || (r.as = "script"), r.crossOrigin = "", r.href = e, m && r.setAttribute("nonce", m), document.head.appendChild(r), s) return new Promise((a, f) => {
          r.addEventListener("load", a), r.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${e}`)))
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
  w as _
};