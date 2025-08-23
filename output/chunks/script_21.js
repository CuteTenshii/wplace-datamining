import {
  ba as z,
  bb as D,
  bc as G,
  g as H,
  h as F,
  e as P,
  i as U,
  j as W,
  k as j,
  l as K,
  m as Q,
  aC as J,
  n as V,
  a6 as X,
  bd as Y,
  be as O,
  aP as tt,
  G as rt,
  ap as x,
  E as at,
  bf as it,
  bg as et,
  D as st,
  x as nt,
  bh as ot,
  bi as ft,
  q as E,
  b as S
} from "./DiiYHD7c.js";
import {
  a as vt
} from "./BDBCFYzV.js";
import {
  c as ct
} from "./F0pWTI59.js";
import {
  g as ut
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  a as N
} from "./DgIoFWm5.js";
import {
  r as A
} from "./CtTP525L.js";

function Et(r, t, a) {
  F && P();
  var i = r,
    e = J,
    n, s, o = null,
    h = z() ? D : G;

  function l() {
    n && V(n), o !== null && (o.lastChild.remove(), i.before(o), o = null), n = s
  }
  H(() => {
    if (h(e, e = t())) {
      var v = i,
        c = K();
      c && (o = document.createDocumentFragment(), o.append(v = U())), s = W(() => a(v)), c ? j.add_callback(l) : l()
    }
  }), F && (i = Q)
}
const ht = () => performance.now(),
  b = {
    tick: r => requestAnimationFrame(r),
    now: () => ht(),
    tasks: new Set
  };

function R() {
  const r = b.now();
  b.tasks.forEach(t => {
    t.c(r) || (b.tasks.delete(t), t.f())
  }), b.tasks.size !== 0 && b.tick(R)
}

function lt(r) {
  let t;
  return b.tasks.size === 0 && b.tick(R), {
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
    const [e, n] = i.split(":");
    if (!e || n === void 0) break;
    const s = dt(e.trim());
    t[s] = n.trim()
  }
  return t
}
const pt = r => r;

function St(r, t, a) {
  var i = ct,
    e, n, s, o = null;
  i.a ?? (i.a = {
    element: r,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (s == null || s.abort(), n = this.element.getBoundingClientRect(), e.left !== n.left || e.right !== n.right || e.top !== n.top || e.bottom !== n.bottom) {
        const h = t()(this.element, {
          from: e,
          to: n
        }, a == null ? void 0 : a());
        s = Z(this.element, h, void 0, 1, () => {
          s == null || s.abort(), s = void 0
        })
      }
    },
    fix() {
      if (!r.getAnimations().length) {
        var {
          position: h,
          width: l,
          height: v
        } = getComputedStyle(r);
        if (h !== "absolute" && h !== "fixed") {
          var c = r.style;
          o = {
            position: c.position,
            width: c.width,
            height: c.height,
            transform: c.transform
          }, c.position = "absolute", c.width = l, c.height = v;
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
    n = (r & ft) !== 0,
    s = e && n,
    o = (r & Y) !== 0,
    h = s ? "both" : e ? "in" : "out",
    l, v = t.inert,
    c = t.style.overflow,
    f, u;

  function w() {
    return O(() => l ?? (l = a()(t, (i == null ? void 0 : i()) ?? {}, {
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
        n || f == null || f.abort(), I(t, "introstart"), f = Z(t, w(), u, 1, () => {
          I(t, "introend"), f == null || f.abort(), f = l = void 0, t.style.overflow = c
        })
      },
      out(p) {
        if (!n) {
          p == null || p(), l = void 0;
          return
        }
        t.inert = !0, I(t, "outrostart"), u = Z(t, w(), f, 0, () => {
          I(t, "outroend"), p == null || p()
        })
      },
      stop: () => {
        f == null || f.abort(), u == null || u.abort()
      }
    },
    m = X;
  if ((m.transitions ?? (m.transitions = [])).push(g), e && vt) {
    var _ = o;
    if (!_) {
      for (var d = m.parent; d && (d.f & at) !== 0;)
        for (;
          (d = d.parent) && (d.f & it) === 0;);
      _ = !d || (d.f & et) !== 0
    }
    _ && st(() => {
      nt(() => g.in())
    })
  }
}

function Z(r, t, a, i, e) {
  var n = i === 1;
  if (tt(t)) {
    var s, o = !1;
    return rt(() => {
      if (!o) {
        var m = t({
          direction: n ? "in" : "out"
        });
        s = Z(r, m, a, i, e)
      }
    }), {
      abort: () => {
        o = !0, s == null || s.abort()
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    }
  }
  if (a == null || a.deactivate(), !(t != null && t.duration)) return e(), {
    abort: x,
    deactivate: x,
    reset: x,
    t: () => i
  };
  const {
    delay: h = 0,
    css: l,
    tick: v,
    easing: c = pt
  } = t;
  var f = [];
  if (n && a === void 0 && (v && v(0, 1), l)) {
    var u = L(l(0, 1));
    f.push(u, u)
  }
  var w = () => 1 - i,
    g = r.animate(f, {
      duration: h,
      fill: "forwards"
    });
  return g.onfinish = () => {
    g.cancel();
    var m = (a == null ? void 0 : a.t()) ?? 1 - i;
    a == null || a.abort();
    var _ = i - m,
      d = t.duration * Math.abs(_),
      p = [];
    if (d > 0) {
      var y = !1;
      if (l)
        for (var C = Math.ceil(d / 16.666666666666668), T = 0; T <= C; T += 1) {
          var $ = m + _ * c(T / C),
            k = L(l($, 1 - $));
          p.push(k), y || (y = k.overflow === "hidden")
        }
      y && (r.style.overflow = "hidden"), w = () => {
        var q = g.currentTime;
        return m + _ * c(q / d)
      }, v && lt(() => {
        if (g.playState !== "running") return !1;
        var q = w();
        return v(q, 1 - q), !0
      })
    }
    g = r.animate(p, {
      duration: d,
      fill: "forwards"
    }), g.onfinish = () => {
      w = () => i, v == null || v(i, 1 - i), e()
    }
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = x)
    },
    deactivate: () => {
      e = x
    },
    reset: () => {
      i === 0 && (v == null || v(1, 0))
    },
    t: () => w()
  }
}
const gt = () => "Description",
  mt = () => "Descrição",
  At = (r = {}, t = {}) => (t.locale ?? ut()) === "en" ? gt() : mt();
var wt = E('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function Ft(r, t) {
  let a = A(t, ["$$slots", "$$events", "$$legacy"]);
  var i = wt();
  N(i, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), S(r, i)
}

function _t(r) {
  const t = r - 1;
  return t * t * t + 1
}

function Lt(r, {
  from: t,
  to: a
}, i = {}) {
  var {
    delay: e = 0,
    duration: n = T => Math.sqrt(T) * 120,
    easing: s = _t
  } = i, o = getComputedStyle(r), h = o.transform === "none" ? "" : o.transform, [l, v] = o.transformOrigin.split(" ").map(parseFloat);
  l /= r.clientWidth, v /= r.clientHeight;
  var c = bt(r),
    f = r.clientWidth / a.width / c,
    u = r.clientHeight / a.height / c,
    w = t.left + t.width * l,
    g = t.top + t.height * v,
    m = a.left + a.width * l,
    _ = a.top + a.height * v,
    d = (w - m) * f,
    p = (g - _) * u,
    y = t.width / a.width,
    C = t.height / a.height;
  return {
    delay: e,
    duration: typeof n == "function" ? n(Math.sqrt(d * d + p * p)) : n,
    easing: s,
    css: (T, $) => {
      var k = $ * d,
        q = $ * p,
        B = T + $ * y,
        M = T + $ * C;
      return `transform: ${h} translate(${k}px, ${q}px) scale(${B}, ${M});`
    }
  }
}

function bt(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, a = 1; t !== null;) a *= +getComputedStyle(t).zoom, t = t.parentElement;
  return a
}
var Tt = E('<svg><path d="M160-120v-80h480v80H160Zm226-194L160-540l84-86 228 226-86 86Zm254-254L414-796l86-84 226 226-86 86Zm184 408L302-682l56-56 522 522-56 56Z"></path></svg>');

function Ot(r, t) {
  let a = A(t, ["$$slots", "$$events", "$$legacy"]);
  var i = Tt();
  N(i, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), S(r, i)
}
var $t = E('<svg><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"></path></svg>');

function Rt(r, t) {
  let a = A(t, ["$$slots", "$$events", "$$legacy"]);
  var i = $t();
  N(i, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...a
  })), S(r, i)
}
export {
  Ot as G, Ft as L, Rt as T, St as a, At as d, Lt as f, Et as k, Nt as t
};