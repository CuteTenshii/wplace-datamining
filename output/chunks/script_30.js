import "./Bzak7iHL.js";
import {
  a as o,
  y as ee,
  p as qe,
  t as I,
  v as Le,
  b as He,
  i as h,
  c as f,
  u as be,
  d as t,
  s as r,
  aX as Ae,
  r as a,
  q as nt,
  f as se,
  k as Ve,
  l as ze,
  m as _e,
  n as ne,
  h as T,
  e as he,
  o as ke
} from "./BC180BoF.js";
import {
  e as $,
  f as it,
  c as Se,
  a as ie,
  s as me,
  r as Ie,
  g as Me,
  d as dt
} from "./Bbytcfj7.js";
import {
  r as oe,
  p as R
} from "./BQ15Turv.js";
import {
  s as z
} from "./CpsyGtAr.js";
import {
  i as L
} from "./CYlrjl7C.js";
import {
  g as je
} from "./DJlrKya2.js";
import {
  j as vt,
  u as ue,
  t as fe,
  a as Xe,
  f as ct,
  P as Fe
} from "./BNML0NQl.js";
import {
  r as Oe
} from "./CFl7M2B7.js";
import "./BhCkpOlh.js";
import {
  y as Ke,
  r as Ne,
  a as Je
} from "./DDjO6wmd.js";
import {
  s as Be
} from "./CetJgb3j.js";
import {
  b as pt
} from "./CxzHUe37.js";
import {
  c as ut
} from "./BKBS1EOp.js";
import {
  t as Qe
} from "./CPcsbTWB.js";
import {
  a as ft
} from "./b8ow9ahU.js";
const ca = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAAXNSR0IArs4c6QAAACpJREFUeNpj+AsEZ86ASIa/DAwMZ84ACRDzDBigMs/AARITq1oUwxBWAADaREUdDMswKwAAAABJRU5ErkJggg==";
var mt = ee('<svg><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function pa(i, e) {
  let l = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = mt();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), o(i, s)
}
var bt = ee('<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');

function xt(i, e) {
  let l = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = bt();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), o(i, s)
}
var gt = f('<form method="dialog"><button class="btn btn-sm btn-circle">✕</button></form>'),
  ht = f('<div class="flex items-center"></div> <div class="flex items-center justify-center overflow-hidden text-center"><!></div> <div class="flex items-start justify-end pt-1"><!></div>', 1),
  _t = f('<form method="dialog" class="ml-2 self-start pt-1 sm:translate-x-2"><button class="btn btn-sm btn-circle">✕</button></form>'),
  wt = f('<div class="flex flex-1 items-center gap-3 overflow-hidden"><!></div> <!>', 1),
  yt = f("<header><!></header>"),
  Ct = f('<form method="dialog" class="modal-backdrop"><button> </button></form>'),
  At = f('<dialog closedby="any"><div><!> <div><!></div></div> <!></dialog>');

function We(i, e) {
  qe(e, !0);
  let l = R(e, "open", 15),
    s = R(e, "hasBackdrop", 3, !0),
    w = R(e, "hasCloseButton", 3, !0),
    C = R(e, "hasHeaderBorder", 3, !0),
    _ = R(e, "centerHeader", 3, !1),
    v = R(e, "isDynamicHeight", 3, !1),
    c = R(e, "useModalLayer", 3, !0),
    p = R(e, "contentEl", 15),
    g = R(e, "disableCloseAnimation", 3, !1);
  const M = "modal-box p-0 flex flex-col w-11/12 max-h-11/12 rounded-xl",
    y = "max-sm:!w-full max-sm:!h-full max-sm:!max-w-none max-sm:!max-h-none max-sm:!rounded-none",
    n = be(() => Qe(M, !v() && "h-11/12", y, e.modalBoxClass));
  var x = At(),
    m = t(x),
    D = t(m);
  {
    var O = d => {
      var B = yt(),
        U = t(B);
      {
        var K = q => {
            var E = ht(),
              H = r(se(E), 2),
              N = t(H);
            Be(N, () => e.header ?? Ae), a(H);
            var J = r(H, 2),
              j = t(J);
            {
              var X = b => {
                var Y = gt();
                o(b, Y)
              };
              L(j, b => {
                w() && b(X)
              })
            }
            a(J), o(q, E)
          },
          V = q => {
            var E = wt(),
              H = se(E),
              N = t(H);
            Be(N, () => e.header ?? Ae), a(H);
            var J = r(H, 2);
            {
              var j = X => {
                var b = _t();
                o(X, b)
              };
              L(J, X => {
                w() && X(j)
              })
            }
            o(q, E)
          };
        L(U, q => {
          _() ? q(K) : q(V, !1)
        })
      }
      a(B), I(() => ie(B, 1, `bg-base-100/70 sticky top-0 z-40 flex shrink-0 items-center justify-between px-4 py-4 backdrop-blur sm:px-6 ${C()?"border-base-content/10 border-b":""} ${_()?"grid grid-cols-[2.5rem_1fr_2.5rem] px-4":""}`)), o(d, B)
    };
    L(D, d => {
      (e.header || w()) && d(O)
    })
  }
  var Z = r(D, 2),
    A = t(Z);
  Be(A, () => e.children ?? Ae), a(Z), pt(Z, d => p(d), () => p()), a(m);
  var S = r(m, 2);
  {
    var te = d => {
      var B = Ct(),
        U = t(B),
        K = t(U, !0);
      a(U), a(B), I(V => z(K, V), [() => ut()]), o(d, B)
    };
    L(S, d => {
      s() && d(te)
    })
  }
  a(x), it(x, () => d => {
    nt(() => {
      l() && !d.open ? c() ? d.showModal() : d.show() : d.open && d.close()
    })
  }), I(d => {
    ie(x, 1, `modal ${g()?"no-close-animation":""} ${e.dialogClass??""}`, "svelte-r6rf84"), ie(m, 1, Se(h(n))), ie(Z, 1, d)
  }, [() => Se(Qe("flex flex-1 flex-col overflow-y-auto px-4 py-4 sm:px-6", e.contentAreaClass))]), Le("close", x, () => {
    var d;
    l(!1), (d = e.onclose) == null || d.call(e)
  }), o(i, x), He()
}
var kt = ee('<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>');

function De(i, e) {
  let l = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = kt();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), o(i, s)
}
var It = f('<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'),
  Mt = f('<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-lg:hidden">Droplets</span></span> <!></span>'),
  Bt = f('<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pr-1 pl-1"><!></button>'),
  Lt = f('<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pr-2 pl-1"><!></span>');

function Dt(i, e) {
  qe(e, !0);
  const l = c => {
    var p = Mt(),
      g = t(p);
    De(g, {
      class: "text-primary size-4.5"
    });
    var M = r(g, 2),
      y = t(M);
    ne(), a(M);
    var n = r(M, 2);
    {
      var x = m => {
        var D = It(),
          O = t(D);
        xt(O, {
          class: "size-4"
        }), a(D), o(m, D)
      };
      L(n, m => {
        s() && m(x)
      })
    }
    a(p), I(m => z(y, `${m??""} `), [() => e.value.toLocaleString(navigator.language)]), o(c, p)
  };
  let s = R(e, "button", 3, !0);
  var w = ze(),
    C = se(w);
  {
    var _ = c => {
        var p = Bt(),
          g = t(p);
        l(g), a(p), _e("click", p, () => {
          vt.dropletsDialogOpen = !0
        }), o(c, p)
      },
      v = c => {
        var p = Lt(),
          g = t(p);
        l(g), a(p), o(c, p)
      };
    L(C, c => {
      s() ? c(_) : c(v, !1)
    })
  }
  o(i, w), He()
}
Ve(["click"]);
var qt = ee('<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>');

function Ht(i, e) {
  let l = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = qt();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...l
  })), o(i, s)
}
var zt = ee('<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>');

function Ge(i, e) {
  let l = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = zt();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100",
    height: "100",
    viewBox: "0 0 48 48",
    ...l
  })), o(i, s)
}
var Zt = f('<div class="flex w-full items-center gap-1"><!> <h3 class="text-xl font-bold">Droplets</h3> <div class="mr-4 ml-auto"><!></div></div>'),
  Pt = f('<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box border-base-content/20 z-1 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'),
  Tt = f('<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"><!></button></form>'),
  Ut = f('<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl p-4"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">Droplets</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'),
  Et = f('<div class="flex flex-col gap-4"><p class="text-base-content/80 text-sm"> </p> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div> <p class="text-base-content/60 mt-4 text-center text-sm"> <a class="font-medium" target="_blank"> </a></p></section></div>'),
  Rt = f('<div class="flex items-center gap-2"><!> <h3 class="text-2xl font-bold">PIX</h3></div>'),
  St = f('<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated aspect-square w-70" alt="QR code PIX"/> <div class="center-absolute absolute size-[95%] border-6 border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pr-2.5 pl-4"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>', 1),
  jt = f('<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'),
  Xt = f('<div class="flex h-full flex-col items-center gap-4"><!></div>'),
  Ft = f("<!> <!>", 1);

function ua(i, e) {
  qe(e, !0);
  let l = R(e, "open", 15),
    s = he(!1);
  const w = be(() => {
      var y, n;
      return ((n = (y = ue.data) == null ? void 0 : y.country) == null ? void 0 : n.toUpperCase()) === "BR"
    }),
    C = be(() => {
      var y, n;
      return ((n = (y = ue.data) == null ? void 0 : y.country) == null ? void 0 : n.toUpperCase()) === "MX"
    });
  let _ = he(!1),
    v = he(void 0),
    c = he(!1);
  var p = Ft(),
    g = se(p);
  We(g, {
    modalBoxClass: "max-w-4xl",
    get open() {
      return l()
    },
    set open(n) {
      l(n)
    },
    header: n => {
      var x = Zt(),
        m = t(x);
      De(m, {
        class: "text-primary size-6"
      });
      var D = r(m, 4),
        O = t(D);
      {
        let Z = be(() => {
          var A;
          return ((A = ue.data) == null ? void 0 : A.droplets) ?? 0
        });
        Dt(O, {
          get value() {
            return h(Z)
          },
          button: !1
        })
      }
      a(D), a(x), o(n, x)
    },
    children: (n, x) => {
      var m = ze(),
        D = se(m);
      {
        var O = Z => {
          var A = Et(),
            S = t(A),
            te = t(S, !0);
          a(S);
          var d = r(S, 2);
          {
            const b = (Y, u) => {
              let Q = () => u == null ? void 0 : u().droplets,
                ae = () => u == null ? void 0 : u().bonus,
                re = () => u == null ? void 0 : u().price,
                Ze = () => u == null ? void 0 : u().stripeLookupkey,
                Ye = () => u == null ? void 0 : u().productId,
                $e = () => u == null ? void 0 : u().dropdownClass;
              var we = Ut(),
                ye = t(we),
                Pe = t(ye);
              De(Pe, {
                class: "mb-1 inline size-7"
              });
              var Te = r(Pe, 2),
                et = t(Te);
              ne(), a(Te), a(ye);
              var Ce = r(ye, 2),
                Ue = t(Ce);
              {
                var tt = P => {
                  var k = ke();
                  I(W => z(k, `${W??""} Droplets`), [() => Q().toLocaleString(navigator.language)]), o(P, k)
                };
                L(Ue, P => {
                  ae() && P(tt)
                })
              }
              var Ee = r(Ue, 2),
                at = t(Ee);
              a(Ee), a(Ce);
              var st = r(Ce, 2);
              {
                var ot = P => {
                    var k = Pt(),
                      W = t(k),
                      de = t(W);
                    a(W);
                    var xe = r(W, 2),
                      ve = t(xe),
                      le = t(ve),
                      F = t(le);
                    Ie(F);
                    var G = r(F, 2),
                      ce = t(G);
                    Ht(ce, {
                      class: "inline size-5"
                    }), ne(2), a(G), a(le), a(ve);
                    var Re = r(ve, 2),
                      ge = t(Re),
                      lt = t(ge);
                    Ge(lt, {
                      class: "size-5"
                    }), ne(2), a(ge), a(Re), a(xe), a(k), I(pe => {
                      ie(k, 1, `dropdown mt-3 ${$e()??""}`), z(de, `R$${pe??""}`), me(le, "action", `${Fe}/payment/create-checkout-session`), Me(F, Ze()), G.disabled = h(s), ge.disabled = h(s)
                    }, [() => (re() * 4).toFixed(2).replace(".", ",")]), Le("submit", le, () => {
                      T(s, !0), setTimeout(() => T(s, !1), 3e3)
                    }), _e("click", ge, () => {
                      T(_, !0), T(s, !0), Xe.generatePixQrCode(Ye()).then(pe => {
                        T(v, pe, !0)
                      }).catch(pe => {
                        fe.error(pe.message)
                      }).finally(() => {
                        T(s, !1)
                      })
                    }), o(P, k)
                  },
                  rt = P => {
                    var k = Tt(),
                      W = t(k);
                    Ie(W);
                    var de = r(W, 2),
                      xe = t(de);
                    {
                      var ve = F => {
                          var G = ke();
                          I(ce => z(G, `MX$ ${ce??""}`), [() => (re() * 18).toFixed(2)]), o(F, G)
                        },
                        le = F => {
                          var G = ke();
                          I(ce => z(G, `$${ce??""}`), [() => re().toFixed(2)]), o(F, G)
                        };
                      L(xe, F => {
                        h(C) ? F(ve) : F(le, !1)
                      })
                    }
                    a(de), a(k), I(() => {
                      me(k, "action", `${Fe}/payment/create-checkout-session`), Me(W, Ze()), de.disabled = h(s)
                    }), Le("submit", k, () => {
                      T(s, !0), setTimeout(() => T(s, !1), 3e3)
                    }), o(P, k)
                  };
                L(st, P => {
                  h(w) ? P(ot) : P(rt, !1)
                })
              }
              a(we), I((P, k) => {
                z(et, `${P??""} `), z(at, `+${k??""} bonus`)
              }, [() => (Q() + ae()).toLocaleString(navigator.language), () => ae().toLocaleString(navigator.language)]), o(Y, we)
            };
            var B = t(d),
              U = t(B);
            b(U, () => ({
              price: 5,
              droplets: 25e3,
              bonus: 0,
              stripeLookupkey: "droplets_5",
              productId: 10,
              dropdownClass: "dropdown-center"
            }));
            var K = r(U, 2);
            b(K, () => ({
              price: 15,
              droplets: 75e3,
              bonus: 3750,
              stripeLookupkey: "droplets_15",
              productId: 20,
              dropdownClass: "dropdown-center"
            }));
            var V = r(K, 2);
            b(V, () => ({
              price: 30,
              droplets: 15e4,
              bonus: 15e3,
              stripeLookupkey: "droplets_30",
              productId: 30,
              dropdownClass: "dropdown-center"
            }));
            var q = r(V, 2);
            b(q, () => ({
              price: 50,
              droplets: 25e4,
              bonus: 37500,
              stripeLookupkey: "droplets_50",
              productId: 40,
              dropdownClass: "dropdown-center"
            }));
            var E = r(q, 2);
            b(E, () => ({
              price: 75,
              droplets: 375e3,
              bonus: 75e3,
              stripeLookupkey: "droplets_75",
              productId: 50,
              dropdownClass: "dropdown-center"
            }));
            var H = r(E, 2);
            b(H, () => ({
              price: 100,
              droplets: 5e5,
              bonus: 125e3,
              stripeLookupkey: "droplets_100",
              productId: 60,
              dropdownClass: "max-sm:dropdown-top dropdown-center"
            })), a(B);
            var N = r(B, 2),
              J = t(N),
              j = r(J),
              X = t(j, !0);
            a(j), a(N), a(d), I((Y, u, Q, ae) => {
              z(J, `${u??""} `), me(j, "href", Q), z(X, ae)
            }, [() => Ke(), () => Ne(), Oe, () => Je()])
          }
          a(A), I((b, Y, u, Q) => z(te, b), [() => Ke(), () => Ne(), Oe, () => Je()]), o(Z, A)
        };
        L(D, Z => {
          ue.data && Z(O)
        })
      }
      o(n, m)
    },
    $$slots: {
      header: !0,
      default: !0
    }
  });
  var M = r(g, 2);
  We(M, {
    dialogClass: "!bg-black/80",
    modalBoxClass: "max-w-lg",
    onclose: () => {
      setTimeout(() => {
        T(v, void 0)
      }, 300)
    },
    get open() {
      return h(_)
    },
    set open(n) {
      T(_, n, !0)
    },
    header: n => {
      var x = Rt(),
        m = t(x);
      Ge(m, {
        class: "size-6"
      }), ne(2), a(x), o(n, x)
    },
    children: (n, x) => {
      var m = Xt(),
        D = t(m);
      {
        var O = A => {
            var S = St(),
              te = se(S),
              d = r(t(te)),
              B = t(d);
            a(d), a(te);
            var U = r(te, 2),
              K = t(U),
              V = t(K);
            ne(2), a(K), a(U);
            var q = r(U, 2),
              E = r(t(q), 2),
              H = t(E);
            Ie(H);
            var N = r(H, 2),
              J = t(N);
            a(N), a(E), a(q);
            var j = r(q, 2),
              X = t(j);
            a(j), I(b => {
              z(B, `R$${b??""}`), me(V, "src", h(v).qrCode), Me(H, h(v).pixCode), X.disabled = h(c)
            }, [() => (h(v).price / 100).toFixed(2).replace(".", ",")]), _e("click", J, () => {
              var b;
              navigator.clipboard.writeText(((b = h(v)) == null ? void 0 : b.pixCode) ?? ""), fe.success("Código PIX copiado")
            }), _e("click", X, async () => {
              var b, Y, u;
              if (!h(v)) {
                fe.info("Espere 1 minuto e recarrege a pagina");
                return
              }
              try {
                T(c, !0);
                const {
                  paid: Q
                } = await Xe.getPixStatus(h(v).pixId);
                if (Q) {
                  const ae = h(v).productId.toString(),
                    re = (u = (Y = (b = ct.products[ae]) == null ? void 0 : b.items) == null ? void 0 : Y[0]) == null ? void 0 : u.amount;
                  await ue.refresh(), re ? je(`payment/success?droplets=${re}`) : je("payment/success")
                } else fe.info("Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.", {
                  duration: 1e5
                })
              } catch (Q) {
                console.error(Q), fe.error("Error ao atualizar o status do pix. Tente recarregar a página.")
              } finally {
                T(c, !1)
              }
            }), o(A, S)
          },
          Z = A => {
            var S = jt();
            o(A, S)
          };
        L(D, A => {
          h(v) ? A(O) : A(Z, !1)
        })
      }
      a(m), o(n, m)
    },
    $$slots: {
      header: !0,
      default: !0
    }
  }), o(i, p), He()
}
Ve(["click"]);
var Ot = ee('<svg><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');

function fa(i, e) {
  let l = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = Ot();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...l
  })), o(i, s)
}
var Kt = ee('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'),
  Nt = ee('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>');

function ma(i, e) {
  let l = oe(e, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = ze(),
    w = se(s);
  {
    var C = v => {
        var c = Kt();
        $(c, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...l
        })), o(v, c)
      },
      _ = v => {
        var c = Nt();
        $(c, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...l
        })), o(v, c)
      };
    L(w, v => {
      e.filled ? v(C) : v(_, !1)
    })
  }
  o(i, s)
}

function ba([i, e], [l, s]) {
  i = Math.floor(i), e = Math.floor(e), l = Math.floor(l), s = Math.floor(s);
  const w = [],
    C = Math.abs(l - i),
    _ = Math.abs(s - e),
    v = i < l ? 1 : -1,
    c = e < s ? 1 : -1;
  let p = C - _,
    g = i,
    M = e;
  for (; w.push([g, M]), !(g === l && M === s);) {
    const y = 2 * p;
    y > -_ && (p -= _, g += v), y < C && (p += C, M += c)
  }
  return w
}
var Jt = f('<img class="pixelated bg-base-200" alt="User profile"/>'),
  Qt = f('<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-12f880g"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>');

function xa(i, e) {
  const l = be(() => e.level % 1 * 360);
  var s = Qt(),
    w = r(t(s), 2),
    C = r(w, 2),
    _ = t(C),
    v = t(_);
  {
    var c = n => {
        ft(n, {
          get userId() {
            return e.userId
          }
        })
      },
      p = n => {
        var x = Jt();
        I(() => me(x, "src", e.pictureUrl)), o(n, x)
      };
    L(v, n => {
      e.pictureUrl ? n(p, !1) : n(c)
    })
  }
  a(_), a(C);
  var g = r(C, 2);
  let M;
  var y = t(g, !0);
  a(g), a(s), I(n => {
    dt(w, `--angle: ${h(l)??""}deg; --color: var(--color-secondary)`), M = ie(g, 1, "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, M, {
      "left-0": e.level > 99,
      "-left-1": e.level > 99
    }), z(y, n)
  }, [() => Math.floor(e.level)]), o(i, s)
}
export {
  xt as A, Dt as D, ma as I, xa as P, pa as U, fa as a, De as b, ua as c, ca as d, We as e, ba as r
};