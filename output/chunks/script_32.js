import "./CkW_oXZD.js";
import {
  a as n,
  J as S,
  y as Yt,
  p as Gt,
  z as Vt,
  f as kt,
  b as $t,
  d as t,
  r as e,
  A as wt,
  c as y,
  s as o,
  x as J,
  t as w,
  D as ht,
  C as me,
  i as f,
  h as L,
  e as xt,
  u as yt,
  B as qt
} from "./CA9fhze-.js";
import {
  d as B,
  f as be,
  s as vt,
  r as zt,
  g as Dt,
  a as te,
  e as ge
} from "./CvWRJjr1.js";
import {
  r as A,
  p as ee
} from "./BGudG_fb.js";
import {
  s as x
} from "./DWAnQCvS.js";
import {
  i as P
} from "./DQNfjysH.js";
import {
  b as _e
} from "./BRLHc1W6.js";
import {
  g as Ft
} from "./CXMsWXig.js";
import {
  g as he,
  P as Ot
} from "./DPzQ8C_i.js";
import {
  u as it,
  t as dt,
  a as jt,
  S as xe
} from "./DZWZBzq5.js";
import {
  r as Nt
} from "./6YtZ3R7H.js";
import "./BTC2qzU8.js";
import {
  c as we
} from "./CwTDrQZE.js";
import {
  y as Qt,
  r as Jt,
  b as Kt
} from "./DSFZmAN9.js";
import {
  a as ye
} from "./Ca3EAg_7.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var s = new r.Error().stack;
    s && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[s] = "6f9d2e77-e00e-4a87-ad1b-cf802fdb8f0d", r._sentryDebugIdIdentifier = "sentry-dbid-6f9d2e77-e00e-4a87-ad1b-cf802fdb8f0d")
  } catch {}
})();
var ke = S('<svg><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function ia(r, s) {
  let l = A(s, ["$$slots", "$$events", "$$legacy"]);
  var a = ke();
  B(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), n(r, a)
}
var Ce = S('<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');

function Ie(r, s) {
  let l = A(s, ["$$slots", "$$events", "$$legacy"]);
  var a = Ce();
  B(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), n(r, a)
}
var Le = S('<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>');

function Pt(r, s) {
  let l = A(s, ["$$slots", "$$events", "$$legacy"]);
  var a = Le();
  B(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), n(r, a)
}
var Me = y('<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'),
  Te = y('<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-sm:hidden">Droplets</span></span> <!></span>'),
  qe = y('<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pl-1 pr-1"><!></button>'),
  ze = y('<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pl-1 pr-2"><!></span>');

function De(r, s) {
  Gt(s, !0);
  const l = v => {
    var c = Te(),
      u = t(c);
    Pt(u, {
      class: "text-primary size-4.5"
    });
    var g = o(u, 2),
      Z = t(g);
    J(), e(g);
    var C = o(g, 2);
    {
      var E = H => {
        var K = Me(),
          X = t(K);
        Ie(X, {
          class: "size-4"
        }), e(K), n(H, K)
      };
      P(C, H => {
        a() && H(E)
      })
    }
    e(c), w(H => x(Z, `${H??""} `), [() => s.value.toLocaleString(navigator.language)]), n(v, c)
  };
  let a = ee(s, "button", 3, !0);
  var k = Vt(),
    h = kt(k);
  {
    var b = v => {
        var c = qe(),
          u = t(c);
        l(u), e(c), wt("click", c, () => {
          he.dropletsDialogOpen = !0
        }), n(v, c)
      },
      i = v => {
        var c = ze(),
          u = t(c);
        l(u), e(c), n(v, c)
      };
    P(h, v => {
      a() ? v(b) : v(i, !1)
    })
  }
  n(r, k), $t()
}
Yt(["click"]);
var Pe = S('<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>');

function Ze(r, s) {
  let l = A(s, ["$$slots", "$$events", "$$legacy"]);
  var a = Pe();
  B(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...l
  })), n(r, a)
}
var He = S('<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>');

function Wt(r, s) {
  let l = A(s, ["$$slots", "$$events", "$$legacy"]);
  var a = He();
  B(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100",
    height: "100",
    viewBox: "0 0 48 48",
    ...l
  })), n(r, a)
}
var Be = y('<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box border-base-content/20 z-1 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'),
  Se = y('<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"><!></button></form>'),
  Ee = y('<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl p-4"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">Droplets</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'),
  Ue = y('<div class="flex flex-col gap-4"><section><div class="flex items-center gap-1"><!> <h3 class="text-xl font-bold">Droplets</h3> <div class="mr-4 ml-auto"><!></div></div> <p class="text-base-content/80 mt-1 text-sm"> </p></section> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div> <p class="text-base-content/60 mt-4 text-center text-sm"> <a class="font-medium" target="_blank"> </a></p></section></div>'),
  Re = y('<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated aspect-square w-70" alt="QR code PIX"/> <div class="center-absolute absolute size-[95%] border-6 border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pr-2.5 pl-4"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>', 1),
  Ae = y('<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'),
  Xe = y('<dialog class="modal bg-black/90!" closedby="any"><div class="modal-box max-h-11/12 w-11/12 max-w-2xl pb-4"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog> <dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-lg"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button></form> <div class="flex h-full flex-col items-center gap-4"><section><div class="flex items-center gap-2"><!> <h3 class="text-4xl font-bold">PIX</h3></div></section> <!></div></div></dialog>', 1);

function da(r, s) {
  Gt(s, !0);
  let l = ee(s, "open", 15),
    a = xt(!1);
  const k = yt(() => {
      var d, _;
      return ((_ = (d = it.data) == null ? void 0 : d.country) == null ? void 0 : _.toUpperCase()) === "BR"
    }),
    h = yt(() => {
      var d, _;
      return ((_ = (d = it.data) == null ? void 0 : d.country) == null ? void 0 : _.toUpperCase()) === "MX"
    });
  let b = xt(null),
    i = xt(void 0),
    v = xt(!1);
  var c = Xe(),
    u = kt(c),
    g = t(u),
    Z = o(t(g), 2);
  {
    var C = d => {
      var _ = Ue(),
        U = t(_),
        F = t(U),
        ct = t(F);
      Pt(ct, {
        class: "text-primary size-6"
      });
      var O = o(ct, 4),
        pt = t(O);
      {
        let T = yt(() => {
          var N;
          return ((N = it.data) == null ? void 0 : N.droplets) ?? 0
        });
        De(pt, {
          get value() {
            return f(T)
          },
          button: !1
        })
      }
      e(O), e(F);
      var ut = o(F, 2),
        W = t(ut, !0);
      e(ut), e(U);
      var Y = o(U, 2);
      {
        const T = (N, p) => {
          let at = () => p == null ? void 0 : p().droplets,
            st = () => p == null ? void 0 : p().bonus,
            It = () => p == null ? void 0 : p().price,
            St = () => p == null ? void 0 : p().stripeLookupkey,
            le = () => p == null ? void 0 : p().productId,
            ne = () => p == null ? void 0 : p().dropdownClass;
          var Lt = Ee(),
            Mt = t(Lt),
            Et = t(Mt);
          Pt(Et, {
            class: "mb-1 inline size-7"
          });
          var Ut = o(Et, 2),
            ie = t(Ut);
          J(), e(Ut), e(Mt);
          var Tt = o(Mt, 2),
            Rt = t(Tt);
          {
            var de = I => {
              var m = qt();
              w(z => x(m, `${z??""} Droplets`), [() => at().toLocaleString(navigator.language)]), n(I, m)
            };
            P(Rt, I => {
              st() && I(de)
            })
          }
          var At = o(Rt, 2),
            ve = t(At);
          e(At), e(Tt);
          var ce = o(Tt, 2);
          {
            var pe = I => {
                var m = Be(),
                  z = t(m),
                  ot = t(z);
                e(z);
                var gt = o(z, 2),
                  rt = t(gt),
                  Q = t(rt),
                  q = t(Q);
                zt(q);
                var D = o(q, 2),
                  lt = t(D);
                Ze(lt, {
                  class: "inline size-5"
                }), J(2), e(D), e(Q), e(rt);
                var Xt = o(rt, 2),
                  _t = t(Xt),
                  fe = t(_t);
                Wt(fe, {
                  class: "size-5"
                }), J(2), e(_t), e(Xt), e(gt), e(m), w(nt => {
                  te(m, 1, `dropdown mt-3 ${ne()??""}`), x(ot, `R$${nt??""}`), vt(Q, "action", `${Ot}/payment/create-checkout-session`), Dt(q, St()), D.disabled = f(a), _t.disabled = f(a)
                }, [() => (It() * 4).toFixed(2).replace(".", ",")]), ht("submit", Q, () => {
                  L(a, !0), setTimeout(() => L(a, !1), 3e3)
                }), wt("click", _t, () => {
                  f(b).show(), L(a, !0), jt.generatePixQrCode(le()).then(nt => {
                    L(i, nt, !0)
                  }).catch(nt => {
                    dt.error(nt.message)
                  }).finally(() => {
                    L(a, !1)
                  })
                }), n(I, m)
              },
              ue = I => {
                var m = Se(),
                  z = t(m);
                zt(z);
                var ot = o(z, 2),
                  gt = t(ot);
                {
                  var rt = q => {
                      var D = qt();
                      w(lt => x(D, `MX$ ${lt??""}`), [() => (It() * 18).toFixed(2)]), n(q, D)
                    },
                    Q = q => {
                      var D = qt();
                      w(lt => x(D, `$${lt??""}`), [() => It().toFixed(2)]), n(q, D)
                    };
                  P(gt, q => {
                    f(h) ? q(rt) : q(Q, !1)
                  })
                }
                e(ot), e(m), w(() => {
                  vt(m, "action", `${Ot}/payment/create-checkout-session`), Dt(z, St()), ot.disabled = f(a)
                }), ht("submit", m, () => {
                  L(a, !0), setTimeout(() => L(a, !1), 3e3)
                }), n(I, m)
              };
            P(ce, I => {
              f(k) ? I(pe) : I(ue, !1)
            })
          }
          e(Lt), w((I, m) => {
            x(ie, `${I??""} `), x(ve, `+${m??""} bonus`)
          }, [() => (at() + st()).toLocaleString(navigator.language), () => st().toLocaleString(navigator.language)]), n(N, Lt)
        };
        var R = t(Y),
          G = t(R);
        T(G, () => ({
          price: 5,
          droplets: 25e3,
          bonus: 0,
          stripeLookupkey: "droplets_5",
          productId: 10,
          dropdownClass: "dropdown-center"
        }));
        var ft = o(G, 2);
        T(ft, () => ({
          price: 15,
          droplets: 75e3,
          bonus: 3750,
          stripeLookupkey: "droplets_15",
          productId: 20,
          dropdownClass: "dropdown-center"
        }));
        var V = o(ft, 2);
        T(V, () => ({
          price: 30,
          droplets: 15e4,
          bonus: 15e3,
          stripeLookupkey: "droplets_30",
          productId: 30,
          dropdownClass: "dropdown-center"
        }));
        var $ = o(V, 2);
        T($, () => ({
          price: 50,
          droplets: 25e4,
          bonus: 37500,
          stripeLookupkey: "droplets_50",
          productId: 40,
          dropdownClass: "dropdown-center"
        }));
        var M = o($, 2);
        T(M, () => ({
          price: 75,
          droplets: 375e3,
          bonus: 75e3,
          stripeLookupkey: "droplets_75",
          productId: 50,
          dropdownClass: "dropdown-center"
        }));
        var mt = o(M, 2);
        T(mt, () => ({
          price: 100,
          droplets: 5e5,
          bonus: 125e3,
          stripeLookupkey: "droplets_100",
          productId: 60,
          dropdownClass: "max-sm:dropdown-top dropdown-center"
        })), e(R);
        var tt = o(R, 2),
          j = t(tt),
          et = o(j),
          bt = t(et, !0);
        e(et), e(tt), e(Y), w((N, p, at, st) => {
          x(j, `${p??""} `), vt(et, "href", at), x(bt, st)
        }, [() => Qt(), () => Jt(), Nt, () => Kt()])
      }
      e(_), w((T, N, p, at) => x(W, T), [() => Qt(), () => Jt(), Nt, () => Kt()]), n(d, _)
    };
    P(Z, d => {
      it.data && d(C)
    })
  }
  e(g);
  var E = o(g, 2),
    H = t(E),
    K = t(H, !0);
  e(H), e(E), e(u), be(u, () => d => {
    me(() => {
      l() ? d.show() : d.close()
    })
  });
  var X = o(u, 2),
    Zt = t(X),
    Ht = o(t(Zt), 2),
    Ct = t(Ht),
    Bt = t(Ct),
    ae = t(Bt);
  Wt(ae, {
    class: "size-10"
  }), J(2), e(Bt), e(Ct);
  var se = o(Ct, 2);
  {
    var oe = d => {
        var _ = Re(),
          U = kt(_),
          F = o(t(U)),
          ct = t(F);
        e(F), e(U);
        var O = o(U, 2),
          pt = t(O),
          ut = t(pt);
        J(2), e(pt), e(O);
        var W = o(O, 2),
          Y = o(t(W), 2),
          R = t(Y);
        zt(R);
        var G = o(R, 2),
          ft = t(G);
        e(G), e(Y), e(W);
        var V = o(W, 2),
          $ = t(V);
        e(V), w(M => {
          x(ct, `R$${M??""}`), vt(ut, "src", f(i).qrCode), Dt(R, f(i).pixCode), $.disabled = f(v)
        }, [() => (f(i).price / 100).toFixed(2).replace(".", ",")]), wt("click", ft, () => {
          var M;
          navigator.clipboard.writeText(((M = f(i)) == null ? void 0 : M.pixCode) ?? ""), dt.success("Código PIX copiado")
        }), wt("click", $, async () => {
          var M, mt, tt;
          if (!f(i)) {
            dt.info("Espere 1 minuto e recarrege a pagina");
            return
          }
          try {
            L(v, !0);
            const {
              paid: j
            } = await jt.getPixStatus(f(i).pixId);
            if (j) {
              const et = f(i).productId.toString(),
                bt = (tt = (mt = (M = xe.products[et]) == null ? void 0 : M.items) == null ? void 0 : mt[0]) == null ? void 0 : tt.amount;
              await it.refresh(), bt ? Ft(`payment/success?droplets=${bt}`) : Ft("payment/success")
            } else dt.info("Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.", {
              duration: 1e5
            })
          } catch (j) {
            console.error(j), dt.error("Error ao atualizar o status do pix. Tente recarregar a página.")
          } finally {
            L(v, !1)
          }
        }), n(d, _)
      },
      re = d => {
        var _ = Ae();
        n(d, _)
      };
    P(se, d => {
      f(i) ? d(oe) : d(re, !1)
    })
  }
  e(Ht), e(Zt), e(X), _e(X, d => L(b, d), () => f(b)), w(d => x(K, d), [() => we()]), ht("close", u, () => {
    l(!1)
  }), ht("close", X, () => {
    setTimeout(() => {
      L(i, void 0)
    }, 300)
  }), n(r, c), $t()
}
Yt(["click"]);
var Fe = S('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'),
  Oe = S('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>');

function va(r, s) {
  let l = A(s, ["$$slots", "$$events", "$$legacy", "filled"]);
  var a = Vt(),
    k = kt(a);
  {
    var h = i => {
        var v = Fe();
        B(v, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...l
        })), n(i, v)
      },
      b = i => {
        var v = Oe();
        B(v, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...l
        })), n(i, v)
      };
    P(k, i => {
      s.filled ? i(h) : i(b, !1)
    })
  }
  n(r, a)
}

function ca([r, s], [l, a]) {
  r = Math.floor(r), s = Math.floor(s), l = Math.floor(l), a = Math.floor(a);
  const k = [],
    h = Math.abs(l - r),
    b = Math.abs(a - s),
    i = r < l ? 1 : -1,
    v = s < a ? 1 : -1;
  let c = h - b,
    u = r,
    g = s;
  for (; k.push([u, g]), !(u === l && g === a);) {
    const Z = 2 * c;
    Z > -b && (c -= b, u += i), Z < h && (c += h, g += v)
  }
  return k
}
var je = y('<img class="pixelated bg-base-200" alt="User profile"/>'),
  Ne = y('<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-12f880g"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>');

function pa(r, s) {
  const l = yt(() => s.level % 1 * 360);
  var a = Ne(),
    k = o(t(a), 2),
    h = o(k, 2),
    b = t(h),
    i = t(b);
  {
    var v = C => {
        ye(C, {
          get userId() {
            return s.userId
          }
        })
      },
      c = C => {
        var E = je();
        w(() => vt(E, "src", s.pictureUrl)), n(C, E)
      };
    P(i, C => {
      s.pictureUrl ? C(c, !1) : C(v)
    })
  }
  e(b), e(h);
  var u = o(h, 2);
  let g;
  var Z = t(u, !0);
  e(u), e(a), w(C => {
    ge(k, `--angle: ${f(l)??""}deg; --color: var(--color-secondary)`), g = te(u, 1, "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, g, {
      "left-0": s.level > 99,
      "-left-1": s.level > 99
    }), x(Z, C)
  }, [() => Math.floor(s.level)]), n(r, a)
}
var Qe = S('<svg><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');

function ua(r, s) {
  let l = A(s, ["$$slots", "$$events", "$$legacy"]);
  var a = Qe();
  B(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), n(r, a)
}
export {
  Ie as A, ua as D, va as I, pa as P, ia as U, De as a, Pt as b, da as c, ca as r
};