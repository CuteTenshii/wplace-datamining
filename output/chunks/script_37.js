import "./Bzak7iHL.js";
import {
  O as ce,
  C as se,
  J as oe,
  G as ve,
  x as de,
  p as W,
  aM as S,
  aL as F,
  aN as ue,
  a as X,
  g as o,
  b as w,
  c as Z,
  f as G,
  t as N,
  u as p,
  y as $,
  d as v,
  r as d,
  s as m
} from "./DDWIi-vs.js";
import {
  s as x
} from "./Ob_J7Gis.js";
import {
  p as u,
  i as D,
  r as ee
} from "./Cotyqp2D.js";
import {
  a as V,
  c as A,
  b as te,
  s as Y
} from "./CwJjPkYo.js";
import {
  b as fe
} from "./BXxY18WV.js";
import {
  g as j,
  P as me,
  c as _e
} from "./DC_O4ofs.js";
import {
  o as he
} from "./XwJtV06w.js";
import {
  g as E
} from "./C5GsJ62f.js";
import {
  L as ge
} from "./d3Ximbme.js";

function be(r, e, a) {
  ce(() => {
    var l = se(() => e(r, a == null ? void 0 : a()) || {});
    if (a && (l != null && l.update)) {
      var s = !1,
        _ = {};
      oe(() => {
        var f = a();
        ve(f), s && de(_, f) && (_ = f, l.update(f))
      }), s = !0
    }
    if (l != null && l.destroy) return () => l.destroy()
  })
}
const xe = r => `Login with ${r.name}`,
  we = r => `Entrar com ${r.name}`,
  Q = (r, e = {}) => (e.locale ?? E()) === "en" ? xe(r) : we(r),
  ye = () => "By continuing, you agree to our",
  ke = () => "Ao continuar, você concorda com nossos",
  Le = (r = {}, e = {}) => (e.locale ?? E()) === "en" ? ye() : ke(),
  Ce = () => "Terms of Service",
  Ie = () => "Termos de Serviço",
  ze = (r = {}, e = {}) => (e.locale ?? E()) === "en" ? Ce() : Ie(),
  Ee = () => "and",
  Te = () => "e",
  Be = (r = {}, e = {}) => (e.locale ?? E()) === "en" ? Ee() : Te(),
  Me = () => "Privacy Policy",
  Pe = () => "Política de privacidade",
  Fe = (r = {}, e = {}) => (e.locale ?? E()) === "en" ? Me() : Pe();
var Ne = G("<div></div>");

function Se(r, e) {
  W(e, !0);
  let a = u(e, "widgetId", 15),
    l = u(e, "appearance", 3, "always"),
    s = u(e, "language", 3, "auto"),
    _ = u(e, "execution", 3, "render"),
    f = u(e, "retryInterval", 3, 8e3),
    C = u(e, "retry", 3, "auto"),
    H = u(e, "refreshExpired", 3, "auto"),
    y = u(e, "theme", 3, "auto"),
    I = u(e, "size", 3, "normal"),
    K = u(e, "tabIndex", 3, 0);
  u(e, "reset", 15)(() => {
    var t;
    a() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(a()))
  });
  const T = p(() => ({
      sitekey: e.siteKey,
      callback: (t, n) => {
        var i;
        (i = e.callback) == null || i.call(e, t, n)
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
      "refresh-expired": H(),
      "retry-interval": f(),
      tabindex: K(),
      appearance: l(),
      execution: _(),
      language: s(),
      action: e.action,
      retry: C(),
      theme: y(),
      cData: e.cData,
      size: I()
    })),
    k = (t, n) => {
      let i = window.turnstile.render(t, n);
      return a(i), {
        destroy() {
          window.turnstile.remove(i)
        },
        update(c) {
          window.turnstile.remove(i), i = window.turnstile.render(t, c), a(i)
        }
      }
    };
  let h = F(!1);
  he(() => {
    if (S(h, !0), !j.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => j.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      S(h, !1)
    }
  });
  var B = ue(),
    M = X(B);
  {
    var P = t => {
      var n = Ne();
      let i;
      be(n, (c, L) => k == null ? void 0 : k(c, L), () => o(T)), N(c => i = V(n, 1, A(e.class), "svelte-1gvfki5", i, c), [() => ({
        flexible: I() == "flexible"
      })]), w(t, n)
    };
    D(M, t => {
      j.turnstatileLoaded && o(h) && t(P)
    })
  }
  w(r, B), Z()
}
var Ge = $('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function He(r, e) {
  let a = ee(e, ["$$slots", "$$events", "$$legacy"]);
  var l = Ge();
  te(l, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...a
  })), w(r, l)
}
var Ke = $('<svg><path fill="#fff" d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z"></path><g fill="#9146ff"><path d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z"></path><path d="M1700 550h200v600h-200zm-550 0h200v600h-200z"></path></g></svg>');

function Ue(r, e) {
  let a = ee(e, ["$$slots", "$$events", "$$legacy"]);
  var l = Ke();
  te(l, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    "xml:space": "preserve",
    viewBox: "0 0 2400 2800",
    ...a
  })), w(r, l)
}
var je = G('<div class="text-error text-sm"> </div>'),
  De = G('<a><!> </a> <a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  Ve = G('<div><div class="flex justify-center"><!></div> <form><div class="mt-6 flex flex-col items-center gap-2"><!></div></form> <p class="text-base-content/60 mt-2 text-center text-sm"> <a class="font-medium" href="/terms/terms-of-service" target="_blank"> </a> <a class="font-medium" href="/terms/privacy" target="_blank"> </a></p></div>');

function pe(r, e) {
  W(e, !0);
  let a = F(""),
    l = F(null),
    s = F("");

  function _(n, i) {
    return `${_e}/auth/${n}?token=${i}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var f = Ve(),
    C = v(f),
    H = v(C);
  ge(H, {
    hasText: !0
  }), d(C);
  var y = m(C, 2),
    I = v(y),
    K = v(I);
  {
    var O = n => {
      var i = De(),
        c = X(i),
        L = v(c);
      He(L, {
        class: "mr-1 size-5"
      });
      var ae = m(L);
      d(c);
      var z = m(c, 2),
        R = v(z);
      Ue(R, {
        class: "mr-1 size-5"
      });
      var re = m(R);
      d(z);
      var q = m(z, 2),
        J = v(q);
      {
        let g = p(() => me.trim());
        Se(J, {
          get siteKey() {
            return o(g)
          },
          callback: b => {
            S(s, b, !0)
          }
        })
      }
      var ne = m(J, 2);
      {
        var le = g => {
          var b = je(),
            U = v(b, !0);
          d(b), N(() => x(U, o(a))), w(g, b)
        };
        D(ne, g => {
          o(a) && g(le)
        })
      }
      d(q), N((g, b, U, ie) => {
        V(c, 1, A({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !o(s)
        })), Y(c, "href", g), x(ae, ` ${b??""}`), V(z, 1, A({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !o(s)
        })), Y(z, "href", U), x(re, ` ${ie??""}`)
      }, [() => o(s) ? _("google", o(s)) : "#", () => Q({
        name: "Google"
      }), () => o(s) ? _("twitch", o(s)) : "#", () => Q({
        name: "Twitch"
      })]), w(n, i)
    };
    D(K, n => {
      n(O, !1)
    })
  }
  d(I), d(y), fe(y, n => S(l, n), () => o(l));
  var T = m(y, 2),
    k = v(T),
    h = m(k),
    B = v(h, !0);
  d(h);
  var M = m(h),
    P = m(M),
    t = v(P, !0);
  d(P), d(T), d(f), N((n, i, c, L) => {
    x(k, `${n??""} `), x(B, i), x(M, ` ${c??""} `), x(t, L)
  }, [() => Le(), () => ze(), () => Be(), () => Fe()]), w(r, f), Z()
}
export {
  pe as L, Ue as T, Se as a
};