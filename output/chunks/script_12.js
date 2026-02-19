import {
  B as n,
  R as t,
  y as a,
  S as y,
  T as b
} from "./Bl5qixfQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5813ae56f58e7333550e54b13dee572a566ecd62"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new e.Error().stack;
    f && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[f] = "8a5e6863-9f09-4d72-82d0-1eefe694b958", e._sentryDebugIdIdentifier = "sentry-dbid-8a5e6863-9f09-4d72-82d0-1eefe694b958")
  })()
} catch {}

function r(e, f) {
  return e === f || (e == null ? void 0 : e[b]) === f
}

function o(e = {}, f, s, l) {
  return n(() => {
    var d, i;
    return t(() => {
      d = i, i = [], a(() => {
        e !== s(...i) && (f(e, ...i), d && r(s(...d), e) && f(null, ...d))
      })
    }), () => {
      y(() => {
        i && r(s(...i), e) && f(null, ...i)
      })
    }
  }), e
}
export {
  o as b
};