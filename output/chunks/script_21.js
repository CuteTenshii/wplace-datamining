import {
  ag as B,
  E as $,
  aO as L,
  aP as P,
  O as U,
  C as q,
  aQ as z,
  aR as M,
  aS as j,
  aT as S,
  aU as G,
  N as K,
  ax as T
} from "./DDWIi-vs.js";
import {
  a as Q
} from "./Ob_J7Gis.js";
import {
  c as W
} from "./DieFH19D.js";
const D = () => performance.now(),
  b = {
    tick: i => requestAnimationFrame(i),
    now: () => D(),
    tasks: new Set
  };

function I() {
  const i = b.now();
  b.tasks.forEach(t => {
    t.c(i) || (b.tasks.delete(t), t.f())
  }), b.tasks.size !== 0 && b.tick(I)
}

function H(i) {
  let t;
  return b.tasks.size === 0 && b.tick(I), {
    promise: new Promise(r => {
      b.tasks.add(t = {
        c: i,
        f: r
      })
    }),
    abort() {
      b.tasks.delete(t)
    }
  }
}

function E(i, t) {
  S(() => {
    i.dispatchEvent(new CustomEvent(t))
  })
}

function J(i) {
  if (i === "float") return "cssFloat";
  if (i === "offset") return "cssOffset";
  if (i.startsWith("--")) return i;
  const t = i.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(r => r[0].toUpperCase() + r.slice(1)).join("")
}

function F(i) {
  const t = {},
    r = i.split(";");
  for (const e of r) {
    const [a, o] = e.split(":");
    if (!a || o === void 0) break;
    const n = J(a.trim());
    t[n] = o.trim()
  }
  return t
}
const V = i => i;

function y(i, t, r) {
  var e = W,
    a, o, n, h = null;
  e.a ?? (e.a = {
    element: i,
    measure() {
      a = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), o = this.element.getBoundingClientRect(), a.left !== o.left || a.right !== o.right || a.top !== o.top || a.bottom !== o.bottom) {
        const d = t()(this.element, {
          from: a,
          to: o
        }, r == null ? void 0 : r());
        n = N(this.element, d, void 0, 1, () => {
          n == null || n.abort(), n = void 0
        })
      }
    },
    fix() {
      if (!i.getAnimations().length) {
        var {
          position: d,
          width: p,
          height: u
        } = getComputedStyle(i);
        if (d !== "absolute" && d !== "fixed") {
          var v = i.style;
          h = {
            position: v.position,
            width: v.width,
            height: v.height,
            transform: v.transform
          }, v.position = "absolute", v.width = p, v.height = u;
          var s = i.getBoundingClientRect();
          if (a.left !== s.left || a.top !== s.top) {
            var f = `translate(${a.left-s.left}px, ${a.top-s.top}px)`;
            v.transform = v.transform ? `${v.transform} ${f}` : f
          }
        }
      }
    },
    unfix() {
      if (h) {
        var d = i.style;
        d.position = h.position, d.width = h.width, d.height = h.height, d.transform = h.transform
      }
    }
  }), e.a.element = i
}

function tt(i, t, r, e) {
  var a = (i & M) !== 0,
    o = (i & j) !== 0,
    n = a && o,
    h = (i & z) !== 0,
    d = n ? "both" : a ? "in" : "out",
    p, u = t.inert,
    v = t.style.overflow,
    s, f;

  function g() {
    return S(() => p ?? (p = r()(t, (e == null ? void 0 : e()) ?? {}, {
      direction: d
    })))
  }
  var c = {
      is_global: h,
      in() {
        var w;
        if (t.inert = u, !a) {
          f == null || f.abort(), (w = f == null ? void 0 : f.reset) == null || w.call(f);
          return
        }
        o || s == null || s.abort(), E(t, "introstart"), s = N(t, g(), f, 1, () => {
          E(t, "introend"), s == null || s.abort(), s = p = void 0, t.style.overflow = v
        })
      },
      out(w) {
        if (!o) {
          w == null || w(), p = void 0;
          return
        }
        t.inert = !0, E(t, "outrostart"), f = N(t, g(), s, 0, () => {
          E(t, "outroend"), w == null || w()
        })
      },
      stop: () => {
        s == null || s.abort(), f == null || f.abort()
      }
    },
    _ = B;
  if ((_.transitions ?? (_.transitions = [])).push(c), a && Q) {
    var m = h;
    if (!m) {
      for (var l = _.parent; l && (l.f & $) !== 0;)
        for (;
          (l = l.parent) && (l.f & L) === 0;);
      m = !l || (l.f & P) !== 0
    }
    m && U(() => {
      q(() => c.in())
    })
  }
}

function N(i, t, r, e, a) {
  var o = e === 1;
  if (G(t)) {
    var n, h = !1;
    return K(() => {
      if (!h) {
        var _ = t({
          direction: o ? "in" : "out"
        });
        n = N(i, _, r, e, a)
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
    abort: T,
    deactivate: T,
    reset: T,
    t: () => e
  };
  const {
    delay: d = 0,
    css: p,
    tick: u,
    easing: v = V
  } = t;
  var s = [];
  if (o && r === void 0 && (u && u(0, 1), p)) {
    var f = F(p(0, 1));
    s.push(f, f)
  }
  var g = () => 1 - e,
    c = i.animate(s, {
      duration: d,
      fill: "forwards"
    });
  return c.onfinish = () => {
    c.cancel();
    var _ = (r == null ? void 0 : r.t()) ?? 1 - e;
    r == null || r.abort();
    var m = e - _,
      l = t.duration * Math.abs(m),
      w = [];
    if (l > 0) {
      var k = !1;
      if (p)
        for (var A = Math.ceil(l / 16.666666666666668), R = 0; R <= A; R += 1) {
          var O = _ + m * v(R / A),
            x = F(p(O, 1 - O));
          w.push(x), k || (k = x.overflow === "hidden")
        }
      k && (i.style.overflow = "hidden"), g = () => {
        var C = c.currentTime;
        return _ + m * v(C / l)
      }, u && H(() => {
        if (c.playState !== "running") return !1;
        var C = g();
        return u(C, 1 - C), !0
      })
    }
    c = i.animate(w, {
      duration: l,
      fill: "forwards"
    }), c.onfinish = () => {
      g = () => e, u == null || u(e, 1 - e), a()
    }
  }, {
    abort: () => {
      c && (c.cancel(), c.effect = null, c.onfinish = T)
    },
    deactivate: () => {
      a = T
    },
    reset: () => {
      e === 0 && (u == null || u(1, 0))
    },
    t: () => g()
  }
}
export {
  y as a, tt as t
};