import "./DzQdX4XG.js";
import {
  T as te,
  H as ae,
  O as ne,
  K as re,
  a_ as ce,
  p as q,
  z as H,
  w as V,
  A as ie,
  a as J,
  g as w,
  b as x,
  c as Q,
  f as S,
  t as P,
  u as X,
  C as le,
  x as oe,
  d as u,
  r as f,
  s as _,
  n as O
} from "./Bry4mTdq.js";
import {
  s as b
} from "./MPIITExI.js";
import {
  p as o,
  i as E,
  r as se
} from "./D0k0_Cqk.js";
import {
  a as Z,
  c as p,
  d as de,
  s as W
} from "./DoR7D8H0.js";
import {
  g as G,
  t as Y,
  P as ue,
  a as fe
} from "./D6yE0IKc.js";
import {
  o as _e
} from "./CcAQaqVY.js";
import {
  g
} from "./CKM5458v.js";
import {
  L as ve
} from "./BswGF4Un.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "1464f4d4be7ab2460627d08ee13d2df2a352bcb2"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "d6468efb-6ad2-45fd-9ac7-ee26d8a94706", a._sentryDebugIdIdentifier = "sentry-dbid-d6468efb-6ad2-45fd-9ac7-ee26d8a94706")
  })()
} catch {}

function me(a, e, c) {
  te(() => {
    var i = ae(() => e(a, c == null ? void 0 : c()) || {});
    if (c && (i != null && i.update)) {
      var m = !1,
        v = {};
      ne(() => {
        var s = c();
        re(s), m && ce(v, s) && (v = s, i.update(s))
      }), m = !0
    }
    if (i != null && i.destroy) return () => i.destroy()
  })
}
const be = a => `Login with ${a.name}`,
  ge = a => `Entrar com ${a.name}`,
  he = (a, e = {}) => (e.locale ?? g()) === "en" ? be(a) : ge(a),
  ye = () => "By continuing, you agree to our",
  we = () => "Ao continuar, você concorda com nossos",
  xe = (a = {}, e = {}) => (e.locale ?? g()) === "en" ? ye() : we(),
  ke = () => "Terms of Service",
  Ie = () => "Termos de Serviço",
  Le = (a = {}, e = {}) => (e.locale ?? g()) === "en" ? ke() : Ie(),
  Te = () => "and",
  Ce = () => "e",
  Ee = (a = {}, e = {}) => (e.locale ?? g()) === "en" ? Te() : Ce(),
  Me = () => "Privacy Policy",
  Be = () => "Política de privacidade",
  De = (a = {}, e = {}) => (e.locale ?? g()) === "en" ? Me() : Be(),
  Pe = () => "Do you have a Wplace Twitch account?",
  Se = () => "Você tem uma conta Wplace associada à Twitch?",
  Fe = (a = {}, e = {}) => (e.locale ?? g()) === "en" ? Pe() : Se(),
  ze = () => "Migrate your account",
  Ke = () => "Migre sua conta",
  Ne = (a = {}, e = {}) => (e.locale ?? g()) === "en" ? ze() : Ke();
var Ae = S("<div></div>");

function Re(a, e) {
  q(e, !0);
  let c = o(e, "widgetId", 15),
    i = o(e, "appearance", 3, "always"),
    m = o(e, "language", 3, "auto"),
    v = o(e, "execution", 3, "render"),
    s = o(e, "retryInterval", 3, 8e3),
    F = o(e, "retry", 3, "auto"),
    k = o(e, "refreshExpired", 3, "auto"),
    z = o(e, "theme", 3, "auto"),
    M = o(e, "size", 3, "normal"),
    I = o(e, "tabIndex", 3, 0);
  o(e, "reset", 15)(() => {
    var t;
    c() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(c()))
  });
  const L = X(() => ({
      sitekey: e.siteKey,
      callback: (t, n) => {
        var r;
        (r = e.callback) == null || r.call(e, t, n)
      },
      "error-callback": t => {
        var n;
        (n = e.errorCallback) == null || n.call(e, t)
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
      "refresh-expired": k(),
      "retry-interval": s(),
      tabindex: I(),
      appearance: i(),
      execution: v(),
      language: m(),
      action: e.action,
      retry: F(),
      theme: z(),
      cData: e.cData,
      size: M()
    })),
    T = (t, n) => {
      let r = window.turnstile.render(t, n);
      return c(r), {
        destroy() {
          window.turnstile.remove(r)
        },
        update(l) {
          window.turnstile.remove(r), r = window.turnstile.render(t, l), c(r)
        }
      }
    };
  let h = V(!1);
  _e(() => {
    if (H(h, !0), !G.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => G.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      H(h, !1)
    }
  });
  var C = ie(),
    N = J(C);
  {
    var A = t => {
      var n = Ae();
      let r;
      me(n, (l, d) => T == null ? void 0 : T(l, d), () => w(L)), P(l => r = Z(n, 1, p(e.class), "svelte-1gvfki5", r, l), [() => ({
        flexible: M() == "flexible"
      })]), x(t, n)
    };
    E(N, t => {
      G.turnstatileLoaded && w(h) && t(A)
    })
  }
  x(a, C), Q()
}
var Ue = le('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function je(a, e) {
  let c = se(e, ["$$slots", "$$events", "$$legacy"]);
  var i = Ue();
  de(i, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...c
  })), x(a, i)
}
var Ge = S('<a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  He = S('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  Oe = S('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" href="/terms/terms-of-service" target="_blank"> </a> <a class="font-medium" href="/terms/privacy" target="_blank"> </a>.</p> <!></div>');

function $e(a, e) {
  q(e, !0);
  let c = o(e, "showTwitchMigration", 3, !0),
    i = V(oe(Y ? "" : "turnstile-disabled"));

  function m(n, r) {
    return `${ue}/auth/${n}?token=${r}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var v = Oe(),
    s = u(v),
    F = u(s);
  ve(F, {
    hasText: !0
  }), f(s);
  var k = _(s, 2),
    z = u(k);
  {
    var M = n => {
      var r = Ge(),
        l = J(r),
        d = u(l);
      je(d, {
        class: "mr-1 size-5"
      });
      var R = _(d);
      f(l);
      var B = _(l, 2),
        D = u(B);
      {
        var U = y => {
          {
            let j = X(() => fe.trim());
            Re(y, {
              get siteKey() {
                return w(j)
              },
              callback: ee => {
                H(i, ee, !0)
              }
            })
          }
        };
        E(D, y => {
          Y && y(U)
        })
      }
      var $ = _(D, 2);
      E($, y => {}), f(B), P((y, j) => {
        Z(l, 1, p({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !w(i)
        })), W(l, "href", y), b(R, ` ${j??""}`)
      }, [() => w(i) ? m("google", w(i)) : "#", () => he({
        name: "Google"
      })]), x(n, r)
    };
    E(z, n => {
      n(M, !1)
    })
  }
  f(k);
  var I = _(k, 2),
    K = u(I),
    L = _(K),
    T = u(L, !0);
  f(L);
  var h = _(L),
    C = _(h),
    N = u(C, !0);
  f(C), O(), f(I);
  var A = _(I, 2);
  {
    var t = n => {
      var r = He(),
        l = u(r),
        d = _(l),
        R = u(d, !0);
      f(d), O(), f(r), P((B, D, U) => {
        b(l, `${B??""} `), W(d, "href", D), b(R, U)
      }, [() => Fe(), () => m("twitch", ""), () => Ne()]), x(n, r)
    };
    E(A, n => {
      c() && n(t)
    })
  }
  f(v), P((n, r, l, d) => {
    b(K, `${n??""} `), b(T, r), b(h, ` ${l??""} `), b(N, d)
  }, [() => xe(), () => Le(), () => Ee(), () => De()]), x(a, v), Q()
}
export {
  $e as L
};