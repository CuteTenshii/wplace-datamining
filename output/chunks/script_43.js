import {
  g as t
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
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "390ea0b0-ec3a-494a-b5f8-b67a0e2ce59e", e._sentryDebugIdIdentifier = "sentry-dbid-390ea0b0-ec3a-494a-b5f8-b67a0e2ce59e")
  })()
} catch {}
const l = () => "Save",
  o = () => "Salvar",
  y = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? l() : o(),
  s = () => "Members",
  a = () => "Membros",
  _ = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? s() : a(),
  c = () => "Player",
  i = () => "Jogador",
  g = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? c() : i(),
  u = () => "Last pixel",
  f = () => "Último pixel",
  m = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? u() : f(),
  b = () => "Visit",
  d = () => "Visitar",
  v = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? b() : d();
export {
  m as l, _ as m, g as p, y as s, v
};