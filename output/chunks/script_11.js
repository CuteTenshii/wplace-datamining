import {
  q as r,
  X as n,
  w as t,
  a0 as b,
  a1 as c
} from "./DcuED2r1.js";
(function() {
  try {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    f.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var f = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new f.Error().stack;
    i && (f._sentryDebugIds = f._sentryDebugIds || {}, f._sentryDebugIds[i] = "bfa04660-ca68-40d3-8fac-7f6f57bf59c8", f._sentryDebugIdIdentifier = "sentry-dbid-bfa04660-ca68-40d3-8fac-7f6f57bf59c8")
  })()
} catch {}

function e(f, i) {
  return f === i || (f == null ? void 0 : f[c]) === i
}

function g(f = {}, i, a, y) {
  return r(() => {
    var s, d;
    return n(() => {
      s = d, d = [], t(() => {
        f !== a(...d) && (i(f, ...d), s && e(a(...s), f) && i(null, ...s))
      })
    }), () => {
      b(() => {
        d && e(a(...d), f) && i(null, ...d)
      })
    }
  }), f
}
export {
  g as b
};