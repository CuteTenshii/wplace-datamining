import {
  g as n
} from "./BhZARl1E.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dcafbf70eeb3b56ec7077bb04087bc09c7e58c55"
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
  u = () => "Usuários banidos com sucesso",
  f = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? t() : u(),
  d = () => "Users timeouted successfully",
  r = () => "Usuários suspensos com sucesso",
  l = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? d() : r();
export {
  l as a, f as u
};