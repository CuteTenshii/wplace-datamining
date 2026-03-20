import {
  M as t,
  Y as b,
  G as n,
  Z as e,
  _ as y
} from "./D5ICCrBp.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "712356e502b473ac28f78925f6e5ee7bbba0c9dd"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "15f19e7c-39df-4714-a969-824a2584f24d", f._sentryDebugIdIdentifier = "sentry-dbid-15f19e7c-39df-4714-a969-824a2584f24d")
  } catch {}
})();

function a(f, s) {
  return f === s || (f == null ? void 0 : f[y]) === s
}

function u(f = {}, s, i, c) {
  return t(() => {
    var d, r;
    return b(() => {
      d = r, r = [], n(() => {
        f !== i(...r) && (s(f, ...r), d && a(i(...d), f) && s(null, ...d))
      })
    }), () => {
      e(() => {
        r && a(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};