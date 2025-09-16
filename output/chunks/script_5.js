import {
  j as r,
  i as c,
  as as h,
  h as a,
  W as u,
  ak as y,
  a9 as i,
  V as f,
  O as o,
  o as s,
  P as _
} from "./BhjnkBaE.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "ab54e7d2bb082741522faef467264167f3245873"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new n.Error().stack;
    d && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[d] = "04e6247d-23cd-4443-af8c-4aec092521c8", n._sentryDebugIdIdentifier = "sentry-dbid-04e6247d-23cd-4443-af8c-4aec092521c8")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(n) {
  let d = null,
    l = a;
  var t;
  if (a) {
    for (d = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  a || (t = document.head.appendChild(r()));
  try {
    c(() => n(t), h)
  } finally {
    l && (f(!0), e = s, o(d))
  }
}
export {
  p as h, g as r
};