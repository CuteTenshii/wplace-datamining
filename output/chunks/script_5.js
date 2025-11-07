import {
  j as r,
  i as h,
  aD as u,
  h as d,
  a6 as y,
  aw as _,
  ak as i,
  a5 as o,
  _ as s,
  o as f,
  a0 as b
} from "./CoAY_RIV.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "a684b76bda26a353b92d069a016aee15159248aa"
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

function c() {
  e = void 0
}

function p(a) {
  let n = null,
    l = d;
  var t;
  if (d) {
    for (n = f, e === void 0 && (e = b(document.head)); e !== null && (e.nodeType !== y || e.data !== _);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    h(() => a(t), u)
  } finally {
    l && (o(!0), e = f, s(n))
  }
}
export {
  p as h, c as r
};