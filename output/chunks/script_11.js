import {
  M as a,
  H as n,
  z as t,
  L as b,
  S as c
} from "./C9Y3lpV-.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "7ed500f4877d9522a36ae9e4cb9ffdc698db3fc1"
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

function r(f, d) {
  return f === d || (f == null ? void 0 : f[c]) === d
}

function g(f = {}, d, s, y) {
  return a(() => {
    var e, i;
    return n(() => {
      e = i, i = [], t(() => {
        f !== s(...i) && (d(f, ...i), e && r(s(...e), f) && d(null, ...e))
      })
    }), () => {
      b(() => {
        i && r(s(...i), f) && d(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};