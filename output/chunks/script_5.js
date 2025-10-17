import {
  j as r,
  i as c,
  az as h,
  h as d,
  X as u,
  ar as y,
  Y as f,
  a9 as i,
  a1 as o,
  o as s,
  a3 as _
} from "./CuEZ6s8g.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "987f325885ec99eb8c0fc190246a664bf2e822ff"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "8af4a2e5-cec5-4c74-bbd4-a359705f5625", a._sentryDebugIdIdentifier = "sentry-dbid-8af4a2e5-cec5-4c74-bbd4-a359705f5625")
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
    for (n = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = f(e);
    e === null ? i(!1) : e = o(f(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    c(() => a(t), h)
  } finally {
    l && (i(!0), e = s, o(n))
  }
}
export {
  p as h, g as r
};