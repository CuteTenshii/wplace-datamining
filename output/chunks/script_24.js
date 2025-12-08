import {
  s as t,
  p as n
} from "./sGPy_2Q0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "38bb15d6890b2160becfb07b4396631f8d785598"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      d = new e.Error().stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "3b12051d-72db-4c0d-9f43-397a33ec3695", e._sentryDebugIdIdentifier = "sentry-dbid-3b12051d-72db-4c0d-9f43-397a33ec3695")
  })()
} catch {}
const o = {
  get error() {
    return n.error
  },
  get status() {
    return n.status
  },
  get url() {
    return n.url
  }
};
t.updated.check;
const s = o;
export {
  s as p
};