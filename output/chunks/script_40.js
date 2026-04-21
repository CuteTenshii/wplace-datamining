import {
  f as g
} from "./BmjhHaPc.js";
const x = ["text-red-500", "text-orange-500", "text-yellow-500", "text-lime-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500", "text-pink-500", "text-rose-500"],
  A = ["bg-red-500/10", "bg-orange-500/10", "bg-yellow-500/10", "bg-lime-500/10", "bg-emerald-500/10", "bg-teal-500/10", "bg-cyan-500/10", "bg-sky-500/10", "bg-indigo-500/10", "bg-violet-500/10", "bg-purple-500/10", "bg-fuchsia-500/10", "bg-pink-500/10", "bg-rose-500/10"];

function T(t) {
  return x[t % x.length]
}

function _(t) {
  return A[t % A.length]
}

function q({
  r: t,
  g: r,
  b: e
}) {
  function o(n) {
    return n.toString(16).padStart(2, "0")
  }
  return `#${o(t)}${o(r)}${o(e)}`
}

function H(t) {
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

function S(t) {
  t = Math.min(t, g.colors.length - 1);
  const [r, e, o] = g.colors[t].rgb;
  return {
    r,
    g: e,
    b: o,
    a: t === 0 ? 0 : 255
  }
}

function N(t) {
  if (t <= 0) return 0;
  let r = 1;
  for (let e = 0; e < 40; e++) {
    const o = r * r,
      n = o * o;
    r = (4 * r + t / n) / 5
  }
  return r
}

function D(t) {
  if (t <= 0) return 0;
  const r = t * t;
  return r * N(r)
}

function b(t) {
  if (t <= 0) return 0;
  let r = 1;
  for (let e = 0; e < 40; e++) r = (2 * r + t / (r * r)) / 3;
  return r
}
const u = new Float64Array(256);
for (let t = 0; t < 256; t++) {
  const r = t / 255;
  u[t] = r > .04045 ? D((r + .055) / 1.055) : r / 12.92
}

function B(t) {
  const r = u[t.r],
    e = u[t.g],
    o = u[t.b];
  let n = (r * .4124 + e * .3576 + o * .1805) / .95047,
    s = (r * .2126 + e * .7152 + o * .0722) / 1,
    c = (r * .0193 + e * .1192 + o * .9505) / 1.08883;
  return n = n > .008856 ? b(n) : 7.787 * n + 16 / 116, s = s > .008856 ? b(s) : 7.787 * s + 16 / 116, c = c > .008856 ? b(c) : 7.787 * c + 16 / 116, {
    l: 116 * s - 16,
    a: 500 * (n - s),
    b: 200 * (s - c)
  }
}
const d = g.colors.map((t, r) => ({
    ...t,
    idx: r,
    lab: B({
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    })
  })).filter(t => t.idx !== 0),
  m = g.colors.map((t, r) => ({
    idx: r,
    rgb: {
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    }
  })).filter(t => t.idx !== 0),
  E = new Array(g.colors.length);
for (const t of d) E[t.idx] = t;
const M = new Array(g.colors.length);
for (const t of m) M[t.idx] = t;

function G(t, r = "lab", e) {
  if (r === "compuphase") {
    let c = m[0].idx,
      l = Number.MAX_VALUE;
    if (e && e.length > 0)
      for (let i = 0; i < e.length; i++) {
        const a = M[e[i]];
        if (!a) continue;
        const f = k(t, a.rgb);
        f < l && (c = a.idx, l = f)
      } else
        for (const i of m) {
          const a = k(t, i.rgb);
          a < l && (c = i.idx, l = a)
        }
    return c
  }
  let o = d[0].idx,
    n = Number.MAX_VALUE;
  const s = B(t);
  if (e && e.length > 0)
    for (let c = 0; c < e.length; c++) {
      const l = E[e[c]];
      if (!l) continue;
      const i = R(s, l.lab);
      i < n && (o = l.idx, n = i)
    } else
      for (const c of d) {
        const l = R(s, c.lab);
        l < n && (o = c.idx, n = l)
      }
  return o
}

function R(t, r) {
  var e = t.l - r.l,
    o = t.a - r.a,
    n = t.b - r.b,
    s = Math.sqrt(t.a * t.a + t.b * t.b),
    c = Math.sqrt(r.a * r.a + r.b * r.b),
    l = s - c,
    i = o * o + n * n - l * l;
  i = i < 0 ? 0 : Math.sqrt(i);
  var a = 1 + .045 * s,
    f = 1 + .015 * s,
    p = e / 1,
    y = l / a,
    h = i / f,
    v = p * p + y * y + h * h;
  return v < 0 ? 0 : Math.sqrt(v)
}

function k(t, r) {
  const e = (t.r + r.r) / 2,
    o = t.r - r.r,
    n = t.g - r.g,
    s = t.b - r.b,
    c = 2 + e / 256,
    l = 2 + (255 - e) / 256;
  return c * o * o + 4 * n * n + l * s * s
}
export {
  _ as a, G as b, S as c, T as g, H as h, q as r
};