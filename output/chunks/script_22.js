import {
  ao as O,
  E as B,
  aE as L,
  aF as D,
  X as $,
  L as q,
  aG as z,
  aH as G,
  aI as K,
  aJ as S,
  aK as M,
  W as P,
  C as E
} from "./Ceyo7U-X.js";
import {
  a as U
} from "./Dvumt-ig.js";
import {
  c as W
} from "./BOPY34l9.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "1eec49a8880aaf0322f1c231fa7de26d6c5b6e23"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new t.Error().stack;
    i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "4f8546ce-a876-4610-9a39-385a05e34614", t._sentryDebugIdIdentifier = "sentry-dbid-4f8546ce-a876-4610-9a39-385a05e34614")
  })()
} catch {}
const j = () => performance.now(),
  g = {
    tick: t => requestAnimationFrame(t),
    now: () => j(),
    tasks: new Set
  };

function x() {
  const t = g.now();
  g.tasks.forEach(i => {
    i.c(t) || (g.tasks.delete(i), i.f())
  }), g.tasks.size !== 0 && g.tick(x)
}

function H(t) {
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
  S(() => {
    t.dispatchEvent(new CustomEvent(i))
  })
}

function J(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const i = t.split("-");
  return i.length === 1 ? i[0] : i[0] + i.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function F(t) {
  const i = {},
    a = t.split(";");
  for (const e of a) {
    const [r, s] = e.split(":");
    if (!r || s === void 0) break;
    const n = J(r.trim());
    i[n] = s.trim()
  }
  return i
}
const X = t => t;

function Z(t, i, a) {
  var e = W,
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
          width: b,
          height: u
        } = getComputedStyle(t);
        if (v !== "absolute" && v !== "fixed") {
          var d = t.style;
          h = {
            position: d.position,
            width: d.width,
            height: d.height,
            transform: d.transform
          }, d.position = "absolute", d.width = b, d.height = u;
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
  var r = (t & G) !== 0,
    s = (t & K) !== 0,
    n = r && s,
    h = (t & z) !== 0,
    v = n ? "both" : r ? "in" : "out",
    b, u = i.inert,
    d = i.style.overflow,
    f, o;

  function _() {
    return S(() => b ?? (b = a()(i, (e == null ? void 0 : e()) ?? {}, {
      direction: v
    })))
  }
  var c = {
      is_global: h,
      in() {
        var w;
        if (i.inert = u, !r) {
          o == null || o.abort(), (w = o == null ? void 0 : o.reset) == null || w.call(o);
          return
        }
        s || f == null || f.abort(), y(i, "introstart"), f = I(i, _(), o, 1, () => {
          y(i, "introend"), f == null || f.abort(), f = b = void 0, i.style.overflow = d
        })
      },
      out(w) {
        if (!s) {
          w == null || w(), b = void 0;
          return
        }
        i.inert = !0, y(i, "outrostart"), o = I(i, _(), f, 0, () => {
          y(i, "outroend"), w == null || w()
        })
      },
      stop: () => {
        f == null || f.abort(), o == null || o.abort()
      }
    },
    p = O;
  if ((p.transitions ?? (p.transitions = [])).push(c), r && U) {
    var T = h;
    if (!T) {
      for (var l = p.parent; l && (l.f & B) !== 0;)
        for (;
          (l = l.parent) && (l.f & L) === 0;);
      T = !l || (l.f & D) !== 0
    }
    T && $(() => {
      q(() => c.in())
    })
  }
}

function I(t, i, a, e, r) {
  var s = e === 1;
  if (M(i)) {
    var n, h = !1;
    return P(() => {
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
    css: b,
    tick: u,
    easing: d = X
  } = i;
  var f = [];
  if (s && a === void 0 && (u && u(0, 1), b)) {
    var o = F(b(0, 1));
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
      w = [];
    if (l > 0) {
      var N = !1;
      if (b)
        for (var R = Math.ceil(l / 16.666666666666668), C = 0; C <= R; C += 1) {
          var k = p + T * d(C / R),
            A = F(b(k, 1 - k));
          w.push(A), N || (N = A.overflow === "hidden")
        }
      N && (t.style.overflow = "hidden"), _ = () => {
        var m = c.currentTime;
        return p + T * d(m / l)
      }, u && H(() => {
        if (c.playState !== "running") return !1;
        var m = _();
        return u(m, 1 - m), !0
      })
    }
    c = t.animate(w, {
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