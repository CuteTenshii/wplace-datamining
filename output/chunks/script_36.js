import "./Bzak7iHL.js";
import {
  M as ce,
  z as se,
  H as oe,
  C as de,
  aZ as ve,
  p as W,
  aJ as M,
  aI as D,
  aK as ue,
  a as X,
  g as f,
  b as w,
  c as p,
  f as R,
  t as G,
  u as $,
  v as ee,
  aH as fe,
  d,
  r as v,
  s as u
} from "./B0_b_ZC0.js";
import {
  s as x
} from "./BKKOZo4g.js";
import {
  p as c,
  i as B,
  r as te
} from "./3GNvktHi.js";
import {
  a as V,
  c as A,
  b as ae,
  s as Y
} from "./D7R8LpwE.js";
import {
  b as me
} from "./Bbg9a0Hf.js";
import {
  g as j,
  d as Z,
  P as _e,
  e as he
} from "./CM0bkSp-.js";
import {
  o as ge
} from "./BaCvcCNi.js";
import {
  g as I
} from "./C5GsJ62f.js";
import {
  L as be
} from "./BlBSwh8F.js";

function xe(n, e, r) {
  ce(() => {
    var a = se(() => e(n, r == null ? void 0 : r()) || {});
    if (r && (a != null && a.update)) {
      var _ = !1,
        m = {};
      oe(() => {
        var s = r();
        de(s), _ && ve(m, s) && (m = s, a.update(s))
      }), _ = !0
    }
    if (a != null && a.destroy) return () => a.destroy()
  })
}
const we = n => `Login with ${n.name}`,
  ye = n => `Entrar com ${n.name}`,
  Q = (n, e = {}) => (e.locale ?? I()) === "en" ? we(n) : ye(n),
  ke = () => "By continuing, you agree to our",
  Ce = () => "Ao continuar, você concorda com nossos",
  Ie = (n = {}, e = {}) => (e.locale ?? I()) === "en" ? ke() : Ce(),
  Le = () => "Terms of Service",
  ze = () => "Termos de Serviço",
  Ee = (n = {}, e = {}) => (e.locale ?? I()) === "en" ? Le() : ze(),
  Te = () => "and",
  Be = () => "e",
  Me = (n = {}, e = {}) => (e.locale ?? I()) === "en" ? Te() : Be(),
  Pe = () => "Privacy Policy",
  Fe = () => "Política de privacidade",
  He = (n = {}, e = {}) => (e.locale ?? I()) === "en" ? Pe() : Fe();
var Ke = R("<div></div>");

function Se(n, e) {
  W(e, !0);
  let r = c(e, "widgetId", 15),
    a = c(e, "appearance", 3, "always"),
    _ = c(e, "language", 3, "auto"),
    m = c(e, "execution", 3, "render"),
    s = c(e, "retryInterval", 3, 8e3),
    P = c(e, "retry", 3, "auto"),
    g = c(e, "refreshExpired", 3, "auto"),
    L = c(e, "theme", 3, "auto"),
    z = c(e, "size", 3, "normal"),
    F = c(e, "tabIndex", 3, 0);
  c(e, "reset", 15)(() => {
    var t;
    r() && ((t = window == null ? void 0 : window.turnstile) == null || t.reset(r()))
  });
  const E = $(() => ({
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
      tabindex: F(),
      appearance: a(),
      execution: m(),
      language: _(),
      action: e.action,
      retry: P(),
      theme: L(),
      cData: e.cData,
      size: z()
    })),
    h = (t, i) => {
      let l = window.turnstile.render(t, i);
      return r(l), {
        destroy() {
          window.turnstile.remove(l)
        },
        update(o) {
          window.turnstile.remove(l), l = window.turnstile.render(t, o), r(l)
        }
      }
    };
  let y = D(!1);
  ge(() => {
    if (M(y, !0), !j.turnstatileLoaded) {
      const t = document.createElement("script");
      t.type = "text/javascript", t.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", t.async = !0, t.addEventListener("load", () => j.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(t)
    }
    return () => {
      M(y, !1)
    }
  });
  var k = ue(),
    T = X(k);
  {
    var K = t => {
      var i = Ke();
      let l;
      xe(i, (o, S) => h == null ? void 0 : h(o, S), () => f(E)), G(o => l = V(i, 1, A(e.class), "svelte-1gvfki5", l, o), [() => ({
        flexible: z() == "flexible"
      })]), w(t, i)
    };
    B(T, t => {
      j.turnstatileLoaded && f(y) && t(K)
    })
  }
  w(n, k), p()
}
var Ne = ee('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function Ue(n, e) {
  let r = te(e, ["$$slots", "$$events", "$$legacy"]);
  var a = Ne();
  ae(a, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...r
  })), w(n, a)
}
var je = ee('<svg><path fill="#fff" d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z"></path><g fill="#9146ff"><path d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z"></path><path d="M1700 550h200v600h-200zm-550 0h200v600h-200z"></path></g></svg>');

function De(n, e) {
  let r = te(e, ["$$slots", "$$events", "$$legacy"]);
  var a = je();
  ae(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    "xml:space": "preserve",
    viewBox: "0 0 2400 2800",
    ...r
  })), w(n, a)
}
var Ge = R('<a><!> </a> <a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  Ve = R('<div><div class="flex justify-center"><!></div> <form><div class="mt-6 flex flex-col items-center gap-2"><!></div></form> <p class="text-base-content/60 mt-2 text-center text-sm"> <a class="font-medium" href="/terms/terms-of-service" target="_blank"> </a> <a class="font-medium" href="/terms/privacy" target="_blank"> </a></p></div>');

function pe(n, e) {
  W(e, !0);
  let r = D(null),
    a = D(fe(Z ? "" : "turnstile-disabled"));

  function _(t, i) {
    return `${_e}/auth/${t}?token=${i}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var m = Ve(),
    s = d(m),
    P = d(s);
  be(P, {
    hasText: !0
  }), v(s);
  var g = u(s, 2),
    L = d(g),
    z = d(L);
  {
    var F = t => {
      var i = Ge(),
        l = X(i),
        o = d(l);
      Ue(o, {
        class: "mr-1 size-5"
      });
      var S = u(o);
      v(l);
      var C = u(l, 2),
        q = d(C);
      De(q, {
        class: "mr-1 size-5"
      });
      var re = u(q);
      v(C);
      var J = u(C, 2),
        O = d(J);
      {
        var ne = b => {
          {
            let N = $(() => he.trim());
            Se(b, {
              get siteKey() {
                return f(N)
              },
              callback: U => {
                M(a, U, !0)
              }
            })
          }
        };
        B(O, b => {
          Z && b(ne)
        })
      }
      var le = u(O, 2);
      B(le, b => {}), v(J), G((b, N, U, ie) => {
        V(l, 1, A({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !f(a)
        })), Y(l, "href", b), x(S, ` ${N??""}`), V(C, 1, A({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !f(a)
        })), Y(C, "href", U), x(re, ` ${ie??""}`)
      }, [() => f(a) ? _("google", f(a)) : "#", () => Q({
        name: "Google"
      }), () => f(a) ? _("twitch", f(a)) : "#", () => Q({
        name: "Twitch"
      })]), w(t, i)
    };
    B(z, t => {
      t(F, !1)
    })
  }
  v(L), v(g), me(g, t => M(r, t), () => f(r));
  var H = u(g, 2),
    E = d(H),
    h = u(E),
    y = d(h, !0);
  v(h);
  var k = u(h),
    T = u(k),
    K = d(T, !0);
  v(T), v(H), v(m), G((t, i, l, o) => {
    x(E, `${t??""} `), x(y, i), x(k, ` ${l??""} `), x(K, o)
  }, [() => Ie(), () => Ee(), () => Me(), () => He()]), w(n, m), p()
}
export {
  pe as L, De as T, Se as a
};