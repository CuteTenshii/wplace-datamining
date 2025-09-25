import {
  j as r,
  i as h,
  as as u,
  h as d,
  W as y,
  ak as b,
  a9 as i,
  V as o,
  O as s,
  o as l,
  P as _
} from "./DQc9Bjlo.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "96e7de35a79bbd0971b03a9483bfe62a1a391d64"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "48e8c989-b08a-439a-98b9-6d268a42a85e", a._sentryDebugIdIdentifier = "sentry-dbid-48e8c989-b08a-439a-98b9-6d268a42a85e")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(a) {
  let n = null,
    f = d;
  var t;
  if (d) {
    for (n = l, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== y || e.data !== b);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    h(() => a(t), u)
  } finally {
    f && (o(!0), e = l, s(n))
  }
}
export {
  p as h, g as r
};