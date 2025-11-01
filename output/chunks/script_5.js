import {
  l as r,
  k as b,
  aD as u,
  i as n,
  a6 as c,
  aw as h,
  ak as i,
  a5 as f,
  _ as l,
  v as o,
  a0 as y
} from "./NLGz-70w.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "41ce59a02f0ef4fd076afbbc4021177761c67304"
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
    b(() => a(t), u)
  } finally {
    s && (f(!0), e = o, l(d))
  }
}
export {
  p as h, g as r
};