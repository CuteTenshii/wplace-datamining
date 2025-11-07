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
} from "./WB2K_T_Y.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "80747ca6680cc53dedf6ebd5efc0d97ede3ccece"
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