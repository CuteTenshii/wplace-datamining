import {
  g as t
} from "./CWSLadsn.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "79d1d83bf3d0a0f1d4fd38112e69555e6d7fe1e9"
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
  u = () => "Bestätigen",
  c = () => "Confirmar",
  d = () => "Confirmer",
  s = () => "Conferma",
  l = () => "確認",
  a = () => "Potwierdź",
  m = () => "Подтвердить",
  p = () => "Підтвердити",
  _ = () => "Xác nhận",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? f() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? u() : e === "es" ? c() : e === "fr" ? d() : e === "it" ? s() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? m() : e === "uk" ? p() : _()
  };
export {
  g as c
};