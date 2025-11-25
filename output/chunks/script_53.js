import {
  g as f
} from "./Dc6DF1Sc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ac7618a676a9d262ff8724cf2a3a13f62011007a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c3da3986-2727-41b4-85e7-13fa1662e896", e._sentryDebugIdIdentifier = "sentry-dbid-c3da3986-2727-41b4-85e7-13fa1662e896")
  })()
} catch {}
const t = () => "Refresh",
  o = () => "Atualizar",
  d = (e = {}, n = {}) => (n.locale ?? f()) === "en" ? t() : o();
export {
  d as r
};