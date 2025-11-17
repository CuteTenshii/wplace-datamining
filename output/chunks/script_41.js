import {
  g as n
} from "./B7osW-Zn.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "19f2e5962f03ca04a34d7ee46166821cb4d0ab06"
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
  l = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? t() : u(),
  d = () => "Users timeouted successfully",
  r = () => "Usuários suspensos com sucesso",
  a = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? d() : r();
export {
  a,
  l as u
};