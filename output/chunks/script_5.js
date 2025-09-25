import {
  j as r,
  i as h,
  as as u,
  h as n,
  W as y,
  ak as _,
  a9 as i,
  V as f,
  O as o,
  o as s,
  P as c
} from "./C9Y3lpV-.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "7ed500f4877d9522a36ae9e4cb9ffdc698db3fc1"
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
    l = n;
  var t;
  if (n) {
    for (d = s, e === void 0 && (e = c(document.head)); e !== null && (e.nodeType !== y || e.data !== _);) e = i(e);
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
  p as h, g as r
};