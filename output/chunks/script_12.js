import {
  T as n,
  O as t,
  H as a,
  S as c,
  U as b
} from "./j_iXX3SE.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "29ae9b21d49bd1827c9d9708d11ce0563a962117"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new d.Error().stack;
    f && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[f] = "670f945d-7c8c-4d2b-899d-c5c33308be17", d._sentryDebugIdIdentifier = "sentry-dbid-670f945d-7c8c-4d2b-899d-c5c33308be17")
  })()
} catch {}

function r(d, f) {
  return d === f || (d == null ? void 0 : d[b]) === f
}

function g(d = {}, f, e, y) {
  return n(() => {
    var s, i;
    return t(() => {
      s = i, i = [], a(() => {
        d !== e(...i) && (f(d, ...i), s && r(e(...s), d) && f(null, ...s))
      })
    }), () => {
      c(() => {
        i && r(e(...i), d) && f(null, ...i)
      })
    }
  }), d
}
export {
  g as b
};