import "./d5UiUYZZ.js";
import {
  A as R,
  b as n,
  o as Yt,
  p as Gt,
  h as Jt,
  a as yt,
  c as Vt,
  f as y,
  d as t,
  r as e,
  s as o,
  n as Q,
  t as w,
  w as xt,
  v as fe,
  j as f,
  e as ht,
  i as L,
  u as wt,
  q as qt
} from "./B2OmeKf3.js";
import {
  f as U,
  g as be,
  s as ct,
  r as zt,
  e as Mt,
  a as $t,
  d as me
} from "./Wwysor49.js";
import {
  r as K,
  p as te
} from "./CCWrnJZ-.js";
import {
  s as h
} from "./DZ2GTRzh.js";
import {
  i as P
} from "./DmaHgtEc.js";
import {
  b as ge
} from "./mhrRdOB7.js";
import {
  g as Xt
} from "./DX0Gvfq2.js";
import {
  g as _e,
  P as Ft
} from "./BnQs7QRl.js";
import {
  u as it,
  t as dt,
  a as jt,
  f as xe
} from "./o0_U8pOt.js";
import {
  r as Ot
} from "./13dJBKtW.js";
import "./DFupwelK.js";
import {
  c as he
} from "./Bic-T4cv.js";
import {
  y as Nt,
  r as Qt,
  b as Kt
} from "./MIzAAZhN.js";
import {
  a as we
} from "./BvOZl7GW.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "70dda2bcd37c81e0ed25f634cf032d8abd8db068"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      s = new r.Error().stack;
    s && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[s] = "fbf0ff06-1de0-44c1-bb9e-60a78e9671f1", r._sentryDebugIdIdentifier = "sentry-dbid-fbf0ff06-1de0-44c1-bb9e-60a78e9671f1")
  })()
} catch {}
var ye = R('<svg><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function la(r, s) {
  let l = K(s, ["$$slots", "$$events", "$$legacy"]);
  var a = ye();
  U(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), n(r, a)
}
var ke = R('<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');

function Ce(r, s) {
  let l = K(s, ["$$slots", "$$events", "$$legacy"]);
  var a = ke();
  U(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), n(r, a)
}
var Ie = R('<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>');

function Dt(r, s) {
  let l = K(s, ["$$slots", "$$events", "$$legacy"]);
  var a = Ie();
  U(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), n(r, a)
}
var Le = y('<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'),
  Te = y('<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-sm:hidden">Droplets</span></span> <!></span>'),
  qe = y('<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pl-1 pr-1"><!></button>'),
  ze = y('<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pl-1 pr-2"><!></span>');

function Me(r, s) {
  Gt(s, !0);
  const l = c => {
    var v = Te(),
      u = t(v);
    Dt(u, {
      class: "text-primary size-4.5"
    });
    var g = o(u, 2),
      H = t(g);
    Q(), e(g);
    var C = o(g, 2);
    {
      var B = Z => {
        var W = Le(),
          A = t(W);
        Ce(A, {
          class: "size-4"
        }), e(W), n(Z, W)
      };
      P(C, Z => {
        a() && Z(B)
      })
    }
    e(v), w(Z => h(H, `${Z??""} `), [() => s.value.toLocaleString(navigator.language)]), n(c, v)
  };
  let a = te(s, "button", 3, !0);
  var k = Jt(),
    x = yt(k);
  {
    var m = c => {
        var v = qe();
        v.__click = () => {
          _e.dropletsDialogOpen = !0
        };
        var u = t(v);
        l(u), e(v), n(c, v)
      },
      i = c => {
        var v = ze(),
          u = t(v);
        l(u), e(v), n(c, v)
      };
    P(x, c => {
      a() ? c(m) : c(i, !1)
    })
  }
  n(r, k), Vt()
}
Yt(["click"]);
var De = R('<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>');

function Pe(r, s) {
  let l = K(s, ["$$slots", "$$events", "$$legacy"]);
  var a = De();
  U(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...l
  })), n(r, a)
}
var He = R('<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>');

function Wt(r, s) {
  let l = K(s, ["$$slots", "$$events", "$$legacy"]);
  var a = He();
  U(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100",
    height: "100",
    viewBox: "0 0 48 48",
    ...l
  })), n(r, a)
}
var Ze = y('<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 border-base-content/20 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'),
  Be = y('<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"><!></button></form>'),
  Se = y('<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl p-4"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">Droplets</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'),
  Ee = y('<div class="flex flex-col gap-4"><section><div class="flex items-center gap-1"><!> <h3 class="text-xl font-bold">Droplets</h3> <div class="ml-auto mr-4"><!></div></div> <p class="text-base-content/80 mt-1 text-sm"> </p></section> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div> <p class="text-base-content/60 mt-4 text-center text-sm"> <a class="font-medium" target="_blank"> </a></p></section></div>'),
  Ue = y('<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated w-70 aspect-square" alt="QR code PIX"/> <div class="center-absolute border-6 absolute size-[95%] border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pl-4 pr-2.5"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>', 1),
  Re = y('<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'),
  Ae = y('<dialog class="modal bg-black/90!" closedby="any"><div class="modal-box max-h-11/12 w-11/12 max-w-2xl pb-4"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog> <dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-lg"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <div class="flex h-full flex-col items-center gap-4"><section><div class="flex items-center gap-2"><!> <h3 class="text-4xl font-bold">PIX</h3></div></section> <!></div></div></dialog>', 1);

function na(r, s) {
  Gt(s, !0);
  let l = te(s, "open", 15),
    a = ht(!1);
  const k = wt(() => {
      var d, _;
      return ((_ = (d = it.data) == null ? void 0 : d.country) == null ? void 0 : _.toUpperCase()) === "BR"
    }),
    x = wt(() => {
      var d, _;
      return ((_ = (d = it.data) == null ? void 0 : d.country) == null ? void 0 : _.toUpperCase()) === "MX"
    });
  let m = ht(null),
    i = ht(void 0),
    c = ht(!1);
  var v = Ae(),
    u = yt(v),
    g = t(u),
    H = o(t(g), 2);
  {
    var C = d => {
      var _ = Ee(),
        S = t(_),
        X = t(S),
        vt = t(X);
      Dt(vt, {
        class: "text-primary size-6"
      });
      var F = o(vt, 4),
        pt = t(F);
      {
        let q = wt(() => {
          var O;
          return ((O = it.data) == null ? void 0 : O.droplets) ?? 0
        });
        Me(pt, {
          get value() {
            return f(q)
          },
          button: !1
        })
      }
      e(F), e(X);
      var ut = o(X, 2),
        Y = t(ut, !0);
      e(ut), e(S);
      var G = o(S, 2);
      {
        const q = (O, p) => {
          let at = () => p == null ? void 0 : p().droplets,
            st = () => p == null ? void 0 : p().bonus,
            Ct = () => p == null ? void 0 : p().price,
            Bt = () => p == null ? void 0 : p().stripeLookupkey,
            re = () => p == null ? void 0 : p().productId,
            le = () => p == null ? void 0 : p().dropdownClass;
          var It = Se(),
            Lt = t(It),
            St = t(Lt);
          Dt(St, {
            class: "mb-1 inline size-7"
          });
          var Et = o(St, 2),
            ne = t(Et);
          Q(), e(Et), e(Lt);
          var Tt = o(Lt, 2),
            Ut = t(Tt);
          {
            var ie = I => {
              var b = qt();
              w(M => h(b, `${M??""} Droplets`), [() => at().toLocaleString(navigator.language)]), n(I, b)
            };
            P(Ut, I => {
              st() && I(ie)
            })
          }
          var Rt = o(Ut, 2),
            de = t(Rt);
          e(Rt), e(Tt);
          var ce = o(Tt, 2);
          {
            var ve = I => {
                var b = Ze(),
                  M = t(b),
                  ot = t(M);
                e(M);
                var gt = o(M, 2),
                  rt = t(gt),
                  N = t(rt),
                  z = t(N);
                zt(z);
                var D = o(z, 2),
                  lt = t(D);
                Pe(lt, {
                  class: "inline size-5"
                }), Q(2), e(D), e(N), e(rt);
                var At = o(rt, 2),
                  _t = t(At);
                _t.__click = () => {
                  f(m).show(), L(a, !0), jt.generatePixQrCode(re()).then(nt => {
                    L(i, nt, !0)
                  }).catch(nt => {
                    dt.error(nt.message)
                  }).finally(() => {
                    L(a, !1)
                  })
                };
                var ue = t(_t);
                Wt(ue, {
                  class: "size-5"
                }), Q(2), e(_t), e(At), e(gt), e(b), w(nt => {
                  $t(b, 1, `dropdown mt-3 ${le()??""}`), h(ot, `R$${nt??""}`), ct(N, "action", `${Ft}/payment/create-checkout-session`), Mt(z, Bt()), D.disabled = f(a), _t.disabled = f(a)
                }, [() => (Ct() * 4).toFixed(2).replace(".", ",")]), xt("submit", N, () => {
                  L(a, !0), setTimeout(() => L(a, !1), 3e3)
                }), n(I, b)
              },
              pe = I => {
                var b = Be(),
                  M = t(b);
                zt(M);
                var ot = o(M, 2),
                  gt = t(ot);
                {
                  var rt = z => {
                      var D = qt();
                      w(lt => h(D, `MX$ ${lt??""}`), [() => (Ct() * 18).toFixed(2)]), n(z, D)
                    },
                    N = z => {
                      var D = qt();
                      w(lt => h(D, `$${lt??""}`), [() => Ct().toFixed(2)]), n(z, D)
                    };
                  P(gt, z => {
                    f(x) ? z(rt) : z(N, !1)
                  })
                }
                e(ot), e(b), w(() => {
                  ct(b, "action", `${Ft}/payment/create-checkout-session`), Mt(M, Bt()), ot.disabled = f(a)
                }), xt("submit", b, () => {
                  L(a, !0), setTimeout(() => L(a, !1), 3e3)
                }), n(I, b)
              };
            P(ce, I => {
              f(k) ? I(ve) : I(pe, !1)
            })
          }
          e(It), w((I, b) => {
            h(ne, `${I??""} `), h(de, `+${b??""} bonus`)
          }, [() => (at() + st()).toLocaleString(navigator.language), () => st().toLocaleString(navigator.language)]), n(O, It)
        };
        var E = t(G),
          J = t(E);
        q(J, () => ({
          price: 5,
          droplets: 25e3,
          bonus: 0,
          stripeLookupkey: "droplets_5",
          productId: 10,
          dropdownClass: "dropdown-center"
        }));
        var ft = o(J, 2);
        q(ft, () => ({
          price: 15,
          droplets: 75e3,
          bonus: 3750,
          stripeLookupkey: "droplets_15",
          productId: 20,
          dropdownClass: "dropdown-center"
        }));
        var V = o(ft, 2);
        q(V, () => ({
          price: 30,
          droplets: 15e4,
          bonus: 15e3,
          stripeLookupkey: "droplets_30",
          productId: 30,
          dropdownClass: "dropdown-center"
        }));
        var $ = o(V, 2);
        q($, () => ({
          price: 50,
          droplets: 25e4,
          bonus: 37500,
          stripeLookupkey: "droplets_50",
          productId: 40,
          dropdownClass: "dropdown-center"
        }));
        var T = o($, 2);
        q(T, () => ({
          price: 75,
          droplets: 375e3,
          bonus: 75e3,
          stripeLookupkey: "droplets_75",
          productId: 50,
          dropdownClass: "dropdown-center"
        }));
        var bt = o(T, 2);
        q(bt, () => ({
          price: 100,
          droplets: 5e5,
          bonus: 125e3,
          stripeLookupkey: "droplets_100",
          productId: 60,
          dropdownClass: "max-sm:dropdown-top dropdown-center"
        })), e(E);
        var tt = o(E, 2),
          j = t(tt),
          et = o(j),
          mt = t(et, !0);
        e(et), e(tt), e(G), w((O, p, at, st) => {
          h(j, `${p??""} `), ct(et, "href", at), h(mt, st)
        }, [() => Nt(), () => Qt(), Ot, () => Kt()])
      }
      e(_), w((q, O, p, at) => h(Y, q), [() => Nt(), () => Qt(), Ot, () => Kt()]), n(d, _)
    };
    P(H, d => {
      it.data && d(C)
    })
  }
  e(g);
  var B = o(g, 2),
    Z = t(B),
    W = t(Z, !0);
  e(Z), e(B), e(u), be(u, () => d => {
    fe(() => {
      l() ? d.show() : d.close()
    })
  });
  var A = o(u, 2),
    Pt = t(A),
    Ht = o(t(Pt), 2),
    kt = t(Ht),
    Zt = t(kt),
    ee = t(Zt);
  Wt(ee, {
    class: "size-10"
  }), Q(2), e(Zt), e(kt);
  var ae = o(kt, 2);
  {
    var se = d => {
        var _ = Ue(),
          S = yt(_),
          X = o(t(S)),
          vt = t(X);
        e(X), e(S);
        var F = o(S, 2),
          pt = t(F),
          ut = t(pt);
        Q(2), e(pt), e(F);
        var Y = o(F, 2),
          G = o(t(Y), 2),
          E = t(G);
        zt(E);
        var J = o(E, 2),
          ft = t(J);
        ft.__click = () => {
          var T;
          navigator.clipboard.writeText(((T = f(i)) == null ? void 0 : T.pixCode) ?? ""), dt.success("Código PIX copiado")
        }, e(J), e(G), e(Y);
        var V = o(Y, 2),
          $ = t(V);
        $.__click = async () => {
          var T, bt, tt;
          if (!f(i)) {
            dt.info("Espere 1 minuto e recarrege a pagina");
            return
          }
          try {
            L(c, !0);
            const {
              paid: j
            } = await jt.getPixStatus(f(i).pixId);
            if (j) {
              const et = f(i).productId.toString(),
                mt = (tt = (bt = (T = xe.products[et]) == null ? void 0 : T.items) == null ? void 0 : bt[0]) == null ? void 0 : tt.amount;
              await it.refresh(), mt ? Xt(`payment/success?droplets=${mt}`) : Xt("payment/success")
            } else dt.info("Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.", {
              duration: 1e5
            })
          } catch (j) {
            console.error(j), dt.error("Error ao atualizar o status do pix. Tente recarregar a página.")
          } finally {
            L(c, !1)
          }
        }, e(V), w(T => {
          h(vt, `R$${T??""}`), ct(ut, "src", f(i).qrCode), Mt(E, f(i).pixCode), $.disabled = f(c)
        }, [() => (f(i).price / 100).toFixed(2).replace(".", ",")]), n(d, _)
      },
      oe = d => {
        var _ = Re();
        n(d, _)
      };
    P(ae, d => {
      f(i) ? d(se) : d(oe, !1)
    })
  }
  e(Ht), e(Pt), e(A), ge(A, d => L(m, d), () => f(m)), w(d => h(W, d), [() => he()]), xt("close", u, () => {
    l(!1)
  }), xt("close", A, () => {
    setTimeout(() => {
      L(i, void 0)
    }, 300)
  }), n(r, v), Vt()
}
Yt(["click"]);
var Xe = R('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'),
  Fe = R('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>');

function ia(r, s) {
  let l = K(s, ["$$slots", "$$events", "$$legacy", "filled"]);
  var a = Jt(),
    k = yt(a);
  {
    var x = i => {
        var c = Xe();
        U(c, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...l
        })), n(i, c)
      },
      m = i => {
        var c = Fe();
        U(c, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...l
        })), n(i, c)
      };
    P(k, i => {
      s.filled ? i(x) : i(m, !1)
    })
  }
  n(r, a)
}

function da([r, s], [l, a]) {
  r = Math.floor(r), s = Math.floor(s), l = Math.floor(l), a = Math.floor(a);
  const k = [],
    x = Math.abs(l - r),
    m = Math.abs(a - s),
    i = r < l ? 1 : -1,
    c = s < a ? 1 : -1;
  let v = x - m,
    u = r,
    g = s;
  for (; k.push([u, g]), !(u === l && g === a);) {
    const H = 2 * v;
    H > -m && (v -= m, u += i), H < x && (v += x, g += c)
  }
  return k
}
var je = y('<img class="pixelated bg-base-200" alt="User profile"/>'),
  Oe = y('<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-12f880g"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>');

function ca(r, s) {
  const l = wt(() => s.level % 1 * 360);
  var a = Oe(),
    k = o(t(a), 2),
    x = o(k, 2),
    m = t(x),
    i = t(m);
  {
    var c = C => {
        we(C, {
          get userId() {
            return s.userId
          }
        })
      },
      v = C => {
        var B = je();
        w(() => ct(B, "src", s.pictureUrl)), n(C, B)
      };
    P(i, C => {
      s.pictureUrl ? C(v, !1) : C(c)
    })
  }
  e(m), e(x);
  var u = o(x, 2);
  let g;
  var H = t(u, !0);
  e(u), e(a), w(C => {
    me(k, `--angle: ${f(l)??""}deg; --color: var(--color-secondary)`), g = $t(u, 1, "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, g, {
      "left-0": s.level > 99,
      "-left-1": s.level > 99
    }), h(H, C)
  }, [() => Math.floor(s.level)]), n(r, a)
}
export {
  Ce as A, Me as D, ia as I, ca as P, la as U, Dt as a, na as b, da as r
};