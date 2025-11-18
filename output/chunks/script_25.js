import {
  an as O,
  E as B,
  aT as D,
  aU as L,
  e as $,
  F as U,
  aV as q,
  aW as z,
  aX as M,
  aY as F,
  aS as P,
  R as W,
  x as E
} from "./DnEjpmVm.js";
import {
  a as Y
} from "./jR1LGzZ5.js";
import {
  c as j
} from "./K6W4igAS.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "dcafbf70eeb3b56ec7077bb04087bc09c7e58c55"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new t.Error().stack;
    i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "bdec27be-b8c7-4fec-900c-089611ea207e", t._sentryDebugIdIdentifier = "sentry-dbid-bdec27be-b8c7-4fec-900c-089611ea207e")
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
    promise: new Promise(e => {
      g.tasks.add(i = {
        c: t,
        f: e
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

function V(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const i = t.split("-");
  return i.length === 1 ? i[0] : i[0] + i.slice(1).map(e => e[0].toUpperCase() + e.slice(1)).join("")
}

function S(t) {
  const i = {},
    e = t.split(";");
  for (const a of e) {
    const [r, s] = a.split(":");
    if (!r || s === void 0) break;
    const n = V(r.trim());
    i[n] = s.trim()
  }
  return i
}
const X = t => t;

function Z(t, i, e) {
  var a = j,
    r, s, n, h = null;
  a.a ?? (a.a = {
    element: t,
    measure() {
      r = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), s = this.element.getBoundingClientRect(), r.left !== s.left || r.right !== s.right || r.top !== s.top || r.bottom !== s.bottom) {
        const u = i()(this.element, {
          from: r,
          to: s
        }, e == null ? void 0 : e());
        n = I(this.element, u, void 0, 1, () => {
          n == null || n.abort(), n = void 0
        })
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var {
          position: u,
          width: w,
          height: c
        } = getComputedStyle(t);
        if (u !== "absolute" && u !== "fixed") {
          var d = t.style;
          h = {
            position: d.position,
            width: d.width,
            height: d.height,
            transform: d.transform
          }, d.position = "absolute", d.width = w, d.height = c;
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
        var u = t.style;
        u.position = h.position, u.width = h.width, u.height = h.height, u.transform = h.transform
      }
    }
  }), a.a.element = t
}

function tt(t, i, e, a) {
  var r = (t & z) !== 0,
    s = (t & M) !== 0,
    n = r && s,
    h = (t & q) !== 0,
    u = n ? "both" : r ? "in" : "out",
    w, c = i.inert,
    d = i.style.overflow,
    f, o;

  function _() {
    return F(() => w ?? (w = e()(i, (a == null ? void 0 : a()) ?? {}, {
      direction: u
    })))
  }
  var v = {
      is_global: h,
      in() {
        var b;
        if (i.inert = c, !r) {
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
  if ((p.transitions ?? (p.transitions = [])).push(v), r && Y) {
    var T = h;
    if (!T) {
      for (var l = p.parent; l && (l.f & B) !== 0;)
        for (;
          (l = l.parent) && (l.f & D) === 0;);
      T = !l || (l.f & L) !== 0
    }
    T && $(() => {
      U(() => v.in())
    })
  }
}

function I(t, i, e, a, r) {
  var s = a === 1;
  if (P(i)) {
    var n, h = !1;
    return W(() => {
      if (!h) {
        var p = i({
          direction: s ? "in" : "out"
        });
        n = I(t, p, e, a, r)
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
  if (e == null || e.deactivate(), !(i != null && i.duration)) return r(), {
    abort: E,
    deactivate: E,
    reset: E,
    t: () => a
  };
  const {
    delay: u = 0,
    css: w,
    tick: c,
    easing: d = X
  } = i;
  var f = [];
  if (s && e === void 0 && (c && c(0, 1), w)) {
    var o = S(w(0, 1));
    f.push(o, o)
  }
  var _ = () => 1 - a,
    v = t.animate(f, {
      duration: u,
      fill: "forwards"
    });
  return v.onfinish = () => {
    v.cancel();
    var p = (e == null ? void 0 : e.t()) ?? 1 - a;
    e == null || e.abort();
    var T = a - p,
      l = i.duration * Math.abs(T),
      b = [];
    if (l > 0) {
      var N = !1;
      if (w)
        for (var k = Math.ceil(l / 16.666666666666668), R = 0; R <= k; R += 1) {
          var A = p + T * d(R / k),
            C = S(w(A, 1 - A));
          b.push(C), N || (N = C.overflow === "hidden")
        }
      N && (t.style.overflow = "hidden"), _ = () => {
        var m = v.currentTime;
        return p + T * d(m / l)
      }, c && K(() => {
        if (v.playState !== "running") return !1;
        var m = _();
        return c(m, 1 - m), !0
      })
    }
    v = t.animate(b, {
      duration: l,
      fill: "forwards"
    }), v.onfinish = () => {
      _ = () => a, c == null || c(a, 1 - a), r()
    }
  }, {
    abort: () => {
      v && (v.cancel(), v.effect = null, v.onfinish = E)
    },
    deactivate: () => {
      r = E
    },
    reset: () => {
      a === 0 && (c == null || c(1, 0))
    },
    t: () => _()
  }
}
export {
  Z as a, tt as t
};