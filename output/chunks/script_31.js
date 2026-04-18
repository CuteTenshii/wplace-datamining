import "./3onovZFu.js";
import {
  a as o,
  z as ee,
  p as qe,
  t as I,
  v as De,
  b as ze,
  i as x,
  c as f,
  u as be,
  d as t,
  s as l,
  aW as Ae,
  r as a,
  q as nt,
  f as se,
  k as Ve,
  l as He,
  m as _e,
  n as ne,
  h as P,
  e as xe,
  o as ke
} from "./Bpkf4F49.js";
import {
  d as $,
  e as it,
  c as Se,
  a as ie,
  s as me,
  r as Ie,
  g as Me,
  f as dt
} from "./CR0laCpx.js";
import {
  r as oe,
  p as R
} from "./BIcASWQ9.js";
import {
  s as H
} from "./DMJbp_6v.js";
import {
  i as D
} from "./h1NDdBVH.js";
import {
  g as je
} from "./B35O5enH.js";
import {
  j as vt,
  u as ue,
  t as fe,
  a as Xe,
  f as ct,
  P as Fe
} from "./DAS1Kd7x.js";
import {
  r as Oe
} from "./BVBkjg0i.js";
import "./YjF1d-DF.js";
import {
  y as Ne,
  r as Ke,
  a as We
} from "./Ba4gb9Xd.js";
import {
  s as Be
} from "./B0PPGt3g.js";
import {
  b as pt
} from "./C20CTLu2.js";
import {
  c as ut
} from "./BnpkV7Rh.js";
import {
  t as Je
} from "./BMdCM6jU.js";
import {
  a as ft
} from "./DvUDjGDM.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
    };
    var e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "6cb7caf3-2b52-468f-899a-a7ca5e2b7b82", r._sentryDebugIdIdentifier = "sentry-dbid-6cb7caf3-2b52-468f-899a-a7ca5e2b7b82")
  } catch {}
})();
const ca = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAAXNSR0IArs4c6QAAACpJREFUeNpj+AsEZ86ASIa/DAwMZ84ACRDzDBigMs/AARITq1oUwxBWAADaREUdDMswKwAAAABJRU5ErkJggg==";
var mt = ee('<svg><path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function pa(r, e) {
  let n = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = mt();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...n
  })), o(r, s)
}
var bt = ee('<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');

function gt(r, e) {
  let n = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = bt();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...n
  })), o(r, s)
}
var ht = f('<form method="dialog"><button class="btn btn-sm btn-circle">✕</button></form>'),
  xt = f('<div class="flex items-center"></div> <div class="flex items-center justify-center overflow-hidden text-center"><!></div> <div class="flex items-start justify-end pt-1"><!></div>', 1),
  _t = f('<form method="dialog" class="ml-2 self-start pt-1 sm:translate-x-2"><button class="btn btn-sm btn-circle">✕</button></form>'),
  wt = f('<div class="flex flex-1 items-center gap-3 overflow-hidden"><!></div> <!>', 1),
  yt = f("<header><!></header>"),
  Ct = f('<form method="dialog" class="modal-backdrop"><button> </button></form>'),
  At = f('<dialog closedby="any"><div><!> <div><!></div></div> <!></dialog>');

function Qe(r, e) {
  qe(e, !0);
  let n = R(e, "open", 15),
    s = R(e, "hasBackdrop", 3, !0),
    w = R(e, "hasCloseButton", 3, !0),
    C = R(e, "hasHeaderBorder", 3, !0),
    _ = R(e, "centerHeader", 3, !1),
    v = R(e, "isDynamicHeight", 3, !1),
    c = R(e, "useModalLayer", 3, !0),
    p = R(e, "contentEl", 15),
    h = R(e, "disableCloseAnimation", 3, !1);
  const M = "modal-box p-0 flex flex-col w-11/12 max-h-11/12 rounded-xl",
    y = "max-sm:!w-full max-sm:!h-full max-sm:!max-w-none max-sm:!max-h-none max-sm:!rounded-none",
    i = be(() => Je(M, !v() && "h-11/12", y, e.modalBoxClass));
  var g = At(),
    m = t(g),
    L = t(m);
  {
    var O = d => {
      var B = yt(),
        E = t(B);
      {
        var N = q => {
            var U = xt(),
              z = l(se(U), 2),
              K = t(z);
            Be(K, () => e.header ?? Ae), a(z);
            var W = l(z, 2),
              j = t(W);
            {
              var X = b => {
                var Y = ht();
                o(b, Y)
              };
              D(j, b => {
                w() && b(X)
              })
            }
            a(W), o(q, U)
          },
          V = q => {
            var U = wt(),
              z = se(U),
              K = t(z);
            Be(K, () => e.header ?? Ae), a(z);
            var W = l(z, 2);
            {
              var j = X => {
                var b = _t();
                o(X, b)
              };
              D(W, X => {
                w() && X(j)
              })
            }
            o(q, U)
          };
        D(E, q => {
          _() ? q(N) : q(V, !1)
        })
      }
      a(B), I(() => ie(B, 1, `bg-base-100/70 sticky top-0 z-40 flex shrink-0 items-center justify-between px-4 py-4 backdrop-blur sm:px-6 ${C()?"border-base-content/10 border-b":""} ${_()?"grid grid-cols-[2.5rem_1fr_2.5rem] px-4":""}`)), o(d, B)
    };
    D(L, d => {
      (e.header || w()) && d(O)
    })
  }
  var T = l(L, 2),
    A = t(T);
  Be(A, () => e.children ?? Ae), a(T), pt(T, d => p(d), () => p()), a(m);
  var S = l(m, 2);
  {
    var te = d => {
      var B = Ct(),
        E = t(B),
        N = t(E, !0);
      a(E), a(B), I(V => H(N, V), [() => ut()]), o(d, B)
    };
    D(S, d => {
      s() && d(te)
    })
  }
  a(g), it(g, () => d => {
    nt(() => {
      n() && !d.open ? c() ? d.showModal() : d.show() : d.open && d.close()
    })
  }), I(d => {
    ie(g, 1, `modal ${h()?"no-close-animation":""} ${e.dialogClass??""}`, "svelte-r6rf84"), ie(m, 1, Se(x(i))), ie(T, 1, d)
  }, [() => Se(Je("flex flex-1 flex-col overflow-y-auto px-4 py-4 sm:px-6", e.contentAreaClass))]), De("close", g, () => {
    var d;
    n(!1), (d = e.onclose) == null || d.call(e)
  }), o(r, g), ze()
}
var kt = ee('<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>');

function Le(r, e) {
  let n = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = kt();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...n
  })), o(r, s)
}
var It = f('<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'),
  Mt = f('<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-lg:hidden">Droplets</span></span> <!></span>'),
  Bt = f('<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pl-1 pr-1"><!></button>'),
  Dt = f('<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pl-1 pr-2"><!></span>');

function Lt(r, e) {
  qe(e, !0);
  const n = c => {
    var p = Mt(),
      h = t(p);
    Le(h, {
      class: "text-primary size-4.5"
    });
    var M = l(h, 2),
      y = t(M);
    ne(), a(M);
    var i = l(M, 2);
    {
      var g = m => {
        var L = It(),
          O = t(L);
        gt(O, {
          class: "size-4"
        }), a(L), o(m, L)
      };
      D(i, m => {
        s() && m(g)
      })
    }
    a(p), I(m => H(y, `${m??""} `), [() => e.value.toLocaleString(navigator.language)]), o(c, p)
  };
  let s = R(e, "button", 3, !0);
  var w = He(),
    C = se(w);
  {
    var _ = c => {
        var p = Bt(),
          h = t(p);
        n(h), a(p), _e("click", p, () => {
          vt.dropletsDialogOpen = !0
        }), o(c, p)
      },
      v = c => {
        var p = Dt(),
          h = t(p);
        n(h), a(p), o(c, p)
      };
    D(C, c => {
      s() ? c(_) : c(v, !1)
    })
  }
  o(r, w), ze()
}
Ve(["click"]);
var qt = ee('<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>');

function zt(r, e) {
  let n = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = qt();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...n
  })), o(r, s)
}
var Ht = ee('<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>');

function Ge(r, e) {
  let n = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = Ht();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100",
    height: "100",
    viewBox: "0 0 48 48",
    ...n
  })), o(r, s)
}
var Tt = f('<div class="flex w-full items-center gap-1"><!> <h3 class="text-xl font-bold">Droplets</h3> <div class="mr-4 ml-auto"><!></div></div>'),
  Zt = f('<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box border-base-content/20 z-1 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'),
  Pt = f('<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"><!></button></form>'),
  Et = f('<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl p-4"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">Droplets</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'),
  Ut = f('<div class="flex flex-col gap-4"><p class="text-base-content/80 text-sm"> </p> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div> <p class="text-base-content/60 mt-4 text-center text-sm"> <a class="font-medium" target="_blank"> </a></p></section></div>'),
  Rt = f('<div class="flex items-center gap-2"><!> <h3 class="text-2xl font-bold">PIX</h3></div>'),
  St = f('<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated aspect-square w-70" alt="QR code PIX"/> <div class="center-absolute absolute size-[95%] border-6 border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pr-2.5 pl-4"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>', 1),
  jt = f('<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'),
  Xt = f('<div class="flex h-full flex-col items-center gap-4"><!></div>'),
  Ft = f("<!> <!>", 1);

function ua(r, e) {
  qe(e, !0);
  let n = R(e, "open", 15),
    s = xe(!1);
  const w = be(() => {
      var y, i;
      return ((i = (y = ue.data) == null ? void 0 : y.country) == null ? void 0 : i.toUpperCase()) === "BR"
    }),
    C = be(() => {
      var y, i;
      return ((i = (y = ue.data) == null ? void 0 : y.country) == null ? void 0 : i.toUpperCase()) === "MX"
    });
  let _ = xe(!1),
    v = xe(void 0),
    c = xe(!1);
  var p = Ft(),
    h = se(p);
  Qe(h, {
    modalBoxClass: "max-w-4xl",
    get open() {
      return n()
    },
    set open(i) {
      n(i)
    },
    header: i => {
      var g = Tt(),
        m = t(g);
      Le(m, {
        class: "text-primary size-6"
      });
      var L = l(m, 4),
        O = t(L);
      {
        let T = be(() => {
          var A;
          return ((A = ue.data) == null ? void 0 : A.droplets) ?? 0
        });
        Lt(O, {
          get value() {
            return x(T)
          },
          button: !1
        })
      }
      a(L), a(g), o(i, g)
    },
    children: (i, g) => {
      var m = He(),
        L = se(m);
      {
        var O = T => {
          var A = Ut(),
            S = t(A),
            te = t(S, !0);
          a(S);
          var d = l(S, 2);
          {
            const b = (Y, u) => {
              let J = () => u == null ? void 0 : u().droplets,
                ae = () => u == null ? void 0 : u().bonus,
                re = () => u == null ? void 0 : u().price,
                Te = () => u == null ? void 0 : u().stripeLookupkey,
                Ye = () => u == null ? void 0 : u().productId,
                $e = () => u == null ? void 0 : u().dropdownClass;
              var we = Et(),
                ye = t(we),
                Ze = t(ye);
              Le(Ze, {
                class: "mb-1 inline size-7"
              });
              var Pe = l(Ze, 2),
                et = t(Pe);
              ne(), a(Pe), a(ye);
              var Ce = l(ye, 2),
                Ee = t(Ce);
              {
                var tt = Z => {
                  var k = ke();
                  I(Q => H(k, `${Q??""} Droplets`), [() => J().toLocaleString(navigator.language)]), o(Z, k)
                };
                D(Ee, Z => {
                  ae() && Z(tt)
                })
              }
              var Ue = l(Ee, 2),
                at = t(Ue);
              a(Ue), a(Ce);
              var st = l(Ce, 2);
              {
                var ot = Z => {
                    var k = Zt(),
                      Q = t(k),
                      de = t(Q);
                    a(Q);
                    var ge = l(Q, 2),
                      ve = t(ge),
                      le = t(ve),
                      F = t(le);
                    Ie(F);
                    var G = l(F, 2),
                      ce = t(G);
                    zt(ce, {
                      class: "inline size-5"
                    }), ne(2), a(G), a(le), a(ve);
                    var Re = l(ve, 2),
                      he = t(Re),
                      lt = t(he);
                    Ge(lt, {
                      class: "size-5"
                    }), ne(2), a(he), a(Re), a(ge), a(k), I(pe => {
                      ie(k, 1, `dropdown mt-3 ${$e()??""}`), H(de, `R$${pe??""}`), me(le, "action", `${Fe}/payment/create-checkout-session`), Me(F, Te()), G.disabled = x(s), he.disabled = x(s)
                    }, [() => (re() * 4).toFixed(2).replace(".", ",")]), De("submit", le, () => {
                      P(s, !0), setTimeout(() => P(s, !1), 3e3)
                    }), _e("click", he, () => {
                      P(_, !0), P(s, !0), Xe.generatePixQrCode(Ye()).then(pe => {
                        P(v, pe, !0)
                      }).catch(pe => {
                        fe.error(pe.message)
                      }).finally(() => {
                        P(s, !1)
                      })
                    }), o(Z, k)
                  },
                  rt = Z => {
                    var k = Pt(),
                      Q = t(k);
                    Ie(Q);
                    var de = l(Q, 2),
                      ge = t(de);
                    {
                      var ve = F => {
                          var G = ke();
                          I(ce => H(G, `MX$ ${ce??""}`), [() => (re() * 18).toFixed(2)]), o(F, G)
                        },
                        le = F => {
                          var G = ke();
                          I(ce => H(G, `$${ce??""}`), [() => re().toFixed(2)]), o(F, G)
                        };
                      D(ge, F => {
                        x(C) ? F(ve) : F(le, !1)
                      })
                    }
                    a(de), a(k), I(() => {
                      me(k, "action", `${Fe}/payment/create-checkout-session`), Me(Q, Te()), de.disabled = x(s)
                    }), De("submit", k, () => {
                      P(s, !0), setTimeout(() => P(s, !1), 3e3)
                    }), o(Z, k)
                  };
                D(st, Z => {
                  x(w) ? Z(ot) : Z(rt, !1)
                })
              }
              a(we), I((Z, k) => {
                H(et, `${Z??""} `), H(at, `+${k??""} bonus`)
              }, [() => (J() + ae()).toLocaleString(navigator.language), () => ae().toLocaleString(navigator.language)]), o(Y, we)
            };
            var B = t(d),
              E = t(B);
            b(E, () => ({
              price: 5,
              droplets: 25e3,
              bonus: 0,
              stripeLookupkey: "droplets_5",
              productId: 10,
              dropdownClass: "dropdown-center"
            }));
            var N = l(E, 2);
            b(N, () => ({
              price: 15,
              droplets: 75e3,
              bonus: 3750,
              stripeLookupkey: "droplets_15",
              productId: 20,
              dropdownClass: "dropdown-center"
            }));
            var V = l(N, 2);
            b(V, () => ({
              price: 30,
              droplets: 15e4,
              bonus: 15e3,
              stripeLookupkey: "droplets_30",
              productId: 30,
              dropdownClass: "dropdown-center"
            }));
            var q = l(V, 2);
            b(q, () => ({
              price: 50,
              droplets: 25e4,
              bonus: 37500,
              stripeLookupkey: "droplets_50",
              productId: 40,
              dropdownClass: "dropdown-center"
            }));
            var U = l(q, 2);
            b(U, () => ({
              price: 75,
              droplets: 375e3,
              bonus: 75e3,
              stripeLookupkey: "droplets_75",
              productId: 50,
              dropdownClass: "dropdown-center"
            }));
            var z = l(U, 2);
            b(z, () => ({
              price: 100,
              droplets: 5e5,
              bonus: 125e3,
              stripeLookupkey: "droplets_100",
              productId: 60,
              dropdownClass: "max-sm:dropdown-top dropdown-center"
            })), a(B);
            var K = l(B, 2),
              W = t(K),
              j = l(W),
              X = t(j, !0);
            a(j), a(K), a(d), I((Y, u, J, ae) => {
              H(W, `${u??""} `), me(j, "href", J), H(X, ae)
            }, [() => Ne(), () => Ke(), Oe, () => We()])
          }
          a(A), I((b, Y, u, J) => H(te, b), [() => Ne(), () => Ke(), Oe, () => We()]), o(T, A)
        };
        D(L, T => {
          ue.data && T(O)
        })
      }
      o(i, m)
    },
    $$slots: {
      header: !0,
      default: !0
    }
  });
  var M = l(h, 2);
  Qe(M, {
    dialogClass: "!bg-black/80",
    modalBoxClass: "max-w-lg",
    onclose: () => {
      setTimeout(() => {
        P(v, void 0)
      }, 300)
    },
    get open() {
      return x(_)
    },
    set open(i) {
      P(_, i, !0)
    },
    header: i => {
      var g = Rt(),
        m = t(g);
      Ge(m, {
        class: "size-6"
      }), ne(2), a(g), o(i, g)
    },
    children: (i, g) => {
      var m = Xt(),
        L = t(m);
      {
        var O = A => {
            var S = St(),
              te = se(S),
              d = l(t(te)),
              B = t(d);
            a(d), a(te);
            var E = l(te, 2),
              N = t(E),
              V = t(N);
            ne(2), a(N), a(E);
            var q = l(E, 2),
              U = l(t(q), 2),
              z = t(U);
            Ie(z);
            var K = l(z, 2),
              W = t(K);
            a(K), a(U), a(q);
            var j = l(q, 2),
              X = t(j);
            a(j), I(b => {
              H(B, `R$${b??""}`), me(V, "src", x(v).qrCode), Me(z, x(v).pixCode), X.disabled = x(c)
            }, [() => (x(v).price / 100).toFixed(2).replace(".", ",")]), _e("click", W, () => {
              var b;
              navigator.clipboard.writeText(((b = x(v)) == null ? void 0 : b.pixCode) ?? ""), fe.success("Código PIX copiado")
            }), _e("click", X, async () => {
              var b, Y, u;
              if (!x(v)) {
                fe.info("Espere 1 minuto e recarrege a pagina");
                return
              }
              try {
                P(c, !0);
                const {
                  paid: J
                } = await Xe.getPixStatus(x(v).pixId);
                if (J) {
                  const ae = x(v).productId.toString(),
                    re = (u = (Y = (b = ct.products[ae]) == null ? void 0 : b.items) == null ? void 0 : Y[0]) == null ? void 0 : u.amount;
                  await ue.refresh(), re ? je(`payment/success?droplets=${re}`) : je("payment/success")
                } else fe.info("Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.", {
                  duration: 1e5
                })
              } catch (J) {
                console.error(J), fe.error("Error ao atualizar o status do pix. Tente recarregar a página.")
              } finally {
                P(c, !1)
              }
            }), o(A, S)
          },
          T = A => {
            var S = jt();
            o(A, S)
          };
        D(L, A => {
          x(v) ? A(O) : A(T, !1)
        })
      }
      a(m), o(i, m)
    },
    $$slots: {
      header: !0,
      default: !0
    }
  }), o(r, p), ze()
}
Ve(["click"]);
var Ot = ee('<svg><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');

function fa(r, e) {
  let n = oe(e, ["$$slots", "$$events", "$$legacy"]);
  var s = Ot();
  $(s, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...n
  })), o(r, s)
}
var Nt = ee('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'),
  Kt = ee('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>');

function ma(r, e) {
  let n = oe(e, ["$$slots", "$$events", "$$legacy", "filled"]);
  var s = He(),
    w = se(s);
  {
    var C = v => {
        var c = Nt();
        $(c, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), o(v, c)
      },
      _ = v => {
        var c = Kt();
        $(c, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...n
        })), o(v, c)
      };
    D(w, v => {
      e.filled ? v(C) : v(_, !1)
    })
  }
  o(r, s)
}

function ba([r, e], [n, s]) {
  r = Math.floor(r), e = Math.floor(e), n = Math.floor(n), s = Math.floor(s);
  const w = [],
    C = Math.abs(n - r),
    _ = Math.abs(s - e),
    v = r < n ? 1 : -1,
    c = e < s ? 1 : -1;
  let p = C - _,
    h = r,
    M = e;
  for (; w.push([h, M]), !(h === n && M === s);) {
    const y = 2 * p;
    y > -_ && (p -= _, h += v), y < C && (p += C, M += c)
  }
  return w
}
var Wt = f('<img class="pixelated bg-base-200" alt="User profile"/>'),
  Jt = f('<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-12f880g"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>');

function ga(r, e) {
  const n = be(() => e.level % 1 * 360);
  var s = Jt(),
    w = l(t(s), 2),
    C = l(w, 2),
    _ = t(C),
    v = t(_);
  {
    var c = i => {
        ft(i, {
          get userId() {
            return e.userId
          }
        })
      },
      p = i => {
        var g = Wt();
        I(() => me(g, "src", e.pictureUrl)), o(i, g)
      };
    D(v, i => {
      e.pictureUrl ? i(p, !1) : i(c)
    })
  }
  a(_), a(C);
  var h = l(C, 2);
  let M;
  var y = t(h, !0);
  a(h), a(s), I(i => {
    dt(w, `--angle: ${x(n)??""}deg; --color: var(--color-secondary)`), M = ie(h, 1, "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, M, {
      "left-0": e.level > 99,
      "-left-1": e.level > 99
    }), H(y, i)
  }, [() => Math.floor(e.level)]), o(r, s)
}
export {
  gt as A, Lt as D, ma as I, ga as P, pa as U, fa as a, Le as b, ua as c, ca as d, Qe as e, ba as r
};