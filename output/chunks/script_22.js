import {
  M as D,
  aZ as q,
  a_ as B,
  i as L,
  h as S,
  e as $,
  j as M,
  k as U,
  l as j,
  m as z,
  o as P,
  aN as Y,
  q as Z,
  ai as G,
  E as H,
  a$ as K,
  b0 as W,
  ak as J,
  H as Q,
  b1 as V,
  b2 as X,
  b3 as ee,
  b4 as F,
  aY as te,
  S as ae,
  aA as y
} from "./DUWZzbWe.js";
import {
  a as ie
} from "./B_aSMPcR.js";
import {
  c as re
} from "./BJmwec3W.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e8bd59fe-fdef-48a3-82fc-e3c8320ebe24", e._sentryDebugIdIdentifier = "sentry-dbid-e8bd59fe-fdef-48a3-82fc-e3c8320ebe24")
  })()
} catch {}

function ve(e, t, a) {
  S && $();
  var r = e,
    i = Y,
    f, n, o = null,
    v = D() ? q : B;

  function h() {
    f && Z(f), o !== null && (o.lastChild.remove(), r.before(o), o = null), f = n
  }
  L(() => {
    if (v(i, i = t())) {
      var u = r,
        c = z();
      c && (o = document.createDocumentFragment(), o.append(u = M())), n = U(() => a(u)), c ? j.add_callback(h) : h()
    }
  }), S && (r = P)
}
const ne = () => performance.now(),
  w = {
    tick: e => requestAnimationFrame(e),
    now: () => ne(),
    tasks: new Set
  };

function O() {
  const e = w.now();
  w.tasks.forEach(t => {
    t.c(e) || (w.tasks.delete(t), t.f())
  }), w.tasks.size !== 0 && w.tick(O)
}

function fe(e) {
  let t;
  return w.tasks.size === 0 && w.tick(O), {
    promise: new Promise(a => {
      w.tasks.add(t = {
        c: e,
        f: a
      })
    }),
    abort() {
      w.tasks.delete(t)
    }
  }
}

function k(e, t) {
  F(() => {
    e.dispatchEvent(new CustomEvent(t))
  })
}

function se(e) {
  if (e === "float") return "cssFloat";
  if (e === "offset") return "cssOffset";
  if (e.startsWith("--")) return e;
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function x(e) {
  const t = {},
    a = e.split(";");
  for (const r of a) {
    const [i, f] = r.split(":");
    if (!i || f === void 0) break;
    const n = se(i.trim());
    t[n] = f.trim()
  }
  return t
}
const oe = e => e;

function he(e, t, a) {
  var r = re,
    i, f, n, o = null;
  r.a ?? (r.a = {
    element: e,
    measure() {
      i = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), f = this.element.getBoundingClientRect(), i.left !== f.left || i.right !== f.right || i.top !== f.top || i.bottom !== f.bottom) {
        const v = t()(this.element, {
          from: i,
          to: f
        }, a == null ? void 0 : a());
        n = E(this.element, v, void 0, 1, () => {
          n == null || n.abort(), n = void 0
        })
      }
    },
    fix() {
      if (!e.getAnimations().length) {
        var {
          position: v,
          width: h,
          height: u
        } = getComputedStyle(e);
        if (v !== "absolute" && v !== "fixed") {
          var c = e.style;
          o = {
            position: c.position,
            width: c.width,
            height: c.height,
            transform: c.transform
          }, c.position = "absolute", c.width = h, c.height = u;
          var s = e.getBoundingClientRect();
          if (i.left !== s.left || i.top !== s.top) {
            var d = `translate(${i.left-s.left}px, ${i.top-s.top}px)`;
            c.transform = c.transform ? `${c.transform} ${d}` : d
          }
        }
      }
    },
    unfix() {
      if (o) {
        var v = e.style;
        v.position = o.position, v.width = o.width, v.height = o.height, v.transform = o.transform
      }
    }
  }), r.a.element = e
}

function le(e, t, a, r) {
  var i = (e & X) !== 0,
    f = (e & ee) !== 0,
    n = i && f,
    o = (e & V) !== 0,
    v = n ? "both" : i ? "in" : "out",
    h, u = t.inert,
    c = t.style.overflow,
    s, d;

  function g() {
    return F(() => h ?? (h = a()(t, (r == null ? void 0 : r()) ?? {}, {
      direction: v
    })))
  }
  var l = {
      is_global: o,
      in() {
        var _;
        if (t.inert = u, !i) {
          d == null || d.abort(), (_ = d == null ? void 0 : d.reset) == null || _.call(d);
          return
        }
        f || s == null || s.abort(), k(t, "introstart"), s = E(t, g(), d, 1, () => {
          k(t, "introend"), s == null || s.abort(), s = h = void 0, t.style.overflow = c
        })
      },
      out(_) {
        if (!f) {
          _ == null || _(), h = void 0;
          return
        }
        t.inert = !0, k(t, "outrostart"), d = E(t, g(), s, 0, () => {
          k(t, "outroend"), _ == null || _()
        })
      },
      stop: () => {
        s == null || s.abort(), d == null || d.abort()
      }
    },
    p = G;
  if ((p.transitions ?? (p.transitions = [])).push(l), i && ie) {
    var m = o;
    if (!m) {
      for (var b = p.parent; b && (b.f & H) !== 0;)
        for (;
          (b = b.parent) && (b.f & K) === 0;);
      m = !b || (b.f & W) !== 0
    }
    m && J(() => {
      Q(() => l.in())
    })
  }
}

function E(e, t, a, r, i) {
  var f = r === 1;
  if (te(t)) {
    var n, o = !1;
    return ae(() => {
      if (!o) {
        var p = t({
          direction: f ? "in" : "out"
        });
        n = E(e, p, a, r, i)
      }
    }), {
      abort: () => {
        o = !0, n == null || n.abort()
      },
      deactivate: () => n.deactivate(),
      reset: () => n.reset(),
      t: () => n.t()
    }
  }
  if (a == null || a.deactivate(), !(t != null && t.duration)) return i(), {
    abort: y,
    deactivate: y,
    reset: y,
    t: () => r
  };
  const {
    delay: v = 0,
    css: h,
    tick: u,
    easing: c = oe
  } = t;
  var s = [];
  if (f && a === void 0 && (u && u(0, 1), h)) {
    var d = x(h(0, 1));
    s.push(d, d)
  }
  var g = () => 1 - r,
    l = e.animate(s, {
      duration: v,
      fill: "forwards"
    });
  return l.onfinish = () => {
    l.cancel();
    var p = (a == null ? void 0 : a.t()) ?? 1 - r;
    a == null || a.abort();
    var m = r - p,
      b = t.duration * Math.abs(m),
      _ = [];
    if (b > 0) {
      var N = !1;
      if (h)
        for (var A = Math.ceil(b / 16.666666666666668), I = 0; I <= A; I += 1) {
          var C = p + m * c(I / A),
            R = x(h(C, 1 - C));
          _.push(R), N || (N = R.overflow === "hidden")
        }
      N && (e.style.overflow = "hidden"), g = () => {
        var T = l.currentTime;
        return p + m * c(T / b)
      }, u && fe(() => {
        if (l.playState !== "running") return !1;
        var T = g();
        return u(T, 1 - T), !0
      })
    }
    l = e.animate(_, {
      duration: b,
      fill: "forwards"
    }), l.onfinish = () => {
      g = () => r, u == null || u(r, 1 - r), i()
    }
  }, {
    abort: () => {
      l && (l.cancel(), l.effect = null, l.onfinish = y)
    },
    deactivate: () => {
      i = y
    },
    reset: () => {
      r === 0 && (u == null || u(1, 0))
    },
    t: () => g()
  }
}
export {
  he as a, ve as k, le as t
};