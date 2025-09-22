import {
  j as r,
  i as h,
  as as u,
  h as d,
  W as y,
  ak as _,
  a9 as f,
  V as i,
  O as o,
  o as s,
  P as b
} from "./CkE8vTi-.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "224624400a67b064cf33057a07336c317101aecf"
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
    for (a = s, e === void 0 && (e = b(document.head)); e !== null && (e.nodeType !== y || e.data !== _);) e = f(e);
    e === null ? i(!1) : e = o(f(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    h(() => n(t), u)
  } finally {
    l && (i(!0), e = s, o(a))
  }
}
export {
  p as h, g as r
};