var Se = Object.defineProperty;
var fe = r => {
  throw TypeError(r)
};
var Oe = (r, e, s) => e in r ? Se(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : r[e] = s;
var B = (r, e, s) => Oe(r, typeof e != "symbol" ? e + "" : e, s),
  Z = (r, e, s) => e.has(r) || fe("Cannot " + s);
var t = (r, e, s) => (Z(r, e, "read from private field"), s ? s.call(r) : e.get(r)),
  o = (r, e, s) => e.has(r) ? fe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, s),
  i = (r, e, s, n) => (Z(r, e, "write to private field"), n ? n.call(r, s) : e.set(r, s), s),
  l = (r, e, s) => (Z(r, e, "access private method"), s);
import {
  aZ as Ye,
  i as me,
  X as Ie,
  am as Ee,
  A as ke,
  a_ as oe,
  Y as V,
  L as S,
  C as O,
  aD as M,
  a$ as de,
  E as Ce,
  D as He,
  W as Me,
  b0 as _e,
  a4 as F,
  a3 as Te,
  b1 as Q,
  a2 as ee,
  a5 as Le,
  b2 as le,
  b3 as $e,
  b4 as ce,
  b5 as xe,
  b6 as Be,
  b7 as ue,
  b8 as pe,
  b9 as ge,
  ba as We,
  bb as je,
  N as Re,
  ad as Pe,
  a1 as te,
  I as J,
  n as Ve,
  H as qe,
  bc as W,
  F as ze,
  ay as Je,
  bd as Ge,
  be as Ke,
  bf as se,
  aa as Ue,
  ab as De,
  K as Xe,
  as as Ze,
  aG as re,
  J as j,
  bg as Qe,
  ar as et,
  bh as tt,
  ai as st,
  bi as rt,
  bj as ve,
  bk as be,
  bl as it,
  p as nt,
  aH as at,
  ac as ht,
  aF as ft,
  b as ot
} from "./C_-299ry.js";

function dt(r) {
  let e = 0,
    s = Ee(0),
    n;
  return () => {
    Ye() && (me(s), Ie(() => (e === 0 && (n = ke(() => r(() => oe(s)))), e += 1, () => {
      V(() => {
        e -= 1, e === 0 && (n == null || n(), n = void 0, oe(s))
      })
    })))
  }
}
var _t = ze | Je;

function lt(r, e, s, n) {
  new ct(r, e, s, n)
}
var u, L, R, Y, c, D, p, b, w, I, N, k, C, H, A, G, a, we, Ae, Ne, ie, q, z, ne;
class ct {
  constructor(e, s, n, g) {
    o(this, a);
    B(this, "parent");
    B(this, "is_pending", !1);
    B(this, "transform_error");
    o(this, u);
    o(this, L, O ? S : null);
    o(this, R);
    o(this, Y);
    o(this, c);
    o(this, D, null);
    o(this, p, null);
    o(this, b, null);
    o(this, w, null);
    o(this, I, 0);
    o(this, N, 0);
    o(this, k, !1);
    o(this, C, new Set);
    o(this, H, new Set);
    o(this, A, null);
    o(this, G, dt(() => (i(this, A, Ee(t(this, I))), () => {
      i(this, A, null)
    })));
    var h;
    i(this, u, e), i(this, R, s), i(this, Y, f => {
      var v = M;
      v.b = this, v.f |= de, n(f)
    }), this.parent = M.b, this.transform_error = g ?? ((h = this.parent) == null ? void 0 : h.transform_error) ?? (f => f), i(this, c, Ce(() => {
      if (O) {
        const f = t(this, L);
        He();
        const v = f.data === Me;
        if (f.data.startsWith(_e)) {
          const _ = JSON.parse(f.data.slice(_e.length));
          l(this, a, Ae).call(this, _)
        } else v ? l(this, a, Ne).call(this) : l(this, a, we).call(this)
      } else l(this, a, ie).call(this)
    }, _t)), O && i(this, u, S)
  }
  defer_effect(e) {
    Be(e, t(this, C), t(this, H))
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered())
  }
  has_pending_snippet() {
    return !!t(this, R).pending
  }
  update_pending_count(e) {
    l(this, a, ne).call(this, e), i(this, I, t(this, I) + e), !(!t(this, A) || t(this, k)) && (i(this, k, !0), V(() => {
      i(this, k, !1), t(this, A) && Pe(t(this, A), t(this, I))
    }))
  }
  get_effect_pending() {
    return t(this, G).call(this), me(t(this, A))
  }
  error(e) {
    var s = t(this, R).onerror;
    let n = t(this, R).failed;
    if (!s && !n) throw e;
    t(this, D) && (te(t(this, D)), i(this, D, null)), t(this, p) && (te(t(this, p)), i(this, p, null)), t(this, b) && (te(t(this, b)), i(this, b, null)), O && (J(t(this, L)), Ve(), J(qe()));
    var g = !1,
      h = !1;
    const f = () => {
        if (g) {
          Ke();
          return
        }
        g = !0, h && Ge(), t(this, b) !== null && ee(t(this, b), () => {
          i(this, b, null)
        }), l(this, a, z).call(this, () => {
          Q.ensure(), l(this, a, ie).call(this)
        })
      },
      v = d => {
        try {
          h = !0, s == null || s(d, f), h = !1
        } catch (_) {
          W(_, t(this, c) && t(this, c).parent)
        }
        n && i(this, b, l(this, a, z).call(this, () => {
          Q.ensure();
          try {
            return F(() => {
              var _ = M;
              _.b = this, _.f |= de, n(t(this, u), () => d, () => f)
            })
          } catch (_) {
            return W(_, t(this, c).parent), null
          }
        }))
      };
    V(() => {
      var d;
      try {
        d = this.transform_error(e)
      } catch (_) {
        W(_, t(this, c) && t(this, c).parent);
        return
      }
      d !== null && typeof d == "object" && typeof d.then == "function" ? d.then(v, _ => W(_, t(this, c) && t(this, c).parent)) : v(d)
    })
  }
}
u = new WeakMap, L = new WeakMap, R = new WeakMap, Y = new WeakMap, c = new WeakMap, D = new WeakMap, p = new WeakMap, b = new WeakMap, w = new WeakMap, I = new WeakMap, N = new WeakMap, k = new WeakMap, C = new WeakMap, H = new WeakMap, A = new WeakMap, G = new WeakMap, a = new WeakSet, we = function() {
  try {
    i(this, D, F(() => t(this, Y).call(this, t(this, u))))
  } catch (e) {
    this.error(e)
  }
}, Ae = function(e) {
  const s = t(this, R).failed;
  s && i(this, b, F(() => {
    s(t(this, u), () => e, () => () => {})
  }))
}, Ne = function() {
  const e = t(this, R).pending;
  e && (this.is_pending = !0, i(this, p, F(() => e(t(this, u)))), V(() => {
    var s = i(this, w, document.createDocumentFragment()),
      n = Te();
    s.append(n), i(this, D, l(this, a, z).call(this, () => (Q.ensure(), F(() => t(this, Y).call(this, n))))), t(this, N) === 0 && (t(this, u).before(s), i(this, w, null), ee(t(this, p), () => {
      i(this, p, null)
    }), l(this, a, q).call(this))
  }))
}, ie = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), i(this, N, 0), i(this, I, 0), i(this, D, F(() => {
        t(this, Y).call(this, t(this, u))
      })), t(this, N) > 0) {
      var e = i(this, w, document.createDocumentFragment());
      Le(t(this, D), e);
      const s = t(this, R).pending;
      i(this, p, F(() => s(t(this, u))))
    } else l(this, a, q).call(this)
  } catch (s) {
    this.error(s)
  }
}, q = function() {
  this.is_pending = !1;
  for (const e of t(this, C)) le(e, $e), ce(e);
  for (const e of t(this, H)) le(e, xe), ce(e);
  t(this, C).clear(), t(this, H).clear()
}, z = function(e) {
  var s = M,
    n = je,
    g = Re;
  ue(t(this, c)), pe(t(this, c)), ge(t(this, c).ctx);
  try {
    return e()
  } catch (h) {
    return We(h), null
  } finally {
    ue(s), pe(n), ge(g)
  }
}, ne = function(e) {
  var s;
  if (!this.has_pending_snippet()) {
    this.parent && l(s = this.parent, a, ne).call(s, e);
    return
  }
  i(this, N, t(this, N) + e), t(this, N) === 0 && (l(this, a, q).call(this), t(this, p) && ee(t(this, p), () => {
    i(this, p, null)
  }), t(this, w) && (t(this, u).before(t(this, w)), i(this, w, null)))
};
let ye = !0;

function vt(r, e) {
  var s = e == null ? "" : typeof e == "object" ? `${e}` : e;
  s !== (r.__t ?? (r.__t = r.nodeValue)) && (r.__t = s, r.nodeValue = `${s}`)
}

function ut(r, e) {
  return Fe(r, e)
}

function bt(r, e) {
  se(), e.intro = e.intro ?? !1;
  const s = e.target,
    n = O,
    g = S;
  try {
    for (var h = Ue(s); h && (h.nodeType !== De || h.data !== Xe);) h = Ze(h);
    if (!h) throw re;
    j(!0), J(h);
    const f = Fe(r, {
      ...e,
      anchor: h
    });
    return j(!1), f
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some(v => v.startsWith("https://svelte.dev/e/"))) throw f;
    return f !== re && console.warn("Failed to hydrate: ", f), e.recover === !1 && Qe(), se(), et(s), j(!1), ut(r, e)
  } finally {
    j(n), J(g)
  }
}
const P = new Map;

function Fe(r, {
  target: e,
  anchor: s,
  props: n = {},
  events: g,
  context: h,
  intro: f = !0,
  transformError: v
}) {
  se();
  var d = void 0,
    _ = tt(() => {
      var $ = s ?? e.appendChild(Te());
      lt($, {
        pending: () => {}
      }, y => {
        nt({});
        var m = Re;
        if (h && (m.c = h), g && (n.$$events = g), O && at(y, null), ye = f, d = r(y, n) || {}, ye = !0, O && (M.nodes.end = S, S === null || S.nodeType !== De || S.data !== ht)) throw ft(), re;
        ot()
      }, v);
      var K = new Set,
        U = y => {
          for (var m = 0; m < y.length; m++) {
            var E = y[m];
            if (!K.has(E)) {
              K.add(E);
              var x = it(E);
              for (const X of [e, document]) {
                var T = P.get(X);
                T === void 0 && (T = new Map, P.set(X, T));
                var he = T.get(E);
                he === void 0 ? (X.addEventListener(E, be, {
                  passive: x
                }), T.set(E, 1)) : T.set(E, he + 1)
              }
            }
          }
        };
      return U(st(rt)), ve.add(U), () => {
        var x;
        for (var y of K)
          for (const T of [e, document]) {
            var m = P.get(T),
              E = m.get(y);
            --E == 0 ? (T.removeEventListener(y, be), m.delete(y), m.size === 0 && P.delete(T)) : m.set(y, E)
          }
        ve.delete(U), $ !== s && ((x = $.parentNode) == null || x.removeChild($))
      }
    });
  return ae.set(d, _), d
}
let ae = new WeakMap;

function yt(r, e) {
  const s = ae.get(r);
  return s ? (ae.delete(r), s(e)) : Promise.resolve()
}
export {
  ye as a, dt as c, bt as h, ut as m, vt as s, yt as u
};