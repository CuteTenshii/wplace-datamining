import {
  S as c
} from "./DC_O4ofs.js";
const d = ["text-red-500", "text-orange-500", "text-yellow-500", "text-lime-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500", "text-pink-500", "text-rose-500"],
  p = ["bg-red-500/10", "bg-orange-500/10", "bg-yellow-500/10", "bg-lime-500/10", "bg-emerald-500/10", "bg-teal-500/10", "bg-cyan-500/10", "bg-sky-500/10", "bg-indigo-500/10", "bg-violet-500/10", "bg-purple-500/10", "bg-fuchsia-500/10", "bg-pink-500/10", "bg-rose-500/10"];

function C(t) {
  return d[t % d.length]
}

function k(t) {
  return p[t % p.length]
}

function y({
  r: t,
  g: r,
  b: o
}) {
  function e(a) {
    return a.toString(16).padStart(2, "0")
  }
  return `#${e(t)}${e(r)}${e(o)}`
}

function A(t) {
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

function E(t) {
  t = Math.min(t, c.colors.length - 1);
  const [r, o, e] = c.colors[t].rgb;
  return {
    r,
    g: o,
    b: e,
    a: t === 0 ? 0 : 255
  }
}
const v = c.colors.map((t, r) => ({
  ...t,
  idx: r,
  lab: m({
    r: t.rgb[0],
    g: t.rgb[1],
    b: t.rgb[2]
  })
})).filter(t => t.idx !== 0);

function q(t) {
  let r = v[0],
    o = Number.MAX_VALUE;
  const e = m(t);
  for (let a of v) {
    const l = h(e, a.lab);
    l < o && (r = a, o = l)
  }
  return r.idx
}

function m(t) {
  var r = t.r / 255,
    o = t.g / 255,
    e = t.b / 255,
    a, l, n;
  return r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92, o = o > .04045 ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92, e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, a = (r * .4124 + o * .3576 + e * .1805) / .95047, l = (r * .2126 + o * .7152 + e * .0722) / 1, n = (r * .0193 + o * .1192 + e * .9505) / 1.08883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, {
    l: 116 * l - 16,
    a: 500 * (a - l),
    b: 200 * (l - n)
  }
}

function h(t, r) {
  var o = t.l - r.l,
    e = t.a - r.a,
    a = t.b - r.b,
    l = Math.sqrt(t.a * t.a + t.b * t.b),
    n = Math.sqrt(r.a * r.a + r.b * r.b),
    g = l - n,
    s = e * e + a * a - g * g;
  s = s < 0 ? 0 : Math.sqrt(s);
  var M = 1 + .045 * l,
    x = 1 + .015 * l,
    i = o / 1,
    b = g / M,
    u = s / x,
    f = i * i + b * b + u * u;
  return f < 0 ? 0 : Math.sqrt(f)
}
export {
  k as a, q as b, E as c, C as g, A as h, y as r
};