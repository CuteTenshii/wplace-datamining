import {
  j as r,
  i as h,
  aD as u,
  h as d,
  a6 as c,
  aw as y,
  ak as i,
  a5 as f,
  _ as o,
  o as s,
  a0 as _
} from "./D28PF2-5.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "a8e86ea7c5dac5456cbf3520a3090956fd737b8f"
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
    for (n = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== c || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    h(() => a(t), u)
  } finally {
    l && (f(!0), e = s, o(n))
  }
}
export {
  p as h, g as r
};