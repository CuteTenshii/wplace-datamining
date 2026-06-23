var ke = Object.defineProperty;
var oe = i => {
  throw TypeError(i)
};
var Oe = (i, e, s) => e in i ? ke(i, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : i[e] = s;
var B = (i, e, s) => Oe(i, typeof e != "symbol" ? e + "" : e, s),
  G = (i, e, s) => e.has(i) || oe("Cannot " + s);
var t = (i, e, s) => (G(i, e, "read from private field"), s ? s.call(i) : e.get(i)),
  o = (i, e, s) => e.has(i) ? oe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, s),
  n = (i, e, s, r) => (G(i, e, "write to private field"), r ? r.call(i, s) : e.set(i, s), s),
  d = (i, e, s) => (G(i, e, "access private method"), s);
import {
  aT as Fe,
  i as me,
  S as Ce,
  aj as Te,
  B as Ye,
  aU as de,
  an as j,
  Q as O,
  J as F,
  T as H,
  aV as _e,
  I as Ie,
  K as He,
  a7 as xe,
  aW as le,
  _ as S,
  Z as Ee,
  Y as ee,
  a0 as k,
  a1 as Le,
  aX as Me,
  aY as ce,
  aZ as ue,
  a_ as pe,
  a$ as $e,
  b0 as ze,
  b1 as Be,
  z as Re,
  aa as Pe,
  X as te,
  O as J,
  n as Ve,
  N as We,
  b2 as P,
  L as je,
  b3 as qe,
  b4 as Xe,
  b5 as Je,
  b6 as ge,
  b7 as se,
  a6 as Ue,
  a8 as we,
  R as Ze,
  ar as Ke,
  aA as ie,
  P as V,
  b8 as Qe,
  aq as Ge,
  b9 as et,
  af as tt,
  ba as st,
  bb as ve,
  bc as ye,
  bd as it,
  p as rt,
  ax as nt,
  a9 as at,
  az as ht,
  b as ft
} from "./BIlwexl9.js";

function ot(i) {
  let e = 0,
    s = Te(0),
    r;
  return () => {
    Fe() && (me(s), Ce(() => (e === 0 && (r = Ye(() => i(() => de(s)))), e += 1, () => {
      j(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, de(s))
      })
    })))
  }
}
var dt = je | qe;

function _t(i, e, s, r) {
  new lt(i, e, s, r)
}
var p, x, v, C, u, y, _, g, A, Y, D, I, L, M, N, U, a, Ae, Ne, De, re, q, X, ne, ae;
class lt {
  constructor(e, s, r, b) {
    o(this, a);
    B(this, "parent");
    B(this, "is_pending", !1);
    B(this, "transform_error");
    o(this, p);
    o(this, x, F ? O : null);
    o(this, v);
    o(this, C);
    o(this, u);
    o(this, y, null);
    o(this, _, null);
    o(this, g, null);
    o(this, A, null);
    o(this, Y, 0);
    o(this, D, 0);
    o(this, I, !1);
    o(this, L, new Set);
    o(this, M, new Set);
    o(this, N, null);
    o(this, U, ot(() => (n(this, N, Te(t(this, Y))), () => {
      n(this, N, null)
    })));
    var h;
    n(this, p, e), n(this, v, s), n(this, C, f => {
      var m = H;
      m.b = this, m.f |= _e, r(f)
    }), this.parent = H.b, this.transform_error = b ?? ((h = this.parent) == null ? void 0 : h.transform_error) ?? (f => f), n(this, u, Ie(() => {
      if (F) {
        const f = t(this, x);
        He();
        const m = f.data === xe;
        if (f.data.startsWith(le)) {
          const c = JSON.parse(f.data.slice(le.length));
          d(this, a, Ne).call(this, c)
        } else m ? d(this, a, De).call(this) : d(this, a, Ae).call(this)
      } else d(this, a, re).call(this)
    }, dt)), F && n(this, p, O)
  }
  defer_effect(e) {
    Me(e, t(this, L), t(this, M))
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered())
  }
  has_pending_snippet() {
    return !!t(this, v).pending
  }
  update_pending_count(e, s) {
    d(this, a, ne).call(this, e, s), n(this, Y, t(this, Y) + e), !(!t(this, N) || t(this, I)) && (n(this, I, !0), j(() => {
      n(this, I, !1), t(this, N) && Pe(t(this, N), t(this, Y))
    }))
  }
  get_effect_pending() {
    return t(this, U).call(this), me(t(this, N))
  }
  error(e) {
    var s;
    if (!t(this, v).onerror && !t(this, v).failed) throw e;
    (s = k) != null && s.is_fork ? (t(this, y) && k.skip_effect(t(this, y)), t(this, _) && k.skip_effect(t(this, _)), t(this, g) && k.skip_effect(t(this, g)), k.oncommit(() => {
      d(this, a, ae).call(this, e)
    })) : d(this, a, ae).call(this, e)
  }
}
p = new WeakMap, x = new WeakMap, v = new WeakMap, C = new WeakMap, u = new WeakMap, y = new WeakMap, _ = new WeakMap, g = new WeakMap, A = new WeakMap, Y = new WeakMap, D = new WeakMap, I = new WeakMap, L = new WeakMap, M = new WeakMap, N = new WeakMap, U = new WeakMap, a = new WeakSet, Ae = function() {
  try {
    n(this, y, S(() => t(this, C).call(this, t(this, p))))
  } catch (e) {
    this.error(e)
  }
}, Ne = function(e) {
  const s = t(this, v).failed;
  s && n(this, g, S(() => {
    s(t(this, p), () => e, () => () => {})
  }))
}, De = function() {
  const e = t(this, v).pending;
  e && (this.is_pending = !0, n(this, _, S(() => e(t(this, p)))), j(() => {
    var s = n(this, A, document.createDocumentFragment()),
      r = Ee();
    s.append(r), n(this, y, d(this, a, X).call(this, () => S(() => t(this, C).call(this, r)))), t(this, D) === 0 && (t(this, p).before(s), n(this, A, null), ee(t(this, _), () => {
      n(this, _, null)
    }), d(this, a, q).call(this, k))
  }))
}, re = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), n(this, D, 0), n(this, Y, 0), n(this, y, S(() => {
        t(this, C).call(this, t(this, p))
      })), t(this, D) > 0) {
      var e = n(this, A, document.createDocumentFragment());
      Le(t(this, y), e);
      const s = t(this, v).pending;
      n(this, _, S(() => s(t(this, p))))
    } else d(this, a, q).call(this, k)
  } catch (s) {
    this.error(s)
  }
}, q = function(e) {
  this.is_pending = !1, e.transfer_effects(t(this, L), t(this, M))
}, X = function(e) {
  var s = H,
    r = Be,
    b = Re;
  ce(t(this, u)), ue(t(this, u)), pe(t(this, u).ctx);
  try {
    return $e.ensure(), e()
  } catch (h) {
    return ze(h), null
  } finally {
    ce(s), ue(r), pe(b)
  }
}, ne = function(e, s) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && d(r = this.parent, a, ne).call(r, e, s);
    return
  }
  n(this, D, t(this, D) + e), t(this, D) === 0 && (d(this, a, q).call(this, s), t(this, _) && ee(t(this, _), () => {
    n(this, _, null)
  }), t(this, A) && (t(this, p).before(t(this, A)), n(this, A, null)))
}, ae = function(e) {
  t(this, y) && (te(t(this, y)), n(this, y, null)), t(this, _) && (te(t(this, _)), n(this, _, null)), t(this, g) && (te(t(this, g)), n(this, g, null)), F && (J(t(this, x)), Ve(), J(We()));
  var s = t(this, v).onerror;
  let r = t(this, v).failed;
  var b = !1,
    h = !1;
  const f = () => {
      if (b) {
        Je();
        return
      }
      b = !0, h && Xe(), t(this, g) !== null && ee(t(this, g), () => {
        n(this, g, null)
      }), d(this, a, X).call(this, () => {
        d(this, a, re).call(this)
      })
    },
    m = l => {
      try {
        h = !0, s == null || s(l, f), h = !1
      } catch (c) {
        P(c, t(this, u) && t(this, u).parent)
      }
      r && n(this, g, d(this, a, X).call(this, () => {
        try {
          return S(() => {
            var c = H;
            c.b = this, c.f |= _e, r(t(this, p), () => l, () => f)
          })
        } catch (c) {
          return P(c, t(this, u).parent), null
        }
      }))
    };
  j(() => {
    var l;
    try {
      l = this.transform_error(e)
    } catch (c) {
      P(c, t(this, u) && t(this, u).parent);
      return
    }
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(m, c => P(c, t(this, u) && t(this, u).parent)) : m(l)
  })
};
let be = !0;

function gt(i, e) {
  var r;
  var s = e == null ? "" : typeof e == "object" ? `${e}` : e;
  s !== (i[r = ge] ?? (i[r] = i.nodeValue)) && (i[ge] = s, i.nodeValue = `${s}`)
}

function ct(i, e) {
  return Se(i, e)
}

function vt(i, e) {
  se(), e.intro = e.intro ?? !1;
  const s = e.target,
    r = F,
    b = O;
  try {
    for (var h = Ue(s); h && (h.nodeType !== we || h.data !== Ze);) h = Ke(h);
    if (!h) throw ie;
    V(!0), J(h);
    const f = Se(i, {
      ...e,
      anchor: h
    });
    return V(!1), f
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some(m => m.startsWith("https://svelte.dev/e/"))) throw f;
    return f !== ie && console.warn("Failed to hydrate: ", f), e.recover === !1 && Qe(), se(), Ge(s), V(!1), ct(i, e)
  } finally {
    V(r), J(b)
  }
}
const W = new Map;

function Se(i, {
  target: e,
  anchor: s,
  props: r = {},
  events: b,
  context: h,
  intro: f = !0,
  transformError: m
}) {
  se();
  var l = void 0,
    c = et(() => {
      var $ = s ?? e.appendChild(Ee());
      _t($, {
        pending: () => {}
      }, T => {
        rt({});
        var E = Re;
        if (h && (E.c = h), b && (r.$$events = b), F && nt(T, null), be = f, l = i(T, r) || {}, be = !0, F && (H.nodes.end = O, O === null || O.nodeType !== we || O.data !== at)) throw ht(), ie;
        ft()
      }, m);
      var Z = new Set,
        K = T => {
          for (var E = 0; E < T.length; E++) {
            var R = T[E];
            if (!Z.has(R)) {
              Z.add(R);
              var z = it(R);
              for (const Q of [e, document]) {
                var w = W.get(Q);
                w === void 0 && (w = new Map, W.set(Q, w));
                var fe = w.get(R);
                fe === void 0 ? (Q.addEventListener(R, ye, {
                  passive: z
                }), w.set(R, 1)) : w.set(R, fe + 1)
              }
            }
          }
        };
      return K(tt(st)), ve.add(K), () => {
        var z;
        for (var T of Z)
          for (const w of [e, document]) {
            var E = W.get(w),
              R = E.get(T);
            --R == 0 ? (w.removeEventListener(T, ye), E.delete(T), E.size === 0 && W.delete(w)) : E.set(T, R)
          }
        ve.delete(K), $ !== s && ((z = $.parentNode) == null || z.removeChild($))
      }
    });
  return he.set(l, c), l
}
let he = new WeakMap;

function yt(i, e) {
  const s = he.get(i);
  return s ? (he.delete(i), s(e)) : Promise.resolve()
}
export {
  be as a, ot as c, vt as h, ct as m, gt as s, yt as u
};