import {
  g as n
} from "./Dn1N4dmO.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2a38764e420fdb01cdb08c4f31f9aa71df376c33"
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
  d = () => "Users timeouted successfully",
  r = () => "Usuários suspensos com sucesso",
  a = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? d() : r();
export {
  a,
  l as u
};