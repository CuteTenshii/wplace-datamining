import {
  T as n,
  O as t,
  H as a,
  S as c,
  U as b
} from "./BhJstTAi.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "93ce353ea66c24fd9b67d84d4d5dac764dc78ea8"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new d.Error().stack;
    f && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[f] = "670f945d-7c8c-4d2b-899d-c5c33308be17", d._sentryDebugIdIdentifier = "sentry-dbid-670f945d-7c8c-4d2b-899d-c5c33308be17")
  })()
} catch {}

function r(d, f) {
  return d === f || (d == null ? void 0 : d[b]) === f
}

function g(d = {}, f, s, y) {
  return n(() => {
    var e, i;
    return t(() => {
      e = i, i = [], a(() => {
        d !== s(...i) && (f(d, ...i), e && r(s(...e), d) && f(null, ...e))
      })
    }), () => {
      c(() => {
        i && r(s(...i), d) && f(null, ...i)
      })
    }
  }), d
}
export {
  g as b
};