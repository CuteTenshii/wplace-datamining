import {
  j as r,
  i as c,
  au as u,
  h as d,
  P as h,
  am as y,
  Q as i,
  a4 as o,
  V as s,
  o as f,
  X as _
} from "./C7dcjzId.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "d8fe2b59c656bd9f6dccc34a4ac724cc1c260861"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "10c02039-2433-46da-ba57-81cae6413430", a._sentryDebugIdIdentifier = "sentry-dbid-10c02039-2433-46da-ba57-81cae6413430")
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
    for (n = f, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== h || e.data !== y);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    c(() => a(t), u)
  } finally {
    l && (o(!0), e = f, s(n))
  }
}
export {
  p as h, g as r
};