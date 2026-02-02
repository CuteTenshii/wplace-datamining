var T = Object.defineProperty;
var m = t => {
  throw TypeError(t)
};
var M = (t, e, i) => e in t ? T(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: i
}) : t[e] = i;
var v = (t, e, i) => M(t, typeof e != "symbol" ? e + "" : e, i),
  w = (t, e, i) => e.has(t) || m("Cannot " + i);
var s = (t, e, i) => (w(t, e, "read from private field"), i ? i.call(t) : e.get(t)),
  l = (t, e, i) => e.has(t) ? m("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, i),
  k = (t, e, i, f) => (w(t, e, "write to private field"), f ? f.call(t, i) : e.set(t, i), i);
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
} from "./0lw74TdK.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
  constructor(e, i = !0) {
    v(this, "anchor");
    l(this, n, new Map);
    l(this, c, new Map);
    l(this, a, new Map);
    l(this, u, !0);
    l(this, p, () => {
      var e = D;
      if (s(this, n).has(e)) {
        var i = s(this, n).get(e),
          f = s(this, c).get(i);
        if (f) A(f);
        else {
          var o = s(this, a).get(i);
          o && (s(this, c).set(i, o.effect), s(this, a).delete(i), o.fragment.lastChild.remove(), this.anchor.before(o.fragment), f = o.effect)
        }
        for (const [r, d] of s(this, n)) {
          if (s(this, n).delete(r), r === e) break;
          const h = s(this, a).get(d);
          h && (g(h.effect), s(this, a).delete(d))
        }
        for (const [r, d] of s(this, c)) {
          if (r === i) continue;
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
          s(this, u) || !f ? F(d, h, !1) : h()
        }
      }
    });
    l(this, y, e => {
      s(this, n).delete(e);
      const i = Array.from(s(this, n).values());
      for (const [f, o] of s(this, a)) i.includes(f) || (g(o.effect), s(this, a).delete(f))
    });
    this.anchor = e, k(this, u, i)
  }
  ensure(e, i) {
    var f = D,
      o = L();
    if (i && !s(this, c).has(e) && !s(this, a).has(e))
      if (o) {
        var r = document.createDocumentFragment(),
          d = I();
        r.append(d), s(this, a).set(e, {
          effect: E(() => i(d)),
          fragment: r
        })
      } else s(this, c).set(e, E(() => i(this.anchor)));
    if (s(this, n).set(f, e), o) {
      for (const [h, b] of s(this, c)) h === e ? f.skipped_effects.delete(b) : f.skipped_effects.add(b);
      for (const [h, b] of s(this, a)) h === e ? f.skipped_effects.delete(b.effect) : f.skipped_effects.add(b.effect);
      f.oncommit(s(this, p)), f.ondiscard(s(this, y))
    } else x && (this.anchor = B), s(this, p).call(this)
  }
}
n = new WeakMap, c = new WeakMap, a = new WeakMap, u = new WeakMap, p = new WeakMap, y = new WeakMap;
export {
  G as B
};