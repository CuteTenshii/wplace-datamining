(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "72fbd38af17dae1ddf2de413da161ffaa3b3b729"
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
    css: d => `opacity: ${d*i}`
  }
}

function w(e, {
  delay: t = 0,
  duration: n = 400,
  easing: s = h,
  axis: i = "y"
} = {}) {
  const d = getComputedStyle(e),
    c = +d.opacity,
    p = i === "y" ? "height" : "width",
    l = parseFloat(d[p]),
    o = i === "y" ? ["top", "bottom"] : ["left", "right"],
    r = o.map(a => `${a[0].toUpperCase()}${a.slice(1)}`),
    f = parseFloat(d[`padding${r[0]}`]),
    y = parseFloat(d[`padding${r[1]}`]),
    u = parseFloat(d[`margin${r[0]}`]),
    _ = parseFloat(d[`margin${r[1]}`]),
    $ = parseFloat(d[`border${r[0]}Width`]),
    g = parseFloat(d[`border${r[1]}Width`]);
  return {
    delay: t,
    duration: n,
    easing: s,
    css: a => `overflow: hidden;opacity: ${Math.min(a*20,1)*c};${p}: ${a*l}px;padding-${o[0]}: ${a*f}px;padding-${o[1]}: ${a*y}px;margin-${o[0]}: ${a*u}px;margin-${o[1]}: ${a*_}px;border-${o[0]}-width: ${a*$}px;border-${o[1]}-width: ${a*g}px;min-${p}: 0`
  }
}
export {
  m as f, w as s
};