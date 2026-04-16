import {
  L as a,
  X as c,
  x as n,
  Y as y,
  Z as b
} from "./B8NcJmf7.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "1f8643ac63030331424d23f5f462150829277f89"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "f132c13a-1ce5-4d16-954b-79c3d16d7433", f._sentryDebugIdIdentifier = "sentry-dbid-f132c13a-1ce5-4d16-954b-79c3d16d7433")
  } catch {}
})();

function t(f, s) {
  return f === s || (f == null ? void 0 : f[b]) === s
}

function u(f = {}, s, i, g) {
  return a(() => {
    var d, r;
    return c(() => {
      d = r, r = [], n(() => {
        f !== i(...r) && (s(f, ...r), d && t(i(...d), f) && s(null, ...d))
      })
    }), () => {
      y(() => {
        r && t(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};