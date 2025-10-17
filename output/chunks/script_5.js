import {
  j as r,
  i as c,
  az as h,
  h as d,
  a0 as u,
  as as y,
  ae as i,
  _ as f,
  U as o,
  o as s,
  V as _
} from "./DUWZzbWe.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "b1e181cfc86240e13a14599ec441e9d2cad6cdd7"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "fc9a210f-1a5c-4c9b-8e0f-ee8a6c6bc202", a._sentryDebugIdIdentifier = "sentry-dbid-fc9a210f-1a5c-4c9b-8e0f-ee8a6c6bc202")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(a) {
  let n = null,
    l = d;
  var t;
  if (d) {
    for (n = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    c(() => a(t), h)
  } finally {
    l && (f(!0), e = s, o(n))
  }
}
export {
  p as h, g as r
};