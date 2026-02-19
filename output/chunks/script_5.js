var T = Object.defineProperty;
var m = t => {
  throw TypeError(t)
};
var M = (t, e, f) => e in t ? T(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: f
}) : t[e] = f;
var v = (t, e, f) => M(t, typeof e != "symbol" ? e + "" : e, f),
  w = (t, e, f) => e.has(t) || m("Cannot " + f);
var s = (t, e, f) => (w(t, e, "read from private field"), f ? f.call(t) : e.get(t)),
  l = (t, e, f) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, f),
  k = (t, e, f, i) => (w(t, e, "write to private field"), i ? i.call(t, f) : e.set(t, f), f);
import {
  C as D,
  D as A,
  F as g,
  G as F,
  H as I,
  I as E,
  k as x,
  J as B,
  K as C,
  L
} from "./Bl5qixfQ.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "5813ae56f58e7333550e54b13dee572a566ecd62"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "7d9649fe-7d28-4e0b-a66e-a53b2f4abb32", t._sentryDebugIdIdentifier = "sentry-dbid-7d9649fe-7d28-4e0b-a66e-a53b2f4abb32")
  })()
} catch {}
var n, c, a, u, p, y;
class G {
  constructor(e, f = !0) {
    v(this, "anchor");
    l(this, n, new Map);
    l(this, c, new Map);
    l(this, a, new Map);
    l(this, u, !0);
    l(this, p, () => {
      var e = D;
      if (s(this, n).has(e)) {
        var f = s(this, n).get(e),
          i = s(this, c).get(f);
        if (i) A(i);
        else {
          var o = s(this, a).get(f);
          o && (s(this, c).set(f, o.effect), s(this, a).delete(f), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), i = o.effect)
        }
        for (const [r, d] of s(this, n)) {
          if (s(this, n).delete(r), r === e) break;
          const h = s(this, a).get(d);
          h && (g(h.effect), s(this, a).delete(d))
        }
        for (const [r, d] of s(this, c)) {
          if (r === f) continue;
          const h = () => {
            if (Array.from(s(this, n).values()).includes(r)) {
              var _ = document.createDocumentFragment();
              C(d, _), _.append(I()), s(this, a).set(r, {
                effect: d,
                fragment: _
              })
            } else g(d);
            s(this, c).delete(r)
          };
          s(this, u) || !i ? F(d, h, !1) : h()
        }
      }
    });
    l(this, y, e => {
      s(this, n).delete(e);
      const f = Array.from(s(this, n).values());
      for (const [i, o] of s(this, a)) f.includes(i) || (g(o.effect), s(this, a).delete(i))
    });
    this.anchor = e, k(this, u, f)
  }
  ensure(e, f) {
    var i = D,
      o = L();
    if (f && !s(this, c).has(e) && !s(this, a).has(e))
      if (o) {
        var r = document.createDocumentFragment(),
          d = I();
        r.append(d), s(this, a).set(e, {
          effect: E(() => f(d)),
          fragment: r
        })
      } else s(this, c).set(e, E(() => f(this.anchor)));
    if (s(this, n).set(i, e), o) {
      for (const [h, b] of s(this, c)) h === e ? i.skipped_effects.delete(b) : i.skipped_effects.add(b);
      for (const [h, b] of s(this, a)) h === e ? i.skipped_effects.delete(b.effect) : i.skipped_effects.add(b.effect);
      i.oncommit(s(this, p)), i.ondiscard(s(this, y))
    } else x && (this.anchor = B), s(this, p).call(this)
  }
}
n = new WeakMap, c = new WeakMap, a = new WeakMap, u = new WeakMap, p = new WeakMap, y = new WeakMap;
export {
  G as B
};