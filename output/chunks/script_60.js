import "./NJ1wl9Ag.js";
import {
  C as ae,
  x as re,
  Q as ne,
  y as ie,
  bk as le,
  p as J,
  i as q,
  e as V,
  h as se,
  a as W,
  j as I,
  b as C,
  c as X,
  f as z,
  t as j,
  u as Z,
  A as ce,
  g as de,
  d as o,
  r as f,
  s as u,
  n as H
} from "./8X9bXL-a.js";
import {
  s as g
} from "./DccA2BST.js";
import {
  i as D
} from "./DX5d1P7w.js";
import {
  a as p,
  c as $,
  d as oe,
  s as O
} from "./dddymV92.js";
import {
  p as d,
  r as fe
} from "./CFd8M3Ff.js";
import {
  g as Y,
  t as Q,
  P as ue,
  a as ve
} from "./CmkX6TYZ.js";
import {
  t as me
} from "./CBaRtXze.js";
import {
  o as _e
} from "./BZeD3JTM.js";
import "./lNmZA2C_.js";
import {
  b as be,
  t as ge,
  p as he,
  a as xe,
  c as ye,
  l as we,
  d as ke,
  m as Ie
} from "./ChkIRgyT.js";
import {
  L as Ce
} from "./BJpeSQ_1.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "0e0f1d9d12a0c5d9ef5f263afa770640948e8e71"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "dcb5278d-d63e-4c58-9fa4-17ee86be0060", r._sentryDebugIdIdentifier = "sentry-dbid-dcb5278d-d63e-4c58-9fa4-17ee86be0060")
  })()
} catch {}

function Ee(r, e, i) {
  ae(() => {
    var a = re(() => e(r, i == null ? void 0 : i()) || {});
    if (i && (a != null && a.update)) {
      var h = !1,
        _ = {};
      ne(() => {
        var v = i();
        ie(v), h && le(_, v) && (_ = v, a.update(v))
      }), h = !0
    }
    if (a != null && a.destroy) return () => a.destroy()
  })
}
var Le = z("<div></div>");

function Te(r, e) {
  J(e, !0);
  let i = d(e, "widgetId", 15),
    a = d(e, "appearance", 3, "always"),
    h = d(e, "language", 3, "auto"),
    _ = d(e, "execution", 3, "render"),
    v = d(e, "retryInterval", 3, 8e3),
    K = d(e, "retry", 3, "auto"),
    E = d(e, "refreshExpired", 3, "auto"),
    P = d(e, "theme", 3, "auto"),
    M = d(e, "size", 3, "normal"),
    L = d(e, "tabIndex", 3, 0);
  d(e, "reset", 15)(() => {
    var t;
    i() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(i()))
  });
  const y = Z(() => ({
      sitekey: e.siteKey,
      callback: (t, s) => {
        var l;
        (l = e.callback) == null || l.call(e, t, s)
      },
      "error-callback": t => {
        var s;
        (s = e.errorCallback) == null || s.call(e, t)
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
      language: h(),
      action: e.action,
      retry: K(),
      theme: P(),
      cData: e.cData,
      size: M()
    })),
    T = (t, s) => {
      let l = window.turnstile.render(t, s);
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
  _e(() => {
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
  var F = se(),
    S = W(F);
  {
    var N = t => {
      var s = Le();
      let l;
      Ee(s, (n, c) => T == null ? void 0 : T(n, c), () => I(y)), j(() => l = p(s, 1, $(e.class), "svelte-1lm836y", l, {
        flexible: M() == "flexible"
      })), C(t, s)
    };
    D(S, t => {
      Y.turnstatileLoaded && I(x) && t(N)
    })
  }
  C(r, F), X()
}
var Be = ce('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function De(r, e) {
  let i = fe(e, ["$$slots", "$$events", "$$legacy"]);
  var a = Be();
  oe(a, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...i
  })), C(r, a)
}
var Me = z('<a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  Fe = z('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  Se = z('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function He(r, e) {
  J(e, !0);
  let i = d(e, "showTwitchMigration", 3, !0),
    a = V(de(Q ? "" : "turnstile-disabled"));

  function h(n, c) {
    return `${ue}/auth/${n}?token=${c}${e.redirect?`&r=${e.redirect}`:""}`
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
    var M = n => {
      var c = Me(),
        m = W(c),
        b = o(m);
      De(b, {
        class: "mr-1 size-5"
      });
      var B = u(b);
      f(m);
      var w = u(m, 2),
        U = o(w);
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
        D(U, k => {
          Q && k(A)
        })
      }
      var ee = u(U, 2);
      D(ee, k => {}), f(w), j((k, G) => {
        p(m, 1, $({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !I(a)
        })), O(m, "href", k), g(B, ` ${G??""}`)
      }, [() => I(a) ? h("google", I(a)) : "#", () => we({
        name: "Google"
      })]), C(n, c)
    };
    D(P, n => {
      n(M, !1)
    })
  }
  f(E);
  var L = u(E, 2),
    R = o(L),
    y = u(R),
    T = o(y, !0);
  f(y);
  var x = u(y, 2),
    F = o(x, !0);
  f(x);
  var S = u(x),
    N = u(S),
    t = o(N, !0);
  f(N), H(), f(L);
  var s = u(L, 2);
  {
    var l = n => {
      var c = Fe(),
        m = o(c),
        b = u(m),
        B = o(b, !0);
      f(b), H(), f(c), j((w, U, A) => {
        g(m, `${w??""} `), O(b, "href", U), g(B, A)
      }, [() => ke(), () => h("twitch", ""), () => Ie()]), C(n, c)
    };
    D(s, n => {
      i() && n(l)
    })
  }
  f(_), j((n, c, m, b, B, w) => {
    g(R, `${n??""} `), O(y, "href", c), g(T, m), g(F, b), g(S, ` ${B??""} `), g(t, w)
  }, [() => be(), me, () => ge(), () => he(), () => xe(), () => ye()]), C(r, _), X()
}
export {
  He as L
};