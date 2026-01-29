import {
  g as r
} from "./DolGb-m3.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "ee10936229c2fb895ed8cbcf3dab6bc48981481b"
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
    return n === "en" ? d() : n === "pt" ? o() : n === "ch" ? a() : n === "de" ? b() : n === "es" ? u() : n === "fr" ? f() : n === "it" ? i() : n === "jp" ? s() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as b
};