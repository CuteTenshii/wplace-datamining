import {
  j as r,
  i as c,
  as as h,
  h as a,
  W as u,
  ak as y,
  a9 as i,
  V as f,
  O as o,
  o as s,
  P as _
} from "./D6XPBeZs.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "ed542c83f3200bdd2dcdd4a1cf4ac45a32651d00"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new d.Error().stack;
    n && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[n] = "04e6247d-23cd-4443-af8c-4aec092521c8", d._sentryDebugIdIdentifier = "sentry-dbid-04e6247d-23cd-4443-af8c-4aec092521c8")
  })()
} catch {}
let e;

function b() {
  e = void 0
}

function p(d) {
  let n = null,
    l = a;
  var t;
  if (a) {
    for (n = s, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== u || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = o(i(e))
  }
  a || (t = document.head.appendChild(r()));
  try {
    c(() => d(t), h)
  } finally {
    l && (f(!0), e = s, o(n))
  }
}
export {
  p as h, b as r
};