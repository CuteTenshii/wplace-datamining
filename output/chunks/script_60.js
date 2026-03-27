(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "65a3db4a500394d84da74f59d1f734aa6c59383c"
    };
    var t = new a.Error().stack;
    t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "318a9da5-f9ae-41c4-a6ad-1557223c6f66", a._sentryDebugIdIdentifier = "sentry-dbid-318a9da5-f9ae-41c4-a6ad-1557223c6f66")
  } catch {}
})();
const b = a => a;

function h(a) {
  const t = a - 1;
  return t * t * t + 1
}

function m(a, {
  delay: t = 0,
  duration: n = 400,
  easing: s = b
} = {}) {
  const i = +getComputedStyle(a).opacity;
  return {
    delay: t,
    duration: n,
    easing: s,
    css: o => `opacity: ${o*i}`
  }
}

function w(a, {
  delay: t = 0,
  duration: n = 400,
  easing: s = h,
  axis: i = "y"
} = {}) {
  const o = getComputedStyle(a),
    c = +o.opacity,
    p = i === "y" ? "height" : "width",
    l = parseFloat(o[p]),
    r = i === "y" ? ["top", "bottom"] : ["left", "right"],
    d = r.map(e => `${e[0].toUpperCase()}${e.slice(1)}`),
    y = parseFloat(o[`padding${d[0]}`]),
    f = parseFloat(o[`padding${d[1]}`]),
    u = parseFloat(o[`margin${d[0]}`]),
    _ = parseFloat(o[`margin${d[1]}`]),
    $ = parseFloat(o[`border${d[0]}Width`]),
    g = parseFloat(o[`border${d[1]}Width`]);
  return {
    delay: t,
    duration: n,
    easing: s,
    css: e => `overflow: hidden;opacity: ${Math.min(e*20,1)*c};${p}: ${e*l}px;padding-${r[0]}: ${e*y}px;padding-${r[1]}: ${e*f}px;margin-${r[0]}: ${e*u}px;margin-${r[1]}: ${e*_}px;border-${r[0]}-width: ${e*$}px;border-${r[1]}-width: ${e*g}px;min-${p}: 0`
  }
}
export {
  m as f, w as s
};