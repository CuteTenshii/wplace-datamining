import "./DWVx-7Yc.js";
import {
  B as ae,
  y as re,
  R as ne,
  z as ie,
  bj as le,
  p as Q,
  i as q,
  e as V,
  h as ce,
  a as W,
  j as I,
  b as C,
  c as X,
  f as R,
  t as N,
  u as Z,
  A as se,
  g as de,
  d as o,
  r as f,
  s as u,
  n as H
} from "./ik5_Egbm.js";
import {
  s as g
} from "./BFqvoKBo.js";
import {
  i as D
} from "./DRMWP4iH.js";
import {
  a as p,
  c as $,
  f as oe,
  s as O
} from "./D4v5FfCX.js";
import {
  p as d,
  r as fe
} from "./DiNbIEyp.js";
import {
  g as Y,
  t as J,
  P as ue,
  a as ve
} from "./BHWlz8lF.js";
import {
  t as me
} from "./OPzvMOik.js";
import {
  o as be
} from "./BMGIUNt7.js";
import "./VsNXmfsE.js";
import {
  b as _e,
  t as ge,
  p as he,
  a as xe,
  c as ye,
  l as we,
  d as ke,
  m as Ie
} from "./NDDlqx9V.js";
import {
  L as Ce
} from "./DYMCMOCj.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "1ff68788c5989e2fec5a9c9b2aaa5ef268601fd5"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "c6c822a3-a005-4b32-b234-ffb39d8d9ecc", r._sentryDebugIdIdentifier = "sentry-dbid-c6c822a3-a005-4b32-b234-ffb39d8d9ecc")
  })()
} catch {}

function Ee(r, e, i) {
  ae(() => {
    var a = re(() => e(r, i == null ? void 0 : i()) || {});
    if (i && (a != null && a.update)) {
      var h = !1,
        b = {};
      ne(() => {
        var v = i();
        ie(v), h && le(b, v) && (b = v, a.update(v))
      }), h = !0
    }
    if (a != null && a.destroy) return () => a.destroy()
  })
}
var Le = R("<div></div>");

function Te(r, e) {
  Q(e, !0);
  let i = d(e, "widgetId", 15),
    a = d(e, "appearance", 3, "always"),
    h = d(e, "language", 3, "auto"),
    b = d(e, "execution", 3, "render"),
    v = d(e, "retryInterval", 3, 8e3),
    U = d(e, "retry", 3, "auto"),
    E = d(e, "refreshExpired", 3, "auto"),
    K = d(e, "theme", 3, "auto"),
    M = d(e, "size", 3, "normal"),
    L = d(e, "tabIndex", 3, 0);
  d(e, "reset", 15)(() => {
    var t;
    i() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(i()))
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
      execution: b(),
      language: h(),
      action: e.action,
      retry: U(),
      theme: K(),
      cData: e.cData,
      size: M()
    })),
    T = (t, c) => {
      let l = window.turnstile.render(t, c);
      return i(l), {
        destroy() {
          window.turnstile.remove(l)
        },
        update(n) {
          window.turnstile.remove(l), l = window.turnstile.render(t, n), i(l)
        }
      }
    };
  let x = V(!1);
  be(() => {
    if (q(x, !0), !Y.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => Y.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      q(x, !1)
    }
  });
  var F = ce(),
    S = W(F);
  {
    var j = t => {
      var c = Le();
      let l;
      Ee(c, (n, s) => T == null ? void 0 : T(n, s), () => I(y)), N(() => l = p(c, 1, $(e.class), "svelte-1lm836y", l, {
        flexible: M() == "flexible"
      })), C(t, c)
    };
    D(S, t => {
      Y.turnstatileLoaded && I(x) && t(j)
    })
  }
  C(r, F), X()
}
var Be = se('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function De(r, e) {
  let i = fe(e, ["$$slots", "$$events", "$$legacy"]);
  var a = Be();
  oe(a, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...i
  })), C(r, a)
}
var Me = R('<a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  Fe = R('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  Se = R('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function He(r, e) {
  Q(e, !0);
  let i = d(e, "showTwitchMigration", 3, !0),
    a = V(de(J ? "" : "turnstile-disabled"));

  function h(n, s) {
    return `${ue}/auth/${n}?token=${s}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var b = Se(),
    v = o(b),
    U = o(v);
  Ce(U, {
    hasText: !0
  }), f(v);
  var E = u(v, 2),
    K = o(E);
  {
    var M = n => {
      var s = Me(),
        m = W(s),
        _ = o(m);
      De(_, {
        class: "mr-1 size-5"
      });
      var B = u(_);
      f(m);
      var w = u(m, 2),
        z = o(w);
      {
        var A = k => {
          {
            let G = Z(() => ve.trim());
            Te(k, {
              get siteKey() {
                return I(G)
              },
              callback: te => {
                q(a, te, !0)
              }
            })
          }
        };
        D(z, k => {
          J && k(A)
        })
      }
      var ee = u(z, 2);
      D(ee, k => {}), f(w), N((k, G) => {
        p(m, 1, $({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !I(a)
        })), O(m, "href", k), g(B, ` ${G??""}`)
      }, [() => I(a) ? h("google", I(a)) : "#", () => we({
        name: "Google"
      })]), C(n, s)
    };
    D(K, n => {
      n(M, !1)
    })
  }
  f(E);
  var L = u(E, 2),
    P = o(L),
    y = u(P),
    T = o(y, !0);
  f(y);
  var x = u(y, 2),
    F = o(x, !0);
  f(x);
  var S = u(x),
    j = u(S),
    t = o(j, !0);
  f(j), H(), f(L);
  var c = u(L, 2);
  {
    var l = n => {
      var s = Fe(),
        m = o(s),
        _ = u(m),
        B = o(_, !0);
      f(_), H(), f(s), N((w, z, A) => {
        g(m, `${w??""} `), O(_, "href", z), g(B, A)
      }, [() => ke(), () => h("twitch", ""), () => Ie()]), C(n, s)
    };
    D(c, n => {
      i() && n(l)
    })
  }
  f(b), N((n, s, m, _, B, w) => {
    g(P, `${n??""} `), O(y, "href", s), g(T, m), g(F, _), g(S, ` ${B??""} `), g(t, w)
  }, [() => _e(), me, () => ge(), () => he(), () => xe(), () => ye()]), C(r, b), X()
}
export {
  He as L
};