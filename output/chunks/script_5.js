import {
  l as r,
  k as b,
  aD as u,
  i as n,
  a6 as h,
  aw as y,
  ak as i,
  a5 as f,
  _ as l,
  v as o,
  a0 as _
} from "./WvGh61NJ.js";
(function() {
  try {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    d.SENTRY_RELEASE = {
      id: "dd4f8190f88bd342b0302e9b73d1fd999bcdb862"
    }
  } catch {}
})();
try {
  (function() {
    var d = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      a = new d.Error().stack;
    a && (d._sentryDebugIds = d._sentryDebugIds || {}, d._sentryDebugIds[a] = "bd39fda7-be76-42cd-947b-084a0011abc0", d._sentryDebugIdIdentifier = "sentry-dbid-bd39fda7-be76-42cd-947b-084a0011abc0")
  })()
} catch {}
let e;

function g() {
  e = void 0
}

function p(d) {
  let a = null,
    s = n;
  var t;
  if (n) {
    for (a = o, e === void 0 && (e = _(document.head)); e !== null && (e.nodeType !== h || e.data !== y);) e = i(e);
    e === null ? f(!1) : e = l(i(e))
  }
  n || (t = document.head.appendChild(r()));
  try {
    b(() => d(t), u)
  } finally {
    s && (f(!0), e = o, l(a))
  }
}
export {
  p as h, g as r
};