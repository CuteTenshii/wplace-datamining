(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2a2853da5197f1e8876a5229454a4e7ee1aa190e"
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
const b = e => e;

function h(e) {
  const a = e - 1;
  return a * a * a + 1
}

function w(e, {
  delay: a = 0,
  duration: i = 400,
  easing: s = b
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
    l = +n.opacity,
    p = r === "y" ? "height" : "width",
    c = parseFloat(n[p]),
    o = r === "y" ? ["top", "bottom"] : ["left", "right"],
    d = o.map(t => `${t[0].toUpperCase()}${t.slice(1)}`),
    f = parseFloat(n[`padding${d[0]}`]),
    y = parseFloat(n[`padding${d[1]}`]),
    u = parseFloat(n[`margin${d[0]}`]),
    g = parseFloat(n[`margin${d[1]}`]),
    _ = parseFloat(n[`border${d[0]}Width`]),
    $ = parseFloat(n[`border${d[1]}Width`]);
  return {
    delay: a,
    duration: i,
    easing: s,
    css: t => `overflow: hidden;opacity: ${Math.min(t*20,1)*l};${p}: ${t*c}px;padding-${o[0]}: ${t*f}px;padding-${o[1]}: ${t*y}px;margin-${o[0]}: ${t*u}px;margin-${o[1]}: ${t*g}px;border-${o[0]}-width: ${t*_}px;border-${o[1]}-width: ${t*$}px;min-${p}: 0`
  }
}
export {
  w as f, m as s
};