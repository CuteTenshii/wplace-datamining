import {
  g as r
} from "./Ny3ijo9y.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e56bf90e2bb69bf6dd1cbc6ce0cb1afca52af8e3"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "4e41f913-b9c0-4fd2-8f25-86202f1bb7c6", e._sentryDebugIdIdentifier = "sentry-dbid-4e41f913-b9c0-4fd2-8f25-86202f1bb7c6")
  })()
} catch {}
const d = () => "Banned",
  f = () => "Banido",
  o = () => "已封禁",
  a = () => "Gebannt",
  u = () => "Baneado",
  b = () => "Banni",
  i = () => "Bannato",
  c = () => "BAN済み",
  s = () => "Zbanowany",
  l = () => "Забанен",
  p = () => "Заблоковано",
  _ = () => "Đã bị cấm",
  g = (e = {}, t = {}) => {
    const n = t.locale ?? r();
    return n === "en" ? d() : n === "pt" ? f() : n === "ch" ? o() : n === "de" ? a() : n === "es" ? u() : n === "fr" ? b() : n === "it" ? i() : n === "jp" ? c() : n === "pl" ? s() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as b
};