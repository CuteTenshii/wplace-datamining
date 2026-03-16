(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
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
  duration: d = 400,
  easing: s = b
} = {}) {
  const i = +getComputedStyle(e).opacity;
  return {
    delay: t,
    duration: d,
    easing: s,
    css: o => `opacity: ${o*i}`
  }
}

function w(e, {
  delay: t = 0,
  duration: d = 400,
  easing: s = h,
  axis: i = "y"
} = {}) {
  const o = getComputedStyle(e),
    c = +o.opacity,
    p = i === "y" ? "height" : "width",
    l = parseFloat(o[p]),
    r = i === "y" ? ["top", "bottom"] : ["left", "right"],
    n = r.map(a => `${a[0].toUpperCase()}${a.slice(1)}`),
    f = parseFloat(o[`padding${n[0]}`]),
    y = parseFloat(o[`padding${n[1]}`]),
    u = parseFloat(o[`margin${n[0]}`]),
    _ = parseFloat(o[`margin${n[1]}`]),
    $ = parseFloat(o[`border${n[0]}Width`]),
    g = parseFloat(o[`border${n[1]}Width`]);
  return {
    delay: t,
    duration: d,
    easing: s,
    css: a => `overflow: hidden;opacity: ${Math.min(a*20,1)*c};${p}: ${a*l}px;padding-${r[0]}: ${a*f}px;padding-${r[1]}: ${a*y}px;margin-${r[0]}: ${a*u}px;margin-${r[1]}: ${a*_}px;border-${r[0]}-width: ${a*$}px;border-${r[1]}-width: ${a*g}px;min-${p}: 0`
  }
}
export {
  m as f, w as s
};