import "./D0c7J7pt.js";
import {
  X as ne,
  L as re,
  R as ce,
  O as oe,
  G as ie,
  p as X,
  y as W,
  w as J,
  B as le,
  a as Q,
  g as k,
  b as C,
  c as Z,
  f as G,
  t as z,
  u as p,
  H as se,
  x as ue,
  d as u,
  r as d,
  s as f,
  n as Y
} from "./LdQOE0HW.js";
import {
  s as g
} from "./i2H3VQ_A.js";
import {
  i as M
} from "./CJ9oL51M.js";
import {
  a as $,
  c as ee,
  d as de,
  s as q
} from "./BlIYYSyk.js";
import {
  p as s,
  r as fe
} from "./Bs_FTWRS.js";
import {
  g as O,
  t as V,
  P as _e,
  a as ve
} from "./CkGB_y2q.js";
import {
  o as me
} from "./DQAPCyVC.js";
import {
  g as h
} from "./DH84GWeD.js";
import {
  L as be
} from "./C-tf6mAe.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "34cc512744102387f2427379e854c2ea08067337"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "7b227ba7-b1a5-4add-b0e7-c3851e996dce", a._sentryDebugIdIdentifier = "sentry-dbid-7b227ba7-b1a5-4add-b0e7-c3851e996dce")
  })()
} catch {}

function ge(a, e, n) {
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
  Be = () => "e",
  Me = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Te() : Be(),
  De = () => "Privacy Policy",
  Pe = () => "Política de privacidade",
  Se = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? De() : Pe(),
  Fe = () => "Do you have a Wplace Twitch account?",
  Ne = () => "Você tem uma conta Wplace associada à Twitch?",
  Re = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Fe() : Ne(),
  ze = () => "Migrate your account",
  Ge = () => "Migre sua conta",
  Ke = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? ze() : Ge(),
  Ue = () => "Code of Conduct",
  je = () => "Código de Conduta",
  Ae = (a = {}, e = {}) => (e.locale ?? h()) === "en" ? Ue() : je();
var He = G("<div></div>");

function Oe(a, e) {
  X(e, !0);
  let n = s(e, "widgetId", 15),
    r = s(e, "appearance", 3, "always"),
    y = s(e, "language", 3, "auto"),
    m = s(e, "execution", 3, "render"),
    _ = s(e, "retryInterval", 3, 8e3),
    K = s(e, "retry", 3, "auto"),
    I = s(e, "refreshExpired", 3, "auto"),
    U = s(e, "theme", 3, "auto"),
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
      retry: K(),
      theme: U(),
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
      ge(i, (c, l) => T == null ? void 0 : T(c, l), () => k(E)), z(c => o = $(i, 1, ee(e.class), "svelte-1gvfki5", o, c), [() => ({
        flexible: D() == "flexible"
      })]), C(t, i)
    };
    M(S, t => {
      O.turnstatileLoaded && k(w) && t(F)
    })
  }
  C(a, P), Z()
}
var We = se('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function Ye(a, e) {
  let n = fe(e, ["$$slots", "$$events", "$$legacy"]);
  var r = We();
  de(r, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...n
  })), C(a, r)
}
var qe = G('<a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  Ve = G('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  Xe = G('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" href="/terms/terms-of-service" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function ct(a, e) {
  X(e, !0);
  let n = s(e, "showTwitchMigration", 3, !0),
    r = J(ue(V ? "" : "turnstile-disabled"));

  function y(c, l) {
    return `${_e}/auth/${c}?token=${l}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var m = Xe(),
    _ = u(m),
    K = u(_);
  be(K, {
    hasText: !0
  }), d(_);
  var I = f(_, 2),
    U = u(I);
  {
    var D = c => {
      var l = qe(),
        v = Q(l),
        b = u(v);
      Ye(b, {
        class: "mr-1 size-5"
      });
      var B = f(b);
      d(v);
      var N = f(v, 2),
        R = u(N);
      {
        var A = x => {
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
        M(R, x => {
          V && x(A)
        })
      }
      var te = f(R, 2);
      M(te, x => {}), d(N), z((x, H) => {
        $(v, 1, ee({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !k(r)
        })), q(v, "href", x), g(B, ` ${H??""}`)
      }, [() => k(r) ? y("google", k(r)) : "#", () => we({
        name: "Google"
      })]), C(c, l)
    };
    M(U, c => {
      c(D, !1)
    })
  }
  d(I);
  var L = f(I, 2),
    j = u(L),
    E = f(j),
    T = u(E, !0);
  d(E);
  var w = f(E, 2),
    P = u(w, !0);
  d(w);
  var S = f(w),
    F = f(S),
    t = u(F, !0);
  d(F), Y(), d(L);
  var i = f(L, 2);
  {
    var o = c => {
      var l = Ve(),
        v = u(l),
        b = f(v),
        B = u(b, !0);
      d(b), Y(), d(l), z((N, R, A) => {
        g(v, `${N??""} `), q(b, "href", R), g(B, A)
      }, [() => Re(), () => y("twitch", ""), () => Ke()]), C(c, l)
    };
    M(i, c => {
      n() && c(o)
    })
  }
  d(m), z((c, l, v, b, B) => {
    g(j, `${c??""} `), g(T, l), g(P, v), g(S, ` ${b??""} `), g(t, B)
  }, [() => Ce(), () => Ee(), () => Se(), () => Me(), () => Ae()]), C(a, m), Z()
}
export {
  ct as L
};