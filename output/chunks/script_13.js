import {
  K as t,
  W as b,
  x as e,
  X as n,
  Y as y
} from "./CRmpufpB.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "454dd064a649ff0efc297a38e6aed3cfb6597516"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "eabf450d-ca4b-48ea-9995-378486155bbf", f._sentryDebugIdIdentifier = "sentry-dbid-eabf450d-ca4b-48ea-9995-378486155bbf")
  } catch {}
})();

function d(f, s) {
  return f === s || (f == null ? void 0 : f[y]) === s
}

function u(f = {}, s, i, c) {
  return t(() => {
    var a, r;
    return b(() => {
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