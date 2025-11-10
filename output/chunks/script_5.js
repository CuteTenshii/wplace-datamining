import {
  j as r,
  i as b,
  aD as h,
  h as d,
  a6 as u,
  aw as y,
  ak as i,
  a5 as o,
  _ as s,
  o as f,
  a0 as _
} from "./DEdiZ67Z.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "469a7b97473ab29d501541611648ac6bd4beba7b"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "25a91a0e-6f8e-4097-9aa0-3b7b746e54e1", a._sentryDebugIdIdentifier = "sentry-dbid-25a91a0e-6f8e-4097-9aa0-3b7b746e54e1")
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
    for (n = f, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
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