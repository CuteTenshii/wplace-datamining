import {
  K as d,
  W as t,
  x as c,
  X as e,
  Y as n
} from "./Bpkf4F49.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "8cde383e539e83c9bf370a8bc3de0b358fbc04c8"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "eabf450d-ca4b-48ea-9995-378486155bbf", f._sentryDebugIdIdentifier = "sentry-dbid-eabf450d-ca4b-48ea-9995-378486155bbf")
  } catch {}
})();

function b(f, s) {
  return f === s || (f == null ? void 0 : f[n]) === s
}

function u(f = {}, s, i, y) {
  return d(() => {
    var a, r;
    return t(() => {
      a = r, r = [], c(() => {
        f !== i(...r) && (s(f, ...r), a && b(i(...a), f) && s(null, ...a))
      })
    }), () => {
      e(() => {
        r && b(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};