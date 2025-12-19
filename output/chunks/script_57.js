import {
  g as t
} from "./Doj4Osb_.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "1fc63189bd875d45532225bb2fa0d0f149510e94"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "484aa75f-fcab-41a2-9e77-87c3b236cbd0", r._sentryDebugIdIdentifier = "sentry-dbid-484aa75f-fcab-41a2-9e77-87c3b236cbd0")
  })()
} catch {}
const f = () => "Confirm",
  o = () => "Confirmar",
  i = () => "确认",
  c = () => "Bestätigen",
  u = () => "Confirmar",
  s = () => "Confirmer",
  d = () => "Conferma",
  a = () => "確認",
  l = () => "Potwierdź",
  b = () => "Подтвердить",
  m = () => "Підтвердити",
  p = () => "Xác nhận",
  g = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? f() : n === "pt" ? o() : n === "ch" ? i() : n === "de" ? c() : n === "es" ? u() : n === "fr" ? s() : n === "it" ? d() : n === "jp" ? a() : n === "pl" ? l() : n === "ru" ? b() : n === "uk" ? m() : p()
  };
export {
  g as c
};