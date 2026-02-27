import {
  K as c,
  W as t,
  I as b,
  X as n,
  Y as y
} from "./C3nPqK5x.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var s = new f.Error().stack;
    s && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[s] = "7143c13a-d615-4230-ac3c-4fcdc926d5b2", f._sentryDebugIdIdentifier = "sentry-dbid-7143c13a-d615-4230-ac3c-4fcdc926d5b2")
  } catch {}
})();

function a(f, s) {
  return f === s || (f == null ? void 0 : f[y]) === s
}

function u(f = {}, s, r, e) {
  return c(() => {
    var i, d;
    return t(() => {
      i = d, d = [], b(() => {
        f !== r(...d) && (s(f, ...d), i && a(r(...i), f) && s(null, ...i))
      })
    }), () => {
      n(() => {
        d && a(r(...d), f) && s(null, ...d)
      })
    }
  }), f
}
export {
  u as b
};