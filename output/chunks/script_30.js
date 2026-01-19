import {
  g as f
} from "./BfjUzAZv.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b47ea042-846a-4bff-ae65-502fe8507758", e._sentryDebugIdIdentifier = "sentry-dbid-b47ea042-846a-4bff-ae65-502fe8507758")
  })()
} catch {}

function t() {
  return f()
}

function d() {
  return `/terms/return${t()==="pt"?"/pt":""}`
}

function o() {
  return `/terms/terms-of-service${t()==="pt"?"/pt":""}`
}
export {
  t as g, d as r, o as t
};