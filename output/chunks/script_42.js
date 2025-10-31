import "./B49aQmcr.js";
import {
  X as ne,
  L as re,
  R as ce,
  O as oe,
  G as ie,
  p as X,
  e as W,
  g as J,
  A as le,
  a as Q,
  h as k,
  b as C,
  c as Z,
  f as A,
  t as z,
  u as p,
  H as se,
  y as de,
  d,
  r as u,
  s as f,
  n as Y
} from "./D23dDXEI.js";
import {
  s as b
} from "./DSRlI-S2.js";
import {
  p as s,
  i as B,
  r as ue
} from "./BgUpqJ8j.js";
import {
  a as $,
  c as ee,
  d as fe,
  s as q
} from "./Bzi-_mWr.js";
import {
  g as O,
  t as V,
  P as _e,
  a as ve
} from "./BVBK3-By.js";
import {
  o as me
} from "./mXVnIa8-.js";
import {
  g as h
} from "./B3WUOJBD.js";
import {
  L as ge
} from "./ZTtsZ4vP.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "e40e5462293a971da297506d4fe4e597c7bcf197"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "c3cf8449-bdf4-436b-9570-d9f8e577e42d", a._sentryDebugIdIdentifier = "sentry-dbid-c3cf8449-bdf4-436b-9570-d9f8e577e42d")
  })()
} catch {}

function be(a, e, n) {
  ne(() => {
    var r = re(() => e(a, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var y = !1,
        m = {};
      ce(() => {
        var _ = n();
        oe(_), y && ie(m, _) && (m = _, r.update(_))
      }), y = !0
    }
    if (r != null && r.destroy) return () => r.destroy()
  })
}
const he = a => `Login with ${a.name}`,
  ye = a => `Entrar com ${a.name}`,
  we = (a, e = {}) => (e.locale ?? h()) === "en" ? he(a) : ye(a),
  xe = () => "By continuing, you agree to our",
  ke = () => "Ao continuar, você concorda com nossos",
  Ce = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? xe() : ke(),
  Ie = () => "Terms of Service",
  Le = () => "Termos de Serviço",
  Ee = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Ie() : Le(),
  Te = () => "and",
  Me = () => "e",
  Be = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Te() : Me(),
  De = () => "Privacy Policy",
  Pe = () => "Política de privacidade",
  Se = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? De() : Pe(),
  Fe = () => "Do you have a Wplace Twitch account?",
  Ne = () => "Você tem uma conta Wplace associada à Twitch?",
  Re = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Fe() : Ne(),
  ze = () => "Migrate your account",
  Ae = () => "Migre sua conta",
  Ge = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? ze() : Ae(),
  Ke = () => "Code of Conduct",
  Ue = () => "Código de Conduta",
  je = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Ke() : Ue();
var He = A("<div></div>");

function Oe(a, e) {
  X(e, !0);
  let n = s(e, "widgetId", 15),
    r = s(e, "appearance", 3, "always"),
    y = s(e, "language", 3, "auto"),
    m = s(e, "execution", 3, "render"),
    _ = s(e, "retryInterval", 3, 8e3),
    G = s(e, "retry", 3, "auto"),
    I = s(e, "refreshExpired", 3, "auto"),
    K = s(e, "theme", 3, "auto"),
    D = s(e, "size", 3, "normal"),
    L = s(e, "tabIndex", 3, 0);
  s(e, "reset", 15)(() => {
    var t;
    n() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(n()))
  });
  const E = p(() => ({
      sitekey: e.siteKey,
      callback: (t, i) => {
        var o;
        (o = e.callback) == null || o.call(e, t, i)
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
      "refresh-expired": I(),
      "retry-interval": _(),
      tabindex: L(),
      appearance: r(),
      execution: m(),
      language: y(),
      action: e.action,
      retry: G(),
      theme: K(),
      cData: e.cData,
      size: D()
    })),
    T = (t, i) => {
      let o = window.turnstile.render(t, i);
      return n(o), {
        destroy() {
          window.turnstile.remove(o)
        },
        update(c) {
          window.turnstile.remove(o), o = window.turnstile.render(t, c), n(o)
        }
      }
    };
  let w = J(!1);
  me(() => {
    if (W(w, !0), !O.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => O.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      W(w, !1)
    }
  });
  var P = le(),
    S = Q(P);
  {
    var F = t => {
      var i = He();
      let o;
      be(i, (c, l) => T == null ? void 0 : T(c, l), () => k(E)), z(c => o = $(i, 1, ee(e.class), "svelte-1gvfki5", o, c), [() => ({
        flexible: D() == "flexible"
      })]), C(t, i)
    };
    B(S, t => {
      O.turnstatileLoaded && k(w) && t(F)
    })
  }
  C(a, P), Z()
}
var We = se('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function Ye(a, e) {
  let n = ue(e, ["$$slots", "$$events", "$$legacy"]);
  var r = We();
  fe(r, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...n
  })), C(a, r)
}
var qe = A('<a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  Ve = A('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  Xe = A('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" href="/terms/terms-of-service" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function rt(a, e) {
  X(e, !0);
  let n = s(e, "showTwitchMigration", 3, !0),
    r = J(de(V ? "" : "turnstile-disabled"));

  function y(c, l) {
    return `${_e}/auth/${c}?token=${l}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var m = Xe(),
    _ = d(m),
    G = d(_);
  ge(G, {
    hasText: !0
  }), u(_);
  var I = f(_, 2),
    K = d(I);
  {
    var D = c => {
      var l = qe(),
        v = Q(l),
        g = d(v);
      Ye(g, {
        class: "mr-1 size-5"
      });
      var M = f(g);
      u(v);
      var N = f(v, 2),
        R = d(N);
      {
        var j = x => {
          {
            let H = p(() => ve.trim());
            Oe(x, {
              get siteKey() {
                return k(H)
              },
              callback: ae => {
                W(r, ae, !0)
              }
            })
          }
        };
        B(R, x => {
          V && x(j)
        })
      }
      var te = f(R, 2);
      B(te, x => {}), u(N), z((x, H) => {
        $(v, 1, ee({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !k(r)
        })), q(v, "href", x), b(M, ` ${H??""}`)
      }, [() => k(r) ? y("google", k(r)) : "#", () => we({
        name: "Google"
      })]), C(c, l)
    };
    B(K, c => {
      c(D, !1)
    })
  }
  u(I);
  var L = f(I, 2),
    U = d(L),
    E = f(U),
    T = d(E, !0);
  u(E);
  var w = f(E, 2),
    P = d(w, !0);
  u(w);
  var S = f(w),
    F = f(S),
    t = d(F, !0);
  u(F), Y(), u(L);
  var i = f(L, 2);
  {
    var o = c => {
      var l = Ve(),
        v = d(l),
        g = f(v),
        M = d(g, !0);
      u(g), Y(), u(l), z((N, R, j) => {
        b(v, `${N??""} `), q(g, "href", R), b(M, j)
      }, [() => Re(), () => y("twitch", ""), () => Ge()]), C(c, l)
    };
    B(i, c => {
      n() && c(o)
    })
  }
  u(m), z((c, l, v, g, M) => {
    b(U, `${c??""} `), b(T, l), b(P, v), b(S, ` ${g??""} `), b(t, M)
  }, [() => Ce(), () => Ee(), () => Se(), () => Be(), () => je()]), C(a, m), Z()
}
export {
  rt as L
};