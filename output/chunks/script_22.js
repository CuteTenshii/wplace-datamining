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
  ak as G,
  E as H,
  a$ as K,
  b0 as W,
  T as J,
  H as Q,
  b1 as V,
  b2 as X,
  b3 as aa,
  b4 as F,
  aY as ta,
  S as ea,
  aA as T
} from "./Bry4mTdq.js";
import {
  a as ia
} from "./MPIITExI.js";
import {
  c as ra
} from "./B3EocrV_.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "1464f4d4be7ab2460627d08ee13d2df2a352bcb2"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new a.Error().stack;
    t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "c5372a0c-651f-4196-a7eb-0a7e64d6a4be", a._sentryDebugIdIdentifier = "sentry-dbid-c5372a0c-651f-4196-a7eb-0a7e64d6a4be")
  })()
} catch {}

function va(a, t, e) {
  S && $();
  var r = a,
    i = Y,
    f, n, o = null,
    v = D() ? q : B;

  function h() {
    f && Z(f), o !== null && (o.lastChild.remove(), r.before(o), o = null), f = n
  }
  L(() => {
    if (v(i, i = t())) {
      var c = r,
        u = z();
      u && (o = document.createDocumentFragment(), o.append(c = M())), n = U(() => e(c)), u ? j.add_callback(h) : h()
    }
  }), S && (r = P)
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

function k(a, t) {
  F(() => {
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
        n = E(this.element, v, void 0, 1, () => {
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
  var i = (a & X) !== 0,
    f = (a & aa) !== 0,
    n = i && f,
    o = (a & V) !== 0,
    v = n ? "both" : i ? "in" : "out",
    h, c = t.inert,
    u = t.style.overflow,
    s, d;

  function g() {
    return F(() => h ?? (h = e()(t, (r == null ? void 0 : r()) ?? {}, {
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
        f || s == null || s.abort(), k(t, "introstart"), s = E(t, g(), d, 1, () => {
          k(t, "introend"), s == null || s.abort(), s = h = void 0, t.style.overflow = u
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
  if ((p.transitions ?? (p.transitions = [])).push(l), i && ia) {
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

function E(a, t, e, r, i) {
  var f = r === 1;
  if (ta(t)) {
    var n, o = !1;
    return ea(() => {
      if (!o) {
        var p = t({
          direction: f ? "in" : "out"
        });
        n = E(a, p, e, r, i)
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
    abort: T,
    deactivate: T,
    reset: T,
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
        var y = l.currentTime;
        return p + m * u(y / b)
      }, c && fa(() => {
        if (l.playState !== "running") return !1;
        var y = g();
        return c(y, 1 - y), !0
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
      l && (l.cancel(), l.effect = null, l.onfinish = T)
    },
    deactivate: () => {
      i = T
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