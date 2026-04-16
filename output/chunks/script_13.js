import {
  L as a,
  X as b,
  x as c,
  Y as n,
  Z as y
} from "./DjeFwfzX.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "209576268ed2d55d78b1f313fb4db5f4a92290b5"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "f132c13a-1ce5-4d16-954b-79c3d16d7433", f._sentryDebugIdIdentifier = "sentry-dbid-f132c13a-1ce5-4d16-954b-79c3d16d7433")
  } catch {}
})();

function t(f, s) {
  return f === s || (f == null ? void 0 : f[y]) === s
}

function u(f = {}, s, r, e) {
  return a(() => {
    var i, d;
    return b(() => {
      i = d, d = [], c(() => {
        f !== r(...d) && (s(f, ...d), i && t(r(...i), f) && s(null, ...i))
      })
    }), () => {
      n(() => {
        d && t(r(...d), f) && s(null, ...d)
      })
    }
  }), f
}
export {
  u as b
};