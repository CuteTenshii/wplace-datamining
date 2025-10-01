import {
  ac as a,
  H as n,
  z as t,
  L as y,
  ad as b
} from "./Cp2nYQu0.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "fe77e0a32f22395333b3f54fb7a95ef6936c7140"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "554e06f2-a09e-496d-9df0-84ac5f964ff6", f._sentryDebugIdIdentifier = "sentry-dbid-554e06f2-a09e-496d-9df0-84ac5f964ff6")
  })()
} catch {}

function r(f, i) {
  return f === i || (f == null ? void 0 : f[b]) === i
}

function g(f = {}, i, s, l) {
  return a(() => {
    var d, e;
    return n(() => {
      d = e, e = [], t(() => {
        f !== s(...e) && (i(f, ...e), d && r(s(...d), f) && i(null, ...d))
      })
    }), () => {
      y(() => {
        e && r(s(...e), f) && i(null, ...e)
      })
    }
  }), f
}
export {
  g as b
};