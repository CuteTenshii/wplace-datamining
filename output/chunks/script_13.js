import {
  M as t,
  Y as n,
  G as y,
  Z as c,
  _ as e
} from "./BwyorQE6.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "1df086015dcad95f71ef916d3761e849d40d98a2"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "15f19e7c-39df-4714-a969-824a2584f24d", f._sentryDebugIdIdentifier = "sentry-dbid-15f19e7c-39df-4714-a969-824a2584f24d")
  } catch {}
})();

function a(f, s) {
  return f === s || (f == null ? void 0 : f[e]) === s
}

function u(f = {}, s, r, b) {
  return t(() => {
    var i, d;
    return n(() => {
      i = d, d = [], y(() => {
        f !== r(...d) && (s(f, ...d), i && a(r(...i), f) && s(null, ...i))
      })
    }), () => {
      c(() => {
        d && a(r(...d), f) && s(null, ...d)
      })
    }
  }), f
}
export {
  u as b
};