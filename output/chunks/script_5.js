import {
  j as r,
  i as h,
  aD as u,
  h as a,
  a6 as y,
  aw as _,
  ak as i,
  a5 as o,
  _ as s,
  o as f,
  a0 as c
} from "./DlUXbix6.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "a284527cbd407023d7d6ce22d7062bdeed40257e"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new d.Error().stack;
    n && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[n] = "1bc688f1-4994-4256-92ae-99d151e49c79", d._sentryDebugIdIdentifier = "sentry-dbid-1bc688f1-4994-4256-92ae-99d151e49c79")
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
    for (n = f, e === void 0 && (e = c(document.head)); e !== null && (e.nodeType !== y || e.data !== _);) e = i(e);
    e === null ? o(!1) : e = s(i(e))
  }
  a || (t = document.head.appendChild(r()));
  try {
    h(() => d(t), u)
  } finally {
    l && (o(!0), e = f, s(n))
  }
}
export {
  p as h, g as r
};