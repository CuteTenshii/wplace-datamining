import {
  g as t
} from "./B5qsSgN7.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "13a4af59f5d722706755b32f23a5d4b27cdb64ce"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "28330452-4c28-42a6-9da5-ea3f247cb1a8", e._sentryDebugIdIdentifier = "sentry-dbid-28330452-4c28-42a6-9da5-ea3f247cb1a8")
  } catch {}
})();
const a = () => "Banned",
  d = () => "Banido",
  u = () => "已封禁",
  o = () => "Gebannt",
  s = () => "Baneado",
  b = () => "Banni",
  f = () => "Bannato",
  i = () => "BAN済み",
  c = () => "Zbanowany",
  l = () => "Забанен",
  _ = () => "Заблоковано",
  p = () => "Đã bị cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? a() : n === "pt" ? d() : n === "ch" ? u() : n === "de" ? o() : n === "es" ? s() : n === "fr" ? b() : n === "it" ? f() : n === "jp" ? i() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  g as b
};