import {
  g as t
} from "./CItBVTel.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "19e8b1e1f621a77f893c0ebf0e975e4ec873201a"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3770ee57-a75e-4999-9e8e-08e2e62e5012", e._sentryDebugIdIdentifier = "sentry-dbid-3770ee57-a75e-4999-9e8e-08e2e62e5012")
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
  f = () => "Último pixel",
  m = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? u() : f(),
  d = () => "Visit",
  p = () => "Visitar",
  v = (e = {}, n = {}) => (n.locale ?? t()) === "en" ? d() : p();
export {
  m as l, _ as m, g as p, y as s, v
};