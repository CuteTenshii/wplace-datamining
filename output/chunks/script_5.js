import {
  j as r,
  i as b,
  az as h,
  h as a,
  a2 as u,
  as as y,
  ag as i,
  a1 as o,
  W as s,
  o as f,
  X as _
} from "./Bry4mTdq.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "1464f4d4be7ab2460627d08ee13d2df2a352bcb2"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new d.Error().stack;
    n && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[n] = "00008208-209d-4421-b33e-9abb538d1013", d._sentryDebugIdIdentifier = "sentry-dbid-00008208-209d-4421-b33e-9abb538d1013")
  })()
} catch {}
let e;

function c() {
  e = void 0
}

function p(d) {
  let n = null,
    l = a;
  var t;
  if (a) {
    for (n = f, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  a || (t = document.head.appendChild(r()));
  try {
    b(() => d(t), h)
  } finally {
    l && (o(!0), e = f, s(n))
  }
}
export {
  p as h, c as r
};