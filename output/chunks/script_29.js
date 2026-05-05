import {
  aA as S,
  E as $,
  bi as L,
  bj as j,
  o as q,
  x as z,
  bk as M,
  bl as P,
  bm as U,
  aY as G,
  V as J,
  aZ as A,
  aJ as F
} from "./wFsvFKKp.js";
import {
  a as K
} from "./B_EGJrw5.js";
const V = () => performance.now(),
  _ = {
    tick: i => requestAnimationFrame(i),
    now: () => V(),
    tasks: new Set
  };

function B() {
  const i = _.now();
  _.tasks.forEach(t => {
    t.c(i) || (_.tasks.delete(t), t.f())
  }), _.tasks.size !== 0 && _.tick(B)
}

function W(i) {
  let t;
  return _.tasks.size === 0 && _.tick(B), {
    promise: new Promise(a => {
      _.tasks.add(t = {
        c: i,
        f: a
      })
    }),
    abort() {
      _.tasks.delete(t)
    }
  }
}

function k(i, t) {
  F(() => {
    i.dispatchEvent(new CustomEvent(t))
  })
}

function Y(i) {
  if (i === "float") return "cssFloat";
  if (i === "offset") return "cssOffset";
  if (i.startsWith("--")) return i;
  const t = i.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function O(i) {
  const t = {},
    a = i.split(";");
  for (const s of a) {
    const [v, e] = s.split(":");
    if (!v || e === void 0) break;
    const n = Y(v.trim());
    t[n] = e.trim()
  }
  return t
}
const Z = i => i;

function H(i, t, a) {
  var s = S,
    v = s.nodes,
    e, n, d, w = null;
  v.a ?? (v.a = {
    element: i,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (d == null || d.abort(), n = this.element.getBoundingClientRect(), e.left !== n.left || e.right !== n.right || e.top !== n.top || e.bottom !== n.bottom) {
        const o = t()(this.element, {
          from: e,
          to: n
        }, a == null ? void 0 : a());
        d = C(this.element, o, void 0, 1, () => {
          d == null || d.abort(), d = void 0
        })
      }
    },
    fix() {
      if (!i.getAnimations().length) {
        var {
          position: o,
          width: u,
          height: p
        } = getComputedStyle(i);
        if (o !== "absolute" && o !== "fixed") {
          var r = i.style;
          w = {
            position: r.position,
            width: r.width,
            height: r.height,
            transform: r.transform
          }, r.position = "absolute", r.width = u, r.height = p;
          var f = i.getBoundingClientRect();
          if (e.left !== f.left || e.top !== f.top) {
            var b = `translate(${e.left-f.left}px, ${e.top-f.top}px)`;
            r.transform = r.transform ? `${r.transform} ${b}` : b
          }
        }
      }
    },
    unfix() {
      if (w) {
        var o = i.style;
        o.position = w.position, o.width = w.width, o.height = w.height, o.transform = w.transform
      }
    }
  }), v.a.element = i
}

function Q(i, t, a, s) {
  var T;
  var v = (i & P) !== 0,
    e = (i & U) !== 0,
    n = v && e,
    d = (i & M) !== 0,
    w = n ? "both" : v ? "in" : "out",
    o, u = t.inert,
    p = t.style.overflow,
    r, f;

  function b() {
    return F(() => o ?? (o = a()(t, (s == null ? void 0 : s()) ?? {}, {
      direction: w
    })))
  }
  var h = {
      is_global: d,
      in() {
        var l;
        if (t.inert = u, !v) {
          f == null || f.abort(), (l = f == null ? void 0 : f.reset) == null || l.call(f);
          return
        }
        e || r == null || r.abort(), r = C(t, b(), f, 1, () => {
          k(t, "introend"), r == null || r.abort(), r = o = void 0, t.style.overflow = p
        })
      },
      out(l) {
        if (!e) {
          l == null || l(), o = void 0;
          return
        }
        t.inert = !0, f = C(t, b(), r, 0, () => {
          k(t, "outroend"), l == null || l()
        })
      },
      stop: () => {
        r == null || r.abort(), f == null || f.abort()
      }
    },
    g = S;
  if (((T = g.nodes).t ?? (T.t = [])).push(h), v && K) {
    var m = d;
    if (!m) {
      for (var c = g.parent; c && (c.f & $) !== 0;)
        for (;
          (c = c.parent) && (c.f & L) === 0;);
      m = !c || (c.f & j) !== 0
    }
    m && q(() => {
      z(() => h.in())
    })
  }
}

function C(i, t, a, s, v) {
  var e = s === 1;
  if (G(t)) {
    var n, d = !1;
    return J(() => {
      if (!d) {
        var g = t({
          direction: e ? "in" : "out"
        });
        n = C(i, g, a, s, v)
      }
    }), {
      abort: () => {
        d = !0, n == null || n.abort()
      },
      deactivate: () => n.deactivate(),
      reset: () => n.reset(),
      t: () => n.t()
    }
  }
  if (a == null || a.deactivate(), !(t != null && t.duration) && !(t != null && t.delay)) return k(i, e ? "introstart" : "outrostart"), v(), {
    abort: A,
    deactivate: A,
    reset: A,
    t: () => s
  };
  const {
    delay: w = 0,
    css: o,
    tick: u,
    easing: p = Z
  } = t;
  var r = [];
  if (e && a === void 0 && (u && u(0, 1), o)) {
    var f = O(o(0, 1));
    r.push(f, f)
  }
  var b = () => 1 - s,
    h = i.animate(r, {
      duration: w,
      fill: "forwards"
    });
  return h.onfinish = () => {
    h.cancel(), k(i, e ? "introstart" : "outrostart");
    var g = (a == null ? void 0 : a.t()) ?? 1 - s;
    a == null || a.abort();
    var m = s - g,
      c = t.duration * Math.abs(m),
      T = [];
    if (c > 0) {
      var l = !1;
      if (o)
        for (var R = Math.ceil(c / 16.666666666666668), E = 0; E <= R; E += 1) {
          var x = g + m * p(E / R),
            I = O(o(x, 1 - x));
          T.push(I), l || (l = I.overflow === "hidden")
        }
      l && (i.style.overflow = "hidden"), b = () => {
        var N = h.currentTime;
        return g + m * p(N / c)
      }, u && W(() => {
        if (h.playState !== "running") return !1;
        var N = b();
        return u(N, 1 - N), !0
      })
    }
    h = i.animate(T, {
      duration: c,
      fill: "forwards"
    }), h.onfinish = () => {
      b = () => s, u == null || u(s, 1 - s), v()
    }
  }, {
    abort: () => {
      h && (h.cancel(), h.effect = null, h.onfinish = A)
    },
    deactivate: () => {
      v = A
    },
    reset: () => {
      s === 0 && (u == null || u(1, 0))
    },
    t: () => b()
  }
}
export {
  H as a, Q as t
};