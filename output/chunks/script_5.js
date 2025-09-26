import {
  j as r,
  i as h,
  as as u,
  h as n,
  W as y,
  ak as c,
  a9 as i,
  V as o,
  O as s,
  o as f,
  P as _
} from "./BS43lSzs.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "f081a31e50addc038845f96ddcdcac2e385f6a91"
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
    for (d = f, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== y || e.data !== c);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    h(() => a(t), u)
  } finally {
    l && (o(!0), e = f, s(d))
  }
}
export {
  p as h, g as r
};