import {
  g as n
} from "./mn44wyAY.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1ec3fee10a39ac222b6aa79fae966fd9b93c3dd3"
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
  a = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? t() : d(),
  u = () => "Users timeouted successfully",
  r = () => "Usuários suspensos com sucesso",
  c = (e = {}, s = {}) => (s.locale ?? n()) === "en" ? u() : r();
export {
  c as a, a as u
};