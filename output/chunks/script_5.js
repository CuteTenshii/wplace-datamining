import {
  j as r,
  i as h,
  aD as u,
  h as d,
  a6 as y,
  aw as _,
  ak as i,
  a5 as f,
  _ as o,
  o as s,
  a0 as c
} from "./Ho0vwyOn.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "a99f5b701b35c58895f1634e6901454a76d81d81"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new n.Error().stack;
    a && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[a] = "1bc688f1-4994-4256-92ae-99d151e49c79", n._sentryDebugIdIdentifier = "sentry-dbid-1bc688f1-4994-4256-92ae-99d151e49c79")
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
    for (a = s, e === void 0 && (e = c(document.head)); e !== null && (e.nodeType !== y || e.data !== _);) e = i(e);
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