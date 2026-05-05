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
var $ = (r, e, s) => Oe(r, typeof e != "symbol" ? e + "" : e, s),
  Q = (r, e, s) => e.has(r) || fe("Cannot " + s);
var t = (r, e, s) => (Q(r, e, "read from private field"), s ? s.call(r) : e.get(r)),
  o = (r, e, s) => e.has(r) ? fe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, s),
  i = (r, e, s, n) => (Q(r, e, "write to private field"), n ? n.call(r, s) : e.set(r, s), s),
  l = (r, e, s) => (Q(r, e, "access private method"), s);
import {
  a$ as Ie,
  i as me,
  U as Ye,
  aj as Ee,
  x as ke,
  b0 as oe,
  V as P,
  I as S,
  z as O,
  aA as H,
  b1 as de,
  B as Ce,
  A as Me,
  T as He,
  b2 as _e,
  a1 as F,
  a0 as Te,
  b3 as X,
  _ as ee,
  a2 as xe,
  b4 as le,
  b5 as Be,
  b6 as ce,
  b7 as Le,
  b8 as $e,
  aM as ue,
  aL as pe,
  b9 as ge,
  ba as Ve,
  aN as je,
  K as Re,
  aa as ze,
  Z as te,
  F as U,
  n as Pe,
  D as We,
  bb as V,
  E as qe,
  av as Ue,
  bc as Ge,
  bd as Je,
  be as se,
  a7 as Ke,
  a8 as De,
  H as Ze,
  ap as Qe,
  aD as re,
  G as j,
  bf as Xe,
  ao as et,
  bg as tt,
  af as st,
  p as rt,
  aE as it,
  a9 as nt,
  aC as at,
  b as ht
} from "./wFsvFKKp.js";
import {
  b as ft,
  r as ve,
  h as be,
  i as ot
} from "./D2UtoGHN.js";

function dt(r) {
  let e = 0,
    s = Ee(0),
    n;
  return () => {
    Ie() && (me(s), Ye(() => (e === 0 && (n = ke(() => r(() => oe(s)))), e += 1, () => {
      P(() => {
        e -= 1, e === 0 && (n == null || n(), n = void 0, oe(s))
      })
    })))
  }
}
var _t = qe | Ue;

function lt(r, e, s, n) {
  new ct(r, e, s, n)
}
var u, x, R, I, c, D, p, b, A, Y, N, k, C, M, w, G, a, Ae, we, Ne, ie, W, q, ne;
class ct {
  constructor(e, s, n, g) {
    o(this, a);
    $(this, "parent");
    $(this, "is_pending", !1);
    $(this, "transform_error");
    o(this, u);
    o(this, x, O ? S : null);
    o(this, R);
    o(this, I);
    o(this, c);
    o(this, D, null);
    o(this, p, null);
    o(this, b, null);
    o(this, A, null);
    o(this, Y, 0);
    o(this, N, 0);
    o(this, k, !1);
    o(this, C, new Set);
    o(this, M, new Set);
    o(this, w, null);
    o(this, G, dt(() => (i(this, w, Ee(t(this, Y))), () => {
      i(this, w, null)
    })));
    var h;
    i(this, u, e), i(this, R, s), i(this, I, f => {
      var v = H;
      v.b = this, v.f |= de, n(f)
    }), this.parent = H.b, this.transform_error = g ?? ((h = this.parent) == null ? void 0 : h.transform_error) ?? (f => f), i(this, c, Ce(() => {
      if (O) {
        const f = t(this, x);
        Me();
        const v = f.data === He;
        if (f.data.startsWith(_e)) {
          const _ = JSON.parse(f.data.slice(_e.length));
          l(this, a, we).call(this, _)
        } else v ? l(this, a, Ne).call(this) : l(this, a, Ae).call(this)
      } else l(this, a, ie).call(this)
    }, _t)), O && i(this, u, S)
  }
  defer_effect(e) {
    $e(e, t(this, C), t(this, M))
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered())
  }
  has_pending_snippet() {
    return !!t(this, R).pending
  }
  update_pending_count(e) {
    l(this, a, ne).call(this, e), i(this, Y, t(this, Y) + e), !(!t(this, w) || t(this, k)) && (i(this, k, !0), P(() => {
      i(this, k, !1), t(this, w) && ze(t(this, w), t(this, Y))
    }))
  }
  get_effect_pending() {
    return t(this, G).call(this), me(t(this, w))
  }
  error(e) {
    var s = t(this, R).onerror;
    let n = t(this, R).failed;
    if (!s && !n) throw e;
    t(this, D) && (te(t(this, D)), i(this, D, null)), t(this, p) && (te(t(this, p)), i(this, p, null)), t(this, b) && (te(t(this, b)), i(this, b, null)), O && (U(t(this, x)), Pe(), U(We()));
    var g = !1,
      h = !1;
    const f = () => {
        if (g) {
          Je();
          return
        }
        g = !0, h && Ge(), t(this, b) !== null && ee(t(this, b), () => {
          i(this, b, null)
        }), l(this, a, q).call(this, () => {
          X.ensure(), l(this, a, ie).call(this)
        })
      },
      v = d => {
        try {
          h = !0, s == null || s(d, f), h = !1
        } catch (_) {
          V(_, t(this, c) && t(this, c).parent)
        }
        n && i(this, b, l(this, a, q).call(this, () => {
          X.ensure();
          try {
            return F(() => {
              var _ = H;
              _.b = this, _.f |= de, n(t(this, u), () => d, () => f)
            })
          } catch (_) {
            return V(_, t(this, c).parent), null
          }
        }))
      };
    P(() => {
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
u = new WeakMap, x = new WeakMap, R = new WeakMap, I = new WeakMap, c = new WeakMap, D = new WeakMap, p = new WeakMap, b = new WeakMap, A = new WeakMap, Y = new WeakMap, N = new WeakMap, k = new WeakMap, C = new WeakMap, M = new WeakMap, w = new WeakMap, G = new WeakMap, a = new WeakSet, Ae = function() {
  try {
    i(this, D, F(() => t(this, I).call(this, t(this, u))))
  } catch (e) {
    this.error(e)
  }
}, we = function(e) {
  const s = t(this, R).failed;
  s && i(this, b, F(() => {
    s(t(this, u), () => e, () => () => {})
  }))
}, Ne = function() {
  const e = t(this, R).pending;
  e && (this.is_pending = !0, i(this, p, F(() => e(t(this, u)))), P(() => {
    var s = i(this, A, document.createDocumentFragment()),
      n = Te();
    s.append(n), i(this, D, l(this, a, q).call(this, () => (X.ensure(), F(() => t(this, I).call(this, n))))), t(this, N) === 0 && (t(this, u).before(s), i(this, A, null), ee(t(this, p), () => {
      i(this, p, null)
    }), l(this, a, W).call(this))
  }))
}, ie = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), i(this, N, 0), i(this, Y, 0), i(this, D, F(() => {
        t(this, I).call(this, t(this, u))
      })), t(this, N) > 0) {
      var e = i(this, A, document.createDocumentFragment());
      xe(t(this, D), e);
      const s = t(this, R).pending;
      i(this, p, F(() => s(t(this, u))))
    } else l(this, a, W).call(this)
  } catch (s) {
    this.error(s)
  }
}, W = function() {
  this.is_pending = !1;
  for (const e of t(this, C)) le(e, Be), ce(e);
  for (const e of t(this, M)) le(e, Le), ce(e);
  t(this, C).clear(), t(this, M).clear()
}, q = function(e) {
  var s = H,
    n = je,
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
  i(this, N, t(this, N) + e), t(this, N) === 0 && (l(this, a, W).call(this), t(this, p) && ee(t(this, p), () => {
    i(this, p, null)
  }), t(this, A) && (t(this, u).before(t(this, A)), i(this, A, null)))
};
let ye = !0;

function bt(r, e) {
  var s = e == null ? "" : typeof e == "object" ? `${e}` : e;
  s !== (r.__t ?? (r.__t = r.nodeValue)) && (r.__t = s, r.nodeValue = `${s}`)
}

function ut(r, e) {
  return Fe(r, e)
}

function yt(r, e) {
  se(), e.intro = e.intro ?? !1;
  const s = e.target,
    n = O,
    g = S;
  try {
    for (var h = Ke(s); h && (h.nodeType !== De || h.data !== Ze);) h = Qe(h);
    if (!h) throw re;
    j(!0), U(h);
    const f = Fe(r, {
      ...e,
      anchor: h
    });
    return j(!1), f
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some(v => v.startsWith("https://svelte.dev/e/"))) throw f;
    return f !== re && console.warn("Failed to hydrate: ", f), e.recover === !1 && Xe(), se(), et(s), j(!1), ut(r, e)
  } finally {
    j(n), U(g)
  }
}
const z = new Map;

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
        rt({});
        var m = Re;
        if (h && (m.c = h), g && (n.$$events = g), O && it(y, null), ye = f, d = r(y, n) || {}, ye = !0, O && (H.nodes.end = S, S === null || S.nodeType !== De || S.data !== nt)) throw at(), re;
        ht()
      }, v);
      var J = new Set,
        K = y => {
          for (var m = 0; m < y.length; m++) {
            var E = y[m];
            if (!J.has(E)) {
              J.add(E);
              var L = ot(E);
              for (const Z of [e, document]) {
                var T = z.get(Z);
                T === void 0 && (T = new Map, z.set(Z, T));
                var he = T.get(E);
                he === void 0 ? (Z.addEventListener(E, be, {
                  passive: L
                }), T.set(E, 1)) : T.set(E, he + 1)
              }
            }
          }
        };
      return K(st(ft)), ve.add(K), () => {
        var L;
        for (var y of J)
          for (const T of [e, document]) {
            var m = z.get(T),
              E = m.get(y);
            --E == 0 ? (T.removeEventListener(y, be), m.delete(y), m.size === 0 && z.delete(T)) : m.set(y, E)
          }
        ve.delete(K), B !== s && ((L = B.parentNode) == null || L.removeChild(B))
      }
    });
  return ae.set(d, _), d
}
let ae = new WeakMap;

function mt(r, e) {
  const s = ae.get(r);
  return s ? (ae.delete(r), s(e)) : Promise.resolve()
}
export {
  ye as a, dt as c, yt as h, ut as m, bt as s, mt as u
};