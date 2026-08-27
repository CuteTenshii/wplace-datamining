import {
  V as B,
  M,
  bk as q,
  bl as z,
  T as P,
  B as U,
  bm as j,
  bn as G,
  bo as K,
  aX as V,
  ap as W,
  n as N,
  bp as F
} from "./B20EPEO9.js";
import {
  a as X
} from "./dXo2ef-x.js";
const y = () => performance.now(),
  _ = {
    tick: i => requestAnimationFrame(i),
    now: () => y(),
    tasks: new Set
  };

function $() {
  const i = _.now();
  _.tasks.forEach(t => {
    t.c(i) || (_.tasks.delete(t), t.f())
  }), _.tasks.size !== 0 && _.tick($)
}

function D(i) {
  let t;
  return _.tasks.size === 0 && _.tick($), {
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
  for (const s of a) {
    const [o, e] = s.split(":");
    if (!o || e === void 0) break;
    const u = H(o.trim());
    t[u] = e.trim()
  }
  return t
}
const J = i => i;
let L = null;

function Z(i) {
  L = i
}

function tt(i, t, a) {
  var s = L ?? B,
    o = s.nodes,
    e, u, n, l = null;
  o.a ?? (o.a = {
    element: i,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), u = this.element.getBoundingClientRect(), e.left !== u.left || e.right !== u.right || e.top !== u.top || e.bottom !== u.bottom) {
        const v = t()(this.element, {
          from: e,
          to: u
        }, a == null ? void 0 : a());
        n = C(this.element, v, void 0, 1, () => {}, () => {
          n == null || n.abort(), n = void 0
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

function it(i, t, a, s) {
  var g;
  var o = (i & G) !== 0,
    e = (i & K) !== 0,
    u = o && e,
    n = (i & j) !== 0,
    l = u ? "both" : o ? "in" : "out",
    v, m = t.inert,
    d = t.style.overflow,
    r, f;

  function p() {
    return F(() => v ?? (v = a()(t, (s == null ? void 0 : s()) ?? {}, {
      direction: l
    })))
  }
  var T = {
      is_global: n,
      in() {
        var h;
        if (t.inert = m, !o) {
          f == null || f.abort(), (h = f == null ? void 0 : f.reset) == null || h.call(f);
          return
        }
        e || r == null || r.abort(), r = C(t, p(), f, 1, () => {
          A(t, "introstart")
        }, () => {
          A(t, "introend"), r == null || r.abort(), r = v = void 0, t.style.overflow = d
        })
      },
      out(h) {
        if (!e) {
          h == null || h(), v = void 0;
          return
        }
        t.inert = !0, f = C(t, p(), r, 0, () => {
          A(t, "outrostart")
        }, () => {
          A(t, "outroend"), h == null || h()
        })
      },
      stop: () => {
        r == null || r.abort(), f == null || f.abort()
      }
    },
    c = B;
  if (((g = c.nodes).t ?? (g.t = [])).push(T), o && X) {
    var b = n;
    if (!b) {
      for (var w = c.parent; w && (w.f & M) !== 0;)
        for (;
          (w = w.parent) && (w.f & q) === 0;);
      b = !w || (w.f & z) !== 0
    }
    b && P(() => {
      U(() => T.in())
    })
  }
}

function C(i, t, a, s, o, e) {
  var u = s === 1;
  if (V(t)) {
    var n, l = !1;
    return W(() => {
      if (!l) {
        var b = t({
          direction: u ? "in" : "out"
        });
        n = C(i, b, a, s, o, e)
      }
    }), {
      abort: () => {
        l = !0, n == null || n.abort()
      },
      deactivate: () => n.deactivate(),
      reset: () => n.reset(),
      t: () => n.t()
    }
  }
  if (a == null || a.deactivate(), !(t != null && t.duration) && !(t != null && t.delay)) return o(), e(), {
    abort: N,
    deactivate: N,
    reset: N,
    t: () => s
  };
  const {
    delay: v = 0,
    css: m,
    tick: d,
    easing: r = J
  } = t;
  var f = [];
  if (u && a === void 0 && (d && d(0, 1), m)) {
    var p = S(m(0, 1));
    f.push(p, p)
  }
  var T = () => 1 - s,
    c = i.animate(f, {
      duration: v,
      fill: "forwards"
    });
  return c.onfinish = () => {
    c.cancel(), o();
    var b = (a == null ? void 0 : a.t()) ?? 1 - s;
    a == null || a.abort();
    var w = s - b,
      g = t.duration * Math.abs(w),
      h = [];
    if (g > 0) {
      var E = !1;
      if (m)
        for (var I = Math.ceil(g / 16.666666666666668), R = 0; R <= I; R += 1) {
          var O = b + w * r(R / I),
            x = S(m(O, 1 - O));
          h.push(x), E || (E = x.overflow === "hidden")
        }
      E && (i.style.overflow = "hidden"), T = () => {
        var k = c.currentTime;
        return b + w * r(k / g)
      }, d && D(() => {
        if (c.playState !== "running") return !1;
        var k = T();
        return d(k, 1 - k), !0
      })
    }
    c = i.animate(h, {
      duration: g,
      fill: "forwards"
    }), c.onfinish = () => {
      T = () => s, d == null || d(s, 1 - s), e()
    }
  }, {
    abort: () => {
      c && (c.cancel(), c.effect = null, c.onfinish = N)
    },
    deactivate: () => {
      e = N
    },
    reset: () => {
      s === 0 && (d == null || d(1, 0))
    },
    t: () => T()
  }
}
export {
  tt as a, D as l, _ as r, Z as s, it as t
};