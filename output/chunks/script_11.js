import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as c
} from "./DZJnUCzD.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "898d81c1fd54065a15a1bfd2b6539ddebd5eab08"
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
  return d === f || (d == null ? void 0 : d[c]) === f
}

function g(d = {}, f, e, y) {
  return r(() => {
    var s, i;
    return n(() => {
      s = i, i = [], t(() => {
        d !== e(...i) && (f(d, ...i), s && a(e(...s), d) && f(null, ...s))
      })
    }), () => {
      b(() => {
        i && a(e(...i), d) && f(null, ...i)
      })
    }
  }), d
}
export {
  g as b
};