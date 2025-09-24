import {
  j as r,
  i as h,
  as as u,
  h as a,
  W as y,
  ak as b,
  a9 as f,
  V as i,
  O as o,
  o as s,
  P as _
} from "./BI_jE5ye.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "276968e1d17fc8ec4f0f441c096845bbc4668125"
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
    for (d = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== y || e.data !== b);) e = f(e);
    e === null ? i(!1) : e = o(f(e))
  }
  a || (t = document.head.appendChild(r()));
  try {
    h(() => n(t), u)
  } finally {
    l && (i(!0), e = s, o(d))
  }
}
export {
  p as h, g as r
};