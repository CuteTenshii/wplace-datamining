import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as c
} from "./5uP9lSl_.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "73973961cce1223172a2858ab6abc5d2386ef402"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "b6ca37b8-1ecd-490a-80c1-a7d85598b3d9", f._sentryDebugIdIdentifier = "sentry-dbid-b6ca37b8-1ecd-490a-80c1-a7d85598b3d9")
  })()
} catch {}

function a(f, i) {
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, e, y) {
  return r(() => {
    var s, d;
    return n(() => {
      s = d, d = [], t(() => {
        f !== e(...d) && (i(f, ...d), s && a(e(...s), f) && i(null, ...s))
      })
    }), () => {
      b(() => {
        d && a(e(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};