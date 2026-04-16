var A = Object.defineProperty;
var y = i => {
  throw TypeError(i)
};
var B = (i, e, s) => e in i ? A(i, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : i[e] = s;
var k = (i, e, s) => B(i, typeof e != "symbol" ? e + "" : e, s),
  w = (i, e, s) => e.has(i) || y("Cannot " + s);
var t = (i, e, s) => (w(i, e, "read from private field"), s ? s.call(i) : e.get(i)),
  l = (i, e, s) => e.has(i) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(i) : e.set(i, s),
  D = (i, e, s, a) => (w(i, e, "write to private field"), a ? a.call(i, s) : e.set(i, s), s);
import {
  _ as E,
  a0 as S,
  a1 as v,
  a2 as T,
  a3 as I,
  a4 as M,
  B as x,
  K as F,
  a5 as R,
  a6 as C
} from "./CsHGdBfZ.js";
(function() {
  try {
    var i = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    i.SENTRY_RELEASE = {
      id: "c68723346dc53cede4c33166e0b3070fd4fa2ccb"
    };
    var e = new i.Error().stack;
    e && (i._sentryDebugIds = i._sentryDebugIds || {}, i._sentryDebugIds[e] = "96905b96-0e52-448e-98ee-da6551d00d08", i._sentryDebugIdIdentifier = "sentry-dbid-96905b96-0e52-448e-98ee-da6551d00d08")
  } catch {}
})();
var c, h, r, u, p, _, m;
class N {
  constructor(e, s = !0) {
    k(this, "anchor");
    l(this, c, new Map);
    l(this, h, new Map);
    l(this, r, new Map);
    l(this, u, new Set);
    l(this, p, !0);
    l(this, _, () => {
      var e = E;
      if (t(this, c).has(e)) {
        var s = t(this, c).get(e),
          a = t(this, h).get(s);
        if (a) S(a), t(this, u).delete(s);
        else {
          var n = t(this, r).get(s);
          n && (t(this, h).set(s, n.effect), t(this, r).delete(s), n.fragment.lastChild.remove(), this.anchor.before(n.fragment), a = n.effect)
        }
        for (const [f, o] of t(this, c)) {
          if (t(this, c).delete(f), f === e) break;
          const d = t(this, r).get(o);
          d && (v(d.effect), t(this, r).delete(o))
        }
        for (const [f, o] of t(this, h)) {
          if (f === s || t(this, u).has(f)) continue;
          const d = () => {
            if (Array.from(t(this, c).values()).includes(f)) {
              var g = document.createDocumentFragment();
              R(o, g), g.append(I()), t(this, r).set(f, {
                effect: o,
                fragment: g
              })
            } else v(o);
            t(this, u).delete(f), t(this, h).delete(f)
          };
          t(this, p) || !a ? (t(this, u).add(f), T(o, d, !1)) : d()
        }
      }
    });
    l(this, m, e => {
      t(this, c).delete(e);
      const s = Array.from(t(this, c).values());
      for (const [a, n] of t(this, r)) s.includes(a) || (v(n.effect), t(this, r).delete(a))
    });
    this.anchor = e, D(this, p, s)
  }
  ensure(e, s) {
    var a = E,
      n = C();
    if (s && !t(this, h).has(e) && !t(this, r).has(e))
      if (n) {
        var f = document.createDocumentFragment(),
          o = I();
        f.append(o), t(this, r).set(e, {
          effect: M(() => s(o)),
          fragment: f
        })
      } else t(this, h).set(e, M(() => s(this.anchor)));
    if (t(this, c).set(a, e), n) {
      for (const [d, b] of t(this, h)) d === e ? a.unskip_effect(b) : a.skip_effect(b);
      for (const [d, b] of t(this, r)) d === e ? a.unskip_effect(b.effect) : a.skip_effect(b.effect);
      a.oncommit(t(this, _)), a.ondiscard(t(this, m))
    } else x && (this.anchor = F), t(this, _).call(this)
  }
}
c = new WeakMap, h = new WeakMap, r = new WeakMap, u = new WeakMap, p = new WeakMap, _ = new WeakMap, m = new WeakMap;
export {
  N as B
};