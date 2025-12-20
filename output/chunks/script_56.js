import "./CH7bPVZ-.js";
import {
  F as nt,
  x as ct,
  y as ot,
  H as it,
  by as at,
  p as Y,
  i as G,
  e as Q,
  h as ut,
  a as Z,
  j as T,
  b as C,
  c as J,
  f as S,
  t as K,
  u as X,
  o as _t,
  g as st,
  d as s,
  r as l,
  s as f,
  n as O
} from "./lghyzkeh.js";
import {
  s as y
} from "./DTFBLFZ4.js";
import {
  i as L
} from "./Cwiyy_tF.js";
import {
  a as $,
  c as tt,
  b as lt,
  s as R
} from "./B41b44vU.js";
import {
  p as _,
  r as ft
} from "./9N34mgL9.js";
import {
  g as q,
  t as V,
  P as dt,
  a as vt
} from "./BCYHI9qb.js";
import {
  t as ht
} from "./B4bKnJ90.js";
import {
  o as mt
} from "./D6vH7NuJ.js";
import {
  g
} from "./CQePO0m_.js";
import {
  L as yt
} from "./DIkmMkBK.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "50c680b400b1bbcc8448fbf904e79ce0ac9a7ba9"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "942140e6-910d-402e-9535-0f6672ec4d30", r._sentryDebugIdIdentifier = "sentry-dbid-942140e6-910d-402e-9535-0f6672ec4d30")
  })()
} catch {}

function gt(r, e, t) {
  nt(() => {
    var c = ct(() => e(r, t == null ? void 0 : t()) || {});
    if (t && (c != null && c.update)) {
      var w = !1,
        h = {};
      ot(() => {
        var d = t();
        it(d), w && at(h, d) && (h = d, c.update(d))
      }), w = !0
    }
    if (c != null && c.destroy) return () => c.destroy()
  })
}
const wt = () => "and",
  pt = () => "e",
  bt = () => "和",
  kt = () => "und",
  xt = () => "y",
  Tt = () => "et",
  Ct = () => "e",
  jt = () => "と",
  It = () => "i",
  zt = () => "и",
  Et = () => "та",
  Lt = () => "và",
  Wt = (r = {}, e = {}) => {
    const t = e.locale ?? g();
    return t === "en" ? wt() : t === "pt" ? pt() : t === "ch" ? bt() : t === "de" ? kt() : t === "es" ? xt() : t === "fr" ? Tt() : t === "it" ? Ct() : t === "jp" ? jt() : t === "pl" ? It() : t === "ru" ? zt() : t === "uk" ? Et() : Lt()
  },
  Mt = () => "By continuing, you agree to our",
  Pt = () => "Ao continuar, você concorda com nossos",
  Dt = () => "继续即表示你同意我们的",
  Bt = () => "Wenn du fortfährst, stimmst du unseren",
  Kt = () => "Al continuar, aceptas nuestra",
  St = () => "En continuant, vous acceptez nos",
  Ft = () => "Continuando, accetti i nostri",
  At = () => "続行すると、以下に同意したものとみなされます:",
  Nt = () => "Kontynuując, akceptujesz nasze",
  Ut = () => "Продолжая, вы соглашаетесь с нашими",
  Ht = () => "Продовжуючи, ви погоджуєтеся з нашими",
  Rt = () => "Khi tiếp tục, bạn đồng ý với",
  qt = (r = {}, e = {}) => {
    const t = e.locale ?? g();
    return t === "en" ? Mt() : t === "pt" ? Pt() : t === "ch" ? Dt() : t === "de" ? Bt() : t === "es" ? Kt() : t === "fr" ? St() : t === "it" ? Ft() : t === "jp" ? At() : t === "pl" ? Nt() : t === "ru" ? Ut() : t === "uk" ? Ht() : Rt()
  },
  Gt = () => "Code of Conduct",
  Ot = () => "Código de Conduta",
  Vt = () => "行为守则",
  Yt = () => "Verhaltenskodex",
  Qt = () => "Código de Conducta",
  Zt = () => "Code de conduite",
  Jt = () => "Codice di condotta",
  Xt = () => "行動規範",
  $t = () => "Kodeks postępowania",
  te = () => "Кодекс поведения",
  ee = () => "Кодекс поведінки",
  re = () => "Quy tắc ứng xử",
  ne = (r = {}, e = {}) => {
    const t = e.locale ?? g();
    return t === "en" ? Gt() : t === "pt" ? Ot() : t === "ch" ? Vt() : t === "de" ? Yt() : t === "es" ? Qt() : t === "fr" ? Zt() : t === "it" ? Jt() : t === "jp" ? Xt() : t === "pl" ? $t() : t === "ru" ? te() : t === "uk" ? ee() : re()
  },
  ce = () => "Do you have a Wplace Twitch account?",
  oe = () => "Você tem uma conta Wplace associada à Twitch?",
  ie = () => "你有 Wplace Twitch 账号吗？",
  ae = () => "Hast du ein Wplace-Konto über Twitch?",
  ue = () => "¿Tienes una cuenta de Wplace asociada a Twitch?",
  _e = () => "Avez-vous un compte Wplace associé à Twitch ?",
  se = () => "Hai un account Wplace associato a Twitch?",
  le = () => "WplaceのTwitch連携アカウントをお持ちですか？",
  fe = () => "Czy masz konto Wplace połączone z Twitchem?",
  de = () => "У вас есть аккаунт Wplace, связанный с Twitch?",
  ve = () => "У вас є акаунт Wplace, повʼязаний із Twitch?",
  he = () => "Bạn có tài khoản Wplace liên kết với Twitch không?",
  me = (r = {}, e = {}) => {
    const t = e.locale ?? g();
    return t === "en" ? ce() : t === "pt" ? oe() : t === "ch" ? ie() : t === "de" ? ae() : t === "es" ? ue() : t === "fr" ? _e() : t === "it" ? se() : t === "jp" ? le() : t === "pl" ? fe() : t === "ru" ? de() : t === "uk" ? ve() : he()
  },
  ye = r => `Login with ${r.name}`,
  ge = r => `Entrar com ${r.name}`,
  we = r => `使用 ${r.name} 登录`,
  pe = r => `Einloggen mit ${r.name}`,
  be = r => `Iniciar sesión con ${r.name}`,
  ke = r => `Se connecter avec ${r.name}`,
  xe = r => `Accedi con ${r.name}`,
  Te = r => `${r.name}でログイン`,
  Ce = r => `Zaloguj przez ${r.name}`,
  je = r => `Войти через ${r.name}`,
  Ie = r => `Увійти через ${r.name}`,
  ze = r => `Đăng nhập bằng ${r.name}`,
  Ee = (r, e = {}) => {
    const t = e.locale ?? g();
    return t === "en" ? ye(r) : t === "pt" ? ge(r) : t === "ch" ? we(r) : t === "de" ? pe(r) : t === "es" ? be(r) : t === "fr" ? ke(r) : t === "it" ? xe(r) : t === "jp" ? Te(r) : t === "pl" ? Ce(r) : t === "ru" ? je(r) : t === "uk" ? Ie(r) : ze(r)
  },
  Le = () => "Migrate your account",
  We = () => "Migre sua conta",
  Me = () => "迁移你的账号",
  Pe = () => "Konto migrieren",
  De = () => "Migra tu cuenta",
  Be = () => "Migrer votre compte",
  Ke = () => "Migra il tuo account",
  Se = () => "アカウントを移行",
  Fe = () => "Przenieś swoje konto",
  Ae = () => "Мигрировать аккаунт",
  Ne = () => "Перенести акаунт",
  Ue = () => "Di chuyển tài khoản",
  He = (r = {}, e = {}) => {
    const t = e.locale ?? g();
    return t === "en" ? Le() : t === "pt" ? We() : t === "ch" ? Me() : t === "de" ? Pe() : t === "es" ? De() : t === "fr" ? Be() : t === "it" ? Ke() : t === "jp" ? Se() : t === "pl" ? Fe() : t === "ru" ? Ae() : t === "uk" ? Ne() : Ue()
  },
  Re = () => "Privacy Policy",
  qe = () => "Política de privacidade",
  Ge = () => "隐私政策",
  Oe = () => "Datenschutzerklärung",
  Ve = () => "Política de privacidad",
  Ye = () => "Politique de confidentialité",
  Qe = () => "Informativa sulla privacy",
  Ze = () => "プライバシーポリシー",
  Je = () => "Polityka prywatności",
  Xe = () => "Политика конфиденциальности",
  $e = () => "Політика конфіденційності",
  tr = () => "Chính sách quyền riêng tư",
  er = (r = {}, e = {}) => {
    const t = e.locale ?? g();
    return t === "en" ? Re() : t === "pt" ? qe() : t === "ch" ? Ge() : t === "de" ? Oe() : t === "es" ? Ve() : t === "fr" ? Ye() : t === "it" ? Qe() : t === "jp" ? Ze() : t === "pl" ? Je() : t === "ru" ? Xe() : t === "uk" ? $e() : tr()
  },
  rr = () => "Terms of Service",
  nr = () => "Termos de Serviço",
  cr = () => "服务条款",
  or = () => "Nutzungsbedingungen",
  ir = () => "Términos de servicio",
  ar = () => "Conditions d’utilisation",
  ur = () => "Termini di servizio",
  _r = () => "利用規約",
  sr = () => "Warunki korzystania z usługi",
  lr = () => "Условия обслуживания",
  fr = () => "Умови обслуговування",
  dr = () => "Điều khoản dịch vụ",
  vr = (r = {}, e = {}) => {
    const t = e.locale ?? g();
    return t === "en" ? rr() : t === "pt" ? nr() : t === "ch" ? cr() : t === "de" ? or() : t === "es" ? ir() : t === "fr" ? ar() : t === "it" ? ur() : t === "jp" ? _r() : t === "pl" ? sr() : t === "ru" ? lr() : t === "uk" ? fr() : dr()
  };
var hr = S("<div></div>");

function mr(r, e) {
  Y(e, !0);
  let t = _(e, "widgetId", 15),
    c = _(e, "appearance", 3, "always"),
    w = _(e, "language", 3, "auto"),
    h = _(e, "execution", 3, "render"),
    d = _(e, "retryInterval", 3, 8e3),
    F = _(e, "retry", 3, "auto"),
    j = _(e, "refreshExpired", 3, "auto"),
    A = _(e, "theme", 3, "auto"),
    W = _(e, "size", 3, "normal"),
    I = _(e, "tabIndex", 3, 0);
  _(e, "reset", 15)(() => {
    var n;
    t() && ((n = window == null ? void 0 : window.turnstile) == null || n.reset(t()))
  });
  const b = X(() => ({
      sitekey: e.siteKey,
      callback: (n, a) => {
        var i;
        (i = e.callback) == null || i.call(e, n, a)
      },
      "error-callback": n => {
        var a;
        (a = e.errorCallback) == null || a.call(e, n)
      },
      "timeout-callback": () => {
        var n;
        (n = e.timeoutCallback) == null || n.call(e)
      },
      "expired-callback": () => {
        var n;
        (n = e.expiredCallback) == null || n.call(e)
      },
      "before-interactive-callback": () => {
        var n;
        (n = e.beforeInteractiveCallback) == null || n.call(e)
      },
      "after-interactive-callback": () => {
        var n;
        (n = e.afterInteractiveCallback) == null || n.call(e)
      },
      "unsupported-callback": () => {
        var n;
        return (n = e.unsupportedCallback) == null ? void 0 : n.call(e)
      },
      "response-field-name": e.responseFieldName ?? e.formsField ?? "cf-turnstile-response",
      "response-field": e.responseField ?? e.forms ?? !0,
      "refresh-expired": j(),
      "retry-interval": d(),
      tabindex: I(),
      appearance: c(),
      execution: h(),
      language: w(),
      action: e.action,
      retry: F(),
      theme: A(),
      cData: e.cData,
      size: W()
    })),
    z = (n, a) => {
      let i = window.turnstile.render(n, a);
      return t(i), {
        destroy() {
          window.turnstile.remove(i)
        },
        update(o) {
          window.turnstile.remove(i), i = window.turnstile.render(n, o), t(i)
        }
      }
    };
  let p = Q(!1);
  mt(() => {
    if (G(p, !0), !q.turnstatileLoaded) {
      const n = document.createElement("script");
      n.type = "text/javascript", n.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", n.async = !0, n.addEventListener("load", () => q.turnstatileLoaded = !0, {
        once: !0
      }), document.head.appendChild(n)
    }
    return () => {
      G(p, !1)
    }
  });
  var M = ut(),
    P = Z(M);
  {
    var D = n => {
      var a = hr();
      let i;
      gt(a, (o, u) => z == null ? void 0 : z(o, u), () => T(b)), K(() => i = $(a, 1, tt(e.class), "svelte-1lm836y", i, {
        flexible: W() == "flexible"
      })), C(n, a)
    };
    L(P, n => {
      q.turnstatileLoaded && T(p) && n(D)
    })
  }
  C(r, M), J()
}
var yr = _t('<svg><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>');

function gr(r, e) {
  let t = ft(e, ["$$slots", "$$events", "$$legacy"]);
  var c = yr();
  lt(c, () => ({
    viewBox: "0 0 256 262",
    xmlns: "http://www.w3.org/2000/svg",
    ...t
  })), C(r, c)
}
var wr = S('<a><!> </a> <div class="mt-2 flex flex-col items-center gap-1"><!> <!></div>', 1),
  pr = S('<p class="text-base-content/60 mt-8 text-center text-xs"> <a class="font-medium"> </a>.</p>'),
  br = S('<div><div class="flex justify-center py-4"><!></div> <div class="flex flex-col items-center gap-2 pt-6"><!></div> <p class="text-base-content/60 mt-2 text-center text-xs"> <a class="font-medium" target="_blank"> </a>, <a class="font-medium" href="/terms/privacy" target="_blank"> </a> <a class="font-medium" href="/terms/code-of-conduct" target="_blank"> </a>.</p> <!></div>');

function Pr(r, e) {
  Y(e, !0);
  let t = _(e, "showTwitchMigration", 3, !0),
    c = Q(st(V ? "" : "turnstile-disabled"));

  function w(o, u) {
    return `${dt}/auth/${o}?token=${u}${e.redirect?`&r=${e.redirect}`:""}`
  }
  var h = br(),
    d = s(h),
    F = s(d);
  yt(F, {
    hasText: !0
  }), l(d);
  var j = f(d, 2),
    A = s(j);
  {
    var W = o => {
      var u = wr(),
        v = Z(u),
        m = s(v);
      gr(m, {
        class: "mr-1 size-5"
      });
      var E = f(m);
      l(v);
      var k = f(v, 2),
        B = s(k);
      {
        var U = x => {
          {
            let H = X(() => vt.trim());
            mr(x, {
              get siteKey() {
                return T(H)
              },
              callback: rt => {
                G(c, rt, !0)
              }
            })
          }
        };
        L(B, x => {
          V && x(U)
        })
      }
      var et = f(B, 2);
      L(et, x => {}), l(k), K((x, H) => {
        $(v, 1, tt({
          "btn btn-lg bg-base-100 w-full text-base": !0,
          "bg-base-content/10 pointer-events-none": !T(c)
        })), R(v, "href", x), y(E, ` ${H??""}`)
      }, [() => T(c) ? w("google", T(c)) : "#", () => Ee({
        name: "Google"
      })]), C(o, u)
    };
    L(A, o => {
      o(W, !1)
    })
  }
  l(j);
  var I = f(j, 2),
    N = s(I),
    b = f(N),
    z = s(b, !0);
  l(b);
  var p = f(b, 2),
    M = s(p, !0);
  l(p);
  var P = f(p),
    D = f(P),
    n = s(D, !0);
  l(D), O(), l(I);
  var a = f(I, 2);
  {
    var i = o => {
      var u = pr(),
        v = s(u),
        m = f(v),
        E = s(m, !0);
      l(m), O(), l(u), K((k, B, U) => {
        y(v, `${k??""} `), R(m, "href", B), y(E, U)
      }, [() => me(), () => w("twitch", ""), () => He()]), C(o, u)
    };
    L(a, o => {
      t() && o(i)
    })
  }
  l(h), K((o, u, v, m, E, k) => {
    y(N, `${o??""} `), R(b, "href", u), y(z, v), y(M, m), y(P, ` ${E??""} `), y(n, k)
  }, [() => qt(), ht, () => vr(), () => er(), () => Wt(), () => ne()]), C(r, h), J()
}
export {
  Pr as L
};