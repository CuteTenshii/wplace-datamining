(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1df086015dcad95f71ef916d3761e849d40d98a2"
    };
    var a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "318a9da5-f9ae-41c4-a6ad-1557223c6f66", e._sentryDebugIdIdentifier = "sentry-dbid-318a9da5-f9ae-41c4-a6ad-1557223c6f66")
  } catch {}
})();
const b = e => e;

function h(e) {
  const a = e - 1;
  return a * a * a + 1
}

function m(e, {
  delay: a = 0,
  duration: n = 400,
  easing: s = b
} = {}) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: a,
    duration: n,
    easing: s,
    css: d => `opacity: ${d*i}`
  }
}

function w(e, {
  delay: a = 0,
  duration: n = 400,
  easing: s = h,
  axis: i = "y"
} = {}) {
  const d = getComputedStyle(e),
    c = +d.opacity,
    p = i === "y" ? "height" : "width",
    l = parseFloat(d[p]),
    o = i === "y" ? ["top", "bottom"] : ["left", "right"],
    r = o.map(t => `${t[0].toUpperCase()}${t.slice(1)}`),
    f = parseFloat(d[`padding${r[0]}`]),
    y = parseFloat(d[`padding${r[1]}`]),
    u = parseFloat(d[`margin${r[0]}`]),
    _ = parseFloat(d[`margin${r[1]}`]),
    $ = parseFloat(d[`border${r[0]}Width`]),
    g = parseFloat(d[`border${r[1]}Width`]);
  return {
    delay: a,
    duration: n,
    easing: s,
    css: t => `overflow: hidden;opacity: ${Math.min(t*20,1)*c};${p}: ${t*l}px;padding-${o[0]}: ${t*f}px;padding-${o[1]}: ${t*y}px;margin-${o[0]}: ${t*u}px;margin-${o[1]}: ${t*_}px;border-${o[0]}-width: ${t*$}px;border-${o[1]}-width: ${t*g}px;min-${p}: 0`
  }
}
export {
  m as f, w as s
};