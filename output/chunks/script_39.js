import {
  g as t
} from "./DwU20SJL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "469a7b97473ab29d501541611648ac6bd4beba7b"
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
  i = () => "Player",
  c = () => "Jogador",
  g = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? i() : c(),
  u = () => "Last pixel",
  d = () => "Último pixel",
  m = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? u() : d(),
  f = () => "Visit",
  b = () => "Visitar",
  v = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? f() : b();
export {
  m as l, _ as m, g as p, y as s, v
};