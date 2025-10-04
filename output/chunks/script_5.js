import {
  j as r,
  i as u,
  au as h,
  h as d,
  P as c,
  am as y,
  Q as i,
  a4 as o,
  V as s,
  o as l,
  X as _
} from "./DX6AFU53.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "05ce49009207a0735deeeb4c7a853abc987d7d99"
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
    f = d;
  var t;
  if (d) {
    for (n = l, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== c || e.data !== y);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    u(() => a(t), h)
  } finally {
    f && (o(!0), e = l, s(n))
  }
}
export {
  p as h, g as r
};