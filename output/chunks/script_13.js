import {
  X as a,
  R as n,
  L as t,
  W as b,
  Y as y
} from "./QY1-WrVz.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "93d2d5a1c9ea65de4db2c69715b442df23632ed6"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new d.Error().stack;
    f && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[f] = "3332b1aa-64c5-4482-9671-3e9278d9a7de", d._sentryDebugIdIdentifier = "sentry-dbid-3332b1aa-64c5-4482-9671-3e9278d9a7de")
  })()
} catch {}

function r(d, f) {
  return d === f || (d == null ? void 0 : d[y]) === f
}

function g(d = {}, f, s, l) {
  return a(() => {
    var e, i;
    return n(() => {
      e = i, i = [], t(() => {
        d !== s(...i) && (f(d, ...i), e && r(s(...e), d) && f(null, ...e))
      })
    }), () => {
      b(() => {
        i && r(s(...i), d) && f(null, ...i)
      })
    }
  }), d
}
export {
  g as b
};