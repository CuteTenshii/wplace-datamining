import {
  g as t
} from "./Bjgbkumz.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "169eae4653f57d833d0e072bc2f6b253b1f72531"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "df113091-8f27-4e53-adbc-5b0f3f54fb04", r._sentryDebugIdIdentifier = "sentry-dbid-df113091-8f27-4e53-adbc-5b0f3f54fb04")
  })()
} catch {}
const f = () => "Confirm",
  o = () => "Confirmar",
  i = () => "确认",
  c = () => "Bestätigen",
  u = () => "Confirmar",
  d = () => "Confirmer",
  s = () => "Conferma",
  l = () => "確認",
  a = () => "Potwierdź",
  b = () => "Подтвердить",
  m = () => "Підтвердити",
  p = () => "Xác nhận",
  g = (r = {}, e = {}) => {
    const n = e.locale ?? t();
    return n === "en" ? f() : n === "pt" ? o() : n === "ch" ? i() : n === "de" ? c() : n === "es" ? u() : n === "fr" ? d() : n === "it" ? s() : n === "jp" ? l() : n === "pl" ? a() : n === "ru" ? b() : n === "uk" ? m() : p()
  };
export {
  g as c
};