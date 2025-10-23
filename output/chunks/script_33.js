import {
  S as i
} from "./WHPgpaR1.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e1bb3bb6ac619eae9d90b3c0ac59135bee8cefab"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5a81020c-1d29-4fee-8b98-e9a176204b61", e._sentryDebugIdIdentifier = "sentry-dbid-5a81020c-1d29-4fee-8b98-e9a176204b61")
  })()
} catch {}
const u = ["text-red-500", "text-orange-500", "text-yellow-500", "text-lime-500", "text-emerald-500", "text-teal-500", "text-cyan-500", "text-sky-500", "text-indigo-500", "text-violet-500", "text-purple-500", "text-fuchsia-500", "text-pink-500", "text-rose-500"],
  p = ["bg-red-500/10", "bg-orange-500/10", "bg-yellow-500/10", "bg-lime-500/10", "bg-emerald-500/10", "bg-teal-500/10", "bg-cyan-500/10", "bg-sky-500/10", "bg-indigo-500/10", "bg-violet-500/10", "bg-purple-500/10", "bg-fuchsia-500/10", "bg-pink-500/10", "bg-rose-500/10"];

function x(e) {
  return u[e % u.length]
}

function E(e) {
  return p[e % p.length]
}

function T({
  r: e,
  g: t,
  b: o
}) {
  function r(a) {
    return a.toString(16).padStart(2, "0")
  }
  return `#${r(e)}${r(t)}${r(o)}`
}

function k(e) {
  return e = e.trim().replace("#", ""), e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), e.length !== 6 ? {
    r: 0,
    g: 0,
    b: 0
  } : {
    r: +("0x" + e.slice(0, 2)),
    g: +("0x" + e.slice(2, 4)),
    b: +("0x" + e.slice(4, 6))
  }
}

function C(e) {
  e = Math.min(e, i.colors.length - 1);
  const [t, o, r] = i.colors[e].rgb;
  return {
    r: t,
    g: o,
    b: r,
    a: e === 0 ? 0 : 255
  }
}
const y = i.colors.map((e, t) => ({
  ...e,
  idx: t,
  lab: v({
    r: e.rgb[0],
    g: e.rgb[1],
    b: e.rgb[2]
  })
})).filter(e => e.idx !== 0);

function A(e) {
  let t = y[0],
    o = Number.MAX_VALUE;
  const r = v(e);
  for (let a of y) {
    const n = m(r, a.lab);
    n < o && (t = a, o = n)
  }
  return t.idx
}

function v(e) {
  var t = e.r / 255,
    o = e.g / 255,
    r = e.b / 255,
    a, n, l;
  return t = t > .04045 ? Math.pow((t + .055) / 1.055, 2.4) : t / 12.92, o = o > .04045 ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92, r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92, a = (t * .4124 + o * .3576 + r * .1805) / .95047, n = (t * .2126 + o * .7152 + r * .0722) / 1, l = (t * .0193 + o * .1192 + r * .9505) / 1.08883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, {
    l: 116 * n - 16,
    a: 500 * (a - n),
    b: 200 * (n - l)
  }
}

function m(e, t) {
  var o = e.l - t.l,
    r = e.a - t.a,
    a = e.b - t.b,
    n = Math.sqrt(e.a * e.a + e.b * e.b),
    l = Math.sqrt(t.a * t.a + t.b * t.b),
    b = n - l,
    s = r * r + a * a - b * b;
  s = s < 0 ? 0 : Math.sqrt(s);
  var w = 1 + .045 * n,
    h = 1 + .015 * n,
    g = o / 1,
    c = b / w,
    d = s / h,
    f = g * g + c * c + d * d;
  return f < 0 ? 0 : Math.sqrt(f)
}
export {
  E as a, A as b, C as c, x as g, k as h, T as r
};