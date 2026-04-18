import "./BPn1sVO4.js";
import {
  o as q,
  a as K
} from "./DqDO4Xn-.js";
import {
  K as O,
  x as G,
  W as P,
  w as Y,
  bl as B,
  p as J,
  h as b,
  i as o,
  l as Q,
  f as U,
  a as g,
  b as V,
  e as k,
  t as I,
  c as C,
  u as X
} from "./BldsY2Le.js";
import {
  i as Z
} from "./BMBxSkEr.js";
import {
  a as D
} from "./BkJfUC8t.js";
import {
  p as i
} from "./DU6s87IP.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "adbd784807892a96485bba09dcce4d69b0904804"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "4c4e9506-f0ee-45f5-a159-7765fb77b844", r._sentryDebugIdIdentifier = "sentry-dbid-4c4e9506-f0ee-45f5-a159-7765fb77b844")
  } catch {}
})();

function p(r, e, d) {
  O(() => {
    var l = G(() => e(r, d == null ? void 0 : d()) || {});
    if (d && (l != null && l.update)) {
      var f = !1,
        w = {};
      P(() => {
        var u = d();
        Y(u), f && B(w, u) && (w = u, l.update(u))
      }), f = !0
    }
    if (l != null && l.destroy) return () => l.destroy()
  })
}
let v = k(!1),
  T = k(0);
var $ = C("<div></div>"),
  ee = C('<div><span class="loading loading-spinner loading-lg"></span></div>');

function de(r, e) {
  J(e, !0);
  const d = 1800 * 1e3,
    l = 10 * 1e3;
  let f = i(e, "widgetId", 15),
    w = i(e, "appearance", 3, "always"),
    u = i(e, "language", 3, "auto"),
    S = i(e, "execution", 3, "render"),
    L = i(e, "retryInterval", 3, 8e3),
    R = i(e, "retry", 3, "auto"),
    j = i(e, "refreshExpired", 3, "auto"),
    W = i(e, "theme", 3, "auto"),
    x = i(e, "size", 3, "normal"),
    z = i(e, "tabIndex", 3, 0);
  i(e, "reset", 15)(() => {
    var t;
    f() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(f()))
  });
  let m;

  function s() {
    m && (clearTimeout(m), m = void 0)
  }

  function _() {
    s(), m = setTimeout(() => {
      var t;
      m = void 0, (t = e.errorCallback) == null || t.call(e, "render-timeout")
    }, l)
  }
  const A = X(() => ({
      sitekey: e.siteKey,
      callback: (t, a) => {
        var n;
        s(), (n = e.callback) == null || n.call(e, t, a)
      },
      "error-callback": t => {
        var a;
        s(), (a = e.errorCallback) == null || a.call(e, t)
      },
      "timeout-callback": () => {
        var t;
        (t = e.timeoutCallback) == null || t.call(e)
      },
      "expired-callback": () => {
        var t;
        (t = e.expiredCallback) == null || t.call(e)
      },
      "before-interactive-callback": () => {
        var t;
        s(), (t = e.beforeInteractiveCallback) == null || t.call(e)
      },
      "after-interactive-callback": () => {
        var t;
        s(), (t = e.afterInteractiveCallback) == null || t.call(e)
      },
      "unsupported-callback": () => {
        var t;
        return (t = e.unsupportedCallback) == null ? void 0 : t.call(e)
      },
      "response-field-name": e.responseFieldName ?? e.formsField ?? "cf-turnstile-response",
      "response-field": e.responseField ?? e.forms ?? !0,
      "refresh-expired": j(),
      "retry-interval": L(),
      tabindex: z(),
      appearance: w(),
      execution: S(),
      language: u(),
      action: e.action,
      retry: R(),
      theme: W(),
      cData: e.cData,
      size: x()
    })),
    y = (t, a) => {
      let n = window.turnstile.render(t, a);
      return f(n), _(), {
        destroy() {
          s(), window.turnstile.remove(n)
        },
        update(c) {
          s(), window.turnstile.remove(n), n = window.turnstile.render(t, c), f(n), _()
        }
      }
    };
  let h = k(!1);
  q(() => {
    var n;
    b(h, !0);
    const t = Date.now();
    if (o(v) && t - o(T) > d) {
      b(v, !1), (n = document.querySelector('script[src*="turnstile/v0/api.js"]')) == null || n.remove();
      try {
        delete window.turnstile
      } catch {
        window.turnstile = void 0
      }
    }
    if (!o(v)) {
      const c = document.createElement("script");
      c.type = "text/javascript", c.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", c.async = !0, c.addEventListener("load", () => {
        b(v, !0), b(T, Date.now(), !0)
      }, {
        once: !0
      }), document.head.appendChild(c)
    }
    return () => {
      b(h, !1)
    }
  }), K(() => {
    s()
  });
  var E = Q(),
    F = U(E);
  {
    var H = t => {
        var a = $();
        let n;
        p(a, (c, N) => y == null ? void 0 : y(c, N), () => o(A)), I(() => n = D(a, 1, `h-16 ${e.class??""}`, "svelte-1lm836y", n, {
          flexible: x() == "flexible"
        })), g(t, a)
      },
      M = t => {
        var a = ee();
        I(() => D(a, 1, `flex h-16 items-center justify-center ${e.class??""}`, "svelte-1lm836y")), g(t, a)
      };
    Z(F, t => {
      o(v) && o(h) ? t(H) : t(M, !1)
    })
  }
  g(r, E), V()
}
export {
  de as T, p as a
};