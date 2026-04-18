import "./BU-NCdSO.js";
import {
  o as N
} from "./CwAeRfTO.js";
import {
  K as R,
  x as S,
  W as q,
  w as M,
  bl as P,
  p as W,
  h as v,
  i as u,
  l as Y,
  f as A,
  a as y,
  b as B,
  e as _,
  t as x,
  c as I,
  u as G
} from "./Cp19uF2I.js";
import {
  i as H
} from "./BcjibeS2.js";
import {
  a as g
} from "./DWqOdrIT.js";
import {
  p as l
} from "./f9FzqMmi.js";
import "./CeWdbyfN.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "0536747e-bfc2-4132-9b6c-7ab76508350f", r._sentryDebugIdIdentifier = "sentry-dbid-0536747e-bfc2-4132-9b6c-7ab76508350f")
  } catch {}
})();

function J(r, e, n) {
  R(() => {
    var c = S(() => e(r, n == null ? void 0 : n()) || {});
    if (n && (c != null && c.update)) {
      var f = !1,
        s = {};
      q(() => {
        var d = n();
        M(d), f && P(s, d) && (s = d, c.update(d))
      }), f = !0
    }
    if (c != null && c.destroy) return () => c.destroy()
  })
}
let h = _(!1);
var O = I("<div></div>"),
  Q = I('<div><span class="loading loading-spinner loading-lg"></span></div>');

function te(r, e) {
  W(e, !0);
  let n = l(e, "widgetId", 15),
    c = l(e, "appearance", 3, "always"),
    f = l(e, "language", 3, "auto"),
    s = l(e, "execution", 3, "render"),
    d = l(e, "retryInterval", 3, 8e3),
    E = l(e, "retry", 3, "auto"),
    C = l(e, "refreshExpired", 3, "auto"),
    D = l(e, "theme", 3, "auto"),
    w = l(e, "size", 3, "normal"),
    T = l(e, "tabIndex", 3, 0);
  l(e, "reset", 15)(() => {
    var a;
    n() && ((a = window == null ? void 0 : window.turnstile) == null || a.reset(n()))
  });
  const j = G(() => ({
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
      "refresh-expired": C(),
      "retry-interval": d(),
      tabindex: T(),
      appearance: c(),
      execution: s(),
      language: f(),
      action: e.action,
      retry: E(),
      theme: D(),
      cData: e.cData,
      size: w()
    })),
    b = (a, t) => {
      let i = window.turnstile.render(a, t);
      return n(i), {
        destroy() {
          window.turnstile.remove(i)
        },
        update(o) {
          window.turnstile.remove(i), i = window.turnstile.render(a, o), n(i)
        }
      }
    };
  let m = _(!1);
  N(() => {
    if (v(m, !0), !u(h)) {
      const a = document.createElement("script");
      a.type = "text/javascript", a.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", a.async = !0, a.addEventListener("load", () => v(h, !0), {
        once: !0
      }), document.head.appendChild(a)
    }
    return () => {
      v(m, !1)
    }
  });
  var k = Y(),
    z = A(k);
  {
    var F = a => {
        var t = O();
        let i;
        J(t, (o, L) => b == null ? void 0 : b(o, L), () => u(j)), x(() => i = g(t, 1, `h-16 ${e.class??""}`, "svelte-1lm836y", i, {
          flexible: w() == "flexible"
        })), y(a, t)
      },
      K = a => {
        var t = Q();
        x(() => g(t, 1, `flex h-16 items-center justify-center ${e.class??""}`, "svelte-1lm836y")), y(a, t)
      };
    H(z, a => {
      u(h) && u(m) ? a(F) : a(K, !1)
    })
  }
  y(r, k), B()
}
export {
  te as T, J as a
};