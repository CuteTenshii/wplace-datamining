import {
  g as n
} from "./B6AUkjz0.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "2df914dd371fba2112b2cd92c4cdc7ac8c5482fe"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      s = new e.Error().stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "af83a02c-2776-476c-8df3-97f0645238fd", e._sentryDebugIdIdentifier = "sentry-dbid-af83a02c-2776-476c-8df3-97f0645238fd")
  })()
} catch {}
const t = () => "Users banned successfully",
  d = () => "Usuários banidos com sucesso",
  f = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? t() : d(),
  u = () => "Users timeouted successfully",
  r = () => "Usuários suspensos com sucesso",
  l = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? u() : r();
export {
  l as a, f as u
};