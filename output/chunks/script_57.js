import {
  g as t
} from "./BZGVaLJf.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "e0127cf3e7a9cd170d72434c8831b6836f9b0e1e"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "eb801445-f1e6-4990-b03b-4177cb39b0e4", e._sentryDebugIdIdentifier = "sentry-dbid-eb801445-f1e6-4990-b03b-4177cb39b0e4")
  } catch {}
})();
const b = () => "Banned",
  d = () => "Banido",
  u = () => "已封禁",
  a = () => "Gebannt",
  o = () => "Baneado",
  s = () => "Banni",
  i = () => "Bannato",
  f = () => "BAN済み",
  c = () => "Zbanowany",
  l = () => "Забанен",
  _ = () => "Заблоковано",
  p = () => "Đã bị cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? b() : n === "pt" ? d() : n === "ch" ? u() : n === "de" ? a() : n === "es" ? o() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? f() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  g as b
};