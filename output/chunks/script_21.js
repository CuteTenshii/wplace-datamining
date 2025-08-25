import {
  bb as D,
  bc as P,
  ba as G,
  g as H,
  h as F,
  e as U,
  i as W,
  j,
  k as K,
  l as Q,
  m as J,
  aC as V,
  n as X,
  a6 as Y,
  bd as tt,
  be as O,
  aP as rt,
  G as at,
  ap as q,
  E as it,
  bf as et,
  bg as nt,
  D as st,
  x as ot,
  bh as ft,
  bi as vt,
  q as E,
  b as S
} from "./DUoKDNpf.js";
import {
  a as ct
} from "./g8c1BvYP.js";
import {
  c as lt
} from "./U908S-6f.js";
import {
  g as R
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  a as N
} from "./CbcY1qdF.js";
import {
  r as A
} from "./5NasrULQ.js";

function Nt(r, t, a) {
  F && U();
  var i = r,
    e = V,
    s, n, o = null,
    u = D() ? P : G;

  function h() {
    s && X(s), o !== null && (o.lastChild.remove(), i.before(o), o = null), s = n
  }
  H(() => {
    if (u(e, e = t())) {
      var v = i,
        c = Q();
      c && (o = document.createDocumentFragment(), o.append(v = W())), n = j(() => a(v)), c ? K.add_callback(h) : h()
    }
  }), F && (i = J)
}
const ut = () => performance.now(),
  b = {
    tick: r => requestAnimationFrame(r),
    now: () => ut(),
    tasks: new Set
  };

function B() {
  const r = b.now();
  b.tasks.forEach(t => {
    t.c(r) || (b.tasks.delete(t), t.f())
  }), b.tasks.size !== 0 && b.tick(B)
}

function ht(r) {
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

function I(r, t) {
  O(() => {
    r.dispatchEvent(new CustomEvent(t))
  })
}

function dt(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const t = r.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(a => a[0].toUpperCase() + a.slice(1)).join("")
}

function L(r) {
  const t = {},
    a = r.split(";");
  for (const i of a) {
    const [e, s] = i.split(":");
    if (!e || s === void 0) break;
    const n = dt(e.trim());
    t[n] = s.trim()
  }
  return t
}
const pt = r => r;

function At(r, t, a) {
  var i = lt,
    e, s, n, o = null;
  i.a ?? (i.a = {
    element: r,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (n == null || n.abort(), s = this.element.getBoundingClientRect(), e.left !== s.left || e.right !== s.right || e.top !== s.top || e.bottom !== s.bottom) {
        const u = t()(this.element, {
          from: e,
          to: s
        }, a == null ? void 0 : a());
        n = Z(this.element, u, void 0, 1, () => {
          n == null || n.abort(), n = void 0
        })
      }
    },
    fix() {
      if (!r.getAnimations().length) {
        var {
          position: u,
          width: h,
          height: v
        } = getComputedStyle(r);
        if (u !== "absolute" && u !== "fixed") {
          var c = r.style;
          o = {
            position: c.position,
            width: c.width,
            height: c.height,
            transform: c.transform
          }, c.position = "absolute", c.width = h, c.height = v;
          var f = r.getBoundingClientRect();
          if (e.left !== f.left || e.top !== f.top) {
            var l = `translate(${e.left-f.left}px, ${e.top-f.top}px)`;
            c.transform = c.transform ? `${c.transform} ${l}` : l
          }
        }
      }
    },
    unfix() {
      if (o) {
        var u = r.style;
        u.position = o.position, u.width = o.width, u.height = o.height, u.transform = o.transform
      }
    }
  }), i.a.element = r
}

function Ft(r, t, a, i) {
  var e = (r & ft) !== 0,
    s = (r & vt) !== 0,
    n = e && s,
    o = (r & tt) !== 0,
    u = n ? "both" : e ? "in" : "out",
    h, v = t.inert,
    c = t.style.overflow,
    f, l;

  function _() {
    return O(() => h ?? (h = a()(t, (i == null ? void 0 : i()) ?? {}, {
      direction: u
    })))
  }
  var g = {
      is_global: o,
      in() {
        var p;
        if (t.inert = v, !e) {
          l == null || l.abort(), (p = l == null ? void 0 : l.reset) == null || p.call(l);
          return
        }
        s || f == null || f.abort(), I(t, "introstart"), f = Z(t, _(), l, 1, () => {
          I(t, "introend"), f == null || f.abort(), f = h = void 0, t.style.overflow = c
        })
      },
      out(p) {
        if (!s) {
          p == null || p(), h = void 0;
          return
        }
        t.inert = !0, I(t, "outrostart"), l = Z(t, _(), f, 0, () => {
          I(t, "outroend"), p == null || p()
        })
      },
      stop: () => {
        f == null || f.abort(), l == null || l.abort()
      }
    },
    m = Y;
  if ((m.transitions ?? (m.transitions = [])).push(g), e && ct) {
    var w = o;
    if (!w) {
      for (var d = m.parent; d && (d.f & it) !== 0;)
        for (;
          (d = d.parent) && (d.f & et) === 0;);
      w = !d || (d.f & nt) !== 0
    }
    w && st(() => {
      ot(() => g.in())
    })
  }
}

function Z(r, t, a, i, e) {
  var s = i === 1;
  if (rt(t)) {
    var n, o = !1;
    return at(() => {
      if (!o) {
        var m = t({
          direction: s ? "in" : "out"
        });
        n = Z(r, m, a, i, e)
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
    abort: q,
    deactivate: q,
    reset: q,
    t: () => i
  };
  const {
    delay: u = 0,
    css: h,
    tick: v,
    easing: c = pt
  } = t;
  var f = [];
  if (s && a === void 0 && (v && v(0, 1), h)) {
    var l = L(h(0, 1));
    f.push(l, l)
  }
  var _ = () => 1 - i,
    g = r.animate(f, {
      duration: u,
      fill: "forwards"
    });
  return g.onfinish = () => {
    g.cancel();
    var m = (a == null ? void 0 : a.t()) ?? 1 - i;
    a == null || a.abort();
    var w = i - m,
      d = t.duration * Math.abs(w),
      p = [];
    if (d > 0) {
      var y = !1;
      if (h)
        for (var C = Math.ceil(d / 16.666666666666668), x = 0; x <= C; x += 1) {
          var T = m + w * c(x / C),
            k = L(h(T, 1 - T));
          p.push(k), y || (y = k.overflow === "hidden")
        }
      y && (r.style.overflow = "hidden"), _ = () => {
        var $ = g.currentTime;
        return m + w * c($ / d)
      }, v && ht(() => {
        if (g.playState !== "running") return !1;
        var $ = _();
        return v($, 1 - $), !0
      })
    }
    g = r.animate(p, {
      duration: d,
      fill: "forwards"
    }), g.onfinish = () => {
      _ = () => i, v == null || v(i, 1 - i), e()
    }
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = q)
    },
    deactivate: () => {
      e = q
    },
    reset: () => {
      i === 0 && (v == null || v(1, 0))
    },
    t: () => _()
  }
}
const gt = () => "Pixels painted",
  mt = () => "Pixels pintados",
  Lt = (r = {}, t = {}) => (t.locale ?? R()) === "en" ? gt() : mt(),
  _t = () => "Description",
  wt = () => "Descrição",
  Ot = (r = {}, t = {}) => (t.locale ?? R()) === "en" ? _t() : wt();
var bt = E('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function Rt(r, t) {
  let a = A(t, ["$$slots", "$$events", "$$legacy"]);
  var i = bt();
  N(i, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), S(r, i)
}

function xt(r) {
  const t = r - 1;
  return t * t * t + 1
}

function Bt(r, {
  from: t,
  to: a
}, i = {}) {
  var {
    delay: e = 0,
    duration: s = x => Math.sqrt(x) * 120,
    easing: n = xt
  } = i, o = getComputedStyle(r), u = o.transform === "none" ? "" : o.transform, [h, v] = o.transformOrigin.split(" ").map(parseFloat);
  h /= r.clientWidth, v /= r.clientHeight;
  var c = Tt(r),
    f = r.clientWidth / a.width / c,
    l = r.clientHeight / a.height / c,
    _ = t.left + t.width * h,
    g = t.top + t.height * v,
    m = a.left + a.width * h,
    w = a.top + a.height * v,
    d = (_ - m) * f,
    p = (g - w) * l,
    y = t.width / a.width,
    C = t.height / a.height;
  return {
    delay: e,
    duration: typeof s == "function" ? s(Math.sqrt(d * d + p * p)) : s,
    easing: n,
    css: (x, T) => {
      var k = T * d,
        $ = T * p,
        M = x + T * y,
        z = x + T * C;
      return `transform: ${u} translate(${k}px, ${$}px) scale(${M}, ${z});`
    }
  }
}

function Tt(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
var $t = E('<svg><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"></path></svg>');

function Mt(r, t) {
  let a = A(t, ["$$slots", "$$events", "$$legacy"]);
  var i = $t();
  N(i, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), S(r, i)
}
var qt = E('<svg><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"></path></svg>');

function zt(r, t) {
  let a = A(t, ["$$slots", "$$events", "$$legacy"]);
  var i = qt();
  N(i, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), S(r, i)
}
export {
  Mt as G, Rt as L, zt as T, At as a, Ot as d, Bt as f, Nt as k, Lt as p, Ft as t
};