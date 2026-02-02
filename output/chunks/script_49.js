import {
  g as r
} from "./B4ScQ8O8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1be1930440b8b07ce70b7b458d3e953490a5a011"
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
  i = () => "Banni",
  f = () => "Bannato",
  s = () => "BAN済み",
  c = () => "Zbanowany",
  l = () => "Забанен",
  p = () => "Заблоковано",
  _ = () => "Đã bị cấm",
  g = (e = {}, t = {}) => {
    const n = t.locale ?? r();
    return n === "en" ? d() : n === "pt" ? a() : n === "ch" ? o() : n === "de" ? b() : n === "es" ? u() : n === "fr" ? i() : n === "it" ? f() : n === "jp" ? s() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as b
};