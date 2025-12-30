import {
  g as r
} from "./B1vEyi0i.js";
(function() {
  try {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    e.SENTRY_RELEASE = {
      id: "f3dcc3e771086c0f63d8ece84cd728044b2a0f0d"
    }
  } catch {}
})();
try {
  (function() {
    var e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "33368a2a-6020-4621-9d20-2f84f1fde1d2", e._sentryDebugIdIdentifier = "sentry-dbid-33368a2a-6020-4621-9d20-2f84f1fde1d2")
  })()
} catch {}
const d = () => "Banned",
  o = () => "Banido",
  a = () => "已封禁",
  f = () => "Gebannt",
  u = () => "Baneado",
  i = () => "Banni",
  s = () => "Bannato",
  c = () => "BAN済み",
  b = () => "Zbanowany",
  l = () => "Забанен",
  p = () => "Заблоковано",
  _ = () => "Đã bị cấm",
  g = (e = {}, t = {}) => {
    const n = t.locale ?? r();
    return n === "en" ? d() : n === "pt" ? o() : n === "ch" ? a() : n === "de" ? f() : n === "es" ? u() : n === "fr" ? i() : n === "it" ? s() : n === "jp" ? c() : n === "pl" ? b() : n === "ru" ? l() : n === "uk" ? p() : _()
  };
export {
  g as b
};