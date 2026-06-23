import {
  T as B,
  L as $,
  be as j,
  bf as q,
  m as z,
  B as M,
  bg as P,
  bh as U,
  bi as G,
  aS as K,
  an as W,
  aI as N,
  bj as F
} from "./BIlwexl9.js";
import {
  a as y
} from "./D2kHqyaD.js";
const D = () => performance.now(),
  _ = {
    tick: i => requestAnimationFrame(i),
    now: () => D(),
    tasks: new Set
  };

function L() {
  const i = _.now();
  _.tasks.forEach(t => {
    t.c(i) || (_.tasks.delete(t), t.f())
  }), _.tasks.size !== 0 && _.tick(L)
}

function H(i) {
  let t;
  return _.tasks.size === 0 && _.tick(L), {
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

function C(i, t) {
  F(() => {
    i.dispatchEvent(new CustomEvent(t))
  })
}

function J(i) {
  if (i === "float") return "cssFloat";
  if (i === "offset") return "cssOffset";
  if (i.startsWith("--")) return i;
  const t = i.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function x(i) {
  const t = {},
    a = i.split(";");
  for (const n of a) {
    const [o, e] = n.split(":");
    if (!o || e === void 0) break;
    const u = J(o.trim());
    t[u] = e.trim()
  }
  return t
}
const Q = i => i;

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
        s = R(this.element, v, void 0, 1, () => {}, () => {
          s == null || s.abort(), s = void 0
        })
      }
    },
    fix() {
      if (!i.getAnimations().length) {
        var {
          position: v,
          width: m,
          height: d
        } = getComputedStyle(i);
        if (v !== "absolute" && v !== "fixed") {
          var r = i.style;
          l = {
            position: r.position,
            width: r.width,
            height: r.height,
            transform: r.transform
          }, r.position = "absolute", r.width = m, r.height = d;
          var f = i.getBoundingClientRect();
          if (e.left !== f.left || e.top !== f.top) {
            var p = `translate(${e.left-f.left}px, ${e.top-f.top}px)`;
            r.transform = r.transform ? `${r.transform} ${p}` : p
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
    e = (i & G) !== 0,
    u = o && e,
    s = (i & P) !== 0,
    l = u ? "both" : o ? "in" : "out",
    v, m = t.inert,
    d = t.style.overflow,
    r, f;

  function p() {
    return F(() => v ?? (v = a()(t, (n == null ? void 0 : n()) ?? {}, {
      direction: l
    })))
  }
  var T = {
      is_global: s,
      in() {
        var c;
        if (t.inert = m, !o) {
          f == null || f.abort(), (c = f == null ? void 0 : f.reset) == null || c.call(f);
          return
        }
        e || r == null || r.abort(), r = R(t, p(), f, 1, () => {
          C(t, "introstart")
        }, () => {
          C(t, "introend"), r == null || r.abort(), r = v = void 0, t.style.overflow = d
        })
      },
      out(c) {
        if (!e) {
          c == null || c(), v = void 0;
          return
        }
        t.inert = !0, f = R(t, p(), r, 0, () => {
          C(t, "outrostart")
        }, () => {
          C(t, "outroend"), c == null || c()
        })
      },
      stop: () => {
        r == null || r.abort(), f == null || f.abort()
      }
    },
    h = B;
  if (((g = h.nodes).t ?? (g.t = [])).push(T), o && y) {
    var b = s;
    if (!b) {
      for (var w = h.parent; w && (w.f & $) !== 0;)
        for (;
          (w = w.parent) && (w.f & j) === 0;);
      b = !w || (w.f & q) !== 0
    }
    b && z(() => {
      M(() => T.in())
    })
  }
}

function R(i, t, a, n, o, e) {
  var u = n === 1;
  if (K(t)) {
    var s, l = !1;
    return W(() => {
      if (!l) {
        var b = t({
          direction: u ? "in" : "out"
        });
        s = R(i, b, a, n, o, e)
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
    css: m,
    tick: d,
    easing: r = Q
  } = t;
  var f = [];
  if (u && a === void 0 && (d && d(0, 1), m)) {
    var p = x(m(0, 1));
    f.push(p, p)
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
      if (m)
        for (var I = Math.ceil(g / 16.666666666666668), k = 0; k <= I; k += 1) {
          var O = b + w * r(k / I),
            S = x(m(O, 1 - O));
          c.push(S), E || (E = S.overflow === "hidden")
        }
      E && (i.style.overflow = "hidden"), T = () => {
        var A = h.currentTime;
        return b + w * r(A / g)
      }, d && H(() => {
        if (h.playState !== "running") return !1;
        var A = T();
        return d(A, 1 - A), !0
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