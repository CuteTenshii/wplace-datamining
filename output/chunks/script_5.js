import {
  j as r,
  i as u,
  au as h,
  h as n,
  P as y,
  am as c,
  Q as i,
  a4 as o,
  V as f,
  o as s,
  X as _
} from "./nXP0Sia0.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "22dd6d20080aececfaae9b3120dfb71899337f43"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new a.Error().stack;
    d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "10c02039-2433-46da-ba57-81cae6413430", a._sentryDebugIdIdentifier = "sentry-dbid-10c02039-2433-46da-ba57-81cae6413430")
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
    for (d = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== y || e.data !== c);) e = i(e);
    e === null ? o(!1) : e = f(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    u(() => a(t), h)
  } finally {
    l && (o(!0), e = s, f(d))
  }
}
export {
  p as h, g as r
};