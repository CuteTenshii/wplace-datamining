import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as c
} from "./D4j1m9ll.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "c050fa6bdb18cd16824281f5af6d712ea849d5ba"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "b6ca37b8-1ecd-490a-80c1-a7d85598b3d9", f._sentryDebugIdIdentifier = "sentry-dbid-b6ca37b8-1ecd-490a-80c1-a7d85598b3d9")
  })()
} catch {}

function a(f, d) {
  return f === d || (f == null ? void 0 : f[c]) === d
}

function g(f = {}, d, e, y) {
  return r(() => {
    var s, i;
    return n(() => {
      s = i, i = [], t(() => {
        f !== e(...i) && (d(f, ...i), s && a(e(...s), f) && d(null, ...s))
      })
    }), () => {
      b(() => {
        i && a(e(...i), f) && d(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};