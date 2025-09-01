import {
  F as q,
  aX as B,
  aY as $,
  i as y,
  h as R,
  e as z,
  j as M,
  k as U,
  l as j,
  m as D,
  o as P,
  aL as W,
  q as Z,
  ad as G,
  E as K,
  aZ as X,
  a_ as Y,
  M as H,
  z as J,
  a$ as Q,
  b0 as V,
  b1 as aa,
  b2 as S,
  aW as ta,
  L as ia,
  au as k
} from "./apxRKl0u.js";
import {
  a as ra
} from "./B9SWw7yZ.js";
import {
  c as ea
} from "./DwmP27Pv.js";

function da(t, a, i) {
  R && z();
  var e = t,
    r = W,
    s, n, o = null,
    d = q() ? B : $;

  function h() {
    s && Z(s), o !== null && (o.lastChild.remove(), e.before(o), o = null), s = n
  }
  y(() => {
    if (d(r, r = a())) {
      var c = e,
        u = D();
      u && (o = document.createDocumentFragment(), o.append(c = M())), n = U(() => i(c)), u ? j.add_callback(h) : h()
    }
  }), R && (e = P)
}
const na = () => performance.now(),
  m = {
    tick: t => requestAnimationFrame(t),
    now: () => na(),
    tasks: new Set
  };

function L() {
  const t = m.now();
  m.tasks.forEach(a => {
    a.c(t) || (m.tasks.delete(a), a.f())
  }), m.tasks.size !== 0 && m.tick(L)
}

function sa(t) {
  let a;
  return m.tasks.size === 0 && m.tick(L), {
    promise: new Promise(i => {
      m.tasks.add(a = {
        c: t,
        f: i
      })
    }),
    abort() {
      m.tasks.delete(a)
    }
  }
}

function E(t, a) {
  S(() => {
    t.dispatchEvent(new CustomEvent(a))
  })
}

function fa(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const a = t.split("-");
  return a.length === 1 ? a[0] : a[0] + a.slice(1).map(i => i[0].toUpperCase() + i.slice(1)).join("")
}

function O(t) {
  const a = {},
    i = t.split(";");
  for (const e of i) {
    const [r, s] = e.split(":");
    if (!r || s === void 0) break;
    const n = fa(r.trim());
    a[n] = s.trim()
  }
  return a
}
const oa = t => t;

function ha(t, a, i) {
  var e = ea,
    r, s, n, o = null;
  e.a ?? (e.a = {
    element: t,
    measure() {
      r = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), s = this.element.getBoundingClientRect(), r.left !== s.left || r.right !== s.right || r.top !== s.top || r.bottom !== s.bottom) {
        const d = a()(this.element, {
          from: r,
          to: s
        }, i == null ? void 0 : i());
        n = N(this.element, d, void 0, 1, () => {
          n == null || n.abort(), n = void 0
        })
      }
    },
    fix() {
      if (!t.getAnimations().length) {
        var {
          position: d,
          width: h,
          height: c
        } = getComputedStyle(t);
        if (d !== "absolute" && d !== "fixed") {
          var u = t.style;
          o = {
            position: u.position,
            width: u.width,
            height: u.height,
            transform: u.transform
          }, u.position = "absolute", u.width = h, u.height = c;
          var f = t.getBoundingClientRect();
          if (r.left !== f.left || r.top !== f.top) {
            var v = `translate(${r.left-f.left}px, ${r.top-f.top}px)`;
            u.transform = u.transform ? `${u.transform} ${v}` : v
          }
        }
      }
    },
    unfix() {
      if (o) {
        var d = t.style;
        d.position = o.position, d.width = o.width, d.height = o.height, d.transform = o.transform
      }
    }
  }), e.a.element = t
}

function la(t, a, i, e) {
  var r = (t & V) !== 0,
    s = (t & aa) !== 0,
    n = r && s,
    o = (t & Q) !== 0,
    d = n ? "both" : r ? "in" : "out",
    h, c = a.inert,
    u = a.style.overflow,
    f, v;

  function w() {
    return S(() => h ?? (h = i()(a, (e == null ? void 0 : e()) ?? {}, {
      direction: d
    })))
  }
  var l = {
      is_global: o,
      in() {
        var p;
        if (a.inert = c, !r) {
          v == null || v.abort(), (p = v == null ? void 0 : v.reset) == null || p.call(v);
          return
        }
        s || f == null || f.abort(), E(a, "introstart"), f = N(a, w(), v, 1, () => {
          E(a, "introend"), f == null || f.abort(), f = h = void 0, a.style.overflow = u
        })
      },
      out(p) {
        if (!s) {
          p == null || p(), h = void 0;
          return
        }
        a.inert = !0, E(a, "outrostart"), v = N(a, w(), f, 0, () => {
          E(a, "outroend"), p == null || p()
        })
      },
      stop: () => {
        f == null || f.abort(), v == null || v.abort()
      }
    },
    b = G;
  if ((b.transitions ?? (b.transitions = [])).push(l), r && ra) {
    var g = o;
    if (!g) {
      for (var _ = b.parent; _ && (_.f & K) !== 0;)
        for (;
          (_ = _.parent) && (_.f & X) === 0;);
      g = !_ || (_.f & Y) !== 0
    }
    g && H(() => {
      J(() => l.in())
    })
  }
}

function N(t, a, i, e, r) {
  var s = e === 1;
  if (ta(a)) {
    var n, o = !1;
    return ia(() => {
      if (!o) {
        var b = a({
          direction: s ? "in" : "out"
        });
        n = N(t, b, i, e, r)
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
  if (i == null || i.deactivate(), !(a != null && a.duration)) return r(), {
    abort: k,
    deactivate: k,
    reset: k,
    t: () => e
  };
  const {
    delay: d = 0,
    css: h,
    tick: c,
    easing: u = oa
  } = a;
  var f = [];
  if (s && i === void 0 && (c && c(0, 1), h)) {
    var v = O(h(0, 1));
    f.push(v, v)
  }
  var w = () => 1 - e,
    l = t.animate(f, {
      duration: d,
      fill: "forwards"
    });
  return l.onfinish = () => {
    l.cancel();
    var b = (i == null ? void 0 : i.t()) ?? 1 - e;
    i == null || i.abort();
    var g = e - b,
      _ = a.duration * Math.abs(g),
      p = [];
    if (_ > 0) {
      var I = !1;
      if (h)
        for (var A = Math.ceil(_ / 16.666666666666668), C = 0; C <= A; C += 1) {
          var F = b + g * u(C / A),
            x = O(h(F, 1 - F));
          p.push(x), I || (I = x.overflow === "hidden")
        }
      I && (t.style.overflow = "hidden"), w = () => {
        var T = l.currentTime;
        return b + g * u(T / _)
      }, c && sa(() => {
        if (l.playState !== "running") return !1;
        var T = w();
        return c(T, 1 - T), !0
      })
    }
    l = t.animate(p, {
      duration: _,
      fill: "forwards"
    }), l.onfinish = () => {
      w = () => e, c == null || c(e, 1 - e), r()
    }
  }, {
    abort: () => {
      l && (l.cancel(), l.effect = null, l.onfinish = k)
    },
    deactivate: () => {
      r = k
    },
    reset: () => {
      e === 0 && (c == null || c(1, 0))
    },
    t: () => w()
  }
}
export {
  ha as a, da as k, la as t
};