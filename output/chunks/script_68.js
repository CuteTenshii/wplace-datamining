import "./zYeLZfCd.js";
import {
  M as ae,
  G as re,
  Y as ie,
  F as ne,
  br as le,
  p as Q,
  h as q,
  z as ce,
  f as V,
  i as I,
  a as C,
  b as W,
  e as X,
  t as U,
  c as G,
  u as Z,
  J as se,
  g as de,
  d as o,
  r as f,
  s as u,
  x as H
} from "./06720L-J.js";
import {
  s as x
} from "./h4g5cGcO.js";
import {
  i as B
} from "./Bcd-pEvU.js";
import {
  a as p,
  c as $,
  d as oe,
  s as A
} from "./C2m2a7vs.js";
import {
  p as d,
  r as fe
} from "./Da0yaIh1.js";
import {
  g as O,
  t as J,
  P as ue,
  b as ve
} from "./CaXnlR9f.js";
import {
  t as me
} from "./BoN4lZhy.js";
import {
  o as _e
} from "./DxrIaanS.js";
import "./CDV-gvd8.js";
import {
  b as be,
  t as xe,
  p as ge,
  a as he,
  c as ye,
  l as we,
  d as ke,
  m as Ie
} from "./BPUexO6z.js";
import {
  L as Ce
} from "./C5gz4xYy.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
    };
    var e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "c141abc6-077d-4d14-9a2a-4d64924ea9d6", n._sentryDebugIdIdentifier = "sentry-dbid-c141abc6-077d-4d14-9a2a-4d64924ea9d6")
  } catch {}
})();

function Ee(n, e, r) {
  ae(() => {
    var a = re(() => e(n, r == null ? void 0 : r()) || {});
    if (r && (a != null && a.update)) {
      var g = !1,
        _ = {};
      ie(() => {
        var v = r();
        ne(v), g && le(_, v) && (_ = v, a.update(v))
      }), g = !0
    }
    if (a != null && a.destroy) return () => a.destroy()
  })
}
var Le = G("<div></div>");

function Te(n, e) {
  Q(e, !0);
  let r = d(e, "widgetId", 15),
    a = d(e, "appearance", 3, "always"),
    g = d(e, "language", 3, "auto"),
    _ = d(e, "execution", 3, "render"),
    v = d(e, "retryInterval", 3, 8e3),
    K = d(e, "retry", 3, "auto"),
    E = d(e, "refreshExpired", 3, "auto"),
    P = d(e, "theme", 3, "auto"),
    D = d(e, "size", 3, "normal"),
    L = d(e, "tabIndex", 3, 0);
  d(e, "reset", 15)(() => {
    var t;
    r() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(r()))
  });
  const y = Z(() => ({
      sitekey: e.siteKey,
      callback: (t, c) => {
        var l;
        (l = e.callback) == null || l.call(e, t, c)
      },
      "error-callback": t => {
        var c;
        (c = e.errorCallback) == null || c.call(e, t)
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
      "retry-interval": v(),
      tabindex: L(),
      appearance: a(),
      execution: _(),
      language: g(),
      action: e.action,
      retry: K(),
      theme: P(),
      cData: e.cData,
      size: D()
    })),
    T = (t, c) => {
      let l = window.turnstile.render(t, c);
      return r(l), {
        destroy() {
          window.turnstile.remove(l)
        },
        update(i) {
          window.turnstile.remove(l), l = window.turnstile.render(t, i), r(l)
        }
      }
    };
  let h = X(!1);
  _e(() => {
    if (q(h, !0), !O.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => O.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      q(h, !1)
    }
  });
  var F = ce(),
    S = V(F);
  {
    var z = t => {
      var c = Le();
      let l;
      Ee(c, (i, s) => T == null ? void 0 : T(i, s), () => I(y)), U(() => l = p(c, 1, $(e.class), "svelte-1lm836y", l, {
        flexible: D() == "flexible"
      })), C(t, c)
    };
    B(S, t => {
      O.turnstatileLoaded && I(h) && t(z)
    })
  }
  C(n, F), W()
}
var Me = se('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function Be(n, e) {
  let r = fe(e, ["$$slots", "$$events", "$$legacy"]);
  var a = Me();
  oe(a, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...r
  })), C(n, a)
}
var De = G('<a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  Fe = G('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  Se = G('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function He(n, e) {
  Q(e, !0);
  let r = d(e, "showTwitchMigration", 3, !0),
    a = X(de(J ? "" : "turnstile-disabled"));

  function g(i, s) {
    return `${ue}/auth/${i}?token=${s}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var _ = Se(),
    v = o(_),
    K = o(v);
  Ce(K, {
    hasText: !0
  }), f(v);
  var E = u(v, 2),
    P = o(E);
  {
    var D = i => {
      var s = De(),
        m = V(s),
        b = o(m);
      Be(b, {
        class: "mr-1 size-5"
      });
      var M = u(b);
      f(m);
      var w = u(m, 2),
        N = o(w);
      {
        var j = k => {
          {
            let Y = Z(() => ve.trim());
            Te(k, {
              get siteKey() {
                return I(Y)
              },
              callback: te => {
                q(a, te, !0)
              }
            })
          }
        };
        B(N, k => {
          J && k(j)
        })
      }
      var ee = u(N, 2);
      B(ee, k => {}), f(w), U((k, Y) => {
        p(m, 1, $({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !I(a)
        })), A(m, "href", k), x(M, ` ${Y??""}`)
      }, [() => I(a) ? g("google", I(a)) : "#", () => we({
        name: "Google"
      })]), C(i, s)
    };
    B(P, i => {
      i(D, !1)
    })
  }
  f(E);
  var L = u(E, 2),
    R = o(L),
    y = u(R),
    T = o(y, !0);
  f(y);
  var h = u(y, 2),
    F = o(h, !0);
  f(h);
  var S = u(h),
    z = u(S),
    t = o(z, !0);
  f(z), H(), f(L);
  var c = u(L, 2);
  {
    var l = i => {
      var s = Fe(),
        m = o(s),
        b = u(m),
        M = o(b, !0);
      f(b), H(), f(s), U((w, N, j) => {
        x(m, `${w??""} `), A(b, "href", N), x(M, j)
      }, [() => ke(), () => g("twitch", ""), () => Ie()]), C(i, s)
    };
    B(c, i => {
      r() && i(l)
    })
  }
  f(_), U((i, s, m, b, M, w) => {
    x(R, `${i??""} `), A(y, "href", s), x(T, m), x(F, b), x(S, ` ${M??""} `), x(t, w)
  }, [() => be(), me, () => xe(), () => ge(), () => he(), () => ye()]), C(n, _), W()
}
export {
  He as L
};