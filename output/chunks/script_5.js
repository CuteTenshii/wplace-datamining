import {
  l as r,
  k as b,
  aD as u,
  i as n,
  a6 as h,
  aw as y,
  ak as i,
  a5 as f,
  _ as l,
  v as o,
  a0 as _
} from "./B5h3_DM3.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "30249c0052a6db2e8885effd6fd4553811e48ab4"
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
    for (d = o, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== h || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = l(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    b(() => a(t), u)
  } finally {
    s && (f(!0), e = o, l(d))
  }
}
export {
  p as h, g as r
};