import {
  g as t
} from "./DADvmwwi.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "906017252e1c5d4ea3d1148202cf14a58456747a"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "eb801445-f1e6-4990-b03b-4177cb39b0e4", e._sentryDebugIdIdentifier = "sentry-dbid-eb801445-f1e6-4990-b03b-4177cb39b0e4")
  } catch {}
})();
const a = () => "Banned",
  d = () => "Banido",
  u = () => "已封禁",
  b = () => "Gebannt",
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
    return n === "en" ? a() : n === "pt" ? d() : n === "ch" ? u() : n === "de" ? b() : n === "es" ? o() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? f() : n === "pl" ? c() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  g as b
};