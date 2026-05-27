var Fe = Object.defineProperty;
var fe = r => {
  throw TypeError(r)
};
var Ye = (r, e, s) => e in r ? Fe(r, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : r[e] = s;
var L = (r, e, s) => Ye(r, typeof e != "symbol" ? e + "" : e, s),
  U = (r, e, s) => e.has(r) || fe("Cannot " + s);
var t = (r, e, s) => (U(r, e, "read from private field"), s ? s.call(r) : e.get(r)),
  o = (r, e, s) => e.has(r) ? fe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, s),
  i = (r, e, s, n) => (U(r, e, "write to private field"), n ? n.call(r, s) : e.set(r, s), s),
  l = (r, e, s) => (U(r, e, "access private method"), s);
import {
  aX as Ie,
  i as me,
  R as Oe,
  ag as Ee,
  I as ke,
  aY as oe,
  S as P,
  B as F,
  q as Y,
  ay as H,
  aZ as _e,
  w as Ce,
  v as Be,
  Q as He,
  a_ as de,
  Z as S,
  Y as Te,
  a$ as G,
  X as ee,
  _ as Me,
  b0 as le,
  b1 as $e,
  b2 as ce,
  b3 as xe,
  b4 as Le,
  aJ as ue,
  aI as pe,
  b5 as ge,
  b6 as We,
  aK as qe,
  F as Re,
  a7 as ze,
  W as te,
  z as J,
  n as Pe,
  y as Ve,
  b7 as W,
  E as je,
  at as Je,
  b8 as Xe,
  b9 as Ze,
  ba as se,
  a4 as Ke,
  a5 as we,
  H as Qe,
  am as Ue,
  aB as re,
  A as q,
  bb as Ge,
  al as et,
  bc as tt,
  ac as st,
  p as rt,
  aC as it,
  a6 as nt,
  aA as at,
  b as ht
} from "./Cky4CUzE.js";
import {
  b as ft,
  r as ve,
  h as ye,
  i as ot
} from "./rpJmCiEU.js";

function _t(r) {
  let e = 0,
    s = Ee(0),
    n;
  return () => {
    Ie() && (me(s), Oe(() => (e === 0 && (n = ke(() => r(() => oe(s)))), e += 1, () => {
      P(() => {
        e -= 1, e === 0 && (n == null || n(), n = void 0, oe(s))
      })
    })))
  }
}
var dt = je | Je;

function lt(r, e, s, n) {
  new ct(r, e, s, n)
}
var u, M, R, I, c, w, p, y, A, O, N, k, C, B, D, X, a, Ae, De, Ne, ie, V, j, ne;
class ct {
  constructor(e, s, n, g) {
    o(this, a);
    L(this, "parent");
    L(this, "is_pending", !1);
    L(this, "transform_error");
    o(this, u);
    o(this, M, Y ? F : null);
    o(this, R);
    o(this, I);
    o(this, c);
    o(this, w, null);
    o(this, p, null);
    o(this, y, null);
    o(this, A, null);
    o(this, O, 0);
    o(this, N, 0);
    o(this, k, !1);
    o(this, C, new Set);
    o(this, B, new Set);
    o(this, D, null);
    o(this, X, _t(() => (i(this, D, Ee(t(this, O))), () => {
      i(this, D, null)
    })));
    var h;
    i(this, u, e), i(this, R, s), i(this, I, f => {
      var v = H;
      v.b = this, v.f |= _e, n(f)
    }), this.parent = H.b, this.transform_error = g ?? ((h = this.parent) == null ? void 0 : h.transform_error) ?? (f => f), i(this, c, Ce(() => {
      if (Y) {
        const f = t(this, M);
        Be();
        const v = f.data === He;
        if (f.data.startsWith(de)) {
          const d = JSON.parse(f.data.slice(de.length));
          l(this, a, De).call(this, d)
        } else v ? l(this, a, Ne).call(this) : l(this, a, Ae).call(this)
      } else l(this, a, ie).call(this)
    }, dt)), Y && i(this, u, F)
  }
  defer_effect(e) {
    Le(e, t(this, C), t(this, B))
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered())
  }
  has_pending_snippet() {
    return !!t(this, R).pending
  }
  update_pending_count(e) {
    l(this, a, ne).call(this, e), i(this, O, t(this, O) + e), !(!t(this, D) || t(this, k)) && (i(this, k, !0), P(() => {
      i(this, k, !1), t(this, D) && ze(t(this, D), t(this, O))
    }))
  }
  get_effect_pending() {
    return t(this, X).call(this), me(t(this, D))
  }
  error(e) {
    var s = t(this, R).onerror;
    let n = t(this, R).failed;
    if (!s && !n) throw e;
    t(this, w) && (te(t(this, w)), i(this, w, null)), t(this, p) && (te(t(this, p)), i(this, p, null)), t(this, y) && (te(t(this, y)), i(this, y, null)), Y && (J(t(this, M)), Pe(), J(Ve()));
    var g = !1,
      h = !1;
    const f = () => {
        if (g) {
          Ze();
          return
        }
        g = !0, h && Xe(), t(this, y) !== null && ee(t(this, y), () => {
          i(this, y, null)
        }), l(this, a, j).call(this, () => {
          G.ensure(), l(this, a, ie).call(this)
        })
      },
      v = _ => {
        try {
          h = !0, s == null || s(_, f), h = !1
        } catch (d) {
          W(d, t(this, c) && t(this, c).parent)
        }
        n && i(this, y, l(this, a, j).call(this, () => {
          G.ensure();
          try {
            return S(() => {
              var d = H;
              d.b = this, d.f |= _e, n(t(this, u), () => _, () => f)
            })
          } catch (d) {
            return W(d, t(this, c).parent), null
          }
        }))
      };
    P(() => {
      var _;
      try {
        _ = this.transform_error(e)
      } catch (d) {
        W(d, t(this, c) && t(this, c).parent);
        return
      }
      _ !== null && typeof _ == "object" && typeof _.then == "function" ? _.then(v, d => W(d, t(this, c) && t(this, c).parent)) : v(_)
    })
  }
}
u = new WeakMap, M = new WeakMap, R = new WeakMap, I = new WeakMap, c = new WeakMap, w = new WeakMap, p = new WeakMap, y = new WeakMap, A = new WeakMap, O = new WeakMap, N = new WeakMap, k = new WeakMap, C = new WeakMap, B = new WeakMap, D = new WeakMap, X = new WeakMap, a = new WeakSet, Ae = function() {
  try {
    i(this, w, S(() => t(this, I).call(this, t(this, u))))
  } catch (e) {
    this.error(e)
  }
}, De = function(e) {
  const s = t(this, R).failed;
  s && i(this, y, S(() => {
    s(t(this, u), () => e, () => () => {})
  }))
}, Ne = function() {
  const e = t(this, R).pending;
  e && (this.is_pending = !0, i(this, p, S(() => e(t(this, u)))), P(() => {
    var s = i(this, A, document.createDocumentFragment()),
      n = Te();
    s.append(n), i(this, w, l(this, a, j).call(this, () => (G.ensure(), S(() => t(this, I).call(this, n))))), t(this, N) === 0 && (t(this, u).before(s), i(this, A, null), ee(t(this, p), () => {
      i(this, p, null)
    }), l(this, a, V).call(this))
  }))
}, ie = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), i(this, N, 0), i(this, O, 0), i(this, w, S(() => {
        t(this, I).call(this, t(this, u))
      })), t(this, N) > 0) {
      var e = i(this, A, document.createDocumentFragment());
      Me(t(this, w), e);
      const s = t(this, R).pending;
      i(this, p, S(() => s(t(this, u))))
    } else l(this, a, V).call(this)
  } catch (s) {
    this.error(s)
  }
}, V = function() {
  this.is_pending = !1;
  for (const e of t(this, C)) le(e, $e), ce(e);
  for (const e of t(this, B)) le(e, xe), ce(e);
  t(this, C).clear(), t(this, B).clear()
}, j = function(e) {
  var s = H,
    n = qe,
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
  i(this, N, t(this, N) + e), t(this, N) === 0 && (l(this, a, V).call(this), t(this, p) && ee(t(this, p), () => {
    i(this, p, null)
  }), t(this, A) && (t(this, u).before(t(this, A)), i(this, A, null)))
};
let be = !0;

function yt(r, e) {
  var s = e == null ? "" : typeof e == "object" ? `${e}` : e;
  s !== (r.__t ?? (r.__t = r.nodeValue)) && (r.__t = s, r.nodeValue = `${s}`)
}

function ut(r, e) {
  return Se(r, e)
}

function bt(r, e) {
  se(), e.intro = e.intro ?? !1;
  const s = e.target,
    n = Y,
    g = F;
  try {
    for (var h = Ke(s); h && (h.nodeType !== we || h.data !== Qe);) h = Ue(h);
    if (!h) throw re;
    q(!0), J(h);
    const f = Se(r, {
      ...e,
      anchor: h
    });
    return q(!1), f
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some(v => v.startsWith("https://svelte.dev/e/"))) throw f;
    return f !== re && console.warn("Failed to hydrate: ", f), e.recover === !1 && Ge(), se(), et(s), q(!1), ut(r, e)
  } finally {
    q(n), J(g)
  }
}
const z = new Map;

function Se(r, {
  target: e,
  anchor: s,
  props: n = {},
  events: g,
  context: h,
  intro: f = !0,
  transformError: v
}) {
  se();
  var _ = void 0,
    d = tt(() => {
      var $ = s ?? e.appendChild(Te());
      lt($, {
        pending: () => {}
      }, b => {
        rt({});
        var m = Re;
        if (h && (m.c = h), g && (n.$$events = g), Y && it(b, null), be = f, _ = r(b, n) || {}, be = !0, Y && (H.nodes.end = F, F === null || F.nodeType !== we || F.data !== nt)) throw at(), re;
        ht()
      }, v);
      var Z = new Set,
        K = b => {
          for (var m = 0; m < b.length; m++) {
            var E = b[m];
            if (!Z.has(E)) {
              Z.add(E);
              var x = ot(E);
              for (const Q of [e, document]) {
                var T = z.get(Q);
                T === void 0 && (T = new Map, z.set(Q, T));
                var he = T.get(E);
                he === void 0 ? (Q.addEventListener(E, ye, {
                  passive: x
                }), T.set(E, 1)) : T.set(E, he + 1)
              }
            }
          }
        };
      return K(st(ft)), ve.add(K), () => {
        var x;
        for (var b of Z)
          for (const T of [e, document]) {
            var m = z.get(T),
              E = m.get(b);
            --E == 0 ? (T.removeEventListener(b, ye), m.delete(b), m.size === 0 && z.delete(T)) : m.set(b, E)
          }
        ve.delete(K), $ !== s && ((x = $.parentNode) == null || x.removeChild($))
      }
    });
  return ae.set(_, d), _
}
let ae = new WeakMap;

function mt(r, e) {
  const s = ae.get(r);
  return s ? (ae.delete(r), s(e)) : Promise.resolve()
}
export {
  be as a, _t as c, bt as h, ut as m, yt as s, mt as u
};