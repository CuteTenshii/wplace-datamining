import {
  aC as x,
  E as B,
  bl as L,
  bm as D,
  L as $,
  x as q,
  bn as z,
  bo as M,
  bp as P,
  aV as U,
  Y,
  bq as m,
  br as O
} from "./aONqeBJ4.js";
import {
  a as j
} from "./8rFs_PRB.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var i = new t.Error().stack;
    i && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[i] = "ba358f26-fe14-4790-9e94-edbcd342cdbc", t._sentryDebugIdIdentifier = "sentry-dbid-ba358f26-fe14-4790-9e94-edbcd342cdbc")
  } catch {}
})();
const G = () => performance.now(),
  g = {
    tick: t => requestAnimationFrame(t),
    now: () => G(),
    tasks: new Set
  };

function F() {
  const t = g.now();
  g.tasks.forEach(i => {
    i.c(t) || (g.tasks.delete(i), i.f())
  }), g.tasks.size !== 0 && g.tick(F)
}

function K(t) {
  let i;
  return g.tasks.size === 0 && g.tick(F), {
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

function N(t, i) {
  O(() => {
    t.dispatchEvent(new CustomEvent(i))
  })
}

function V(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const i = t.split("-");
  return i.length === 1 ? i[0] : i[0] + i.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function S(t) {
  const i = {},
    a = t.split(";");
  for (const n of a) {
    const [d, e] = n.split(":");
    if (!d || e === void 0) break;
    const s = V(d.trim());
    i[s] = e.trim()
  }
  return i
}
const W = t => t;

function Q(t, i, a) {
  var n = x,
    d = n.nodes,
    e, s, v, l = null;
  d.a ?? (d.a = {
    element: t,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (v == null || v.abort(), s = this.element.getBoundingClientRect(), e.left !== s.left || e.right !== s.right || e.top !== s.top || e.bottom !== s.bottom) {
        const o = i()(this.element, {
          from: e,
          to: s
        }, a == null ? void 0 : a());
        v = R(this.element, o, void 0, 1, () => {
          v == null || v.abort(), v = void 0
        })
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var {
          position: o,
          width: u,
          height: T
        } = getComputedStyle(t);
        if (o !== "absolute" && o !== "fixed") {
          var r = t.style;
          l = {
            position: r.position,
            width: r.width,
            height: r.height,
            transform: r.transform
          }, r.position = "absolute", r.width = u, r.height = T;
          var f = t.getBoundingClientRect();
          if (e.left !== f.left || e.top !== f.top) {
            var w = `translate(${e.left-f.left}px, ${e.top-f.top}px)`;
            r.transform = r.transform ? `${r.transform} ${w}` : w
          }
        }
      }
    },
    unfix() {
      if (l) {
        var o = t.style;
        o.position = l.position, o.width = l.width, o.height = l.height, o.transform = l.transform
      }
    }
  }), d.a.element = t
}

function X(t, i, a, n) {
  var E;
  var d = (t & M) !== 0,
    e = (t & P) !== 0,
    s = d && e,
    v = (t & z) !== 0,
    l = s ? "both" : d ? "in" : "out",
    o, u = i.inert,
    T = i.style.overflow,
    r, f;

  function w() {
    return O(() => o ?? (o = a()(i, (n == null ? void 0 : n()) ?? {}, {
      direction: l
    })))
  }
  var c = {
      is_global: v,
      in() {
        var b;
        if (i.inert = u, !d) {
          f == null || f.abort(), (b = f == null ? void 0 : f.reset) == null || b.call(f);
          return
        }
        e || r == null || r.abort(), r = R(i, w(), f, 1, () => {
          N(i, "introend"), r == null || r.abort(), r = o = void 0, i.style.overflow = T
        })
      },
      out(b) {
        if (!e) {
          b == null || b(), o = void 0;
          return
        }
        i.inert = !0, f = R(i, w(), r, 0, () => {
          N(i, "outroend"), b == null || b()
        })
      },
      stop: () => {
        r == null || r.abort(), f == null || f.abort()
      }
    },
    _ = x;
  if (((E = _.nodes).t ?? (E.t = [])).push(c), d && j) {
    var p = v;
    if (!p) {
      for (var h = _.parent; h && (h.f & B) !== 0;)
        for (;
          (h = h.parent) && (h.f & L) === 0;);
      p = !h || (h.f & D) !== 0
    }
    p && $(() => {
      q(() => c.in())
    })
  }
}

function R(t, i, a, n, d) {
  var e = n === 1;
  if (U(i)) {
    var s, v = !1;
    return Y(() => {
      if (!v) {
        var _ = i({
          direction: e ? "in" : "out"
        });
        s = R(t, _, a, n, d)
      }
    }), {
      abort: () => {
        v = !0, s == null || s.abort()
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    }
  }
  if (a == null || a.deactivate(), !(i != null && i.duration) && !(i != null && i.delay)) return N(t, e ? "introstart" : "outrostart"), d(), {
    abort: m,
    deactivate: m,
    reset: m,
    t: () => n
  };
  const {
    delay: l = 0,
    css: o,
    tick: u,
    easing: T = W
  } = i;
  var r = [];
  if (e && a === void 0 && (u && u(0, 1), o)) {
    var f = S(o(0, 1));
    r.push(f, f)
  }
  var w = () => 1 - n,
    c = t.animate(r, {
      duration: l,
      fill: "forwards"
    });
  return c.onfinish = () => {
    c.cancel(), N(t, e ? "introstart" : "outrostart");
    var _ = (a == null ? void 0 : a.t()) ?? 1 - n;
    a == null || a.abort();
    var p = n - _,
      h = i.duration * Math.abs(p),
      E = [];
    if (h > 0) {
      var b = !1;
      if (o)
        for (var C = Math.ceil(h / 16.666666666666668), A = 0; A <= C; A += 1) {
          var k = _ + p * T(A / C),
            y = S(o(k, 1 - k));
          E.push(y), b || (b = y.overflow === "hidden")
        }
      b && (t.style.overflow = "hidden"), w = () => {
        var I = c.currentTime;
        return _ + p * T(I / h)
      }, u && K(() => {
        if (c.playState !== "running") return !1;
        var I = w();
        return u(I, 1 - I), !0
      })
    }
    c = t.animate(E, {
      duration: h,
      fill: "forwards"
    }), c.onfinish = () => {
      w = () => n, u == null || u(n, 1 - n), d()
    }
  }, {
    abort: () => {
      c && (c.cancel(), c.effect = null, c.onfinish = m)
    },
    deactivate: () => {
      d = m
    },
    reset: () => {
      n === 0 && (u == null || u(1, 0))
    },
    t: () => w()
  }
}
export {
  Q as a, X as t
};