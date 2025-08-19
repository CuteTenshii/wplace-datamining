import {
  a6 as L,
  b8 as M,
  b9 as k,
  aP as D,
  G as H,
  ap as $,
  E as P,
  ba as W,
  bb as G,
  D as U,
  x as j,
  bc as K,
  bd as Q,
  q as A,
  b as F
} from "./BwVUyGIA.js";
import {
  a as J
} from "./CPizFUA8.js";
import {
  c as V
} from "./DmkVHxMj.js";
import {
  g as X
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  a as I
} from "./Crmhm9hm.js";
import {
  r as R
} from "./z_PNeqDz.js";
const Y = () => performance.now(),
  b = {
    tick: r => requestAnimationFrame(r),
    now: () => Y(),
    tasks: new Set
  };

function Z() {
  const r = b.now();
  b.tasks.forEach(t => {
    t.c(r) || (b.tasks.delete(t), t.f())
  }), b.tasks.size !== 0 && b.tick(Z)
}

function tt(r) {
  let t;
  return b.tasks.size === 0 && b.tick(Z), {
    promise: new Promise(i => {
      b.tasks.add(t = {
        c: r,
        f: i
      })
    }),
    abort() {
      b.tasks.delete(t)
    }
  }
}

function E(r, t) {
  k(() => {
    r.dispatchEvent(new CustomEvent(t))
  })
}

function rt(r) {
  if (r === "float") return "cssFloat";
  if (r === "offset") return "cssOffset";
  if (r.startsWith("--")) return r;
  const t = r.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(i => i[0].toUpperCase() + i.slice(1)).join("")
}

function O(r) {
  const t = {},
    i = r.split(";");
  for (const a of i) {
    const [e, f] = a.split(":");
    if (!e || f === void 0) break;
    const s = rt(e.trim());
    t[s] = f.trim()
  }
  return t
}
const it = r => r;

function gt(r, t, i) {
  var a = V,
    e, f, s, u = null;
  a.a ?? (a.a = {
    element: r,
    measure() {
      e = this.element.getBoundingClientRect()
    },
    apply() {
      if (s == null || s.abort(), f = this.element.getBoundingClientRect(), e.left !== f.left || e.right !== f.right || e.top !== f.top || e.bottom !== f.bottom) {
        const l = t()(this.element, {
          from: e,
          to: f
        }, i == null ? void 0 : i());
        s = N(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0
        })
      }
    },
    fix() {
      if (!r.getAnimations().length) {
        var {
          position: l,
          width: g,
          height: v
        } = getComputedStyle(r);
        if (l !== "absolute" && l !== "fixed") {
          var c = r.style;
          u = {
            position: c.position,
            width: c.width,
            height: c.height,
            transform: c.transform
          }, c.position = "absolute", c.width = g, c.height = v;
          var n = r.getBoundingClientRect();
          if (e.left !== n.left || e.top !== n.top) {
            var o = `translate(${e.left-n.left}px, ${e.top-n.top}px)`;
            c.transform = c.transform ? `${c.transform} ${o}` : o
          }
        }
      }
    },
    unfix() {
      if (u) {
        var l = r.style;
        l.position = u.position, l.width = u.width, l.height = u.height, l.transform = u.transform
      }
    }
  }), a.a.element = r
}

function mt(r, t, i, a) {
  var e = (r & K) !== 0,
    f = (r & Q) !== 0,
    s = e && f,
    u = (r & M) !== 0,
    l = s ? "both" : e ? "in" : "out",
    g, v = t.inert,
    c = t.style.overflow,
    n, o;

  function w() {
    return k(() => g ?? (g = i()(t, (a == null ? void 0 : a()) ?? {}, {
      direction: l
    })))
  }
  var p = {
      is_global: u,
      in() {
        var d;
        if (t.inert = v, !e) {
          o == null || o.abort(), (d = o == null ? void 0 : o.reset) == null || d.call(o);
          return
        }
        f || n == null || n.abort(), E(t, "introstart"), n = N(t, w(), o, 1, () => {
          E(t, "introend"), n == null || n.abort(), n = g = void 0, t.style.overflow = c
        })
      },
      out(d) {
        if (!f) {
          d == null || d(), g = void 0;
          return
        }
        t.inert = !0, E(t, "outrostart"), o = N(t, w(), n, 0, () => {
          E(t, "outroend"), d == null || d()
        })
      },
      stop: () => {
        n == null || n.abort(), o == null || o.abort()
      }
    },
    m = L;
  if ((m.transitions ?? (m.transitions = [])).push(p), e && J) {
    var T = u;
    if (!T) {
      for (var h = m.parent; h && (h.f & P) !== 0;)
        for (;
          (h = h.parent) && (h.f & W) === 0;);
      T = !h || (h.f & G) !== 0
    }
    T && U(() => {
      j(() => p.in())
    })
  }
}

function N(r, t, i, a, e) {
  var f = a === 1;
  if (D(t)) {
    var s, u = !1;
    return H(() => {
      if (!u) {
        var m = t({
          direction: f ? "in" : "out"
        });
        s = N(r, m, i, a, e)
      }
    }), {
      abort: () => {
        u = !0, s == null || s.abort()
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    }
  }
  if (i == null || i.deactivate(), !(t != null && t.duration)) return e(), {
    abort: $,
    deactivate: $,
    reset: $,
    t: () => a
  };
  const {
    delay: l = 0,
    css: g,
    tick: v,
    easing: c = it
  } = t;
  var n = [];
  if (f && i === void 0 && (v && v(0, 1), g)) {
    var o = O(g(0, 1));
    n.push(o, o)
  }
  var w = () => 1 - a,
    p = r.animate(n, {
      duration: l,
      fill: "forwards"
    });
  return p.onfinish = () => {
    p.cancel();
    var m = (i == null ? void 0 : i.t()) ?? 1 - a;
    i == null || i.abort();
    var T = a - m,
      h = t.duration * Math.abs(T),
      d = [];
    if (h > 0) {
      var C = !1;
      if (g)
        for (var y = Math.ceil(h / 16.666666666666668), _ = 0; _ <= y; _ += 1) {
          var q = m + T * c(_ / y),
            S = O(g(q, 1 - q));
          d.push(S), C || (C = S.overflow === "hidden")
        }
      C && (r.style.overflow = "hidden"), w = () => {
        var x = p.currentTime;
        return m + T * c(x / h)
      }, v && tt(() => {
        if (p.playState !== "running") return !1;
        var x = w();
        return v(x, 1 - x), !0
      })
    }
    p = r.animate(d, {
      duration: h,
      fill: "forwards"
    }), p.onfinish = () => {
      w = () => a, v == null || v(a, 1 - a), e()
    }
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = $)
    },
    deactivate: () => {
      e = $
    },
    reset: () => {
      a === 0 && (v == null || v(1, 0))
    },
    t: () => w()
  }
}
const at = () => "Description",
  et = () => "Descrição",
  wt = (r = {}, t = {}) => (t.locale ?? X()) === "en" ? at() : et();
var st = A('<svg><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"></path></svg>');

function Tt(r, t) {
  let i = R(t, ["$$slots", "$$events", "$$legacy"]);
  var a = st();
  I(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...i
  })), F(r, a)
}

function nt(r) {
  const t = r - 1;
  return t * t * t + 1
}

function bt(r, {
  from: t,
  to: i
}, a = {}) {
  var {
    delay: e = 0,
    duration: f = _ => Math.sqrt(_) * 120,
    easing: s = nt
  } = a, u = getComputedStyle(r), l = u.transform === "none" ? "" : u.transform, [g, v] = u.transformOrigin.split(" ").map(parseFloat);
  g /= r.clientWidth, v /= r.clientHeight;
  var c = ot(r),
    n = r.clientWidth / i.width / c,
    o = r.clientHeight / i.height / c,
    w = t.left + t.width * g,
    p = t.top + t.height * v,
    m = i.left + i.width * g,
    T = i.top + i.height * v,
    h = (w - m) * n,
    d = (p - T) * o,
    C = t.width / i.width,
    y = t.height / i.height;
  return {
    delay: e,
    duration: typeof f == "function" ? f(Math.sqrt(h * h + d * d)) : f,
    easing: s,
    css: (_, q) => {
      var S = q * h,
        x = q * d,
        B = _ + q * C,
        z = _ + q * y;
      return `transform: ${l} translate(${S}px, ${x}px) scale(${B}, ${z});`
    }
  }
}

function ot(r) {
  if ("currentCSSZoom" in r) return r.currentCSSZoom;
  for (var t = r, i = 1; t !== null;) i *= +getComputedStyle(t).zoom, t = t.parentElement;
  return i
}
var ft = A('<svg><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"></path></svg>');

function _t(r, t) {
  let i = R(t, ["$$slots", "$$events", "$$legacy"]);
  var a = ft();
  I(a, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...i
  })), F(r, a)
}
export {
  Tt as L, _t as T, gt as a, wt as d, bt as f, mt as t
};