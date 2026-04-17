import {
  K as b,
  W as t,
  x as c,
  X as n,
  Y as y
} from "./Nz8BX01A.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "cfc28652dbc454b56a914780051d7c5b69184636"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "eabf450d-ca4b-48ea-9995-378486155bbf", f._sentryDebugIdIdentifier = "sentry-dbid-eabf450d-ca4b-48ea-9995-378486155bbf")
  } catch {}
})();

function d(f, s) {
  return f === s || (f == null ? void 0 : f[y]) === s
}

function u(f = {}, s, i, e) {
  return b(() => {
    var a, r;
    return t(() => {
      a = r, r = [], c(() => {
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