import {
  j as r,
  i as b,
  as as h,
  h as a,
  W as u,
  ak as y,
  a9 as f,
  V as i,
  O as o,
  o as s,
  P as _
} from "./DUey02Nl.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "3c9334ae758047b148030b2b1b11409cfc37ff31"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new n.Error().stack;
    d && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[d] = "225867f5-5320-4d27-ab51-ebf6afe9bd58", n._sentryDebugIdIdentifier = "sentry-dbid-225867f5-5320-4d27-ab51-ebf6afe9bd58")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(n) {
  let d = null,
    l = a;
  var t;
  if (a) {
    for (d = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = f(e);
    e === null ? i(!1) : e = o(f(e))
  }
  a || (t = document.head.appendChild(r()));
  try {
    b(() => n(t), h)
  } finally {
    l && (i(!0), e = s, o(d))
  }
}
export {
  p as h, g as r
};