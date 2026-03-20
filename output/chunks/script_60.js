(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "712356e502b473ac28f78925f6e5ee7bbba0c9dd"
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
  duration: d = 400,
  easing: s = b
} = {}) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: a,
    duration: d,
    easing: s,
    css: o => `opacity: ${o*i}`
  }
}

function w(e, {
  delay: a = 0,
  duration: d = 400,
  easing: s = h,
  axis: i = "y"
} = {}) {
  const o = getComputedStyle(e),
    c = +o.opacity,
    p = i === "y" ? "height" : "width",
    l = parseFloat(o[p]),
    r = i === "y" ? ["top", "bottom"] : ["left", "right"],
    n = r.map(t => `${t[0].toUpperCase()}${t.slice(1)}`),
    y = parseFloat(o[`padding${n[0]}`]),
    f = parseFloat(o[`padding${n[1]}`]),
    u = parseFloat(o[`margin${n[0]}`]),
    _ = parseFloat(o[`margin${n[1]}`]),
    $ = parseFloat(o[`border${n[0]}Width`]),
    g = parseFloat(o[`border${n[1]}Width`]);
  return {
    delay: a,
    duration: d,
    easing: s,
    css: t => `overflow: hidden;opacity: ${Math.min(t*20,1)*c};${p}: ${t*l}px;padding-${r[0]}: ${t*y}px;padding-${r[1]}: ${t*f}px;margin-${r[0]}: ${t*u}px;margin-${r[1]}: ${t*_}px;border-${r[0]}-width: ${t*$}px;border-${r[1]}-width: ${t*g}px;min-${p}: 0`
  }
}
export {
  m as f, w as s
};