import {
  aC as S,
  E as $,
  bm as q,
  bn as L,
  K as z,
  x as K,
  bo as M,
  bp as P,
  bq as U,
  aV as W,
  X as j,
  aW as C,
  br as F
} from "./C21-Odj5.js";
import {
  a as G
} from "./CQn0K5Yj.js";
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

function X(i) {
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

function A(i, t) {
  F(() => {
    i.dispatchEvent(new CustomEvent(t))
  })
}

function y(i) {
  if (i === "float") return "cssFloat";
  if (i === "offset") return "cssOffset";
  if (i.startsWith("--")) return i;
  const t = i.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function O(i) {
  const t = {},
    a = i.split(";");
  for (const n of a) {
    const [v, e] = n.split(":");
    if (!v || e === void 0) break;
    const s = y(v.trim());
    t[s] = e.trim()
  }
  return t
}
const D = i => i;

function Q(i, t, a) {
  var n = S,
    v = n.nodes,
    e, s, d, b = null;
  v.a ?? (v.a = {
    element: i,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (d == null || d.abort(), s = this.element.getBoundingClientRect(), e.left !== s.left || e.right !== s.right || e.top !== s.top || e.bottom !== s.bottom) {
        const o = t()(this.element, {
          from: e,
          to: s
        }, a == null ? void 0 : a());
        d = E(this.element, o, void 0, 1, () => {
          d == null || d.abort(), d = void 0
        })
      }
    },
    fix() {
      if (!i.getAnimations().length) {
        var {
          position: o,
          width: u,
          height: m
        } = getComputedStyle(i);
        if (o !== "absolute" && o !== "fixed") {
          var r = i.style;
          b = {
            position: r.position,
            width: r.width,
            height: r.height,
            transform: r.transform
          }, r.position = "absolute", r.width = u, r.height = m;
          var f = i.getBoundingClientRect();
          if (e.left !== f.left || e.top !== f.top) {
            var w = `translate(${e.left-f.left}px, ${e.top-f.top}px)`;
            r.transform = r.transform ? `${r.transform} ${w}` : w
          }
        }
      }
    },
    unfix() {
      if (b) {
        var o = i.style;
        o.position = b.position, o.width = b.width, o.height = b.height, o.transform = b.transform
      }
    }
  }), v.a.element = i
}

function Y(i, t, a, n) {
  var T;
  var v = (i & P) !== 0,
    e = (i & U) !== 0,
    s = v && e,
    d = (i & M) !== 0,
    b = s ? "both" : v ? "in" : "out",
    o, u = t.inert,
    m = t.style.overflow,
    r, f;

  function w() {
    return F(() => o ?? (o = a()(t, (n == null ? void 0 : n()) ?? {}, {
      direction: b
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
        e || r == null || r.abort(), r = E(t, w(), f, 1, () => {
          A(t, "introend"), r == null || r.abort(), r = o = void 0, t.style.overflow = m
        })
      },
      out(l) {
        if (!e) {
          l == null || l(), o = void 0;
          return
        }
        t.inert = !0, f = E(t, w(), r, 0, () => {
          A(t, "outroend"), l == null || l()
        })
      },
      stop: () => {
        r == null || r.abort(), f == null || f.abort()
      }
    },
    p = S;
  if (((T = p.nodes).t ?? (T.t = [])).push(h), v && G) {
    var g = d;
    if (!g) {
      for (var c = p.parent; c && (c.f & $) !== 0;)
        for (;
          (c = c.parent) && (c.f & q) === 0;);
      g = !c || (c.f & L) !== 0
    }
    g && z(() => {
      K(() => h.in())
    })
  }
}

function E(i, t, a, n, v) {
  var e = n === 1;
  if (W(t)) {
    var s, d = !1;
    return j(() => {
      if (!d) {
        var p = t({
          direction: e ? "in" : "out"
        });
        s = E(i, p, a, n, v)
      }
    }), {
      abort: () => {
        d = !0, s == null || s.abort()
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    }
  }
  if (a == null || a.deactivate(), !(t != null && t.duration) && !(t != null && t.delay)) return A(i, e ? "introstart" : "outrostart"), v(), {
    abort: C,
    deactivate: C,
    reset: C,
    t: () => n
  };
  const {
    delay: b = 0,
    css: o,
    tick: u,
    easing: m = D
  } = t;
  var r = [];
  if (e && a === void 0 && (u && u(0, 1), o)) {
    var f = O(o(0, 1));
    r.push(f, f)
  }
  var w = () => 1 - n,
    h = i.animate(r, {
      duration: b,
      fill: "forwards"
    });
  return h.onfinish = () => {
    h.cancel(), A(i, e ? "introstart" : "outrostart");
    var p = (a == null ? void 0 : a.t()) ?? 1 - n;
    a == null || a.abort();
    var g = n - p,
      c = t.duration * Math.abs(g),
      T = [];
    if (c > 0) {
      var l = !1;
      if (o)
        for (var k = Math.ceil(c / 16.666666666666668), R = 0; R <= k; R += 1) {
          var x = p + g * m(R / k),
            I = O(o(x, 1 - x));
          T.push(I), l || (l = I.overflow === "hidden")
        }
      l && (i.style.overflow = "hidden"), w = () => {
        var N = h.currentTime;
        return p + g * m(N / c)
      }, u && X(() => {
        if (h.playState !== "running") return !1;
        var N = w();
        return u(N, 1 - N), !0
      })
    }
    h = i.animate(T, {
      duration: c,
      fill: "forwards"
    }), h.onfinish = () => {
      w = () => n, u == null || u(n, 1 - n), v()
    }
  }, {
    abort: () => {
      h && (h.cancel(), h.effect = null, h.onfinish = C)
    },
    deactivate: () => {
      v = C
    },
    reset: () => {
      n === 0 && (u == null || u(1, 0))
    },
    t: () => w()
  }
}
export {
  Q as a, Y as t
};