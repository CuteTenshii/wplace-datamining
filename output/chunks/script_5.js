import {
  j as r,
  i as c,
  aD as h,
  h as d,
  a6 as u,
  aw as b,
  ak as i,
  a5 as o,
  _ as f,
  o as s,
  a0 as y
} from "./Vo-uc5TQ.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "e1bb3bb6ac619eae9d90b3c0ac59135bee8cefab"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "1bc688f1-4994-4256-92ae-99d151e49c79", a._sentryDebugIdIdentifier = "sentry-dbid-1bc688f1-4994-4256-92ae-99d151e49c79")
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
    for (n = s, e === void 0 && (e = y(document.head)); e !== null && (e.nodeType !== u || e.data !== b);) e = i(e);
    e === null ? o(!1) : e = f(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    c(() => a(t), h)
  } finally {
    l && (o(!0), e = s, f(n))
  }
}
export {
  p as h, g as r
};