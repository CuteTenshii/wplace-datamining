import {
  g as o
} from "./CKM5458v.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1464f4d4be7ab2460627d08ee13d2df2a352bcb2"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8c8eb8a7-e1ce-448c-a9d8-6759dade4a2d", e._sentryDebugIdIdentifier = "sentry-dbid-8c8eb8a7-e1ce-448c-a9d8-6759dade4a2d")
  })()
} catch {}
const d = () => "Select the report reason",
  t = () => "Selecione o motivo da denúncia",
  s = (e = {}, n = {}) => (n.locale ?? o()) === "en" ? d() : t();
export {
  s
};