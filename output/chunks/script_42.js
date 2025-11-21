import {
  g as n
} from "./QpTCyiP3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d992b625daae7fbeceb4c3bf7e8ebe3eb30a19f"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "99c76fb0-42a8-4961-809f-fe44a5bd6e78", e._sentryDebugIdIdentifier = "sentry-dbid-99c76fb0-42a8-4961-809f-fe44a5bd6e78")
  })()
} catch {}
const t = () => "Users banned successfully",
  u = () => "Usuários banidos com sucesso",
  l = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? t() : u(),
  r = () => "Users timeouted successfully",
  d = () => "Usuários suspensos com sucesso",
  a = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? r() : d();
export {
  a,
  l as u
};