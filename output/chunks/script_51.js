import {
  g as t
} from "./-EY-P68S.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "28330452-4c28-42a6-9da5-ea3f247cb1a8", e._sentryDebugIdIdentifier = "sentry-dbid-28330452-4c28-42a6-9da5-ea3f247cb1a8")
  } catch {}
})();
const a = () => "Banned",
  d = () => "Banido",
  u = () => "已封禁",
  o = () => "Gebannt",
  f = () => "Baneado",
  s = () => "Banni",
  c = () => "Bannato",
  i = () => "BAN済み",
  b = () => "Zbanowany",
  l = () => "Забанен",
  _ = () => "Заблоковано",
  p = () => "Đã bị cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? a() : n === "pt" ? d() : n === "ch" ? u() : n === "de" ? o() : n === "es" ? f() : n === "fr" ? s() : n === "it" ? c() : n === "jp" ? i() : n === "pl" ? b() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  g as b
};