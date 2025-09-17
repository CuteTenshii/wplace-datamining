import {
  j as r,
  i as h,
  as as u,
  h as a,
  W as b,
  ak as y,
  a9 as f,
  V as i,
  O as o,
  o as s,
  P as _
} from "./UY5Q__X9.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "c15cd1ace8f581becdea18dd6b1672f67db80587"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new d.Error().stack;
    n && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[n] = "225867f5-5320-4d27-ab51-ebf6afe9bd58", d._sentryDebugIdIdentifier = "sentry-dbid-225867f5-5320-4d27-ab51-ebf6afe9bd58")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(d) {
  let n = null,
    l = a;
  var t;
  if (a) {
    for (n = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== b || e.data !== y);) e = f(e);
    e === null ? i(!1) : e = o(f(e))
  }
  a || (t = document.head.appendChild(r()));
  try {
    h(() => d(t), u)
  } finally {
    l && (i(!0), e = s, o(n))
  }
}
export {
  p as h, g as r
};