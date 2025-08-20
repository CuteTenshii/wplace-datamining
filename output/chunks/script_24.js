import {
  bj as ze,
  F as Se,
  h as qe,
  aW as _t,
  ao as mt,
  G as Re,
  bk as bt,
  k as N,
  x as Xe,
  bl as ht,
  bm as gt,
  q as R,
  b as _,
  am as Qe,
  p as We,
  aS as Ne,
  a as pe,
  c as Ge,
  f as k,
  d as s,
  r as l,
  s as d,
  o as U,
  t as z,
  bh as ce,
  w as xt,
  A as b,
  aR as ie,
  aH as C,
  aT as Le,
  aU as wt
} from "./BwVUyGIA.js";
import {
  g as K
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  o as kt
} from "./6FCTZllW.js";
import {
  s as I
} from "./CPizFUA8.js";
import {
  r as Y,
  p as Ke,
  i as M
} from "./z_PNeqDz.js";
import {
  a as A,
  e as yt,
  r as xe,
  b as de,
  f as we,
  s as Ye,
  d as Ct
} from "./Crmhm9hm.js";
import {
  b as Lt
} from "./BKzXkE-b.js";
import {
  g as Fe
} from "./4gKap-g2.js";
import {
  g as It,
  u as ve,
  t as G,
  a as Je,
  S as zt,
  c as je
} from "./BbkYYows.js";
import {
  a as St
} from "./D9cjjMLU.js";

function Ca(e, t, a = t) {
  var o = bt(),
    c = new WeakSet;
  ze(e, "input", i => {
    var r = i ? e.defaultValue : e.value;
    if (r = ye(e) ? Ce(r) : r, a(r), N !== null && c.add(N), o && r !== (r = t())) {
      var f = e.selectionStart,
        v = e.selectionEnd;
      e.value = r ?? "", v !== null && (e.selectionStart = f, e.selectionEnd = Math.min(v, e.value.length))
    }
  }), (qe && e.defaultValue !== e.value || Xe(t) == null && e.value) && (a(ye(e) ? Ce(e.value) : e.value), N !== null && c.add(N)), Se(() => {
    var i = t();
    if (e === document.activeElement) {
      var r = ht ?? N;
      if (c.has(r)) return
    }
    ye(e) && i === Ce(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "")
  })
}
const ke = new Set;

function La(e, t, a, o, c = o) {
  var i = a.getAttribute("type") === "checkbox",
    r = e;
  let f = !1;
  if (t !== null)
    for (var v of t) r = r[v] ?? (r[v] = []);
  r.push(a), ze(a, "change", () => {
    var n = a.__value;
    i && (n = Oe(r, n, a.checked)), c(n)
  }, () => c(i ? [] : null)), Se(() => {
    var n = o();
    if (qe && a.defaultChecked !== a.checked) {
      f = !0;
      return
    }
    i ? (n = n || [], a.checked = n.includes(a.__value)) : a.checked = _t(a.__value, n)
  }), mt(() => {
    var n = r.indexOf(a);
    n !== -1 && r.splice(n, 1)
  }), ke.has(r) || (ke.add(r), Re(() => {
    r.sort((n, p) => n.compareDocumentPosition(p) === 4 ? -1 : 1), ke.delete(r)
  })), Re(() => {
    if (f) {
      var n;
      if (i) n = Oe(r, n, a.checked);
      else {
        var p = r.find(g => g.checked);
        n = p == null ? void 0 : p.__value
      }
      c(n)
    }
  })
}

function Ia(e, t, a = t) {
  ze(e, "change", o => {
    var c = o ? e.defaultChecked : e.checked;
    a(c)
  }), (qe && e.defaultChecked !== e.checked || Xe(t) == null) && a(e.checked), Se(() => {
    var o = t();
    e.checked = !!o
  })
}

function Oe(e, t, a) {
  for (var o = new Set, c = 0; c < e.length; c += 1) e[c].checked && o.add(e[c].__value);
  return a || o.delete(t), Array.from(o)
}

function ye(e) {
  var t = e.type;
  return t === "number" || t === "range"
}

function Ce(e) {
  return e === "" ? null : +e
}
const qt = gt,
  Pt = () => "Add profile picture",
  Dt = () => "Adicionar imagem de perfil",
  za = (e = {}, t = {}) => (t.locale ?? K()) === "en" ? Pt() : Dt(),
  Mt = () => "Cancel",
  Tt = () => "Cancelar",
  Sa = (e = {}, t = {}) => (t.locale ?? K()) === "en" ? Mt() : Tt(),
  Bt = () => "Close",
  Et = () => "Fechar",
  Ht = (e = {}, t = {}) => (t.locale ?? K()) === "en" ? Bt() : Et(),
  Zt = () => "You gain 1 droplet per pixel painted and 500 droplets per level",
  Ut = () => "Você ganha 1 droplet por pixel pintado e 500 droplets por level",
  At = (e = {}, t = {}) => (t.locale ?? K()) === "en" ? Zt() : Ut(),
  Rt = () => "Eraser",
  Ft = () => "Borracha",
  qa = (e = {}, t = {}) => (t.locale ?? K()) === "en" ? Rt() : Ft();
var jt = R('<svg><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');

function Ot(e, t) {
  let a = Y(t, ["$$slots", "$$events", "$$legacy"]);
  var o = jt();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), _(e, o)
}
var Vt = R('<svg><path d="M480-100q-133 0-226.5-92T160-416q0-63 24.5-120.5T254-638l226-222 226 222q45 44 69.5 101.5T800-416q0 132-93.5 224T480-100Z"></path></svg>');

function Ie(e, t) {
  let a = Y(t, ["$$slots", "$$events", "$$legacy"]);
  var o = Vt();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), _(e, o)
}
var Xt = k('<span class="btn btn-xs btn-circle btn-primary ml-0.5 size-5"><!></span>'),
  Qt = k('<span class="flex items-center gap-1"><!> <span class="text-primary text-base font-semibold"> <span class="text-xs max-sm:hidden">Droplets</span></span> <!></span>'),
  Wt = k('<button class="badge badge-lg border-base-content/10 right-tooltip cursor-pointer border-2 pl-1 pr-1"><!></button>'),
  Nt = k('<span class="badge badge-lg border-base-content/10 right-tooltip border-2 pl-1 pr-2"><!></span>');

function Gt(e, t) {
  We(t, !0);
  const a = v => {
    var n = Qt(),
      p = s(n);
    Ie(p, {
      class: "text-primary size-4.5"
    });
    var g = d(p, 2),
      P = s(g);
    U(), l(g);
    var x = d(g, 2);
    {
      var S = T => {
        var D = Xt(),
          J = s(D);
        Ot(J, {
          class: "size-4"
        }), l(D), _(T, D)
      };
      M(x, T => {
        o() && T(S)
      })
    }
    l(n), z(T => I(P, `${T??""} `), [() => t.value.toLocaleString("en-US")]), _(v, n)
  };
  let o = Ke(t, "button", 3, !0);
  var c = Ne(),
    i = pe(c);
  {
    var r = v => {
        var n = Wt();
        n.__click = () => {
          It.dropletsDialogOpen = !0
        };
        var p = s(n);
        a(p), l(n), _(v, n)
      },
      f = v => {
        var n = Nt(),
          p = s(n);
        a(p), l(n), _(v, n)
      };
    M(i, v => {
      o() ? v(r) : v(f, !1)
    })
  }
  _(e, c), Ge()
}
Qe(["click"]);
var Kt = R('<svg><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"></path></svg>');

function Yt(e, t) {
  let a = Y(t, ["$$slots", "$$events", "$$legacy"]);
  var o = Kt();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    height: "24px",
    viewBox: "0 -960 960 960",
    width: "24px",
    fill: "currentColor",
    ...a
  })), _(e, o)
}
var Jt = R('<svg><path fill="#4db6ac" d="M11.9,12h-0.68l8.04-8.04c2.62-2.61,6.86-2.61,9.48,0L36.78,12H36.1c-1.6,0-3.11,0.62-4.24,1.76	l-6.8,6.77c-0.59,0.59-1.53,0.59-2.12,0l-6.8-6.77C15.01,12.62,13.5,12,11.9,12z"></path><path fill="#4db6ac" d="M36.1,36h0.68l-8.04,8.04c-2.62,2.61-6.86,2.61-9.48,0L11.22,36h0.68c1.6,0,3.11-0.62,4.24-1.76	l6.8-6.77c0.59-0.59,1.53-0.59,2.12,0l6.8,6.77C32.99,35.38,34.5,36,36.1,36z"></path><path fill="#4db6ac" d="M44.04,28.74L38.78,34H36.1c-1.07,0-2.07-0.42-2.83-1.17l-6.8-6.78c-1.36-1.36-3.58-1.36-4.94,0	l-6.8,6.78C13.97,33.58,12.97,34,11.9,34H9.22l-5.26-5.26c-2.61-2.62-2.61-6.86,0-9.48L9.22,14h2.68c1.07,0,2.07,0.42,2.83,1.17	l6.8,6.78c0.68,0.68,1.58,1.02,2.47,1.02s1.79-0.34,2.47-1.02l6.8-6.78C34.03,14.42,35.03,14,36.1,14h2.68l5.26,5.26	C46.65,21.88,46.65,26.12,44.04,28.74z"></path></svg>');

function Ve(e, t) {
  let a = Y(t, ["$$slots", "$$events", "$$legacy"]);
  var o = Jt();
  A(o, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100",
    height: "100",
    viewBox: "0 0 48 48",
    ...a
  })), _(e, o)
}
var $t = (e, t, a, o, c) => {
    b(t).show(), C(a, !0), Je.generatePixQrCode(o()).then(i => {
      C(c, i, !0)
    }).catch(() => {
      G.error("Não foi possível gerar o QR do pix. Tente novamente")
    }).finally(() => {
      C(a, !1)
    })
  },
  ea = k('<div><div tabindex="0" class="btn btn-lg btn-primary h-10"> </div> <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 border-base-content/20 m-1 w-max rounded-xl border p-2 shadow"><li><form method="POST"><input type="hidden" name="lookup_key"/> <button class="flex items-center gap-1.5"><!> <span>Cartão ou Boleto</span></button></form></li> <li><button class="flex items-center gap-1.5"><!> <span>Pix</span></button></li></ul></div>'),
  ta = k('<form method="POST"><input type="hidden" name="lookup_key"/> <button class="btn btn-lg btn-primary mt-3 h-10" type="submit"> </button></form>'),
  aa = k('<div class="bg-base-300 flex flex-col items-center justify-center rounded-xl px-4 py-6"><p class="text-primary text-3xl font-bold"><!> <span> <span class="text-lg font-normal">Droplets</span></span></p> <p class="text-base-content/80 mt-0.5 text-center text-xs"><!> <span class="text-primary/80 font-medium"> </span></p> <!></div>'),
  oa = k('<div class="flex flex-col gap-4"><section><div class="flex items-center gap-1"><!> <h3 class="text-xl font-bold">Droplets</h3> <div class="ml-auto mr-4"><!></div></div> <p class="text-base-content/80 mt-1 text-sm"> </p></section> <section><div class="grid gap-3 sm:grid-cols-2"><!> <!> <!> <!> <!> <!></div></section></div>'),
  ra = (e, t) => {
    var a;
    navigator.clipboard.writeText(((a = b(t)) == null ? void 0 : a.pixCode) ?? ""), G.success("Código PIX copiado")
  },
  sa = async (e, t, a) => {
    var o, c, i;
    if (!b(t)) {
      G.info("Espere 1 minuto e recarrege a pagina");
      return
    }
    try {
      C(a, !0);
      const {
        paid: r
      } = await Je.getPixStatus(b(t).pixId);
      if (r) {
        const f = b(t).productId.toString(),
          v = (i = (c = (o = zt.products[f]) == null ? void 0 : o.items) == null ? void 0 : c[0]) == null ? void 0 : i.amount;
        await ve.refresh(), v ? Fe(`payment/success?droplets=${v}`) : Fe("payment/success")
      } else G.info("Pagamento ainda não recebido. Desculpe a demora, tente novamente em instantes.", {
        duration: 1e5
      })
    } catch (r) {
      console.error(r), G.error("Error ao atualizar o status do pix. Tente recarregar a página.")
    } finally {
      C(a, !1)
    }
  }, la = k('<p class="text-base-content/80">Efetue o pagamento do PIX no valor de <span class="font-semibold"> </span></p> <section><div class="relative"><img class="pixelated w-70 aspect-square" alt="QR code PIX"/> <div class="center-absolute border-6 absolute size-[95%] border-black"></div></div></section> <section class="w-full"><span class="text-base-content/80 ml-4 text-sm font-semibold">Código</span> <div class="border-base-content/20 rounded-field flex w-full items-center gap-1 border-2 py-1.5 pl-4 pr-2.5"><input class="text-base-content/80 w-full min-w-10 grow text-sm font-medium" readonly=""/> <div class="h-10"><button class="btn btn-primary">Copiar</button></div></div></section> <section class="mt-2"><button class="btn btn-primary btn-lg">Fiz o pagamento</button></section>', 1), na = k('<div class="flex h-96 items-center justify-center"><span class="loading loading-spinner loading-xl"></span></div>'), ca = k('<dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-2xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button> </button></form></dialog> <dialog class="modal !bg-black/90"><div class="modal-box max-h-11/12 w-11/12 max-w-lg"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <div class="flex h-full flex-col items-center gap-4"><section><div class="flex items-center gap-2"><!> <h3 class="text-4xl font-bold">PIX</h3></div></section> <!></div></div></dialog>', 1);

function Pa(e, t) {
  We(t, !0);
  let a = Ke(t, "open", 15),
    o = ie(!1);
  kt(() => {
    const u = w => {
      w.key === "Escape" && a(!1)
    };
    return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u)
  });
  const c = Le(() => {
    var u, w;
    return ((w = (u = ve.data) == null ? void 0 : u.country) == null ? void 0 : w.toUpperCase()) === "BR"
  });
  let i = ie(null),
    r = ie(void 0),
    f = ie(!1);
  var v = ca(),
    n = pe(v),
    p = s(n),
    g = d(s(p), 2);
  {
    var P = u => {
      var w = oa(),
        B = s(w),
        E = s(B),
        $ = s(E);
      Ie($, {
        class: "text-primary size-6"
      });
      var H = d($, 4),
        ee = s(H);
      {
        let L = Le(() => {
          var re;
          return ((re = ve.data) == null ? void 0 : re.droplets) ?? 0
        });
        Gt(ee, {
          get value() {
            return b(L)
          },
          button: !1
        })
      }
      l(H), l(E);
      var te = d(E, 2),
        F = s(te, !0);
      l(te), l(B);
      var j = d(B, 2);
      {
        const L = (re, m) => {
          let Me = () => m == null ? void 0 : m().droplets,
            fe = () => m == null ? void 0 : m().bonus,
            Te = () => m == null ? void 0 : m().price,
            Be = () => m == null ? void 0 : m().stripeLookupkey,
            rt = () => m == null ? void 0 : m().productId,
            st = () => m == null ? void 0 : m().dropdownClass;
          var _e = aa(),
            me = s(_e),
            Ee = s(me);
          Ie(Ee, {
            class: "mb-1 inline size-7"
          });
          var He = d(Ee, 2),
            lt = s(He);
          U(), l(He), l(me);
          var be = d(me, 2),
            Ze = s(be);
          {
            var nt = y => {
              var h = wt();
              z(q => I(h, `${q??""} Droplets`), [() => Me().toLocaleString("en-US")]), _(y, h)
            };
            M(Ze, y => {
              fe() && y(nt)
            })
          }
          var Ue = d(Ze, 2),
            ct = s(Ue);
          l(Ue), l(be);
          var it = d(be, 2);
          {
            var dt = y => {
                var h = ea(),
                  q = s(h),
                  Q = s(q);
                l(q);
                var se = d(q, 2),
                  W = s(se),
                  le = s(W),
                  he = s(le);
                xe(he);
                var ge = d(he, 2),
                  pt = s(ge);
                Yt(pt, {
                  class: "inline size-5"
                }), U(2), l(ge), l(le), l(W);
                var Ae = d(W, 2),
                  ne = s(Ae);
                ne.__click = [$t, i, o, rt, r];
                var ut = s(ne);
                Ve(ut, {
                  class: "size-5"
                }), U(2), l(ne), l(Ae), l(se), l(h), z(ft => {
                  Ye(h, 1, `dropdown mt-3 ${st()??""}`), I(Q, `R$${ft??""}`), de(le, "action", `${je}/payment/create-checkout-session`), we(he, Be()), ge.disabled = b(o), ne.disabled = b(o)
                }, [() => (Te() * 4).toFixed(2).replace(".", ",")]), ce("submit", le, () => {
                  C(o, !0), setTimeout(() => C(o, !1), 3e3)
                }), _(y, h)
              },
              vt = y => {
                var h = ta(),
                  q = s(h);
                xe(q);
                var Q = d(q, 2),
                  se = s(Q);
                l(Q), l(h), z(W => {
                  de(h, "action", `${je}/payment/create-checkout-session`), we(q, Be()), Q.disabled = b(o), I(se, `$${W??""}`)
                }, [() => Te().toFixed(2)]), ce("submit", h, () => {
                  C(o, !0), setTimeout(() => C(o, !1), 3e3)
                }), _(y, h)
              };
            M(it, y => {
              b(c) || qt ? y(dt) : y(vt, !1)
            })
          }
          l(_e), z((y, h) => {
            I(lt, `${y??""} `), I(ct, `+${h??""} bonus`)
          }, [() => (Me() + fe()).toLocaleString("en-US"), () => fe().toLocaleString("en-US")]), _(re, _e)
        };
        var Z = s(j),
          O = s(Z);
        L(O, () => ({
          price: 5,
          droplets: 25e3,
          bonus: 0,
          stripeLookupkey: "droplets_5",
          productId: 10,
          dropdownClass: "dropdown-center"
        }));
        var ae = d(O, 2);
        L(ae, () => ({
          price: 15,
          droplets: 75e3,
          bonus: 3750,
          stripeLookupkey: "droplets_15",
          productId: 20,
          dropdownClass: "dropdown-center"
        }));
        var V = d(ae, 2);
        L(V, () => ({
          price: 30,
          droplets: 15e4,
          bonus: 15e3,
          stripeLookupkey: "droplets_30",
          productId: 30,
          dropdownClass: "dropdown-center"
        }));
        var X = d(V, 2);
        L(X, () => ({
          price: 50,
          droplets: 25e4,
          bonus: 37500,
          stripeLookupkey: "droplets_50",
          productId: 40,
          dropdownClass: "dropdown-center"
        }));
        var oe = d(X, 2);
        L(oe, () => ({
          price: 75,
          droplets: 375e3,
          bonus: 75e3,
          stripeLookupkey: "droplets_75",
          productId: 50,
          dropdownClass: "dropdown-center"
        }));
        var ot = d(oe, 2);
        L(ot, () => ({
          price: 100,
          droplets: 5e5,
          bonus: 125e3,
          stripeLookupkey: "droplets_100",
          productId: 60,
          dropdownClass: "max-sm:dropdown-top dropdown-center"
        })), l(Z), l(j)
      }
      l(w), z(L => I(F, L), [() => At()]), _(u, w)
    };
    M(g, u => {
      ve.data && u(P)
    })
  }
  l(p);
  var x = d(p, 2),
    S = s(x),
    T = s(S, !0);
  l(S), l(x), l(n), yt(n, () => u => {
    xt(() => {
      a() ? u.show() : u.close()
    })
  });
  var D = d(n, 2),
    J = s(D),
    Pe = d(s(J), 2),
    ue = s(Pe),
    De = s(ue),
    $e = s(De);
  Ve($e, {
    class: "size-10"
  }), U(2), l(De), l(ue);
  var et = d(ue, 2);
  {
    var tt = u => {
        var w = la(),
          B = pe(w),
          E = d(s(B)),
          $ = s(E);
        l(E), l(B);
        var H = d(B, 2),
          ee = s(H),
          te = s(ee);
        U(2), l(ee), l(H);
        var F = d(H, 2),
          j = d(s(F), 2),
          Z = s(j);
        xe(Z);
        var O = d(Z, 2),
          ae = s(O);
        ae.__click = [ra, r], l(O), l(j), l(F);
        var V = d(F, 2),
          X = s(V);
        X.__click = [sa, r, f], l(V), z(oe => {
          I($, `R$${oe??""}`), de(te, "src", b(r).qrCode), we(Z, b(r).pixCode), X.disabled = b(f)
        }, [() => (b(r).price / 100).toFixed(2).replace(".", ",")]), _(u, w)
      },
      at = u => {
        var w = na();
        _(u, w)
      };
    M(et, u => {
      b(r) ? u(tt) : u(at, !1)
    })
  }
  l(Pe), l(J), l(D), Lt(D, u => C(i, u), () => b(i)), z(u => I(T, u), [() => Ht()]), ce("close", n, () => {
    a(!1)
  }), ce("close", D, () => {
    setTimeout(() => {
      C(r, void 0)
    }, 300)
  }), _(e, v), Ge()
}
Qe(["click"]);
var ia = R('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Z"></path></svg>'),
  da = R('<svg><path d="M690-240h190v80H610l80-80Zm-500 80-85-85q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L520-160H190Zm296-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"></path></svg>');

function Da(e, t) {
  let a = Y(t, ["$$slots", "$$events", "$$legacy", "filled"]);
  var o = Ne(),
    c = pe(o);
  {
    var i = f => {
        var v = ia();
        A(v, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), _(f, v)
      },
      r = f => {
        var v = da();
        A(v, () => ({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 -960 960 960",
          fill: "currentColor",
          ...a
        })), _(f, v)
      };
    M(c, f => {
      t.filled ? f(i) : f(r, !1)
    })
  }
  _(e, o)
}

function Ma([e, t], [a, o]) {
  e = Math.floor(e), t = Math.floor(t), a = Math.floor(a), o = Math.floor(o);
  const c = [],
    i = Math.abs(a - e),
    r = Math.abs(o - t),
    f = e < a ? 1 : -1,
    v = t < o ? 1 : -1;
  let n = i - r,
    p = e,
    g = t;
  for (; c.push([p, g]), !(p === a && g === o);) {
    const P = 2 * n;
    P > -r && (n -= r, p += f), P < i && (n += i, g += v)
  }
  return c
}
var va = k('<img class="pixelated bg-base-200" alt="User profile"/>'),
  pa = k('<div class="relative w-max"><div class="bg-base-content/20 size-12 rounded-full"></div> <div class="level-fill center-absolute absolute size-12 rotate-[215deg] rounded-full svelte-zhy0pt"></div> <div class="avatar center-absolute absolute"><div class="size-10 rounded-full"><!></div></div> <div> </div></div>');

function Ta(e, t) {
  const a = Le(() => t.level % 1 * 360);
  var o = pa(),
    c = d(s(o), 2),
    i = d(c, 2),
    r = s(i),
    f = s(r);
  {
    var v = x => {
        St(x, {
          get userId() {
            return t.userId
          }
        })
      },
      n = x => {
        var S = va();
        z(() => de(S, "src", t.pictureUrl)), _(x, S)
      };
    M(f, x => {
      t.pictureUrl ? x(n, !1) : x(v)
    })
  }
  l(r), l(i);
  var p = d(i, 2);
  let g;
  var P = s(p, !0);
  l(p), l(o), z((x, S) => {
    Ct(c, `--angle: ${b(a)??""}deg; --color: var(--color-secondary)`), g = Ye(p, 1, "text-primary-content bg-secondary absolute bottom-0 flex items-center justify-center rounded-full px-[5px] py-0 text-xs font-bold", null, g, x), I(P, S)
  }, [() => ({
    "left-0": t.level > 99,
    "-left-1": t.level > 99
  }), () => Math.floor(t.level)]), _(e, o)
}
export {
  Ot as A, Gt as D, Da as I, Ta as P, Ie as a, Pa as b, za as c, Sa as d, qa as e, Ht as f, Ca as g, La as h, qt as i, Ia as j, Ma as r
};