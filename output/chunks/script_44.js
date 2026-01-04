(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "845cd245f9645ae957e3eeb4920045ede245aa3a"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "f8ff293c-9b57-49af-9415-348ada225de7", t._sentryDebugIdIdentifier = "sentry-dbid-f8ff293c-9b57-49af-9415-348ada225de7")
  })()
} catch {}
const h = t => t;

function m(t) {
  const e = t - 1;
  return e * e * e + 1
}

function b(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"]
}

function w(t, {
  delay: e = 0,
  duration: i = 400,
  easing: p = h
} = {}) {
  const d = +getComputedStyle(t).opacity;
  return {
    delay: e,
    duration: i,
    easing: p,
    css: n => `opacity: ${n*d}`
  }
}

function x(t, {
  delay: e = 0,
  duration: i = 400,
  easing: p = m,
  x: d = 0,
  y: n = 0,
  opacity: f = 0
} = {}) {
  const s = getComputedStyle(t),
    c = +s.opacity,
    a = s.transform === "none" ? "" : s.transform,
    r = c * (1 - f),
    [y, u] = b(d),
    [_, $] = b(n);
  return {
    delay: e,
    duration: i,
    easing: p,
    css: (l, g) => `
			transform: ${a} translate(${(1-l)*y}${u}, ${(1-l)*_}${$});
			opacity: ${c-r*g}`
  }
}

function v(t, {
  delay: e = 0,
  duration: i = 400,
  easing: p = m,
  axis: d = "y"
} = {}) {
  const n = getComputedStyle(t),
    f = +n.opacity,
    s = d === "y" ? "height" : "width",
    c = parseFloat(n[s]),
    a = d === "y" ? ["top", "bottom"] : ["left", "right"],
    r = a.map(o => `${o[0].toUpperCase()}${o.slice(1)}`),
    y = parseFloat(n[`padding${r[0]}`]),
    u = parseFloat(n[`padding${r[1]}`]),
    _ = parseFloat(n[`margin${r[0]}`]),
    $ = parseFloat(n[`margin${r[1]}`]),
    l = parseFloat(n[`border${r[0]}Width`]),
    g = parseFloat(n[`border${r[1]}Width`]);
  return {
    delay: e,
    duration: i,
    easing: p,
    css: o => `overflow: hidden;opacity: ${Math.min(o*20,1)*f};${s}: ${o*c}px;padding-${a[0]}: ${o*y}px;padding-${a[1]}: ${o*u}px;margin-${a[0]}: ${o*_}px;margin-${a[1]}: ${o*$}px;border-${a[0]}-width: ${o*l}px;border-${a[1]}-width: ${o*g}px;min-${s}: 0`
  }
}
export {
  x as a, w as f, v as s
};