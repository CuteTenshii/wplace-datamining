import {
  g as t
} from "./BHEqZqXQ.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "c82b8b5d8deacdc21b4154b9417a43b8fc75f478"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "eb801445-f1e6-4990-b03b-4177cb39b0e4", e._sentryDebugIdIdentifier = "sentry-dbid-eb801445-f1e6-4990-b03b-4177cb39b0e4")
  } catch {}
})();
const b = () => "Banned",
  d = () => "Banido",
  a = () => "已封禁",
  u = () => "Gebannt",
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
    return n === "en" ? b() : n === "pt" ? d() : n === "ch" ? a() : n === "de" ? u() : n === "es" ? o() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? c() : n === "pl" ? f() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  g as b
};