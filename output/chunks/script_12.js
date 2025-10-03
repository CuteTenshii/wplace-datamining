import {
  M as r,
  H as n,
  z as t,
  L as b,
  S as y
} from "./BONTOiKC.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "485fa57ad20bf45d61bdea250be0ef78a269ac0b"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "ffab2ed1-a75e-4289-9303-46e6dc6bb67c", f._sentryDebugIdIdentifier = "sentry-dbid-ffab2ed1-a75e-4289-9303-46e6dc6bb67c")
  })()
} catch {}

function a(f, e) {
  return f === e || (f == null ? void 0 : f[y]) === e
}

function g(f = {}, e, s, c) {
  return r(() => {
    var d, i;
    return n(() => {
      d = i, i = [], t(() => {
        f !== s(...i) && (e(f, ...i), d && a(s(...d), f) && e(null, ...d))
      })
    }), () => {
      b(() => {
        i && a(s(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};