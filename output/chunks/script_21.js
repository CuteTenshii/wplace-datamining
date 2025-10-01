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
  ab as G,
  E as K,
  a_ as W,
  a$ as X,
  ac as H,
  z as J,
  b0 as Q,
  b1 as V,
  b2 as tt,
  b3 as S,
  aX as et,
  L as at,
  az as y
} from "./DwvisW99.js";
import {
  a as it
} from "./DPp6dlj8.js";
import {
  c as rt
} from "./DPMe8oed.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "62927027eb35380145df236b415c7021973de3ee"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "82bb617f-9edb-4d1e-8e85-ab94e8601318", t._sentryDebugIdIdentifier = "sentry-dbid-82bb617f-9edb-4d1e-8e85-ab94e8601318")
  })()
} catch {}

function vt(t, e, a) {
  F && $();
  var r = t,
    i = Y,
    f, n, o = null,
    v = D() ? L : q;

  function h() {
    f && Z(f), o !== null && (o.lastChild.remove(), r.before(o), o = null), f = n
  }
  B(() => {
    if (v(i, i = e())) {
      var c = r,
        u = j();
      u && (o = document.createDocumentFragment(), o.append(c = z())), n = M(() => a(c)), u ? U.add_callback(h) : h()
    }
  }), F && (r = P)
}
const nt = () => performance.now(),
  w = {
    tick: t => requestAnimationFrame(t),
    now: () => nt(),
    tasks: new Set
  };

function O() {
  const t = w.now();
  w.tasks.forEach(e => {
    e.c(t) || (w.tasks.delete(e), e.f())
  }), w.tasks.size !== 0 && w.tick(O)
}

function ft(t) {
  let e;
  return w.tasks.size === 0 && w.tick(O), {
    promise: new Promise(a => {
      w.tasks.add(e = {
        c: t,
        f: a
      })
    }),
    abort() {
      w.tasks.delete(e)
    }
  }
}

function E(t, e) {
  S(() => {
    t.dispatchEvent(new CustomEvent(e))
  })
}

function st(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function x(t) {
  const e = {},
    a = t.split(";");
  for (const r of a) {
    const [i, f] = r.split(":");
    if (!i || f === void 0) break;
    const n = st(i.trim());
    e[n] = f.trim()
  }
  return e
}
const ot = t => t;

function ht(t, e, a) {
  var r = rt,
    i, f, n, o = null;
  r.a ?? (r.a = {
    element: t,
    measure() {
      i = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), f = this.element.getBoundingClientRect(), i.left !== f.left || i.right !== f.right || i.top !== f.top || i.bottom !== f.bottom) {
        const v = e()(this.element, {
          from: i,
          to: f
        }, a == null ? void 0 : a());
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
          height: c
        } = getComputedStyle(t);
        if (v !== "absolute" && v !== "fixed") {
          var u = t.style;
          o = {
            position: u.position,
            width: u.width,
            height: u.height,
            transform: u.transform
          }, u.position = "absolute", u.width = h, u.height = c;
          var s = t.getBoundingClientRect();
          if (i.left !== s.left || i.top !== s.top) {
            var d = `translate(${i.left-s.left}px, ${i.top-s.top}px)`;
            u.transform = u.transform ? `${u.transform} ${d}` : d
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

function lt(t, e, a, r) {
  var i = (t & V) !== 0,
    f = (t & tt) !== 0,
    n = i && f,
    o = (t & Q) !== 0,
    v = n ? "both" : i ? "in" : "out",
    h, c = e.inert,
    u = e.style.overflow,
    s, d;

  function g() {
    return S(() => h ?? (h = a()(e, (r == null ? void 0 : r()) ?? {}, {
      direction: v
    })))
  }
  var l = {
      is_global: o,
      in() {
        var _;
        if (e.inert = c, !i) {
          d == null || d.abort(), (_ = d == null ? void 0 : d.reset) == null || _.call(d);
          return
        }
        f || s == null || s.abort(), E(e, "introstart"), s = k(e, g(), d, 1, () => {
          E(e, "introend"), s == null || s.abort(), s = h = void 0, e.style.overflow = u
        })
      },
      out(_) {
        if (!f) {
          _ == null || _(), h = void 0;
          return
        }
        e.inert = !0, E(e, "outrostart"), d = k(e, g(), s, 0, () => {
          E(e, "outroend"), _ == null || _()
        })
      },
      stop: () => {
        s == null || s.abort(), d == null || d.abort()
      }
    },
    p = G;
  if ((p.transitions ?? (p.transitions = [])).push(l), i && it) {
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

function k(t, e, a, r, i) {
  var f = r === 1;
  if (et(e)) {
    var n, o = !1;
    return at(() => {
      if (!o) {
        var p = e({
          direction: f ? "in" : "out"
        });
        n = k(t, p, a, r, i)
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
  if (a == null || a.deactivate(), !(e != null && e.duration)) return i(), {
    abort: y,
    deactivate: y,
    reset: y,
    t: () => r
  };
  const {
    delay: v = 0,
    css: h,
    tick: c,
    easing: u = ot
  } = e;
  var s = [];
  if (f && a === void 0 && (c && c(0, 1), h)) {
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
    var p = (a == null ? void 0 : a.t()) ?? 1 - r;
    a == null || a.abort();
    var m = r - p,
      b = e.duration * Math.abs(m),
      _ = [];
    if (b > 0) {
      var N = !1;
      if (h)
        for (var A = Math.ceil(b / 16.666666666666668), I = 0; I <= A; I += 1) {
          var C = p + m * u(I / A),
            R = x(h(C, 1 - C));
          _.push(R), N || (N = R.overflow === "hidden")
        }
      N && (t.style.overflow = "hidden"), g = () => {
        var T = l.currentTime;
        return p + m * u(T / b)
      }, c && ft(() => {
        if (l.playState !== "running") return !1;
        var T = g();
        return c(T, 1 - T), !0
      })
    }
    l = t.animate(_, {
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
  ht as a, vt as k, lt as t
};