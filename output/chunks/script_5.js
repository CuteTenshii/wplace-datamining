import {
  j as r,
  i as b,
  as as h,
  h as n,
  W as u,
  ak as y,
  a9 as i,
  V as f,
  O as o,
  o as s,
  P as _
} from "./DlWygu_S.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "48232197bdcdfc2a880dd0de2ffd5bc2075b51d0"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new d.Error().stack;
    a && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[a] = "c87ebbd6-600e-42e5-a22a-65601babbfa9", d._sentryDebugIdIdentifier = "sentry-dbid-c87ebbd6-600e-42e5-a22a-65601babbfa9")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(d) {
  let a = null,
    l = n;
  var t;
  if (n) {
    for (a = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    b(() => d(t), h)
  } finally {
    l && (f(!0), e = s, o(a))
  }
}
export {
  p as h, g as r
};