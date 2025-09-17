import {
  j as r,
  i as c,
  as as h,
  h as a,
  W as u,
  ak as y,
  a9 as i,
  V as o,
  O as s,
  o as f,
  P as _
} from "./CmkSLWfN.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "7278ed977b90641928943db9499ca73f82620c56"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new d.Error().stack;
    n && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[n] = "04e6247d-23cd-4443-af8c-4aec092521c8", d._sentryDebugIdIdentifier = "sentry-dbid-04e6247d-23cd-4443-af8c-4aec092521c8")
  })()
} catch {}
let e;

function b() {
  e = void 0
}

function p(d) {
  let n = null,
    l = a;
  var t;
  if (a) {
    for (n = f, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  a || (t = document.head.appendChild(r()));
  try {
    c(() => d(t), h)
  } finally {
    l && (o(!0), e = f, s(n))
  }
}
export {
  p as h, b as r
};