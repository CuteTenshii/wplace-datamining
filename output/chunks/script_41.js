import {
  g as n
} from "./DxqvS5Ji.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "8ca9d5bb8d7e9609a9f3fa05a0fcc401dd1cd4cb"
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
  a = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? u() : r();
export {
  a,
  f as u
};