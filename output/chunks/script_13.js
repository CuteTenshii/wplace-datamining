import {
  L as a,
  X as c,
  x as b,
  Y as n,
  Z as y
} from "./CP18E9YK.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "6f22cff8187de3395cfbf72b619a597cbd559223"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "f132c13a-1ce5-4d16-954b-79c3d16d7433", f._sentryDebugIdIdentifier = "sentry-dbid-f132c13a-1ce5-4d16-954b-79c3d16d7433")
  } catch {}
})();

function t(f, s) {
  return f === s || (f == null ? void 0 : f[y]) === s
}

function u(f = {}, s, i, e) {
  return a(() => {
    var d, r;
    return c(() => {
      d = r, r = [], b(() => {
        f !== i(...r) && (s(f, ...r), d && t(i(...d), f) && s(null, ...d))
      })
    }), () => {
      n(() => {
        r && t(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};