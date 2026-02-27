import {
  ad as O,
  E as B,
  bc as D,
  bd as L,
  B as $,
  y as q,
  be as z,
  bf as M,
  bg as P,
  bh as F,
  aT as U,
  S as j,
  bi as E
} from "./BX08WKHH.js";
import {
  a as G
} from "./BuYVmOfq.js";
import {
  c as K
} from "./v4_ylhi3.js";
(function() {
  try {
    var i = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    i.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var i = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new i.Error().stack;
    t && (i._sentryDebugIds = i._sentryDebugIds || {}, i._sentryDebugIds[t] = "d487da0d-3d60-4c03-addd-77fe5f5b9a69", i._sentryDebugIdIdentifier = "sentry-dbid-d487da0d-3d60-4c03-addd-77fe5f5b9a69")
  })()
} catch {}
const W = () => performance.now(),
  g = {
    tick: i => requestAnimationFrame(i),
    now: () => W(),
    tasks: new Set
  };

function x() {
  const i = g.now();
  g.tasks.forEach(t => {
    t.c(i) || (g.tasks.delete(t), t.f())
  }), g.tasks.size !== 0 && g.tick(x)
}

function Y(i) {
  let t;
  return g.tasks.size === 0 && g.tick(x), {
    promise: new Promise(r => {
      g.tasks.add(t = {
        c: i,
        f: r
      })
    }),
    abort() {
      g.tasks.delete(t)
    }
  }
}

function y(i, t) {
  F(() => {
    i.dispatchEvent(new CustomEvent(t))
  })
}

function H(i) {
  if (i === "float") return "cssFloat";
  if (i === "offset") return "cssOffset";
  if (i.startsWith("--")) return i;
  const t = i.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(r => r[0].toUpperCase() + r.slice(1)).join("")
}

function S(i) {
  const t = {},
    r = i.split(";");
  for (const e of r) {
    const [a, s] = e.split(":");
    if (!a || s === void 0) break;
    const n = H(a.trim());
    t[n] = s.trim()
  }
  return t
}
const J = i => i;

function Z(i, t, r) {
  var e = K,
    a, s, n, h = null;
  e.a ?? (e.a = {
    element: i,
    measure() {
      a = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), s = this.element.getBoundingClientRect(), a.left !== s.left || a.right !== s.right || a.top !== s.top || a.bottom !== s.bottom) {
        const v = t()(this.element, {
          from: a,
          to: s
        }, r == null ? void 0 : r());
        n = I(this.element, v, void 0, 1, () => {
          n == null || n.abort(), n = void 0
        })
      }
    },
    fix() {
      if (!i.getAnimations().length) {
        var {
          position: v,
          width: w,
          height: u
        } = getComputedStyle(i);
        if (v !== "absolute" && v !== "fixed") {
          var d = i.style;
          h = {
            position: d.position,
            width: d.width,
            height: d.height,
            transform: d.transform
          }, d.position = "absolute", d.width = w, d.height = u;
          var f = i.getBoundingClientRect();
          if (a.left !== f.left || a.top !== f.top) {
            var o = `translate(${a.left-f.left}px, ${a.top-f.top}px)`;
            d.transform = d.transform ? `${d.transform} ${o}` : o
          }
        }
      }
    },
    unfix() {
      if (h) {
        var v = i.style;
        v.position = h.position, v.width = h.width, v.height = h.height, v.transform = h.transform
      }
    }
  }), e.a.element = i
}

function ii(i, t, r, e) {
  var a = (i & M) !== 0,
    s = (i & P) !== 0,
    n = a && s,
    h = (i & z) !== 0,
    v = n ? "both" : a ? "in" : "out",
    w, u = t.inert,
    d = t.style.overflow,
    f, o;

  function _() {
    return F(() => w ?? (w = r()(t, (e == null ? void 0 : e()) ?? {}, {
      direction: v
    })))
  }
  var c = {
      is_global: h,
      in() {
        var b;
        if (t.inert = u, !a) {
          o == null || o.abort(), (b = o == null ? void 0 : o.reset) == null || b.call(o);
          return
        }
        s || f == null || f.abort(), y(t, "introstart"), f = I(t, _(), o, 1, () => {
          y(t, "introend"), f == null || f.abort(), f = w = void 0, t.style.overflow = d
        })
      },
      out(b) {
        if (!s) {
          b == null || b(), w = void 0;
          return
        }
        t.inert = !0, y(t, "outrostart"), o = I(t, _(), f, 0, () => {
          y(t, "outroend"), b == null || b()
        })
      },
      stop: () => {
        f == null || f.abort(), o == null || o.abort()
      }
    },
    p = O;
  if ((p.transitions ?? (p.transitions = [])).push(c), a && G) {
    var T = h;
    if (!T) {
      for (var l = p.parent; l && (l.f & B) !== 0;)
        for (;
          (l = l.parent) && (l.f & D) === 0;);
      T = !l || (l.f & L) !== 0
    }
    T && $(() => {
      q(() => c.in())
    })
  }
}

function I(i, t, r, e, a) {
  var s = e === 1;
  if (U(t)) {
    var n, h = !1;
    return j(() => {
      if (!h) {
        var p = t({
          direction: s ? "in" : "out"
        });
        n = I(i, p, r, e, a)
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
  if (r == null || r.deactivate(), !(t != null && t.duration)) return a(), {
    abort: E,
    deactivate: E,
    reset: E,
    t: () => e
  };
  const {
    delay: v = 0,
    css: w,
    tick: u,
    easing: d = J
  } = t;
  var f = [];
  if (s && r === void 0 && (u && u(0, 1), w)) {
    var o = S(w(0, 1));
    f.push(o, o)
  }
  var _ = () => 1 - e,
    c = i.animate(f, {
      duration: v,
      fill: "forwards"
    });
  return c.onfinish = () => {
    c.cancel();
    var p = (r == null ? void 0 : r.t()) ?? 1 - e;
    r == null || r.abort();
    var T = e - p,
      l = t.duration * Math.abs(T),
      b = [];
    if (l > 0) {
      var R = !1;
      if (w)
        for (var k = Math.ceil(l / 16.666666666666668), N = 0; N <= k; N += 1) {
          var A = p + T * d(N / k),
            C = S(w(A, 1 - A));
          b.push(C), R || (R = C.overflow === "hidden")
        }
      R && (i.style.overflow = "hidden"), _ = () => {
        var m = c.currentTime;
        return p + T * d(m / l)
      }, u && Y(() => {
        if (c.playState !== "running") return !1;
        var m = _();
        return u(m, 1 - m), !0
      })
    }
    c = i.animate(b, {
      duration: l,
      fill: "forwards"
    }), c.onfinish = () => {
      _ = () => e, u == null || u(e, 1 - e), a()
    }
  }, {
    abort: () => {
      c && (c.cancel(), c.effect = null, c.onfinish = E)
    },
    deactivate: () => {
      a = E
    },
    reset: () => {
      e === 0 && (u == null || u(1, 0))
    },
    t: () => _()
  }
}
export {
  Z as a, ii as t
};