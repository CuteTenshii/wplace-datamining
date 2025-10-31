import {
  l as r,
  k as u,
  aD as b,
  i as n,
  a6 as c,
  aw as h,
  ak as i,
  a5 as f,
  _ as l,
  v as o,
  a0 as y
} from "./Ceyo7U-X.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "1eec49a8880aaf0322f1c231fa7de26d6c5b6e23"
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
    for (d = o, e === void 0 && (e = y(document.head)); e !== null && (e.nodeType !== c || e.data !== h);) e = i(e);
    e === null ? f(!1) : e = l(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    u(() => a(t), b)
  } finally {
    s && (f(!0), e = o, l(d))
  }
}
export {
  p as h, g as r
};