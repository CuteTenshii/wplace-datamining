import "./CS4ZNXuX.js";
import {
  M as be,
  G as ge,
  Y as we,
  F as he,
  br as xe,
  p as te,
  h as J,
  z as ye,
  f as ae,
  i as T,
  a as k,
  b as re,
  e as ne,
  t as N,
  c as P,
  u as ie,
  J as ke,
  y as Ie,
  g as Ee,
  d as n,
  r as i,
  s as l,
  x as $,
  A as Ce
} from "./CDr0agER.js";
import {
  s as u
} from "./DHv65DOa.js";
import {
  i as B
} from "./XkFG-7Qc.js";
import {
  a as se,
  c as le,
  d as Le,
  s as q
} from "./43M0aA8z.js";
import {
  p as v,
  r as Be
} from "./CUISnwra.js";
import {
  g as H,
  t as ee,
  P as Te,
  b as Ae
} from "./f7GlGWS5.js";
import {
  t as Fe
} from "./CA5PFtuz.js";
import {
  o as Me
} from "./DrX9X5Tj.js";
import "./n6S4vljj.js";
import {
  b as Se,
  t as ze,
  p as De,
  a as Ne,
  c as Pe,
  l as Re,
  d as Ue,
  m as Ge,
  w as Oe,
  e as Ve,
  o as We
} from "./BLZdRiDL.js";
import {
  L as je
} from "./BELC4Jgs.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "499b14f045c01e257aa2f9d700904a576cc252cf"
    };
    var e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "6175ba2e-3d98-4e44-bf39-9c5d7b41fbc0", a._sentryDebugIdIdentifier = "sentry-dbid-6175ba2e-3d98-4e44-bf39-9c5d7b41fbc0")
  } catch {}
})();

function Ke(a, e, s) {
  be(() => {
    var r = ge(() => e(a, s == null ? void 0 : s()) || {});
    if (s && (r != null && r.update)) {
      var I = !1,
        h = {};
      we(() => {
        var g = s();
        he(g), I && xe(h, g) && (h = g, r.update(g))
      }), I = !0
    }
    if (r != null && r.destroy) return () => r.destroy()
  })
}
const Ye = /; wv\)|FBAN|FBAV|Instagram|BytedanceWebview|musical_ly|Line\/|Snapchat|Twitter|MicroMessenger/i;

function qe() {
  return Ye.test(navigator.userAgent)
}

function ut() {
  const a = navigator.userAgent,
    e = navigator.vendor;
  return /Chrome/.test(a) && /Google Inc/.test(e) ? "Chrome" : /Safari/.test(a) && /Apple Computer/.test(e) ? "Safari" : /Firefox/.test(a) ? "Firefox" : /Edge/.test(a) ? "Edge" : /Opera|OPR/.test(a) ? "Opera" : "Unknown"
}
var He = P("<div></div>");

function Je(a, e) {
  te(e, !0);
  let s = v(e, "widgetId", 15),
    r = v(e, "appearance", 3, "always"),
    I = v(e, "language", 3, "auto"),
    h = v(e, "execution", 3, "render"),
    g = v(e, "retryInterval", 3, 8e3),
    A = v(e, "retry", 3, "auto"),
    F = v(e, "refreshExpired", 3, "auto"),
    G = v(e, "theme", 3, "auto"),
    E = v(e, "size", 3, "normal"),
    O = v(e, "tabIndex", 3, 0);
  v(e, "reset", 15)(() => {
    var t;
    s() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(s()))
  });
  const M = ie(() => ({
      sitekey: e.siteKey,
      callback: (t, o) => {
        var d;
        (d = e.callback) == null || d.call(e, t, o)
      },
      "error-callback": t => {
        var o;
        (o = e.errorCallback) == null || o.call(e, t)
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
      "refresh-expired": F(),
      "retry-interval": g(),
      tabindex: O(),
      appearance: r(),
      execution: h(),
      language: I(),
      action: e.action,
      retry: A(),
      theme: G(),
      cData: e.cData,
      size: E()
    })),
    C = (t, o) => {
      let d = window.turnstile.render(t, o);
      return s(d), {
        destroy() {
          window.turnstile.remove(d)
        },
        update(z) {
          window.turnstile.remove(d), d = window.turnstile.render(t, z), s(d)
        }
      }
    };
  let w = ne(!1);
  Me(() => {
    if (J(w, !0), !H.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => H.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      J(w, !1)
    }
  });
  var R = ye(),
    S = ae(R);
  {
    var V = t => {
      var o = He();
      let d;
      Ke(o, (z, W) => C == null ? void 0 : C(z, W), () => T(M)), N(() => d = se(o, 1, le(e.class), "svelte-1lm836y", d, {
        flexible: E() == "flexible"
      })), k(t, o)
    };
    B(S, t => {
      H.turnstatileLoaded && T(w) && t(V)
    })
  }
  k(a, R), re()
}
var Qe = ke('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function Xe(a, e) {
  let s = Be(e, ["$$slots", "$$events", "$$legacy"]);
  var r = Qe();
  Le(r, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...s
  })), k(a, r)
}
var Ze = P('<div role="alert" class="w-full rounded-lg border border-warning bg-warning/10 p-4 flex flex-col gap-3"><div class="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" class="size-5 shrink-0 mt-0.5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> <div><h3 class="font-bold text-sm"> </h3> <p class="text-xs opacity-70"> </p></div></div> <button class="btn btn-sm btn-warning w-full"> </button></div>'),
  pe = P('<!> <a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  $e = P('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  et = P('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function mt(a, e) {
  te(e, !0);
  let s = v(e, "showTwitchMigration", 3, !0),
    r = ne(Ee(ee ? "" : "turnstile-disabled"));
  const I = qe();

  function h(c, f) {
    return `${Te}/auth/${c}?token=${f}${e.redirect?`&r=${e.redirect}`:""}`
  }

  function g() {
    const c = window.location.origin,
      f = navigator.userAgent;
    if (/Android/i.test(f)) {
      const _ = c.replace(/^https?:\/\//, "");
      window.location.href = "intent://" + _ + "#Intent;scheme=https;action=android.intent.action.VIEW;end"
    } else window.open(c, "_system")
  }
  var A = et(),
    F = n(A),
    G = n(F);
  je(G, {
    hasText: !0
  }), i(F);
  var E = l(F, 2),
    O = n(E);
  {
    var Q = c => {
      var f = pe(),
        _ = ae(f);
      {
        var x = m => {
          var y = Ze(),
            D = n(y),
            Z = l(n(D), 2),
            K = n(Z),
            de = n(K, !0);
          i(K);
          var p = l(K, 2),
            fe = n(p, !0);
          i(p), i(Z), i(D);
          var Y = l(D, 2),
            ve = n(Y, !0);
          i(Y), i(y), N((ue, me, _e) => {
            u(de, ue), u(fe, me), u(ve, _e)
          }, [() => Oe(), () => Ve(), () => We()]), Ce("click", Y, g), k(m, y)
        };
        B(_, m => {
          I && m(x)
        })
      }
      var b = l(_, 2),
        L = n(b);
      Xe(L, {
        class: "mr-1 size-5"
      });
      var j = l(L);
      i(b);
      var U = l(b, 2),
        X = n(U);
      {
        var ce = m => {
          {
            let y = ie(() => Ae.trim());
            Je(m, {
              get siteKey() {
                return T(y)
              },
              callback: D => {
                J(r, D, !0)
              }
            })
          }
        };
        B(X, m => {
          ee && m(ce)
        })
      }
      var oe = l(X, 2);
      B(oe, m => {}), i(U), N((m, y) => {
        se(b, 1, le({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !T(r)
        })), q(b, "href", m), u(j, ` ${y??""}`)
      }, [() => T(r) ? h("google", T(r)) : "#", () => Re({
        name: "Google"
      })]), k(c, f)
    };
    B(O, c => {
      c(Q, !1)
    })
  }
  i(E);
  var M = l(E, 2),
    C = n(M),
    w = l(C),
    R = n(w, !0);
  i(w);
  var S = l(w, 2),
    V = n(S, !0);
  i(S);
  var t = l(S),
    o = l(t),
    d = n(o, !0);
  i(o), $(), i(M);
  var z = l(M, 2);
  {
    var W = c => {
      var f = $e(),
        _ = n(f),
        x = l(_),
        b = n(x, !0);
      i(x), $(), i(f), N((L, j, U) => {
        u(_, `${L??""} `), q(x, "href", j), u(b, U)
      }, [() => Ue(), () => h("twitch", ""), () => Ge()]), k(c, f)
    };
    B(z, c => {
      s() && c(W)
    })
  }
  i(A), N((c, f, _, x, b, L) => {
    u(C, `${c??""} `), q(w, "href", f), u(R, _), u(V, x), u(t, ` ${b??""} `), u(d, L)
  }, [() => Se(), Fe, () => ze(), () => De(), () => Ne(), () => Pe()]), k(a, A), re()
}
Ie(["click"]);
export {
  mt as L, ut as d
};