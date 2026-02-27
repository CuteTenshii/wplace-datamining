import {
  f as i
} from "./DAunMILJ.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "7fc98835-fc39-4383-9833-a55642c750fd", t._sentryDebugIdIdentifier = "sentry-dbid-7fc98835-fc39-4383-9833-a55642c750fd")
  } catch {}
})();
const u = ["text-red-500", "text-orange-500", "text-yellow-500", "text-lime-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500", "text-pink-500", "text-rose-500"],
  p = ["bg-red-500/10", "bg-orange-500/10", "bg-yellow-500/10", "bg-lime-500/10", "bg-emerald-500/10", "bg-teal-500/10", "bg-cyan-500/10", "bg-sky-500/10", "bg-indigo-500/10", "bg-violet-500/10", "bg-purple-500/10", "bg-fuchsia-500/10", "bg-pink-500/10", "bg-rose-500/10"];

function A(t) {
  return u[t % u.length]
}

function D(t) {
  return p[t % p.length]
}

function k({
  r: t,
  g: e,
  b: a
}) {
  function r(n) {
    return n.toString(16).padStart(2, "0")
  }
  return `#${r(t)}${r(e)}${r(a)}`
}

function C(t) {
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

function R(t) {
  t = Math.min(t, i.colors.length - 1);
  const [e, a, r] = i.colors[t].rgb;
  return {
    r: e,
    g: a,
    b: r,
    a: t === 0 ? 0 : 255
  }
}
const m = i.colors.map((t, e) => ({
    ...t,
    idx: e,
    lab: h({
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    })
  })).filter(t => t.idx !== 0),
  v = i.colors.map((t, e) => ({
    idx: e,
    rgb: {
      r: t.rgb[0],
      g: t.rgb[1],
      b: t.rgb[2]
    }
  })).filter(t => t.idx !== 0);

function I(t, e = "lab") {
  if (e === "compuphase") {
    let o = v[0],
      s = Number.MAX_VALUE;
    for (const l of v) {
      const c = x(t, l.rgb);
      c < s && (o = l, s = c)
    }
    return o.idx
  }
  let a = m[0],
    r = Number.MAX_VALUE;
  const n = h(t);
  for (let o of m) {
    const s = M(n, o.lab);
    s < r && (a = o, r = s)
  }
  return a.idx
}

function h(t) {
  var e = t.r / 255,
    a = t.g / 255,
    r = t.b / 255,
    n, o, s;
  return e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92, r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92, n = (e * .4124 + a * .3576 + r * .1805) / .95047, o = (e * .2126 + a * .7152 + r * .0722) / 1, s = (e * .0193 + a * .1192 + r * .9505) / 1.08883, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, s = s > .008856 ? Math.pow(s, 1 / 3) : 7.787 * s + 16 / 116, {
    l: 116 * o - 16,
    a: 500 * (n - o),
    b: 200 * (o - s)
  }
}

function M(t, e) {
  var a = t.l - e.l,
    r = t.a - e.a,
    n = t.b - e.b,
    o = Math.sqrt(t.a * t.a + t.b * t.b),
    s = Math.sqrt(e.a * e.a + e.b * e.b),
    l = o - s,
    c = r * r + n * n - l * l;
  c = c < 0 ? 0 : Math.sqrt(c);
  var y = 1 + .045 * o,
    w = 1 + .015 * o,
    g = a / 1,
    d = l / y,
    b = c / w,
    f = g * g + d * d + b * b;
  return f < 0 ? 0 : Math.sqrt(f)
}

function x(t, e) {
  const a = (t.r + e.r) / 2,
    r = t.r - e.r,
    n = t.g - e.g,
    o = t.b - e.b,
    s = 2 + a / 256,
    l = 2 + (255 - a) / 256;
  return s * r * r + 4 * n * n + l * o * o
}
export {
  D as a, I as b, R as c, A as g, C as h, k as r
};