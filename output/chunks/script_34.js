import {
  a as i
} from "./BAGYynGw.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "1dc76760b5957a0899b63650345eafb40d771701"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "23b3af09-e447-4ae2-bc1f-9a952f940599", t._sentryDebugIdIdentifier = "sentry-dbid-23b3af09-e447-4ae2-bc1f-9a952f940599")
  })()
} catch {}
const u = ["text-red-500", "text-orange-500", "text-yellow-500", "text-lime-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500", "text-pink-500", "text-rose-500"],
  p = ["bg-red-500/10", "bg-orange-500/10", "bg-yellow-500/10", "bg-lime-500/10", "bg-emerald-500/10", "bg-teal-500/10", "bg-cyan-500/10", "bg-sky-500/10", "bg-indigo-500/10", "bg-violet-500/10", "bg-purple-500/10", "bg-fuchsia-500/10", "bg-pink-500/10", "bg-rose-500/10"];

function A(t) {
  return u[t % u.length]
}

function D(t) {
  return p[t % p.length]
}

function T({
  r: t,
  g: e,
  b: n
}) {
  function o(a) {
    return a.toString(16).padStart(2, "0")
  }
  return `#${o(t)}${o(e)}${o(n)}`
}

function k(t) {
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

function C(t) {
  t = Math.min(t, i.colors.length - 1);
  const [e, n, o] = i.colors[t].rgb;
  return {
    r: e,
    g: n,
    b: o,
    a: t === 0 ? 0 : 255
  }
}
const y = i.colors.map((t, e) => ({
    ...t,
    idx: e,
    lab: w({
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    })
  })).filter(t => t.idx !== 0),
  h = i.colors.map((t, e) => ({
    idx: e,
    rgb: {
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    }
  })).filter(t => t.idx !== 0);

function R(t, e = "lab") {
  if (e === "compuphase") {
    let r = h[0],
      l = Number.MAX_VALUE;
    for (const s of h) {
      const c = x(t, s.rgb);
      c < l && (r = s, l = c)
    }
    return r.idx
  }
  let n = y[0],
    o = Number.MAX_VALUE;
  const a = w(t);
  for (let r of y) {
    const l = M(a, r.lab);
    l < o && (n = r, o = l)
  }
  return n.idx
}

function w(t) {
  var e = t.r / 255,
    n = t.g / 255,
    o = t.b / 255,
    a, r, l;
  return e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, o = o > .04045 ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92, a = (e * .4124 + n * .3576 + o * .1805) / .95047, r = (e * .2126 + n * .7152 + o * .0722) / 1, l = (e * .0193 + n * .1192 + o * .9505) / 1.08883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, {
    l: 116 * r - 16,
    a: 500 * (a - r),
    b: 200 * (r - l)
  }
}

function M(t, e) {
  var n = t.l - e.l,
    o = t.a - e.a,
    a = t.b - e.b,
    r = Math.sqrt(t.a * t.a + t.b * t.b),
    l = Math.sqrt(e.a * e.a + e.b * e.b),
    s = r - l,
    c = o * o + a * a - s * s;
  c = c < 0 ? 0 : Math.sqrt(c);
  var m = 1 + .045 * r,
    v = 1 + .015 * r,
    g = n / 1,
    b = s / m,
    f = c / v,
    d = g * g + b * b + f * f;
  return d < 0 ? 0 : Math.sqrt(d)
}

function x(t, e) {
  const n = (t.r + e.r) / 2,
    o = t.r - e.r,
    a = t.g - e.g,
    r = t.b - e.b,
    l = 2 + n / 256,
    s = 2 + (255 - n) / 256;
  return l * o * o + 4 * a * a + s * r * r
}
export {
  D as a, R as b, C as c, A as g, k as h, T as r
};