import {
  g as t
} from "./GKUa23OF.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ff343a05e6db78c3f87c013111bf250a2c453aa7"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "69874a98-ef8e-4d65-977b-2bc20b22959f", e._sentryDebugIdIdentifier = "sentry-dbid-69874a98-ef8e-4d65-977b-2bc20b22959f")
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