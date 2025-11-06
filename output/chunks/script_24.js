import {
  ao as O,
  E as B,
  a$ as L,
  b0 as $,
  X as D,
  L as q,
  b1 as z,
  b2 as M,
  b3 as P,
  b4 as F,
  a_ as U,
  W,
  C as E
} from "./CXlKQ9h7.js";
import {
  a as j
} from "./vRjjJqEH.js";
import {
  c as G
} from "./BXYBetbB.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "3b81c531726e4eb39728af6e2ad358d2a11d8033"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new t.Error().stack;
    i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "f1c5f2f8-2981-4712-b5ba-c630e27eea8b", t._sentryDebugIdIdentifier = "sentry-dbid-f1c5f2f8-2981-4712-b5ba-c630e27eea8b")
  })()
} catch {}
const K = () => performance.now(),
  g = {
    tick: t => requestAnimationFrame(t),
    now: () => K(),
    tasks: new Set
  };

function x() {
  const t = g.now();
  g.tasks.forEach(i => {
    i.c(t) || (g.tasks.delete(i), i.f())
  }), g.tasks.size !== 0 && g.tick(x)
}

function X(t) {
  let i;
  return g.tasks.size === 0 && g.tick(x), {
    promise: new Promise(r => {
      g.tasks.add(i = {
        c: t,
        f: r
      })
    }),
    abort() {
      g.tasks.delete(i)
    }
  }
}

function y(t, i) {
  F(() => {
    t.dispatchEvent(new CustomEvent(i))
  })
}

function Y(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const i = t.split("-");
  return i.length === 1 ? i[0] : i[0] + i.slice(1).map(r => r[0].toUpperCase() + r.slice(1)).join("")
}

function S(t) {
  const i = {},
    r = t.split(";");
  for (const a of r) {
    const [e, s] = a.split(":");
    if (!e || s === void 0) break;
    const n = Y(e.trim());
    i[n] = s.trim()
  }
  return i
}
const H = t => t;

function Z(t, i, r) {
  var a = G,
    e, s, n, h = null;
  a.a ?? (a.a = {
    element: t,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), s = this.element.getBoundingClientRect(), e.left !== s.left || e.right !== s.right || e.top !== s.top || e.bottom !== s.bottom) {
        const v = i()(this.element, {
          from: e,
          to: s
        }, r == null ? void 0 : r());
        n = I(this.element, v, void 0, 1, () => {
          n == null || n.abort(), n = void 0
        })
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var {
          position: v,
          width: w,
          height: u
        } = getComputedStyle(t);
        if (v !== "absolute" && v !== "fixed") {
          var d = t.style;
          h = {
            position: d.position,
            width: d.width,
            height: d.height,
            transform: d.transform
          }, d.position = "absolute", d.width = w, d.height = u;
          var f = t.getBoundingClientRect();
          if (e.left !== f.left || e.top !== f.top) {
            var o = `translate(${e.left-f.left}px, ${e.top-f.top}px)`;
            d.transform = d.transform ? `${d.transform} ${o}` : o
          }
        }
      }
    },
    unfix() {
      if (h) {
        var v = t.style;
        v.position = h.position, v.width = h.width, v.height = h.height, v.transform = h.transform
      }
    }
  }), a.a.element = t
}

function tt(t, i, r, a) {
  var e = (t & M) !== 0,
    s = (t & P) !== 0,
    n = e && s,
    h = (t & z) !== 0,
    v = n ? "both" : e ? "in" : "out",
    w, u = i.inert,
    d = i.style.overflow,
    f, o;

  function _() {
    return F(() => w ?? (w = r()(i, (a == null ? void 0 : a()) ?? {}, {
      direction: v
    })))
  }
  var c = {
      is_global: h,
      in() {
        var l;
        if (i.inert = u, !e) {
          o == null || o.abort(), (l = o == null ? void 0 : o.reset) == null || l.call(o);
          return
        }
        s || f == null || f.abort(), y(i, "introstart"), f = I(i, _(), o, 1, () => {
          y(i, "introend"), f == null || f.abort(), f = w = void 0, i.style.overflow = d
        })
      },
      out(l) {
        if (!s) {
          l == null || l(), w = void 0;
          return
        }
        i.inert = !0, y(i, "outrostart"), o = I(i, _(), f, 0, () => {
          y(i, "outroend"), l == null || l()
        })
      },
      stop: () => {
        f == null || f.abort(), o == null || o.abort()
      }
    },
    p = O;
  if ((p.transitions ?? (p.transitions = [])).push(c), e && j) {
    var T = h;
    if (!T) {
      for (var b = p.parent; b && (b.f & B) !== 0;)
        for (;
          (b = b.parent) && (b.f & L) === 0;);
      T = !b || (b.f & $) !== 0
    }
    T && D(() => {
      q(() => c.in())
    })
  }
}

function I(t, i, r, a, e) {
  var s = a === 1;
  if (U(i)) {
    var n, h = !1;
    return W(() => {
      if (!h) {
        var p = i({
          direction: s ? "in" : "out"
        });
        n = I(t, p, r, a, e)
      }
    }), {
      abort: () => {
        h = !0, n == null || n.abort()
      },
      deactivate: () => n.deactivate(),
      reset: () => n.reset(),
      t: () => n.t()
    }
  }
  if (r == null || r.deactivate(), !(i != null && i.duration)) return e(), {
    abort: E,
    deactivate: E,
    reset: E,
    t: () => a
  };
  const {
    delay: v = 0,
    css: w,
    tick: u,
    easing: d = H
  } = i;
  var f = [];
  if (s && r === void 0 && (u && u(0, 1), w)) {
    var o = S(w(0, 1));
    f.push(o, o)
  }
  var _ = () => 1 - a,
    c = t.animate(f, {
      duration: v,
      fill: "forwards"
    });
  return c.onfinish = () => {
    c.cancel();
    var p = (r == null ? void 0 : r.t()) ?? 1 - a;
    r == null || r.abort();
    var T = a - p,
      b = i.duration * Math.abs(T),
      l = [];
    if (b > 0) {
      var N = !1;
      if (w)
        for (var R = Math.ceil(b / 16.666666666666668), C = 0; C <= R; C += 1) {
          var k = p + T * d(C / R),
            A = S(w(k, 1 - k));
          l.push(A), N || (N = A.overflow === "hidden")
        }
      N && (t.style.overflow = "hidden"), _ = () => {
        var m = c.currentTime;
        return p + T * d(m / b)
      }, u && X(() => {
        if (c.playState !== "running") return !1;
        var m = _();
        return u(m, 1 - m), !0
      })
    }
    c = t.animate(l, {
      duration: b,
      fill: "forwards"
    }), c.onfinish = () => {
      _ = () => a, u == null || u(a, 1 - a), e()
    }
  }, {
    abort: () => {
      c && (c.cancel(), c.effect = null, c.onfinish = E)
    },
    deactivate: () => {
      e = E
    },
    reset: () => {
      a === 0 && (u == null || u(1, 0))
    },
    t: () => _()
  }
}
export {
  Z as a, tt as t
};