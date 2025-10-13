import "./CxZHGuTs.js";
import {
  T as ce,
  H as se,
  O as oe,
  K as de,
  a_ as fe,
  p as X,
  z as D,
  w as R,
  A as ue,
  a as Z,
  g as v,
  b as w,
  c as p,
  f as V,
  t as U,
  u as $,
  C as ee,
  x as ve,
  d,
  r as f,
  s as u
} from "./j_iXX3SE.js";
import {
  s as y
} from "./CyTBL2UF.js";
import {
  p as c,
  i as B,
  r as te
} from "./Cj0u-77H.js";
import {
  a as j,
  c as G,
  d as ae,
  s as J
} from "./T5YiijHj.js";
import {
  b as me
} from "./Dd9mJZTK.js";
import {
  g as A,
  d as Q,
  P as _e,
  e as be
} from "./Dc59j4Mu.js";
import {
  o as ge
} from "./CJcG_ADK.js";
import {
  g as L
} from "./DNe0cQT0.js";
import {
  L as he
} from "./rqL07w1a.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "29ae9b21d49bd1827c9d9708d11ce0563a962117"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "c0c807b3-84aa-48ae-918a-2f3d9189a6f6", a._sentryDebugIdIdentifier = "sentry-dbid-c0c807b3-84aa-48ae-918a-2f3d9189a6f6")
  })()
} catch {}

function ye(a, e, n) {
  ce(() => {
    var r = se(() => e(a, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var _ = !1,
        m = {};
      oe(() => {
        var s = n();
        de(s), _ && fe(m, s) && (m = s, r.update(s))
      }), _ = !0
    }
    if (r != null && r.destroy) return () => r.destroy()
  })
}
const we = a => `Login with ${a.name}`,
  xe = a => `Entrar com ${a.name}`,
  W = (a, e = {}) => (e.locale ?? L()) === "en" ? we(a) : xe(a),
  ke = () => "By continuing, you agree to our",
  Ie = () => "Ao continuar, você concorda com nossos",
  Le = (a = {}, e = {}) => (e.locale ?? L()) === "en" ? ke() : Ie(),
  Ce = () => "Terms of Service",
  Ee = () => "Termos de Serviço",
  Te = (a = {}, e = {}) => (e.locale ?? L()) === "en" ? Ce() : Ee(),
  ze = () => "and",
  Be = () => "e",
  De = (a = {}, e = {}) => (e.locale ?? L()) === "en" ? ze() : Be(),
  Me = () => "Privacy Policy",
  Pe = () => "Política de privacidade",
  Se = (a = {}, e = {}) => (e.locale ?? L()) === "en" ? Me() : Pe();
var Fe = V("<div></div>");

function He(a, e) {
  X(e, !0);
  let n = c(e, "widgetId", 15),
    r = c(e, "appearance", 3, "always"),
    _ = c(e, "language", 3, "auto"),
    m = c(e, "execution", 3, "render"),
    s = c(e, "retryInterval", 3, 8e3),
    M = c(e, "retry", 3, "auto"),
    g = c(e, "refreshExpired", 3, "auto"),
    C = c(e, "theme", 3, "auto"),
    E = c(e, "size", 3, "normal"),
    P = c(e, "tabIndex", 3, 0);
  c(e, "reset", 15)(() => {
    var t;
    n() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(n()))
  });
  const T = $(() => ({
      sitekey: e.siteKey,
      callback: (t, i) => {
        var l;
        (l = e.callback) == null || l.call(e, t, i)
      },
      "error-callback": t => {
        var i;
        (i = e.errorCallback) == null || i.call(e, t)
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
      "refresh-expired": g(),
      "retry-interval": s(),
      tabindex: P(),
      appearance: r(),
      execution: m(),
      language: _(),
      action: e.action,
      retry: M(),
      theme: C(),
      cData: e.cData,
      size: E()
    })),
    b = (t, i) => {
      let l = window.turnstile.render(t, i);
      return n(l), {
        destroy() {
          window.turnstile.remove(l)
        },
        update(o) {
          window.turnstile.remove(l), l = window.turnstile.render(t, o), n(l)
        }
      }
    };
  let x = R(!1);
  ge(() => {
    if (D(x, !0), !A.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => A.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      D(x, !1)
    }
  });
  var k = ue(),
    z = Z(k);
  {
    var F = t => {
      var i = Fe();
      let l;
      ye(i, (o, H) => b == null ? void 0 : b(o, H), () => v(T)), U(o => l = j(i, 1, G(e.class), "svelte-1gvfki5", l, o), [() => ({
        flexible: E() == "flexible"
      })]), w(t, i)
    };
    B(z, t => {
      A.turnstatileLoaded && v(x) && t(F)
    })
  }
  w(a, k), p()
}
var Ke = ee('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function Ne(a, e) {
  let n = te(e, ["$$slots", "$$events", "$$legacy"]);
  var r = Ke();
  ae(r, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...n
  })), w(a, r)
}
var Ae = ee('<svg><path fill="#fff" d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z"></path><g fill="#9146ff"><path d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z"></path><path d="M1700 550h200v600h-200zm-550 0h200v600h-200z"></path></g></svg>');

function Re(a, e) {
  let n = te(e, ["$$slots", "$$events", "$$legacy"]);
  var r = Ae();
  ae(r, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    "xml:space": "preserve",
    viewBox: "0 0 2400 2800",
    ...n
  })), w(a, r)
}
var Ue = V('<a><!> </a> <a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  je = V('<div><div class="flex justify-center"><!></div> <form><div class="mt-6 flex flex-col items-center gap-2"><!></div></form> <p class="text-base-content/60 mt-2 text-center text-sm"> <a class="font-medium" href="/terms/terms-of-service" target="_blank"> </a> <a class="font-medium" href="/terms/privacy" target="_blank"> </a></p></div>');

function pe(a, e) {
  X(e, !0);
  let n = R(null),
    r = R(ve(Q ? "" : "turnstile-disabled"));

  function _(t, i) {
    return `${_e}/auth/${t}?token=${i}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var m = je(),
    s = d(m),
    M = d(s);
  he(M, {
    hasText: !0
  }), f(s);
  var g = u(s, 2),
    C = d(g),
    E = d(C);
  {
    var P = t => {
      var i = Ue(),
        l = Z(i),
        o = d(l);
      Ne(o, {
        class: "mr-1 size-5"
      });
      var H = u(o);
      f(l);
      var I = u(l, 2),
        O = d(I);
      Re(O, {
        class: "mr-1 size-5"
      });
      var re = u(O);
      f(I);
      var Y = u(I, 2),
        q = d(Y);
      {
        var ne = h => {
          {
            let K = $(() => be.trim());
            He(h, {
              get siteKey() {
                return v(K)
              },
              callback: N => {
                D(r, N, !0)
              }
            })
          }
        };
        B(q, h => {
          Q && h(ne)
        })
      }
      var le = u(q, 2);
      B(le, h => {}), f(Y), U((h, K, N, ie) => {
        j(l, 1, G({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !v(r)
        })), J(l, "href", h), y(H, ` ${K??""}`), j(I, 1, G({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !v(r)
        })), J(I, "href", N), y(re, ` ${ie??""}`)
      }, [() => v(r) ? _("google", v(r)) : "#", () => W({
        name: "Google"
      }), () => v(r) ? _("twitch", v(r)) : "#", () => W({
        name: "Twitch"
      })]), w(t, i)
    };
    B(E, t => {
      t(P, !1)
    })
  }
  f(C), f(g), me(g, t => D(n, t), () => v(n));
  var S = u(g, 2),
    T = d(S),
    b = u(T),
    x = d(b, !0);
  f(b);
  var k = u(b),
    z = u(k),
    F = d(z, !0);
  f(z), f(S), f(m), U((t, i, l, o) => {
    y(T, `${t??""} `), y(x, i), y(k, ` ${l??""} `), y(F, o)
  }, [() => Le(), () => Te(), () => De(), () => Se()]), w(a, m), p()
}
export {
  pe as L, Re as T, He as a
};