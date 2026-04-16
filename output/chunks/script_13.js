import {
  L as a,
  X as b,
  x as c,
  Y as n,
  Z as e
} from "./CJNfechn.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "f132c13a-1ce5-4d16-954b-79c3d16d7433", f._sentryDebugIdIdentifier = "sentry-dbid-f132c13a-1ce5-4d16-954b-79c3d16d7433")
  } catch {}
})();

function t(f, d) {
  return f === d || (f == null ? void 0 : f[e]) === d
}

function u(f = {}, d, r, y) {
  return a(() => {
    var i, s;
    return b(() => {
      i = s, s = [], c(() => {
        f !== r(...s) && (d(f, ...s), i && t(r(...i), f) && d(null, ...i))
      })
    }), () => {
      n(() => {
        s && t(r(...s), f) && d(null, ...s)
      })
    }
  }), f
}
export {
  u as b
};