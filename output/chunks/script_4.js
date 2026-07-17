var Oe = Object.defineProperty;
var oe = i => {
  throw TypeError(i)
};
var Se = (i, e, s) => e in i ? Oe(i, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : i[e] = s;
var B = (i, e, s) => Se(i, typeof e != "symbol" ? e + "" : e, s),
  G = (i, e, s) => e.has(i) || oe("Cannot " + s);
var t = (i, e, s) => (G(i, e, "read from private field"), s ? s.call(i) : e.get(i)),
  o = (i, e, s) => e.has(i) ? oe("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, s),
  n = (i, e, s, r) => (G(i, e, "write to private field"), r ? r.call(i, s) : e.set(i, s), s),
  d = (i, e, s) => (G(i, e, "access private method"), s);
import {
  aU as Fe,
  i as me,
  T as Ce,
  ak as Ee,
  B as Ye,
  aV as de,
  ao as U,
  Q as S,
  J as F,
  U as H,
  aW as _e,
  I as Ie,
  K as He,
  a8 as xe,
  aX as le,
  a0 as D,
  _ as Te,
  Z as ee,
  a1 as O,
  a2 as Le,
  aY as Me,
  aZ as ce,
  a_ as ue,
  a$ as pe,
  b0 as $e,
  b1 as ze,
  b2 as Be,
  z as Re,
  ab as Pe,
  Y as te,
  O as J,
  n as Ve,
  N as We,
  b3 as P,
  L as Ue,
  b4 as je,
  b5 as qe,
  b6 as Je,
  b7 as ge,
  b8 as se,
  a7 as Xe,
  a9 as we,
  R as Ze,
  as as Ke,
  aA as ie,
  P as V,
  b9 as Qe,
  ar as Ge,
  ba as et,
  ag as tt,
  bb as st,
  bc as ve,
  bd as be,
  be as it,
  p as rt,
  ax as nt,
  aa as at,
  az as ht,
  b as ft
} from "./BKnGt6Ki.js";

function ot(i) {
  let e = 0,
    s = Ee(0),
    r;
  return () => {
    Fe() && (me(s), Ce(() => (e === 0 && (r = Ye(() => i(() => de(s)))), e += 1, () => {
      U(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, de(s))
      })
    })))
  }
}
var dt = Ue | je;

function _t(i, e, s, r) {
  new lt(i, e, s, r)
}
var p, x, v, C, u, b, _, g, A, Y, k, I, L, M, N, X, a, Ae, Ne, ke, re, j, q, ne, ae;
class lt {
  constructor(e, s, r, y) {
    o(this, a);
    B(this, "parent");
    B(this, "is_pending", !1);
    B(this, "transform_error");
    o(this, p);
    o(this, x, F ? S : null);
    o(this, v);
    o(this, C);
    o(this, u);
    o(this, b, null);
    o(this, _, null);
    o(this, g, null);
    o(this, A, null);
    o(this, Y, 0);
    o(this, k, 0);
    o(this, I, !1);
    o(this, L, new Set);
    o(this, M, new Set);
    o(this, N, null);
    o(this, X, ot(() => (n(this, N, Ee(t(this, Y))), () => {
      n(this, N, null)
    })));
    var h;
    n(this, p, e), n(this, v, s), n(this, C, f => {
      var m = H;
      m.b = this, m.f |= _e, r(f)
    }), this.parent = H.b, this.transform_error = y ?? ((h = this.parent) == null ? void 0 : h.transform_error) ?? (f => f), n(this, u, Ie(() => {
      if (F) {
        const f = t(this, x);
        He();
        const m = f.data === xe;
        if (f.data.startsWith(le)) {
          const c = JSON.parse(f.data.slice(le.length));
          d(this, a, Ne).call(this, c)
        } else m ? d(this, a, ke).call(this) : d(this, a, Ae).call(this)
      } else d(this, a, re).call(this)
    }, dt)), F && n(this, p, S)
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
    d(this, a, ne).call(this, e, s), n(this, Y, t(this, Y) + e), !(!t(this, N) || t(this, I)) && (n(this, I, !0), U(() => {
      n(this, I, !1), t(this, N) && Pe(t(this, N), t(this, Y))
    }))
  }
  get_effect_pending() {
    return t(this, X).call(this), me(t(this, N))
  }
  error(e) {
    var s;
    if (!t(this, v).onerror && !t(this, v).failed) throw e;
    (s = O) != null && s.is_fork ? (t(this, b) && O.skip_effect(t(this, b)), t(this, _) && O.skip_effect(t(this, _)), t(this, g) && O.skip_effect(t(this, g)), O.oncommit(() => {
      d(this, a, ae).call(this, e)
    })) : d(this, a, ae).call(this, e)
  }
}
p = new WeakMap, x = new WeakMap, v = new WeakMap, C = new WeakMap, u = new WeakMap, b = new WeakMap, _ = new WeakMap, g = new WeakMap, A = new WeakMap, Y = new WeakMap, k = new WeakMap, I = new WeakMap, L = new WeakMap, M = new WeakMap, N = new WeakMap, X = new WeakMap, a = new WeakSet, Ae = function() {
  try {
    n(this, b, D(() => t(this, C).call(this, t(this, p))))
  } catch (e) {
    this.error(e)
  }
}, Ne = function(e) {
  const s = t(this, v).failed;
  s && n(this, g, D(() => {
    s(t(this, p), () => e, () => () => {})
  }))
}, ke = function() {
  const e = t(this, v).pending;
  e && (this.is_pending = !0, n(this, _, D(() => e(t(this, p)))), U(() => {
    var s = n(this, A, document.createDocumentFragment()),
      r = Te();
    s.append(r), n(this, b, d(this, a, q).call(this, () => D(() => t(this, C).call(this, r)))), t(this, k) === 0 && (t(this, p).before(s), n(this, A, null), ee(t(this, _), () => {
      n(this, _, null)
    }), d(this, a, j).call(this, O))
  }))
}, re = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), n(this, k, 0), n(this, Y, 0), n(this, b, D(() => {
        t(this, C).call(this, t(this, p))
      })), t(this, k) > 0) {
      var e = n(this, A, document.createDocumentFragment());
      Le(t(this, b), e);
      const s = t(this, v).pending;
      n(this, _, D(() => s(t(this, p))))
    } else d(this, a, j).call(this, O)
  } catch (s) {
    this.error(s)
  }
}, j = function(e) {
  this.is_pending = !1, e.transfer_effects(t(this, L), t(this, M))
}, q = function(e) {
  var s = H,
    r = Be,
    y = Re;
  ce(t(this, u)), ue(t(this, u)), pe(t(this, u).ctx);
  try {
    return $e.ensure(), e()
  } catch (h) {
    return ze(h), null
  } finally {
    ce(s), ue(r), pe(y)
  }
}, ne = function(e, s) {
  var r;
  if (!this.has_pending_snippet()) {
    this.parent && d(r = this.parent, a, ne).call(r, e, s);
    return
  }
  n(this, k, t(this, k) + e), t(this, k) === 0 && (d(this, a, j).call(this, s), t(this, _) && ee(t(this, _), () => {
    n(this, _, null)
  }), t(this, A) && (t(this, p).before(t(this, A)), n(this, A, null)))
}, ae = function(e) {
  t(this, b) && (te(t(this, b)), n(this, b, null)), t(this, _) && (te(t(this, _)), n(this, _, null)), t(this, g) && (te(t(this, g)), n(this, g, null)), F && (J(t(this, x)), Ve(), J(We()));
  var s = t(this, v).onerror;
  let r = t(this, v).failed;
  var y = !1,
    h = !1;
  const f = () => {
      if (y) {
        Je();
        return
      }
      y = !0, h && qe(), t(this, g) !== null && ee(t(this, g), () => {
        n(this, g, null)
      }), d(this, a, q).call(this, () => {
        d(this, a, re).call(this)
      })
    },
    m = l => {
      try {
        h = !0, s == null || s(l, f), h = !1
      } catch (c) {
        P(c, t(this, u) && t(this, u).parent)
      }
      r && n(this, g, d(this, a, q).call(this, () => {
        try {
          return D(() => {
            var c = H;
            c.b = this, c.f |= _e, r(t(this, p), () => l, () => f)
          })
        } catch (c) {
          return P(c, t(this, u).parent), null
        }
      }))
    };
  U(() => {
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
let ye = !0;

function gt(i, e) {
  var r;
  var s = e == null ? "" : typeof e == "object" ? `${e}` : e;
  s !== (i[r = ge] ?? (i[r] = i.nodeValue)) && (i[ge] = s, i.nodeValue = `${s}`)
}

function ct(i, e) {
  return De(i, e)
}

function vt(i, e) {
  se(), e.intro = e.intro ?? !1;
  const s = e.target,
    r = F,
    y = S;
  try {
    for (var h = Xe(s); h && (h.nodeType !== we || h.data !== Ze);) h = Ke(h);
    if (!h) throw ie;
    V(!0), J(h);
    const f = De(i, {
      ...e,
      anchor: h
    });
    return V(!1), f
  } catch (f) {
    if (f instanceof Error && f.message.split(`
`).some(m => m.startsWith("https://svelte.dev/e/"))) throw f;
    return f !== ie && console.warn("Failed to hydrate: ", f), e.recover === !1 && Qe(), se(), Ge(s), V(!1), ct(i, e)
  } finally {
    V(r), J(y)
  }
}
const W = new Map;

function De(i, {
  target: e,
  anchor: s,
  props: r = {},
  events: y,
  context: h,
  intro: f = !0,
  transformError: m
}) {
  se();
  var l = void 0,
    c = et(() => {
      var $ = s ?? e.appendChild(Te());
      _t($, {
        pending: () => {}
      }, E => {
        rt({});
        var T = Re;
        if (h && (T.c = h), y && (r.$$events = y), F && nt(E, null), ye = f, l = i(E, r) || {}, ye = !0, F && (H.nodes.end = S, S === null || S.nodeType !== we || S.data !== at)) throw ht(), ie;
        ft()
      }, m);
      var Z = new Set,
        K = E => {
          for (var T = 0; T < E.length; T++) {
            var R = E[T];
            if (!Z.has(R)) {
              Z.add(R);
              var z = it(R);
              for (const Q of [e, document]) {
                var w = W.get(Q);
                w === void 0 && (w = new Map, W.set(Q, w));
                var fe = w.get(R);
                fe === void 0 ? (Q.addEventListener(R, be, {
                  passive: z
                }), w.set(R, 1)) : w.set(R, fe + 1)
              }
            }
          }
        };
      return K(tt(st)), ve.add(K), () => {
        var z;
        for (var E of Z)
          for (const w of [e, document]) {
            var T = W.get(w),
              R = T.get(E);
            --R == 0 ? (w.removeEventListener(E, be), T.delete(E), T.size === 0 && W.delete(w)) : T.set(E, R)
          }
        ve.delete(K), $ !== s && ((z = $.parentNode) == null || z.removeChild($))
      }
    });
  return he.set(l, c), l
}
let he = new WeakMap;

function bt(i, e) {
  const s = he.get(i);
  return s ? (he.delete(i), s(e)) : Promise.resolve()
}
export {
  ye as a, ot as c, vt as h, ct as m, gt as s, bt as u
};