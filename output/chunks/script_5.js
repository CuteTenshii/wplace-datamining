import {
  j as r,
  i as h,
  as as u,
  h as d,
  W as y,
  ak as b,
  a9 as i,
  V as f,
  O as o,
  o as s,
  P as _
} from "./DHJsk1zj.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "825bee11b3c7e8e1af0343e9a8e19271ca51e2c2"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new n.Error().stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "225867f5-5320-4d27-ab51-ebf6afe9bd58", n._sentryDebugIdIdentifier = "sentry-dbid-225867f5-5320-4d27-ab51-ebf6afe9bd58")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(n) {
  let a = null,
    l = d;
  var t;
  if (d) {
    for (a = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== y || e.data !== b);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    h(() => n(t), u)
  } finally {
    l && (f(!0), e = s, o(a))
  }
}
export {
  p as h, g as r
};