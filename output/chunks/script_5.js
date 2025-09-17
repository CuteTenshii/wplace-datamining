import {
  j as r,
  i as b,
  as as h,
  h as a,
  W as u,
  ak as y,
  a9 as f,
  V as i,
  O as o,
  o as s,
  P as _
} from "./VSFlbBSH.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "bbdb65ab440efc5218cf5cda66e92d0206f61703"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new d.Error().stack;
    n && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[n] = "225867f5-5320-4d27-ab51-ebf6afe9bd58", d._sentryDebugIdIdentifier = "sentry-dbid-225867f5-5320-4d27-ab51-ebf6afe9bd58")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(d) {
  let n = null,
    l = a;
  var t;
  if (a) {
    for (n = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = f(e);
    e === null ? i(!1) : e = o(f(e))
  }
  a || (t = document.head.appendChild(r()));
  try {
    b(() => d(t), h)
  } finally {
    l && (i(!0), e = s, o(n))
  }
}
export {
  p as h, g as r
};