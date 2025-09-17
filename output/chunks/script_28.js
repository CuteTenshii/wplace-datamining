(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ed542c83f3200bdd2dcdd4a1cf4ac45a32651d00"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "318a9da5-f9ae-41c4-a6ad-1557223c6f66", e._sentryDebugIdIdentifier = "sentry-dbid-318a9da5-f9ae-41c4-a6ad-1557223c6f66")
  })()
} catch {}
const b = e => e;

function h(e) {
  const t = e - 1;
  return t * t * t + 1
}

function w(e, {
  delay: t = 0,
  duration: i = 400,
  easing: s = b
} = {}) {
  const r = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: i,
    easing: s,
    css: n => `opacity: ${n*r}`
  }
}

function m(e, {
  delay: t = 0,
  duration: i = 400,
  easing: s = h,
  axis: r = "y"
} = {}) {
  const n = getComputedStyle(e),
    c = +n.opacity,
    p = r === "y" ? "height" : "width",
    l = parseFloat(n[p]),
    d = r === "y" ? ["top", "bottom"] : ["left", "right"],
    o = d.map(a => `${a[0].toUpperCase()}${a.slice(1)}`),
    f = parseFloat(n[`padding${o[0]}`]),
    y = parseFloat(n[`padding${o[1]}`]),
    u = parseFloat(n[`margin${o[0]}`]),
    g = parseFloat(n[`margin${o[1]}`]),
    _ = parseFloat(n[`border${o[0]}Width`]),
    $ = parseFloat(n[`border${o[1]}Width`]);
  return {
    delay: t,
    duration: i,
    easing: s,
    css: a => `overflow: hidden;opacity: ${Math.min(a*20,1)*c};${p}: ${a*l}px;padding-${d[0]}: ${a*f}px;padding-${d[1]}: ${a*y}px;margin-${d[0]}: ${a*u}px;margin-${d[1]}: ${a*g}px;border-${d[0]}-width: ${a*_}px;border-${d[1]}-width: ${a*$}px;min-${p}: 0`
  }
}
export {
  w as f, m as s
};