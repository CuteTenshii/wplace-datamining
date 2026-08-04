import {
  V as B,
  M as L,
  bg as M,
  bh as U,
  T as j,
  B as q,
  bi as z,
  bj as P,
  bk as G,
  aU as K,
  ap as V,
  n as N,
  bl as F
} from "./DUZ_qUVk.js";
import {
  a as W
} from "./DtUyTUmd.js";
const y = () => performance.now(),
  p = {
    tick: i => requestAnimationFrame(i),
    now: () => y(),
    tasks: new Set
  };

function $() {
  const i = p.now();
  p.tasks.forEach(t => {
    t.c(i) || (p.tasks.delete(t), t.f())
  }), p.tasks.size !== 0 && p.tick($)
}

function D(i) {
  let t;
  return p.tasks.size === 0 && p.tick($), {
    promise: new Promise(a => {
      p.tasks.add(t = {
        c: i,
        f: a
      })
    }),
    abort() {
      p.tasks.delete(t)
    }
  }
}

function A(i, t) {
  F(() => {
    i.dispatchEvent(new CustomEvent(t))
  })
}

function H(i) {
  if (i === "float") return "cssFloat";
  if (i === "offset") return "cssOffset";
  if (i.startsWith("--")) return i;
  const t = i.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function S(i) {
  const t = {},
    a = i.split(";");
  for (const n of a) {
    const [o, e] = n.split(":");
    if (!o || e === void 0) break;
    const u = H(o.trim());
    t[u] = e.trim()
  }
  return t
}
const J = i => i;

function Y(i, t, a) {
  var n = B,
    o = n.nodes,
    e, u, s, l = null;
  o.a ?? (o.a = {
    element: i,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (s == null || s.abort(), u = this.element.getBoundingClientRect(), e.left !== u.left || e.right !== u.right || e.top !== u.top || e.bottom !== u.bottom) {
        const v = t()(this.element, {
          from: e,
          to: u
        }, a == null ? void 0 : a());
        s = C(this.element, v, void 0, 1, () => {}, () => {
          s == null || s.abort(), s = void 0
        })
      }
    },
    fix() {
      if (!i.getAnimations().length) {
        var {
          position: v,
          width: _,
          height: d
        } = getComputedStyle(i);
        if (v !== "absolute" && v !== "fixed") {
          var r = i.style;
          l = {
            position: r.position,
            width: r.width,
            height: r.height,
            transform: r.transform
          }, r.position = "absolute", r.width = _, r.height = d;
          var f = i.getBoundingClientRect();
          if (e.left !== f.left || e.top !== f.top) {
            var T = `translate(${e.left-f.left}px, ${e.top-f.top}px)`;
            r.transform = r.transform ? `${r.transform} ${T}` : T
          }
        }
      }
    },
    unfix() {
      if (l) {
        var v = i.style;
        v.position = l.position, v.width = l.width, v.height = l.height, v.transform = l.transform
      }
    }
  }), o.a.element = i
}

function Z(i, t, a, n) {
  var m;
  var o = (i & P) !== 0,
    e = (i & G) !== 0,
    u = o && e,
    s = (i & z) !== 0,
    l = u ? "both" : o ? "in" : "out",
    v, _ = t.inert,
    d = t.style.overflow,
    r, f;

  function T() {
    return F(() => v ?? (v = a()(t, (n == null ? void 0 : n()) ?? {}, {
      direction: l
    })))
  }
  var g = {
      is_global: s,
      in() {
        var c;
        if (t.inert = _, !o) {
          f == null || f.abort(), (c = f == null ? void 0 : f.reset) == null || c.call(f);
          return
        }
        e || r == null || r.abort(), r = C(t, T(), f, 1, () => {
          A(t, "introstart")
        }, () => {
          A(t, "introend"), r == null || r.abort(), r = v = void 0, t.style.overflow = d
        })
      },
      out(c) {
        if (!e) {
          c == null || c(), v = void 0;
          return
        }
        t.inert = !0, f = C(t, T(), r, 0, () => {
          A(t, "outrostart")
        }, () => {
          A(t, "outroend"), c == null || c()
        })
      },
      stop: () => {
        r == null || r.abort(), f == null || f.abort()
      }
    },
    h = B;
  if (((m = h.nodes).t ?? (m.t = [])).push(g), o && W) {
    var b = s;
    if (!b) {
      for (var w = h.parent; w && (w.f & L) !== 0;)
        for (;
          (w = w.parent) && (w.f & M) === 0;);
      b = !w || (w.f & U) !== 0
    }
    b && j(() => {
      q(() => g.in())
    })
  }
}

function C(i, t, a, n, o, e) {
  var u = n === 1;
  if (K(t)) {
    var s, l = !1;
    return V(() => {
      if (!l) {
        var b = t({
          direction: u ? "in" : "out"
        });
        s = C(i, b, a, n, o, e)
      }
    }), {
      abort: () => {
        l = !0, s == null || s.abort()
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    }
  }
  if (a == null || a.deactivate(), !(t != null && t.duration) && !(t != null && t.delay)) return o(), e(), {
    abort: N,
    deactivate: N,
    reset: N,
    t: () => n
  };
  const {
    delay: v = 0,
    css: _,
    tick: d,
    easing: r = J
  } = t;
  var f = [];
  if (u && a === void 0 && (d && d(0, 1), _)) {
    var T = S(_(0, 1));
    f.push(T, T)
  }
  var g = () => 1 - n,
    h = i.animate(f, {
      duration: v,
      fill: "forwards"
    });
  return h.onfinish = () => {
    h.cancel(), o();
    var b = (a == null ? void 0 : a.t()) ?? 1 - n;
    a == null || a.abort();
    var w = n - b,
      m = t.duration * Math.abs(w),
      c = [];
    if (m > 0) {
      var E = !1;
      if (_)
        for (var I = Math.ceil(m / 16.666666666666668), R = 0; R <= I; R += 1) {
          var O = b + w * r(R / I),
            x = S(_(O, 1 - O));
          c.push(x), E || (E = x.overflow === "hidden")
        }
      E && (i.style.overflow = "hidden"), g = () => {
        var k = h.currentTime;
        return b + w * r(k / m)
      }, d && D(() => {
        if (h.playState !== "running") return !1;
        var k = g();
        return d(k, 1 - k), !0
      })
    }
    h = i.animate(c, {
      duration: m,
      fill: "forwards"
    }), h.onfinish = () => {
      g = () => n, d == null || d(n, 1 - n), e()
    }
  }, {
    abort: () => {
      h && (h.cancel(), h.effect = null, h.onfinish = N)
    },
    deactivate: () => {
      e = N
    },
    reset: () => {
      n === 0 && (d == null || d(1, 0))
    },
    t: () => g()
  }
}
export {
  Y as a, D as l, p as r, Z as t
};