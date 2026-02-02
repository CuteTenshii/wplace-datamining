import {
  g as r
} from "./DSNL03G2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "29e4431f574f09d587efe1de5f4cdc3c0249ff76"
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
  o = () => "Banido",
  a = () => "已封禁",
  f = () => "Gebannt",
  u = () => "Baneado",
  i = () => "Banni",
  b = () => "Bannato",
  s = () => "BAN済み",
  c = () => "Zbanowany",
  l = () => "Забанен",
  p = () => "Заблоковано",
  _ = () => "Đã bị cấm",
  g = (e = {}, t = {}) => {
    const n = t.locale ?? r();
    return n === "en" ? d() : n === "pt" ? o() : n === "ch" ? a() : n === "de" ? f() : n === "es" ? u() : n === "fr" ? i() : n === "it" ? b() : n === "jp" ? s() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as b
};