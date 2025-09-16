import {
  g as pe
} from "./C8XJ1ixN.js";
import "./BrTpT_iZ.js";
import {
  o as rt
} from "./DS8w_oTA.js";
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
  r as o,
  s as l,
  n as U,
  t as z,
  bi as le,
  y as nt,
  g as m,
  av as ne,
  aw as C,
  u as we,
  b3 as it
} from "./DNEaJl1b.js";
import {
  s as L
} from "./CgMSzzhi.js";
import {
  r as K,
  p as Re,
  i as q
} from "./CiJKyZ4G.js";
import {
  b as A,
  f as dt,
  r as xe,
  s as ie,
  g as he,
  a as Fe,
  e as ct
} from "./Czrmw31h.js";
import {
  b as pt
} from "./DqfZvOLT.js";
import {
  g as Ee
} from "./DAn5yZQ8.js";
import {
  g as vt,
  u as de,
  t as Y,
  a as Oe,
  S as ut,
  P as Me
} from "./BC5L_kGN.js";
import {
  a as ft
} from "./DB5RdLWs.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "fe728e8aec83db00e8678c288164b0147df8dfc8"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "b52699b5-9658-46de-b68b-5f6319e3c965", r._sentryDebugIdIdentifier = "sentry-dbid-b52699b5-9658-46de-b68b-5f6319e3c965")
  })()
} catch {}
const bt = lt,
  _t = () => "Add profile picture",
  mt = () => "Adicionar imagem de perfil",
  io = (r = {}, e = {}) => (e.locale ?? pe()) === "en" ? _t() : mt(),
  gt = () => "Close",
  xt = () => "Fechar",
  ht = (r = {}, e = {}) => (e.locale ?? pe()) === "en" ? gt() : xt(),
  wt = () => "You gain 1 droplet per pixel painted and 500 droplets per level",
  yt = () => "Você ganha 1 droplet por pixel pintado e 500 droplets por level",
  kt = (r = {}, e = {}) => (e.locale ?? pe()) === "en" ? wt() : yt(),
  Ct = () => "Eraser",
  It = () => "Borracha",
  co = (r = {}, e = {}) => (e.locale ?? pe()) === "en" ? Ct() : It();
var Lt = R('<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');

function zt(r, e) {
  let s = K(e, ["$$slots", "$$events", "$$legacy"]);
  var a = Lt();
  A(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...s
  })), v(r, a)
}
var Dt = R('<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>');

function ye(r, e) {
  let s = K(e, ["$$slots", "$$events", "$$legacy"]);
  var a = Dt();
  A(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...s
  })), v(r, a)
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
    U(), o(y);
    var x = l(y, 2);
    {
      var D = E => {
        var S = Tt(),
          W = t(S);
        zt(W, {
          class: "size-4"
        }), o(S), v(E, S)
      };
      q(x, E => {
        a() && E(D)
      })
    }
    o(i), z(E => L(P, `${E??""} `), [() => e.value.toLocaleString("en-US")]), v(n, i)
  };
  let a = Re(e, "button", 3, !0);
  var b = Ue(),
    p = ce(b);
  {
    var d = n => {
        var i = St();
        i.__click = () => {
          vt.dropletsDialogOpen = !0
        };
        var u = t(i);
        s(u), o(i), v(n, i)
      },
      _ = n => {
        var i = qt(),
          u = t(i);
        s(u), o(i), v(n, i)
      };
    q(p, n => {
      a() ? n(d) : n(_, !1)
    })
  }
  v(r, b), Ae()
}
He(["click"]);
var Mt = R('<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>');

function Bt(r, e) {
  let s = K(e, ["$$slots", "$$events", "$$legacy"]);
  var a = Mt();
  A(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...s
  })), v(r, a)
}
var Ht = R('<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>');

function Be(r, e) {
  let s = K(e, ["$$slots", "$$events", "$$legacy"]);
  var a = Ht();
  A(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100",
    height: "100",
    viewBox: "0 0 48 48",
    ...s
  })), v(r, a)
}
var Zt = (r, e, s, a, b) => {
    m(e).show(), C(s, !0), Oe.generatePixQrCode(a()).then(p => {
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
  Ot = (r, e) => {
    var s;
    navigator.clipboard.writeText(((s = m(e)) == null ? void 0 : s.pixCode) ?? ""), Y.success("Código PIX copiado")
  },
  Xt = async (r, e, s) => {
    var a, b, p;
    if (!m(e)) {
      Y.info("Espere 1 minuto e recarrege a pagina");
      return
    }
    try {
      C(s, !0);
      const {
        paid: d
      } = await Oe.getPixStatus(m(e).pixId);
      if (d) {
        const _ = m(e).productId.toString(),
          n = (p = (b = (a = ut.products[_]) == null ? void 0 : a.items) == null ? void 0 : b[0]) == null ? void 0 : p.amount;
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

function po(r, e) {
  Ze(e, !0);
  let s = Re(e, "open", 15),
    a = ne(!1);
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
          var oe;
          return ((oe = de.data) == null ? void 0 : oe.droplets) ?? 0
        });
        Et(J, {
          get value() {
            return m(I)
          },
          button: !1
        })
      }
      o(H), o(B);
      var $ = l(B, 2),
        F = t($, !0);
      o($), o(M);
      var O = l(M, 2);
      {
        const I = (oe, f) => {
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
          U(), o(Te), o(be);
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
          o(Se), o(_e);
          var $e = l(_e, 2);
          {
            var et = k => {
                var g = Ut(),
                  T = t(g),
                  Q = t(T);
                o(T);
                var ae = l(T, 2),
                  V = t(ae),
                  se = t(V),
                  me = t(se);
                xe(me);
                var ge = l(me, 2),
                  ot = t(ge);
                Bt(ot, {
                  class: "inline size-5"
                }), U(2), o(ge), o(se), o(V);
                var qe = l(V, 2),
                  re = t(qe);
                re.__click = [Zt, p, a, Ye, d];
                var at = t(re);
                Be(at, {
                  class: "size-5"
                }), U(2), o(re), o(qe), o(ae), o(g), z(st => {
                  Fe(g, 1, `dropdown mt-3 ${Ke()??""}`), L(Q, `R$${st??""}`), ie(se, "action", `${Me}/payment/create-checkout-session`), he(me, ze()), ge.disabled = m(a), re.disabled = m(a)
                }, [() => (Le() * 4).toFixed(2).replace(".", ",")]), le("submit", se, () => {
                  C(a, !0), setTimeout(() => C(a, !1), 3e3)
                }), v(k, g)
              },
              tt = k => {
                var g = At(),
                  T = t(g);
                xe(T);
                var Q = l(T, 2),
                  ae = t(Q);
                o(Q), o(g), z(V => {
                  ie(g, "action", `${Me}/payment/create-checkout-session`), he(T, ze()), Q.disabled = m(a), L(ae, `$${V??""}`)
                }, [() => Le().toFixed(2)]), le("submit", g, () => {
                  C(a, !0), setTimeout(() => C(a, !1), 3e3)
                }), v(k, g)
              };
            q($e, k => {
              m(b) || bt ? k(et) : k(tt, !1)
            })
          }
          o(fe), z((k, g) => {
            L(We, `${k??""} `), L(Je, `+${g??""} bonus`)
          }, [() => (Ie() + ue()).toLocaleString("en-US"), () => ue().toLocaleString("en-US")]), v(oe, fe)
        };
        var Z = t(O),
          X = t(Z);
        I(X, () => ({
          price: 5,
          droplets: 25e3,
          bonus: 0,
          stripeLookupkey: "droplets_5",
          productId: 10,
          dropdownClass: "dropdown-center"
        }));
        var ee = l(X, 2);
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
        })), o(Z), o(O)
      }
      o(h), z(I => L(F, I), [() => kt()]), v(c, h)
    };
    q(y, c => {
      de.data && c(P)
    })
  }
  o(u);
  var x = l(u, 2),
    D = t(x),
    E = t(D, !0);
  o(D), o(x), o(i), dt(i, () => c => {
    nt(() => {
      s() ? c.show() : c.close()
    })
  });
  var S = l(i, 2),
    W = t(S),
    ke = l(t(W), 2),
    ve = t(ke),
    Ce = t(ve),
    Xe = t(Ce);
  Be(Xe, {
    class: "size-10"
  }), U(2), o(Ce), o(ve);
  var je = l(ve, 2);
  {
    var Ne = c => {
        var h = jt(),
          M = ce(h),
          B = l(t(M)),
          G = t(B);
        o(B), o(M);
        var H = l(M, 2),
          J = t(H),
          $ = t(J);
        U(2), o(J), o(H);
        var F = l(H, 2),
          O = l(t(F), 2),
          Z = t(O);
        xe(Z);
        var X = l(Z, 2),
          ee = t(X);
        ee.__click = [Ot, d], o(X), o(O), o(F);
        var j = l(F, 2),
          N = t(j);
        N.__click = [Xt, d, _], o(j), z(te => {
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
  o(ke), o(W), o(S), pt(S, c => C(p, c), () => m(p)), z(c => L(E, c), [() => ht()]), le("close", i, () => {
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

function vo(r, e) {
  let s = K(e, ["$$slots", "$$events", "$$legacy", "filled"]);
  var a = Ue(),
    b = ce(a);
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
  v(r, a)
}

function uo([r, e], [s, a]) {
  r = Math.floor(r), e = Math.floor(e), s = Math.floor(s), a = Math.floor(a);
  const b = [],
    p = Math.abs(s - r),
    d = Math.abs(a - e),
    _ = r < s ? 1 : -1,
    n = e < a ? 1 : -1;
  let i = p - d,
    u = r,
    y = e;
  for (; b.push([u, y]), !(u === s && y === a);) {
    const P = 2 * i;
    P > -d && (i -= d, u += _), P < p && (i += p, y += n)
  }
  return b
}
var Kt = w('<img class="pixelated bg-base-200" alt="User profile"/>'),
  Wt = w('<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-zhy0pt"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>');

function fo(r, e) {
  const s = we(() => e.level % 1 * 360);
  var a = Wt(),
    b = l(t(a), 2),
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
  o(d), o(p);
  var u = l(p, 2);
  let y;
  var P = t(u, !0);
  o(u), o(a), z((x, D) => {
    ct(b, `--angle: ${m(s)??""}deg; --color: var(--color-secondary)`), y = Fe(u, 1, "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, y, x), L(P, D)
  }, [() => ({
    "left-0": e.level > 99,
    "-left-1": e.level > 99
  }), () => Math.floor(e.level)]), v(r, a)
}
export {
  zt as A, Et as D, vo as I, fo as P, ye as a, po as b, io as c, ht as d, co as e, bt as f, uo as r
};