import {
  j as r,
  i as u,
  au as h,
  h as d,
  P as y,
  am as _,
  Q as i,
  a4 as o,
  V as f,
  o as s,
  X as c
} from "./BONTOiKC.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "485fa57ad20bf45d61bdea250be0ef78a269ac0b"
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
    for (n = s, e === void 0 && (e = c(document.head)); e !== null && (e.nodeType !== y || e.data !== _);) e = i(e);
    e === null ? o(!1) : e = f(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    u(() => a(t), h)
  } finally {
    l && (o(!0), e = s, f(n))
  }
}
export {
  p as h, g as r
};