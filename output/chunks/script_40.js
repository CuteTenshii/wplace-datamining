import {
  g as r
} from "./JcMV53SJ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5f26df466977fd01d18eb1a4a8743e0ce83f1b4f"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "33368a2a-6020-4621-9d20-2f84f1fde1d2", e._sentryDebugIdIdentifier = "sentry-dbid-33368a2a-6020-4621-9d20-2f84f1fde1d2")
  })()
} catch {}
const d = () => "Banned",
  f = () => "Banido",
  a = () => "已封禁",
  o = () => "Gebannt",
  u = () => "Baneado",
  i = () => "Banni",
  s = () => "Bannato",
  b = () => "BAN済み",
  c = () => "Zbanowany",
  l = () => "Забанен",
  p = () => "Заблоковано",
  _ = () => "Đã bị cấm",
  g = (e = {}, t = {}) => {
    const n = t.locale ?? r();
    return n === "en" ? d() : n === "pt" ? f() : n === "ch" ? a() : n === "de" ? o() : n === "es" ? u() : n === "fr" ? i() : n === "it" ? s() : n === "jp" ? b() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as b
};