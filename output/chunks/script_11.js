var A = Object.defineProperty;
var y = a => {
  throw TypeError(a)
};
var S = (a, e, s) => e in a ? A(a, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : a[e] = s;
var k = (a, e, s) => S(a, typeof e != "symbol" ? e + "" : e, s),
  w = (a, e, s) => e.has(a) || y("Cannot " + s);
var t = (a, e, s) => (w(a, e, "read from private field"), s ? s.call(a) : e.get(a)),
  l = (a, e, s) => e.has(a) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, s),
  D = (a, e, s, i) => (w(a, e, "write to private field"), i ? i.call(a, s) : e.set(a, s), s);
import {
  a0 as E,
  a1 as T,
  a2 as v,
  a3 as x,
  a4 as I,
  a5 as M,
  k as B,
  w as F,
  a6 as R,
  a7 as C
} from "./DBVFc_3b.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "d07d8848ea889a09465db794dc92b79d5c096c7e"
    };
    var e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "7140a596-bfc8-46a2-820a-3976e3533e3d", a._sentryDebugIdIdentifier = "sentry-dbid-7140a596-bfc8-46a2-820a-3976e3533e3d")
  } catch {}
})();
var n, h, r, u, p, _, m;
class Y {
  constructor(e, s = !0) {
    k(this, "anchor");
    l(this, n, new Map);
    l(this, h, new Map);
    l(this, r, new Map);
    l(this, u, new Set);
    l(this, p, !0);
    l(this, _, () => {
      var e = E;
      if (t(this, n).has(e)) {
        var s = t(this, n).get(e),
          i = t(this, h).get(s);
        if (i) T(i), t(this, u).delete(s);
        else {
          var c = t(this, r).get(s);
          c && (t(this, h).set(s, c.effect), t(this, r).delete(s), c.fragment.lastChild.remove(), this.anchor.before(c.fragment), i = c.effect)
        }
        for (const [f, o] of t(this, n)) {
          if (t(this, n).delete(f), f === e) break;
          const d = t(this, r).get(o);
          d && (v(d.effect), t(this, r).delete(o))
        }
        for (const [f, o] of t(this, h)) {
          if (f === s || t(this, u).has(f)) continue;
          const d = () => {
            if (Array.from(t(this, n).values()).includes(f)) {
              var g = document.createDocumentFragment();
              R(o, g), g.append(I()), t(this, r).set(f, {
                effect: o,
                fragment: g
              })
            } else v(o);
            t(this, u).delete(f), t(this, h).delete(f)
          };
          t(this, p) || !i ? (t(this, u).add(f), x(o, d, !1)) : d()
        }
      }
    });
    l(this, m, e => {
      t(this, n).delete(e);
      const s = Array.from(t(this, n).values());
      for (const [i, c] of t(this, r)) s.includes(i) || (v(c.effect), t(this, r).delete(i))
    });
    this.anchor = e, D(this, p, s)
  }
  ensure(e, s) {
    var i = E,
      c = C();
    if (s && !t(this, h).has(e) && !t(this, r).has(e))
      if (c) {
        var f = document.createDocumentFragment(),
          o = I();
        f.append(o), t(this, r).set(e, {
          effect: M(() => s(o)),
          fragment: f
        })
      } else t(this, h).set(e, M(() => s(this.anchor)));
    if (t(this, n).set(i, e), c) {
      for (const [d, b] of t(this, h)) d === e ? i.unskip_effect(b) : i.skip_effect(b);
      for (const [d, b] of t(this, r)) d === e ? i.unskip_effect(b.effect) : i.skip_effect(b.effect);
      i.oncommit(t(this, _)), i.ondiscard(t(this, m))
    } else B && (this.anchor = F), t(this, _).call(this)
  }
}
n = new WeakMap, h = new WeakMap, r = new WeakMap, u = new WeakMap, p = new WeakMap, _ = new WeakMap, m = new WeakMap;
export {
  Y as B
};