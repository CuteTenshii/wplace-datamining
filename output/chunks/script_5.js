import {
  j as r,
  i as h,
  aD as u,
  h as n,
  a6 as c,
  aw as y,
  ak as i,
  a5 as f,
  _ as o,
  o as s,
  a0 as _
} from "./CYjwBiB9.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "216ad21ec8568455da3c6d18d6f039f12382ac60"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new a.Error().stack;
    d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "1bc688f1-4994-4256-92ae-99d151e49c79", a._sentryDebugIdIdentifier = "sentry-dbid-1bc688f1-4994-4256-92ae-99d151e49c79")
  })()
} catch {}
let e;

function b() {
  e = void 0
}

function p(a) {
  let d = null,
    l = n;
  var t;
  if (n) {
    for (d = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== c || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    h(() => a(t), u)
  } finally {
    l && (f(!0), e = s, o(d))
  }
}
export {
  p as h, b as r
};