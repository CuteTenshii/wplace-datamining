import {
  g as r
} from "./FJFkb2i2.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dfb4bddd9fb2b4748eaf19466331b7b547c362b7"
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
  b = () => "Gebannt",
  u = () => "Baneado",
  a = () => "Banni",
  i = () => "Bannato",
  s = () => "BAN済み",
  c = () => "Zbanowany",
  l = () => "Забанен",
  p = () => "Заблоковано",
  _ = () => "Đã bị cấm",
  g = (e = {}, t = {}) => {
    const n = t.locale ?? r();
    return n === "en" ? d() : n === "pt" ? f() : n === "ch" ? o() : n === "de" ? b() : n === "es" ? u() : n === "fr" ? a() : n === "it" ? i() : n === "jp" ? s() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as b
};