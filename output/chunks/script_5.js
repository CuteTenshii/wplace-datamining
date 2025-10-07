import {
  j as r,
  i as h,
  az as u,
  h as n,
  X as c,
  ar as y,
  Y as f,
  a9 as i,
  a1 as o,
  o as s,
  a3 as _
} from "./CwbVIH7w.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "abd976f8f8e90d32df6a1b04404d40d50ecf5fd4"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new a.Error().stack;
    d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "8af4a2e5-cec5-4c74-bbd4-a359705f5625", a._sentryDebugIdIdentifier = "sentry-dbid-8af4a2e5-cec5-4c74-bbd4-a359705f5625")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(a) {
  let d = null,
    l = n;
  var t;
  if (n) {
    for (d = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== c || e.data !== y);) e = f(e);
    e === null ? i(!1) : e = o(f(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    h(() => a(t), u)
  } finally {
    l && (i(!0), e = s, o(d))
  }
}
export {
  p as h, g as r
};