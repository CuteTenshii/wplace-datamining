import {
  g as t
} from "./DXljTAZ5.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "af4d0c48dcaddf93c9bc56ee907626a523833bd3"
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
  d = () => "Confirmer",
  s = () => "Conferma",
  l = () => "確認",
  a = () => "Potwierdź",
  m = () => "Подтвердить",
  b = () => "Підтвердити",
  p = () => "Xác nhận",
  g = (n = {}, r = {}) => {
    const e = r.locale ?? t();
    return e === "en" ? f() : e === "pt" ? o() : e === "ch" ? i() : e === "de" ? c() : e === "es" ? u() : e === "fr" ? d() : e === "it" ? s() : e === "jp" ? l() : e === "pl" ? a() : e === "ru" ? m() : e === "uk" ? b() : p()
  };
export {
  g as c
};