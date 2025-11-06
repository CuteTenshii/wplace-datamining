import {
  j as r,
  i as h,
  aD as u,
  h as d,
  a6 as y,
  aw as _,
  ak as i,
  a5 as o,
  _ as f,
  o as s,
  a0 as c
} from "./B2p_ornx.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "7467695e43643d993d60a0d9c62083c1cee57cdf"
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
    for (n = s, e === void 0 && (e = c(document.head)); e !== null && (e.nodeType !== y || e.data !== _);) e = i(e);
    e === null ? o(!1) : e = f(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    h(() => a(t), u)
  } finally {
    l && (o(!0), e = s, f(n))
  }
}
export {
  p as h, g as r
};