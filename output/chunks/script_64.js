import "./D_QYbpqW.js";
import {
  K as ae,
  I as re,
  W as ie,
  G as ne,
  bq as le,
  p as W,
  h as Y,
  z as ce,
  f as Q,
  i as I,
  a as C,
  b as V,
  e as X,
  t as N,
  c as U,
  u as Z,
  J as se,
  g as de,
  d as o,
  r as f,
  s as u,
  x as H
} from "./C3nPqK5x.js";
import {
  s as x
} from "./BFSLG3Mv.js";
import {
  i as D
} from "./ajdkTjia.js";
import {
  a as p,
  c as $,
  f as oe,
  s as A
} from "./kg9Z0q_v.js";
import {
  p as d,
  r as fe
} from "./CR98XY6P.js";
import {
  g as O,
  t as J,
  P as ue,
  b as ve
} from "./euxv8vCT.js";
import {
  t as me
} from "./CXa5LarG.js";
import {
  o as _e
} from "./BeRg4IsX.js";
import "./sPnE0boO.js";
import {
  b as be,
  t as xe,
  p as ge,
  a as he,
  c as ye,
  l as we,
  d as ke,
  m as Ie
} from "./BhhudVh0.js";
import {
  L as Ce
} from "./C5LxozVQ.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var e = new n.Error().stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "c3a77945-b78c-4062-8ce0-47c5f439a462", n._sentryDebugIdIdentifier = "sentry-dbid-c3a77945-b78c-4062-8ce0-47c5f439a462")
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
var Le = U("<div></div>");

function Te(n, e) {
  W(e, !0);
  let r = d(e, "widgetId", 15),
    a = d(e, "appearance", 3, "always"),
    g = d(e, "language", 3, "auto"),
    _ = d(e, "execution", 3, "render"),
    v = d(e, "retryInterval", 3, 8e3),
    G = d(e, "retry", 3, "auto"),
    E = d(e, "refreshExpired", 3, "auto"),
    P = d(e, "theme", 3, "auto"),
    M = d(e, "size", 3, "normal"),
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
      retry: G(),
      theme: P(),
      cData: e.cData,
      size: M()
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
    if (Y(h, !0), !O.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => O.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      Y(h, !1)
    }
  });
  var F = ce(),
    S = Q(F);
  {
    var z = t => {
      var c = Le();
      let l;
      Ee(c, (i, s) => T == null ? void 0 : T(i, s), () => I(y)), N(() => l = p(c, 1, $(e.class), "svelte-1lm836y", l, {
        flexible: M() == "flexible"
      })), C(t, c)
    };
    D(S, t => {
      O.turnstatileLoaded && I(h) && t(z)
    })
  }
  C(n, F), V()
}
var Be = se('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function De(n, e) {
  let r = fe(e, ["$$slots", "$$events", "$$legacy"]);
  var a = Be();
  oe(a, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...r
  })), C(n, a)
}
var Me = U('<a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  Fe = U('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  Se = U('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function He(n, e) {
  W(e, !0);
  let r = d(e, "showTwitchMigration", 3, !0),
    a = X(de(J ? "" : "turnstile-disabled"));

  function g(i, s) {
    return `${ue}/auth/${i}?token=${s}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var _ = Se(),
    v = o(_),
    G = o(v);
  Ce(G, {
    hasText: !0
  }), f(v);
  var E = u(v, 2),
    P = o(E);
  {
    var M = i => {
      var s = Me(),
        m = Q(s),
        b = o(m);
      De(b, {
        class: "mr-1 size-5"
      });
      var B = u(b);
      f(m);
      var w = u(m, 2),
        K = o(w);
      {
        var j = k => {
          {
            let q = Z(() => ve.trim());
            Te(k, {
              get siteKey() {
                return I(q)
              },
              callback: te => {
                Y(a, te, !0)
              }
            })
          }
        };
        D(K, k => {
          J && k(j)
        })
      }
      var ee = u(K, 2);
      D(ee, k => {}), f(w), N((k, q) => {
        p(m, 1, $({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !I(a)
        })), A(m, "href", k), x(B, ` ${q??""}`)
      }, [() => I(a) ? g("google", I(a)) : "#", () => we({
        name: "Google"
      })]), C(i, s)
    };
    D(P, i => {
      i(M, !1)
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
        B = o(b, !0);
      f(b), H(), f(s), N((w, K, j) => {
        x(m, `${w??""} `), A(b, "href", K), x(B, j)
      }, [() => ke(), () => g("twitch", ""), () => Ie()]), C(i, s)
    };
    D(c, i => {
      r() && i(l)
    })
  }
  f(_), N((i, s, m, b, B, w) => {
    x(R, `${i??""} `), A(y, "href", s), x(T, m), x(F, b), x(S, ` ${B??""} `), x(t, w)
  }, [() => be(), me, () => xe(), () => ge(), () => he(), () => ye()]), C(n, _), V()
}
export {
  He as L
};