import {
  g as t
} from "./F0L6VCAb.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a02c591f9910da893b84f71aa7268f0a0b264cd"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "16d4e9cd-c894-4216-a4cd-b5d754b78a4c", e._sentryDebugIdIdentifier = "sentry-dbid-16d4e9cd-c894-4216-a4cd-b5d754b78a4c")
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
  d = () => "Last pixel",
  u = () => "Último pixel",
  m = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? d() : u(),
  f = () => "Visit",
  p = () => "Visitar",
  v = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? f() : p();
export {
  m as l, _ as m, g as p, y as s, v
};