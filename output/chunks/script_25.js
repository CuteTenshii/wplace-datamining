import "./DemjF_EU.js";
import {
  o as S
} from "./BFbNLUid.js";
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
} from "./jMNCXwTX.js";
import {
  i as H
} from "./NH9JmFAp.js";
import {
  a as x
} from "./BVdHsGeD.js";
import {
  p as r
} from "./BymP_Peq.js";
import {
  j as v
} from "./DsDULUHW.js";
(function() {
  try {
    var l = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    l.SENTRY_RELEASE = {
      id: "d92995df349756f69cfad78cc6651ba9aa7c7814"
    };
    var e = new l.Error().stack;
    e && (l._sentryDebugIds = l._sentryDebugIds || {}, l._sentryDebugIds[e] = "3dc8b9e7-4850-4022-b3de-34014628ffd2", l._sentryDebugIdIdentifier = "sentry-dbid-3dc8b9e7-4850-4022-b3de-34014628ffd2")
  } catch {}
})();

function J(l, e, n) {
  N(() => {
    var d = R(() => e(l, n == null ? void 0 : n()) || {});
    if (n && (d != null && d.update)) {
      var f = !1,
        s = {};
      q(() => {
        var c = n();
        K(c), f && M(s, c) && (s = c, d.update(c))
      }), f = !0
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
    f = r(e, "language", 3, "auto"),
    s = r(e, "execution", 3, "render"),
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
      execution: s(),
      language: f(),
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
        update(b) {
          window.turnstile.remove(i), i = window.turnstile.render(a, b), n(i)
        }
      }
    };
  let m = B(!1);
  S(() => {
    if (k(m, !0), !v.turnstatileLoaded) {
      const a = document.createElement("script");
      a.type = "text/javascript", a.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", a.async = !0, a.addEventListener("load", () => v.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(a)
    }
    return () => {
      k(m, !1)
    }
  });
  var h = X(),
    T = Y(h);
  {
    var j = a => {
        var t = O();
        let i;
        J(t, (b, F) => u == null ? void 0 : u(b, F), () => w(L)), g(() => i = x(t, 1, `h-16 ${e.class??""}`, "svelte-1lm836y", i, {
          flexible: y() == "flexible"
        })), o(a, t)
      },
      z = a => {
        var t = Q();
        g(() => x(t, 1, `flex h-16 items-center justify-center ${e.class??""}`, "svelte-1lm836y")), o(a, t)
      };
    H(T, a => {
      v.turnstatileLoaded && w(m) ? a(j) : a(z, !1)
    })
  }
  o(l, h), A()
}
export {
  te as T, J as a
};