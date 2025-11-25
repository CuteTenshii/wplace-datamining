import {
  g as t
} from "./Dc6DF1Sc.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ac7618a676a9d262ff8724cf2a3a13f62011007a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3ba2799b-3936-4316-ac22-ccc70c32fb83", e._sentryDebugIdIdentifier = "sentry-dbid-3ba2799b-3936-4316-ac22-ccc70c32fb83")
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
  d = () => "Visit",
  p = () => "Visitar",
  v = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? d() : p();
export {
  m as l, _ as m, g as p, y as s, v
};