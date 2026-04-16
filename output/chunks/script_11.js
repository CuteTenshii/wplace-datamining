var A = Object.defineProperty;
var y = a => {
  throw TypeError(a)
};
var B = (a, e, s) => e in a ? A(a, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : a[e] = s;
var k = (a, e, s) => B(a, typeof e != "symbol" ? e + "" : e, s),
  w = (a, e, s) => e.has(a) || y("Cannot " + s);
var t = (a, e, s) => (w(a, e, "read from private field"), s ? s.call(a) : e.get(a)),
  l = (a, e, s) => e.has(a) ? y("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, s),
  D = (a, e, s, i) => (w(a, e, "write to private field"), i ? i.call(a, s) : e.set(a, s), s);
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
} from "./BZHD_3xD.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "804fae10c9a96a4658fed8df64d864b17b400aa1"
    };
    var e = new a.Error().stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "96905b96-0e52-448e-98ee-da6551d00d08", a._sentryDebugIdIdentifier = "sentry-dbid-96905b96-0e52-448e-98ee-da6551d00d08")
  } catch {}
})();
var n, h, r, u, p, _, m;
class N {
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
        if (i) S(i), t(this, u).delete(s);
        else {
          var o = t(this, r).get(s);
          o && (t(this, h).set(s, o.effect), t(this, r).delete(s), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), i = o.effect)
        }
        for (const [f, c] of t(this, n)) {
          if (t(this, n).delete(f), f === e) break;
          const d = t(this, r).get(c);
          d && (v(d.effect), t(this, r).delete(c))
        }
        for (const [f, c] of t(this, h)) {
          if (f === s || t(this, u).has(f)) continue;
          const d = () => {
            if (Array.from(t(this, n).values()).includes(f)) {
              var g = document.createDocumentFragment();
              R(c, g), g.append(I()), t(this, r).set(f, {
                effect: c,
                fragment: g
              })
            } else v(c);
            t(this, u).delete(f), t(this, h).delete(f)
          };
          t(this, p) || !i ? (t(this, u).add(f), T(c, d, !1)) : d()
        }
      }
    });
    l(this, m, e => {
      t(this, n).delete(e);
      const s = Array.from(t(this, n).values());
      for (const [i, o] of t(this, r)) s.includes(i) || (v(o.effect), t(this, r).delete(i))
    });
    this.anchor = e, D(this, p, s)
  }
  ensure(e, s) {
    var i = E,
      o = C();
    if (s && !t(this, h).has(e) && !t(this, r).has(e))
      if (o) {
        var f = document.createDocumentFragment(),
          c = I();
        f.append(c), t(this, r).set(e, {
          effect: M(() => s(c)),
          fragment: f
        })
      } else t(this, h).set(e, M(() => s(this.anchor)));
    if (t(this, n).set(i, e), o) {
      for (const [d, b] of t(this, h)) d === e ? i.unskip_effect(b) : i.skip_effect(b);
      for (const [d, b] of t(this, r)) d === e ? i.unskip_effect(b.effect) : i.skip_effect(b.effect);
      i.oncommit(t(this, _)), i.ondiscard(t(this, m))
    } else x && (this.anchor = F), t(this, _).call(this)
  }
}
n = new WeakMap, h = new WeakMap, r = new WeakMap, u = new WeakMap, p = new WeakMap, _ = new WeakMap, m = new WeakMap;
export {
  N as B
};