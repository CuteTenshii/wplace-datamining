import {
  g as t
} from "./CDV-gvd8.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "1bbcc3358655daa550788b301977152f07a3b6b2"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "28330452-4c28-42a6-9da5-ea3f247cb1a8", e._sentryDebugIdIdentifier = "sentry-dbid-28330452-4c28-42a6-9da5-ea3f247cb1a8")
  } catch {}
})();
const a = () => "Banned",
  d = () => "Banido",
  u = () => "已封禁",
  o = () => "Gebannt",
  b = () => "Baneado",
  s = () => "Banni",
  i = () => "Bannato",
  c = () => "BAN済み",
  f = () => "Zbanowany",
  l = () => "Забанен",
  _ = () => "Заблоковано",
  p = () => "Đã bị cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? a() : n === "pt" ? d() : n === "ch" ? u() : n === "de" ? o() : n === "es" ? b() : n === "fr" ? s() : n === "it" ? i() : n === "jp" ? c() : n === "pl" ? f() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  g as b
};