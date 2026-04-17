import {
  g as t
} from "./D_SMuPJE.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "cfc28652dbc454b56a914780051d7c5b69184636"
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
  c = () => "BAN済み",
  f = () => "Zbanowany",
  l = () => "Забанен",
  _ = () => "Заблоковано",
  p = () => "Đã bị cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? b() : n === "pt" ? d() : n === "ch" ? u() : n === "de" ? a() : n === "es" ? o() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? c() : n === "pl" ? f() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  g as b
};