import {
  g as n
} from "./BwmEGhSN.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "6d97a8a46c0eab54dca8573924bccbc5e0735b3d"
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
  d = () => "Users timeouted successfully",
  r = () => "Usuários suspensos com sucesso",
  l = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? d() : r();
export {
  l as a, c as u
};