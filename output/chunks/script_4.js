var ke = Object.defineProperty;
var oe = i => {
  throw TypeError(i)
};
var Fe = (i, e, s) => e in i ? ke(i, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : i[e] = s;
var x = (i, e, s) => Fe(i, typeof e != "symbol" ? e + "" : e, s),
  G = (i, e, s) => e.has(i) || oe("Cannot " + s);
var t = (i, e, s) => (G(i, e, "read from private field"), s ? s.call(i) : e.get(i)),
  o = (i, e, s) => e.has(i) ? oe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, s),
  n = (i, e, s, r) => (G(i, e, "write to private field"), r ? r.call(i, s) : e.set(i, s), s),
  d = (i, e, s) => (G(i, e, "access private method"), s);
import {
  aU as Oe,
  i as me,
  U as Ce,
  al as Ee,
  D as Ye,
  aV as de,
  ap as j,
  S as F,
  L as O,
  V as I,
  aW as _e,
  K as He,
  M as Ie,
  a9 as Me,
  aX as le,
  a1 as S,
  a0 as Te,
  _ as ee,
  a2 as k,
  a3 as Be,
  aY as Le,
  aZ as ce,
  a_ as ue,
  a$ as pe,
  b0 as Ve,
  b1 as $e,
  b2 as xe,
  B as Re,
  ac as Pe,
  Z as te,
  Q as X,
  n as We,
  P as Ue,
  b3 as P,
  N as je,
  b4 as qe,
  b5 as ze,
  b6 as Xe,
  b7 as ge,
  b8 as se,
  a8 as Ze,
  aa as we,
  T as Je,
  at as Ke,
  aB as ie,
  R as W,
  b9 as Qe,
  as as Ge,
  ba as et,
  ah as tt,
  bb as st,
  bc as ve,
  bd as ye,
  be as it,
  p as rt,
  ay as nt,
  ab as at,
  aA as ht,
  b as ft
} from "./Dkgr_Dbt.js";

function ot(i) {
  let e = 0,
    s = Ee(0),
    r;
  return () => {
    Oe() && (me(s), Ce(() => (e === 0 && (r = Ye(() => i(() => de(s)))), e += 1, () => {
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
var p, M, v, C, u, y, _, g, A, Y, D, H, B, L, N, Z, a, Ae, Ne, De, re, q, z, ne, ae;
class lt {
  constructor(e, s, r, b) {
    o(this, a);
    x(this, "parent");
    x(this, "is_pending", !1);
    x(this, "transform_error");
    o(this, p);
    o(this, M, O ? F : null);
    o(this, v);
    o(this, C);
    o(this, u);
    o(this, y, null);
    o(this, _, null);
    o(this, g, null);
    o(this, A, null);
    o(this, Y, 0);
    o(this, D, 0);
    o(this, H, !1);
    o(this, B, new Set);
    o(this, L, new Set);
    o(this, N, null);
    o(this, Z, ot(() => (n(this, N, Ee(t(this, Y))), () => {
      n(this, N, null)
    })));
    var h;
    n(this, p, e), n(this, v, s), n(this, C, f => {
      var m = I;
      m.b = this, m.f |= _e, r(f)
    }), this.parent = I.b, this.transform_error = b ?? ((h = this.parent) == null ? void 0 : h.transform_error) ?? (f => f), n(this, u, He(() => {
      if (O) {
        const f = t(this, M);
        Ie();
        const m = f.data === Me;
        if (f.data.startsWith(le)) {
          const c = JSON.parse(f.data.slice(le.length));
          d(this, a, Ne).call(this, c)
        } else m ? d(this, a, De).call(this) : d(this, a, Ae).call(this)
      } else d(this, a, re).call(this)
    }, dt)), O && n(this, p, F)
  }
  defer_effect(e) {
    Le(e, t(this, B), t(this, L))
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered())
  }
  has_pending_snippet() {
    return !!t(this, v).pending
  }
  update_pending_count(e, s) {
    d(this, a, ne).call(this, e, s), n(this, Y, t(this, Y) + e), !(!t(this, N) || t(this, H)) && (n(this, H, !0), j(() => {
      n(this, H, !1), t(this, N) && Pe(t(this, N), t(this, Y))
    }))
  }
  get_effect_pending() {
    return t(this, Z).call(this), me(t(this, N))
  }
  error(e) {
    var s;
    if (!t(this, v).onerror && !t(this, v).failed) throw e;
    (s = k) != null && s.is_fork ? (t(this, y) && k.skip_effect(t(this, y)), t(this, _) && k.skip_effect(t(this, _)), t(this, g) && k.skip_effect(t(this, g)), k.oncommit(() => {
      d(this, a, ae).call(this, e)
    })) : d(this, a, ae).call(this, e)
  }
}
p = new WeakMap, M = new WeakMap, v = new WeakMap, C = new WeakMap, u = new WeakMap, y = new WeakMap, _ = new WeakMap, g = new WeakMap, A = new WeakMap, Y = new WeakMap, D = new WeakMap, H = new WeakMap, B = new WeakMap, L = new WeakMap, N = new WeakMap, Z = new WeakMap, a = new WeakSet, Ae = function() {
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
      r = Te();
    s.append(r), n(this, y, d(this, a, z).call(this, () => S(() => t(this, C).call(this, r)))), t(this, D) === 0 && (t(this, p).before(s), n(this, A, null), ee(t(this, _), () => {
      n(this, _, null)
    }), d(this, a, q).call(this, k))
  }))
}, re = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), n(this, D, 0), n(this, Y, 0), n(this, y, S(() => {
        t(this, C).call(this, t(this, p))
      })), t(this, D) > 0) {
      var e = n(this, A, document.createDocumentFragment());
      Be(t(this, y), e);
      const s = t(this, v).pending;
      n(this, _, S(() => s(t(this, p))))
    } else d(this, a, q).call(this, k)
  } catch (s) {
    this.error(s)
  }
}, q = function(e) {
  this.is_pending = !1, e.transfer_effects(t(this, B), t(this, L))
}, z = function(e) {
  var s = I,
    r = xe,
    b = Re;
  ce(t(this, u)), ue(t(this, u)), pe(t(this, u).ctx);
  try {
    return Ve.ensure(), e()
  } catch (h) {
    return $e(h), null
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
  t(this, y) && (te(t(this, y)), n(this, y, null)), t(this, _) && (te(t(this, _)), n(this, _, null)), t(this, g) && (te(t(this, g)), n(this, g, null)), O && (X(t(this, M)), We(), X(Ue()));
  var s = t(this, v).onerror;
  let r = t(this, v).failed;
  var b = !1,
    h = !1;
  const f = () => {
      if (b) {
        Xe();
        return
      }
      b = !0, h && ze(), t(this, g) !== null && ee(t(this, g), () => {
        n(this, g, null)
      }), d(this, a, z).call(this, () => {
        d(this, a, re).call(this)
      })
    },
    m = l => {
      try {
        h = !0, s == null || s(l, f), h = !1
      } catch (c) {
        P(c, t(this, u) && t(this, u).parent)
      }
      r && n(this, g, d(this, a, z).call(this, () => {
        try {
          return S(() => {
            var c = I;
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
    r = O,
    b = F;
  try {
    for (var h = Ze(s); h && (h.nodeType !== we || h.data !== Je);) h = Ke(h);
    if (!h) throw ie;
    W(!0), X(h);
    const f = Se(i, {
      ...e,
      anchor: h
    });
    return W(!1), f
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some(m => m.startsWith("https://svelte.dev/e/"))) throw f;
    return f !== ie && console.warn("Failed to hydrate: ", f), e.recover === !1 && Qe(), se(), Ge(s), W(!1), ct(i, e)
  } finally {
    W(r), X(b)
  }
}
const U = new Map;

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
      var V = s ?? e.appendChild(Te());
      _t(V, {
        pending: () => {}
      }, E => {
        rt({});
        var T = Re;
        if (h && (T.c = h), b && (r.$$events = b), O && nt(E, null), be = f, l = i(E, r) || {}, be = !0, O && (I.nodes.end = F, F === null || F.nodeType !== we || F.data !== at)) throw ht(), ie;
        ft()
      }, m);
      var J = new Set,
        K = E => {
          for (var T = 0; T < E.length; T++) {
            var R = E[T];
            if (!J.has(R)) {
              J.add(R);
              var $ = it(R);
              for (const Q of [e, document]) {
                var w = U.get(Q);
                w === void 0 && (w = new Map, U.set(Q, w));
                var fe = w.get(R);
                fe === void 0 ? (Q.addEventListener(R, ye, {
                  passive: $
                }), w.set(R, 1)) : w.set(R, fe + 1)
              }
            }
          }
        };
      return K(tt(st)), ve.add(K), () => {
        var $;
        for (var E of J)
          for (const w of [e, document]) {
            var T = U.get(w),
              R = T.get(E);
            --R == 0 ? (w.removeEventListener(E, ye), T.delete(E), T.size === 0 && U.delete(w)) : T.set(E, R)
          }
        ve.delete(K), V !== s && (($ = V.parentNode) == null || $.removeChild(V))
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