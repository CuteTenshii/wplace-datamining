import {
  g as t
} from "./Dfvc1QYL.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "98d1dff4f9f651349c3d8e3f73a4b0b872bc384a"
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
  d = () => "Visit",
  p = () => "Visitar",
  v = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? d() : p();
export {
  m as l, _ as m, g as p, y as s, v
};