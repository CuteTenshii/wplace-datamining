import {
  g as t
} from "./CxGAPZJ7.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "aa4c5126665948c178117465fb480b1b818fb90b"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      r = new n.Error().stack;
    r && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[r] = "f1be55e0-ef80-4068-94e4-e5552e62f5d0", n._sentryDebugIdIdentifier = "sentry-dbid-f1be55e0-ef80-4068-94e4-e5552e62f5d0")
  })()
} catch {}
const f = () => "Confirm",
  o = () => "Confirmar",
  i = () => "确认",
  c = () => "Bestätigen",
  u = () => "Confirmar",
  s = () => "Confirmer",
  d = () => "Conferma",
  l = () => "確認",
  a = () => "Potwierdź",
  b = () => "Подтвердить",
  m = () => "Підтвердити",
  p = () => "Xác nhận",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? f() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? c() : e === "es" ? u() : e === "fr" ? s() : e === "it" ? d() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? b() : e === "uk" ? m() : p()
  };
export {
  g as c
};