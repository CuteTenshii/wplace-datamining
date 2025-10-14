import {
  j as r,
  i as c,
  az as h,
  h as n,
  X as u,
  ar as y,
  Y as i,
  a9 as f,
  a1 as o,
  o as s,
  a3 as _
} from "./BhJstTAi.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "93ce353ea66c24fd9b67d84d4d5dac764dc78ea8"
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
    for (d = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    c(() => a(t), h)
  } finally {
    l && (f(!0), e = s, o(d))
  }
}
export {
  p as h, g as r
};