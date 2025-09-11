import {
  g as pe
} from "./etMdSgD_.js";
import "./BjnY0gch.js";
import {
  o as rt
} from "./CWQx_HBc.js";
import {
  bm as lt,
  v as R,
  b as v,
  at as He,
  p as Ze,
  ax as Ue,
  a as ce,
  c as Ae,
  f as w,
  d as t,
  r as a,
  s as l,
  n as U,
  t as z,
  bi as le,
  y as nt,
  g as m,
  av as ne,
  aw as C,
  u as we,
  aX as it
} from "./CU1IDgoR.js";
import {
  s as L
} from "./_gR7GQ79.js";
import {
  r as K,
  p as Re,
  i as q
} from "./PUQ9h4RA.js";
import {
  b as A,
  f as dt,
  r as xe,
  s as ie,
  g as he,
  a as Fe,
  e as ct
} from "./XoNiCaaU.js";
import {
  b as pt
} from "./C6r518T4.js";
import {
  g as Ee
} from "./BMbS-s_c.js";
import {
  g as vt,
  u as de,
  t as Y,
  a as Xe,
  S as ut,
  P as Me
} from "./DfZnD8wK.js";
import {
  a as ft
} from "./BEDA9w4X.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "db50de114564c1615b532cc812ac881318d7283e"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "0a23172f-1002-4741-a548-11a88513e838", r._sentryDebugIdIdentifier = "sentry-dbid-0a23172f-1002-4741-a548-11a88513e838")
  })()
} catch {}
const bt = lt,
  _t = () => "Add profile picture",
  mt = () => "Adicionar imagem de perfil",
  ia = (r = {}, e = {}) => (e.locale ?? pe()) === "en" ? _t() : mt(),
  gt = () => "Close",
  xt = () => "Fechar",
  ht = (r = {}, e = {}) => (e.locale ?? pe()) === "en" ? gt() : xt(),
  wt = () => "You gain 1 droplet per pixel painted and 500 droplets per level",
  yt = () => "Você ganha 1 droplet por pixel pintado e 500 droplets por level",
  kt = (r = {}, e = {}) => (e.locale ?? pe()) === "en" ? wt() : yt(),
  Ct = () => "Eraser",
  It = () => "Borracha",
  da = (r = {}, e = {}) => (e.locale ?? pe()) === "en" ? Ct() : It();
var Lt = R('<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');

function zt(r, e) {
  let s = K(e, ["$$slots", "$$events", "$$legacy"]);
  var o = Lt();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...s
  })), v(r, o)
}
var Dt = R('<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>');

function ye(r, e) {
  let s = K(e, ["$$slots", "$$events", "$$legacy"]);
  var o = Dt();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...s
  })), v(r, o)
}
var Tt = w('<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'),
  Pt = w('<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-sm:hidden">Droplets</span></span> <!></span>'),
  St = w('<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pl-1 pr-1"><!></button>'),
  qt = w('<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pl-1 pr-2"><!></span>');

function Et(r, e) {
  Ze(e, !0);
  const s = n => {
    var i = Pt(),
      u = t(i);
    ye(u, {
      class: "text-primary size-4.5"
    });
    var y = l(u, 2),
      P = t(y);
    U(), a(y);
    var x = l(y, 2);
    {
      var D = E => {
        var S = Tt(),
          W = t(S);
        zt(W, {
          class: "size-4"
        }), a(S), v(E, S)
      };
      q(x, E => {
        o() && E(D)
      })
    }
    a(i), z(E => L(P, `${E??""} `), [() => e.value.toLocaleString("en-US")]), v(n, i)
  };
  let o = Re(e, "button", 3, !0);
  var b = Ue(),
    p = ce(b);
  {
    var d = n => {
        var i = St();
        i.__click = () => {
          vt.dropletsDialogOpen = !0
        };
        var u = t(i);
        s(u), a(i), v(n, i)
      },
      _ = n => {
        var i = qt(),
          u = t(i);
        s(u), a(i), v(n, i)
      };
    q(p, n => {
      o() ? n(d) : n(_, !1)
    })
  }
  v(r, b), Ae()
}
He(["click"]);
var Mt = R('<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>');

function Bt(r, e) {
  let s = K(e, ["$$slots", "$$events", "$$legacy"]);
  var o = Mt();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...s
  })), v(r, o)
}
var Ht = R('<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>');

function Be(r, e) {
  let s = K(e, ["$$slots", "$$events", "$$legacy"]);
  var o = Ht();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100",
    height: "100",
    viewBox: "0 0 48 48",
    ...s
  })), v(r, o)
}
var Zt = (r, e, s, o, b) => {
    m(e).show(), C(s, !0), Xe.generatePixQrCode(o()).then(p => {
      C(b, p, !0)
    }).catch(p => {
      Y.error(p.message)
    }).finally(() => {
      C(s, !1)
    })
  },
  Ut = w('<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 border-base-content/20 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'),
  At = w('<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"> </button></form>'),
  Rt = w('<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl px-4 py-6"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">Droplets</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'),
  Ft = w('<div class="flex flex-col gap-4"><section><div class="flex items-center gap-1"><!> <h3 class="text-xl font-bold">Droplets</h3> <div class="ml-auto mr-4"><!></div></div> <p class="text-base-content/80 mt-1 text-sm"> </p></section> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div></section></div>'),
  Xt = (r, e) => {
    var s;
    navigator.clipboard.writeText(((s = m(e)) == null ? void 0 : s.pixCode) ?? ""), Y.success("Código PIX copiado")
  },
  Ot = async (r, e, s) => {
    var o, b, p;
    if (!m(e)) {
      Y.info("Espere 1 minuto e recarrege a pagina");
      return
    }
    try {
      C(s, !0);
      const {
        paid: d
      } = await Xe.getPixStatus(m(e).pixId);
      if (d) {
        const _ = m(e).productId.toString(),
          n = (p = (b = (o = ut.products[_]) == null ? void 0 : o.items) == null ? void 0 : b[0]) == null ? void 0 : p.amount;
        await de.refresh(), n ? Ee(`payment/success?droplets=${n}`) : Ee("payment/success")
      } else Y.info("Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.", {
        duration: 1e5
      })
    } catch (d) {
      console.error(d), Y.error("Error ao atualizar o status do pix. Tente recarregar a página.")
    } finally {
      C(s, !1)
    }
  }, jt = w('<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated w-70 aspect-square" alt="QR code PIX"/> <div class="center-absolute border-6 absolute size-[95%] border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pl-4 pr-2.5"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>', 1), Nt = w('<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'), Qt = w('<dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-2xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog> <dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-lg"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <div class="flex h-full flex-col items-center gap-4"><section><div class="flex items-center gap-2"><!> <h3 class="text-4xl font-bold">PIX</h3></div></section> <!></div></div></dialog>', 1);

function ca(r, e) {
  Ze(e, !0);
  let s = Re(e, "open", 15),
    o = ne(!1);
  rt(() => {
    const c = h => {
      h.key === "Escape" && s(!1)
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c)
  });
  const b = we(() => {
    var c, h;
    return ((h = (c = de.data) == null ? void 0 : c.country) == null ? void 0 : h.toUpperCase()) === "BR"
  });
  let p = ne(null),
    d = ne(void 0),
    _ = ne(!1);
  var n = Qt(),
    i = ce(n),
    u = t(i),
    y = l(t(u), 2);
  {
    var P = c => {
      var h = Ft(),
        M = t(h),
        B = t(M),
        G = t(B);
      ye(G, {
        class: "text-primary size-6"
      });
      var H = l(G, 4),
        J = t(H);
      {
        let I = we(() => {
          var ae;
          return ((ae = de.data) == null ? void 0 : ae.droplets) ?? 0
        });
        Et(J, {
          get value() {
            return m(I)
          },
          button: !1
        })
      }
      a(H), a(B);
      var $ = l(B, 2),
        F = t($, !0);
      a($), a(M);
      var X = l(M, 2);
      {
        const I = (ae, f) => {
          let Ie = () => f == null ? void 0 : f().droplets,
            ue = () => f == null ? void 0 : f().bonus,
            Le = () => f == null ? void 0 : f().price,
            ze = () => f == null ? void 0 : f().stripeLookupkey,
            Ye = () => f == null ? void 0 : f().productId,
            Ke = () => f == null ? void 0 : f().dropdownClass;
          var fe = Rt(),
            be = t(fe),
            De = t(be);
          ye(De, {
            class: "mb-1 inline size-7"
          });
          var Te = l(De, 2),
            We = t(Te);
          U(), a(Te), a(be);
          var _e = l(be, 2),
            Pe = t(_e);
          {
            var Ge = k => {
              var g = it();
              z(T => L(g, `${T??""} Droplets`), [() => Ie().toLocaleString("en-US")]), v(k, g)
            };
            q(Pe, k => {
              ue() && k(Ge)
            })
          }
          var Se = l(Pe, 2),
            Je = t(Se);
          a(Se), a(_e);
          var $e = l(_e, 2);
          {
            var et = k => {
                var g = Ut(),
                  T = t(g),
                  Q = t(T);
                a(T);
                var oe = l(T, 2),
                  V = t(oe),
                  se = t(V),
                  me = t(se);
                xe(me);
                var ge = l(me, 2),
                  at = t(ge);
                Bt(at, {
                  class: "inline size-5"
                }), U(2), a(ge), a(se), a(V);
                var qe = l(V, 2),
                  re = t(qe);
                re.__click = [Zt, p, o, Ye, d];
                var ot = t(re);
                Be(ot, {
                  class: "size-5"
                }), U(2), a(re), a(qe), a(oe), a(g), z(st => {
                  Fe(g, 1, `dropdown mt-3 ${Ke()??""}`), L(Q, `R$${st??""}`), ie(se, "action", `${Me}/payment/create-checkout-session`), he(me, ze()), ge.disabled = m(o), re.disabled = m(o)
                }, [() => (Le() * 4).toFixed(2).replace(".", ",")]), le("submit", se, () => {
                  C(o, !0), setTimeout(() => C(o, !1), 3e3)
                }), v(k, g)
              },
              tt = k => {
                var g = At(),
                  T = t(g);
                xe(T);
                var Q = l(T, 2),
                  oe = t(Q);
                a(Q), a(g), z(V => {
                  ie(g, "action", `${Me}/payment/create-checkout-session`), he(T, ze()), Q.disabled = m(o), L(oe, `$${V??""}`)
                }, [() => Le().toFixed(2)]), le("submit", g, () => {
                  C(o, !0), setTimeout(() => C(o, !1), 3e3)
                }), v(k, g)
              };
            q($e, k => {
              m(b) || bt ? k(et) : k(tt, !1)
            })
          }
          a(fe), z((k, g) => {
            L(We, `${k??""} `), L(Je, `+${g??""} bonus`)
          }, [() => (Ie() + ue()).toLocaleString("en-US"), () => ue().toLocaleString("en-US")]), v(ae, fe)
        };
        var Z = t(X),
          O = t(Z);
        I(O, () => ({
          price: 5,
          droplets: 25e3,
          bonus: 0,
          stripeLookupkey: "droplets_5",
          productId: 10,
          dropdownClass: "dropdown-center"
        }));
        var ee = l(O, 2);
        I(ee, () => ({
          price: 15,
          droplets: 75e3,
          bonus: 3750,
          stripeLookupkey: "droplets_15",
          productId: 20,
          dropdownClass: "dropdown-center"
        }));
        var j = l(ee, 2);
        I(j, () => ({
          price: 30,
          droplets: 15e4,
          bonus: 15e3,
          stripeLookupkey: "droplets_30",
          productId: 30,
          dropdownClass: "dropdown-center"
        }));
        var N = l(j, 2);
        I(N, () => ({
          price: 50,
          droplets: 25e4,
          bonus: 37500,
          stripeLookupkey: "droplets_50",
          productId: 40,
          dropdownClass: "dropdown-center"
        }));
        var te = l(N, 2);
        I(te, () => ({
          price: 75,
          droplets: 375e3,
          bonus: 75e3,
          stripeLookupkey: "droplets_75",
          productId: 50,
          dropdownClass: "dropdown-center"
        }));
        var Ve = l(te, 2);
        I(Ve, () => ({
          price: 100,
          droplets: 5e5,
          bonus: 125e3,
          stripeLookupkey: "droplets_100",
          productId: 60,
          dropdownClass: "max-sm:dropdown-top dropdown-center"
        })), a(Z), a(X)
      }
      a(h), z(I => L(F, I), [() => kt()]), v(c, h)
    };
    q(y, c => {
      de.data && c(P)
    })
  }
  a(u);
  var x = l(u, 2),
    D = t(x),
    E = t(D, !0);
  a(D), a(x), a(i), dt(i, () => c => {
    nt(() => {
      s() ? c.show() : c.close()
    })
  });
  var S = l(i, 2),
    W = t(S),
    ke = l(t(W), 2),
    ve = t(ke),
    Ce = t(ve),
    Oe = t(Ce);
  Be(Oe, {
    class: "size-10"
  }), U(2), a(Ce), a(ve);
  var je = l(ve, 2);
  {
    var Ne = c => {
        var h = jt(),
          M = ce(h),
          B = l(t(M)),
          G = t(B);
        a(B), a(M);
        var H = l(M, 2),
          J = t(H),
          $ = t(J);
        U(2), a(J), a(H);
        var F = l(H, 2),
          X = l(t(F), 2),
          Z = t(X);
        xe(Z);
        var O = l(Z, 2),
          ee = t(O);
        ee.__click = [Xt, d], a(O), a(X), a(F);
        var j = l(F, 2),
          N = t(j);
        N.__click = [Ot, d, _], a(j), z(te => {
          L(G, `R$${te??""}`), ie($, "src", m(d).qrCode), he(Z, m(d).pixCode), N.disabled = m(_)
        }, [() => (m(d).price / 100).toFixed(2).replace(".", ",")]), v(c, h)
      },
      Qe = c => {
        var h = Nt();
        v(c, h)
      };
    q(je, c => {
      m(d) ? c(Ne) : c(Qe, !1)
    })
  }
  a(ke), a(W), a(S), pt(S, c => C(p, c), () => m(p)), z(c => L(E, c), [() => ht()]), le("close", i, () => {
    s(!1)
  }), le("close", S, () => {
    setTimeout(() => {
      C(d, void 0)
    }, 300)
  }), v(r, n), Ae()
}
He(["click"]);
var Vt = R('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'),
  Yt = R('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>');

function pa(r, e) {
  let s = K(e, ["$$slots", "$$events", "$$legacy", "filled"]);
  var o = Ue(),
    b = ce(o);
  {
    var p = _ => {
        var n = Vt();
        A(n, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), v(_, n)
      },
      d = _ => {
        var n = Yt();
        A(n, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), v(_, n)
      };
    q(b, _ => {
      e.filled ? _(p) : _(d, !1)
    })
  }
  v(r, o)
}

function va([r, e], [s, o]) {
  r = Math.floor(r), e = Math.floor(e), s = Math.floor(s), o = Math.floor(o);
  const b = [],
    p = Math.abs(s - r),
    d = Math.abs(o - e),
    _ = r < s ? 1 : -1,
    n = e < o ? 1 : -1;
  let i = p - d,
    u = r,
    y = e;
  for (; b.push([u, y]), !(u === s && y === o);) {
    const P = 2 * i;
    P > -d && (i -= d, u += _), P < p && (i += p, y += n)
  }
  return b
}
var Kt = w('<img class="pixelated bg-base-200" alt="User profile"/>'),
  Wt = w('<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-zhy0pt"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>');

function ua(r, e) {
  const s = we(() => e.level % 1 * 360);
  var o = Wt(),
    b = l(t(o), 2),
    p = l(b, 2),
    d = t(p),
    _ = t(d);
  {
    var n = x => {
        ft(x, {
          get userId() {
            return e.userId
          }
        })
      },
      i = x => {
        var D = Kt();
        z(() => ie(D, "src", e.pictureUrl)), v(x, D)
      };
    q(_, x => {
      e.pictureUrl ? x(i, !1) : x(n)
    })
  }
  a(d), a(p);
  var u = l(p, 2);
  let y;
  var P = t(u, !0);
  a(u), a(o), z((x, D) => {
    ct(b, `--angle: ${m(s)??""}deg; --color: var(--color-secondary)`), y = Fe(u, 1, "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, y, x), L(P, D)
  }, [() => ({
    "left-0": e.level > 99,
    "-left-1": e.level > 99
  }), () => Math.floor(e.level)]), v(r, o)
}
export {
  zt as A, Et as D, pa as I, ua as P, ye as a, ca as b, ia as c, ht as d, da as e, bt as f, va as r
};