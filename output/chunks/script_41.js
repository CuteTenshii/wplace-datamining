import "./CIV-60i_.js";
import {
  ak as re,
  H as ne,
  O as ce,
  K as ie,
  a_ as le,
  p as Q,
  z as N,
  w as W,
  A as oe,
  a as X,
  g as w,
  b as C,
  c as Z,
  f as A,
  t as K,
  u as p,
  C as se,
  x as de,
  d,
  r as u,
  s as v,
  n as q
} from "./DUWZzbWe.js";
import {
  s as y
} from "./B_aSMPcR.js";
import {
  p as s,
  i as B,
  r as ue
} from "./D3IB6IMS.js";
import {
  a as $,
  c as ee,
  d as fe,
  s as V
} from "./BCmvehz2.js";
import {
  b as _e
} from "./CWdRwNbo.js";
import {
  g as O,
  t as J,
  P as ve,
  a as me
} from "./j2LsR60V.js";
import {
  o as be
} from "./DzkP_rCj.js";
import {
  g as x
} from "./CC4jxA2W.js";
import {
  L as ge
} from "./DA7yzWIS.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "dc7b5283-be88-4b5e-9d84-477f8dfd09af", a._sentryDebugIdIdentifier = "sentry-dbid-dc7b5283-be88-4b5e-9d84-477f8dfd09af")
  })()
} catch {}

function he(a, e, r) {
  re(() => {
    var c = ne(() => e(a, r == null ? void 0 : r()) || {});
    if (r && (c != null && c.update)) {
      var m = !1,
        g = {};
      ce(() => {
        var f = r();
        ie(f), m && le(g, f) && (g = f, c.update(f))
      }), m = !0
    }
    if (c != null && c.destroy) return () => c.destroy()
  })
}
const ye = a => `Login with ${a.name}`,
  we = a => `Entrar com ${a.name}`,
  xe = (a, e = {}) => (e.locale ?? x()) === "en" ? ye(a) : we(a),
  ke = () => "By continuing, you agree to our",
  Ie = () => "Ao continuar, você concorda com nossos",
  Le = (a = {}, e = {}) => (e.locale ?? x()) === "en" ? ke() : Ie(),
  Ce = () => "Terms of Service",
  Ee = () => "Termos de Serviço",
  Te = (a = {}, e = {}) => (e.locale ?? x()) === "en" ? Ce() : Ee(),
  Me = () => "and",
  Be = () => "e",
  De = (a = {}, e = {}) => (e.locale ?? x()) === "en" ? Me() : Be(),
  Pe = () => "Privacy Policy",
  Se = () => "Política de privacidade",
  Fe = (a = {}, e = {}) => (e.locale ?? x()) === "en" ? Pe() : Se(),
  ze = () => "Do you have a Wplace Twitch account?",
  Ke = () => "Você tem uma conta Wplace associada à Twitch?",
  Ne = (a = {}, e = {}) => (e.locale ?? x()) === "en" ? ze() : Ke(),
  Ae = () => "Migrate your account",
  Re = () => "Migre sua conta",
  Ue = (a = {}, e = {}) => (e.locale ?? x()) === "en" ? Ae() : Re();
var je = A("<div></div>");

function Ge(a, e) {
  Q(e, !0);
  let r = s(e, "widgetId", 15),
    c = s(e, "appearance", 3, "always"),
    m = s(e, "language", 3, "auto"),
    g = s(e, "execution", 3, "render"),
    f = s(e, "retryInterval", 3, 8e3),
    E = s(e, "retry", 3, "auto"),
    R = s(e, "refreshExpired", 3, "auto"),
    k = s(e, "theme", 3, "auto"),
    T = s(e, "size", 3, "normal"),
    U = s(e, "tabIndex", 3, 0);
  s(e, "reset", 15)(() => {
    var t;
    r() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(r()))
  });
  const M = p(() => ({
      sitekey: e.siteKey,
      callback: (t, l) => {
        var i;
        (i = e.callback) == null || i.call(e, t, l)
      },
      "error-callback": t => {
        var l;
        (l = e.errorCallback) == null || l.call(e, t)
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
      "refresh-expired": R(),
      "retry-interval": f(),
      tabindex: U(),
      appearance: c(),
      execution: g(),
      language: m(),
      action: e.action,
      retry: E(),
      theme: k(),
      cData: e.cData,
      size: T()
    })),
    I = (t, l) => {
      let i = window.turnstile.render(t, l);
      return r(i), {
        destroy() {
          window.turnstile.remove(i)
        },
        update(n) {
          window.turnstile.remove(i), i = window.turnstile.render(t, n), r(i)
        }
      }
    };
  let h = W(!1);
  be(() => {
    if (N(h, !0), !O.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => O.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      N(h, !1)
    }
  });
  var D = oe(),
    P = X(D);
  {
    var S = t => {
      var l = je();
      let i;
      he(l, (n, o) => I == null ? void 0 : I(n, o), () => w(M)), K(n => i = $(l, 1, ee(e.class), "svelte-1gvfki5", i, n), [() => ({
        flexible: T() == "flexible"
      })]), C(t, l)
    };
    B(P, t => {
      O.turnstatileLoaded && w(h) && t(S)
    })
  }
  C(a, D), Z()
}
var He = se('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function Oe(a, e) {
  let r = ue(e, ["$$slots", "$$events", "$$legacy"]);
  var c = He();
  fe(c, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...r
  })), C(a, c)
}
var We = A('<a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  Ye = A('<p class="text-base-content/60 mt-4 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  qe = A('<div><div class="flex justify-center"><!></div> <form><div class="mt-6 flex flex-col items-center gap-2"><!></div></form> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" href="/terms/terms-of-service" target="_blank"> </a> <a class="font-medium" href="/terms/privacy" target="_blank"> </a>.</p> <!></div>');

function rt(a, e) {
  Q(e, !0);
  let r = s(e, "showTwitchMigration", 3, !0),
    c = W(null),
    m = W(de(J ? "" : "turnstile-disabled"));

  function g(n, o) {
    return `${ve}/auth/${n}?token=${o}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var f = qe(),
    E = d(f),
    R = d(E);
  ge(R, {
    hasText: !0
  }), u(E);
  var k = v(E, 2),
    T = d(k),
    U = d(T);
  {
    var Y = n => {
      var o = We(),
        _ = X(o),
        b = d(_);
      Oe(b, {
        class: "mr-1 size-5"
      });
      var j = v(b);
      u(_);
      var F = v(_, 2),
        z = d(F);
      {
        var G = L => {
          {
            let H = p(() => me.trim());
            Ge(L, {
              get siteKey() {
                return w(H)
              },
              callback: ae => {
                N(m, ae, !0)
              }
            })
          }
        };
        B(z, L => {
          J && L(G)
        })
      }
      var te = v(z, 2);
      B(te, L => {}), u(F), K((L, H) => {
        $(_, 1, ee({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !w(m)
        })), V(_, "href", L), y(j, ` ${H??""}`)
      }, [() => w(m) ? g("google", w(m)) : "#", () => xe({
        name: "Google"
      })]), C(n, o)
    };
    B(U, n => {
      n(Y, !1)
    })
  }
  u(T), u(k), _e(k, n => N(c, n), () => w(c));
  var M = v(k, 2),
    I = d(M),
    h = v(I),
    D = d(h, !0);
  u(h);
  var P = v(h),
    S = v(P),
    t = d(S, !0);
  u(S), q(), u(M);
  var l = v(M, 2);
  {
    var i = n => {
      var o = Ye(),
        _ = d(o),
        b = v(_),
        j = d(b, !0);
      u(b), q(), u(o), K((F, z, G) => {
        y(_, `${F??""} `), V(b, "href", z), y(j, G)
      }, [() => Ne(), () => g("twitch", ""), () => Ue()]), C(n, o)
    };
    B(l, n => {
      r() && n(i)
    })
  }
  u(f), K((n, o, _, b) => {
    y(I, `${n??""} `), y(D, o), y(P, ` ${_??""} `), y(t, b)
  }, [() => Le(), () => Te(), () => De(), () => Fe()]), C(a, f), Z()
}
export {
  rt as L
};