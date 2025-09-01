import {
  g as pt
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  o as re
} from "./C7jYfUbS.js";
import {
  bn as le,
  v as R,
  b as v,
  at as Zt,
  p as Et,
  aK as Ut,
  a as dt,
  c as At,
  f as w,
  d as t,
  r as e,
  s as r,
  n as U,
  t as z,
  bj as lt,
  y as ne,
  g as b,
  aI as nt,
  aJ as C,
  u as wt,
  b4 as ie
} from "./apxRKl0u.js";
import {
  s as L
} from "./B9SWw7yZ.js";
import {
  r as N,
  p as Rt,
  i as S
} from "./DBMZVJyA.js";
import {
  b as A,
  e as ce,
  r as xt,
  s as it,
  f as ht,
  a as Ft,
  d as de
} from "./DRcRj3o9.js";
import {
  b as pe
} from "./ClbBIaRv.js";
import {
  g as Tt
} from "./DJV_Homq.js";
import {
  g as ve,
  u as ct,
  t as J,
  a as jt,
  S as ue,
  c as Bt
} from "./DJI8mFfT.js";
import {
  a as me
} from "./B1v9VrKg.js";
const _e = le,
  fe = () => "Add profile picture",
  be = () => "Adicionar imagem de perfil",
  ia = (l = {}, a = {}) => (a.locale ?? pt()) === "en" ? fe() : be(),
  ge = () => "Close",
  xe = () => "Fechar",
  he = (l = {}, a = {}) => (a.locale ?? pt()) === "en" ? ge() : xe(),
  we = () => "You gain 1 droplet per pixel painted and 500 droplets per level",
  ye = () => "Você ganha 1 droplet por pixel pintado e 500 droplets por level",
  ke = (l = {}, a = {}) => (a.locale ?? pt()) === "en" ? we() : ye(),
  Ce = () => "Eraser",
  Ie = () => "Borracha",
  ca = (l = {}, a = {}) => (a.locale ?? pt()) === "en" ? Ce() : Ie();
var Le = R('<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');

function ze(l, a) {
  let s = N(a, ["$$slots", "$$events", "$$legacy"]);
  var o = Le();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...s
  })), v(l, o)
}
var Pe = R('<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>');

function yt(l, a) {
  let s = N(a, ["$$slots", "$$events", "$$legacy"]);
  var o = Pe();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...s
  })), v(l, o)
}
var qe = w('<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'),
  De = w('<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-sm:hidden">Droplets</span></span> <!></span>'),
  Me = w('<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pl-1 pr-1"><!></button>'),
  Se = w('<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pl-1 pr-2"><!></span>');

function Te(l, a) {
  Et(a, !0);
  const s = n => {
    var i = De(),
      u = t(i);
    yt(u, {
      class: "text-primary size-4.5"
    });
    var y = r(u, 2),
      D = t(y);
    U(), e(y);
    var x = r(y, 2);
    {
      var P = T => {
        var M = qe(),
          W = t(M);
        ze(W, {
          class: "size-4"
        }), e(M), v(T, M)
      };
      S(x, T => {
        o() && T(P)
      })
    }
    e(i), z(T => L(D, `${T??""} `), [() => a.value.toLocaleString("en-US")]), v(n, i)
  };
  let o = Rt(a, "button", 3, !0);
  var _ = Ut(),
    p = dt(_);
  {
    var c = n => {
        var i = Me();
        i.__click = () => {
          ve.dropletsDialogOpen = !0
        };
        var u = t(i);
        s(u), e(i), v(n, i)
      },
      f = n => {
        var i = Se(),
          u = t(i);
        s(u), e(i), v(n, i)
      };
    S(p, n => {
      o() ? n(c) : n(f, !1)
    })
  }
  v(l, _), At()
}
Zt(["click"]);
var Be = R('<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>');

function He(l, a) {
  let s = N(a, ["$$slots", "$$events", "$$legacy"]);
  var o = Be();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...s
  })), v(l, o)
}
var Ze = R('<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>');

function Ht(l, a) {
  let s = N(a, ["$$slots", "$$events", "$$legacy"]);
  var o = Ze();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100",
    height: "100",
    viewBox: "0 0 48 48",
    ...s
  })), v(l, o)
}
var Ee = (l, a, s, o, _) => {
    b(a).show(), C(s, !0), jt.generatePixQrCode(o()).then(p => {
      C(_, p, !0)
    }).catch(p => {
      J.error(p.message)
    }).finally(() => {
      C(s, !1)
    })
  },
  Ue = w('<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 border-base-content/20 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'),
  Ae = w('<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"> </button></form>'),
  Re = w('<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl px-4 py-6"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">Droplets</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'),
  Fe = w('<div class="flex flex-col gap-4"><section><div class="flex items-center gap-1"><!> <h3 class="text-xl font-bold">Droplets</h3> <div class="ml-auto mr-4"><!></div></div> <p class="text-base-content/80 mt-1 text-sm"> </p></section> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div></section></div>'),
  je = (l, a) => {
    var s;
    navigator.clipboard.writeText(((s = b(a)) == null ? void 0 : s.pixCode) ?? ""), J.success("Código PIX copiado")
  },
  Oe = async (l, a, s) => {
    var o, _, p;
    if (!b(a)) {
      J.info("Espere 1 minuto e recarrege a pagina");
      return
    }
    try {
      C(s, !0);
      const {
        paid: c
      } = await jt.getPixStatus(b(a).pixId);
      if (c) {
        const f = b(a).productId.toString(),
          n = (p = (_ = (o = ue.products[f]) == null ? void 0 : o.items) == null ? void 0 : _[0]) == null ? void 0 : p.amount;
        await ct.refresh(), n ? Tt(`payment/success?droplets=${n}`) : Tt("payment/success")
      } else J.info("Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.", {
        duration: 1e5
      })
    } catch (c) {
      console.error(c), J.error("Error ao atualizar o status do pix. Tente recarregar a página.")
    } finally {
      C(s, !1)
    }
  }, Xe = w('<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated w-70 aspect-square" alt="QR code PIX"/> <div class="center-absolute border-6 absolute size-[95%] border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pl-4 pr-2.5"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>', 1), Ke = w('<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'), Qe = w('<dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-2xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog> <dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-lg"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <div class="flex h-full flex-col items-center gap-4"><section><div class="flex items-center gap-2"><!> <h3 class="text-4xl font-bold">PIX</h3></div></section> <!></div></div></dialog>', 1);

function da(l, a) {
  Et(a, !0);
  let s = Rt(a, "open", 15),
    o = nt(!1);
  re(() => {
    const d = h => {
      h.key === "Escape" && s(!1)
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d)
  });
  const _ = wt(() => {
    var d, h;
    return ((h = (d = ct.data) == null ? void 0 : d.country) == null ? void 0 : h.toUpperCase()) === "BR"
  });
  let p = nt(null),
    c = nt(void 0),
    f = nt(!1);
  var n = Qe(),
    i = dt(n),
    u = t(i),
    y = r(t(u), 2);
  {
    var D = d => {
      var h = Fe(),
        B = t(h),
        H = t(B),
        Y = t(H);
      yt(Y, {
        class: "text-primary size-6"
      });
      var Z = r(Y, 4),
        G = t(Z);
      {
        let I = wt(() => {
          var at;
          return ((at = ct.data) == null ? void 0 : at.droplets) ?? 0
        });
        Te(G, {
          get value() {
            return b(I)
          },
          button: !1
        })
      }
      e(Z), e(H);
      var $ = r(H, 2),
        F = t($, !0);
      e($), e(B);
      var j = r(B, 2);
      {
        const I = (at, m) => {
          let It = () => m == null ? void 0 : m().droplets,
            ut = () => m == null ? void 0 : m().bonus,
            Lt = () => m == null ? void 0 : m().price,
            zt = () => m == null ? void 0 : m().stripeLookupkey,
            Jt = () => m == null ? void 0 : m().productId,
            Nt = () => m == null ? void 0 : m().dropdownClass;
          var mt = Re(),
            _t = t(mt),
            Pt = t(_t);
          yt(Pt, {
            class: "mb-1 inline size-7"
          });
          var qt = r(Pt, 2),
            Wt = t(qt);
          U(), e(qt), e(_t);
          var ft = r(_t, 2),
            Dt = t(ft);
          {
            var Yt = k => {
              var g = ie();
              z(q => L(g, `${q??""} Droplets`), [() => It().toLocaleString("en-US")]), v(k, g)
            };
            S(Dt, k => {
              ut() && k(Yt)
            })
          }
          var Mt = r(Dt, 2),
            Gt = t(Mt);
          e(Mt), e(ft);
          var $t = r(ft, 2);
          {
            var te = k => {
                var g = Ue(),
                  q = t(g),
                  Q = t(q);
                e(q);
                var ot = r(q, 2),
                  V = t(ot),
                  st = t(V),
                  bt = t(st);
                xt(bt);
                var gt = r(bt, 2),
                  ae = t(gt);
                He(ae, {
                  class: "inline size-5"
                }), U(2), e(gt), e(st), e(V);
                var St = r(V, 2),
                  rt = t(St);
                rt.__click = [Ee, p, o, Jt, c];
                var oe = t(rt);
                Ht(oe, {
                  class: "size-5"
                }), U(2), e(rt), e(St), e(ot), e(g), z(se => {
                  Ft(g, 1, `dropdown mt-3 ${Nt()??""}`), L(Q, `R$${se??""}`), it(st, "action", `${Bt}/payment/create-checkout-session`), ht(bt, zt()), gt.disabled = b(o), rt.disabled = b(o)
                }, [() => (Lt() * 4).toFixed(2).replace(".", ",")]), lt("submit", st, () => {
                  C(o, !0), setTimeout(() => C(o, !1), 3e3)
                }), v(k, g)
              },
              ee = k => {
                var g = Ae(),
                  q = t(g);
                xt(q);
                var Q = r(q, 2),
                  ot = t(Q);
                e(Q), e(g), z(V => {
                  it(g, "action", `${Bt}/payment/create-checkout-session`), ht(q, zt()), Q.disabled = b(o), L(ot, `$${V??""}`)
                }, [() => Lt().toFixed(2)]), lt("submit", g, () => {
                  C(o, !0), setTimeout(() => C(o, !1), 3e3)
                }), v(k, g)
              };
            S($t, k => {
              b(_) || _e ? k(te) : k(ee, !1)
            })
          }
          e(mt), z((k, g) => {
            L(Wt, `${k??""} `), L(Gt, `+${g??""} bonus`)
          }, [() => (It() + ut()).toLocaleString("en-US"), () => ut().toLocaleString("en-US")]), v(at, mt)
        };
        var E = t(j),
          O = t(E);
        I(O, () => ({
          price: 5,
          droplets: 25e3,
          bonus: 0,
          stripeLookupkey: "droplets_5",
          productId: 10,
          dropdownClass: "dropdown-center"
        }));
        var tt = r(O, 2);
        I(tt, () => ({
          price: 15,
          droplets: 75e3,
          bonus: 3750,
          stripeLookupkey: "droplets_15",
          productId: 20,
          dropdownClass: "dropdown-center"
        }));
        var X = r(tt, 2);
        I(X, () => ({
          price: 30,
          droplets: 15e4,
          bonus: 15e3,
          stripeLookupkey: "droplets_30",
          productId: 30,
          dropdownClass: "dropdown-center"
        }));
        var K = r(X, 2);
        I(K, () => ({
          price: 50,
          droplets: 25e4,
          bonus: 37500,
          stripeLookupkey: "droplets_50",
          productId: 40,
          dropdownClass: "dropdown-center"
        }));
        var et = r(K, 2);
        I(et, () => ({
          price: 75,
          droplets: 375e3,
          bonus: 75e3,
          stripeLookupkey: "droplets_75",
          productId: 50,
          dropdownClass: "dropdown-center"
        }));
        var Vt = r(et, 2);
        I(Vt, () => ({
          price: 100,
          droplets: 5e5,
          bonus: 125e3,
          stripeLookupkey: "droplets_100",
          productId: 60,
          dropdownClass: "max-sm:dropdown-top dropdown-center"
        })), e(E), e(j)
      }
      e(h), z(I => L(F, I), [() => ke()]), v(d, h)
    };
    S(y, d => {
      ct.data && d(D)
    })
  }
  e(u);
  var x = r(u, 2),
    P = t(x),
    T = t(P, !0);
  e(P), e(x), e(i), ce(i, () => d => {
    ne(() => {
      s() ? d.show() : d.close()
    })
  });
  var M = r(i, 2),
    W = t(M),
    kt = r(t(W), 2),
    vt = t(kt),
    Ct = t(vt),
    Ot = t(Ct);
  Ht(Ot, {
    class: "size-10"
  }), U(2), e(Ct), e(vt);
  var Xt = r(vt, 2);
  {
    var Kt = d => {
        var h = Xe(),
          B = dt(h),
          H = r(t(B)),
          Y = t(H);
        e(H), e(B);
        var Z = r(B, 2),
          G = t(Z),
          $ = t(G);
        U(2), e(G), e(Z);
        var F = r(Z, 2),
          j = r(t(F), 2),
          E = t(j);
        xt(E);
        var O = r(E, 2),
          tt = t(O);
        tt.__click = [je, c], e(O), e(j), e(F);
        var X = r(F, 2),
          K = t(X);
        K.__click = [Oe, c, f], e(X), z(et => {
          L(Y, `R$${et??""}`), it($, "src", b(c).qrCode), ht(E, b(c).pixCode), K.disabled = b(f)
        }, [() => (b(c).price / 100).toFixed(2).replace(".", ",")]), v(d, h)
      },
      Qt = d => {
        var h = Ke();
        v(d, h)
      };
    S(Xt, d => {
      b(c) ? d(Kt) : d(Qt, !1)
    })
  }
  e(kt), e(W), e(M), pe(M, d => C(p, d), () => b(p)), z(d => L(T, d), [() => he()]), lt("close", i, () => {
    s(!1)
  }), lt("close", M, () => {
    setTimeout(() => {
      C(c, void 0)
    }, 300)
  }), v(l, n), At()
}
Zt(["click"]);
var Ve = R('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'),
  Je = R('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>');

function pa(l, a) {
  let s = N(a, ["$$slots", "$$events", "$$legacy", "filled"]);
  var o = Ut(),
    _ = dt(o);
  {
    var p = f => {
        var n = Ve();
        A(n, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), v(f, n)
      },
      c = f => {
        var n = Je();
        A(n, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...s
        })), v(f, n)
      };
    S(_, f => {
      a.filled ? f(p) : f(c, !1)
    })
  }
  v(l, o)
}

function va([l, a], [s, o]) {
  l = Math.floor(l), a = Math.floor(a), s = Math.floor(s), o = Math.floor(o);
  const _ = [],
    p = Math.abs(s - l),
    c = Math.abs(o - a),
    f = l < s ? 1 : -1,
    n = a < o ? 1 : -1;
  let i = p - c,
    u = l,
    y = a;
  for (; _.push([u, y]), !(u === s && y === o);) {
    const D = 2 * i;
    D > -c && (i -= c, u += f), D < p && (i += p, y += n)
  }
  return _
}
var Ne = w('<img class="pixelated bg-base-200" alt="User profile"/>'),
  We = w('<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-zhy0pt"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>');

function ua(l, a) {
  const s = wt(() => a.level % 1 * 360);
  var o = We(),
    _ = r(t(o), 2),
    p = r(_, 2),
    c = t(p),
    f = t(c);
  {
    var n = x => {
        me(x, {
          get userId() {
            return a.userId
          }
        })
      },
      i = x => {
        var P = Ne();
        z(() => it(P, "src", a.pictureUrl)), v(x, P)
      };
    S(f, x => {
      a.pictureUrl ? x(i, !1) : x(n)
    })
  }
  e(c), e(p);
  var u = r(p, 2);
  let y;
  var D = t(u, !0);
  e(u), e(o), z((x, P) => {
    de(_, `--angle: ${b(s)??""}deg; --color: var(--color-secondary)`), y = Ft(u, 1, "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, y, x), L(D, P)
  }, [() => ({
    "left-0": a.level > 99,
    "-left-1": a.level > 99
  }), () => Math.floor(a.level)]), v(l, o)
}
export {
  ze as A, Te as D, pa as I, ua as P, yt as a, da as b, ia as c, he as d, ca as e, _e as f, va as r
};