import "./CZ-bKVcZ.js";
import {
  o as S
} from "./DRqcChMW.js";
import {
  L as N,
  x as R,
  X as q,
  w as K,
  bk as M,
  p as P,
  h as k,
  l as X,
  f as Y,
  i as w,
  a as o,
  b as A,
  e as B,
  t as g,
  c as _,
  u as G
} from "./CsHGdBfZ.js";
import {
  i as H
} from "./Dnj5io5y.js";
import {
  a as x
} from "./DaR8bW5G.js";
import {
  p as r
} from "./Duq0Uf8l.js";
import {
  j as v
} from "./63a9cj_g.js";
(function() {
  try {
    var l = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    l.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var e = new l.Error().stack;
    e && (l._sentryDebugIds = l._sentryDebugIds || {}, l._sentryDebugIds[e] = "3dc8b9e7-4850-4022-b3de-34014628ffd2", l._sentryDebugIdIdentifier = "sentry-dbid-3dc8b9e7-4850-4022-b3de-34014628ffd2")
  } catch {}
})();

function J(l, e, n) {
  N(() => {
    var d = R(() => e(l, n == null ? void 0 : n()) || {});
    if (n && (d != null && d.update)) {
      var s = !1,
        f = {};
      q(() => {
        var c = n();
        K(c), s && M(f, c) && (f = c, d.update(c))
      }), s = !0
    }
    if (d != null && d.destroy) return () => d.destroy()
  })
}
var O = _("<div></div>"),
  Q = _('<div><span class="loading loading-spinner loading-lg"></span></div>');

function ae(l, e) {
  P(e, !0);
  let n = r(e, "widgetId", 15),
    d = r(e, "appearance", 3, "always"),
    s = r(e, "language", 3, "auto"),
    f = r(e, "execution", 3, "render"),
    c = r(e, "retryInterval", 3, 8e3),
    I = r(e, "retry", 3, "auto"),
    E = r(e, "refreshExpired", 3, "auto"),
    C = r(e, "theme", 3, "auto"),
    y = r(e, "size", 3, "normal"),
    D = r(e, "tabIndex", 3, 0);
  r(e, "reset", 15)(() => {
    var t;
    n() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(n()))
  });
  const L = G(() => ({
      sitekey: e.siteKey,
      callback: (t, a) => {
        var i;
        (i = e.callback) == null || i.call(e, t, a)
      },
      "error-callback": t => {
        var a;
        (a = e.errorCallback) == null || a.call(e, t)
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
        (t = e.beforeInteractiveCallback) == null || t.call(e)
      },
      "after-interactive-callback": () => {
        var t;
        (t = e.afterInteractiveCallback) == null || t.call(e)
      },
      "unsupported-callback": () => {
        var t;
        return (t = e.unsupportedCallback) == null ? void 0 : t.call(e)
      },
      "response-field-name": e.responseFieldName ?? e.formsField ?? "cf-turnstile-response",
      "response-field": e.responseField ?? e.forms ?? !0,
      "refresh-expired": E(),
      "retry-interval": c(),
      tabindex: D(),
      appearance: d(),
      execution: f(),
      language: s(),
      action: e.action,
      retry: I(),
      theme: C(),
      cData: e.cData,
      size: y()
    })),
    u = (t, a) => {
      let i = window.turnstile.render(t, a);
      return n(i), {
        destroy() {
          window.turnstile.remove(i)
        },
        update(m) {
          window.turnstile.remove(i), i = window.turnstile.render(t, m), n(i)
        }
      }
    };
  let b = B(!1);
  S(() => {
    if (k(b, !0), !v.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => v.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      k(b, !1)
    }
  });
  var h = X(),
    T = Y(h);
  {
    var j = t => {
        var a = O();
        let i;
        J(a, (m, F) => u == null ? void 0 : u(m, F), () => w(L)), g(() => i = x(a, 1, `h-16 ${e.class??""}`, "svelte-1lm836y", i, {
          flexible: y() == "flexible"
        })), o(t, a)
      },
      z = t => {
        var a = Q();
        g(() => x(a, 1, `flex h-16 items-center justify-center ${e.class??""}`, "svelte-1lm836y")), o(t, a)
      };
    H(T, t => {
      v.turnstatileLoaded && w(b) ? t(j) : t(z, !1)
    })
  }
  o(l, h), A()
}
export {
  ae as T, J as a
};