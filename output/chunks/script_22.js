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
} from "./Vo-uc5TQ.js";
import {
  a as U
} from "./DfhHzZuZ.js";
import {
  c as W
} from "./Dkyv4xM-.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "e1bb3bb6ac619eae9d90b3c0ac59135bee8cefab"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new t.Error().stack;
    i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "6001e056-9044-4d13-b294-b60ed6c87836", t._sentryDebugIdIdentifier = "sentry-dbid-6001e056-9044-4d13-b294-b60ed6c87836")
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
  S(() => {
    t.dispatchEvent(new CustomEvent(i))
  })
}

function J(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const i = t.split("-");
  return i.length === 1 ? i[0] : i[0] + i.slice(1).map(r => r[0].toUpperCase() + r.slice(1)).join("")
}

function F(t) {
  const i = {},
    r = t.split(";");
  for (const a of r) {
    const [e, s] = a.split(":");
    if (!e || s === void 0) break;
    const n = J(e.trim());
    i[n] = s.trim()
  }
  return i
}
const X = t => t;

function Z(t, i, r) {
  var a = W,
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
  var e = (t & G) !== 0,
    s = (t & K) !== 0,
    n = e && s,
    h = (t & z) !== 0,
    v = n ? "both" : e ? "in" : "out",
    w, u = i.inert,
    d = i.style.overflow,
    f, o;

  function _() {
    return S(() => w ?? (w = r()(i, (a == null ? void 0 : a()) ?? {}, {
      direction: v
    })))
  }
  var c = {
      is_global: h,
      in() {
        var b;
        if (i.inert = u, !e) {
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
  if ((p.transitions ?? (p.transitions = [])).push(c), e && U) {
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

function I(t, i, r, a, e) {
  var s = a === 1;
  if (M(i)) {
    var n, h = !1;
    return P(() => {
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
    easing: d = X
  } = i;
  var f = [];
  if (s && r === void 0 && (u && u(0, 1), w)) {
    var o = F(w(0, 1));
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
      l = i.duration * Math.abs(T),
      b = [];
    if (l > 0) {
      var N = !1;
      if (w)
        for (var R = Math.ceil(l / 16.666666666666668), C = 0; C <= R; C += 1) {
          var k = p + T * d(C / R),
            A = F(w(k, 1 - k));
          b.push(A), N || (N = A.overflow === "hidden")
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
    c = t.animate(b, {
      duration: l,
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