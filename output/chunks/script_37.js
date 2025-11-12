import {
  g as n
} from "./BkjxUA7W.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "15fb4e3d80a4de2b957e29f1299dd0b2bef7a1e3"
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
  l = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? t() : d(),
  u = () => "Users timeouted successfully",
  r = () => "Usuários suspensos com sucesso",
  a = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? u() : r();
export {
  a,
  l as u
};