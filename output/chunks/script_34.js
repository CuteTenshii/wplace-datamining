import {
  S as i
} from "./cN76nlte.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "05e3477bd6a9a14e4165d1dc469ad2945d0197f4"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "5a2643d0-63ad-47e5-a7c4-7aadf757121a", t._sentryDebugIdIdentifier = "sentry-dbid-5a2643d0-63ad-47e5-a7c4-7aadf757121a")
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
  b: a
}) {
  function o(n) {
    return n.toString(16).padStart(2, "0")
  }
  return `#${o(t)}${o(e)}${o(a)}`
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
  const [e, a, o] = i.colors[t].rgb;
  return {
    r: e,
    g: a,
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
  let a = y[0],
    o = Number.MAX_VALUE;
  const n = w(t);
  for (let r of y) {
    const l = M(n, r.lab);
    l < o && (a = r, o = l)
  }
  return a.idx
}

function w(t) {
  var e = t.r / 255,
    a = t.g / 255,
    o = t.b / 255,
    n, r, l;
  return e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92, o = o > .04045 ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92, n = (e * .4124 + a * .3576 + o * .1805) / .95047, r = (e * .2126 + a * .7152 + o * .0722) / 1, l = (e * .0193 + a * .1192 + o * .9505) / 1.08883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, {
    l: 116 * r - 16,
    a: 500 * (n - r),
    b: 200 * (r - l)
  }
}

function M(t, e) {
  var a = t.l - e.l,
    o = t.a - e.a,
    n = t.b - e.b,
    r = Math.sqrt(t.a * t.a + t.b * t.b),
    l = Math.sqrt(e.a * e.a + e.b * e.b),
    s = r - l,
    c = o * o + n * n - s * s;
  c = c < 0 ? 0 : Math.sqrt(c);
  var m = 1 + .045 * r,
    v = 1 + .015 * r,
    d = a / 1,
    g = s / m,
    f = c / v,
    b = d * d + g * g + f * f;
  return b < 0 ? 0 : Math.sqrt(b)
}

function x(t, e) {
  const a = (t.r + e.r) / 2,
    o = t.r - e.r,
    n = t.g - e.g,
    r = t.b - e.b,
    l = 2 + a / 256,
    s = 2 + (255 - a) / 256;
  return l * o * o + 4 * n * n + s * r * r
}
export {
  D as a, R as b, C as c, A as g, k as h, T as r
};