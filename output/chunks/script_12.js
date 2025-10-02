import {
  ac as r,
  H as n,
  z as t,
  L as y,
  ad as b
} from "./Cj6syOWc.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "4a8af4cdbd1ae06ce10a324d70e489e27b1b6720"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new f.Error().stack;
    d && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[d] = "554e06f2-a09e-496d-9df0-84ac5f964ff6", f._sentryDebugIdIdentifier = "sentry-dbid-554e06f2-a09e-496d-9df0-84ac5f964ff6")
  })()
} catch {}

function a(f, d) {
  return f === d || (f == null ? void 0 : f[b]) === d
}

function g(f = {}, d, s, c) {
  return r(() => {
    var i, e;
    return n(() => {
      i = e, e = [], t(() => {
        f !== s(...e) && (d(f, ...e), i && a(s(...i), f) && d(null, ...i))
      })
    }), () => {
      y(() => {
        e && a(s(...e), f) && d(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};