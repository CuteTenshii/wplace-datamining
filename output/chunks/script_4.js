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
var L = (r, e, s) => Oe(r, typeof e != "symbol" ? e + "" : e, s),
  K = (r, e, s) => e.has(r) || fe("Cannot " + s);
var t = (r, e, s) => (K(r, e, "read from private field"), s ? s.call(r) : e.get(r)),
  o = (r, e, s) => e.has(r) ? fe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, s),
  i = (r, e, s, n) => (K(r, e, "write to private field"), n ? n.call(r, s) : e.set(r, s), s),
  l = (r, e, s) => (K(r, e, "access private method"), s);
import {
  aY as Ye,
  i as me,
  W as Ie,
  al as Ee,
  x as ke,
  aZ as oe,
  X as q,
  J as S,
  A as O,
  aC as x,
  a_ as de,
  C as Ce,
  B as Me,
  V as xe,
  a$ as _e,
  a3 as F,
  a2 as Te,
  b0 as Q,
  a1 as ee,
  a4 as He,
  b1 as le,
  b2 as Be,
  b3 as ce,
  b4 as $e,
  b5 as Le,
  b6 as ue,
  b7 as pe,
  b8 as ge,
  b9 as Ve,
  ba as We,
  M as Re,
  ac as je,
  a0 as te,
  G,
  n as qe,
  F as Pe,
  bb as V,
  E as ze,
  ax as Ge,
  bc as Je,
  bd as Ue,
  be as se,
  a9 as Xe,
  aa as we,
  I as Ze,
  ar as Ke,
  aF as re,
  H as W,
  bf as Qe,
  aq as et,
  bg as tt,
  ah as st,
  bh as rt,
  bi as ve,
  bj as be,
  bk as it,
  p as nt,
  aG as at,
  ab as ht,
  aE as ft,
  b as ot
} from "./C21-Odj5.js";

function dt(r) {
  let e = 0,
    s = Ee(0),
    n;
  return () => {
    Ye() && (me(s), Ie(() => (e === 0 && (n = ke(() => r(() => oe(s)))), e += 1, () => {
      q(() => {
        e -= 1, e === 0 && (n == null || n(), n = void 0, oe(s))
      })
    })))
  }
}
var _t = ze | Ge;

function lt(r, e, s, n) {
  new ct(r, e, s, n)
}
var u, H, R, Y, c, w, p, b, A, I, N, k, C, M, D, J, a, Ae, De, Ne, ie, P, z, ne;
class ct {
  constructor(e, s, n, g) {
    o(this, a);
    L(this, "parent");
    L(this, "is_pending", !1);
    L(this, "transform_error");
    o(this, u);
    o(this, H, O ? S : null);
    o(this, R);
    o(this, Y);
    o(this, c);
    o(this, w, null);
    o(this, p, null);
    o(this, b, null);
    o(this, A, null);
    o(this, I, 0);
    o(this, N, 0);
    o(this, k, !1);
    o(this, C, new Set);
    o(this, M, new Set);
    o(this, D, null);
    o(this, J, dt(() => (i(this, D, Ee(t(this, I))), () => {
      i(this, D, null)
    })));
    var h;
    i(this, u, e), i(this, R, s), i(this, Y, f => {
      var v = x;
      v.b = this, v.f |= de, n(f)
    }), this.parent = x.b, this.transform_error = g ?? ((h = this.parent) == null ? void 0 : h.transform_error) ?? (f => f), i(this, c, Ce(() => {
      if (O) {
        const f = t(this, H);
        Me();
        const v = f.data === xe;
        if (f.data.startsWith(_e)) {
          const _ = JSON.parse(f.data.slice(_e.length));
          l(this, a, De).call(this, _)
        } else v ? l(this, a, Ne).call(this) : l(this, a, Ae).call(this)
      } else l(this, a, ie).call(this)
    }, _t)), O && i(this, u, S)
  }
  defer_effect(e) {
    Le(e, t(this, C), t(this, M))
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered())
  }
  has_pending_snippet() {
    return !!t(this, R).pending
  }
  update_pending_count(e) {
    l(this, a, ne).call(this, e), i(this, I, t(this, I) + e), !(!t(this, D) || t(this, k)) && (i(this, k, !0), q(() => {
      i(this, k, !1), t(this, D) && je(t(this, D), t(this, I))
    }))
  }
  get_effect_pending() {
    return t(this, J).call(this), me(t(this, D))
  }
  error(e) {
    var s = t(this, R).onerror;
    let n = t(this, R).failed;
    if (!s && !n) throw e;
    t(this, w) && (te(t(this, w)), i(this, w, null)), t(this, p) && (te(t(this, p)), i(this, p, null)), t(this, b) && (te(t(this, b)), i(this, b, null)), O && (G(t(this, H)), qe(), G(Pe()));
    var g = !1,
      h = !1;
    const f = () => {
        if (g) {
          Ue();
          return
        }
        g = !0, h && Je(), t(this, b) !== null && ee(t(this, b), () => {
          i(this, b, null)
        }), l(this, a, z).call(this, () => {
          Q.ensure(), l(this, a, ie).call(this)
        })
      },
      v = d => {
        try {
          h = !0, s == null || s(d, f), h = !1
        } catch (_) {
          V(_, t(this, c) && t(this, c).parent)
        }
        n && i(this, b, l(this, a, z).call(this, () => {
          Q.ensure();
          try {
            return F(() => {
              var _ = x;
              _.b = this, _.f |= de, n(t(this, u), () => d, () => f)
            })
          } catch (_) {
            return V(_, t(this, c).parent), null
          }
        }))
      };
    q(() => {
      var d;
      try {
        d = this.transform_error(e)
      } catch (_) {
        V(_, t(this, c) && t(this, c).parent);
        return
      }
      d !== null && typeof d == "object" && typeof d.then == "function" ? d.then(v, _ => V(_, t(this, c) && t(this, c).parent)) : v(d)
    })
  }
}
u = new WeakMap, H = new WeakMap, R = new WeakMap, Y = new WeakMap, c = new WeakMap, w = new WeakMap, p = new WeakMap, b = new WeakMap, A = new WeakMap, I = new WeakMap, N = new WeakMap, k = new WeakMap, C = new WeakMap, M = new WeakMap, D = new WeakMap, J = new WeakMap, a = new WeakSet, Ae = function() {
  try {
    i(this, w, F(() => t(this, Y).call(this, t(this, u))))
  } catch (e) {
    this.error(e)
  }
}, De = function(e) {
  const s = t(this, R).failed;
  s && i(this, b, F(() => {
    s(t(this, u), () => e, () => () => {})
  }))
}, Ne = function() {
  const e = t(this, R).pending;
  e && (this.is_pending = !0, i(this, p, F(() => e(t(this, u)))), q(() => {
    var s = i(this, A, document.createDocumentFragment()),
      n = Te();
    s.append(n), i(this, w, l(this, a, z).call(this, () => (Q.ensure(), F(() => t(this, Y).call(this, n))))), t(this, N) === 0 && (t(this, u).before(s), i(this, A, null), ee(t(this, p), () => {
      i(this, p, null)
    }), l(this, a, P).call(this))
  }))
}, ie = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), i(this, N, 0), i(this, I, 0), i(this, w, F(() => {
        t(this, Y).call(this, t(this, u))
      })), t(this, N) > 0) {
      var e = i(this, A, document.createDocumentFragment());
      He(t(this, w), e);
      const s = t(this, R).pending;
      i(this, p, F(() => s(t(this, u))))
    } else l(this, a, P).call(this)
  } catch (s) {
    this.error(s)
  }
}, P = function() {
  this.is_pending = !1;
  for (const e of t(this, C)) le(e, Be), ce(e);
  for (const e of t(this, M)) le(e, $e), ce(e);
  t(this, C).clear(), t(this, M).clear()
}, z = function(e) {
  var s = x,
    n = We,
    g = Re;
  ue(t(this, c)), pe(t(this, c)), ge(t(this, c).ctx);
  try {
    return e()
  } catch (h) {
    return Ve(h), null
  } finally {
    ue(s), pe(n), ge(g)
  }
}, ne = function(e) {
  var s;
  if (!this.has_pending_snippet()) {
    this.parent && l(s = this.parent, a, ne).call(s, e);
    return
  }
  i(this, N, t(this, N) + e), t(this, N) === 0 && (l(this, a, P).call(this), t(this, p) && ee(t(this, p), () => {
    i(this, p, null)
  }), t(this, A) && (t(this, u).before(t(this, A)), i(this, A, null)))
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
    for (var h = Xe(s); h && (h.nodeType !== we || h.data !== Ze);) h = Ke(h);
    if (!h) throw re;
    W(!0), G(h);
    const f = Fe(r, {
      ...e,
      anchor: h
    });
    return W(!1), f
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some(v => v.startsWith("https://svelte.dev/e/"))) throw f;
    return f !== re && console.warn("Failed to hydrate: ", f), e.recover === !1 && Qe(), se(), et(s), W(!1), ut(r, e)
  } finally {
    W(n), G(g)
  }
}
const j = new Map;

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
      var B = s ?? e.appendChild(Te());
      lt(B, {
        pending: () => {}
      }, y => {
        nt({});
        var m = Re;
        if (h && (m.c = h), g && (n.$$events = g), O && at(y, null), ye = f, d = r(y, n) || {}, ye = !0, O && (x.nodes.end = S, S === null || S.nodeType !== we || S.data !== ht)) throw ft(), re;
        ot()
      }, v);
      var U = new Set,
        X = y => {
          for (var m = 0; m < y.length; m++) {
            var E = y[m];
            if (!U.has(E)) {
              U.add(E);
              var $ = it(E);
              for (const Z of [e, document]) {
                var T = j.get(Z);
                T === void 0 && (T = new Map, j.set(Z, T));
                var he = T.get(E);
                he === void 0 ? (Z.addEventListener(E, be, {
                  passive: $
                }), T.set(E, 1)) : T.set(E, he + 1)
              }
            }
          }
        };
      return X(st(rt)), ve.add(X), () => {
        var $;
        for (var y of U)
          for (const T of [e, document]) {
            var m = j.get(T),
              E = m.get(y);
            --E == 0 ? (T.removeEventListener(y, be), m.delete(y), m.size === 0 && j.delete(T)) : m.set(y, E)
          }
        ve.delete(X), B !== s && (($ = B.parentNode) == null || $.removeChild(B))
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