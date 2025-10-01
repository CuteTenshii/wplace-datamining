import {
  ac as n,
  H as t,
  z as a,
  L as y,
  ad as b
} from "./DwvisW99.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "62927027eb35380145df236b415c7021973de3ee"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "554e06f2-a09e-496d-9df0-84ac5f964ff6", f._sentryDebugIdIdentifier = "sentry-dbid-554e06f2-a09e-496d-9df0-84ac5f964ff6")
  })()
} catch {}

function r(f, e) {
  return f === e || (f == null ? void 0 : f[b]) === e
}

function g(f = {}, e, s, l) {
  return n(() => {
    var d, i;
    return t(() => {
      d = i, i = [], a(() => {
        f !== s(...i) && (e(f, ...i), d && r(s(...d), f) && e(null, ...d))
      })
    }), () => {
      y(() => {
        i && r(s(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};