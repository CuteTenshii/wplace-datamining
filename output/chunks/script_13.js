import {
  K as d,
  W as t,
  x as e,
  X as n,
  Y as c
} from "./Dcbzw1se.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "cdbcf7fbe78b739ecf1b47eab1739b136749bbb3"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "eabf450d-ca4b-48ea-9995-378486155bbf", f._sentryDebugIdIdentifier = "sentry-dbid-eabf450d-ca4b-48ea-9995-378486155bbf")
  } catch {}
})();

function a(f, s) {
  return f === s || (f == null ? void 0 : f[c]) === s
}

function u(f = {}, s, b, y) {
  return d(() => {
    var i, r;
    return t(() => {
      i = r, r = [], e(() => {
        f !== b(...r) && (s(f, ...r), i && a(b(...i), f) && s(null, ...i))
      })
    }), () => {
      n(() => {
        r && a(b(...r), f) && s(null, ...r)
      })
    }
  }), f
}
export {
  u as b
};