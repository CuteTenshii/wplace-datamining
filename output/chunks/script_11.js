import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as y
} from "./DQc9Bjlo.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "96e7de35a79bbd0971b03a9483bfe62a1a391d64"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new d.Error().stack;
    f && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[f] = "b6ca37b8-1ecd-490a-80c1-a7d85598b3d9", d._sentryDebugIdIdentifier = "sentry-dbid-b6ca37b8-1ecd-490a-80c1-a7d85598b3d9")
  })()
} catch {}

function a(d, f) {
  return d === f || (d == null ? void 0 : d[y]) === f
}

function g(d = {}, f, s, c) {
  return r(() => {
    var e, i;
    return n(() => {
      e = i, i = [], t(() => {
        d !== s(...i) && (f(d, ...i), e && a(s(...e), d) && f(null, ...e))
      })
    }), () => {
      b(() => {
        i && a(s(...i), d) && f(null, ...i)
      })
    }
  }), d
}
export {
  g as b
};