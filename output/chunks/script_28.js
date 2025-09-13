(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "192dcd45d3adb98b0c3a7a5b0a35fc5bc1b8aa18"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "318a9da5-f9ae-41c4-a6ad-1557223c6f66", e._sentryDebugIdIdentifier = "sentry-dbid-318a9da5-f9ae-41c4-a6ad-1557223c6f66")
  })()
} catch {}
const $ = e => e;

function h(e) {
  const a = e - 1;
  return a * a * a + 1
}

function w(e, {
  delay: a = 0,
  duration: i = 400,
  easing: s = $
} = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: a,
    duration: i,
    easing: s,
    css: n => `opacity: ${n*r}`
  }
}

function m(e, {
  delay: a = 0,
  duration: i = 400,
  easing: s = h,
  axis: r = "y"
} = {}) {
  const n = getComputedStyle(e),
    c = +n.opacity,
    p = r === "y" ? "height" : "width",
    l = parseFloat(n[p]),
    o = r === "y" ? ["top", "bottom"] : ["left", "right"],
    d = o.map(t => `${t[0].toUpperCase()}${t.slice(1)}`),
    f = parseFloat(n[`padding${d[0]}`]),
    y = parseFloat(n[`padding${d[1]}`]),
    u = parseFloat(n[`margin${d[0]}`]),
    g = parseFloat(n[`margin${d[1]}`]),
    b = parseFloat(n[`border${d[0]}Width`]),
    _ = parseFloat(n[`border${d[1]}Width`]);
  return {
    delay: a,
    duration: i,
    easing: s,
    css: t => `overflow: hidden;opacity: ${Math.min(t*20,1)*c};${p}: ${t*l}px;padding-${o[0]}: ${t*f}px;padding-${o[1]}: ${t*y}px;margin-${o[0]}: ${t*u}px;margin-${o[1]}: ${t*g}px;border-${o[0]}-width: ${t*b}px;border-${o[1]}-width: ${t*_}px;min-${p}: 0`
  }
}
export {
  w as f, m as s
};