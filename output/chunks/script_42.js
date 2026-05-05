import {
  f as b
} from "./ClF9qu09.js";
const L = ["text-red-500", "text-orange-500", "text-yellow-500", "text-lime-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500", "text-pink-500", "text-rose-500"],
  R = ["bg-red-500/10", "bg-orange-500/10", "bg-yellow-500/10", "bg-lime-500/10", "bg-emerald-500/10", "bg-teal-500/10", "bg-cyan-500/10", "bg-sky-500/10", "bg-indigo-500/10", "bg-violet-500/10", "bg-purple-500/10", "bg-fuchsia-500/10", "bg-pink-500/10", "bg-rose-500/10"];

function rt(t) {
  return L[t % L.length]
}

function it(t) {
  return R[t % R.length]
}

function at({
  r: t,
  g: n,
  b: o
}) {
  function e(s) {
    return s.toString(16).padStart(2, "0")
  }
  return `#${e(t)}${e(n)}${e(o)}`
}

function lt(t) {
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

function gt(t) {
  t = Math.min(t, b.colors.length - 1);
  const [n, o, e] = b.colors[t].rgb;
  return {
    r: n,
    g: o,
    b: e,
    a: t === 0 ? 0 : 255
  }
}
const d = 2 * Math.PI,
  B = 6103515625,
  G = .5235987755982988,
  K = .10471975511965977,
  Q = 1.0995574287564276,
  Y = 4.799655442984406,
  Z = .4363323129985824;

function S(t) {
  const n = t * t;
  return n * n * n * t
}

function H(t, n) {
  const o = Math.atan2(t, n);
  return o < 0 ? o + d : o
}
const P = new Float64Array(256);
for (let t = 0; t < 256; t++) {
  const n = t / 255;
  P[t] = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92
}

function k(t) {
  const n = P[t.r],
    o = P[t.g],
    e = P[t.b];
  let s = (n * .4124 + o * .3576 + e * .1805) / .95047,
    c = n * .2126 + o * .7152 + e * .0722,
    r = (n * .0193 + o * .1192 + e * .9505) / 1.08883;
  return s = s > .008856 ? Math.cbrt(s) : 7.787 * s + 16 / 116, c = c > .008856 ? Math.cbrt(c) : 7.787 * c + 16 / 116, r = r > .008856 ? Math.cbrt(r) : 7.787 * r + 16 / 116, {
    l: 116 * c - 16,
    a: 500 * (s - c),
    b: 200 * (c - r)
  }
}
const E = b.colors.map((t, n) => ({
    idx: n,
    lab: k({
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    })
  })).filter(t => t.idx !== 0),
  p = b.colors.map((t, n) => ({
    idx: n,
    rgb: {
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    }
  })).filter(t => t.idx !== 0),
  w = new Array(b.colors.length);
for (const t of E) w[t.idx] = t;
const N = new Array(b.colors.length);
for (const t of p) N[t.idx] = t;

function tt(t, n, o) {
  let e = E[0].idx,
    s = Number.MAX_VALUE;
  const c = o && o.length > 0,
    r = c ? o.length : E.length;
  for (let i = 0; i < r; i++) {
    const a = c ? w[o[i]] : E[i];
    if (!a) continue;
    const l = n(t, a.lab);
    (l < s || l === s && a.idx < e) && (e = a.idx, s = l)
  }
  return e
}

function nt(t, n) {
  let o = p[0].idx,
    e = Number.MAX_VALUE;
  const s = n && n.length > 0,
    c = s ? n.length : p.length;
  for (let r = 0; r < c; r++) {
    const i = s ? N[n[r]] : p[r];
    if (!i) continue;
    const a = st(t, i.rgb);
    (a < e || a === e && i.idx < o) && (o = i.idx, e = a)
  }
  return o
}

function ut(t, n = "lab", o) {
  if (n === "compuphase") return nt(t, o);
  const e = k(t);
  return tt(e, n === "ciede2000" ? et : ot, o)
}

function ot(t, n) {
  const o = t.l - n.l,
    e = t.a - n.a,
    s = t.b - n.b,
    c = Math.sqrt(t.a * t.a + t.b * t.b),
    r = Math.sqrt(n.a * n.a + n.b * n.b),
    i = c - r;
  let a = e * e + s * s - i * i;
  a = a < 0 ? 0 : Math.sqrt(a);
  const l = 1 + .045 * c,
    h = 1 + .015 * c,
    u = i / l,
    f = a / h,
    M = o * o + u * u + f * f;
  return M < 0 ? 0 : Math.sqrt(M)
}

function et(t, n) {
  const o = Math.sqrt(t.a * t.a + t.b * t.b),
    e = Math.sqrt(n.a * n.a + n.b * n.b),
    s = (o + e) * .5,
    c = S(s),
    r = .5 * (1 - Math.sqrt(c / (c + B))),
    i = (1 + r) * t.a,
    a = (1 + r) * n.a,
    l = Math.sqrt(i * i + t.b * t.b),
    h = Math.sqrt(a * a + n.b * n.b),
    u = l * h,
    f = l === 0 ? 0 : H(t.b, i),
    M = h === 0 ? 0 : H(n.b, a),
    v = n.l - t.l,
    F = h - l;
  let m = 0;
  u !== 0 && (m = M - f, m > Math.PI ? m -= d : m < -Math.PI && (m += d));
  const O = u === 0 ? 0 : 2 * Math.sqrt(u) * Math.sin(m * .5),
    U = (t.l + n.l) * .5,
    x = (l + h) * .5;
  let g = f + M;
  u !== 0 && (Math.abs(f - M) > Math.PI ? g = g < d ? (g + d) * .5 : (g - d) * .5 : g *= .5);
  const $ = 1 - .17 * Math.cos(g - G) + .24 * Math.cos(2 * g) + .32 * Math.cos(3 * g + K) - .2 * Math.cos(4 * g - Q),
    q = (g - Y) / Z,
    z = G * Math.exp(-(q * q)),
    A = S(x),
    V = 2 * Math.sqrt(A / (A + B)),
    y = U - 50,
    C = y * y,
    X = 1 + .015 * C / Math.sqrt(20 + C),
    W = 1 + .045 * x,
    j = 1 + .015 * x * $,
    J = -Math.sin(2 * z) * V,
    T = v / X,
    _ = F / W,
    D = O / j,
    I = T * T + _ * _ + D * D + J * _ * D;
  return I > 0 ? I : 0
}

function st(t, n) {
  const o = (t.r + n.r) / 2,
    e = t.r - n.r,
    s = t.g - n.g,
    c = t.b - n.b,
    r = 2 + o / 256,
    i = 2 + (255 - o) / 256;
  return r * e * e + 4 * s * s + i * c * c
}
export {
  it as a, ut as b, gt as c, rt as g, lt as h, at as r
};