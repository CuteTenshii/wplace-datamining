import {
  l as r,
  k as u,
  aD as c,
  i as n,
  a6 as h,
  aw as y,
  ak as i,
  a5 as l,
  _ as o,
  v as s,
  a0 as _
} from "./DRybHg5Z.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "52c32908d40da7633c03ed8a85ce90814a387626"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new a.Error().stack;
    d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "bd39fda7-be76-42cd-947b-084a0011abc0", a._sentryDebugIdIdentifier = "sentry-dbid-bd39fda7-be76-42cd-947b-084a0011abc0")
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
    for (d = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== h || e.data !== y);) e = i(e);
    e === null ? l(!1) : e = o(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    u(() => a(t), c)
  } finally {
    f && (l(!0), e = s, o(d))
  }
}
export {
  p as h, g as r
};