import {
  j as r,
  i as c,
  az as h,
  h as d,
  X as u,
  ar as y,
  Y as i,
  a9 as f,
  a1 as o,
  o as s,
  a3 as _
} from "./D2NUMUd6.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "19e8b1e1f621a77f893c0ebf0e975e4ec873201a"
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