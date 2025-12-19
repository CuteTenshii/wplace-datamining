import {
  ak as O,
  E as B,
  aS as D,
  aT as L,
  F as $,
  x as U,
  aU as q,
  aV as z,
  aW as M,
  aX as F,
  aQ as P,
  D as W,
  aY as E
} from "./D6bzUFXP.js";
import {
  a as Y
} from "./BTi3O7_U.js";
import {
  c as j
} from "./D4j-KKU0.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "c74d55667ae34a0f1e0fb08ba8f2c36320dfa773"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new t.Error().stack;
    i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "34b2a9ca-ac7a-44bc-88a9-ebb8a9672f90", t._sentryDebugIdIdentifier = "sentry-dbid-34b2a9ca-ac7a-44bc-88a9-ebb8a9672f90")
  })()
} catch {}
const G = () => performance.now(),
  g = {
    tick: t => requestAnimationFrame(t),
    now: () => G(),
    tasks: new Set
  };

function x() {
  const t = g.now();
  g.tasks.forEach(i => {
    i.c(t) || (g.tasks.delete(i), i.f())
  }), g.tasks.size !== 0 && g.tick(x)
}

function K(t) {
  let i;
  return g.tasks.size === 0 && g.tick(x), {
    promise: new Promise(a => {
      g.tasks.add(i = {
        c: t,
        f: a
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

function Q(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const i = t.split("-");
  return i.length === 1 ? i[0] : i[0] + i.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function S(t) {
  const i = {},
    a = t.split(";");
  for (const e of a) {
    const [r, s] = e.split(":");
    if (!r || s === void 0) break;
    const n = Q(r.trim());
    i[n] = s.trim()
  }
  return i
}
const V = t => t;

function Z(t, i, a) {
  var e = j,
    r, s, n, h = null;
  e.a ?? (e.a = {
    element: t,
    measure() {
      r = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), s = this.element.getBoundingClientRect(), r.left !== s.left || r.right !== s.right || r.top !== s.top || r.bottom !== s.bottom) {
        const v = i()(this.element, {
          from: r,
          to: s
        }, a == null ? void 0 : a());
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
          if (r.left !== f.left || r.top !== f.top) {
            var o = `translate(${r.left-f.left}px, ${r.top-f.top}px)`;
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
  }), e.a.element = t
}

function tt(t, i, a, e) {
  var r = (t & z) !== 0,
    s = (t & M) !== 0,
    n = r && s,
    h = (t & q) !== 0,
    v = n ? "both" : r ? "in" : "out",
    w, u = i.inert,
    d = i.style.overflow,
    f, o;

  function _() {
    return F(() => w ?? (w = a()(i, (e == null ? void 0 : e()) ?? {}, {
      direction: v
    })))
  }
  var c = {
      is_global: h,
      in() {
        var b;
        if (i.inert = u, !r) {
          o == null || o.abort(), (b = o == null ? void 0 : o.reset) == null || b.call(o);
          return
        }
        s || f == null || f.abort(), y(i, "introstart"), f = I(i, _(), o, 1, () => {
          y(i, "introend"), f == null || f.abort(), f = w = void 0, i.style.overflow = d
        })
      },
      out(b) {
        if (!s) {
          b == null || b(), w = void 0;
          return
        }
        i.inert = !0, y(i, "outrostart"), o = I(i, _(), f, 0, () => {
          y(i, "outroend"), b == null || b()
        })
      },
      stop: () => {
        f == null || f.abort(), o == null || o.abort()
      }
    },
    p = O;
  if ((p.transitions ?? (p.transitions = [])).push(c), r && Y) {
    var T = h;
    if (!T) {
      for (var l = p.parent; l && (l.f & B) !== 0;)
        for (;
          (l = l.parent) && (l.f & D) === 0;);
      T = !l || (l.f & L) !== 0
    }
    T && $(() => {
      U(() => c.in())
    })
  }
}

function I(t, i, a, e, r) {
  var s = e === 1;
  if (P(i)) {
    var n, h = !1;
    return W(() => {
      if (!h) {
        var p = i({
          direction: s ? "in" : "out"
        });
        n = I(t, p, a, e, r)
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
  if (a == null || a.deactivate(), !(i != null && i.duration)) return r(), {
    abort: E,
    deactivate: E,
    reset: E,
    t: () => e
  };
  const {
    delay: v = 0,
    css: w,
    tick: u,
    easing: d = V
  } = i;
  var f = [];
  if (s && a === void 0 && (u && u(0, 1), w)) {
    var o = S(w(0, 1));
    f.push(o, o)
  }
  var _ = () => 1 - e,
    c = t.animate(f, {
      duration: v,
      fill: "forwards"
    });
  return c.onfinish = () => {
    c.cancel();
    var p = (a == null ? void 0 : a.t()) ?? 1 - e;
    a == null || a.abort();
    var T = e - p,
      l = i.duration * Math.abs(T),
      b = [];
    if (l > 0) {
      var N = !1;
      if (w)
        for (var R = Math.ceil(l / 16.666666666666668), k = 0; k <= R; k += 1) {
          var A = p + T * d(k / R),
            C = S(w(A, 1 - A));
          b.push(C), N || (N = C.overflow === "hidden")
        }
      N && (t.style.overflow = "hidden"), _ = () => {
        var m = c.currentTime;
        return p + T * d(m / l)
      }, u && K(() => {
        if (c.playState !== "running") return !1;
        var m = _();
        return u(m, 1 - m), !0
      })
    }
    c = t.animate(b, {
      duration: l,
      fill: "forwards"
    }), c.onfinish = () => {
      _ = () => e, u == null || u(e, 1 - e), r()
    }
  }, {
    abort: () => {
      c && (c.cancel(), c.effect = null, c.onfinish = E)
    },
    deactivate: () => {
      r = E
    },
    reset: () => {
      e === 0 && (u == null || u(1, 0))
    },
    t: () => _()
  }
}
export {
  Z as a, tt as t
};