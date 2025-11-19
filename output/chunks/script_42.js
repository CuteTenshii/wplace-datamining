import {
  g as n
} from "./DJY_xlKf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "41710f7ccc2fafb6890924daac86ac6566913848"
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
  c = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? t() : u(),
  r = () => "Users timeouted successfully",
  d = () => "Usuários suspensos com sucesso",
  f = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? r() : d();
export {
  f as a, c as u
};