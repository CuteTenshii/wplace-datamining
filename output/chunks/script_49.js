import {
  g as r
} from "./CxGAPZJ7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bce39049-6b42-4b6c-adf5-3d5097a65b7e", e._sentryDebugIdIdentifier = "sentry-dbid-bce39049-6b42-4b6c-adf5-3d5097a65b7e")
  })()
} catch {}
const d = () => "Banned",
  a = () => "Banido",
  o = () => "已封禁",
  b = () => "Gebannt",
  u = () => "Baneado",
  f = () => "Banni",
  i = () => "Bannato",
  s = () => "BAN済み",
  c = () => "Zbanowany",
  l = () => "Забанен",
  p = () => "Заблоковано",
  _ = () => "Đã bị cấm",
  g = (e = {}, t = {}) => {
    const n = t.locale ?? r();
    return n === "en" ? d() : n === "pt" ? a() : n === "ch" ? o() : n === "de" ? b() : n === "es" ? u() : n === "fr" ? f() : n === "it" ? i() : n === "jp" ? s() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as b
};