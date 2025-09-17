import {
  g as H
} from "./BnlU_GE9.js";
import "./Ja2NBWT-.js";
import {
  o as ft
} from "./CX1bKweY.js";
import {
  bm as bt,
  v as O,
  b as v,
  at as je,
  p as Ne,
  ay as Qe,
  a as ue,
  c as Ve,
  f as w,
  d as t,
  r as o,
  s as n,
  n as A,
  t as I,
  ax as ce,
  y as _t,
  g as m,
  au as pe,
  aw as L,
  u as ke,
  b4 as mt
} from "./UY5Q__X9.js";
import {
  s as C
} from "./aomroAeL.js";
import {
  r as ee,
  p as Ye,
  i as S
} from "./BANHJa2u.js";
import {
  b as F,
  f as gt,
  s as J,
  r as we,
  g as ye,
  a as Ke,
  e as xt
} from "./Co50GgH2.js";
import {
  b as ht
} from "./BBVdbTRI.js";
import {
  g as He
} from "./CGtQ8m9p.js";
import {
  p as Ze
} from "./DYreBn0U.js";
import {
  g as wt,
  u as ve,
  t as $,
  a as We,
  S as yt,
  P as Ue
} from "./C8RgS9X_.js";
import {
  a as kt
} from "./RXkgm_N0.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "c15cd1ace8f581becdea18dd6b1672f67db80587"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "89b7fa5c-0c87-466f-9b12-6e59724f5e21", a._sentryDebugIdIdentifier = "sentry-dbid-89b7fa5c-0c87-466f-9b12-6e59724f5e21")
  })()
} catch {}
const Ct = bt,
  It = () => "Add profile picture",
  Lt = () => "Adicionar imagem de perfil",
  ko = (a = {}, e = {}) => (e.locale ?? H()) === "en" ? It() : Lt(),
  zt = () => "Close",
  Pt = () => "Fechar",
  qt = (a = {}, e = {}) => (e.locale ?? H()) === "en" ? zt() : Pt(),
  Dt = () => "You gain 1 droplet per pixel painted and 500 droplets per level",
  Tt = () => "Você ganha 1 droplet por pixel pintado e 500 droplets por level",
  Re = (a = {}, e = {}) => (e.locale ?? H()) === "en" ? Dt() : Tt(),
  St = () => "Eraser",
  Et = () => "Borracha",
  Co = (a = {}, e = {}) => (e.locale ?? H()) === "en" ? St() : Et(),
  Mt = () => "Refund Policy",
  Bt = () => "Política de Reembolso",
  Ae = (a = {}, e = {}) => (e.locale ?? H()) === "en" ? Mt() : Bt(),
  Ht = () => "For refund requests and processing details, please see our",
  Zt = () => "Para pedidos de reembolso, consulte nossa",
  Fe = (a = {}, e = {}) => (e.locale ?? H()) === "en" ? Ht() : Zt();
var Ut = O('<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');

function Rt(a, e) {
  let r = ee(e, ["$$slots", "$$events", "$$legacy"]);
  var s = Ut();
  F(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...r
  })), v(a, s)
}

function At() {
  return H()
}

function Oe(a) {
  return `${a}/terms/return${At()==="pt"?"/pt":""}`
}
var Ft = O('<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>');

function Ce(a, e) {
  let r = ee(e, ["$$slots", "$$events", "$$legacy"]);
  var s = Ft();
  F(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...r
  })), v(a, s)
}
var Ot = w('<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'),
  Xt = w('<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-sm:hidden">Droplets</span></span> <!></span>'),
  jt = w('<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pl-1 pr-1"><!></button>'),
  Nt = w('<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pl-1 pr-2"><!></span>');

function Qt(a, e) {
  Ne(e, !0);
  const r = l => {
    var i = Xt(),
      f = t(i);
    Ce(f, {
      class: "text-primary size-4.5"
    });
    var y = n(f, 2),
      D = t(y);
    A(), o(y);
    var x = n(y, 2);
    {
      var P = E => {
        var T = Ot(),
          te = t(T);
        Rt(te, {
          class: "size-4"
        }), o(T), v(E, T)
      };
      S(x, E => {
        s() && E(P)
      })
    }
    o(i), I(E => C(D, `${E??""} `), [() => e.value.toLocaleString("en-US")]), v(l, i)
  };
  let s = Ye(e, "button", 3, !0);
  var b = Qe(),
    p = ue(b);
  {
    var d = l => {
        var i = jt();
        i.__click = () => {
          wt.dropletsDialogOpen = !0
        };
        var f = t(i);
        r(f), o(i), v(l, i)
      },
      _ = l => {
        var i = Nt(),
          f = t(i);
        r(f), o(i), v(l, i)
      };
    S(p, l => {
      s() ? l(d) : l(_, !1)
    })
  }
  v(a, b), Ve()
}
je(["click"]);
var Vt = O('<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>');

function Yt(a, e) {
  let r = ee(e, ["$$slots", "$$events", "$$legacy"]);
  var s = Vt();
  F(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...r
  })), v(a, s)
}
var Kt = O('<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>');

function Xe(a, e) {
  let r = ee(e, ["$$slots", "$$events", "$$legacy"]);
  var s = Kt();
  F(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100",
    height: "100",
    viewBox: "0 0 48 48",
    ...r
  })), v(a, s)
}
var Wt = (a, e, r, s, b) => {
    m(e).show(), L(r, !0), We.generatePixQrCode(s()).then(p => {
      L(b, p, !0)
    }).catch(p => {
      $.error(p.message)
    }).finally(() => {
      L(r, !1)
    })
  },
  Gt = w('<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 border-base-content/20 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'),
  Jt = w('<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"> </button></form>'),
  $t = w('<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl p-4"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">Droplets</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'),
  eo = w('<div class="flex flex-col gap-4"><section><div class="flex items-center gap-1"><!> <h3 class="text-xl font-bold">Droplets</h3> <div class="ml-auto mr-4"><!></div></div> <p class="text-base-content/80 mt-1 text-sm"> </p></section> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div> <p class="text-base-content/60 mt-4 text-center text-sm"> <a class="font-medium" target="_blank"> </a></p></section></div>'),
  to = (a, e) => {
    var r;
    navigator.clipboard.writeText(((r = m(e)) == null ? void 0 : r.pixCode) ?? ""), $.success("Código PIX copiado")
  },
  oo = async (a, e, r) => {
    var s, b, p;
    if (!m(e)) {
      $.info("Espere 1 minuto e recarrege a pagina");
      return
    }
    try {
      L(r, !0);
      const {
        paid: d
      } = await We.getPixStatus(m(e).pixId);
      if (d) {
        const _ = m(e).productId.toString(),
          l = (p = (b = (s = yt.products[_]) == null ? void 0 : s.items) == null ? void 0 : b[0]) == null ? void 0 : p.amount;
        await ve.refresh(), l ? He(`payment/success?droplets=${l}`) : He("payment/success")
      } else $.info("Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.", {
        duration: 1e5
      })
    } catch (d) {
      console.error(d), $.error("Error ao atualizar o status do pix. Tente recarregar a página.")
    } finally {
      L(r, !1)
    }
  }, ao = w('<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated w-70 aspect-square" alt="QR code PIX"/> <div class="center-absolute border-6 absolute size-[95%] border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pl-4 pr-2.5"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>', 1), so = w('<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'), ro = w('<dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-2xl pb-4"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog> <dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-lg"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <div class="flex h-full flex-col items-center gap-4"><section><div class="flex items-center gap-2"><!> <h3 class="text-4xl font-bold">PIX</h3></div></section> <!></div></div></dialog>', 1);

function Io(a, e) {
  Ne(e, !0);
  let r = Ye(e, "open", 15),
    s = pe(!1);
  ft(() => {
    const c = h => {
      h.key === "Escape" && r(!1)
    };
    return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c)
  });
  const b = ke(() => {
    var c, h;
    return ((h = (c = ve.data) == null ? void 0 : c.country) == null ? void 0 : h.toUpperCase()) === "BR"
  });
  let p = pe(null),
    d = pe(void 0),
    _ = pe(!1);
  var l = ro(),
    i = ue(l),
    f = t(i),
    y = n(t(f), 2);
  {
    var D = c => {
      var h = eo(),
        M = t(h),
        Z = t(M),
        oe = t(Z);
      Ce(oe, {
        class: "text-primary size-6"
      });
      var U = n(oe, 4),
        ae = t(U);
      {
        let z = ke(() => {
          var R;
          return ((R = ve.data) == null ? void 0 : R.droplets) ?? 0
        });
        Qt(ae, {
          get value() {
            return m(z)
          },
          button: !1
        })
      }
      o(U), o(Z);
      var se = n(Z, 2),
        X = t(se, !0);
      o(se), o(M);
      var j = n(M, 2);
      {
        const z = (R, u) => {
          let Y = () => u == null ? void 0 : u().droplets,
            K = () => u == null ? void 0 : u().bonus,
            qe = () => u == null ? void 0 : u().price,
            De = () => u == null ? void 0 : u().stripeLookupkey,
            at = () => u == null ? void 0 : u().productId,
            st = () => u == null ? void 0 : u().dropdownClass;
          var _e = $t(),
            me = t(_e),
            Te = t(me);
          Ce(Te, {
            class: "mb-1 inline size-7"
          });
          var Se = n(Te, 2),
            rt = t(Se);
          A(), o(Se), o(me);
          var ge = n(me, 2),
            Ee = t(ge);
          {
            var nt = k => {
              var g = mt();
              I(q => C(g, `${q??""} Droplets`), [() => Y().toLocaleString("en-US")]), v(k, g)
            };
            S(Ee, k => {
              K() && k(nt)
            })
          }
          var Me = n(Ee, 2),
            lt = t(Me);
          o(Me), o(ge);
          var it = n(ge, 2);
          {
            var dt = k => {
                var g = Gt(),
                  q = t(g),
                  W = t(q);
                o(q);
                var le = n(q, 2),
                  G = t(le),
                  ie = t(G),
                  xe = t(ie);
                we(xe);
                var he = n(xe, 2),
                  pt = t(he);
                Yt(pt, {
                  class: "inline size-5"
                }), A(2), o(he), o(ie), o(G);
                var Be = n(G, 2),
                  de = t(Be);
                de.__click = [Wt, p, s, at, d];
                var vt = t(de);
                Xe(vt, {
                  class: "size-5"
                }), A(2), o(de), o(Be), o(le), o(g), I(ut => {
                  Ke(g, 1, `dropdown mt-3 ${st()??""}`), C(W, `R$${ut??""}`), J(ie, "action", `${Ue}/payment/create-checkout-session`), ye(xe, De()), he.disabled = m(s), de.disabled = m(s)
                }, [() => (qe() * 4).toFixed(2).replace(".", ",")]), ce("submit", ie, () => {
                  L(s, !0), setTimeout(() => L(s, !1), 3e3)
                }), v(k, g)
              },
              ct = k => {
                var g = Jt(),
                  q = t(g);
                we(q);
                var W = n(q, 2),
                  le = t(W);
                o(W), o(g), I(G => {
                  J(g, "action", `${Ue}/payment/create-checkout-session`), ye(q, De()), W.disabled = m(s), C(le, `$${G??""}`)
                }, [() => qe().toFixed(2)]), ce("submit", g, () => {
                  L(s, !0), setTimeout(() => L(s, !1), 3e3)
                }), v(k, g)
              };
            S(it, k => {
              m(b) || Ct ? k(dt) : k(ct, !1)
            })
          }
          o(_e), I((k, g) => {
            C(rt, `${k??""} `), C(lt, `+${g??""} bonus`)
          }, [() => (Y() + K()).toLocaleString("en-US"), () => K().toLocaleString("en-US")]), v(R, _e)
        };
        var B = t(j),
          N = t(B);
        z(N, () => ({
          price: 5,
          droplets: 25e3,
          bonus: 0,
          stripeLookupkey: "droplets_5",
          productId: 10,
          dropdownClass: "dropdown-center"
        }));
        var re = n(N, 2);
        z(re, () => ({
          price: 15,
          droplets: 75e3,
          bonus: 3750,
          stripeLookupkey: "droplets_15",
          productId: 20,
          dropdownClass: "dropdown-center"
        }));
        var Q = n(re, 2);
        z(Q, () => ({
          price: 30,
          droplets: 15e4,
          bonus: 15e3,
          stripeLookupkey: "droplets_30",
          productId: 30,
          dropdownClass: "dropdown-center"
        }));
        var V = n(Q, 2);
        z(V, () => ({
          price: 50,
          droplets: 25e4,
          bonus: 37500,
          stripeLookupkey: "droplets_50",
          productId: 40,
          dropdownClass: "dropdown-center"
        }));
        var ne = n(V, 2);
        z(ne, () => ({
          price: 75,
          droplets: 375e3,
          bonus: 75e3,
          stripeLookupkey: "droplets_75",
          productId: 50,
          dropdownClass: "dropdown-center"
        }));
        var tt = n(ne, 2);
        z(tt, () => ({
          price: 100,
          droplets: 5e5,
          bonus: 125e3,
          stripeLookupkey: "droplets_100",
          productId: 60,
          dropdownClass: "max-sm:dropdown-top dropdown-center"
        })), o(B);
        var ze = n(B, 2),
          Pe = t(ze),
          be = n(Pe),
          ot = t(be, !0);
        o(be), o(ze), o(j), I((R, u, Y, K) => {
          C(Pe, `${u??""} `), J(be, "href", Y), C(ot, K)
        }, [() => Re(), () => Fe(), () => Oe(Ze.url.origin), () => Ae()])
      }
      o(h), I((z, R, u, Y) => C(X, z), [() => Re(), () => Fe(), () => Oe(Ze.url.origin), () => Ae()]), v(c, h)
    };
    S(y, c => {
      ve.data && c(D)
    })
  }
  o(f);
  var x = n(f, 2),
    P = t(x),
    E = t(P, !0);
  o(P), o(x), o(i), gt(i, () => c => {
    _t(() => {
      r() ? c.show() : c.close()
    })
  });
  var T = n(i, 2),
    te = t(T),
    Ie = n(t(te), 2),
    fe = t(Ie),
    Le = t(fe),
    Ge = t(Le);
  Xe(Ge, {
    class: "size-10"
  }), A(2), o(Le), o(fe);
  var Je = n(fe, 2);
  {
    var $e = c => {
        var h = ao(),
          M = ue(h),
          Z = n(t(M)),
          oe = t(Z);
        o(Z), o(M);
        var U = n(M, 2),
          ae = t(U),
          se = t(ae);
        A(2), o(ae), o(U);
        var X = n(U, 2),
          j = n(t(X), 2),
          B = t(j);
        we(B);
        var N = n(B, 2),
          re = t(N);
        re.__click = [to, d], o(N), o(j), o(X);
        var Q = n(X, 2),
          V = t(Q);
        V.__click = [oo, d, _], o(Q), I(ne => {
          C(oe, `R$${ne??""}`), J(se, "src", m(d).qrCode), ye(B, m(d).pixCode), V.disabled = m(_)
        }, [() => (m(d).price / 100).toFixed(2).replace(".", ",")]), v(c, h)
      },
      et = c => {
        var h = so();
        v(c, h)
      };
    S(Je, c => {
      m(d) ? c($e) : c(et, !1)
    })
  }
  o(Ie), o(te), o(T), ht(T, c => L(p, c), () => m(p)), I(c => C(E, c), [() => qt()]), ce("close", i, () => {
    r(!1)
  }), ce("close", T, () => {
    setTimeout(() => {
      L(d, void 0)
    }, 300)
  }), v(a, l), Ve()
}
je(["click"]);
var no = O('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'),
  lo = O('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>');

function Lo(a, e) {
  let r = ee(e, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = Qe(),
    b = ue(s);
  {
    var p = _ => {
        var l = no();
        F(l, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), v(_, l)
      },
      d = _ => {
        var l = lo();
        F(l, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...r
        })), v(_, l)
      };
    S(b, _ => {
      e.filled ? _(p) : _(d, !1)
    })
  }
  v(a, s)
}

function zo([a, e], [r, s]) {
  a = Math.floor(a), e = Math.floor(e), r = Math.floor(r), s = Math.floor(s);
  const b = [],
    p = Math.abs(r - a),
    d = Math.abs(s - e),
    _ = a < r ? 1 : -1,
    l = e < s ? 1 : -1;
  let i = p - d,
    f = a,
    y = e;
  for (; b.push([f, y]), !(f === r && y === s);) {
    const D = 2 * i;
    D > -d && (i -= d, f += _), D < p && (i += p, y += l)
  }
  return b
}
var io = w('<img class="pixelated bg-base-200" alt="User profile"/>'),
  co = w('<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-zhy0pt"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>');

function Po(a, e) {
  const r = ke(() => e.level % 1 * 360);
  var s = co(),
    b = n(t(s), 2),
    p = n(b, 2),
    d = t(p),
    _ = t(d);
  {
    var l = x => {
        kt(x, {
          get userId() {
            return e.userId
          }
        })
      },
      i = x => {
        var P = io();
        I(() => J(P, "src", e.pictureUrl)), v(x, P)
      };
    S(_, x => {
      e.pictureUrl ? x(i, !1) : x(l)
    })
  }
  o(d), o(p);
  var f = n(p, 2);
  let y;
  var D = t(f, !0);
  o(f), o(s), I((x, P) => {
    xt(b, `--angle: ${m(r)??""}deg; --color: var(--color-secondary)`), y = Ke(f, 1, "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, y, x), C(D, P)
  }, [() => ({
    "left-0": e.level > 99,
    "-left-1": e.level > 99
  }), () => Math.floor(e.level)]), v(a, s)
}
export {
  Rt as A, Qt as D, Lo as I, Po as P, Ce as a, Io as b, ko as c, qt as d, Co as e, Ct as f, Oe as g, zo as r
};