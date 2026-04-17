import {
  K as b,
  W as t,
  x as e,
  X as n,
  Y as c
} from "./DK4l5t5k.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "eabf450d-ca4b-48ea-9995-378486155bbf", f._sentryDebugIdIdentifier = "sentry-dbid-eabf450d-ca4b-48ea-9995-378486155bbf")
  } catch {}
})();

function d(f, s) {
  return f === s || (f == null ? void 0 : f[c]) === s
}

function u(f = {}, s, i, y) {
  return b(() => {
    var a, r;
    return t(() => {
      a = r, r = [], e(() => {
        f !== i(...r) && (s(f, ...r), a && d(i(...a), f) && s(null, ...a))
      })
    }), () => {
      n(() => {
        r && d(i(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};