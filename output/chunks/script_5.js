import {
  j as r,
  i as b,
  as as h,
  h as d,
  W as u,
  ak as y,
  a9 as i,
  V as o,
  O as s,
  o as f,
  P as c
} from "./CU1IDgoR.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "db50de114564c1615b532cc812ac881318d7283e"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "c87ebbd6-600e-42e5-a22a-65601babbfa9", a._sentryDebugIdIdentifier = "sentry-dbid-c87ebbd6-600e-42e5-a22a-65601babbfa9")
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
    for (n = f, e === void 0 && (e = c(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    b(() => a(t), h)
  } finally {
    l && (o(!0), e = f, s(n))
  }
}
export {
  p as h, g as r
};