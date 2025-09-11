import {
  j as r,
  i as b,
  as as h,
  h as d,
  W as u,
  ak as y,
  a9 as i,
  V as f,
  O as o,
  o as s,
  P as _
} from "./li5wq6e0.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "f261223d088ed61b87361f00600c7fcc32afef6a"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new a.Error().stack;
    n && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[n] = "c87ebbd6-600e-42e5-a22a-65601babbfa9", a._sentryDebugIdIdentifier = "sentry-dbid-c87ebbd6-600e-42e5-a22a-65601babbfa9")
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
    for (n = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  d || (t = document.head.appendChild(r()));
  try {
    b(() => a(t), h)
  } finally {
    l && (f(!0), e = s, o(n))
  }
}
export {
  p as h, g as r
};