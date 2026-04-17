import "./DEy4XHdA.js";
import {
  o as S
} from "./DyEZsWom.js";
import {
  K,
  x as N,
  W as R,
  w as q,
  bk as M,
  p as P,
  h as k,
  l as W,
  f as Y,
  i as w,
  a as o,
  b as A,
  e as B,
  t as g,
  c as _,
  u as G
} from "./BBqfZ3Cy.js";
import {
  i as H
} from "./DtMKSaSA.js";
import {
  a as x
} from "./D8Ccz4Os.js";
import {
  p as r
} from "./BKBQj-Ne.js";
import {
  j as v
} from "./B-GoKQxR.js";
(function() {
  try {
    var l = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    l.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var e = new l.Error().stack;
    e && (l._sentryDebugIds = l._sentryDebugIds || {}, l._sentryDebugIds[e] = "dce32961-bbc6-43da-912b-fa64615101bf", l._sentryDebugIdIdentifier = "sentry-dbid-dce32961-bbc6-43da-912b-fa64615101bf")
  } catch {}
})();

function J(l, e, n) {
  K(() => {
    var d = N(() => e(l, n == null ? void 0 : n()) || {});
    if (n && (d != null && d.update)) {
      var s = !1,
        f = {};
      R(() => {
        var c = n();
        q(c), s && M(f, c) && (f = c, d.update(c))
      }), s = !0
    }
    if (d != null && d.destroy) return () => d.destroy()
  })
}
var O = _("<div></div>"),
  Q = _('<div><span class="loading loading-spinner loading-lg"></span></div>');

function te(l, e) {
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
    var a;
    n() && ((a = window == null ? void 0 : window.turnstile) == null || a.reset(n()))
  });
  const L = G(() => ({
      sitekey: e.siteKey,
      callback: (a, t) => {
        var i;
        (i = e.callback) == null || i.call(e, a, t)
      },
      "error-callback": a => {
        var t;
        (t = e.errorCallback) == null || t.call(e, a)
      },
      "timeout-callback": () => {
        var a;
        (a = e.timeoutCallback) == null || a.call(e)
      },
      "expired-callback": () => {
        var a;
        (a = e.expiredCallback) == null || a.call(e)
      },
      "before-interactive-callback": () => {
        var a;
        (a = e.beforeInteractiveCallback) == null || a.call(e)
      },
      "after-interactive-callback": () => {
        var a;
        (a = e.afterInteractiveCallback) == null || a.call(e)
      },
      "unsupported-callback": () => {
        var a;
        return (a = e.unsupportedCallback) == null ? void 0 : a.call(e)
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
    u = (a, t) => {
      let i = window.turnstile.render(a, t);
      return n(i), {
        destroy() {
          window.turnstile.remove(i)
        },
        update(m) {
          window.turnstile.remove(i), i = window.turnstile.render(a, m), n(i)
        }
      }
    };
  let b = B(!1);
  S(() => {
    if (k(b, !0), !v.turnstatileLoaded) {
      const a = document.createElement("script");
      a.type = "text/javascript", a.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", a.async = !0, a.addEventListener("load", () => v.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(a)
    }
    return () => {
      k(b, !1)
    }
  });
  var h = W(),
    T = Y(h);
  {
    var j = a => {
        var t = O();
        let i;
        J(t, (m, F) => u == null ? void 0 : u(m, F), () => w(L)), g(() => i = x(t, 1, `h-16 ${e.class??""}`, "svelte-1lm836y", i, {
          flexible: y() == "flexible"
        })), o(a, t)
      },
      z = a => {
        var t = Q();
        g(() => x(t, 1, `flex h-16 items-center justify-center ${e.class??""}`, "svelte-1lm836y")), o(a, t)
      };
    H(T, a => {
      v.turnstatileLoaded && w(b) ? a(j) : a(z, !1)
    })
  }
  o(l, h), A()
}
export {
  te as T, J as a
};