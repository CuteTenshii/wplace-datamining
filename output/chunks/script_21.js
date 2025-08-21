import {
  ba as M,
  bb as D,
  bc as H,
  g as P,
  h as S,
  e as U,
  i as W,
  j,
  k as G,
  l as K,
  m as Q,
  aC as J,
  n as V,
  a6 as X,
  bd as Y,
  be as A,
  aP as tt,
  G as rt,
  ap as $,
  E as at,
  bf as it,
  bg as et,
  D as nt,
  x as st,
  bh as ot,
  bi as ft,
  q as F,
  b as O
} from "./CwgCbQ4J.js";
import {
  a as vt
} from "./DrAvlRg4.js";
import {
  c as ct
} from "./V5wDGMHV.js";
import {
  g as ut
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  a as Z
} from "./C_PYT45J.js";
import {
  r as R
} from "./BerX6nk7.js";

function It(r, t, a) {
  S && U();
  var i = r,
    e = J,
    s, n, o = null,
    h = M() ? D : H;

  function d() {
    s && V(s), o !== null && (o.lastChild.remove(), i.before(o), o = null), s = n
  }
  P(() => {
    if (h(e, e = t())) {
      var v = i,
        c = K();
      c && (o = document.createDocumentFragment(), o.append(v = W())), n = j(() => a(v)), c ? G.add_callback(d) : d()
    }
  }), S && (i = Q)
}
const ht = () => performance.now(),
  b = {
    tick: r => requestAnimationFrame(r),
    now: () => ht(),
    tasks: new Set
  };

function B() {
  const r = b.now();
  b.tasks.forEach(t => {
    t.c(r) || (b.tasks.delete(t), t.f())
  }), b.tasks.size !== 0 && b.tick(B)
}

function dt(r) {
  let t;
  return b.tasks.size === 0 && b.tick(B), {
    promise: new Promise(a => {
      b.tasks.add(t = {
        c: r,
        f: a
      })
    }),
    abort() {
      b.tasks.delete(t)
    }
  }
}

function E(r, t) {
  A(() => {
    r.dispatchEvent(new CustomEvent(t))
  })
}

function lt(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const t = r.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function N(r) {
  const t = {},
    a = r.split(";");
  for (const i of a) {
    const [e, s] = i.split(":");
    if (!e || s === void 0) break;
    const n = lt(e.trim());
    t[n] = s.trim()
  }
  return t
}
const pt = r => r;

function St(r, t, a) {
  var i = ct,
    e, s, n, o = null;
  i.a ?? (i.a = {
    element: r,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), s = this.element.getBoundingClientRect(), e.left !== s.left || e.right !== s.right || e.top !== s.top || e.bottom !== s.bottom) {
        const h = t()(this.element, {
          from: e,
          to: s
        }, a == null ? void 0 : a());
        n = I(this.element, h, void 0, 1, () => {
          n == null || n.abort(), n = void 0
        })
      }
    },
    fix() {
      if (!r.getAnimations().length) {
        var {
          position: h,
          width: d,
          height: v
        } = getComputedStyle(r);
        if (h !== "absolute" && h !== "fixed") {
          var c = r.style;
          o = {
            position: c.position,
            width: c.width,
            height: c.height,
            transform: c.transform
          }, c.position = "absolute", c.width = d, c.height = v;
          var f = r.getBoundingClientRect();
          if (e.left !== f.left || e.top !== f.top) {
            var u = `translate(${e.left-f.left}px, ${e.top-f.top}px)`;
            c.transform = c.transform ? `${c.transform} ${u}` : u
          }
        }
      }
    },
    unfix() {
      if (o) {
        var h = r.style;
        h.position = o.position, h.width = o.width, h.height = o.height, h.transform = o.transform
      }
    }
  }), i.a.element = r
}

function Nt(r, t, a, i) {
  var e = (r & ot) !== 0,
    s = (r & ft) !== 0,
    n = e && s,
    o = (r & Y) !== 0,
    h = n ? "both" : e ? "in" : "out",
    d, v = t.inert,
    c = t.style.overflow,
    f, u;

  function _() {
    return A(() => d ?? (d = a()(t, (i == null ? void 0 : i()) ?? {}, {
      direction: h
    })))
  }
  var g = {
      is_global: o,
      in() {
        var p;
        if (t.inert = v, !e) {
          u == null || u.abort(), (p = u == null ? void 0 : u.reset) == null || p.call(u);
          return
        }
        s || f == null || f.abort(), E(t, "introstart"), f = I(t, _(), u, 1, () => {
          E(t, "introend"), f == null || f.abort(), f = d = void 0, t.style.overflow = c
        })
      },
      out(p) {
        if (!s) {
          p == null || p(), d = void 0;
          return
        }
        t.inert = !0, E(t, "outrostart"), u = I(t, _(), f, 0, () => {
          E(t, "outroend"), p == null || p()
        })
      },
      stop: () => {
        f == null || f.abort(), u == null || u.abort()
      }
    },
    m = X;
  if ((m.transitions ?? (m.transitions = [])).push(g), e && vt) {
    var w = o;
    if (!w) {
      for (var l = m.parent; l && (l.f & at) !== 0;)
        for (;
          (l = l.parent) && (l.f & it) === 0;);
      w = !l || (l.f & et) !== 0
    }
    w && nt(() => {
      st(() => g.in())
    })
  }
}

function I(r, t, a, i, e) {
  var s = i === 1;
  if (tt(t)) {
    var n, o = !1;
    return rt(() => {
      if (!o) {
        var m = t({
          direction: s ? "in" : "out"
        });
        n = I(r, m, a, i, e)
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
  if (a == null || a.deactivate(), !(t != null && t.duration)) return e(), {
    abort: $,
    deactivate: $,
    reset: $,
    t: () => i
  };
  const {
    delay: h = 0,
    css: d,
    tick: v,
    easing: c = pt
  } = t;
  var f = [];
  if (s && a === void 0 && (v && v(0, 1), d)) {
    var u = N(d(0, 1));
    f.push(u, u)
  }
  var _ = () => 1 - i,
    g = r.animate(f, {
      duration: h,
      fill: "forwards"
    });
  return g.onfinish = () => {
    g.cancel();
    var m = (a == null ? void 0 : a.t()) ?? 1 - i;
    a == null || a.abort();
    var w = i - m,
      l = t.duration * Math.abs(w),
      p = [];
    if (l > 0) {
      var y = !1;
      if (d)
        for (var C = Math.ceil(l / 16.666666666666668), T = 0; T <= C; T += 1) {
          var q = m + w * c(T / C),
            k = N(d(q, 1 - q));
          p.push(k), y || (y = k.overflow === "hidden")
        }
      y && (r.style.overflow = "hidden"), _ = () => {
        var x = g.currentTime;
        return m + w * c(x / l)
      }, v && dt(() => {
        if (g.playState !== "running") return !1;
        var x = _();
        return v(x, 1 - x), !0
      })
    }
    g = r.animate(p, {
      duration: l,
      fill: "forwards"
    }), g.onfinish = () => {
      _ = () => i, v == null || v(i, 1 - i), e()
    }
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = $)
    },
    deactivate: () => {
      e = $
    },
    reset: () => {
      i === 0 && (v == null || v(1, 0))
    },
    t: () => _()
  }
}
const gt = () => "Description",
  mt = () => "Descrição",
  At = (r = {}, t = {}) => (t.locale ?? ut()) === "en" ? gt() : mt();
var _t = F('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function Ft(r, t) {
  let a = R(t, ["$$slots", "$$events", "$$legacy"]);
  var i = _t();
  Z(i, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), O(r, i)
}

function wt(r) {
  const t = r - 1;
  return t * t * t + 1
}

function Ot(r, {
  from: t,
  to: a
}, i = {}) {
  var {
    delay: e = 0,
    duration: s = T => Math.sqrt(T) * 120,
    easing: n = wt
  } = i, o = getComputedStyle(r), h = o.transform === "none" ? "" : o.transform, [d, v] = o.transformOrigin.split(" ").map(parseFloat);
  d /= r.clientWidth, v /= r.clientHeight;
  var c = bt(r),
    f = r.clientWidth / a.width / c,
    u = r.clientHeight / a.height / c,
    _ = t.left + t.width * d,
    g = t.top + t.height * v,
    m = a.left + a.width * d,
    w = a.top + a.height * v,
    l = (_ - m) * f,
    p = (g - w) * u,
    y = t.width / a.width,
    C = t.height / a.height;
  return {
    delay: e,
    duration: typeof s == "function" ? s(Math.sqrt(l * l + p * p)) : s,
    easing: n,
    css: (T, q) => {
      var k = q * l,
        x = q * p,
        L = T + q * y,
        z = T + q * C;
      return `transform: ${h} translate(${k}px, ${x}px) scale(${L}, ${z});`
    }
  }
}

function bt(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
var Tt = F('<svg><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"></path></svg>');

function Zt(r, t) {
  let a = R(t, ["$$slots", "$$events", "$$legacy"]);
  var i = Tt();
  Z(i, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), O(r, i)
}
export {
  Ft as L, Zt as T, St as a, At as d, Ot as f, It as k, Nt as t
};