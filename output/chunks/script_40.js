import {
  g as r
} from "./C6pXxMzr.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "55a4772558e3c5a852121d5e5bd7314ba7efe155"
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
  o = () => "Banido",
  f = () => "已封禁",
  a = () => "Gebannt",
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
    return n === "en" ? d() : n === "pt" ? o() : n === "ch" ? f() : n === "de" ? a() : n === "es" ? u() : n === "fr" ? i() : n === "it" ? b() : n === "jp" ? s() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as b
};