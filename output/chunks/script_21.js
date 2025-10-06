import {
  F as D,
  aY as L,
  aZ as q,
  i as B,
  h as F,
  e as $,
  j as z,
  k as M,
  l as U,
  m as j,
  o as P,
  aM as Y,
  q as Z,
  N as G,
  E as K,
  a_ as W,
  a$ as X,
  M as H,
  z as J,
  b0 as Q,
  b1 as V,
  b2 as aa,
  b3 as S,
  aX as ta,
  L as ea,
  az as y
} from "./TyfPWVbD.js";
import {
  a as ia
} from "./qN9s_s-l.js";
import {
  c as ra
} from "./CtPj4hIR.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "6fe71e2aef866a931e2568b1d6f6762fddc1f62d"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new a.Error().stack;
    t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "9a5efe3c-ae85-4aed-85b6-de15dd09f2ba", a._sentryDebugIdIdentifier = "sentry-dbid-9a5efe3c-ae85-4aed-85b6-de15dd09f2ba")
  })()
} catch {}

function va(a, t, e) {
  F && $();
  var r = a,
    i = Y,
    f, n, o = null,
    v = D() ? L : q;

  function h() {
    f && Z(f), o !== null && (o.lastChild.remove(), r.before(o), o = null), f = n
  }
  B(() => {
    if (v(i, i = t())) {
      var c = r,
        u = j();
      u && (o = document.createDocumentFragment(), o.append(c = z())), n = M(() => e(c)), u ? U.add_callback(h) : h()
    }
  }), F && (r = P)
}
const na = () => performance.now(),
  w = {
    tick: a => requestAnimationFrame(a),
    now: () => na(),
    tasks: new Set
  };

function O() {
  const a = w.now();
  w.tasks.forEach(t => {
    t.c(a) || (w.tasks.delete(t), t.f())
  }), w.tasks.size !== 0 && w.tick(O)
}

function fa(a) {
  let t;
  return w.tasks.size === 0 && w.tick(O), {
    promise: new Promise(e => {
      w.tasks.add(t = {
        c: a,
        f: e
      })
    }),
    abort() {
      w.tasks.delete(t)
    }
  }
}

function E(a, t) {
  S(() => {
    a.dispatchEvent(new CustomEvent(t))
  })
}

function sa(a) {
  if (a === "float") return "cssFloat";
  if (a === "offset") return "cssOffset";
  if (a.startsWith("--")) return a;
  const t = a.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(e => e[0].toUpperCase() + e.slice(1)).join("")
}

function x(a) {
  const t = {},
    e = a.split(";");
  for (const r of e) {
    const [i, f] = r.split(":");
    if (!i || f === void 0) break;
    const n = sa(i.trim());
    t[n] = f.trim()
  }
  return t
}
const oa = a => a;

function ha(a, t, e) {
  var r = ra,
    i, f, n, o = null;
  r.a ?? (r.a = {
    element: a,
    measure() {
      i = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), f = this.element.getBoundingClientRect(), i.left !== f.left || i.right !== f.right || i.top !== f.top || i.bottom !== f.bottom) {
        const v = t()(this.element, {
          from: i,
          to: f
        }, e == null ? void 0 : e());
        n = k(this.element, v, void 0, 1, () => {
          n == null || n.abort(), n = void 0
        })
      }
    },
    fix() {
      if (!a.getAnimations().length) {
        var {
          position: v,
          width: h,
          height: c
        } = getComputedStyle(a);
        if (v !== "absolute" && v !== "fixed") {
          var u = a.style;
          o = {
            position: u.position,
            width: u.width,
            height: u.height,
            transform: u.transform
          }, u.position = "absolute", u.width = h, u.height = c;
          var s = a.getBoundingClientRect();
          if (i.left !== s.left || i.top !== s.top) {
            var d = `translate(${i.left-s.left}px, ${i.top-s.top}px)`;
            u.transform = u.transform ? `${u.transform} ${d}` : d
          }
        }
      }
    },
    unfix() {
      if (o) {
        var v = a.style;
        v.position = o.position, v.width = o.width, v.height = o.height, v.transform = o.transform
      }
    }
  }), r.a.element = a
}

function la(a, t, e, r) {
  var i = (a & V) !== 0,
    f = (a & aa) !== 0,
    n = i && f,
    o = (a & Q) !== 0,
    v = n ? "both" : i ? "in" : "out",
    h, c = t.inert,
    u = t.style.overflow,
    s, d;

  function g() {
    return S(() => h ?? (h = e()(t, (r == null ? void 0 : r()) ?? {}, {
      direction: v
    })))
  }
  var l = {
      is_global: o,
      in() {
        var _;
        if (t.inert = c, !i) {
          d == null || d.abort(), (_ = d == null ? void 0 : d.reset) == null || _.call(d);
          return
        }
        f || s == null || s.abort(), E(t, "introstart"), s = k(t, g(), d, 1, () => {
          E(t, "introend"), s == null || s.abort(), s = h = void 0, t.style.overflow = u
        })
      },
      out(_) {
        if (!f) {
          _ == null || _(), h = void 0;
          return
        }
        t.inert = !0, E(t, "outrostart"), d = k(t, g(), s, 0, () => {
          E(t, "outroend"), _ == null || _()
        })
      },
      stop: () => {
        s == null || s.abort(), d == null || d.abort()
      }
    },
    p = G;
  if ((p.transitions ?? (p.transitions = [])).push(l), i && ia) {
    var m = o;
    if (!m) {
      for (var b = p.parent; b && (b.f & K) !== 0;)
        for (;
          (b = b.parent) && (b.f & W) === 0;);
      m = !b || (b.f & X) !== 0
    }
    m && H(() => {
      J(() => l.in())
    })
  }
}

function k(a, t, e, r, i) {
  var f = r === 1;
  if (ta(t)) {
    var n, o = !1;
    return ea(() => {
      if (!o) {
        var p = t({
          direction: f ? "in" : "out"
        });
        n = k(a, p, e, r, i)
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
  if (e == null || e.deactivate(), !(t != null && t.duration)) return i(), {
    abort: y,
    deactivate: y,
    reset: y,
    t: () => r
  };
  const {
    delay: v = 0,
    css: h,
    tick: c,
    easing: u = oa
  } = t;
  var s = [];
  if (f && e === void 0 && (c && c(0, 1), h)) {
    var d = x(h(0, 1));
    s.push(d, d)
  }
  var g = () => 1 - r,
    l = a.animate(s, {
      duration: v,
      fill: "forwards"
    });
  return l.onfinish = () => {
    l.cancel();
    var p = (e == null ? void 0 : e.t()) ?? 1 - r;
    e == null || e.abort();
    var m = r - p,
      b = t.duration * Math.abs(m),
      _ = [];
    if (b > 0) {
      var N = !1;
      if (h)
        for (var A = Math.ceil(b / 16.666666666666668), I = 0; I <= A; I += 1) {
          var C = p + m * u(I / A),
            R = x(h(C, 1 - C));
          _.push(R), N || (N = R.overflow === "hidden")
        }
      N && (a.style.overflow = "hidden"), g = () => {
        var T = l.currentTime;
        return p + m * u(T / b)
      }, c && fa(() => {
        if (l.playState !== "running") return !1;
        var T = g();
        return c(T, 1 - T), !0
      })
    }
    l = a.animate(_, {
      duration: b,
      fill: "forwards"
    }), l.onfinish = () => {
      g = () => r, c == null || c(r, 1 - r), i()
    }
  }, {
    abort: () => {
      l && (l.cancel(), l.effect = null, l.onfinish = y)
    },
    deactivate: () => {
      i = y
    },
    reset: () => {
      r === 0 && (c == null || c(1, 0))
    },
    t: () => g()
  }
}
export {
  ha as a, va as k, la as t
};