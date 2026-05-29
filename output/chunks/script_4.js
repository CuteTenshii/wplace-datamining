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
var V = (r, e, s) => Oe(r, typeof e != "symbol" ? e + "" : e, s),
  K = (r, e, s) => e.has(r) || fe("Cannot " + s);
var t = (r, e, s) => (K(r, e, "read from private field"), s ? s.call(r) : e.get(r)),
  o = (r, e, s) => e.has(r) ? fe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, s),
  i = (r, e, s, n) => (K(r, e, "write to private field"), n ? n.call(r, s) : e.set(r, s), s),
  l = (r, e, s) => (K(r, e, "access private method"), s);
import {
  aV as Ye,
  i as me,
  U as Ie,
  aj as Ee,
  L as ke,
  aW as oe,
  V as z,
  F as S,
  x as O,
  aB as H,
  aX as de,
  z as Ce,
  y as Be,
  T as He,
  aY as _e,
  a1 as F,
  a0 as Te,
  aZ as Q,
  _ as ee,
  a2 as Me,
  a_ as le,
  a$ as xe,
  b0 as ce,
  b1 as Le,
  b2 as Ve,
  b3 as ue,
  b4 as pe,
  b5 as ge,
  b6 as $e,
  b7 as We,
  J as Re,
  aa as je,
  Z as te,
  C as J,
  n as ze,
  B as Pe,
  b8 as $,
  E as qe,
  aw as Je,
  b9 as Ue,
  ba as Ze,
  bb as se,
  a7 as Xe,
  a8 as De,
  H as Ge,
  ap as Ke,
  aE as re,
  D as W,
  bc as Qe,
  ao as et,
  bd as tt,
  af as st,
  be as rt,
  bf as ve,
  bg as be,
  bh as it,
  p as nt,
  aF as at,
  a9 as ht,
  aD as ft,
  b as ot
} from "./Dbe4PVAU.js";

function dt(r) {
  let e = 0,
    s = Ee(0),
    n;
  return () => {
    Ye() && (me(s), Ie(() => (e === 0 && (n = ke(() => r(() => oe(s)))), e += 1, () => {
      z(() => {
        e -= 1, e === 0 && (n == null || n(), n = void 0, oe(s))
      })
    })))
  }
}
var _t = qe | Je;

function lt(r, e, s, n) {
  new ct(r, e, s, n)
}
var u, M, R, Y, c, D, p, b, w, I, N, k, C, B, A, U, a, we, Ae, Ne, ie, P, q, ne;
class ct {
  constructor(e, s, n, g) {
    o(this, a);
    V(this, "parent");
    V(this, "is_pending", !1);
    V(this, "transform_error");
    o(this, u);
    o(this, M, O ? S : null);
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
    o(this, B, new Set);
    o(this, A, null);
    o(this, U, dt(() => (i(this, A, Ee(t(this, I))), () => {
      i(this, A, null)
    })));
    var h;
    i(this, u, e), i(this, R, s), i(this, Y, f => {
      var v = H;
      v.b = this, v.f |= de, n(f)
    }), this.parent = H.b, this.transform_error = g ?? ((h = this.parent) == null ? void 0 : h.transform_error) ?? (f => f), i(this, c, Ce(() => {
      if (O) {
        const f = t(this, M);
        Be();
        const v = f.data === He;
        if (f.data.startsWith(_e)) {
          const _ = JSON.parse(f.data.slice(_e.length));
          l(this, a, Ae).call(this, _)
        } else v ? l(this, a, Ne).call(this) : l(this, a, we).call(this)
      } else l(this, a, ie).call(this)
    }, _t)), O && i(this, u, S)
  }
  defer_effect(e) {
    Ve(e, t(this, C), t(this, B))
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered())
  }
  has_pending_snippet() {
    return !!t(this, R).pending
  }
  update_pending_count(e) {
    l(this, a, ne).call(this, e), i(this, I, t(this, I) + e), !(!t(this, A) || t(this, k)) && (i(this, k, !0), z(() => {
      i(this, k, !1), t(this, A) && je(t(this, A), t(this, I))
    }))
  }
  get_effect_pending() {
    return t(this, U).call(this), me(t(this, A))
  }
  error(e) {
    var s = t(this, R).onerror;
    let n = t(this, R).failed;
    if (!s && !n) throw e;
    t(this, D) && (te(t(this, D)), i(this, D, null)), t(this, p) && (te(t(this, p)), i(this, p, null)), t(this, b) && (te(t(this, b)), i(this, b, null)), O && (J(t(this, M)), ze(), J(Pe()));
    var g = !1,
      h = !1;
    const f = () => {
        if (g) {
          Ze();
          return
        }
        g = !0, h && Ue(), t(this, b) !== null && ee(t(this, b), () => {
          i(this, b, null)
        }), l(this, a, q).call(this, () => {
          Q.ensure(), l(this, a, ie).call(this)
        })
      },
      v = d => {
        try {
          h = !0, s == null || s(d, f), h = !1
        } catch (_) {
          $(_, t(this, c) && t(this, c).parent)
        }
        n && i(this, b, l(this, a, q).call(this, () => {
          Q.ensure();
          try {
            return F(() => {
              var _ = H;
              _.b = this, _.f |= de, n(t(this, u), () => d, () => f)
            })
          } catch (_) {
            return $(_, t(this, c).parent), null
          }
        }))
      };
    z(() => {
      var d;
      try {
        d = this.transform_error(e)
      } catch (_) {
        $(_, t(this, c) && t(this, c).parent);
        return
      }
      d !== null && typeof d == "object" && typeof d.then == "function" ? d.then(v, _ => $(_, t(this, c) && t(this, c).parent)) : v(d)
    })
  }
}
u = new WeakMap, M = new WeakMap, R = new WeakMap, Y = new WeakMap, c = new WeakMap, D = new WeakMap, p = new WeakMap, b = new WeakMap, w = new WeakMap, I = new WeakMap, N = new WeakMap, k = new WeakMap, C = new WeakMap, B = new WeakMap, A = new WeakMap, U = new WeakMap, a = new WeakSet, we = function() {
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
  e && (this.is_pending = !0, i(this, p, F(() => e(t(this, u)))), z(() => {
    var s = i(this, w, document.createDocumentFragment()),
      n = Te();
    s.append(n), i(this, D, l(this, a, q).call(this, () => (Q.ensure(), F(() => t(this, Y).call(this, n))))), t(this, N) === 0 && (t(this, u).before(s), i(this, w, null), ee(t(this, p), () => {
      i(this, p, null)
    }), l(this, a, P).call(this))
  }))
}, ie = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), i(this, N, 0), i(this, I, 0), i(this, D, F(() => {
        t(this, Y).call(this, t(this, u))
      })), t(this, N) > 0) {
      var e = i(this, w, document.createDocumentFragment());
      Me(t(this, D), e);
      const s = t(this, R).pending;
      i(this, p, F(() => s(t(this, u))))
    } else l(this, a, P).call(this)
  } catch (s) {
    this.error(s)
  }
}, P = function() {
  this.is_pending = !1;
  for (const e of t(this, C)) le(e, xe), ce(e);
  for (const e of t(this, B)) le(e, Le), ce(e);
  t(this, C).clear(), t(this, B).clear()
}, q = function(e) {
  var s = H,
    n = We,
    g = Re;
  ue(t(this, c)), pe(t(this, c)), ge(t(this, c).ctx);
  try {
    return e()
  } catch (h) {
    return $e(h), null
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
    for (var h = Xe(s); h && (h.nodeType !== De || h.data !== Ge);) h = Ke(h);
    if (!h) throw re;
    W(!0), J(h);
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
    W(n), J(g)
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
      var x = s ?? e.appendChild(Te());
      lt(x, {
        pending: () => {}
      }, y => {
        nt({});
        var m = Re;
        if (h && (m.c = h), g && (n.$$events = g), O && at(y, null), ye = f, d = r(y, n) || {}, ye = !0, O && (H.nodes.end = S, S === null || S.nodeType !== De || S.data !== ht)) throw ft(), re;
        ot()
      }, v);
      var Z = new Set,
        X = y => {
          for (var m = 0; m < y.length; m++) {
            var E = y[m];
            if (!Z.has(E)) {
              Z.add(E);
              var L = it(E);
              for (const G of [e, document]) {
                var T = j.get(G);
                T === void 0 && (T = new Map, j.set(G, T));
                var he = T.get(E);
                he === void 0 ? (G.addEventListener(E, be, {
                  passive: L
                }), T.set(E, 1)) : T.set(E, he + 1)
              }
            }
          }
        };
      return X(st(rt)), ve.add(X), () => {
        var L;
        for (var y of Z)
          for (const T of [e, document]) {
            var m = j.get(T),
              E = m.get(y);
            --E == 0 ? (T.removeEventListener(y, be), m.delete(y), m.size === 0 && j.delete(T)) : m.set(y, E)
          }
        ve.delete(X), x !== s && ((L = x.parentNode) == null || L.removeChild(x))
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