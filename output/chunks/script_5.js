import {
  j as r,
  i as h,
  as as u,
  h as n,
  W as b,
  ak as y,
  a9 as f,
  V as i,
  O as o,
  o as s,
  P as _
} from "./29bc7E1V.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "08e863ad0717da163bc2a8f4fbd2a2e653d7b37d"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new d.Error().stack;
    a && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[a] = "225867f5-5320-4d27-ab51-ebf6afe9bd58", d._sentryDebugIdIdentifier = "sentry-dbid-225867f5-5320-4d27-ab51-ebf6afe9bd58")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(d) {
  let a = null,
    l = n;
  var t;
  if (n) {
    for (a = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== b || e.data !== y);) e = f(e);
    e === null ? i(!1) : e = o(f(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    h(() => d(t), u)
  } finally {
    l && (i(!0), e = s, o(a))
  }
}
export {
  p as h, g as r
};