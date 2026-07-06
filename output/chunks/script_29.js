import {
  V as F,
  N as L,
  bf as j,
  bg as q,
  m as z,
  D as M,
  bh as P,
  bi as U,
  bj as D,
  aT as G,
  ap as K,
  x as N,
  bk as B
} from "./Dkgr_Dbt.js";
import {
  a as V
} from "./DbffVGnc.js";
const W = () => performance.now(),
  p = {
    tick: i => requestAnimationFrame(i),
    now: () => W(),
    tasks: new Set
  };

function $() {
  const i = p.now();
  p.tasks.forEach(t => {
    t.c(i) || (p.tasks.delete(t), t.f())
  }), p.tasks.size !== 0 && p.tick($)
}

function y(i) {
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
  B(() => {
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
  var n = F,
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
            var m = `translate(${e.left-f.left}px, ${e.top-f.top}px)`;
            r.transform = r.transform ? `${r.transform} ${m}` : m
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
  var g;
  var o = (i & U) !== 0,
    e = (i & D) !== 0,
    u = o && e,
    s = (i & P) !== 0,
    l = u ? "both" : o ? "in" : "out",
    v, _ = t.inert,
    d = t.style.overflow,
    r, f;

  function m() {
    return B(() => v ?? (v = a()(t, (n == null ? void 0 : n()) ?? {}, {
      direction: l
    })))
  }
  var T = {
      is_global: s,
      in() {
        var c;
        if (t.inert = _, !o) {
          f == null || f.abort(), (c = f == null ? void 0 : f.reset) == null || c.call(f);
          return
        }
        e || r == null || r.abort(), r = C(t, m(), f, 1, () => {
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
        t.inert = !0, f = C(t, m(), r, 0, () => {
          A(t, "outrostart")
        }, () => {
          A(t, "outroend"), c == null || c()
        })
      },
      stop: () => {
        r == null || r.abort(), f == null || f.abort()
      }
    },
    h = F;
  if (((g = h.nodes).t ?? (g.t = [])).push(T), o && V) {
    var b = s;
    if (!b) {
      for (var w = h.parent; w && (w.f & L) !== 0;)
        for (;
          (w = w.parent) && (w.f & j) === 0;);
      b = !w || (w.f & q) !== 0
    }
    b && z(() => {
      M(() => T.in())
    })
  }
}

function C(i, t, a, n, o, e) {
  var u = n === 1;
  if (G(t)) {
    var s, l = !1;
    return K(() => {
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
    var m = S(_(0, 1));
    f.push(m, m)
  }
  var T = () => 1 - n,
    h = i.animate(f, {
      duration: v,
      fill: "forwards"
    });
  return h.onfinish = () => {
    h.cancel(), o();
    var b = (a == null ? void 0 : a.t()) ?? 1 - n;
    a == null || a.abort();
    var w = n - b,
      g = t.duration * Math.abs(w),
      c = [];
    if (g > 0) {
      var E = !1;
      if (_)
        for (var x = Math.ceil(g / 16.666666666666668), R = 0; R <= x; R += 1) {
          var I = b + w * r(R / x),
            O = S(_(I, 1 - I));
          c.push(O), E || (E = O.overflow === "hidden")
        }
      E && (i.style.overflow = "hidden"), T = () => {
        var k = h.currentTime;
        return b + w * r(k / g)
      }, d && y(() => {
        if (h.playState !== "running") return !1;
        var k = T();
        return d(k, 1 - k), !0
      })
    }
    h = i.animate(c, {
      duration: g,
      fill: "forwards"
    }), h.onfinish = () => {
      T = () => n, d == null || d(n, 1 - n), e()
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
    t: () => T()
  }
}
export {
  Y as a, Z as t
};