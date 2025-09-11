import {
  S as i
} from "./Ce-BUMuR.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "9e594f39530defa0eea34168198e146d1118d931"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "3a1aa0dd-1e70-4d9c-87de-03f2c6185fd5", t._sentryDebugIdIdentifier = "sentry-dbid-3a1aa0dd-1e70-4d9c-87de-03f2c6185fd5")
  })()
} catch {}
const u = ["text-red-500", "text-orange-500", "text-yellow-500", "text-lime-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500", "text-pink-500", "text-rose-500"],
  p = ["bg-red-500/10", "bg-orange-500/10", "bg-yellow-500/10", "bg-lime-500/10", "bg-emerald-500/10", "bg-teal-500/10", "bg-cyan-500/10", "bg-sky-500/10", "bg-indigo-500/10", "bg-violet-500/10", "bg-purple-500/10", "bg-fuchsia-500/10", "bg-pink-500/10", "bg-rose-500/10"];

function x(t) {
  return u[t % u.length]
}

function E(t) {
  return p[t % p.length]
}

function T({
  r: t,
  g: e,
  b: o
}) {
  function r(a) {
    return a.toString(16).padStart(2, "0")
  }
  return `#${r(t)}${r(e)}${r(o)}`
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
  const [e, o, r] = i.colors[t].rgb;
  return {
    r: e,
    g: o,
    b: r,
    a: t === 0 ? 0 : 255
  }
}
const y = i.colors.map((t, e) => ({
  ...t,
  idx: e,
  lab: v({
    r: t.rgb[0],
    g: t.rgb[1],
    b: t.rgb[2]
  })
})).filter(t => t.idx !== 0);

function A(t) {
  let e = y[0],
    o = Number.MAX_VALUE;
  const r = v(t);
  for (let a of y) {
    const n = m(r, a.lab);
    n < o && (e = a, o = n)
  }
  return e.idx
}

function v(t) {
  var e = t.r / 255,
    o = t.g / 255,
    r = t.b / 255,
    a, n, l;
  return e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92, o = o > .04045 ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92, r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92, a = (e * .4124 + o * .3576 + r * .1805) / .95047, n = (e * .2126 + o * .7152 + r * .0722) / 1, l = (e * .0193 + o * .1192 + r * .9505) / 1.08883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, {
    l: 116 * n - 16,
    a: 500 * (a - n),
    b: 200 * (n - l)
  }
}

function m(t, e) {
  var o = t.l - e.l,
    r = t.a - e.a,
    a = t.b - e.b,
    n = Math.sqrt(t.a * t.a + t.b * t.b),
    l = Math.sqrt(e.a * e.a + e.b * e.b),
    d = n - l,
    s = r * r + a * a - d * d;
  s = s < 0 ? 0 : Math.sqrt(s);
  var w = 1 + .045 * n,
    h = 1 + .015 * n,
    g = o / 1,
    c = d / w,
    f = s / h,
    b = g * g + c * c + f * f;
  return b < 0 ? 0 : Math.sqrt(b)
}
export {
  E as a, A as b, C as c, x as g, k as h, T as r
};