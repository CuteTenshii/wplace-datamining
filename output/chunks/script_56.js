import {
  g as t
} from "./BQlqcz55.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "dc0186d26e0c2d626ef1b4331d86a985eea98c24"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "eb801445-f1e6-4990-b03b-4177cb39b0e4", e._sentryDebugIdIdentifier = "sentry-dbid-eb801445-f1e6-4990-b03b-4177cb39b0e4")
  } catch {}
})();
const d = () => "Banned",
  a = () => "Banido",
  u = () => "已封禁",
  b = () => "Gebannt",
  o = () => "Baneado",
  s = () => "Banni",
  i = () => "Bannato",
  c = () => "BAN済み",
  f = () => "Zbanowany",
  l = () => "Забанен",
  _ = () => "Заблоковано",
  p = () => "Đã bị cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? d() : n === "pt" ? a() : n === "ch" ? u() : n === "de" ? b() : n === "es" ? o() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? c() : n === "pl" ? f() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  g as b
};