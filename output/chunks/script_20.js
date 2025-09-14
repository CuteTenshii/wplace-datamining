import {
  F as O,
  aX as D,
  aY as q,
  i as B,
  h as F,
  e as $,
  j as z,
  k as M,
  l as U,
  m as j,
  o as P,
  aL as W,
  q as Y,
  ad as Z,
  E as G,
  aZ as K,
  a_ as X,
  M as H,
  z as J,
  a$ as Q,
  b0 as V,
  b1 as tt,
  b2 as S,
  aW as at,
  L as it,
  ay as y
} from "./DlWygu_S.js";
import {
  a as et
} from "./D-LXvVlP.js";
import {
  c as rt
} from "./B4PE_Ex1.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "48232197bdcdfc2a880dd0de2ffd5bc2075b51d0"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new t.Error().stack;
    a && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[a] = "009d3bc4-6691-40d9-b9db-6f09922c95f2", t._sentryDebugIdIdentifier = "sentry-dbid-009d3bc4-6691-40d9-b9db-6f09922c95f2")
  })()
} catch {}

function vt(t, a, i) {
  F && $();
  var r = t,
    e = W,
    f, n, o = null,
    v = O() ? D : q;

  function h() {
    f && Y(f), o !== null && (o.lastChild.remove(), r.before(o), o = null), f = n
  }
  B(() => {
    if (v(e, e = a())) {
      var u = r,
        c = j();
      c && (o = document.createDocumentFragment(), o.append(u = z())), n = M(() => i(u)), c ? U.add_callback(h) : h()
    }
  }), F && (r = P)
}
const nt = () => performance.now(),
  w = {
    tick: t => requestAnimationFrame(t),
    now: () => nt(),
    tasks: new Set
  };

function L() {
  const t = w.now();
  w.tasks.forEach(a => {
    a.c(t) || (w.tasks.delete(a), a.f())
  }), w.tasks.size !== 0 && w.tick(L)
}

function ft(t) {
  let a;
  return w.tasks.size === 0 && w.tick(L), {
    promise: new Promise(i => {
      w.tasks.add(a = {
        c: t,
        f: i
      })
    }),
    abort() {
      w.tasks.delete(a)
    }
  }
}

function E(t, a) {
  S(() => {
    t.dispatchEvent(new CustomEvent(a))
  })
}

function st(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const a = t.split("-");
  return a.length === 1 ? a[0] : a[0] + a.slice(1).map(i => i[0].toUpperCase() + i.slice(1)).join("")
}

function x(t) {
  const a = {},
    i = t.split(";");
  for (const r of i) {
    const [e, f] = r.split(":");
    if (!e || f === void 0) break;
    const n = st(e.trim());
    a[n] = f.trim()
  }
  return a
}
const ot = t => t;

function ht(t, a, i) {
  var r = rt,
    e, f, n, o = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), f = this.element.getBoundingClientRect(), e.left !== f.left || e.right !== f.right || e.top !== f.top || e.bottom !== f.bottom) {
        const v = a()(this.element, {
          from: e,
          to: f
        }, i == null ? void 0 : i());
        n = k(this.element, v, void 0, 1, () => {
          n == null || n.abort(), n = void 0
        })
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var {
          position: v,
          width: h,
          height: u
        } = getComputedStyle(t);
        if (v !== "absolute" && v !== "fixed") {
          var c = t.style;
          o = {
            position: c.position,
            width: c.width,
            height: c.height,
            transform: c.transform
          }, c.position = "absolute", c.width = h, c.height = u;
          var s = t.getBoundingClientRect();
          if (e.left !== s.left || e.top !== s.top) {
            var d = `translate(${e.left-s.left}px, ${e.top-s.top}px)`;
            c.transform = c.transform ? `${c.transform} ${d}` : d
          }
        }
      }
    },
    unfix() {
      if (o) {
        var v = t.style;
        v.position = o.position, v.width = o.width, v.height = o.height, v.transform = o.transform
      }
    }
  }), r.a.element = t
}

function lt(t, a, i, r) {
  var e = (t & V) !== 0,
    f = (t & tt) !== 0,
    n = e && f,
    o = (t & Q) !== 0,
    v = n ? "both" : e ? "in" : "out",
    h, u = a.inert,
    c = a.style.overflow,
    s, d;

  function g() {
    return S(() => h ?? (h = i()(a, (r == null ? void 0 : r()) ?? {}, {
      direction: v
    })))
  }
  var l = {
      is_global: o,
      in() {
        var _;
        if (a.inert = u, !e) {
          d == null || d.abort(), (_ = d == null ? void 0 : d.reset) == null || _.call(d);
          return
        }
        f || s == null || s.abort(), E(a, "introstart"), s = k(a, g(), d, 1, () => {
          E(a, "introend"), s == null || s.abort(), s = h = void 0, a.style.overflow = c
        })
      },
      out(_) {
        if (!f) {
          _ == null || _(), h = void 0;
          return
        }
        a.inert = !0, E(a, "outrostart"), d = k(a, g(), s, 0, () => {
          E(a, "outroend"), _ == null || _()
        })
      },
      stop: () => {
        s == null || s.abort(), d == null || d.abort()
      }
    },
    p = Z;
  if ((p.transitions ?? (p.transitions = [])).push(l), e && et) {
    var m = o;
    if (!m) {
      for (var b = p.parent; b && (b.f & G) !== 0;)
        for (;
          (b = b.parent) && (b.f & K) === 0;);
      m = !b || (b.f & X) !== 0
    }
    m && H(() => {
      J(() => l.in())
    })
  }
}

function k(t, a, i, r, e) {
  var f = r === 1;
  if (at(a)) {
    var n, o = !1;
    return it(() => {
      if (!o) {
        var p = a({
          direction: f ? "in" : "out"
        });
        n = k(t, p, i, r, e)
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
  if (i == null || i.deactivate(), !(a != null && a.duration)) return e(), {
    abort: y,
    deactivate: y,
    reset: y,
    t: () => r
  };
  const {
    delay: v = 0,
    css: h,
    tick: u,
    easing: c = ot
  } = a;
  var s = [];
  if (f && i === void 0 && (u && u(0, 1), h)) {
    var d = x(h(0, 1));
    s.push(d, d)
  }
  var g = () => 1 - r,
    l = t.animate(s, {
      duration: v,
      fill: "forwards"
    });
  return l.onfinish = () => {
    l.cancel();
    var p = (i == null ? void 0 : i.t()) ?? 1 - r;
    i == null || i.abort();
    var m = r - p,
      b = a.duration * Math.abs(m),
      _ = [];
    if (b > 0) {
      var N = !1;
      if (h)
        for (var A = Math.ceil(b / 16.666666666666668), I = 0; I <= A; I += 1) {
          var C = p + m * c(I / A),
            R = x(h(C, 1 - C));
          _.push(R), N || (N = R.overflow === "hidden")
        }
      N && (t.style.overflow = "hidden"), g = () => {
        var T = l.currentTime;
        return p + m * c(T / b)
      }, u && ft(() => {
        if (l.playState !== "running") return !1;
        var T = g();
        return u(T, 1 - T), !0
      })
    }
    l = t.animate(_, {
      duration: b,
      fill: "forwards"
    }), l.onfinish = () => {
      g = () => r, u == null || u(r, 1 - r), e()
    }
  }, {
    abort: () => {
      l && (l.cancel(), l.effect = null, l.onfinish = y)
    },
    deactivate: () => {
      e = y
    },
    reset: () => {
      r === 0 && (u == null || u(1, 0))
    },
    t: () => g()
  }
}
export {
  ht as a, vt as k, lt as t
};