(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "d953af0a076c6a8d855924dd3acfc556014e27c6"
    };
    var t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "318a9da5-f9ae-41c4-a6ad-1557223c6f66", e._sentryDebugIdIdentifier = "sentry-dbid-318a9da5-f9ae-41c4-a6ad-1557223c6f66")
  } catch {}
})();
const b = e => e;

function h(e) {
  const t = e - 1;
  return t * t * t + 1
}

function m(e, {
  delay: t = 0,
  duration: n = 400,
  easing: s = b
} = {}) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: n,
    easing: s,
    css: o => `opacity: ${o*i}`
  }
}

function w(e, {
  delay: t = 0,
  duration: n = 400,
  easing: s = h,
  axis: i = "y"
} = {}) {
  const o = getComputedStyle(e),
    c = +o.opacity,
    p = i === "y" ? "height" : "width",
    l = parseFloat(o[p]),
    r = i === "y" ? ["top", "bottom"] : ["left", "right"],
    d = r.map(a => `${a[0].toUpperCase()}${a.slice(1)}`),
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
    css: a => `overflow: hidden;opacity: ${Math.min(a*20,1)*c};${p}: ${a*l}px;padding-${r[0]}: ${a*y}px;padding-${r[1]}: ${a*f}px;margin-${r[0]}: ${a*u}px;margin-${r[1]}: ${a*_}px;border-${r[0]}-width: ${a*$}px;border-${r[1]}-width: ${a*g}px;min-${p}: 0`
  }
}
export {
  m as f, w as s
};