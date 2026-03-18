import {
  g as t
} from "./CcrZu3Ih.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "5075ea86ba38314c7942ca2e67d3e2ff3d377749"
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
  i = () => "Banni",
  c = () => "Bannato",
  f = () => "BAN済み",
  b = () => "Zbanowany",
  l = () => "Забанен",
  _ = () => "Заблоковано",
  p = () => "Đã bị cấm",
  g = (e = {}, r = {}) => {
    const n = r.locale ?? t();
    return n === "en" ? a() : n === "pt" ? d() : n === "ch" ? u() : n === "de" ? o() : n === "es" ? s() : n === "fr" ? i() : n === "it" ? c() : n === "jp" ? f() : n === "pl" ? b() : n === "ru" ? l() : n === "uk" ? _() : p()
  };
export {
  g as b
};