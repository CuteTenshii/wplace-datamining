import {
  j as r,
  i as h,
  as as u,
  h as d,
  U as y,
  ak as _,
  a7 as f,
  T as i,
  N as o,
  o as s,
  O as b
} from "./Cp2nYQu0.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "fe77e0a32f22395333b3f54fb7a95ef6936c7140"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new n.Error().stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "83634668-25a7-4757-b236-0f768368991f", n._sentryDebugIdIdentifier = "sentry-dbid-83634668-25a7-4757-b236-0f768368991f")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(n) {
  let a = null,
    l = d;
  var t;
  if (d) {
    for (a = s, e === void 0 && (e = b(document.head)); e !== null && (e.nodeType !== y || e.data !== _);) e = f(e);
    e === null ? i(!1) : e = o(f(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    h(() => n(t), u)
  } finally {
    l && (i(!0), e = s, o(a))
  }
}
export {
  p as h, g as r
};