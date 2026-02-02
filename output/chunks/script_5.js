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
} from "./BrDbkhPu.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
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
var n, c, a, b, p, y;
class G {
  constructor(e, f = !0) {
    v(this, "anchor");
    l(this, n, new Map);
    l(this, c, new Map);
    l(this, a, new Map);
    l(this, b, !0);
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
        for (const [d, r] of s(this, n)) {
          if (s(this, n).delete(d), d === e) break;
          const h = s(this, a).get(r);
          h && (g(h.effect), s(this, a).delete(r))
        }
        for (const [d, r] of s(this, c)) {
          if (d === f) continue;
          const h = () => {
            if (Array.from(s(this, n).values()).includes(d)) {
              var _ = document.createDocumentFragment();
              C(r, _), _.append(I()), s(this, a).set(d, {
                effect: r,
                fragment: _
              })
            } else g(r);
            s(this, c).delete(d)
          };
          s(this, b) || !i ? F(r, h, !1) : h()
        }
      }
    });
    l(this, y, e => {
      s(this, n).delete(e);
      const f = Array.from(s(this, n).values());
      for (const [i, o] of s(this, a)) f.includes(i) || (g(o.effect), s(this, a).delete(i))
    });
    this.anchor = e, k(this, b, f)
  }
  ensure(e, f) {
    var i = D,
      o = L();
    if (f && !s(this, c).has(e) && !s(this, a).has(e))
      if (o) {
        var d = document.createDocumentFragment(),
          r = I();
        d.append(r), s(this, a).set(e, {
          effect: E(() => f(r)),
          fragment: d
        })
      } else s(this, c).set(e, E(() => f(this.anchor)));
    if (s(this, n).set(i, e), o) {
      for (const [h, u] of s(this, c)) h === e ? i.skipped_effects.delete(u) : i.skipped_effects.add(u);
      for (const [h, u] of s(this, a)) h === e ? i.skipped_effects.delete(u.effect) : i.skipped_effects.add(u.effect);
      i.oncommit(s(this, p)), i.ondiscard(s(this, y))
    } else x && (this.anchor = B), s(this, p).call(this)
  }
}
n = new WeakMap, c = new WeakMap, a = new WeakMap, b = new WeakMap, p = new WeakMap, y = new WeakMap;
export {
  G as B
};