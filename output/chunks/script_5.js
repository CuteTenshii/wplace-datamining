import {
  j as r,
  i as u,
  au as h,
  h as d,
  P as c,
  am as y,
  Q as i,
  a4 as f,
  V as o,
  o as s,
  X as _
} from "./BWEr1aAe.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "052f352a026d022e3e4fc4fdcb3f4a54614f0cb2"
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
    for (n = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== c || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    u(() => a(t), h)
  } finally {
    l && (f(!0), e = s, o(n))
  }
}
export {
  p as h, g as r
};