import "./CRUod-8q.js";
import {
  e as ne,
  F as re,
  N as ce,
  I as oe,
  bx as le,
  p as J,
  o as q,
  l as Q,
  w as ie,
  a as X,
  g as C,
  b as L,
  c as Z,
  f as K,
  t as U,
  u as p,
  z as se,
  m as ue,
  d as u,
  r as d,
  s as f,
  n as H
} from "./C-9Y3fPa.js";
import {
  s as g
} from "./BMbrYcZ7.js";
import {
  i as D
} from "./qwvZIGad.js";
import {
  a as $,
  c as ee,
  d as de,
  s as W
} from "./CwSlGFEE.js";
import {
  p as s,
  r as fe
} from "./v3ZFA_UY.js";
import {
  g as Y,
  t as V,
  P as _e,
  a as ve
} from "./CkGEY_wN.js";
import {
  t as me
} from "./CD8wJqIi.js";
import {
  o as be
} from "./CYkri0IH.js";
import {
  g as h
} from "./CeWu6W50.js";
import {
  L as ge
} from "./DrKP1mEB.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "fe5b293b0b58eb9d702fd066546411c50747d7aa"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "c9d15f42-aef4-4832-865a-37477c3f3087", a._sentryDebugIdIdentifier = "sentry-dbid-c9d15f42-aef4-4832-865a-37477c3f3087")
  })()
} catch {}

function he(a, e, n) {
  ne(() => {
    var r = re(() => e(a, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var y = !1,
        m = {};
      ce(() => {
        var _ = n();
        oe(_), y && le(m, _) && (m = _, r.update(_))
      }), y = !0
    }
    if (r != null && r.destroy) return () => r.destroy()
  })
}
const ye = a => `Login with ${a.name}`,
  we = a => `Entrar com ${a.name}`,
  xe = (a, e = {}) => (e.locale ?? h()) === "en" ? ye(a) : we(a),
  ke = () => "By continuing, you agree to our",
  Ie = () => "Ao continuar, você concorda com nossos",
  Ce = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? ke() : Ie(),
  Le = () => "Terms of Service",
  Ee = () => "Termos de Serviço",
  Te = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Le() : Ee(),
  Me = () => "and",
  Be = () => "e",
  De = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Me() : Be(),
  Se = () => "Privacy Policy",
  Fe = () => "Política de privacidade",
  Pe = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Se() : Fe(),
  Ne = () => "Do you have a Wplace Twitch account?",
  ze = () => "Você tem uma conta Wplace associada à Twitch?",
  Ue = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Ne() : ze(),
  Ke = () => "Migrate your account",
  Re = () => "Migre sua conta",
  je = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Ke() : Re(),
  Ae = () => "Code of Conduct",
  Ge = () => "Código de Conduta",
  Oe = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Ae() : Ge();
var We = K("<div></div>");

function Ye(a, e) {
  J(e, !0);
  let n = s(e, "widgetId", 15),
    r = s(e, "appearance", 3, "always"),
    y = s(e, "language", 3, "auto"),
    m = s(e, "execution", 3, "render"),
    _ = s(e, "retryInterval", 3, 8e3),
    R = s(e, "retry", 3, "auto"),
    E = s(e, "refreshExpired", 3, "auto"),
    j = s(e, "theme", 3, "auto"),
    S = s(e, "size", 3, "normal"),
    T = s(e, "tabIndex", 3, 0);
  s(e, "reset", 15)(() => {
    var t;
    n() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(n()))
  });
  const x = p(() => ({
      sitekey: e.siteKey,
      callback: (t, l) => {
        var o;
        (o = e.callback) == null || o.call(e, t, l)
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
      "refresh-expired": E(),
      "retry-interval": _(),
      tabindex: T(),
      appearance: r(),
      execution: m(),
      language: y(),
      action: e.action,
      retry: R(),
      theme: j(),
      cData: e.cData,
      size: S()
    })),
    M = (t, l) => {
      let o = window.turnstile.render(t, l);
      return n(o), {
        destroy() {
          window.turnstile.remove(o)
        },
        update(c) {
          window.turnstile.remove(o), o = window.turnstile.render(t, c), n(o)
        }
      }
    };
  let w = Q(!1);
  be(() => {
    if (q(w, !0), !Y.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => Y.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      q(w, !1)
    }
  });
  var F = ie(),
    P = X(F);
  {
    var N = t => {
      var l = We();
      let o;
      he(l, (c, i) => M == null ? void 0 : M(c, i), () => C(x)), U(() => o = $(l, 1, ee(e.class), "svelte-1lm836y", o, {
        flexible: S() == "flexible"
      })), L(t, l)
    };
    D(P, t => {
      Y.turnstatileLoaded && C(w) && t(N)
    })
  }
  L(a, F), Z()
}
var qe = se('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function He(a, e) {
  let n = fe(e, ["$$slots", "$$events", "$$legacy"]);
  var r = qe();
  de(r, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...n
  })), L(a, r)
}
var Ve = K('<a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  Je = K('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  Qe = K('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function lt(a, e) {
  J(e, !0);
  let n = s(e, "showTwitchMigration", 3, !0),
    r = Q(ue(V ? "" : "turnstile-disabled"));

  function y(c, i) {
    return `${_e}/auth/${c}?token=${i}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var m = Qe(),
    _ = u(m),
    R = u(_);
  ge(R, {
    hasText: !0
  }), d(_);
  var E = f(_, 2),
    j = u(E);
  {
    var S = c => {
      var i = Ve(),
        v = X(i),
        b = u(v);
      He(b, {
        class: "mr-1 size-5"
      });
      var B = f(b);
      d(v);
      var k = f(v, 2),
        z = u(k);
      {
        var G = I => {
          {
            let O = p(() => ve.trim());
            Ye(I, {
              get siteKey() {
                return C(O)
              },
              callback: ae => {
                q(r, ae, !0)
              }
            })
          }
        };
        D(z, I => {
          V && I(G)
        })
      }
      var te = f(z, 2);
      D(te, I => {}), d(k), U((I, O) => {
        $(v, 1, ee({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !C(r)
        })), W(v, "href", I), g(B, ` ${O??""}`)
      }, [() => C(r) ? y("google", C(r)) : "#", () => xe({
        name: "Google"
      })]), L(c, i)
    };
    D(j, c => {
      c(S, !1)
    })
  }
  d(E);
  var T = f(E, 2),
    A = u(T),
    x = f(A),
    M = u(x, !0);
  d(x);
  var w = f(x, 2),
    F = u(w, !0);
  d(w);
  var P = f(w),
    N = f(P),
    t = u(N, !0);
  d(N), H(), d(T);
  var l = f(T, 2);
  {
    var o = c => {
      var i = Je(),
        v = u(i),
        b = f(v),
        B = u(b, !0);
      d(b), H(), d(i), U((k, z, G) => {
        g(v, `${k??""} `), W(b, "href", z), g(B, G)
      }, [() => Ue(), () => y("twitch", ""), () => je()]), L(c, i)
    };
    D(l, c => {
      n() && c(o)
    })
  }
  d(m), U((c, i, v, b, B, k) => {
    g(A, `${c??""} `), W(x, "href", i), g(M, v), g(F, b), g(P, ` ${B??""} `), g(t, k)
  }, [() => Ce(), me, () => Te(), () => Pe(), () => De(), () => Oe()]), L(a, m), Z()
}
export {
  lt as L
};