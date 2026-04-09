import {
  S as g
} from "./DwoJOH-U.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "2c8defd1-230e-42d3-b36b-5377287d8a17", t._sentryDebugIdIdentifier = "sentry-dbid-2c8defd1-230e-42d3-b36b-5377287d8a17")
  } catch {}
})();
const m = ["text-red-500", "text-orange-500", "text-yellow-500", "text-lime-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500", "text-pink-500", "text-rose-500"],
  v = ["bg-red-500/10", "bg-orange-500/10", "bg-yellow-500/10", "bg-lime-500/10", "bg-emerald-500/10", "bg-teal-500/10", "bg-cyan-500/10", "bg-sky-500/10", "bg-indigo-500/10", "bg-violet-500/10", "bg-purple-500/10", "bg-fuchsia-500/10", "bg-pink-500/10", "bg-rose-500/10"];

function D(t) {
  return m[t % m.length]
}

function R(t) {
  return v[t % v.length]
}

function B({
  r: t,
  g: e,
  b: r
}) {
  function o(a) {
    return a.toString(16).padStart(2, "0")
  }
  return `#${o(t)}${o(e)}${o(r)}`
}

function T(t) {
  return t = t.trim().replace("#", ""), t.length === 3 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), t.length !== 6 ? {
    r: 0,
    g: 0,
    b: 0
  } : {
    r: +("0x" + t.slice(0, 2)),
    g: +("0x" + t.slice(2, 4)),
    b: +("0x" + t.slice(4, 6))
  }
}

function _(t) {
  t = Math.min(t, g.colors.length - 1);
  const [e, r, o] = g.colors[t].rgb;
  return {
    r: e,
    g: r,
    b: o,
    a: t === 0 ? 0 : 255
  }
}
const b = g.colors.map((t, e) => ({
    ...t,
    idx: e,
    lab: w({
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    })
  })).filter(t => t.idx !== 0),
  d = g.colors.map((t, e) => ({
    idx: e,
    rgb: {
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    }
  })).filter(t => t.idx !== 0),
  E = new Array(g.colors.length);
for (const t of b) E[t.idx] = t;
const A = new Array(g.colors.length);
for (const t of d) A[t.idx] = t;

function N(t, e = "lab", r) {
  if (e === "compuphase") {
    let n = d[0].idx,
      c = Number.MAX_VALUE;
    if (r && r.length > 0)
      for (let i = 0; i < r.length; i++) {
        const l = A[r[i]];
        if (!l) continue;
        const f = M(t, l.rgb);
        f < c && (n = l.idx, c = f)
      } else
        for (const i of d) {
          const l = M(t, i.rgb);
          l < c && (n = i.idx, c = l)
        }
    return n
  }
  let o = b[0].idx,
    a = Number.MAX_VALUE;
  const s = w(t);
  if (r && r.length > 0)
    for (let n = 0; n < r.length; n++) {
      const c = E[r[n]];
      if (!c) continue;
      const i = x(s, c.lab);
      i < a && (o = c.idx, a = i)
    } else
      for (const n of b) {
        const c = x(s, n.lab);
        c < a && (o = n.idx, a = c)
      }
  return o
}

function w(t) {
  var e = t.r / 255,
    r = t.g / 255,
    o = t.b / 255,
    a, s, n;
  return e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92, o = o > .04045 ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92, a = (e * .4124 + r * .3576 + o * .1805) / .95047, s = (e * .2126 + r * .7152 + o * .0722) / 1, n = (e * .0193 + r * .1192 + o * .9505) / 1.08883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, {
    l: 116 * s - 16,
    a: 500 * (a - s),
    b: 200 * (s - n)
  }
}

function x(t, e) {
  var r = t.l - e.l,
    o = t.a - e.a,
    a = t.b - e.b,
    s = Math.sqrt(t.a * t.a + t.b * t.b),
    n = Math.sqrt(e.a * e.a + e.b * e.b),
    c = s - n,
    i = o * o + a * a - c * c;
  i = i < 0 ? 0 : Math.sqrt(i);
  var l = 1 + .045 * s,
    f = 1 + .015 * s,
    u = r / 1,
    p = c / l,
    h = i / f,
    y = u * u + p * p + h * h;
  return y < 0 ? 0 : Math.sqrt(y)
}

function M(t, e) {
  const r = (t.r + e.r) / 2,
    o = t.r - e.r,
    a = t.g - e.g,
    s = t.b - e.b,
    n = 2 + r / 256,
    c = 2 + (255 - r) / 256;
  return n * o * o + 4 * a * a + c * s * s
}
export {
  R as a, N as b, _ as c, D as g, T as h, B as r
};