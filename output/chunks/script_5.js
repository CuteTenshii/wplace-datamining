import {
  l as r,
  k as c,
  aD as b,
  i as n,
  a6 as u,
  aw as h,
  ak as f,
  a5 as i,
  _ as l,
  v as o,
  a0 as y
} from "./KRt5sQSh.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "fccd346089ef1c0c20bf6dbcc60efaf285af3b07"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new a.Error().stack;
    d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "bd39fda7-be76-42cd-947b-084a0011abc0", a._sentryDebugIdIdentifier = "sentry-dbid-bd39fda7-be76-42cd-947b-084a0011abc0")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(a) {
  let d = null,
    s = n;
  var t;
  if (n) {
    for (d = o, e === void 0 && (e = y(document.head)); e !== null && (e.nodeType !== u || e.data !== h);) e = f(e);
    e === null ? i(!1) : e = l(f(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    c(() => a(t), b)
  } finally {
    s && (i(!0), e = o, l(d))
  }
}
export {
  p as h, g as r
};