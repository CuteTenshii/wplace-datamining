import {
  j as r,
  i as h,
  as as u,
  h as d,
  U as y,
  ak as _,
  a7 as i,
  T as f,
  N as o,
  o as s,
  O as b
} from "./DXwQ_faQ.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "dafbc8967eb1989b1fe82a14eecd9a7bc2c33606"
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
    for (a = s, e === void 0 && (e = b(document.head)); e !== null && (e.nodeType !== y || e.data !== _);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    h(() => n(t), u)
  } finally {
    l && (f(!0), e = s, o(a))
  }
}
export {
  p as h, g as r
};