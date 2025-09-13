import {
  j as r,
  i as b,
  as as h,
  h as n,
  W as u,
  ak as y,
  a9 as i,
  V as o,
  O as s,
  o as f,
  P as c
} from "./BfyPe_e4.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "192dcd45d3adb98b0c3a7a5b0a35fc5bc1b8aa18"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new a.Error().stack;
    d && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[d] = "c87ebbd6-600e-42e5-a22a-65601babbfa9", a._sentryDebugIdIdentifier = "sentry-dbid-c87ebbd6-600e-42e5-a22a-65601babbfa9")
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
    for (d = f, e === void 0 && (e = c(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    b(() => a(t), h)
  } finally {
    l && (o(!0), e = f, s(d))
  }
}
export {
  p as h, g as r
};