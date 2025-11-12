import {
  e as n,
  N as t,
  F as b,
  R as a,
  S as y
} from "./q9bO_DSU.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "15fb4e3d80a4de2b957e29f1299dd0b2bef7a1e3"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new f.Error().stack;
    e && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[e] = "87249c32-a1b1-43c3-84bb-485be2695d75", f._sentryDebugIdIdentifier = "sentry-dbid-87249c32-a1b1-43c3-84bb-485be2695d75")
  })()
} catch {}

function r(f, e) {
  return f === e || (f == null ? void 0 : f[y]) === e
}

function g(f = {}, e, s, l) {
  return n(() => {
    var d, i;
    return t(() => {
      d = i, i = [], b(() => {
        f !== s(...i) && (e(f, ...i), d && r(s(...d), f) && e(null, ...d))
      })
    }), () => {
      a(() => {
        i && r(s(...i), f) && e(null, ...i)
      })
    }
  }), f
}
export {
  g as b
};