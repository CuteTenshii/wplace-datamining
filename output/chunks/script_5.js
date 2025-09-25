import {
  j as r,
  i as h,
  as as u,
  h as n,
  W as y,
  ak as _,
  a9 as i,
  V as o,
  O as s,
  o as l,
  P as b
} from "./C0IvGZ4J.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "99d09c0a99d21d08ae7e452ed085de091ad1bef9"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new a.Error().stack;
    d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "48e8c989-b08a-439a-98b9-6d268a42a85e", a._sentryDebugIdIdentifier = "sentry-dbid-48e8c989-b08a-439a-98b9-6d268a42a85e")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(a) {
  let d = null,
    f = n;
  var t;
  if (n) {
    for (d = l, e === void 0 && (e = b(document.head)); e !== null && (e.nodeType !== y || e.data !== _);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    h(() => a(t), u)
  } finally {
    f && (o(!0), e = l, s(d))
  }
}
export {
  p as h, g as r
};