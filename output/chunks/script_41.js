import {
  f
} from "./lMLNvyke.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "d06199bb-6311-42e7-baae-d5c10a674ce0", t._sentryDebugIdIdentifier = "sentry-dbid-d06199bb-6311-42e7-baae-d5c10a674ce0")
  } catch {}
})();
const x = ["text-red-500", "text-orange-500", "text-yellow-500", "text-lime-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500", "text-pink-500", "text-rose-500"],
  A = ["bg-red-500/10", "bg-orange-500/10", "bg-yellow-500/10", "bg-lime-500/10", "bg-emerald-500/10", "bg-teal-500/10", "bg-cyan-500/10", "bg-sky-500/10", "bg-indigo-500/10", "bg-violet-500/10", "bg-purple-500/10", "bg-fuchsia-500/10", "bg-pink-500/10", "bg-rose-500/10"];

function N(t) {
  return x[t % x.length]
}

function w(t) {
  return A[t % A.length]
}

function L({
  r: t,
  g: e,
  b: r
}) {
  function n(o) {
    return o.toString(16).padStart(2, "0")
  }
  return `#${n(t)}${n(e)}${n(r)}`
}

function S(t) {
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

function I(t) {
  t = Math.min(t, f.colors.length - 1);
  const [e, r, n] = f.colors[t].rgb;
  return {
    r: e,
    g: r,
    b: n,
    a: t === 0 ? 0 : 255
  }
}

function B(t) {
  if (t <= 0) return 0;
  let e = 1;
  for (let r = 0; r < 40; r++) {
    const n = e * e,
      o = n * n;
    e = (4 * e + t / o) / 5
  }
  return e
}

function M(t) {
  if (t <= 0) return 0;
  const e = t * t;
  return e * B(e)
}

function u(t) {
  if (t <= 0) return 0;
  let e = 1;
  for (let r = 0; r < 40; r++) e = (2 * e + t / (e * e)) / 3;
  return e
}
const b = new Float64Array(256);
for (let t = 0; t < 256; t++) {
  const e = t / 255;
  b[t] = e > .04045 ? M((e + .055) / 1.055) : e / 12.92
}

function _(t) {
  const e = b[t.r],
    r = b[t.g],
    n = b[t.b];
  let o = (e * .4124 + r * .3576 + n * .1805) / .95047,
    s = (e * .2126 + r * .7152 + n * .0722) / 1,
    c = (e * .0193 + r * .1192 + n * .9505) / 1.08883;
  return o = o > .008856 ? u(o) : 7.787 * o + 16 / 116, s = s > .008856 ? u(s) : 7.787 * s + 16 / 116, c = c > .008856 ? u(c) : 7.787 * c + 16 / 116, {
    l: 116 * s - 16,
    a: 500 * (o - s),
    b: 200 * (s - c)
  }
}
const d = f.colors.map((t, e) => ({
    ...t,
    idx: e,
    lab: _({
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    })
  })).filter(t => t.idx !== 0),
  y = f.colors.map((t, e) => ({
    idx: e,
    rgb: {
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    }
  })).filter(t => t.idx !== 0),
  k = new Array(f.colors.length);
for (const t of d) k[t.idx] = t;
const D = new Array(f.colors.length);
for (const t of y) D[t.idx] = t;

function q(t, e = "lab", r) {
  if (e === "compuphase") {
    let c = y[0].idx,
      i = Number.MAX_VALUE;
    if (r && r.length > 0)
      for (let a = 0; a < r.length; a++) {
        const l = D[r[a]];
        if (!l) continue;
        const g = R(t, l.rgb);
        g < i && (c = l.idx, i = g)
      } else
        for (const a of y) {
          const l = R(t, a.rgb);
          l < i && (c = a.idx, i = l)
        }
    return c
  }
  let n = d[0].idx,
    o = Number.MAX_VALUE;
  const s = _(t);
  if (r && r.length > 0)
    for (let c = 0; c < r.length; c++) {
      const i = k[r[c]];
      if (!i) continue;
      const a = E(s, i.lab);
      a < o && (n = i.idx, o = a)
    } else
      for (const c of d) {
        const i = E(s, c.lab);
        i < o && (n = c.idx, o = i)
      }
  return n
}

function E(t, e) {
  var r = t.l - e.l,
    n = t.a - e.a,
    o = t.b - e.b,
    s = Math.sqrt(t.a * t.a + t.b * t.b),
    c = Math.sqrt(e.a * e.a + e.b * e.b),
    i = s - c,
    a = n * n + o * o - i * i;
  a = a < 0 ? 0 : Math.sqrt(a);
  var l = 1 + .045 * s,
    g = 1 + .015 * s,
    p = r / 1,
    h = i / l,
    m = a / g,
    v = p * p + h * h + m * m;
  return v < 0 ? 0 : Math.sqrt(v)
}

function R(t, e) {
  const r = (t.r + e.r) / 2,
    n = t.r - e.r,
    o = t.g - e.g,
    s = t.b - e.b,
    c = 2 + r / 256,
    i = 2 + (255 - r) / 256;
  return c * n * n + 4 * o * o + i * s * s
}
export {
  w as a, q as b, I as c, N as g, S as h, L as r
};